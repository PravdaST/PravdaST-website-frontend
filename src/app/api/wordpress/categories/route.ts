import { NextResponse } from 'next/server'
import { getWordPressCategories } from '@/lib/wordpress'

export async function GET() {
  try {
    const categories = await getWordPressCategories()

    return NextResponse.json({
      success: true,
      data: categories
    })

  } catch (error) {
    console.error('WordPress Categories API Error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch WordPress categories'
      },
      { status: 500 }
    )
  }
}