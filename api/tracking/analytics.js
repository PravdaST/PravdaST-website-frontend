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

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { type, timeframe = '30d', channel } = req.query;
    const client = await pool.connect();

    try {
      let analytics = {};

      switch (type) {
        case 'conversion_funnel':
          analytics = await getConversionFunnelAnalytics(client, timeframe);
          break;
        case 'attribution':
          analytics = await getAttributionAnalytics(client, timeframe, channel);
          break;
        case 'lead_scoring':
          analytics = await getLeadScoringAnalytics(client, timeframe);
          break;
        case 'traffic_sources':
          analytics = await getTrafficSourceAnalytics(client, timeframe);
          break;
        case 'dashboard':
          analytics = await getDashboardAnalytics(client, timeframe);
          break;
        default:
          analytics = await getDashboardAnalytics(client, timeframe);
      }

      res.status(200).json(analytics);

    } finally {
      client.release();
    }

  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch analytics',
      details: error.message 
    });
  }
};

async function getConversionFunnelAnalytics(client, timeframe) {
  const timeCondition = getTimeCondition(timeframe);
  
  const query = `
    WITH funnel_data AS (
      SELECT 
        stage,
        COUNT(DISTINCT user_id) as users,
        COUNT(*) as events
      FROM conversion_funnel 
      WHERE created_at >= ${timeCondition}
      GROUP BY stage
    ),
    stage_order AS (
      SELECT 
        stage,
        users,
        events,
        CASE stage
          WHEN 'landing' THEN 1
          WHEN 'engagement' THEN 2
          WHEN 'consideration' THEN 3
          WHEN 'intent' THEN 4
          WHEN 'conversion' THEN 5
          WHEN 'retention' THEN 6
        END as stage_order
      FROM funnel_data
    )
    SELECT 
      stage,
      users,
      events,
      LAG(users) OVER (ORDER BY stage_order) as prev_users,
      CASE 
        WHEN LAG(users) OVER (ORDER BY stage_order) > 0 
        THEN ROUND((users::float / LAG(users) OVER (ORDER BY stage_order)) * 100, 2)
        ELSE 100
      END as conversion_rate
    FROM stage_order
    ORDER BY stage_order
  `;

  const result = await client.query(query);
  
  return {
    funnel_stages: result.rows,
    total_conversions: result.rows.find(r => r.stage === 'conversion')?.users || 0,
    overall_conversion_rate: result.rows.length > 0 ? 
      ((result.rows[result.rows.length - 1]?.users || 0) / (result.rows[0]?.users || 1) * 100).toFixed(2) : 0
  };
}

async function getAttributionAnalytics(client, timeframe, channel) {
  const timeCondition = getTimeCondition(timeframe);
  const channelCondition = channel ? `AND attribution_channel = '${channel}'` : '';
  
  const query = `
    WITH attribution_data AS (
      SELECT 
        attribution_channel,
        utm_source,
        utm_medium,
        utm_campaign,
        COUNT(DISTINCT user_id) as users,
        AVG(lead_score) as avg_lead_score,
        COUNT(CASE WHEN stage = 'conversion' THEN 1 END) as conversions
      FROM user_profiles 
      WHERE created_at >= ${timeCondition} ${channelCondition}
      GROUP BY attribution_channel, utm_source, utm_medium, utm_campaign
    )
    SELECT 
      *,
      CASE 
        WHEN users > 0 
        THEN ROUND((conversions::float / users) * 100, 2)
        ELSE 0
      END as conversion_rate
    FROM attribution_data
    ORDER BY users DESC
  `;

  const result = await client.query(query);
  
  // Get channel summary
  const channelSummary = await client.query(`
    SELECT 
      attribution_channel,
      COUNT(DISTINCT user_id) as total_users,
      AVG(lead_score) as avg_lead_score,
      COUNT(CASE WHEN stage = 'conversion' THEN 1 END) as total_conversions
    FROM user_profiles 
    WHERE created_at >= ${timeCondition}
    GROUP BY attribution_channel
    ORDER BY total_users DESC
  `);

  return {
    detailed_attribution: result.rows,
    channel_summary: channelSummary.rows,
    best_performing_channel: channelSummary.rows[0]?.attribution_channel || 'direct'
  };
}

