

async function executeQuery(sql, params = []) {
  const { neon } = await import('@neondatabase/serverless');
  // Use new Vercel-Neon database URL
  const dbUrl = process.env.DATABASE_DATABASE_URL || process.env.DATABASE_URL;
  const db = neon(dbUrl);
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
    await authenticateAdmin(req);
    
    const { id } = req.query;
    const postId = parseInt(id);

    if (req.method === 'PUT') {
      // Update blog post
      const { title, slug, excerpt, content, category, tags = [], isPublished } = req.body;
      
      const result = await executeQuery(
        `UPDATE blog_posts 
         SET title = $1, slug = $2, excerpt = $3, content = $4, category = $5, tags = $6, is_published = $7, updated_at = NOW()
         WHERE id = $8 RETURNING *`,
        [title, slug, excerpt, content, category, tags, isPublished, postId]
      );
        
      if (result.length === 0) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
      
      return res.json({ message: 'Blog post updated successfully', post: result[0] });
    }

    if (req.method === 'DELETE') {
      // Delete blog post
      await executeQuery('DELETE FROM blog_posts WHERE id = $1', [postId]);
      return res.json({ message: 'Blog post deleted successfully' });
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error('Blog post API error:', error);
    if (error.message.includes('token') || error.message.includes('session')) {
      return res.status(401).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
}