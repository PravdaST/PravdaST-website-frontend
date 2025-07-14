import { NextRequest, NextResponse } from 'next/server'
import { blogPosts } from '@shared/schema'
import { db } from '@server/db'
import { and, or, ilike, eq } from 'drizzle-orm'

// GET /api/blog/search - Search blog posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')
    const category = searchParams.get('category')
    const tag = searchParams.get('tag')
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 50) // Max 50 results
    
    if (!query && !category && !tag) {
      return NextResponse.json({ error: 'At least one search parameter is required' }, { status: 400 })
    }

    let whereConditions = []

    // Only search published posts for public API
    whereConditions.push(eq(blogPosts.isPublished, true))

    // Text search
    if (query) {
      const searchQuery = `%${query}%`
      whereConditions.push(
        or(
          ilike(blogPosts.title, searchQuery),
          ilike(blogPosts.content, searchQuery),
          ilike(blogPosts.excerpt, searchQuery),
          ilike(blogPosts.metaDescription, searchQuery)
        )
      )
    }

    // Category filter
    if (category) {
      whereConditions.push(eq(blogPosts.category, category))
    }

    // Tag filter (this would need a proper implementation based on your tags structure)
    if (tag) {
      // Assuming tags are stored as JSON array
      // This is a simplified version - you might need a more sophisticated search
      whereConditions.push(ilike(blogPosts.tags, `%${tag}%`))
    }

    const results = await db
      .select({
        id: blogPosts.id,
        title: blogPosts.title,
        excerpt: blogPosts.excerpt,
        slug: blogPosts.slug,
        author: blogPosts.author,
        category: blogPosts.category,
        tags: blogPosts.tags,
        publishedAt: blogPosts.publishedAt,
        readTime: blogPosts.readTime
      })
      .from(blogPosts)
      .where(and(...whereConditions))
      .limit(limit)

    // Enhance results with relevance scoring
    const enhancedResults = results.map(post => {
      let relevanceScore = 0
      
      if (query) {
        const lowerQuery = query.toLowerCase()
        const lowerTitle = post.title.toLowerCase()
        const lowerExcerpt = (post.excerpt || '').toLowerCase()
        
        // Title matches get higher score
        if (lowerTitle.includes(lowerQuery)) {
          relevanceScore += 10
        }
        
        // Excerpt matches get medium score
        if (lowerExcerpt.includes(lowerQuery)) {
          relevanceScore += 5
        }
        
        // Exact title match gets highest score
        if (lowerTitle === lowerQuery) {
          relevanceScore += 20
        }
      }

      return {
        ...post,
        relevanceScore,
        tags: Array.isArray(post.tags) ? post.tags : []
      }
    })

    // Sort by relevance score if we have a text query
    if (query) {
      enhancedResults.sort((a, b) => b.relevanceScore - a.relevanceScore)
    }

    return NextResponse.json({
      results: enhancedResults,
      total: enhancedResults.length,
      query: {
        text: query,
        category,
        tag
      }
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=180, stale-while-revalidate=360', // Cache for 3 minutes
      }
    })
  } catch (error) {
    console.error('Error searching blog posts:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}