import bcrypt from 'bcrypt';
import { storage } from './storage';

export async function createAdminUser(username: string, password: string) {
  try {
    // Check if user already exists
    const existingUser = await storage.getUserByUsername(username);
    if (existingUser) {
      console.log(`User ${username} already exists`);
      return existingUser;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = await storage.createUser({
      username,
      password: hashedPassword
    });

    // Create admin record
    const admin = await storage.createAdmin({
      userId: user.id,
      role: 'admin',
      permissions: ['blog_write', 'blog_manage', 'categories_manage']
    });

    console.log(`Admin user created: ${username} (ID: ${user.id})`);
    return { user, admin };
  } catch (error) {
    console.error('Error creating admin user:', error);
    throw error;
  }
}

// Auto-create admin user on startup
export async function setupDefaultAdmin() {
  try {
    await createAdminUser('admin', 'pravdast2025!');
    console.log('Default admin user setup complete');
  } catch (error) {
    console.error('Failed to setup default admin:', error);
  }
}