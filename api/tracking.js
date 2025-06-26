import { Pool } from '@neondatabase/serverless';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export default async function handler(req, res) {
  const { action } = req.query;
  
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Parse body for Vercel compatibility
  let body = {};
  if (req.method === 'POST' || req.method === 'PUT') {
    if (req.body) {
      body = req.body;
    } else {
      // For Vercel serverless functions, read raw body
      try {
        const chunks = [];
        for await (const chunk of req) {
          chunks.push(chunk);
        }
        const rawBody = Buffer.concat(chunks).toString('utf8');
        body = rawBody ? JSON.parse(rawBody) : {};
      } catch (error) {
        console.error('Body parsing error:', error);
        body = {};
      }
    }
  }

  try {
    switch (action) {
      case 'events':
        return await handleEvents(req, res, body);
      case 'analytics':
        return await handleAnalytics(req, res);
      case 'profile':
        return await handleProfile(req, res, body);
      default:
        return res.status(404).json({ error: 'Action not found' });
    }
  } catch (error) {
    console.error('Tracking error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}

async function handleEvents(req, res, body) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      event_type,
      category,
      eventAction,
      label,
      value,
      session_id,
      user_id,
      page_url
    } = body;

    console.log('Tracking event:', {
      event_type,
      category,
      eventAction,
      label,
      value,
      session_id,
      user_id,
      page_url
    });

    const client = await pool.connect();
    
    // Create tracking_events table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS tracking_events (
        id SERIAL PRIMARY KEY,
        event_type VARCHAR(100),
        category VARCHAR(100),
        action VARCHAR(100),
        label TEXT,
        value INTEGER,
        session_id VARCHAR(255),
        user_id VARCHAR(255),
        page_url TEXT,
        user_agent TEXT,
        ip_address INET,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insert tracking event
    await client.query(`
      INSERT INTO tracking_events (
        event_type, category, action, label, value, 
        session_id, user_id, page_url, user_agent, ip_address
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `, [
      event_type,
      category,
      eventAction,
      label,
      value,
      session_id,
      user_id,
      page_url,
      req.headers['user-agent'],
      req.headers['x-forwarded-for'] || req.connection.remoteAddress
    ]);

    client.release();

    return res.status(200).json({
      success: true,
      message: 'Event tracked successfully'
    });

  } catch (error) {
    console.error('Events tracking error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function handleAnalytics(req, res) {
  try {
    const client = await pool.connect();
    
    // Get basic analytics data
    const eventsResult = await client.query(`
      SELECT 
        COUNT(*) as total_events,
        COUNT(DISTINCT session_id) as unique_sessions,
        COUNT(DISTINCT user_id) as unique_users
      FROM tracking_events 
      WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
    `);

    const topPagesResult = await client.query(`
      SELECT 
        page_url,
        COUNT(*) as views
      FROM tracking_events 
      WHERE event_type = 'page_view' 
        AND created_at >= CURRENT_DATE - INTERVAL '30 days'
      GROUP BY page_url
      ORDER BY views DESC
      LIMIT 10
    `);

    client.release();

    return res.status(200).json({
      overview: eventsResult.rows[0],
      top_pages: topPagesResult.rows
    });

  } catch (error) {
    console.error('Analytics error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function handleProfile(req, res, body) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      profileUserId,
      email,
      company,
      website,
      industry,
      role,
      budget
    } = body;

    if (!profileUserId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    console.log('Profile updated:', {
      profileUserId,
      email: email || 'not provided',
      company: company || 'not provided',
      leadScore: calculateLeadScore({ email, company, website, industry, role, budget })
    });

    const client = await pool.connect();
    
    // Create user_profiles table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS user_profiles (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(255) UNIQUE,
        email VARCHAR(255),
        company VARCHAR(255),
        website VARCHAR(255),
        industry VARCHAR(100),
        role VARCHAR(100),
        budget VARCHAR(50),
        lead_score INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Calculate lead score
    const leadScore = calculateLeadScore({ email, company, website, industry, role, budget });

    // Upsert user profile
    await client.query(`
      INSERT INTO user_profiles (
        user_id, email, company, website, industry, role, budget, lead_score, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, CURRENT_TIMESTAMP)
      ON CONFLICT (user_id) 
      DO UPDATE SET 
        email = EXCLUDED.email,
        company = EXCLUDED.company,
        website = EXCLUDED.website,
        industry = EXCLUDED.industry,
        role = EXCLUDED.role,
        budget = EXCLUDED.budget,
        lead_score = EXCLUDED.lead_score,
        updated_at = CURRENT_TIMESTAMP
    `, [profileUserId, email, company, website, industry, role, budget, leadScore]);

    client.release();

    // Send high-value lead notification if needed
    if (leadScore >= 70) {
      await sendHighValueLeadNotification({
        email,
        company,
        role,
        leadScore
      });
    }

    return res.status(200).json({
      success: true,
      lead_score: leadScore
    });

  } catch (error) {
    console.error('Profile tracking error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function sendHighValueLeadNotification(leadData) {
  try {
    // This would integrate with email service or CRM
    console.log('High-value lead detected:', leadData);
  } catch (error) {
    console.error('Failed to send lead notification:', error);
  }
}

function calculateLeadScore(data) {
  let score = 0;
  
  if (data.email) score += 20;
  if (data.company) score += 15;
  if (data.website) score += 10;
  if (data.industry) score += 10;
  
  // Role scoring
  if (data.role) {
    const role = data.role.toLowerCase();
    if (role.includes('ceo') || role.includes('owner') || role.includes('founder')) {
      score += 25;
    } else if (role.includes('director') || role.includes('manager')) {
      score += 15;
    } else {
      score += 5;
    }
  }
  
  // Budget scoring
  if (data.budget) {
    const budget = data.budget.toLowerCase();
    if (budget.includes('50000+') || budget.includes('высокий')) {
      score += 20;
    } else if (budget.includes('10000-50000') || budget.includes('средний')) {
      score += 10;
    } else {
      score += 5;
    }
  }
  
  return Math.min(score, 100);
}