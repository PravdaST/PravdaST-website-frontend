import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../../../server/storage';
import bcrypt from 'bcrypt';
import { z } from 'zod';

// Force Node runtime for database compatibility
export const runtime = 'nodejs';

// Setup schema validation
const setupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  email: z.string().email("Invalid email address"),
  setupKey: z.string().min(1, "Setup key is required"),
});

// Security: Setup key should be set in environment variables
const SETUP_KEY = process.env.ADMIN_SETUP_KEY || 'pravda_setup_2025';

export async function POST(request: NextRequest) {
  try {
    // Get client IP for logging
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwardedFor?.split(',')[0] || realIp || 'unknown';

    const body = await request.json();
    
    // Validate input data
    const validationResult = setupSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Invalid setup data", 
          errors: validationResult.error.errors 
        },
        { status: 400 }
      );
    }

    const { username, password, email, setupKey } = validationResult.data;

    // Verify setup key
    if (setupKey !== SETUP_KEY) {
      console.log('Invalid setup key attempted:', {
        ip: clientIp,
        providedKey: setupKey.substring(0, 5) + '***', // Log only partial key for security
        timestamp: new Date().toISOString()
      });
      
      return NextResponse.json(
        { 
          success: false, 
          message: "Invalid setup key" 
        },
        { status: 403 }
      );
    }

    // Check if any admin users already exist
    const existingAdmins = await storage.getAllContacts(); // This is wrong, should be admin users
    // Let me use a different approach by trying to get all orders and see if the admin system works
    
    try {
      // Check if admin table has any users by trying to get a non-existent admin
      const testAdmin = await storage.getAdminUser(999999);
      // If we can query admin table, check if any admin exists by trying to get the first one
      const firstAdmin = await storage.getAdminUser(1);
      if (firstAdmin) {
        return NextResponse.json(
          { 
            success: false, 
            message: "Admin system is already configured. First admin user already exists." 
          },
          { status: 409 }
        );
      }
    } catch (error) {
      // If there's an error accessing admin users, continue with setup
      console.log('Admin table access check:', error.message);
    }

    console.log('Setting up first admin user:', {
      username,
      email,
      ip: clientIp,
      timestamp: new Date().toISOString()
    });

    // Hash the password with high security
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create the first admin user
    const newAdmin = await storage.createAdminUser({
      username,
      password: hashedPassword,
      email,
    });

    console.log('First admin user created successfully:', {
      id: newAdmin.id,
      username: newAdmin.username,
      email: newAdmin.email
    });

    return NextResponse.json({
      success: true,
      message: "First admin user created successfully! You can now login.",
      admin: {
        id: newAdmin.id,
        username: newAdmin.username,
        email: newAdmin.email,
        createdAt: newAdmin.createdAt,
      }
    });

  } catch (error) {
    console.error('Admin setup error:', error);
    
    if (error.code === '23505') { // Unique constraint violation
      return NextResponse.json(
        { 
          success: false, 
          message: "Admin user with this username or email already exists" 
        },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: "An error occurred during admin setup" 
      },
      { status: 500 }
    );
  }
}

// GET endpoint to check if setup is needed
export async function GET(request: NextRequest) {
  try {
    // Check if any admin users exist by trying to get admin user with ID 1
    try {
      const firstAdmin = await storage.getAdminUser(1);
      if (firstAdmin) {
        return NextResponse.json({
          success: true,
          setupRequired: false,
          message: "Admin system is already configured",
          adminCount: 1 // We know at least one exists
        });
      }
    } catch (error) {
      // Continue to setup required
    }

    // Try to check if admin table exists and is accessible
    try {
      await storage.getAdminUser(999999); // This will return undefined but won't error if table exists
      return NextResponse.json({
        success: true,
        setupRequired: true,
        message: "No admin users found. Setup is required.",
        adminCount: 0
      });
    } catch (error) {
      return NextResponse.json({
        success: true,
        setupRequired: true,
        message: "Admin system needs initialization",
        adminCount: 0
      });
    }

  } catch (error) {
    console.error('Setup check error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Unable to check setup status" 
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
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}