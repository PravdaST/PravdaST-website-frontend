import { NextRequest, NextResponse } from 'next/server'
import { getWordPressPosts, searchWordPressPosts } from '@/lib/wordpress'

// Use Node.js runtime for dynamic API routes
export const dynamic = 'force-dynamic';

// Next.js caching configuration - Cache for 1 hour to reduce WordPress API calls
export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const page = parseInt(searchParams.get('page') || '1')
    const search = searchParams.get('search')
    const category = searchParams.get('category')
    const perPage = parseInt(searchParams.get('per_page') || '6')

    let result

    if (search) {
      result = await searchWordPressPosts(search, page)
    } else {
      result = await getWordPressPosts({
        page,
        per_page: perPage,
        categories: category || undefined,
        orderby: 'date',
        order: 'desc'
      })
    }

    return NextResponse.json({
      success: true,
      data: {
        posts: result.posts,
        pagination: {
          currentPage: page,
          totalPages: result.totalPages,
          total: result.total || 0,
          perPage
        }
      }
    })

  } catch (error) {
    console.error('WordPress Posts API Error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch WordPress posts',
        fallback: 'Using local blog posts instead'
      },
      { status: 500 }
    )
  }
}