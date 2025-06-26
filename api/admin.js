import { Pool } from '@neondatabase/serverless';
import bcrypt from 'bcrypt';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export default async function handler(req, res) {
  const { action } = req.query;
  
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    switch (action) {
      case 'login':
        if (req.method !== 'POST') {
          return res.status(405).json({ error: 'Method not allowed' });
        }

        const { username, password } = req.body || {};
        
        if (!username || !password) {
          return res.status(400).json({ error: 'Username and password required' });
        }

        const client = await pool.connect();
        
        try {
          // Create admin tables if they don't exist
          await client.query(`
            CREATE TABLE IF NOT EXISTS admin_users (
              id SERIAL PRIMARY KEY,
              username VARCHAR(100) UNIQUE NOT NULL,
              password_hash VARCHAR(255) NOT NULL,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
          `);

          await client.query(`
            CREATE TABLE IF NOT EXISTS admin_sessions (
              id SERIAL PRIMARY KEY,
              user_id INTEGER REFERENCES admin_users(id),
              session_token VARCHAR(255) UNIQUE NOT NULL,
              expires_at TIMESTAMP NOT NULL,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
          `);

          // Check if admin user exists, create if not
          const userCheck = await client.query('SELECT COUNT(*) FROM admin_users WHERE username = $1', ['admin']);
          if (parseInt(userCheck.rows[0].count) === 0) {
            const hashedPassword = await bcrypt.hash('pravda2025', 10);
            await client.query(
              'INSERT INTO admin_users (username, password_hash) VALUES ($1, $2)',
              ['admin', hashedPassword]
            );
          }

          // Authenticate user
          const userResult = await client.query('SELECT id, password_hash FROM admin_users WHERE username = $1', [username]);
          
          if (userResult.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
          }

          const user = userResult.rows[0];
          const passwordValid = await bcrypt.compare(password, user.password_hash);
          
          if (!passwordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
          }

          // Create session
          const sessionToken = Buffer.from(Math.random().toString(36) + Date.now().toString(36)).toString('base64');
          const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
          
          await client.query(
            'INSERT INTO admin_sessions (user_id, session_token, expires_at) VALUES ($1, $2, $3)',
            [user.id, sessionToken, expiresAt]
          );

          return res.json({ success: true, token: sessionToken });
        } finally {
          client.release();
        }

      case 'contacts':
        const token = req.headers.authorization?.replace('Bearer ', '');
        
        if (!token) {
          return res.status(401).json({ error: 'No token provided' });
        }

        const contactsClient = await pool.connect();
        
        try {
          const sessionResult = await contactsClient.query(
            'SELECT user_id FROM admin_sessions WHERE session_token = $1 AND expires_at > NOW()',
            [token]
          );

          if (sessionResult.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid or expired session' });
          }

          // Get contacts
          const contactsResult = await contactsClient.query(
            'SELECT * FROM contacts ORDER BY created_at DESC'
          );

          return res.json({ contacts: contactsResult.rows });
        } finally {
          contactsClient.release();
        }

      default:
        return res.status(404).json({ error: 'Action not found' });
    }
  } catch (error) {
    console.error('Admin API error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}