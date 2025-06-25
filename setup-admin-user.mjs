import bcrypt from 'bcrypt';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function setupAdminUser() {
  try {
    // Hash the password
    const password = 'pravda2025';
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    console.log('Setting up admin user...');
    
    // Insert or update admin user
    const result = await pool.query(
      `INSERT INTO admin_users (username, password_hash) 
       VALUES ($1, $2) 
       ON CONFLICT (username) 
       DO UPDATE SET password_hash = $2
       RETURNING id, username`,
      ['admin', hashedPassword]
    );
    
    console.log('Admin user created/updated:', result.rows[0]);
    console.log('Username: admin');
    console.log('Password: pravda2025');
    
    await pool.end();
  } catch (error) {
    console.error('Error setting up admin user:', error);
  }
}

setupAdminUser();