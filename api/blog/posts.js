// Public API endpoint for blog posts
const { neon } = require('@neondatabase/serverless');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
      throw new Error('DATABASE_URL environment variable is not set');
    }

    const sql = neon(dbUrl);
    
    console.log('Fetching published blog posts...');
    
    // Get only published blog posts, ordered by creation date (newest first)
    const posts = await sql`
      SELECT id, title, slug, excerpt, content, category, tags, created_at, updated_at
      FROM blog_posts 
      WHERE is_published = true 
      ORDER BY created_at DESC
    `;
    
    console.log(`Found ${posts.length} published posts`);

    return res.json(posts);

  } catch (error) {
    console.error('Public blog posts API error:', error);
    console.error('Error details:', error.message, error.stack);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
};