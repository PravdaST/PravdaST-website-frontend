import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { blogPosts, adminSessions } from '../../../shared/schema.js';
import { eq } from 'drizzle-orm';
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
  const [session] = await db
    .select()
    .from(adminSessions)
    .where(eq(adminSessions.sessionToken, token));
  
  if (!session || session.expiresAt <= new Date()) {
    throw new Error('Invalid or expired session');
  }

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
    await authenticateAdmin(req);
    const { id } = req.query;
    const postId = parseInt(id);

    if (req.method === 'PUT') {
      // Update blog post
      const updateData = {
        ...req.body,
        updatedAt: new Date(),
      };
      delete updateData.authorId; // Don't allow changing author
      
      const [post] = await db
        .update(blogPosts)
        .set(updateData)
        .where(eq(blogPosts.id, postId))
        .returning();
        
      if (!post) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
      
      return res.json({ message: 'Blog post updated successfully', post });
    }

    if (req.method === 'DELETE') {
      // Delete blog post
      await db.delete(blogPosts).where(eq(blogPosts.id, postId));
      return res.json({ message: 'Blog post deleted successfully' });
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error('Blog post API error:', error);
    if (error.message.includes('token') || error.message.includes('session')) {
      return res.status(401).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
}