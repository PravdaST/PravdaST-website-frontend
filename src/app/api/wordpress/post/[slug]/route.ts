import { NextRequest, NextResponse } from 'next/server'
import { getWordPressPost } from '@/lib/wordpress'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    
    if (!slug) {
      return NextResponse.json(
        { success: false, error: 'Slug is required' },
        { status: 400 }
      )
    }

    const post = await getWordPressPost(slug)

    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: post
    })

  } catch (error) {
    console.error('WordPress Post API Error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch WordPress post',
        fallback: 'Check local blog posts instead'
      },
      { status: 500 }
    )
  }
}