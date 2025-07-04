export default async function handler(req, res) {
  try {
    const baseUrl = 'https://www.pravdagency.eu';
    
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>${baseUrl}/services</loc>
      <lastmod>2025-06-30</lastmod>
   </url>
   <url>
      <loc>${baseUrl}/services/seo-struktor</loc>
      <lastmod>2025-06-30</lastmod>
   </url>
   <url>
      <loc>${baseUrl}/services/clickstarter</loc>
      <lastmod>2025-06-30</lastmod>
   </url>
   <url>
      <loc>${baseUrl}/services/trendlab</loc>
      <lastmod>2025-06-30</lastmod>
   </url>
   <url>
      <loc>${baseUrl}/services/clientomat</loc>
      <lastmod>2025-06-30</lastmod>
   </url>
</urlset>`;

    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(sitemapContent);
  } catch (error) {
    console.error('Services sitemap generation error:', error);
    res.status(500).send('Error generating services sitemap');
  }
}