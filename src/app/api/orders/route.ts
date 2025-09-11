import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../../server/storage';
import { insertOrderSchema, OrderStatus } from '../../../../shared/schema';
import { z } from 'zod';

// Force Node runtime for database compatibility
export const runtime = 'nodejs';

// Order creation schema with validation
const createOrderSchema = z.object({
  customerName: z.string().min(2, "Името трябва да бъде поне 2 символа"),
  customerEmail: z.string().email("Невалиден имейл адрес"),
  customerPhone: z.string().min(6, "Невалиден телефонен номер"),
  businessName: z.string().min(2, "Името на бизнеса трябва да бъде поне 2 символа"),
  businessType: z.string().min(1, "Изберете тип бизнес"),
  businessWebsite: z.string().url("Невалиден URL").optional().or(z.literal("")),
  message: z.string().optional(),
  templateType: z.string().min(1, "Изберете тип шаблон"),
  customizationData: z.record(z.any()).optional().default({}),
});

// Input sanitization function
function sanitizeInput(input: string): string {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+="[^"]*"/gi, '') // Remove event handlers
    .trim();
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwardedFor?.split(',')[0] || realIp || 'unknown';
    
    // Check rate limit - Allow 3 orders per 60 minutes per IP
    const rateLimitResult = await storage.checkRateLimit(clientIp, '/api/orders', 60, 3);
    
    if (!rateLimitResult.allowed) {
      console.log(`Rate limit exceeded for IP: ${clientIp}`, {
        resetTime: rateLimitResult.resetTime,
        endpoint: '/api/orders'
      });
      
      const resetTimeStr = rateLimitResult.resetTime 
        ? ` Моля опитайте отново след ${rateLimitResult.resetTime.toLocaleTimeString('bg-BG')}.`
        : ' Моля опитайте отново по-късно.';
      
      return NextResponse.json(
        { 
          success: false, 
          message: "Превишен лимит за създаване на поръчки." + resetTimeStr,
          rateLimited: true,
          resetTime: rateLimitResult.resetTime
        },
        { status: 429 }
      );
    }
    
    // Clean up expired rate limit records periodically (1% chance)
    if (Math.random() < 0.01) {
      storage.cleanupExpiredRateLimits().catch(err => 
        console.warn('Rate limit cleanup failed:', err)
      );
    }

    const body = await request.json();
    
    // Validate input data
    const validationResult = createOrderSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Невалидни данни", 
          errors: validationResult.error.errors 
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;
    
    // Sanitize all string inputs
    const sanitizedData = {
      customerName: sanitizeInput(data.customerName),
      customerEmail: sanitizeInput(data.customerEmail),
      customerPhone: sanitizeInput(data.customerPhone),
      businessName: sanitizeInput(data.businessName),
      businessType: sanitizeInput(data.businessType),
      businessWebsite: data.businessWebsite || undefined,
      message: data.message ? sanitizeInput(data.message) : undefined,
      templateType: sanitizeInput(data.templateType),
      customizationData: data.customizationData || {},
      status: OrderStatus.PENDING, // Default status
      priority: 'normal', // Default priority
    };

    console.log('Processing order creation:', {
      customerName: sanitizedData.customerName,
      customerEmail: sanitizedData.customerEmail,
      businessName: sanitizedData.businessName,
      businessType: sanitizedData.businessType,
      templateType: sanitizedData.templateType,
      ip: clientIp,
      timestamp: new Date().toISOString()
    });

    // Create order in database
    const newOrder = await storage.createOrder(sanitizedData);
    
    console.log('Order created successfully:', {
      orderId: newOrder.id,
      customerEmail: newOrder.customerEmail,
      businessName: newOrder.businessName
    });

    return NextResponse.json({ 
      success: true, 
      message: "Поръчката е създадена успешно! Ще се свържем с вас в рамките на 15 минути.",
      orderId: newOrder.id,
      order: {
        id: newOrder.id,
        status: newOrder.status,
        createdAt: newOrder.createdAt
      }
    });

  } catch (error) {
    console.error('Order creation error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Възникна грешка при създаване на поръчката. Моля опитайте отново." 
      },
      { status: 500 }
    );
  }
}

// GET endpoint removed for security reasons.
// Orders listing is now available only through /api/admin/orders with authentication.
// This prevents unauthorized access to customer data.

// CORS headers
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}