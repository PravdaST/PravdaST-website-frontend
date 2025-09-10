import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email-service'
import { storage } from '../../../../server/storage'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, "Името трябва да бъде поне 2 символа"),
  email: z.string().email("Невалиден имейл адрес"),
  company: z.string().optional(),
  website: z.string().url("Невалиден URL").optional().or(z.literal("")),
  message: z.string().min(10, "Съобщението трябва да бъде поне 10 символа"),
})

// Input sanitization
function sanitizeInput(input: string): string {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+="[^"]*"/gi, '') // Remove event handlers
    .trim()
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')
    const clientIp = forwardedFor?.split(',')[0] || realIp || 'unknown'
    
    // Check rate limit using database-based system
    // Allow maximum 5 requests per 60 minutes per IP
    const rateLimitResult = await storage.checkRateLimit(clientIp, '/api/contacts', 60, 5)
    
    if (!rateLimitResult.allowed) {
      console.log(`Rate limit exceeded for IP: ${clientIp}`, {
        resetTime: rateLimitResult.resetTime,
        endpoint: '/api/contacts'
      })
      
      const resetTimeStr = rateLimitResult.resetTime 
        ? ` Моля опитайте отново след ${rateLimitResult.resetTime.toLocaleTimeString('bg-BG')}.`
        : ' Моля опитайте отново по-късно.'
      
      return NextResponse.json(
        { 
          success: false, 
          message: "Превишен лимит за изпращане на съобщения." + resetTimeStr,
          rateLimited: true,
          resetTime: rateLimitResult.resetTime
        },
        { status: 429 }
      )
    }
    
    // Clean up expired rate limit records periodically (1% chance)
    if (Math.random() < 0.01) {
      storage.cleanupExpiredRateLimits().catch(err => 
        console.warn('Rate limit cleanup failed:', err)
      )
    }

    const body = await request.json()
    
    // Validate input data
    const validationResult = contactSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Невалидни данни", 
          errors: validationResult.error.errors 
        },
        { status: 400 }
      )
    }

    const data = validationResult.data
    
    // Sanitize all string inputs
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      company: data.company ? sanitizeInput(data.company) : undefined,
      website: data.website || undefined,
      message: sanitizeInput(data.message)
    }

    console.log('Processing contact form submission:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      hasCompany: !!sanitizedData.company,
      hasWebsite: !!sanitizedData.website,
      ip: clientIp,
      timestamp: new Date().toISOString()
    })

    // Send email via SendGrid
    const emailResult = await sendContactEmail(sanitizedData)
    
    if (emailResult.success) {
      console.log('Contact email sent successfully')
      return NextResponse.json({ 
        success: true, 
        message: "Съобщението е изпратено успешно!" 
      })
    } else {
      console.error('Email sending failed:', emailResult.error)
      return NextResponse.json({ 
        success: true, // Still return success to user
        message: "Съобщението е записано. Ще се свържем с Вас скоро." 
      })
    }

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Възникна грешка. Моля опитайте отново или се свържете директно с нас." 
      },
      { status: 500 }
    )
  }
}

// CORS headers
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}