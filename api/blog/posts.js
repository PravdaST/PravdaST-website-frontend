import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { eq, desc } from 'drizzle-orm';
import { pgTable, serial, text, boolean, timestamp } from 'drizzle-orm/pg-core';
import ws from 'ws';

// Configure WebSocket for Neon
neonConfig.webSocketConstructor = ws;

// Define the blog posts table schema
const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  tags: text("tags").array().default([]),
  isPublished: boolean("is_published").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    if (!process.env.DATABASE_URL) {
      // Fallback to static blog posts if database is not available
      const fallbackPosts = [
        {
          id: 1,
          title: "Системен подход към бизнес растежа",
          slug: "sistemen-podhod-rastezh",
          excerpt: "Как да създадете предсказуем растеж в B2B компанията си",
          content: "Подробно ръководство за създаване на системи за устойчив бизнес растеж. Включва стратегии за automation, lead generation и sales processes.",
          category: "Бизнес стратегии",
          tags: ["растеж", "B2B", "системи", "automation"],
          isPublished: true,
          createdAt: "2025-06-25T11:52:36.432Z",
          updatedAt: "2025-06-25T11:52:36.432Z"
        },
        {
          id: 2,
          title: "SEO Struktor™ - Революцията в органичния трафик",
          slug: "seo-struktor-revolutsiya",
          excerpt: "Нашата собствена методология за топ позиции в Google",
          content: "SEO Struktor™ е нашият собствен framework за постигане на топ позиции в Google. Комбинира техническо SEO, content strategy и link building.",
          category: "SEO",
          tags: ["SEO", "органичен трафик", "Google", "методология"],
          isPublished: true,
          createdAt: "2025-06-25T11:52:36.432Z",
          updatedAt: "2025-06-25T11:52:36.432Z"
        },
        {
          id: 3,
          title: "Clientomat™ - Автоматизация на клиентския път",
          slug: "clientomat-avtomatizatsiya",
          excerpt: "Как да автоматизирате цялата customer journey",
          content: "Clientomat™ системата за автоматизация на клиентския опит от първия контакт до повторните продажби. Включва CRM integration и email marketing.",
          category: "Автоматизация",
          tags: ["CRM", "автоматизация", "customer journey", "продажби"],
          isPublished: true,
          createdAt: "2025-06-25T11:52:36.432Z",
          updatedAt: "2025-06-25T11:52:36.432Z"
        }
      ];
      
      return res.status(200).json(fallbackPosts);
    }

    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const db = drizzle({ client: pool, schema: { blogPosts } });

    // Fetch only published blog posts
    const posts = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.isPublished, true))
      .orderBy(desc(blogPosts.createdAt));

    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    
    // Fallback to static posts on any database error
    const fallbackPosts = [
      {
        id: 1,
        title: "Системен подход към бизнес растежа",
        slug: "sistemen-podhod-rastezh",
        excerpt: "Как да създадете предсказуем растеж в B2B компанията си",
        content: "Подробно ръководство за създаване на системи за устойчив бизнес растеж. Включва стратегии за automation, lead generation и sales processes.",
        category: "Бизнес стратегии",
        tags: ["растеж", "B2B", "системи", "automation"],
        isPublished: true,
        createdAt: "2025-06-25T11:52:36.432Z",
        updatedAt: "2025-06-25T11:52:36.432Z"
      },
      {
        id: 2,
        title: "SEO Struktor™ - Революцията в органичния трафик",
        slug: "seo-struktor-revolutsiya",
        excerpt: "Нашата собствена методология за топ позиции в Google",
        content: "SEO Struktor™ е нашият собствен framework за постигане на топ позиции в Google. Комбинира техническо SEO, content strategy и link building.",
        category: "SEO",
        tags: ["SEO", "органичен трафик", "Google", "методология"],
        isPublished: true,
        createdAt: "2025-06-25T11:52:36.432Z",
        updatedAt: "2025-06-25T11:52:36.432Z"
      },
      {
        id: 3,
        title: "Clientomat™ - Автоматизация на клиентския път",
        slug: "clientomat-avtomatizatsiya",
        excerpt: "Как да автоматизирате цялата customer journey",
        content: "Clientomat™ системата за автоматизация на клиентския опит от първия контакт до повторните продажби. Включва CRM integration и email marketing.",
        category: "Автоматизация",
        tags: ["CRM", "автоматизация", "customer journey", "продажби"],
        isPublished: true,
        createdAt: "2025-06-25T11:52:36.432Z",
        updatedAt: "2025-06-25T11:52:36.432Z"
      }
    ];
    
    res.status(200).json(fallbackPosts);
  }
}