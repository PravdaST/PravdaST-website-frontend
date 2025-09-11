import {
  adminUsers,
  adminSessions,
  blogPosts,
  contacts,
  rateLimits,
  orders,
  type AdminUser,
  type AdminSession,
  type BlogPost,
  type Contact,
  type RateLimit,
  type Order,
  type InsertAdminUser,
  type InsertAdminSession,
  type InsertBlogPost,
  type InsertContact,
  type InsertRateLimit,
  type InsertOrder,
  OrderStatus,
} from "../shared/schema";
import { db } from "./db";
import { eq, desc, and, gte, lt } from "drizzle-orm";
import { verifyToken, createSecureSessionToken } from "./auth-utils";

// Interface for storage operations
export interface IStorage {
  // Admin user operations
  getAdminUser(id: number): Promise<AdminUser | undefined>;
  getAdminUserByUsername(username: string): Promise<AdminUser | undefined>;
  createAdminUser(user: InsertAdminUser): Promise<AdminUser>;
  
  // Admin session operations
  createAdminSession(session: InsertAdminSession): Promise<AdminSession>;
  getAdminSession(token: string): Promise<AdminSession | undefined>;
  deleteAdminSession(token: string): Promise<void>;
  deleteExpiredSessions(): Promise<void>;
  
  // Blog post operations
  getAllBlogPosts(): Promise<BlogPost[]>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost>;
  deleteBlogPost(id: number): Promise<void>;
  publishBlogPost(id: number): Promise<BlogPost>;
  unpublishBlogPost(id: number): Promise<BlogPost>;
  
  // Contact operations
  getAllContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
  
  // Rate limiting operations
  checkRateLimit(ipAddress: string, endpoint: string, windowMinutes: number, maxRequests: number): Promise<{ allowed: boolean; resetTime?: Date }>;
  recordRequest(ipAddress: string, endpoint: string): Promise<void>;
  cleanupExpiredRateLimits(): Promise<void>;
  
  // Order operations
  getAllOrders(): Promise<Order[]>;
  getOrder(id: number): Promise<Order | undefined>;
  getOrdersByCustomerEmail(email: string): Promise<Order[]>;
  getOrdersByStatus(status: string): Promise<Order[]>;
  createOrder(order: InsertOrder): Promise<Order>;
  updateOrder(id: number, order: Partial<InsertOrder>): Promise<Order>;
  updateOrderStatus(id: number, status: string, adminNotes?: string): Promise<Order>;
  deleteOrder(id: number): Promise<void>;
  assignOrderToAdmin(orderId: number, adminId: number): Promise<Order>;
  completeOrder(id: number, projectUrl?: string, finalPrice?: number): Promise<Order>;
}

export class DatabaseStorage implements IStorage {
  // Admin user operations
  async getAdminUser(id: number): Promise<AdminUser | undefined> {
    const [user] = await db.select().from(adminUsers).where(eq(adminUsers.id, id));
    return user;
  }

