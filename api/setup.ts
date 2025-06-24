import type { VercelRequest, VercelResponse } from '@vercel/node';
import bcrypt from 'bcryptjs';
import { db } from '../lib/db';
import { adminUsers } from '../shared/schema';
import { eq } from 'drizzle-orm';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Check if admin user already exists
    const [existingUser] = await db
      .select()
      .from(adminUsers)
      .where(eq(adminUsers.username, 'admin'))
      .limit(1);

    if (existingUser) {
      return res.status(200).json({ message: 'Admin user already exists' });
    }

    // Create default admin user
    const hashedPassword = await bcrypt.hash('pravdast2025!', 10);
    
    const [newUser] = await db
      .insert(adminUsers)
      .values({
        username: 'admin',
        passwordHash: hashedPassword,
      })
      .returning();

    res.status(201).json({ 
      message: 'Default admin user created successfully',
      username: newUser.username
    });
  } catch (error) {
    console.error('Setup error:', error);
    res.status(500).json({ message: 'Setup failed' });
  }
}