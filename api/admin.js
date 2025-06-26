import { Pool } from '@neondatabase/serverless';
import bcrypt from 'bcrypt';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Parse body for Vercel compatibility
  let body = {};
  if (req.method === 'POST' || req.method === 'PUT') {
    if (req.body) {
      body = req.body;
    } else {
      try {
        let rawBody = '';
        req.setEncoding('utf8');
        for await (const chunk of req) {
          rawBody += chunk;
        }
        body = rawBody ? JSON.parse(rawBody) : {};
      } catch (e) {
        console.error('JSON parse error:', e);
        return res.status(400).json({ error: 'Invalid JSON' });
      }
    }
  }

  const { action } = req.query;

  try {
    switch (action) {
      case 'login':
        return await handleLogin(req, res, body);
      case 'logout':
        return await handleLogout(req, res);
      case 'contacts':
        return await handleContacts(req, res);
      case 'blog-posts':
        return await handleBlogPosts(req, res);
      case 'blog-post':
        return await handleBlogPost(req, res);
      default:
        return res.status(404).json({ error: 'Action not found' });
    }
  } catch (error) {
    console.error('Admin error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}

async function handleLogin(req, res, requestBody) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { username, password } = requestBody || {};
    
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password required' });
    }

    const client = await pool.connect();
    
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
        token VARCHAR(255) UNIQUE NOT NULL,
        user_id INTEGER REFERENCES admin_users(id),
        expires_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP + INTERVAL '24 hours'),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Check if admin user exists, if not create it
    const userResult = await client.query(
      'SELECT * FROM admin_users WHERE username = $1',
      [username]
    );

    let user = userResult.rows[0];
    
    if (!user && username === 'admin') {
      // Create default admin user
      const hashedPassword = await bcrypt.hash('pravda2025', 10);
      const insertResult = await client.query(
        'INSERT INTO admin_users (username, password_hash) VALUES ($1, $2) RETURNING *',
        [username, hashedPassword]
      );
      user = insertResult.rows[0];
    }

    if (!user) {
      client.release();
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    if (!isValidPassword) {
      client.release();
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate session token
    const token = Buffer.from(`${Date.now()}.${Math.random().toString(36)}`).toString('base64');
    
    // Store session
    await client.query(
      'INSERT INTO admin_sessions (token, user_id) VALUES ($1, $2)',
      [token, user.id]
    );

    client.release();

    return res.status(200).json({
      success: true,
      token: token
    });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function handleLogout(req, res) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const client = await pool.connect();
    
    await client.query('DELETE FROM admin_sessions WHERE token = $1', [token]);
    client.release();

    return res.status(200).json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function handleContacts(req, res) {
  try {
    // This would fetch contacts from database
    return res.status(200).json({ contacts: [] });
  } catch (error) {
    console.error('Contacts error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function handleBlogPosts(req, res) {
  try {
    const client = await pool.connect();
    
    // Create blog_posts table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        content TEXT NOT NULL,
        excerpt TEXT,
        published BOOLEAN DEFAULT FALSE,
        tags JSONB DEFAULT '[]',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const result = await client.query(
      'SELECT id, title, excerpt, published, COALESCE(tags, \'[]\') as tags, created_at FROM blog_posts ORDER BY created_at DESC'
    );
    
    client.release();

    const posts = result.rows.map(post => ({
      ...post,
      tags: typeof post.tags === 'string' ? JSON.parse(post.tags) : post.tags
    }));

    return res.status(200).json({ posts });
  } catch (error) {
    console.error('Blog posts error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function handleBlogPost(req, res) {
  try {
    const { id } = req.query;
    const client = await pool.connect();
    
    const result = await client.query(
      'SELECT * FROM blog_posts WHERE id = $1',
      [id]
    );
    
    client.release();

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const post = result.rows[0];
    post.tags = typeof post.tags === 'string' ? JSON.parse(post.tags) : post.tags;

    return res.status(200).json({ post });
  } catch (error) {
    console.error('Blog post error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}