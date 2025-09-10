import {
  pgTable,
  text,
  varchar,
  timestamp,
  jsonb,
  index,
  boolean,
  integer,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table (mandatory for authentication)
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// Admin users table
export const adminUsers = pgTable("admin_users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  username: varchar("username", { length: 255 }).unique().notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).unique(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Admin sessions table
export const adminSessions = pgTable("admin_sessions", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  userId: integer("user_id").references(() => adminUsers.id),
  token: varchar("token", { length: 255 }).unique().notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Blog posts table
export const blogPosts = pgTable("blog_posts", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: varchar("title", { length: 500 }).notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  author: varchar("author", { length: 255 }).notNull().default("Екипът на Pravda Agency"),
  publishedAt: timestamp("published_at"),
  readTime: integer("read_time").notNull().default(5),
  category: varchar("category", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).unique().notNull(),
  tags: jsonb("tags").$type<string[]>().notNull().default([]),
  featuredImage: varchar("featured_image", { length: 500 }),
  isPublished: boolean("is_published").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Contacts table
export const contacts = pgTable("contacts", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }).notNull(),
  website: varchar("website", { length: 255 }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Rate limiting table for spam protection
export const rateLimits = pgTable("rate_limits", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  ipAddress: varchar("ip_address", { length: 45 }).notNull(), // IPv6 compatible
  endpoint: varchar("endpoint", { length: 100 }).notNull(),
  requestCount: integer("request_count").notNull().default(1),
  windowStart: timestamp("window_start").notNull().defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => [
  index("idx_rate_limits_ip_endpoint").on(table.ipAddress, table.endpoint),
  index("idx_rate_limits_window").on(table.windowStart),
]);

// Types
export type AdminUser = typeof adminUsers.$inferSelect;
export type InsertAdminUser = typeof adminUsers.$inferInsert;

export type AdminSession = typeof adminSessions.$inferSelect;
export type InsertAdminSession = typeof adminSessions.$inferInsert;

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = typeof blogPosts.$inferInsert;

export type Contact = typeof contacts.$inferSelect;
export type InsertContact = typeof contacts.$inferInsert;

export type RateLimit = typeof rateLimits.$inferSelect;
export type InsertRateLimit = typeof rateLimits.$inferInsert;

// Validation schemas
export const insertAdminUserSchema = createInsertSchema(adminUsers);
export const insertAdminSessionSchema = createInsertSchema(adminSessions);
export const insertBlogPostSchema = createInsertSchema(blogPosts);
export const insertContactSchema = createInsertSchema(contacts);
export const insertRateLimitSchema = createInsertSchema(rateLimits);

export type InsertBlogPostInput = z.infer<typeof insertBlogPostSchema>;
export type InsertContactInput = z.infer<typeof insertContactSchema>;
export type InsertRateLimitInput = z.infer<typeof insertRateLimitSchema>;