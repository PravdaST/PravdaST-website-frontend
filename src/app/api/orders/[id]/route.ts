import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../../../server/storage';
import { OrderStatus, OrderPriority, PaymentStatus } from '../../../../../shared/schema';
import { z } from 'zod';

// Update order schema for admin operations
const updateOrderSchema = z.object({
  status: z.enum(['pending', 'approved', 'in_progress', 'completed', 'rejected']).optional(),
  priority: z.enum(['low', 'normal', 'high', 'urgent']).optional(),
  assignedTo: z.number().optional(),
  adminNotes: z.string().optional(),
  estimatedCompletionDate: z.string().datetime().optional(),
  projectUrl: z.string().url().optional(),
  projectPassword: z.string().optional(),
  quotedPrice: z.number().positive().optional(),
  finalPrice: z.number().positive().optional(),
  paymentStatus: z.enum(['pending', 'paid', 'refunded']).optional(),
});

// Input sanitization function
function sanitizeInput(input: string): string {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+="[^"]*"/gi, '') // Remove event handlers
    .trim();
}

// GET - Fetch specific order
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const orderId = parseInt(params.id);
    
    if (isNaN(orderId)) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Невалиден ID на поръчката" 
        },
        { status: 400 }
      );
    }

    const order = await storage.getOrder(orderId);
    
    if (!order) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Поръчката не е намерена" 
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      order: order
    });

  } catch (error) {
    console.error('Error fetching order:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Грешка при зареждане на поръчката" 
      },
      { status: 500 }
    );
  }
}

// PUT - Update specific order (admin operations)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const orderId = parseInt(params.id);
    
    if (isNaN(orderId)) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Невалиден ID на поръчката" 
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
          message: "Поръчката не е намерена" 
        },
        { status: 404 }
      );
    }

    const body = await request.json();
    
    // Validate input data
    const validationResult = updateOrderSchema.safeParse(body);
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
    
    // Sanitize string inputs
    const updateData: any = {};
    
    if (data.status) updateData.status = data.status;
    if (data.priority) updateData.priority = data.priority;
    if (data.assignedTo) updateData.assignedTo = data.assignedTo;
    if (data.adminNotes) updateData.adminNotes = sanitizeInput(data.adminNotes);
    if (data.estimatedCompletionDate) updateData.estimatedCompletionDate = new Date(data.estimatedCompletionDate);
    if (data.projectUrl) updateData.projectUrl = sanitizeInput(data.projectUrl);
    if (data.projectPassword) updateData.projectPassword = sanitizeInput(data.projectPassword);
    if (data.quotedPrice) updateData.quotedPrice = data.quotedPrice;
    if (data.finalPrice) updateData.finalPrice = data.finalPrice;
    if (data.paymentStatus) updateData.paymentStatus = data.paymentStatus;

    console.log('Updating order:', {
      orderId,
      updates: Object.keys(updateData),
      timestamp: new Date().toISOString()
    });

    // Use specialized method for status updates
    let updatedOrder;
    if (data.status && data.adminNotes) {
      updatedOrder = await storage.updateOrderStatus(orderId, data.status, data.adminNotes);
      
      // If there are other updates besides status and notes, apply them
      const otherUpdates = { ...updateData };
      delete otherUpdates.status;
      delete otherUpdates.adminNotes;
      
      if (Object.keys(otherUpdates).length > 0) {
        updatedOrder = await storage.updateOrder(orderId, otherUpdates);
      }
    } else {
      updatedOrder = await storage.updateOrder(orderId, updateData);
    }

    console.log('Order updated successfully:', {
      orderId: updatedOrder.id,
      newStatus: updatedOrder.status,
      updatedFields: Object.keys(updateData)
    });

    return NextResponse.json({
      success: true,
      message: "Поръчката е обновена успешно",
      order: updatedOrder
    });

  } catch (error) {
    console.error('Error updating order:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Грешка при обновяване на поръчката" 
      },
      { status: 500 }
    );
  }
}

// DELETE - Delete specific order (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const orderId = parseInt(params.id);
    
    if (isNaN(orderId)) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Невалиден ID на поръчката" 
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
          message: "Поръчката не е намерена" 
        },
        { status: 404 }
      );
    }

    await storage.deleteOrder(orderId);

    console.log('Order deleted successfully:', {
      orderId,
      customerEmail: existingOrder.customerEmail,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: "Поръчката е изтрита успешно"
    });

  } catch (error) {
    console.error('Error deleting order:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Грешка при изтриване на поръчката" 
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
      'Access-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}