async function getLeadScoringAnalytics(client, timeframe) {
  const timeCondition = getTimeCondition(timeframe);
  
  const query = `
    WITH lead_segments AS (
      SELECT 
        CASE 
          WHEN lead_score >= 80 THEN 'hot'
          WHEN lead_score >= 60 THEN 'warm'
          WHEN lead_score >= 40 THEN 'cold'
          ELSE 'unqualified'
        END as segment,
        COUNT(*) as count,
        AVG(lead_score) as avg_score,
        MAX(lead_score) as max_score,
        MIN(lead_score) as min_score
      FROM user_profiles
      WHERE created_at >= ${timeCondition}
      GROUP BY segment
    )
    SELECT * FROM lead_segments
    ORDER BY avg_score DESC
  `;

  const result = await client.query(query);
  
  // Get top scoring leads
  const topLeads = await client.query(`
    SELECT 
      user_id, email, company, lead_score, 
      attribution_channel, stage, last_visit
    FROM user_profiles
    WHERE created_at >= ${timeCondition}
      AND lead_score >= 70
    ORDER BY lead_score DESC
    LIMIT 20
  `);

  return {
    lead_segments: result.rows,
    top_leads: topLeads.rows,
    total_qualified_leads: result.rows
      .filter(r => r.segment !== 'unqualified')
      .reduce((sum, r) => sum + parseInt(r.count), 0)
  };
}

async function getTrafficSourceAnalytics(client, timeframe) {
  const timeCondition = getTimeCondition(timeframe);
  
  const query = `
    SELECT 
      COALESCE(utm_source, referrer, 'direct') as source,
      attribution_channel,
      COUNT(DISTINCT user_id) as users,
      AVG(session_count) as avg_sessions,
      AVG(page_views) as avg_page_views,
      AVG(time_on_site) as avg_time_on_site,
      COUNT(CASE WHEN stage = 'conversion' THEN 1 END) as conversions
    FROM user_profiles
    WHERE created_at >= ${timeCondition}
    GROUP BY source, attribution_channel
    ORDER BY users DESC
  `;

  const result = await client.query(query);
  
  return {
    traffic_sources: result.rows,
    total_sources: result.rows.length,
    top_source: result.rows[0]?.source || 'direct'
  };
}

async function getDashboardAnalytics(client, timeframe) {
  const timeCondition = getTimeCondition(timeframe);
  
  // Get overall metrics
  const overviewQuery = `
    SELECT 
      COUNT(DISTINCT user_id) as total_users,
      COUNT(DISTINCT CASE WHEN stage = 'conversion' THEN user_id END) as total_conversions,
      AVG(lead_score) as avg_lead_score,
      COUNT(DISTINCT CASE WHEN lead_score >= 70 THEN user_id END) as qualified_leads
    FROM user_profiles
    WHERE created_at >= ${timeCondition}
  `;

  const overview = await client.query(overviewQuery);
  
  // Get recent activity
  const activityQuery = `
    SELECT 
      event_name, category, action, label, 
      session_id, user_id, timestamp, url
    FROM tracking_events
    WHERE created_at >= ${timeCondition}
    ORDER BY created_at DESC
    LIMIT 50
  `;

  const activity = await client.query(activityQuery);
  
  // Get conversion funnel
  const funnel = await getConversionFunnelAnalytics(client, timeframe);
  
  // Get attribution summary
  const attribution = await getAttributionAnalytics(client, timeframe);

  return {
    overview: overview.rows[0] || {},
    recent_activity: activity.rows,
    conversion_funnel: funnel,
    attribution_summary: attribution.channel_summary,
    timeframe: timeframe
  };
}

function getTimeCondition(timeframe) {
  switch (timeframe) {
    case '1d':
      return "NOW() - INTERVAL '1 day'";
    case '7d':
      return "NOW() - INTERVAL '7 days'";
    case '30d':
      return "NOW() - INTERVAL '30 days'";
    case '90d':
      return "NOW() - INTERVAL '90 days'";
    case '1y':
      return "NOW() - INTERVAL '1 year'";
    default:
      return "NOW() - INTERVAL '30 days'";
  }
}