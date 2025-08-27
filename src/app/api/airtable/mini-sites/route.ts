import { NextRequest, NextResponse } from 'next/server';

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = 'appkwDzbKRNTf1WZV';
const AIRTABLE_TABLE_ID = 'tbl7ONvtGCJWsQzCc';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('Mini-Sites form submission:', JSON.stringify(body, null, 2));

    // Basic validation
    if (!body.business_name || !body.contact_email || !body.contact_phone) {
      console.error('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!AIRTABLE_API_KEY) {
      console.error('Missing Airtable API key');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Prepare data for Airtable
    const airtableData = {
      fields: {
        "Category": body.category || '',
        "Business Name": body.business_name,
        "Location": body.location || '',
        "Contact Phone": body.contact_phone,
        "Contact Email": body.contact_email,
        "Menu Items Count": body.menu_items_count || '',
        "Message": body.message || '',
        "Created": new Date().toISOString()
      }
    };

    console.log('Sending to Airtable:', JSON.stringify(airtableData, null, 2));

    // Send to Airtable
    const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`;
    
    const airtableResponse = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(airtableData)
    });

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.text();
      console.error('Airtable error:', errorData);
      throw new Error(`Airtable API error: ${airtableResponse.status}`);
    }

    const result = await airtableResponse.json();
    console.log('✅ Mini-Sites form saved to Airtable:', result.id);

    return NextResponse.json({
      success: true,
      message: 'Формата е изпратена успешно!',
      id: result.id
    });

  } catch (error) {
    console.error('Error processing Mini-Sites form:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}