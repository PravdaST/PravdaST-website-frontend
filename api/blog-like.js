const { Pool } = require('@neondatabase/serverless');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { slug } = req.body;
  
  try {
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // Check if already liked by this IP
    const existingLike = await pool.query(
      'SELECT id FROM blog_likes WHERE post_slug = $1 AND ip_address = $2',
      [slug, ipAddress]
    );

    if (existingLike.rows.length > 0) {
      // Unlike - remove the like
      await pool.query(
        'DELETE FROM blog_likes WHERE post_slug = $1 AND ip_address = $2',
        [slug, ipAddress]
      );
      
      res.json({ liked: false });
    } else {
      // Like - add new like
      await pool.query(
        'INSERT INTO blog_likes (post_slug, ip_address) VALUES ($1, $2)',
        [slug, ipAddress]
      );
      
      res.json({ liked: true });
    }
  } catch (error) {
    console.error('Error tracking blog like:', error);
    res.status(500).json({ error: 'Failed to track like' });
  }
};