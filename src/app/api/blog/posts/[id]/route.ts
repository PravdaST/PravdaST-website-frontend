import { NextRequest, NextResponse } from 'next/server'
import { blogPosts } from '@shared/schema'
import { db } from '@server/db'
import { eq } from 'drizzle-orm'

interface RouteParams {
  params: {
    id: string
  }
}

// GET /api/blog/posts/[id] - Get single blog post
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const postId = parseInt(params.id)
    
    if (isNaN(postId)) {
      return NextResponse.json({ error: 'Invalid post ID' }, { status: 400 })
    }

    const [post] = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.id, postId))
      .limit(1)

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    // Increment view count (in a real app, you might want to debounce this)
    // await db.update(blogPosts).set({ views: post.views + 1 }).where(eq(blogPosts.id, postId))

    return NextResponse.json({
      ...post,
      readTime: calculateReadTime(post.content),
      tags: Array.isArray(post.tags) ? post.tags : []
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=1200', // Cache for 10 minutes
      }
    })
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT /api/blog/posts/[id] - Update blog post (admin only)
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const postId = parseInt(params.id)
    
    if (isNaN(postId)) {
      return NextResponse.json({ error: 'Invalid post ID' }, { status: 400 })
    }

    const body = await request.json()
    
    // Process tags if they're a string
    if (typeof body.tags === 'string') {
      body.tags = body.tags.split(',').map((tag: string) => tag.trim()).filter(Boolean)
    }

    // Calculate read time if content changed
    if (body.content) {
      body.readTime = calculateReadTime(body.content)
    }

    // Update publish date if publishing
    if (body.isPublished && !body.publishedAt) {
      body.publishedAt = new Date()
    } else if (!body.isPublished) {
      body.publishedAt = null
    }

    body.updatedAt = new Date()

    const [updatedPost] = await db
      .update(blogPosts)
      .set(body)
      .where(eq(blogPosts.id, postId))
      .returning()

    if (!updatedPost) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    return NextResponse.json(updatedPost)
  } catch (error) {
    console.error('Error updating blog post:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE /api/blog/posts/[id] - Delete blog post (admin only)
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const postId = parseInt(params.id)
    
    if (isNaN(postId)) {
      return NextResponse.json({ error: 'Invalid post ID' }, { status: 400 })
    }

    const [deletedPost] = await db
      .delete(blogPosts)
      .where(eq(blogPosts.id, postId))
      .returning()

    if (!deletedPost) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Post deleted successfully' })
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  return Math.max(1, Math.ceil(words / wordsPerMinute))
}