export default async function handler(req, res) {
  try {
    const baseUrl = 'https://www.pravdagency.eu';
    
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>2025-06-28</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>2025-06-28</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/services/seo-struktor</loc>
    <lastmod>2025-06-28</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/services/clickstarter</loc>
    <lastmod>2025-06-27</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/services/trendlab</loc>
    <lastmod>2025-06-27</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/services/clientomat</loc>
    <lastmod>2025-06-25</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>2025-06-25</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>2025-06-25</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/faq</loc>
    <lastmod>2025-06-27</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/calculators</loc>
    <lastmod>2025-06-27</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/case-studies</loc>
    <lastmod>2025-06-22</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>2025-06-28</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/terms</loc>
    <lastmod>2025-06-27</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/privacy</loc>
    <lastmod>2025-06-27</lastmod>
  </url>
</urlset>`;

    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(sitemapContent);
  } catch (error) {
    console.error('Sitemap generation error:', error);
    res.status(500).send('Error generating sitemap');
  }
}