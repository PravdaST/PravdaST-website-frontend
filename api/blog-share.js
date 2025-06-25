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

  const { slug, platform } = req.body;
  
  try {
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    await pool.query(
      'INSERT INTO blog_shares (post_slug, platform, ip_address) VALUES ($1, $2, $3)',
      [slug, platform, ipAddress]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Error tracking blog share:', error);
    res.status(500).json({ error: 'Failed to track share' });
  }
};