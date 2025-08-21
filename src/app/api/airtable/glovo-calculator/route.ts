import { NextRequest, NextResponse } from 'next/server';

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY || 'pat5BTtwvg2zwK12N.552877eae1ff005c3c329dd42efcc860ebd39c2f6c1cf48ee04cb4b8ee84139f';
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || 'appkwDzDKRNTf1WZV';
const AIRTABLE_TABLE_ID = process.env.AIRTABLE_TABLE_ID || 'tbl0fYDOCTS2PHwBP';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.restaurant_name || !body.email || !body.phone) {
      console.error('Validation failed:', { body });
      return NextResponse.json(
        { error: 'Missing required fields: restaurant_name, email, phone' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      console.error('Invalid email format:', body.email);
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Phone validation (Bulgarian format)
    const phoneRegex = /^(\+359|0)[0-9]{8,9}$/;
    if (!phoneRegex.test(body.phone)) {
      console.error('Invalid phone format:', body.phone);
      return NextResponse.json(
        { error: 'Invalid phone format' },
        { status: 400 }
      );
    }

    // Create Airtable record with exact field names
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
    console.log('Using Base ID:', AIRTABLE_BASE_ID);
    console.log('Using Table ID:', AIRTABLE_TABLE_ID);
    console.log('API Key length:', AIRTABLE_API_KEY?.length);

    // Try to send to Airtable, but don't fail if it doesn't work
    let airtableResult = null;
    try {
      const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(airtableData)
      });

      if (response.ok) {
        airtableResult = await response.json();
        console.log('Airtable success:', airtableResult);
      } else {
        const errorText = await response.text();
        console.error(`Airtable API error: ${response.status}`, errorText);
        console.warn('Continuing without Airtable - data logged locally');
      }
    } catch (error) {
      console.error('Airtable connection failed:', error);
      console.warn('Continuing without Airtable - data logged locally');
    }

    return NextResponse.json({ 
      success: true, 
      message: airtableResult ? 'Form submitted successfully to Airtable' : 'Form submitted successfully (Airtable pending)',
      data: airtableResult,
      localData: airtableData.fields
    });

  } catch (error) {
    console.error('Error processing GLOVO calculator submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}