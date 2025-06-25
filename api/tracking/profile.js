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
    const profileData = req.body;
    
    if (!profileData.id) {
      res.status(400).json({ error: 'Missing required field: id' });
      return;
    }

    const client = await pool.connect();

    try {
      // Upsert user profile
      const query = `
        INSERT INTO user_profiles (
          user_id, email, company, website, industry, 
          company_size, role, budget_range, pain_points, 
          interests, stage, attribution_channel, 
          utm_source, utm_medium, utm_campaign, utm_content, utm_term,
          first_visit, last_visit, session_count, page_views, 
          time_on_site, devices_used, referrer, 
          conversion_events, lead_score, created_at, updated_at
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, 
          $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, 
          $23, $24, $25, $26, NOW(), NOW()
        )
        ON CONFLICT (user_id) 
        DO UPDATE SET
          email = COALESCE($2, user_profiles.email),
          company = COALESCE($3, user_profiles.company),
          website = COALESCE($4, user_profiles.website),
          industry = COALESCE($5, user_profiles.industry),
          company_size = COALESCE($6, user_profiles.company_size),
          role = COALESCE($7, user_profiles.role),
          budget_range = COALESCE($8, user_profiles.budget_range),
          pain_points = COALESCE($9, user_profiles.pain_points),
          interests = COALESCE($10, user_profiles.interests),
          stage = COALESCE($11, user_profiles.stage),
          attribution_channel = COALESCE($12, user_profiles.attribution_channel),
          utm_source = COALESCE($13, user_profiles.utm_source),
          utm_medium = COALESCE($14, user_profiles.utm_medium),
          utm_campaign = COALESCE($15, user_profiles.utm_campaign),
          utm_content = COALESCE($16, user_profiles.utm_content),
          utm_term = COALESCE($17, user_profiles.utm_term),
          last_visit = $19,
          session_count = $20,
          page_views = $21,
          time_on_site = $22,
          devices_used = $23,
          referrer = COALESCE($24, user_profiles.referrer),
          conversion_events = $25,
          lead_score = $26,
          updated_at = NOW()
        RETURNING user_id
      `;

      const values = [
        profileData.id,
        profileData.email,
        profileData.company,
        profileData.website,
        profileData.industry,
        profileData.company_size,
        profileData.role,
        profileData.budget_range,
        JSON.stringify(profileData.pain_points || []),
        JSON.stringify(profileData.interests || []),
        profileData.stage,
        profileData.attribution_channel,
        profileData.utm_source,
        profileData.utm_medium,
        profileData.utm_campaign,
        profileData.utm_content,
        profileData.utm_term,
        profileData.first_visit,
        profileData.last_visit,
        profileData.session_count || 1,
        profileData.page_views || 1,
        profileData.time_on_site || 0,
        JSON.stringify(profileData.devices_used || []),
        profileData.referrer,
        JSON.stringify(profileData.conversion_events || []),
        profileData.lead_score || 0
      ];

      const result = await client.query(query, values);

      // Update lead scoring if high-value prospect
      if (profileData.lead_score >= 70) {
        await notifyHighValueLead(client, profileData);
      }

      res.status(200).json({ 
        success: true, 
        user_id: result.rows[0].user_id,
        message: 'Profile updated successfully' 
      });

    } finally {
      client.release();
    }

  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ 
      error: 'Failed to update profile',
      details: error.message 
    });
  }
};

async function notifyHighValueLead(client, profileData) {
  try {
    // Insert high-value lead notification
    const query = `
      INSERT INTO lead_notifications (
        user_id, lead_score, profile_data, 
        notification_type, status, created_at
      ) VALUES ($1, $2, $3, 'high_value_lead', 'pending', NOW())
    `;

    await client.query(query, [
      profileData.id,
      profileData.lead_score,
      JSON.stringify(profileData)
    ]);

    console.log(`High-value lead detected: ${profileData.id} (Score: ${profileData.lead_score})`);
  } catch (error) {
    console.error('Failed to create lead notification:', error);
  }
}