import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../../../../server/storage';
import { z } from 'zod';

// Force Node runtime for database compatibility
export const runtime = 'nodejs';

// Order update schema
const orderUpdateSchema = z.object({
  status: z.enum(['pending', 'approved', 'in_progress', 'completed', 'rejected']).optional(),
  priority: z.enum(['low', 'normal', 'high', 'urgent']).optional(),
  adminNotes: z.string().optional(),
  estimatedCompletionDate: z.string().optional(), // ISO date string
  quotedPrice: z.number().min(0).optional(), // in cents
  finalPrice: z.number().min(0).optional(), // in cents
  projectUrl: z.string().url().optional(),
  projectPassword: z.string().optional(),
  assignedTo: z.number().optional(), // admin user ID
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

export async function GET(
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

    // Get order details
    const order = await storage.getOrder(orderId);
    if (!order) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Order not found" 
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      order: order
    });

  } catch (error) {
    console.error('Get order error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: "An error occurred while fetching order details" 
      },
      { status: 500 }
    );
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
    const validationResult = orderUpdateSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Invalid order data", 
          errors: validationResult.error.errors 
        },
        { status: 400 }
      );
    }

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

    const updateData = validationResult.data;
    
    // Convert date string to Date object if provided
    if (updateData.estimatedCompletionDate) {
      try {
        const dateObj = new Date(updateData.estimatedCompletionDate);
        if (isNaN(dateObj.getTime())) {
          return NextResponse.json(
            { 
              success: false, 
              message: "Invalid estimated completion date" 
            },
            { status: 400 }
          );
        }
        (updateData as any).estimatedCompletionDate = dateObj;
      } catch (error) {
        return NextResponse.json(
          { 
            success: false, 
            message: "Invalid estimated completion date format" 
          },
          { status: 400 }
        );
      }
    }

    console.log('Admin updating order:', {
      orderId,
      updateData,
      adminId: admin.id,
      adminUsername: admin.username,
      timestamp: new Date().toISOString()
    });

    // Convert string dates to Date objects if needed
    const convertedUpdateData = {
      ...updateData,
      ...(updateData.estimatedCompletionDate && {
        estimatedCompletionDate: new Date(updateData.estimatedCompletionDate)
      })
    };

    // Update order
    const updatedOrder = await storage.updateOrder(orderId, convertedUpdateData as any);
    
    console.log('Order updated successfully:', {
      orderId: updatedOrder.id,
      status: updatedOrder.status,
      priority: updatedOrder.priority,
      customerName: updatedOrder.customerName,
      businessName: updatedOrder.businessName
    });

    return NextResponse.json({
      success: true,
      message: "Order updated successfully",
      order: updatedOrder
    });

  } catch (error) {
    console.error('Order update error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: "An error occurred while updating the order" 
      },
      { status: 500 }
    );
  }
}

// DELETE endpoint for order deletion (admin only)
export async function DELETE(
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

    console.log('Admin deleting order:', {
      orderId,
      customerName: existingOrder.customerName,
      businessName: existingOrder.businessName,
      adminId: admin.id,
      adminUsername: admin.username,
      timestamp: new Date().toISOString()
    });

    // Delete order
    await storage.deleteOrder(orderId);
    
    console.log('Order deleted successfully:', { orderId });

    return NextResponse.json({
      success: true,
      message: "Order deleted successfully"
    });

  } catch (error) {
    console.error('Order deletion error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: "An error occurred while deleting the order" 
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
      'Access-Control-Allow-Methods': 'GET, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}