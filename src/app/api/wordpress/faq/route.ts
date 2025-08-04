
import { NextRequest, NextResponse } from 'next/server'
import { getWordPressFAQs, getWordPressFAQsByCategory } from '@/lib/wordpress'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')

    let faqs
    if (category && category !== 'Всички') {
      faqs = await getWordPressFAQsByCategory(category)
    } else {
      faqs = await getWordPressFAQs()
    }

    return NextResponse.json({
      success: true,
      data: faqs
    })

  } catch (error) {
    console.error('WordPress FAQ API Error:', error)
    
    // Fallback към статичните FAQ данни
    const staticFAQs = [
      {
        id: 1,
        title: { rendered: "Какво е бизнес инженеринг и как работи?" },
        content: { rendered: "Бизнес инженерингът е системен подход към изграждане на предсказуеми и мащабируеми бизнес процеси в България..." },
        meta: { faq_category: "Общи въпроси" }
      }
    ]
    
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch WordPress FAQ',
      fallback: true,
      data: staticFAQs
    }, { status: 200 }) // Return 200 with fallback data
  }
}
