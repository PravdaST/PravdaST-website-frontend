import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../../../server/storage';

// Force Node runtime for database compatibility
export const runtime = 'nodejs';

// Authentication helper function
async function authenticateAdmin(request: NextRequest) {
  try {
    // Get session token from cookie
    const sessionToken = request.cookies.get('admin-session')?.value;
    
    if (!sessionToken) {
      return {
        authenticated: false,
        error: {
          status: 401,
          message: "No session found"
        }
      };
    }

    // Verify session and get admin user
    const session = await storage.getAdminSession(sessionToken);
    if (!session) {
      return {
        authenticated: false,
        error: {
          status: 401,
          message: "Invalid or expired session"
        }
      };
    }

    // Check if session is expired
    if (session.expiresAt < new Date()) {
      // Clean up expired session
      await storage.deleteAdminSession(sessionToken);
      return {
        authenticated: false,
        error: {
          status: 401,
          message: "Session expired"
        }
      };
    }

    // Get admin user details
    const adminUser = await storage.getAdminUser(session.userId!);
    if (!adminUser) {
      return {
        authenticated: false,
        error: {
          status: 401,
          message: "Admin user not found"
        }
      };
    }

    return {
      authenticated: true,
      admin: {
        id: adminUser.id,
        username: adminUser.username,
        email: adminUser.email,
      }
    };

  } catch (error) {
    console.error('Admin authentication error:', error);
    return {
      authenticated: false,
      error: {
        status: 500,
        message: "Authentication verification failed"
      }
    };
  }
}

// GET endpoint for listing orders (admin only)
export async function GET(request: NextRequest) {
  try {
    // Authenticate admin user
    const authResult = await authenticateAdmin(request);
    if (!authResult.authenticated) {
      return NextResponse.json(
        { 
          success: false, 
          message: authResult.error!.message,
          authenticated: false
        },
        { status: authResult.error!.status }
      );
    }

    console.log('Admin orders request:', {
      admin: authResult.admin!.username,
      timestamp: new Date().toISOString()
    });

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const customerEmail = searchParams.get('customerEmail');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') || 'desc';
    
    let orders;
    
    if (status) {
      orders = await storage.getOrdersByStatus(status);
    } else if (customerEmail) {
      orders = await storage.getOrdersByCustomerEmail(customerEmail);
    } else {
      orders = await storage.getAllOrders();
    }

    // Sort orders
    orders.sort((a, b) => {
      const aValue = a[sortBy as keyof typeof a];
      const bValue = b[sortBy as keyof typeof b];
      
      if (sortOrder === 'desc') {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      } else {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      }
    });

    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedOrders = orders.slice(startIndex, endIndex);

    // Calculate pagination info
    const totalOrders = orders.length;
    const totalPages = Math.ceil(totalOrders / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    console.log('Orders retrieved successfully:', {
      admin: authResult.admin!.username,
      totalOrders,
      page,
      limit,
      returnedOrders: paginatedOrders.length
    });
    
    return NextResponse.json({
      success: true,
      orders: paginatedOrders,
      pagination: {
        page,
        limit,
        totalOrders,
        totalPages,
        hasNextPage,
        hasPrevPage,
      },
      stats: {
        pending: orders.filter(o => o.status === 'pending').length,
        approved: orders.filter(o => o.status === 'approved').length,
        in_progress: orders.filter(o => o.status === 'in_progress').length,
        completed: orders.filter(o => o.status === 'completed').length,
        rejected: orders.filter(o => o.status === 'rejected').length,
      }
    });
    
  } catch (error) {
    console.error('Error fetching admin orders:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to fetch orders",
        authenticated: true
      },
      { status: 500 }
    );
  }
}

// PATCH endpoint for updating order status (admin only)
export async function PATCH(request: NextRequest) {
  try {
    // Authenticate admin user
    const authResult = await authenticateAdmin(request);
    if (!authResult.authenticated) {
      return NextResponse.json(
        { 
          success: false, 
          message: authResult.error!.message,
          authenticated: false
        },
        { status: authResult.error!.status }
      );
    }

    const body = await request.json();
    const { orderId, status, priority, notes } = body;

    if (!orderId) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Order ID is required" 
        },
        { status: 400 }
      );
    }

    // Update order
    const updatedOrder = await storage.updateOrderStatus(orderId, status, notes);
    
    if (!updatedOrder) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Order not found" 
        },
        { status: 404 }
      );
    }

    console.log('Order updated by admin:', {
      admin: authResult.admin!.username,
      orderId,
      newStatus: status,
      priority,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: "Order updated successfully",
      order: updatedOrder
    });

  } catch (error) {
    console.error('Error updating order:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to update order" 
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
      'Access-Control-Allow-Methods': 'GET, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}