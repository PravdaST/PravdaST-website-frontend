import type { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';
import { db } from '../../lib/db';
import { categories } from '../../shared/schema';
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
        const allCategories = await db.select().from(categories);
        return res.status(200).json(allCategories);

      case 'POST':
        const { name, slug, description } = req.body;
        if (!name || !slug) {
          return res.status(400).json({ message: 'Name and slug are required' });
        }

        const [newCategory] = await db
          .insert(categories)
          .values({ name, slug, description })
          .returning();
        
        return res.status(201).json(newCategory);

      case 'PUT':
        const { id } = req.query;
        const updateData = req.body;
        
        const [updatedCategory] = await db
          .update(categories)
          .set({ ...updateData, updatedAt: new Date() })
          .where(eq(categories.id, Number(id)))
          .returning();
        
        return res.status(200).json(updatedCategory);

      case 'DELETE':
        const { id: deleteId } = req.query;
        
        await db
          .delete(categories)
          .where(eq(categories.id, Number(deleteId)));
        
        return res.status(200).json({ message: 'Category deleted' });

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Categories API error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}