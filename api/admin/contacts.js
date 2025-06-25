async function executeQuery(sql, params = []) {
  const { neon } = await import('@neondatabase/serverless');
  // Use new Vercel-Neon database URL
  const dbUrl = process.env.DATABASE_DATABASE_URL || process.env.DATABASE_URL;
  const db = neon(dbUrl);
  return await db(sql, params);
}

// Auth middleware function
async function authenticateAdmin(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('No token provided');
  }

  const token = authHeader.substring(7);
  const sessionResult = await executeQuery(
    'SELECT * FROM admin_sessions WHERE session_token = $1 AND expires_at > NOW()',
    [token]
  );
  
  if (sessionResult.length === 0) {
    throw new Error('Invalid or expired session');
  }

  return sessionResult[0].user_id;
}

module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await authenticateAdmin(req);
    
    const result = await executeQuery('SELECT * FROM contacts ORDER BY created_at DESC');
    res.json(result);
  } catch (error) {
    console.error('Contacts API error:', error);
    if (error.message.includes('token') || error.message.includes('session')) {
      return res.status(401).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Failed to fetch contacts' });
  }
}