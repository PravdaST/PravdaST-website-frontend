import { NextResponse } from 'next/server'
import { readBlogPostsFromFiles } from '@/lib/blog-file-reader'

export async function GET() {
  try {
    const blogPosts = readBlogPostsFromFiles()
    return NextResponse.json(blogPosts)
  } catch (error) {
    console.error('Error reading blog posts from files:', error)
    return NextResponse.json({ error: 'Failed to read blog posts' }, { status: 500 })
  }
}