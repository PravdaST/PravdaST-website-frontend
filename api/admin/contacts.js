// Admin contacts endpoint for Vercel serverless
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
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
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
    
    // Get all contacts
    const contacts = await sql`
      SELECT * FROM contacts 
      ORDER BY created_at DESC
    `;

    return res.json(contacts);

  } catch (error) {
    console.error('Contacts error:', error);
    if (error.message.includes('token') || error.message.includes('session')) {
      return res.status(401).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal server error' });
  }
}