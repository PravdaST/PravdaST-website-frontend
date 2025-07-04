export default async function handler(req, res) {
  try {
    const baseUrl = 'https://www.pravdagency.eu';
    const currentDate = new Date().toISOString().split('T')[0];
    
    const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <sitemap>
      <loc>${baseUrl}/sitemap.xml</loc>
      <lastmod>${currentDate}</lastmod>
   </sitemap>
   <sitemap>
      <loc>${baseUrl}/sitemap-services.xml</loc>
      <lastmod>${currentDate}</lastmod>
   </sitemap>
</sitemapindex>`;

    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(sitemapIndexContent);
  } catch (error) {
    console.error('Sitemap index generation error:', error);
    res.status(500).send('Error generating sitemap index');
  }
}