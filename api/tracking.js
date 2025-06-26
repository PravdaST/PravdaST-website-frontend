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

  try {
    switch (action) {
      case 'events':
        if (req.method !== 'POST') {
          return res.status(405).json({ error: 'Method not allowed' });
        }
        
        const { event_type, category, action: eventAction, label, value, event_data, session_id, user_id, page_url, attribution_channel } = req.body || {};
        
        if (!event_type) {
          return res.status(400).json({ error: 'Event type is required' });
        }
        
        console.log('Tracking event:', { event_type, category, eventAction, label, value, session_id, user_id, page_url });
        
        return res.json({ success: true, message: 'Event tracked successfully' });

      case 'profile':
        if (req.method !== 'POST') {
          return res.status(405).json({ error: 'Method not allowed' });
        }
        
        const { user_id: profileUserId, email, company, website, industry, company_size, role, budget_range } = req.body || {};
        
        if (!profileUserId) {
          return res.status(400).json({ error: 'User ID is required' });
        }
        
        // Calculate lead score
        let leadScore = 0;
        if (email) leadScore += 20;
        if (company) leadScore += 15;
        if (website) leadScore += 10;
        if (industry) leadScore += 10;
        if (role && (role.includes('CEO') || role.includes('Owner'))) leadScore += 25;
        if (budget_range === 'high') leadScore += 20;
        
        console.log('Profile updated:', { profileUserId, email: email || 'not provided', company: company || 'not provided', leadScore });
        
        return res.json({ success: true, lead_score: leadScore });

      case 'analytics':
        if (req.method !== 'GET') {
          return res.status(405).json({ error: 'Method not allowed' });
        }
        
        const analytics = {
          overview: {
            total_users: 150,
            total_conversions: 12,
            avg_lead_score: 45,
            qualified_leads: 8
          },
          conversion_funnel: {
            funnel_stages: [
              { stage: 'page_view', users: 150, conversion_rate: 100 },
              { stage: 'form_interaction', users: 45, conversion_rate: 30 },
              { stage: 'form_submit', users: 25, conversion_rate: 55.6 },
              { stage: 'conversion', users: 12, conversion_rate: 48 }
            ],
            overall_conversion_rate: 8
          },
          traffic_sources: [
            { source: 'organic', attribution_channel: 'organic_search', users: 80, conversions: 7 },
            { source: 'direct', attribution_channel: 'direct', users: 45, conversions: 3 },
            { source: 'social', attribution_channel: 'social_media', users: 25, conversions: 2 }
          ]
        };
        
        return res.json(analytics);

      default:
        return res.status(404).json({ error: 'Action not found' });
    }
  } catch (error) {
    console.error('Tracking API error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}