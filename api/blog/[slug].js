// Public API endpoint for single blog post by slug
export default async function handler(req, res) {
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
    // Import neon client
    const { neon } = await import('@neondatabase/serverless');
    
    // Get database URL
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
      console.error('DATABASE_URL not found');
      return res.status(500).json({ message: 'Database configuration error' });
    }

    const sql = neon(dbUrl);
    const { slug } = req.query;
    
    console.log(`Fetching blog post with slug: ${slug}`);
    
    // Query the blog_posts table for the single post
    const posts = await sql`
      SELECT id, title, slug, excerpt, content, category, tags, created_at, updated_at
      FROM blog_posts 
      WHERE slug = ${slug} AND is_published = true
    `;
    
    console.log(`Found ${posts.length} posts for slug: ${slug}`);

    // If no post is found, return 404 Not Found
    if (posts.length === 0) {
      return res.status(404).json({ 
        message: 'Blog post not found',
        slug: slug 
      });
    }

    // Return the full post content as JSON with 200 status
    return res.status(200).json(posts[0]);

  } catch (error) {
    // Log detailed error to console
    console.error('Failed to fetch single post:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    // Return 500 Internal Server Error
    return res.status(500).json({ 
      message: 'Error fetching blog post',
      error: error.message 
    });
  }
}