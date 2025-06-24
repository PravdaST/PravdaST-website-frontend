import type { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';
import { db } from '../../lib/db';
import { blogPosts } from '../../shared/schema';
import { eq } from 'drizzle-orm';

function verifyAuth(req: VercelRequest): boolean {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) return false;
  
  const token = authHeader.substring(7);
  try {
    jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret-for-dev');
    return true;
  } catch {
    return false;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', 'https://www.pravdagency.eu');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (!verifyAuth(req)) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    switch (req.method) {
      case 'GET':
        const allPosts = await db.select().from(blogPosts);
        return res.status(200).json(allPosts);

      case 'POST':
        const { title, slug, content, excerpt, categoryId, tags, isPublished } = req.body;
        
        if (!title || !slug || !content) {
          return res.status(400).json({ message: 'Title, slug, and content are required' });
        }

        const [newPost] = await db
          .insert(blogPosts)
          .values({
            title,
            slug,
            content,
            excerpt,
            categoryId: categoryId || null,
            tags: tags || [],
            isPublished: isPublished || false,
          })
          .returning();
        
        return res.status(201).json(newPost);

      case 'PUT':
        const { id } = req.query;
        const updateData = req.body;
        
        const [updatedPost] = await db
          .update(blogPosts)
          .set({ ...updateData, updatedAt: new Date() })
          .where(eq(blogPosts.id, Number(id)))
          .returning();
        
        return res.status(200).json(updatedPost);

      case 'DELETE':
        const { id: deleteId } = req.query;
        
        await db
          .delete(blogPosts)
          .where(eq(blogPosts.id, Number(deleteId)));
        
        return res.status(200).json({ message: 'Blog post deleted' });

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Blog posts API error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}