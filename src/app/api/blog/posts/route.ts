import { NextRequest, NextResponse } from 'next/server'
import { blogPosts, type InsertBlogPost } from '@shared/schema'
import { db } from '@server/db'
import { desc, eq, and } from 'drizzle-orm'

// Rate limiting store (in production, use Redis)
const rateLimitStore = new Map<string, { count: number, resetTime: number }>()

function checkRateLimit(ip: string, maxRequests: number = 100, windowMs: number = 60000): boolean {
  const now = Date.now()
  const key = ip
  
  const current = rateLimitStore.get(key)
  
  if (!current || current.resetTime < now) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (current.count >= maxRequests) {
    return false
  }
  
  current.count++
  return true
}

// GET /api/blog/posts - Get all blog posts with optional filtering
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const published = searchParams.get('published')
    const category = searchParams.get('category')
    const limit = parseInt(searchParams.get('limit') || '20')
    const offset = parseInt(searchParams.get('offset') || '0')
    
    // Apply rate limiting for public endpoints
    const forwarded = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')
    const ip = forwarded?.split(',')[0] || realIp || 'unknown'
    if (!checkRateLimit(ip, 100)) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
    }

    // Build filters array
    const filters = []
    if (published === 'true') {
      filters.push(eq(blogPosts.isPublished, true))
    }
    if (category) {
      filters.push(eq(blogPosts.category, category))
    }

    // Build and execute query
    let query = db.select().from(blogPosts)
    
    if (filters.length > 0) {
      query = query.where(and(...filters))
    }

    const posts = await query
      .orderBy(desc(blogPosts.createdAt))
      .limit(limit)
      .offset(offset)

    // Add view tracking and read time calculation
    const enrichedPosts = posts.map(post => ({
      ...post,
      readTime: calculateReadTime(post.content),
      excerpt: post.excerpt || generateExcerpt(post.content),
      tags: Array.isArray(post.tags) ? post.tags : []
    }))

    return NextResponse.json(enrichedPosts, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600', // Cache for 5 minutes
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/blog/posts - Create new blog post (admin only)
export async function POST(request: NextRequest) {
  try {
    // Apply strict rate limiting for write operations
    const forwarded = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')
    const ip = forwarded?.split(',')[0] || realIp || 'unknown'
    if (!checkRateLimit(ip, 10, 60000)) { // 10 requests per minute
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
    }

    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['title', 'content', 'author', 'category']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 })
      }
    }

    // Generate slug if not provided
    if (!body.slug) {
      body.slug = generateSlug(body.title)
    }

    // Generate excerpt if not provided
    if (!body.excerpt) {
      body.excerpt = generateExcerpt(body.content)
    }

    // Calculate read time
    body.readTime = calculateReadTime(body.content)

    // Generate SEO fields if not provided
    if (!body.metaTitle) {
      body.metaTitle = body.title
    }
    if (!body.metaDescription) {
      body.metaDescription = body.excerpt
    }

    // Process tags
    if (typeof body.tags === 'string') {
      body.tags = body.tags.split(',').map((tag: string) => tag.trim()).filter(Boolean)
    }

    const newPost: InsertBlogPost = {
      ...body,
      publishedAt: body.isPublished ? new Date() : null,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const [createdPost] = await db.insert(blogPosts).values(newPost).returning()

    return NextResponse.json(createdPost, { status: 201 })
  } catch (error) {
    console.error('Error creating blog post:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Helper functions
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\u0400-\u04FF\w\s-]/g, '') // Keep Cyrillic, Latin, numbers, spaces, hyphens
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function generateExcerpt(content: string, maxLength: number = 200): string {
  // Remove HTML tags and get plain text
  const plainText = content.replace(/<[^>]*>/g, '')
  
  if (plainText.length <= maxLength) {
    return plainText
  }
  
  // Find the last complete sentence within the limit
  const truncated = plainText.substring(0, maxLength)
  const lastSentence = truncated.lastIndexOf('.')
  
  if (lastSentence > maxLength * 0.5) {
    return plainText.substring(0, lastSentence + 1)
  }
  
  return truncated + '...'
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  return Math.max(1, Math.ceil(words / wordsPerMinute))
}