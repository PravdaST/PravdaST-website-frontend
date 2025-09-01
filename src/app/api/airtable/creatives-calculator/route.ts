import { NextRequest, NextResponse } from 'next/server';

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = 'appNVUGOJPXJzdvYf';
const AIRTABLE_TABLE_NAME = 'tblCreativesCalculator';

interface CreativesFormData {
  name: string;
  business_name: string;
  industry: string;
  current_marketing: string;
  monthly_budget: string;
  main_goal: string;
  email: string;
  phone: string;
  timestamp: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: CreativesFormData = await request.json();
    console.log('📝 Received creatives form data:', formData);

    if (!AIRTABLE_API_KEY) {
      console.error('❌ Missing AIRTABLE_API_KEY environment variable');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Validate required fields
    const requiredFields = ['name', 'business_name', 'industry', 'email', 'phone'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      console.error('❌ Missing required fields:', missingFields);
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.error('❌ Invalid email format:', formData.email);
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Bulgarian phone validation
    const phoneRegex = /^(\+359|0)[0-9]{8,9}$/;
    if (!phoneRegex.test(formData.phone)) {
      console.error('❌ Invalid Bulgarian phone format:', formData.phone);
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Prepare data for Airtable
    const airtableData = {
      fields: {
        'Name': formData.name,
        'Business Name': formData.business_name,
        'Industry': formData.industry,
        'Current Marketing': formData.current_marketing,
        'Monthly Budget': formData.monthly_budget,
        'Main Goal': formData.main_goal,
        'Email': formData.email,
        'Phone': formData.phone,
        'Timestamp': formData.timestamp,
        'Status': 'New',
        'Source': 'Creatives Calculator'
      }
    };

    console.log('📤 Sending to Airtable:', airtableData);

    // Send to Airtable
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(airtableData),
      }
    );

    if (!airtableResponse.ok) {
      const errorText = await airtableResponse.text();
      console.error('❌ Airtable API error:', {
        status: airtableResponse.status,
        statusText: airtableResponse.statusText,
        body: errorText
      });
      
      return NextResponse.json(
        { error: 'Failed to save data' },
        { status: 500 }
      );
    }

    const airtableResult = await airtableResponse.json();
    console.log('✅ Successfully saved to Airtable:', airtableResult.id);

    return NextResponse.json({
      success: true,
      id: airtableResult.id,
      message: 'Creatives calculator data saved successfully'
    });

  } catch (error) {
    console.error('❌ Server error in creatives calculator:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}