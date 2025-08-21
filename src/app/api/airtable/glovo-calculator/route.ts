
import { NextRequest, NextResponse } from 'next/server';

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_ID = process.env.AIRTABLE_TABLE_ID || 'tblofYDOCTS2PHwBP';

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

    // Validate environment variables
    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      console.error('Missing Airtable environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create Airtable record
    const airtableData = {
      fields: {
        'Restaurant Name': body.restaurant_name,
        'Daily Orders': body.daily_orders,
        'Average Order Value': body.avg_order_value,
        'Email': body.email,
        'Phone': body.phone,
        'Timestamp': body.timestamp,
        'Created': new Date().toISOString()
      }
    };

    console.log('GLOVO Calculator submission:', airtableData.fields);

    // Send to Airtable
    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(airtableData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Airtable API error: ${response.status} - ${errorText}`);
      throw new Error(`Airtable API error: ${response.status}`);
    }

    const result = await response.json();

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully to Airtable',
      data: result
    });

  } catch (error) {
    console.error('Error processing GLOVO calculator submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
