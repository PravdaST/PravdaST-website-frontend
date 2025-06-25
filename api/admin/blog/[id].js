// Individual blog post endpoint for Vercel serverless
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
  res.setHeader('Access-Control-Allow-Methods', 'PUT, DELETE, OPTIONS');
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
    await authenticateAdmin(req, sql);
    
    const { id } = req.query;
    const postId = parseInt(id);

    if (req.method === 'PUT') {
      // Update blog post
      const { title, slug, excerpt, content, category, tags, isPublished } = req.body || {};
      
      // If only isPublished is provided (publish/unpublish action)
      if (typeof isPublished === 'boolean' && !title && !content) {
        console.log(`Updating post ${postId} to published: ${isPublished}`);
        const posts = await sql`
          UPDATE blog_posts 
          SET is_published = ${isPublished}, updated_at = NOW()
          WHERE id = ${postId} RETURNING *
        `;
        
        if (posts.length === 0) {
          return res.status(404).json({ error: 'Blog post not found' });
        }
        
        console.log(`Post ${postId} updated, is_published: ${posts[0].is_published}`);
        return res.json({ 
          message: `Blog post ${isPublished ? 'published' : 'unpublished'} successfully`, 
          post: posts[0] 
        });
      }
      
      // Full update with all fields
      if (!title || !slug || !excerpt || !content || !category) {
        return res.status(400).json({ error: 'Missing required fields for full update' });
      }
      
      const posts = await sql`
        UPDATE blog_posts 
        SET title = ${title}, slug = ${slug}, excerpt = ${excerpt}, content = ${content}, 
            category = ${category}, tags = ${tags || []}, is_published = ${isPublished || false}, updated_at = NOW()
        WHERE id = ${postId} RETURNING *
      `;
        
      if (posts.length === 0) {
        return res.status(404).json({ error: 'Blog post not found' });
      }
      
      return res.json({ message: 'Blog post updated successfully', post: posts[0] });
    }

    if (req.method === 'DELETE') {
      // Delete blog post
      await sql`DELETE FROM blog_posts WHERE id = ${postId}`;
      return res.json({ message: 'Blog post deleted successfully' });
    }

    return res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('Blog post API error:', error);
    if (error.message.includes('token') || error.message.includes('session')) {
      return res.status(401).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal server error' });
  }
}