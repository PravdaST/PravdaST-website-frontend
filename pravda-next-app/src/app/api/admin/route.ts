import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Admin API endpoint' })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Admin action:', body)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Admin action failed' },
      { status: 500 }
    )
  }
}