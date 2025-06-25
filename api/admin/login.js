const bcrypt = require('bcrypt');
const { randomBytes } = require('crypto');

async function executeQuery(sql, params = []) {
  const { neon } = await import('@neondatabase/serverless');
  const db = neon(process.env.DATABASE_URL);
  return await db(sql, params);
}

module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password required' });
    }

    // Find user
    const userResult = await executeQuery('SELECT * FROM users WHERE username = $1', [username]);
    if (userResult.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const user = userResult[0];

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create session
    const sessionToken = randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    await executeQuery(
      'INSERT INTO admin_sessions (session_token, user_id, expires_at) VALUES ($1, $2, $3)',
      [sessionToken, user.id, expiresAt]
    );

    res.json({ 
      message: 'Login successful', 
      token: sessionToken,
      user: { id: user.id, username: user.username }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};

