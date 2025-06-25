// Blog posts CRUD endpoint for Vercel serverless
async function authenticateAdmin(req, sql) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('No token provided');
  }

  const token = authHeader.substring(7);
  const sessions = await sql`
    SELECT * FROM admin_sessions 
    WHERE session_token = ${token} AND expires_at > NOW()
  `;
  
  if (sessions.length === 0) {
    throw new Error('Invalid or expired session');
  }

  return sessions[0].user_id;
}

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Import neon client
    const { neon } = await import('@neondatabase/serverless');
    const dbUrl = process.env.DATABASE_URL;
    
    if (!dbUrl) {
      return res.status(500).json({ error: 'Database configuration error' });
    }

    const sql = neon(dbUrl);
    
    // Authenticate user
    const userId = await authenticateAdmin(req, sql);

    if (req.method === 'GET') {
      // Get all blog posts
      const posts = await sql`
        SELECT * FROM blog_posts 
        ORDER BY created_at DESC
      `;
      return res.json(posts);
    }

    if (req.method === 'POST') {
      // Create new blog post
      const { title, slug, excerpt, content, category, tags = [], isPublished = false } = req.body || {};
      
      if (!title || !slug || !excerpt || !content || !category) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      console.log(`Creating post: ${title}, published: ${isPublished}`);
      const posts = await sql`
        INSERT INTO blog_posts (title, slug, excerpt, content, tags, is_published, created_at, updated_at)
        VALUES (${title}, ${slug}, ${excerpt}, ${content}, ${tags}, ${isPublished}, NOW(), NOW())
        RETURNING *
      `;

      return res.json({ message: 'Blog post created', post: posts[0] });
    }

    return res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('Blog posts error:', error);
    if (error.message.includes('token') || error.message.includes('session')) {
      return res.status(401).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal server error' });
  }
}