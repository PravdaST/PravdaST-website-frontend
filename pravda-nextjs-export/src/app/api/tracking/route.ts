
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log tracking event
    console.log('Tracking event:', body);
    
    return NextResponse.json({ success: true }, { status: 200 });
    
  } catch (error) {
    console.error('Tracking error:', error);
    return NextResponse.json(
      { error: 'Tracking failed' },
      { status: 500 }
    );
  }
}
