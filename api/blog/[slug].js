// Public API endpoint for individual blog post by slug
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
    const { slug } = req.query;
    
    // Get published blog post by slug
    const posts = await sql`
      SELECT id, title, slug, excerpt, content, category, tags, created_at, updated_at
      FROM blog_posts 
      WHERE slug = ${slug} AND is_published = true
    `;

    if (posts.length === 0) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    return res.json(posts[0]);

  } catch (error) {
    console.error('Public blog post API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};