import { users, contacts, type User, type InsertUser, type Contact, type InsertContact } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
  createBlogComment(comment: InsertBlogComment): Promise<BlogComment>;
  getBlogComments(blogSlug: string): Promise<BlogComment[]>;
  approveBlogComment(commentId: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(insertContact)
      .returning();
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(contacts.createdAt);
  }

  async createBlogComment(insertComment: InsertBlogComment): Promise<BlogComment> {
    const [comment] = await db.insert(blogComments).values(insertComment).returning();
    if (!comment) {
      throw new Error("Failed to create blog comment");
    }
    return comment;
  }

  async getBlogComments(blogSlug: string): Promise<BlogComment[]> {
    return await db
      .select()
      .from(blogComments)
      .where(eq(blogComments.blogSlug, blogSlug))
      .and(eq(blogComments.isApproved, true))
      .orderBy(desc(blogComments.createdAt));
  }

  async approveBlogComment(commentId: number): Promise<void> {
    await db
      .update(blogComments)
      .set({ isApproved: true })
      .where(eq(blogComments.id, commentId));
  }
}

export const storage = new DatabaseStorage();
