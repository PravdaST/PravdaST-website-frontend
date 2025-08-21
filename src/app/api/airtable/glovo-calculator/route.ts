import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.restaurant_name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For now, we'll simulate a successful submission
    // In production, you would integrate with Airtable API
    console.log('GLOVO Calculator submission:', {
      restaurant_name: body.restaurant_name,
      daily_orders: body.daily_orders,
      avg_order_value: body.avg_order_value,
      email: body.email,
      phone: body.phone,
      timestamp: body.timestamp
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });

  } catch (error) {
    console.error('Error processing GLOVO calculator submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}