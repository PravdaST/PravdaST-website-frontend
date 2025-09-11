import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../../../server/storage';

// Force Node runtime for database compatibility
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    // Get session token from cookie
    const sessionToken = request.cookies.get('admin-session')?.value;
    
    if (sessionToken) {
      // Delete session from database
      await storage.deleteAdminSession(sessionToken);
      console.log('Admin session deleted during logout');
    }

    // Create response and clear cookie
    const response = NextResponse.json({
      success: true,
      message: "Logout successful"
    });

    // Clear the session cookie
    response.cookies.set('admin-session', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0, // Immediately expire
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Admin logout error:', error);
    
    // Even if there's an error, clear the cookie and return success
    const response = NextResponse.json({
      success: true,
      message: "Logout successful"
    });

    response.cookies.set('admin-session', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0,
      path: '/',
    });

    return response;
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