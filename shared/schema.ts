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
  tokenHash: varchar("token_hash", { length: 60 }).unique().notNull(), // bcrypt hash length
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

// Orders table for landing page generator
export const orders = pgTable("orders", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  // Customer information
  customerName: varchar("customer_name", { length: 255 }).notNull(),
  customerEmail: varchar("customer_email", { length: 255 }).notNull(),
  customerPhone: varchar("customer_phone", { length: 50 }).notNull(),
  businessName: varchar("business_name", { length: 255 }).notNull(),
  businessType: varchar("business_type", { length: 100 }).notNull(),
  businessWebsite: varchar("business_website", { length: 255 }),
  message: text("message"),
  
  // Template and customization data
  templateType: varchar("template_type", { length: 100 }).notNull(), // restaurant, cafe, shop, etc.
  customizationData: jsonb("customization_data").$type<Record<string, any>>().default({}),
  
  // Order status and workflow
  status: varchar("status", { length: 50 }).notNull().default("pending"), // pending, approved, in_progress, completed, rejected
  priority: varchar("priority", { length: 20 }).notNull().default("normal"), // low, normal, high, urgent
  
  // Admin workflow
  assignedTo: integer("assigned_to").references(() => adminUsers.id),
  adminNotes: text("admin_notes"),
  estimatedCompletionDate: timestamp("estimated_completion_date"),
  actualCompletionDate: timestamp("actual_completion_date"),
  
  // Project details
  projectUrl: varchar("project_url", { length: 500 }),
  projectPassword: varchar("project_password", { length: 100 }),
  
  // Pricing and payment
  quotedPrice: integer("quoted_price"), // in cents
  finalPrice: integer("final_price"), // in cents
  paymentStatus: varchar("payment_status", { length: 50 }).default("pending"), // pending, paid, refunded
  
  // Timestamps
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  approvedAt: timestamp("approved_at"),
  completedAt: timestamp("completed_at"),
}, (table) => [
  index("idx_orders_status").on(table.status),
  index("idx_orders_customer_email").on(table.customerEmail),
  index("idx_orders_created_at").on(table.createdAt),
  index("idx_orders_assigned_to").on(table.assignedTo),
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

export type Order = typeof orders.$inferSelect;
export type InsertOrder = typeof orders.$inferInsert;

// Validation schemas
export const insertAdminUserSchema = createInsertSchema(adminUsers);
export const insertAdminSessionSchema = createInsertSchema(adminSessions);
export const insertBlogPostSchema = createInsertSchema(blogPosts);
export const insertContactSchema = createInsertSchema(contacts);
export const insertRateLimitSchema = createInsertSchema(rateLimits);
export const insertOrderSchema = createInsertSchema(orders);

export type InsertBlogPostInput = z.infer<typeof insertBlogPostSchema>;
export type InsertContactInput = z.infer<typeof insertContactSchema>;
export type InsertRateLimitInput = z.infer<typeof insertRateLimitSchema>;
export type InsertOrderInput = z.infer<typeof insertOrderSchema>;

// Order status enums for type safety
export const OrderStatus = {
  PENDING: "pending",
  APPROVED: "approved", 
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  REJECTED: "rejected"
} as const;

export const OrderPriority = {
  LOW: "low",
  NORMAL: "normal",
  HIGH: "high",
  URGENT: "urgent"
} as const;

export const PaymentStatus = {
  PENDING: "pending",
  PAID: "paid", 
  REFUNDED: "refunded"
} as const;

export type OrderStatusType = typeof OrderStatus[keyof typeof OrderStatus];
export type OrderPriorityType = typeof OrderPriority[keyof typeof OrderPriority];
export type PaymentStatusType = typeof PaymentStatus[keyof typeof PaymentStatus];