import { db } from './server/db.ts';
import { adminUsers } from './shared/schema.ts';
import bcrypt from 'bcrypt';
import { eq, count } from 'drizzle-orm';

// Admin user configuration
const ADMIN_CONFIG = {
  username: process.env.ADMIN_USERNAME || 'admin',
  password: process.env.ADMIN_PASSWORD || 'pravda2025',
  email: process.env.ADMIN_EMAIL || 'admin@pravdagency.eu',
};

async function setupFirstAdmin() {
  try {
    console.log('Starting admin setup process...');
    
    // Check if any admin users already exist
    const [existingAdminCount] = await db
      .select({ count: count() })
      .from(adminUsers);
    
    if (existingAdminCount.count > 0) {
      console.log(`Admin setup skipped: ${existingAdminCount.count} admin user(s) already exist`);
      return;
    }
    
    console.log('No admin users found. Creating first admin user...');
    
    // Hash the password with high security
    const hashedPassword = await bcrypt.hash(ADMIN_CONFIG.password, 12);
    
    // Create the first admin user
    const [newAdminUser] = await db.insert(adminUsers).values({
      username: ADMIN_CONFIG.username,
      password: hashedPassword,
      email: ADMIN_CONFIG.email,
    }).returning();
    
    console.log('✅ First admin user created successfully!');
    console.log('Admin Details:');
    console.log(`  - ID: ${newAdminUser.id}`);
    console.log(`  - Username: ${newAdminUser.username}`);
    console.log(`  - Email: ${newAdminUser.email}`);
    console.log(`  - Created: ${newAdminUser.createdAt}`);
    console.log('');
    console.log('🔐 Login Credentials:');
    console.log(`  - Username: ${ADMIN_CONFIG.username}`);
    console.log(`  - Password: ${ADMIN_CONFIG.password}`);
    console.log('');
    console.log('🚀 You can now access the admin panel at: /admin/login');
    
  } catch (error) {
    console.error('❌ Error during admin setup:', error);
    
    if (error.code === '23505') { // Unique constraint violation
      console.log('Admin user with this username or email already exists');
    } else {
      throw error; // Re-throw for other errors
    }
  }
}

// Function to check admin setup status
async function checkAdminSetup() {
  try {
    const [adminCount] = await db
      .select({ count: count() })
      .from(adminUsers);
    
    console.log(`Admin Status: ${adminCount.count} admin user(s) configured`);
    
    if (adminCount.count === 0) {
      console.log('⚠️  No admin users found. Run this setup script to create the first admin.');
    } else {
      console.log('✅ Admin system is properly configured.');
    }
    
    return adminCount.count;
  } catch (error) {
    console.error('Error checking admin setup:', error);
    return 0;
  }
}

// Main execution
async function main() {
  const command = process.argv[2];
  
  switch (command) {
    case 'check':
      await checkAdminSetup();
      break;
    case 'create':
    case 'setup':
    default:
      await setupFirstAdmin();
      break;
  }
  
  process.exit(0);
}

// Handle script execution
main().catch((error) => {
  console.error('Fatal error during admin setup:', error);
  process.exit(1);
});