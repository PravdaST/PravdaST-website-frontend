const { Pool } = require('@neondatabase/serverless');
const bcrypt = require('bcrypt');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

module.exports = async function handler(req, res) {
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
};

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

  try {
    // Verify session
    const client = await pool.connect();
    const sessionResult = await client.query(
      'SELECT user_id FROM admin_sessions WHERE session_token = $1 AND expires_at > NOW()',
      [token]
    );

    if (sessionResult.rows.length === 0) {
      client.release();
      return res.status(401).json({ error: 'Invalid or expired session' });
    }

    // Get contacts
    const contactsResult = await client.query(
      'SELECT * FROM contacts ORDER BY created_at DESC'
    );

    client.release();
    return res.json({ contacts: contactsResult.rows });
  } catch (error) {
    console.error('Get contacts error:', error);
    return res.status(500).json({ error: 'Failed to get contacts' });
  }
}

async function handleBlogPosts(req, res) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    // Verify session
    const client = await pool.connect();
    const sessionResult = await client.query(
      'SELECT user_id FROM admin_sessions WHERE session_token = $1 AND expires_at > NOW()',
      [token]
    );

    if (sessionResult.rows.length === 0) {
      client.release();
      return res.status(401).json({ error: 'Invalid or expired session' });
    }

    const userId = sessionResult.rows[0].user_id;

    if (req.method === 'GET') {
      // Get all blog posts
      const postsResult = await client.query(
        'SELECT * FROM blog_posts ORDER BY created_at DESC'
      );

      client.release();
      return res.json({ posts: postsResult.rows });
    } else if (req.method === 'POST') {
      // Create new blog post
      const { title, slug, excerpt, content, category, tags, isPublished } = req.body || {};
      
      if (!title || !slug || !excerpt || !content || !category) {
        client.release();
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const tagsArray = Array.isArray(tags) ? tags : [];
      
      const insertResult = await client.query(
        'INSERT INTO blog_posts (title, slug, excerpt, content, category, tags, is_published, author_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [title, slug, excerpt, content, category, JSON.stringify(tagsArray), isPublished || false, userId]
      );

      client.release();
      return res.json({ post: insertResult.rows[0] });
    }

    client.release();
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Blog posts error:', error);
    return res.status(500).json({ error: 'Failed to handle blog posts' });
  }
}

async function handleBlogPost(req, res) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  const { id } = req.query;
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  if (!id) {
    return res.status(400).json({ error: 'Post ID required' });
  }

  try {
    // Verify session
    const client = await pool.connect();
    const sessionResult = await client.query(
      'SELECT user_id FROM admin_sessions WHERE session_token = $1 AND expires_at > NOW()',
      [token]
    );

    if (sessionResult.rows.length === 0) {
      client.release();
      return res.status(401).json({ error: 'Invalid or expired session' });
    }

    if (req.method === 'GET') {
      // Get specific blog post
      const postResult = await client.query(
        'SELECT * FROM blog_posts WHERE id = $1',
        [id]
      );

      if (postResult.rows.length === 0) {
        client.release();
        return res.status(404).json({ error: 'Post not found' });
      }

      client.release();
      return res.json({ post: postResult.rows[0] });
    } else if (req.method === 'PUT') {
      // Update blog post
      const { title, slug, excerpt, content, category, tags, isPublished } = req.body || {};
      
      if (!title || !slug || !excerpt || !content || !category) {
        client.release();
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const tagsArray = Array.isArray(tags) ? tags : [];
      
      const updateResult = await client.query(
        'UPDATE blog_posts SET title = $1, slug = $2, excerpt = $3, content = $4, category = $5, tags = $6, is_published = $7, updated_at = NOW() WHERE id = $8 RETURNING *',
        [title, slug, excerpt, content, category, JSON.stringify(tagsArray), isPublished || false, id]
      );

      if (updateResult.rows.length === 0) {
        client.release();
        return res.status(404).json({ error: 'Post not found' });
      }

      client.release();
      return res.json({ post: updateResult.rows[0] });
    } else if (req.method === 'DELETE') {
      // Delete blog post
      const deleteResult = await client.query(
        'DELETE FROM blog_posts WHERE id = $1 RETURNING *',
        [id]
      );

      if (deleteResult.rows.length === 0) {
        client.release();
        return res.status(404).json({ error: 'Post not found' });
      }

      client.release();
      return res.json({ message: 'Post deleted successfully' });
    }

    client.release();
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Blog post error:', error);
    return res.status(500).json({ error: 'Failed to handle blog post' });
  }
}