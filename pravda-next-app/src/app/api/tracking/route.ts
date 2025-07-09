import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Tracking event:', body)
    
    return NextResponse.json({ success: true, message: 'Event tracked' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Tracking failed' },
      { status: 500 }
    )
  }
}