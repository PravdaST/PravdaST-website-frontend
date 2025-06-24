export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Simple setup endpoint for Vercel deployment
  res.status(200).json({ 
    message: 'Setup endpoint ready',
    status: 'Pravdast website deployed successfully',
    environment: 'Vercel production',
    timestamp: new Date().toISOString()
  });
}