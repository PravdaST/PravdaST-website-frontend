import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { blogPosts, adminSessions } from '../../../shared/schema.js';
import { eq, desc } from 'drizzle-orm';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle({ client: pool });

// Auth middleware function
async function authenticateAdmin(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('No token provided');
  }

  const token = authHeader.substring(7);
  const sessionResults = await db
    .select()
    .from(adminSessions)
    .where(eq(adminSessions.sessionToken, token));
  
  if (sessionResults.length === 0 || sessionResults[0].expiresAt <= new Date()) {
    throw new Error('Invalid or expired session');
  }
  
  const session = sessionResults[0];

  return session.userId;
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const userId = await authenticateAdmin(req);

    if (req.method === 'GET') {
      // Get all blog posts
      const posts = await db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
      return res.json(posts);
    }

    if (req.method === 'POST') {
      // Create new blog post
      const postData = {
        ...req.body,
        authorId: userId,
        updatedAt: new Date(),
      };
      
      const [post] = await db.insert(blogPosts).values(postData).returning();
      return res.json({ message: 'Blog post created successfully', post });
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error('Blog posts API error:', error);
    if (error.message.includes('token') || error.message.includes('session')) {
      return res.status(401).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
}