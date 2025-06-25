async function executeQuery(sql, params = []) {
  const { neon } = await import('@neondatabase/serverless');
  const db = neon(process.env.DATABASE_URL);
  return await db(sql, params);
}

// Auth middleware function
async function authenticateAdmin(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('No token provided');
  }

  const token = authHeader.substring(7);
  const sessionResult = await executeQuery(
    'SELECT * FROM admin_sessions WHERE session_token = $1 AND expires_at > NOW()',
    [token]
  );
  
  if (sessionResult.length === 0) {
    throw new Error('Invalid or expired session');
  }

  return sessionResult[0].user_id;
}

module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const userId = await authenticateAdmin(req);

    if (req.method === 'GET') {
      // Get all blog posts
      const result = await executeQuery('SELECT * FROM blog_posts ORDER BY created_at DESC');
      return res.json(result);
    }

    if (req.method === 'POST') {
      // Create new blog post
      const { title, slug, excerpt, content, category, tags = [], isPublished = false } = req.body;
      
      const result = await executeQuery(
        `INSERT INTO blog_posts (title, slug, excerpt, content, category, tags, is_published, author_id, updated_at) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW()) RETURNING *`,
        [title, slug, excerpt, content, category, tags, isPublished, userId]
      );
      
      return res.json({ message: 'Blog post created successfully', post: result[0] });
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error('Blog posts API error:', error);
    if (error.message.includes('token') || error.message.includes('session')) {
      return res.status(401).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
}