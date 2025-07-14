import { NextRequest, NextResponse } from 'next/server'

// Klaviyo API integration for contact form
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, firstName, lastName, company, website, message } = body

    const klaviyoApiKey = process.env.KLAVIYO_PRIVATE_API_KEY

    if (!klaviyoApiKey) {
      console.log('Klaviyo: Private API key not configured, skipping profile creation')
      console.log('Available env vars:', Object.keys(process.env).filter(k => k.includes('KLAVIYO')))
      return NextResponse.json({ 
        success: true, 
        message: 'Contact saved (Klaviyo integration not configured)' 
      })
    }

    // Create profile in Klaviyo
    const profileData = {
      data: {
        type: 'profile',
        attributes: {
          email,
          first_name: firstName,
          last_name: lastName,
          properties: {
            Company: company,
            Website: website,
            Message: message,
            Source: 'Pravda Agency Contact Form',
            Timestamp: new Date().toISOString()
          }
        }
      }
    }

    const response = await fetch('https://a.klaviyo.com/api/profiles/', {
      method: 'POST',
      headers: {
        'Authorization': `Klaviyo-API-Key ${klaviyoApiKey}`,
        'Content-Type': 'application/json',
        'revision': '2024-10-15'
      },
      body: JSON.stringify(profileData)
    })

    if (response.ok) {
      console.log('Klaviyo: Profile created successfully')
      return NextResponse.json({ 
        success: true, 
        message: 'Contact saved and added to Klaviyo' 
      })
    } else {
      const errorText = await response.text()
      console.error('Klaviyo: API error', response.status, errorText)
      return NextResponse.json({ 
        success: true, 
        message: 'Contact saved (Klaviyo sync failed)' 
      })
    }

  } catch (error) {
    console.error('Klaviyo: Error processing request', error)
    return NextResponse.json({ 
      success: true, 
      message: 'Contact saved (Klaviyo integration error)' 
    })
  }
}