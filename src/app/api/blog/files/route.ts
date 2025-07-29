import { NextResponse } from 'next/server'
import { getStaticBlogPosts } from '@/lib/blog-static'

export async function GET() {
  try {
    const blogPosts = getStaticBlogPosts()
    return NextResponse.json(blogPosts)
  } catch (error) {
    console.error('Error getting static blog posts:', error)
    return NextResponse.json({ error: 'Failed to get blog posts' }, { status: 500 })
  }
}