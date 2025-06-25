const { Pool } = require('@neondatabase/serverless');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { slug } = req.query;
  
  try {
    // Get view count
    const viewResult = await pool.query(
      'SELECT COUNT(*) as count FROM blog_views WHERE post_slug = $1',
      [slug]
    );
    const views = parseInt(viewResult.rows[0]?.count || 0);

    // Get like count
    const likeResult = await pool.query(
      'SELECT COUNT(*) as count FROM blog_likes WHERE post_slug = $1',
      [slug]
    );
    const likes = parseInt(likeResult.rows[0]?.count || 0);

    // Get share count
    const shareResult = await pool.query(
      'SELECT COUNT(*) as count FROM blog_shares WHERE post_slug = $1',
      [slug]
    );
    const shares = parseInt(shareResult.rows[0]?.count || 0);

    // Check if current user liked this post
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userLikeResult = await pool.query(
      'SELECT id FROM blog_likes WHERE post_slug = $1 AND ip_address = $2',
      [slug, ipAddress]
    );
    const isLiked = userLikeResult.rows.length > 0;

    res.json({
      views,
      likes,
      shares,
      isLiked,
    });
  } catch (error) {
    console.error('Error getting blog stats:', error);
    res.status(500).json({ error: 'Failed to get stats' });
  }
};