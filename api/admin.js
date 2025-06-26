const { Pool } = require('@neondatabase/serverless');
const bcrypt = require('bcrypt');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

module.exports = async function handler(req, res) {
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
        return await handleLogin(req, res);
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
    return res.status(500).json({ error: 'Internal server error' });
  }
};

async function handleLogin(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  try {
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
      client.release();
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = userResult.rows[0];
    const passwordValid = await bcrypt.compare(password, user.password_hash);
    
    if (!passwordValid) {
      client.release();
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Create session
    const sessionToken = Buffer.from(Math.random().toString(36) + Date.now().toString(36)).toString('base64');
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    
    await client.query(
      'INSERT INTO admin_sessions (user_id, session_token, expires_at) VALUES ($1, $2, $3)',
      [user.id, sessionToken, expiresAt]
    );

    client.release();
    return res.json({ success: true, token: sessionToken });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Login failed' });
  }
}

async function handleLogout(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const client = await pool.connect();
    await client.query('DELETE FROM admin_sessions WHERE session_token = $1', [token]);
    client.release();
    
    return res.json({ success: true });
  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({ error: 'Logout failed' });
  }
}

async function handleContacts(req, res) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  // Verify session
  const client = await pool.connect();
  const sessionResult = await client.query(
    'SELECT user_id FROM admin_sessions WHERE session_token = $1 AND expires_at > NOW()',
    [token]
  );
  
  if (sessionResult.rows.length === 0) {
    client.release();
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  if (req.method === 'GET') {
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS contacts (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          company VARCHAR(255),
          website VARCHAR(255),
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      const result = await client.query('SELECT * FROM contacts ORDER BY created_at DESC');
      client.release();
      return res.json(result.rows);
    } catch (error) {
      client.release();
      console.error('Get contacts error:', error);
      return res.status(500).json({ error: 'Failed to get contacts' });
    }
  }

  client.release();
  return res.status(405).json({ error: 'Method not allowed' });
}

async function handleBlogPosts(req, res) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const client = await pool.connect();
  const sessionResult = await client.query(
    'SELECT user_id FROM admin_sessions WHERE session_token = $1 AND expires_at > NOW()',
    [token]
  );
  
  if (sessionResult.rows.length === 0) {
    client.release();
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  if (req.method === 'GET') {
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS blog_posts (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          slug VARCHAR(255) UNIQUE NOT NULL,
          excerpt TEXT,
          content TEXT NOT NULL,
          tags JSONB DEFAULT '[]',
          published BOOLEAN DEFAULT false,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      const result = await client.query('SELECT * FROM blog_posts ORDER BY created_at DESC');
      client.release();
      return res.json(result.rows);
    } catch (error) {
      client.release();
      console.error('Get blog posts error:', error);
      return res.status(500).json({ error: 'Failed to get blog posts' });
    }
  }

  if (req.method === 'POST') {
    const { title, slug, excerpt, content, tags } = req.body;
    
    if (!title || !slug || !content) {
      client.release();
      return res.status(400).json({ error: 'Title, slug and content are required' });
    }

    try {
      const result = await client.query(`
        INSERT INTO blog_posts (title, slug, excerpt, content, tags)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `, [title, slug, excerpt, content, JSON.stringify(tags || [])]);
      
      client.release();
      return res.json(result.rows[0]);
    } catch (error) {
      client.release();
      console.error('Create blog post error:', error);
      return res.status(500).json({ error: 'Failed to create blog post' });
    }
  }

  client.release();
  return res.status(405).json({ error: 'Method not allowed' });
}

async function handleBlogPost(req, res) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  const { id } = req.query;
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  if (!id) {
    return res.status(400).json({ error: 'Post ID is required' });
  }

  const client = await pool.connect();
  const sessionResult = await client.query(
    'SELECT user_id FROM admin_sessions WHERE session_token = $1 AND expires_at > NOW()',
    [token]
  );
  
  if (sessionResult.rows.length === 0) {
    client.release();
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  if (req.method === 'GET') {
    try {
      const result = await client.query('SELECT * FROM blog_posts WHERE id = $1', [id]);
      client.release();
      
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Post not found' });
      }
      
      return res.json(result.rows[0]);
    } catch (error) {
      client.release();
      console.error('Get blog post error:', error);
      return res.status(500).json({ error: 'Failed to get blog post' });
    }
  }

  if (req.method === 'PUT') {
    const { title, slug, excerpt, content, tags, published } = req.body;
    
    try {
      const result = await client.query(`
        UPDATE blog_posts 
        SET title = $1, slug = $2, excerpt = $3, content = $4, tags = $5, published = $6, updated_at = CURRENT_TIMESTAMP
        WHERE id = $7
        RETURNING *
      `, [title, slug, excerpt, content, JSON.stringify(tags || []), published, id]);
      
      client.release();
      
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Post not found' });
      }
      
      return res.json(result.rows[0]);
    } catch (error) {
      client.release();
      console.error('Update blog post error:', error);
      return res.status(500).json({ error: 'Failed to update blog post' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const result = await client.query('DELETE FROM blog_posts WHERE id = $1 RETURNING *', [id]);
      client.release();
      
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Post not found' });
      }
      
      return res.json({ success: true });
    } catch (error) {
      client.release();
      console.error('Delete blog post error:', error);
      return res.status(500).json({ error: 'Failed to delete blog post' });
    }
  }

  client.release();
  return res.status(405).json({ error: 'Method not allowed' });
}