import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { eq } from 'drizzle-orm';
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
    const { slug } = req.query;
    
    if (!slug) {
      return res.status(400).json({ message: 'Slug parameter is required' });
    }

    // Fallback posts for when database is unavailable
    const fallbackPosts = {
      "sistemen-podhod-rastezh": {
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
      "seo-struktor-revolutsiya": {
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
      "clientomat-avtomatizatsiya": {
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
    };

    if (!process.env.DATABASE_URL) {
      // Return fallback post if database is not configured
      const post = fallbackPosts[slug];
      if (!post) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
      return res.status(200).json(post);
    }

    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const db = drizzle({ client: pool, schema: { blogPosts } });

    // Fetch blog post by slug
    const [post] = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.slug, slug));

    if (!post || !post.isPublished) {
      // Try fallback before returning 404
      const fallbackPost = fallbackPosts[slug];
      if (fallbackPost) {
        return res.status(200).json(fallbackPost);
      }
      return res.status(404).json({ message: 'Blog post not found' });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    
    // Try fallback on database error
    const fallbackPosts = {
      "sistemen-podhod-rastezh": {
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
      }
    };
    
    const { slug } = req.query;
    const fallbackPost = fallbackPosts[slug];
    if (fallbackPost) {
      return res.status(200).json(fallbackPost);
    }
    
    res.status(500).json({ 
      message: 'Failed to fetch blog post',
      error: error.message 
    });
  }
}