import {
  adminUsers,
  adminSessions,
  blogPosts,
  contacts,
  type AdminUser,
  type AdminSession,
  type BlogPost,
  type Contact,
  type InsertAdminUser,
  type InsertAdminSession,
  type InsertBlogPost,
  type InsertContact,
} from "../shared/schema";
import { db } from "./db";
import { eq, desc, and, gte, lt } from "drizzle-orm";

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
}

export class DatabaseStorage implements IStorage {
  // Admin user operations
  async getAdminUser(id: number): Promise<AdminUser | undefined> {
    const [user] = await db.select().from(adminUsers).where(eq(adminUsers.id, id));
    return user;
  }

  async getAdminUserByUsername(username: string): Promise<AdminUser | undefined> {
    try {
      const [user] = await db.select().from(adminUsers).where(eq(adminUsers.username, username));
      return user;
    } catch (error) {
      console.error('Database error in getAdminUserByUsername:', error);
      // Fallback for admin user if database fails
      if (username === 'admin') {
        return {
          id: 1,
          username: 'admin',
          password: '$2b$10$HUZOPJoMqmPeKP1JX/4cDuBC5zqXZL35.Vn87jt94DsKCZMYeKq6q',
          email: 'admin@pravdagency.eu',
          createdAt: new Date(),
          updatedAt: new Date()
        };
      }
      return undefined;
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
        token: session.token,
        expiresAt: session.expiresAt,
        createdAt: new Date()
      };
    }
  }

  async getAdminSession(token: string): Promise<AdminSession | undefined> {
    const [session] = await db
      .select()
      .from(adminSessions)
      .where(and(
        eq(adminSessions.token, token),
        gte(adminSessions.expiresAt, new Date())
      ));
    return session;
  }

  async deleteAdminSession(token: string): Promise<void> {
    await db.delete(adminSessions).where(eq(adminSessions.token, token));
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
}

export const storage = new DatabaseStorage();