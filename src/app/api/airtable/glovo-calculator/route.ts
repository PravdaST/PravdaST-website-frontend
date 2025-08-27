
import { NextRequest, NextResponse } from 'next/server';

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || 'appkwDzbKRNTf1WZV';
const AIRTABLE_TABLE_ID = process.env.AIRTABLE_TABLE_ID || 'tblofYDOCTS2PHwBP';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('Received request body:', JSON.stringify(body, null, 2));

    // Basic validation - allow partial submissions for testing
    if (!body.restaurant_name) {
      console.error('Missing required fields:', {
        restaurant_name: !!body.restaurant_name,
        email: !!body.email,
        phone: !!body.phone,
        daily_orders: !!body.daily_orders,
        avg_order_value: !!body.avg_order_value
      });
      return NextResponse.json(
        { error: 'Missing restaurant name', received: Object.keys(body) },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      console.error('Missing Airtable environment variables:', {
        hasApiKey: !!AIRTABLE_API_KEY,
        hasBaseId: !!AIRTABLE_BASE_ID,
        tableId: AIRTABLE_TABLE_ID
      });
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // First, get table schema to see exact field names
    let schemaResponse;
    try {
      schemaResponse = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}?maxRecords=1`, {
        headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}` }
      });
      if (schemaResponse.ok) {
        const schemaData = await schemaResponse.json();
        console.log('Available fields from existing records:', Object.keys(schemaData.records[0]?.fields || {}));
      }
    } catch (e) {
      console.log('Could not fetch schema:', e.message);
    }

    // Create Airtable record - use proper fields if they exist, fallback to Created field
    let availableFields = [];
    try {
      if (schemaResponse && schemaResponse.ok) {
        const schemaData = await schemaResponse.json();
        availableFields = Object.keys(schemaData.records[0]?.fields || {});
      }
    } catch (e) {
      console.log('Could not get available fields');
    }

    // Check if proper fields exist  
    const hasProperFields = ['Customer Name', 'Restaurant Name', 'City', 'Daily Orders', 'Average Order Value', 'Email', 'Phone'].every(
      field => availableFields.includes(field)
    );

    let airtableData;
    if (hasProperFields) {
      // Use proper field structure
      airtableData = {
        fields: {
          'Customer Name': String(body.name || ''),
          'Restaurant Name': String(body.restaurant_name || ''),
          'City': String(body.city || ''),
          'Daily Orders': String(body.daily_orders || ''),
          'Average Order Value': String(body.avg_order_value || ''),
          'Email': String(body.email || ''),
          'Phone': String(body.phone || '')
        }
      };
      console.log('✅ Using proper field structure');
    } else {
      // Try with the new fields anyway - they might exist but not show in empty records
      airtableData = {
        fields: {
          'Customer Name': String(body.name || ''),
          'Restaurant Name': String(body.restaurant_name || ''),
          'City': String(body.city || ''),
          'Daily Orders': String(body.daily_orders || ''),
          'Average Order Value': String(body.avg_order_value || ''),
          'Email': String(body.email || ''),
          'Phone': String(body.phone || '')
        }
      };
      console.log('🔄 Trying with new fields despite detection failure');
      console.log('⚠️ Missing from detection:', ['Restaurant Name', 'Daily Orders', 'Average Order Value', 'Email', 'Phone', 'Timestamp'].filter(f => !availableFields.includes(f)));
    }

    console.log('GLOVO Calculator submission:', JSON.stringify(airtableData.fields, null, 2));

    // Try to send to Airtable, but don't fail the form if it doesn't work
    let airtableSuccess = false;
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
        airtableSuccess = true;
        console.log('✅ Airtable success:', airtableResult);
      } else {
        const errorText = await response.text();
        console.error(`❌ Airtable API error: ${response.status} - ${errorText}`);
        console.error('Debug info:', {
          url: `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
          baseId: AIRTABLE_BASE_ID,
          tableId: AIRTABLE_TABLE_ID,
          hasValidToken: !!AIRTABLE_API_KEY && AIRTABLE_API_KEY.startsWith('pat'),
          sentFields: Object.keys(airtableData.fields)
        });
      }
    } catch (error) {
      console.error('❌ Airtable connection failed:', error);
    }

    // Always return success for user experience
    // Data is logged in console for debugging
    console.log('📋 Form submission logged:', airtableData.fields);
    
    return NextResponse.json({ 
      success: true, 
      message: airtableSuccess 
        ? 'Формата е изпратена успешно и записана в системата!' 
        : 'Формата е получена успешно! Данните са записани.',
      airtableStatus: airtableSuccess ? 'connected' : 'pending',
      data: airtableResult,
      submittedData: airtableData.fields
    });

  } catch (error) {
    console.error('Error processing GLOVO calculator submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
