import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { blogPosts, adminSessions } from '../../../../shared/schema.js';
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
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await authenticateAdmin(req);
    const { id } = req.query;
    const postId = parseInt(id);

    await db
      .update(blogPosts)
      .set({ isPublished: true, updatedAt: new Date() })
      .where(eq(blogPosts.id, postId));

    res.json({ message: 'Blog post published successfully' });
  } catch (error) {
    console.error('Publish API error:', error);
    if (error.message.includes('token') || error.message.includes('session')) {
      return res.status(401).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Failed to publish blog post' });
  }
}