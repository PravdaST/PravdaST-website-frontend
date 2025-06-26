const { Pool } = require('@neondatabase/serverless');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, postId, slug, platform } = req.body;
  
  if (!type || (!postId && !slug)) {
    return res.status(400).json({ error: 'Type and postId/slug are required' });
  }

  try {
    const client = await pool.connect();
    
    // Create blog_interactions table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS blog_interactions (
        id SERIAL PRIMARY KEY,
        slug VARCHAR(255) UNIQUE NOT NULL,
        likes INTEGER DEFAULT 0,
        shares INTEGER DEFAULT 0,
        views INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const postSlug = slug || `post-${postId}`;
    let result;

    switch (type) {
      case 'like':
        await client.query(`
          INSERT INTO blog_interactions (slug, likes, views, shares) 
          VALUES ($1, 1, 0, 0)
          ON CONFLICT (slug) 
          DO UPDATE SET 
            likes = blog_interactions.likes + 1,
            updated_at = CURRENT_TIMESTAMP
        `, [postSlug]);

        result = await client.query('SELECT likes, shares, views FROM blog_interactions WHERE slug = $1', [postSlug]);
        const likeStats = result.rows[0] || { likes: 1, shares: 0, views: 0 };
        
        client.release();
        return res.json({ success: true, stats: likeStats });

      case 'share':
        await client.query(`
          INSERT INTO blog_interactions (slug, shares, likes, views) 
          VALUES ($1, 1, 0, 0)
          ON CONFLICT (slug) 
          DO UPDATE SET 
            shares = blog_interactions.shares + 1,
            updated_at = CURRENT_TIMESTAMP
        `, [postSlug]);

        result = await client.query('SELECT likes, shares, views FROM blog_interactions WHERE slug = $1', [postSlug]);
        const shareStats = result.rows[0] || { likes: 0, shares: 1, views: 0 };
        
        client.release();
        return res.json({ success: true, stats: shareStats, platform });

      case 'view':
        await client.query(`
          INSERT INTO blog_interactions (slug, views, likes, shares) 
          VALUES ($1, 1, 0, 0)
          ON CONFLICT (slug) 
          DO UPDATE SET 
            views = blog_interactions.views + 1,
            updated_at = CURRENT_TIMESTAMP
        `, [postSlug]);

        result = await client.query('SELECT likes, shares, views FROM blog_interactions WHERE slug = $1', [postSlug]);
        const viewStats = result.rows[0] || { likes: 0, shares: 0, views: 1 };
        
        client.release();
        return res.json({ success: true, stats: viewStats });

      case 'stats':
        result = await client.query('SELECT likes, shares, views FROM blog_interactions WHERE slug = $1', [postSlug]);
        const stats = result.rows[0] || { likes: 0, shares: 0, views: 0 };
        
        client.release();
        return res.json(stats);

      default:
        client.release();
        return res.status(400).json({ error: 'Invalid interaction type' });
    }
  } catch (error) {
    console.error('Blog interaction error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};