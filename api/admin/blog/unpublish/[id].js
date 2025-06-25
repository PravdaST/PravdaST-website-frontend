const { Pool } = require('pg');

// Auth middleware function
async function authenticateAdmin(req, client) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('No token provided');
  }

  const token = authHeader.substring(7);
  const sessionResult = await client.query(
    'SELECT * FROM admin_sessions WHERE session_token = $1 AND expires_at > NOW()',
    [token]
  );
  
  if (sessionResult.rows.length === 0) {
    throw new Error('Invalid or expired session');
  }

  return sessionResult.rows[0].user_id;
}

module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  let client;
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    });
    
    client = await pool.connect();
    await authenticateAdmin(req, client);
    
    const { id } = req.query;
    const postId = parseInt(id);

    await client.query(
      'UPDATE blog_posts SET is_published = false, updated_at = NOW() WHERE id = $1',
      [postId]
    );

    res.json({ message: 'Blog post unpublished successfully' });
  } catch (error) {
    console.error('Unpublish API error:', error);
    if (error.message.includes('token') || error.message.includes('session')) {
      return res.status(401).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Failed to unpublish blog post' });
  } finally {
    if (client) {
      client.release();
    }
  }
}