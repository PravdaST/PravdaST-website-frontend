import { NextResponse } from 'next/server'

// Динамично зареждане на blog-file-reader само на сървъра
async function getBlogPostsData() {
  if (typeof window !== 'undefined') {
    throw new Error('Този модул може да се използва само на сървъра');
  }
  
  const { readBlogPostsFromFiles } = await import('@/lib/blog-file-reader');
  return readBlogPostsFromFiles();
}

export async function GET() {
  try {
    const blogPosts = await getBlogPostsData()
    return NextResponse.json(blogPosts)
  } catch (error) {
    console.error('Error reading blog posts from files:', error)
    return NextResponse.json({ error: 'Failed to read blog posts' }, { status: 500 })
  }
}