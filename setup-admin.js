import { db } from './server/db.js';
import { adminUsers } from './shared/schema.ts';
import bcrypt from 'bcrypt';

async function createAdminUser() {
  try {
    const hashedPassword = await bcrypt.hash('pravda2025', 10);
    
    const [user] = await db.insert(adminUsers).values({
      username: 'admin',
      password: hashedPassword,
      email: 'admin@pravdagency.eu',
    }).returning();
    
    console.log('Admin user created:', user);
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
}

createAdminUser();
