const { Pool } = require('@neondatabase/serverless');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const {
      event,
      category,
      action,
      label,
      value,
      custom_parameters,
      session_id,
      user_id,
      timestamp,
      url,
      user_agent
    } = req.body;

    // Validate required fields
    if (!event || !category || !action) {
      res.status(400).json({ error: 'Missing required fields: event, category, action' });
      return;
    }

    const client = await pool.connect();

    try {
      // Insert tracking event
      const query = `
        INSERT INTO tracking_events (
          event_name, category, action, label, value, 
          custom_parameters, session_id, user_id, 
          timestamp, url, user_agent, created_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW())
        RETURNING id
      `;

      const values = [
        event,
        category,
        action,
        label,
        value,
        JSON.stringify(custom_parameters || {}),
        session_id,
        user_id,
        timestamp || new Date().toISOString(),
        url,
        user_agent
      ];

      const result = await client.query(query, values);

      // Update conversion funnel if applicable
      if (custom_parameters?.funnel_stage) {
        await updateConversionFunnel(client, user_id, custom_parameters.funnel_stage, timestamp);
      }

      res.status(200).json({ 
        success: true, 
        event_id: result.rows[0].id,
        message: 'Event tracked successfully' 
      });

    } finally {
      client.release();
    }

  } catch (error) {
    console.error('Tracking event error:', error);
    res.status(500).json({ 
      error: 'Failed to track event',
      details: error.message 
    });
  }
};

async function updateConversionFunnel(client, userId, stage, timestamp) {
  try {
    const query = `
      INSERT INTO conversion_funnel (user_id, stage, timestamp, created_at)
      VALUES ($1, $2, $3, NOW())
      ON CONFLICT (user_id, stage) 
      DO UPDATE SET timestamp = $3, updated_at = NOW()
    `;

    await client.query(query, [userId, stage, timestamp]);
  } catch (error) {
    console.error('Failed to update conversion funnel:', error);
  }
}