const { Pool } = require('@neondatabase/serverless');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

module.exports = async function handler(req, res) {
  const { action } = req.query;
  
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    switch (action) {
      case 'events':
        return await handleEvents(req, res);
      case 'analytics':
        return await handleAnalytics(req, res);
      case 'profile':
        return await handleProfile(req, res);
      default:
        return res.status(404).json({ error: 'Action not found' });
    }
  } catch (error) {
    console.error('Tracking error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

async function handleEvents(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { event_type, user_id, page_url, event_data, attribution_channel } = req.body;

  if (!event_type) {
    return res.status(400).json({ error: 'Event type is required' });
  }

  try {
    const client = await pool.connect();

    // Create tracking tables if they don't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS tracking_events (
        id SERIAL PRIMARY KEY,
        event_type VARCHAR(100) NOT NULL,
        user_id VARCHAR(255),
        page_url TEXT,
        event_data JSONB DEFAULT '{}',
        attribution_channel VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS user_profiles (
        user_id VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255),
        company VARCHAR(255),
        website VARCHAR(255),
        industry VARCHAR(100),
        company_size VARCHAR(50),
        role VARCHAR(100),
        budget_range VARCHAR(50),
        lead_score INTEGER DEFAULT 0,
        attribution_channel VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insert tracking event
    await client.query(`
      INSERT INTO tracking_events (event_type, user_id, page_url, event_data, attribution_channel)
      VALUES ($1, $2, $3, $4, $5)
    `, [event_type, user_id, page_url, JSON.stringify(event_data || {}), attribution_channel]);

    // Update user profile if user_id exists
    if (user_id && event_data) {
      const leadScore = calculateLeadScore(event_data);
      await client.query(`
        INSERT INTO user_profiles (user_id, email, company, lead_score, attribution_channel, updated_at)
        VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP)
        ON CONFLICT (user_id) 
        DO UPDATE SET 
          email = COALESCE($2, user_profiles.email),
          company = COALESCE($3, user_profiles.company),
          lead_score = GREATEST(user_profiles.lead_score, $4),
          updated_at = CURRENT_TIMESTAMP
      `, [user_id, event_data.email, event_data.company, leadScore, attribution_channel]);
    }

    client.release();
    return res.json({ success: true, event_id: Date.now() });
  } catch (error) {
    console.error('Events error:', error);
    return res.status(500).json({ error: 'Failed to track event' });
  }
}

async function handleAnalytics(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type = 'dashboard', timeframe = '30d' } = req.query;

  try {
    const client = await pool.connect();
    
    // Create tables if they don't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS tracking_events (
        id SERIAL PRIMARY KEY,
        event_type VARCHAR(100) NOT NULL,
        user_id VARCHAR(255),
        page_url TEXT,
        event_data JSONB DEFAULT '{}',
        attribution_channel VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS user_profiles (
        user_id VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255),
        company VARCHAR(255),
        website VARCHAR(255),
        industry VARCHAR(100),
        company_size VARCHAR(50),
        role VARCHAR(100),
        budget_range VARCHAR(50),
        lead_score INTEGER DEFAULT 0,
        attribution_channel VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    let timeCondition = "created_at >= NOW() - INTERVAL '30 days'";
    if (timeframe === '1d') timeCondition = "created_at >= NOW() - INTERVAL '1 day'";
    if (timeframe === '7d') timeCondition = "created_at >= NOW() - INTERVAL '7 days'";
    if (timeframe === '90d') timeCondition = "created_at >= NOW() - INTERVAL '90 days'";

    const analytics = {};

    // Overview stats
    const overviewResult = await client.query(`
      SELECT 
        COUNT(DISTINCT user_id) as total_users,
        COUNT(*) FILTER (WHERE event_type = 'conversion') as total_conversions,
        AVG(lead_score) as avg_lead_score,
        COUNT(*) FILTER (WHERE lead_score >= 70) as qualified_leads
      FROM user_profiles 
      WHERE ${timeCondition.replace('created_at', 'user_profiles.created_at')}
    `);
    
    analytics.overview = overviewResult.rows[0] || {
      total_users: 0,
      total_conversions: 0,
      avg_lead_score: 0,
      qualified_leads: 0
    };

    // Conversion funnel
    const funnelStages = ['page_view', 'form_interaction', 'form_submit', 'conversion'];
    const funnelData = [];
    
    for (const stage of funnelStages) {
      const result = await client.query(`
        SELECT COUNT(DISTINCT user_id) as users
        FROM tracking_events 
        WHERE event_type = $1 AND ${timeCondition}
      `, [stage]);
      
      const users = parseInt(result.rows[0]?.users || 0);
      const prevUsers = funnelData.length > 0 ? funnelData[funnelData.length - 1].users : users;
      const conversionRate = prevUsers > 0 ? ((users / prevUsers) * 100) : 0;
      
      funnelData.push({
        stage,
        users,
        conversion_rate: parseFloat(conversionRate.toFixed(2))
      });
    }

    analytics.conversion_funnel = {
      funnel_stages: funnelData,
      overall_conversion_rate: funnelData.length > 0 ? 
        parseFloat(((funnelData[funnelData.length - 1].users / funnelData[0].users) * 100).toFixed(2)) : 0
    };

    // Attribution summary
    const attributionResult = await client.query(`
      SELECT 
        attribution_channel,
        COUNT(DISTINCT user_id) as total_users,
        AVG(lead_score) as avg_lead_score,
        COUNT(*) FILTER (WHERE event_type = 'conversion') as total_conversions
      FROM user_profiles up
      LEFT JOIN tracking_events te ON up.user_id = te.user_id
      WHERE up.${timeCondition.replace('created_at', 'created_at')}
      GROUP BY attribution_channel
      ORDER BY total_users DESC
    `);
    
    analytics.attribution_summary = attributionResult.rows || [];

    // Lead segments
    const segmentsResult = await client.query(`
      SELECT 
        CASE 
          WHEN lead_score >= 80 THEN 'hot'
          WHEN lead_score >= 60 THEN 'warm'
          WHEN lead_score >= 40 THEN 'cold'
          ELSE 'unqualified'
        END as segment,
        COUNT(*) as count,
        AVG(lead_score) as avg_score
      FROM user_profiles
      WHERE ${timeCondition.replace('created_at', 'created_at')}
      GROUP BY segment
      ORDER BY avg_score DESC
    `);
    
    analytics.lead_segments = segmentsResult.rows || [];

    // Top leads
    const topLeadsResult = await client.query(`
      SELECT user_id, email, company, lead_score, attribution_channel, 'qualified' as stage
      FROM user_profiles
      WHERE ${timeCondition.replace('created_at', 'created_at')}
      ORDER BY lead_score DESC, created_at DESC
      LIMIT 20
    `);
    
    analytics.top_leads = topLeadsResult.rows || [];

    // Traffic sources
    const trafficResult = await client.query(`
      SELECT 
        COALESCE(event_data->>'source', 'direct') as source,
        attribution_channel,
        COUNT(DISTINCT user_id) as users,
        COUNT(*) FILTER (WHERE event_type = 'conversion') as conversions
      FROM tracking_events
      WHERE ${timeCondition}
      GROUP BY source, attribution_channel
      ORDER BY users DESC
    `);
    
    analytics.traffic_sources = trafficResult.rows || [];

    client.release();
    return res.json(analytics);
  } catch (error) {
    console.error('Analytics error:', error);
    return res.status(500).json({ error: 'Failed to get analytics' });
  }
}

async function handleProfile(req, res) {
  if (req.method === 'POST') {
    const { user_id, email, company, website, industry, company_size, role, budget_range } = req.body;

    if (!user_id || !email) {
      return res.status(400).json({ error: 'User ID and email are required' });
    }

    try {
      const client = await pool.connect();
      
      await client.query(`
        CREATE TABLE IF NOT EXISTS user_profiles (
          user_id VARCHAR(255) PRIMARY KEY,
          email VARCHAR(255),
          company VARCHAR(255),
          website VARCHAR(255),
          industry VARCHAR(100),
          company_size VARCHAR(50),
          role VARCHAR(100),
          budget_range VARCHAR(50),
          lead_score INTEGER DEFAULT 0,
          attribution_channel VARCHAR(100),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      const leadScore = calculateLeadScore({ email, company, website, industry, role, budget_range });
      
      await client.query(`
        INSERT INTO user_profiles (user_id, email, company, website, industry, company_size, role, budget_range, lead_score, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, CURRENT_TIMESTAMP)
        ON CONFLICT (user_id) 
        DO UPDATE SET 
          email = $2,
          company = $3,
          website = $4,
          industry = $5,
          company_size = $6,
          role = $7,
          budget_range = $8,
          lead_score = $9,
          updated_at = CURRENT_TIMESTAMP
      `, [user_id, email, company, website, industry, company_size, role, budget_range, leadScore]);

      // Send email notification for high-value leads (score ≥70)
      if (leadScore >= 70) {
        await sendHighValueLeadNotification({
          email,
          company,
          website,
          industry,
          role,
          budget_range,
          lead_score: leadScore,
          user_id
        });
      }

      client.release();
      return res.json({ success: true, lead_score: leadScore });
    } catch (error) {
      console.error('Profile error:', error);
      return res.status(500).json({ error: 'Failed to update profile' });
    }
  }

  if (req.method === 'GET') {
    const { user_id } = req.query;
    
    if (!user_id) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM user_profiles WHERE user_id = $1', [user_id]);
      const profile = result.rows[0];
      
      client.release();
      return res.json(profile || null);
    } catch (error) {
      console.error('Get profile error:', error);
      return res.status(500).json({ error: 'Failed to get profile' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

async function sendHighValueLeadNotification(leadData) {
  try {
    // Import SendGrid (if available in environment)
    if (!process.env.SENDGRID_API_KEY) {
      console.log('SendGrid not configured - high value lead notification skipped');
      return;
    }

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 'contact@pravdagency.eu',
      from: 'contact@pravdagency.eu',
      subject: `🔥 Висококачествен Lead (Score: ${leadData.lead_score}/100)`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #ECB629, #F4C430); padding: 20px; text-align: center;">
            <h1 style="color: #000; margin: 0;">Нов висококачествен Lead!</h1>
            <p style="color: #333; margin: 5px 0 0 0;">Lead Score: ${leadData.lead_score}/100</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #333; margin-bottom: 20px;">Информация за клиента:</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 10px; color: #333;">${leadData.email}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Компания:</td>
                <td style="padding: 10px; color: #333;">${leadData.company || 'Не е посочена'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Уебсайт:</td>
                <td style="padding: 10px; color: #333;">${leadData.website || 'Не е посочен'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Индустрия:</td>
                <td style="padding: 10px; color: #333;">${leadData.industry || 'Не е посочена'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Позиция:</td>
                <td style="padding: 10px; color: #333;">${leadData.role || 'Не е посочена'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Бюджет:</td>
                <td style="padding: 10px; color: #333;">${leadData.budget_range || 'Не е посочен'}</td>
              </tr>
            </table>
            
            <div style="margin-top: 30px; padding: 20px; background: #ECB629; border-radius: 8px; text-align: center;">
              <h3 style="margin: 0; color: #000;">Препоръчано действие:</h3>
              <p style="margin: 10px 0 0 0; color: #333;">Свържете се в рамките на 1 час за максимална конверсия!</p>
            </div>
          </div>
          
          <div style="padding: 20px; text-align: center; background: #333; color: #fff;">
            <p style="margin: 0;">Pravdast Business Engineering - Автоматична система за leads</p>
          </div>
        </div>
      `,
      text: `
        Нов висококачествен Lead (Score: ${leadData.lead_score}/100)
        
        Email: ${leadData.email}
        Компания: ${leadData.company || 'Не е посочена'}
        Уебсайт: ${leadData.website || 'Не е посочен'}
        Индустрия: ${leadData.industry || 'Не е посочена'}
        Позиция: ${leadData.role || 'Не е посочена'}
        Бюджет: ${leadData.budget_range || 'Не е посочен'}
        
        Препоръчано: Свържете се в рамките на 1 час!
      `
    };

    await sgMail.send(msg);
    console.log(`High-value lead notification sent for ${leadData.email} (Score: ${leadData.lead_score})`);
  } catch (error) {
    console.error('Failed to send high-value lead notification:', error);
  }
}

function calculateLeadScore(data) {
  let score = 0;
  if (data.email) score += 20;
  if (data.company) score += 15;
  if (data.website) score += 10;
  if (data.industry) score += 10;
  if (data.role?.includes('CEO') || data.role?.includes('Owner')) score += 25;
  if (data.budget_range === 'high') score += 20;
  return Math.min(score, 100);
}