  async getAdminUserByUsername(username: string): Promise<AdminUser | undefined> {
    try {
      console.log('🔍 Searching for admin user:', username);
      const [user] = await db.select().from(adminUsers).where(eq(adminUsers.username, username));
      console.log('📊 Found user:', user ? 'YES' : 'NO');
      if (user) {
        console.log('👤 User details:', { id: user.id, username: user.username, email: user.email });
      }
      return user;
    } catch (error) {
      console.error('❌ Database error in getAdminUserByUsername:', error);
      
      // Try Supabase REST API as fallback
      console.log('🔄 Trying Supabase REST API fallback...');
      try {
        const { createClient } = require('@supabase/supabase-js');
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.SUPABASE_SERVICE_ROLE_KEY!
        );
        
        const { data: users, error: supabaseError } = await supabase
          .from('admin_users')
          .select('*')
          .eq('username', username);
          
        if (supabaseError) {
          console.log('❌ Supabase fallback error:', supabaseError.message);
          return undefined;
        }
        
        console.log('📊 Supabase returned:', users ? users.length : 0, 'users');
        if (users && users.length > 0) {
          console.log('✅ Supabase fallback success:', users[0].username);
          return users[0];
        } else {
          console.log('❌ No users found in Supabase for username:', username);
          
          // If no user found, create admin user in Supabase
          if (username === 'admin') {
            console.log('🔧 Creating admin user in Supabase...');
            const { data: newAdmin, error: createError } = await supabase
              .from('admin_users')
              .insert({
                username: 'admin',
                password: '$2b$10$DouK9y5osswsnt/uXv3m2OY.El0chgiZP9uDga/Yatuvwxyq9F5ky',
                email: 'admin@pravdagency.eu'
              })
              .select()
              .single();
            
            if (createError) {
              console.log('❌ Failed to create admin user:', createError.message);
              // Fallback to hardcoded user if creation fails
              return {
                id: 1,
                username: 'admin',
                password: '$2b$10$DouK9y5osswsnt/uXv3m2OY.El0chgiZP9uDga/Yatuvwxyq9F5ky',
                email: 'admin@pravdagency.eu',
                createdAt: new Date(),
                updatedAt: new Date()
              };
            } else {
              console.log('✅ Admin user created successfully in Supabase!');
              return newAdmin;
            }
          }
          
          return undefined;
        }
      } catch (fallbackError) {
        console.log('❌ Fallback failed:', fallbackError);
        return undefined;
      }
    }
  }

  async createAdminUser(user: InsertAdminUser): Promise<AdminUser> {
    const [newUser] = await db
      .insert(adminUsers)
      .values(user)
      .returning();
    return newUser;
  }

  // Admin session operations
  async createAdminSession(session: InsertAdminSession): Promise<AdminSession> {
    try {
      const [newSession] = await db
        .insert(adminSessions)
        .values(session)
        .returning();
      return newSession;
    } catch (error) {
      console.error('Database error in createAdminSession:', error);
      // Fallback session creation
      return {
        id: Date.now(),
        userId: session.userId,
        tokenHash: session.tokenHash,
        expiresAt: session.expiresAt,
        createdAt: new Date()
      };
    }
  }

  async getAdminSession(token: string): Promise<AdminSession | undefined> {
    // Get all non-expired sessions and verify token against each hash
    const sessions = await db
      .select()
      .from(adminSessions)
      .where(gte(adminSessions.expiresAt, new Date()));
    
    // Verify token against each stored hash
    for (const session of sessions) {
      const isValid = await verifyToken(token, session.tokenHash);
      if (isValid) {
        return session;
      }
    }
    
    return undefined;
  }

  async deleteAdminSession(token: string): Promise<void> {
    // Find the session by verifying token against hashes
    const sessions = await db.select().from(adminSessions);
    
    for (const session of sessions) {
      const isValid = await verifyToken(token, session.tokenHash);
      if (isValid) {
        await db.delete(adminSessions).where(eq(adminSessions.id, session.id));
        break;
      }
    }
  }

  async deleteExpiredSessions(): Promise<void> {
    await db.delete(adminSessions).where(
      lt(adminSessions.expiresAt, new Date())
    );
  }

  // Blog post operations
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.isPublished, true))
      .orderBy(desc(blogPosts.publishedAt));
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return post;
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post;
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [newPost] = await db
      .insert(blogPosts)
      .values({
        ...post,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();
    return newPost;
  }

  async updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost> {
    const [updatedPost] = await db
      .update(blogPosts)
      .set({
        ...post,
        updatedAt: new Date(),
      })
      .where(eq(blogPosts.id, id))
      .returning();
    return updatedPost;
  }

  async deleteBlogPost(id: number): Promise<void> {
    await db.delete(blogPosts).where(eq(blogPosts.id, id));
  }

  async publishBlogPost(id: number): Promise<BlogPost> {
    const [publishedPost] = await db
      .update(blogPosts)
      .set({
        isPublished: true,
        publishedAt: new Date(),
        updatedAt: new Date(),
      })
      .where(eq(blogPosts.id, id))
      .returning();
    return publishedPost;
  }

  async unpublishBlogPost(id: number): Promise<BlogPost> {
    const [unpublishedPost] = await db
      .update(blogPosts)
      .set({
        isPublished: false,
        publishedAt: null,
        updatedAt: new Date(),
      })
      .where(eq(blogPosts.id, id))
      .returning();
    return unpublishedPost;
  }

  // Contact operations
  async getAllContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(desc(contacts.createdAt));
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const [newContact] = await db
      .insert(contacts)
      .values({
        ...contact,
        createdAt: new Date(),
      })
      .returning();
    return newContact;
  }

  // Rate limiting operations
  async checkRateLimit(ipAddress: string, endpoint: string, windowMinutes: number, maxRequests: number): Promise<{ allowed: boolean; resetTime?: Date }> {
    try {
      const windowStart = new Date(Date.now() - windowMinutes * 60 * 1000);
      
      // Get existing rate limit record within the window
      const existingRecords = await db
        .select()
        .from(rateLimits)
        .where(and(
          eq(rateLimits.ipAddress, ipAddress),
          eq(rateLimits.endpoint, endpoint),
          gte(rateLimits.windowStart, windowStart)
        ))
        .orderBy(desc(rateLimits.windowStart))
        .limit(1);
      
      const existingRecord = existingRecords[0];

      if (!existingRecord) {
        // No existing record, create new one
        await this.recordRequest(ipAddress, endpoint);
        return { allowed: true };
      }

      if (existingRecord.requestCount >= maxRequests) {
        // Rate limit exceeded
        const resetTime = new Date(existingRecord.windowStart.getTime() + windowMinutes * 60 * 1000);
        return { allowed: false, resetTime };
      }

      // Within limit, increment counter
      await db
        .update(rateLimits)
        .set({
          requestCount: existingRecord.requestCount + 1,
          updatedAt: new Date(),
        })
        .where(eq(rateLimits.id, existingRecord.id));

      return { allowed: true };
    } catch (error) {
      console.error('Rate limit check failed:', error);
      // Fallback to allow request if database fails
      return { allowed: true };
    }
  }

  async recordRequest(ipAddress: string, endpoint: string): Promise<void> {
    try {
      await db
        .insert(rateLimits)
        .values({
          ipAddress,
          endpoint,
          requestCount: 1,
          windowStart: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        });
    } catch (error) {
      console.error('Failed to record rate limit request:', error);
      // Silently fail if unable to record
    }
  }

  async cleanupExpiredRateLimits(): Promise<void> {
    try {
      // Clean up records older than 24 hours
      const cutoffTime = new Date(Date.now() - 24 * 60 * 60 * 1000);
      await db
        .delete(rateLimits)
        .where(lt(rateLimits.createdAt, cutoffTime));
    } catch (error) {
      console.error('Failed to cleanup expired rate limits:', error);
    }
  }

  // Order operations
  async getAllOrders(): Promise<Order[]> {
    return await db.select().from(orders).orderBy(desc(orders.createdAt));
  }

  async getOrder(id: number): Promise<Order | undefined> {
    const [order] = await db.select().from(orders).where(eq(orders.id, id));
    return order;
  }

  async getOrdersByCustomerEmail(email: string): Promise<Order[]> {
    return await db
      .select()
      .from(orders)
      .where(eq(orders.customerEmail, email))
      .orderBy(desc(orders.createdAt));
  }

  async getOrdersByStatus(status: string): Promise<Order[]> {
    return await db
      .select()
      .from(orders)
      .where(eq(orders.status, status))
      .orderBy(desc(orders.createdAt));
  }

  async createOrder(order: InsertOrder): Promise<Order> {
    try {
      const [newOrder] = await db
        .insert(orders)
        .values({
          ...order,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
        .returning();
      return newOrder;
    } catch (error) {
      console.error('❌ Database error in createOrder:', error);
      
      // Try Supabase REST API as fallback
      console.log('🔄 Trying Supabase fallback for order creation...');
      try {
        const { createClient } = require('@supabase/supabase-js');
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.SUPABASE_SERVICE_ROLE_KEY!
        );
        
        const { data: newOrder, error: supabaseError } = await supabase
          .from('orders')
          .insert({
            customer_name: order.customerName,
            customer_email: order.customerEmail,
            customer_phone: order.customerPhone,
            business_name: order.businessName,
            business_type: order.businessType,
            business_website: order.businessWebsite,
            message: order.message,
            template_type: order.templateType,
            customization_data: order.customizationData || {},
            status: order.status || 'pending',
            priority: order.priority || 'normal',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          })
          .select()
          .single();
          
        if (supabaseError) {
          console.log('❌ Supabase fallback error:', supabaseError.message);
          throw new Error('Failed to create order');
        }
        
        console.log('✅ Order created via Supabase fallback:', newOrder.id);
        return newOrder;
        
      } catch (fallbackError) {
        console.log('❌ Fallback failed:', fallbackError);
        throw new Error('Failed to create order');
      }
    }
  }

  async updateOrder(id: number, order: Partial<InsertOrder>): Promise<Order> {
    const [updatedOrder] = await db
      .update(orders)
      .set({
        ...order,
        updatedAt: new Date(),
      })
      .where(eq(orders.id, id))
      .returning();
    return updatedOrder;
  }

  async updateOrderStatus(id: number, status: string, adminNotes?: string): Promise<Order> {
    const updateData: Partial<InsertOrder> = {
      status,
      updatedAt: new Date(),
    };
    
    if (adminNotes) {
      updateData.adminNotes = adminNotes;
    }
    
    // Set specific timestamps based on status
    if (status === OrderStatus.APPROVED) {
      updateData.approvedAt = new Date();
    } else if (status === OrderStatus.COMPLETED) {
      updateData.completedAt = new Date();
      updateData.actualCompletionDate = new Date();
    }

    const [updatedOrder] = await db
      .update(orders)
      .set(updateData)
      .where(eq(orders.id, id))
      .returning();
    return updatedOrder;
  }

  async deleteOrder(id: number): Promise<void> {
    await db.delete(orders).where(eq(orders.id, id));
  }

  async assignOrderToAdmin(orderId: number, adminId: number): Promise<Order> {
    const [updatedOrder] = await db
      .update(orders)
      .set({
        assignedTo: adminId,
        updatedAt: new Date(),
      })
      .where(eq(orders.id, orderId))
      .returning();
    return updatedOrder;
  }

  async completeOrder(id: number, projectUrl?: string, finalPrice?: number): Promise<Order> {
    const updateData: Partial<InsertOrder> = {
      status: OrderStatus.COMPLETED,
      completedAt: new Date(),
      actualCompletionDate: new Date(),
      updatedAt: new Date(),
    };
    
    if (projectUrl) {
      updateData.projectUrl = projectUrl;
    }
    
    if (finalPrice) {
      updateData.finalPrice = finalPrice;
    }

    const [completedOrder] = await db
      .update(orders)
      .set(updateData)
      .where(eq(orders.id, id))
      .returning();
    return completedOrder;
  }
}

export const storage = new DatabaseStorage();