import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../../../server/storage';
import { createSecureSessionToken } from '../../../../../server/auth-utils';
import bcrypt from 'bcrypt';
import { z } from 'zod';

// Force Node runtime for database compatibility
export const runtime = 'nodejs';

// Login schema validation
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwardedFor?.split(',')[0] || realIp || 'unknown';
    
    // Check rate limit - Allow 5 login attempts per 15 minutes per IP
    const rateLimitResult = await storage.checkRateLimit(clientIp, '/api/admin/login', 15, 5);
    
    if (!rateLimitResult.allowed) {
      console.log(`Login rate limit exceeded for IP: ${clientIp}`, {
        resetTime: rateLimitResult.resetTime,
        endpoint: '/api/admin/login'
      });
      
      const resetTimeStr = rateLimitResult.resetTime 
        ? ` Try again after ${rateLimitResult.resetTime.toLocaleTimeString()}.`
        : ' Try again later.';
      
      return NextResponse.json(
        { 
          success: false, 
          message: "Too many login attempts." + resetTimeStr,
          rateLimited: true,
          resetTime: rateLimitResult.resetTime
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    
    // Validate input data
    const validationResult = loginSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Invalid login data", 
          errors: validationResult.error.errors 
        },
        { status: 400 }
      );
    }

    const { username, password } = validationResult.data;

    console.log('Admin login attempt:', {
      username,
      ip: clientIp,
      timestamp: new Date().toISOString()
    });

    // Get admin user by username
    const adminUser = await storage.getAdminUserByUsername(username);
    if (!adminUser) {
      console.log('Login failed: Admin user not found', { username });
      return NextResponse.json(
        { 
          success: false, 
          message: "Invalid username or password" 
        },
        { status: 401 }
      );
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, adminUser.password);
    if (!isPasswordValid) {
      console.log('Login failed: Invalid password', { username, userId: adminUser.id });
      return NextResponse.json(
        { 
          success: false, 
          message: "Invalid username or password" 
        },
        { status: 401 }
      );
    }

    // Create secure session token
    const { token, hash, expiresAt } = await createSecureSessionToken();
    
    // Store session in database
    await storage.createAdminSession({
      userId: adminUser.id,
      tokenHash: hash,
      expiresAt,
    });

    console.log('Admin login successful:', {
      username: adminUser.username,
      userId: adminUser.id,
      sessionExpires: expiresAt
    });

    // Create response with secure cookie
    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      admin: {
        id: adminUser.id,
        username: adminUser.username,
        email: adminUser.email,
      }
    });

    // Set secure session cookie
    response.cookies.set('admin-session', token, {
      httpOnly: true, // Prevent XSS
      secure: process.env.NODE_ENV === 'production', // HTTPS in production
      sameSite: 'lax', // CSRF protection
      maxAge: 24 * 60 * 60, // 24 hours in seconds
      path: '/', // Available across entire site
    });

    return response;

  } catch (error) {
    console.error('Admin login error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: "An error occurred during login. Please try again." 
      },
      { status: 500 }
    );
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
  });
}