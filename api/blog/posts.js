// Public API endpoint for all blog posts
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
    
    console.log('Fetching published blog posts from database...');
    
    // Execute query to get all published posts
    const posts = await sql`
      SELECT id, title, excerpt, slug, category, created_at 
      FROM blog_posts 
      WHERE is_published = true
      ORDER BY created_at DESC
    `;
    
    console.log(`Successfully fetched ${posts.length} published posts`);
    
    // Ensure we always return an array, even if empty
    const postsArray = Array.isArray(posts) ? posts : [];
    
    // Return posts as JSON array with 200 OK status
    return res.status(200).json(postsArray);

  } catch (error) {
    // Log detailed error to console
    console.error('Failed to fetch posts:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    // Return 500 Internal Server Error
    return res.status(500).json({ 
      message: 'Error fetching blog posts',
      error: error.message 
    });
  }
}