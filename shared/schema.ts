import { pgTable, text, serial, timestamp, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// CommonJS exports for Vercel serverless functions
if (typeof module !== 'undefined' && module.exports) {
  const { pgTable: pgTableCJS, text: textCJS, serial: serialCJS, timestamp: timestampCJS, boolean: booleanCJS, integer: integerCJS } = require("drizzle-orm/pg-core");
}

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  website: text("website").notNull(),
  company: text("company"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Blog Posts table for CRM
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  tags: text("tags").array().default([]),
  isPublished: boolean("is_published").default(false).notNull(),
  authorId: integer("author_id").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Admin Sessions table
export const adminSessions = pgTable("admin_sessions", {
  id: serial("id").primaryKey(),
  sessionToken: text("session_token").notNull().unique(),
  userId: integer("user_id").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Blog Analytics tables for real statistics
export const blogViews = pgTable("blog_views", {
  id: serial("id").primaryKey(),
  postSlug: text("post_slug").notNull(),
  viewedAt: timestamp("viewed_at").defaultNow().notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
});

export const blogLikes = pgTable("blog_likes", {
  id: serial("id").primaryKey(),
  postSlug: text("post_slug").notNull(),
  likedAt: timestamp("liked_at").defaultNow().notNull(),
  ipAddress: text("ip_address"),
});

export const blogShares = pgTable("blog_shares", {
  id: serial("id").primaryKey(),
  postSlug: text("post_slug").notNull(),
  platform: text("platform").notNull(), // facebook, twitter, linkedin, copy
  sharedAt: timestamp("shared_at").defaultNow().notNull(),
  ipAddress: text("ip_address"),
});

// Types and schemas for blog analytics
export type BlogView = typeof blogViews.$inferSelect;
export type InsertBlogView = typeof blogViews.$inferInsert;
export type BlogLike = typeof blogLikes.$inferSelect;
export type InsertBlogLike = typeof blogLikes.$inferInsert;
export type BlogShare = typeof blogShares.$inferSelect;
export type InsertBlogShare = typeof blogShares.$inferInsert;

export const insertBlogViewSchema = createInsertSchema(blogViews);
export const insertBlogLikeSchema = createInsertSchema(blogLikes);
export const insertBlogShareSchema = createInsertSchema(blogShares);

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  website: true,
  company: true,
  message: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).pick({
  title: true,
  slug: true,
  excerpt: true,
  content: true,
  category: true,
  tags: true,
  isPublished: true,
  authorId: true,
});

export const insertAdminSessionSchema = createInsertSchema(adminSessions).pick({
  sessionToken: true,
  userId: true,
  expiresAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertAdminSession = z.infer<typeof insertAdminSessionSchema>;
export type AdminSession = typeof adminSessions.$inferSelect;
