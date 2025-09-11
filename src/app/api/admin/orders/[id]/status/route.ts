import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../../../../../server/storage';
import { OrderStatus } from '../../../../../../../shared/schema';
import { z } from 'zod';

// Force Node runtime for database compatibility
export const runtime = 'nodejs';

// Status update schema
const statusUpdateSchema = z.object({
  status: z.enum(['pending', 'approved', 'in_progress', 'completed', 'rejected']),
  adminNotes: z.string().optional(),
});

// Helper function to verify admin session
async function verifyAdminSession(request: NextRequest) {
  const sessionToken = request.cookies.get('admin-session')?.value;
  
  if (!sessionToken) {
    return null;
  }

  try {
    const session = await storage.getAdminSession(sessionToken);
    if (!session || session.expiresAt < new Date()) {
      return null;
    }

    const adminUser = await storage.getAdminUser(session.userId!);
    return adminUser;
  } catch (error) {
    console.error('Admin session verification error:', error);
    return null;
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    // Verify admin authentication
    const admin = await verifyAdminSession(request);
    if (!admin) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Unauthorized - admin login required" 
        },
        { status: 401 }
      );
    }

    const orderId = parseInt(resolvedParams.id);
    if (isNaN(orderId)) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Invalid order ID" 
        },
        { status: 400 }
      );
    }

    const body = await request.json();
    
    // Validate input data
    const validationResult = statusUpdateSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Invalid status data", 
          errors: validationResult.error.errors 
        },
        { status: 400 }
      );
    }

    const { status, adminNotes } = validationResult.data;

    // Check if order exists
    const existingOrder = await storage.getOrder(orderId);
    if (!existingOrder) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Order not found" 
        },
        { status: 404 }
      );
    }

    console.log('Admin updating order status:', {
      orderId,
      oldStatus: existingOrder.status,
      newStatus: status,
      adminId: admin.id,
      adminUsername: admin.username,
      timestamp: new Date().toISOString()
    });

    // Update order status
    const updatedOrder = await storage.updateOrderStatus(orderId, status, adminNotes);
    
    console.log('Order status updated successfully:', {
      orderId: updatedOrder.id,
      status: updatedOrder.status,
      customerName: updatedOrder.customerName,
      businessName: updatedOrder.businessName
    });

    return NextResponse.json({
      success: true,
      message: `Order ${status === 'approved' ? 'approved' : status === 'rejected' ? 'rejected' : 'updated'} successfully`,
      order: {
        id: updatedOrder.id,
        status: updatedOrder.status,
        updatedAt: updatedOrder.updatedAt,
        adminNotes: updatedOrder.adminNotes,
      }
    });

  } catch (error) {
    console.error('Order status update error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: "An error occurred while updating order status" 
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
      'Access-Control-Allow-Methods': 'PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}