import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../../../server/storage';

// Force Node runtime for database compatibility
export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    // Get session token from cookie
    const sessionToken = request.cookies.get('admin-session')?.value;
    
    if (!sessionToken) {
      return NextResponse.json(
        { 
          success: false, 
          message: "No session found",
          authenticated: false
        },
        { status: 401 }
      );
    }

    // Verify session and get admin user
    const session = await storage.getAdminSession(sessionToken);
    if (!session) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Invalid or expired session",
          authenticated: false
        },
        { status: 401 }
      );
    }

    // Check if session is expired
    if (session.expiresAt < new Date()) {
      // Clean up expired session
      await storage.deleteAdminSession(sessionToken);
      return NextResponse.json(
        { 
          success: false, 
          message: "Session expired",
          authenticated: false
        },
        { status: 401 }
      );
    }

    // Get admin user details
    const adminUser = await storage.getAdminUser(session.userId!);
    if (!adminUser) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Admin user not found",
          authenticated: false
        },
        { status: 401 }
      );
    }

    // Return admin info (exclude password)
    return NextResponse.json({
      success: true,
      authenticated: true,
      admin: {
        id: adminUser.id,
        username: adminUser.username,
        email: adminUser.email,
        createdAt: adminUser.createdAt,
      },
      session: {
        expiresAt: session.expiresAt,
      }
    });

  } catch (error) {
    console.error('Admin me endpoint error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: "An error occurred while verifying session",
        authenticated: false
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
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}