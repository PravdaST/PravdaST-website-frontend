
export default async function handler(req, res) {
  try {
    const baseUrl = 'https://www.pravdagency.eu';
    
    // Set proper headers before generating content
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
   <url>
      <loc>${baseUrl}/</loc>
      <lastmod>2025-01-09</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
   </url>
   <url>
      <loc>${baseUrl}/services</loc>
      <lastmod>2025-01-09</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
   </url>
   <url>
      <loc>${baseUrl}/services/seo-struktor</loc>
      <lastmod>2025-01-09</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
   </url>
   <url>
      <loc>${baseUrl}/services/clientomat</loc>
      <lastmod>2025-01-09</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
   </url>
   <url>
      <loc>${baseUrl}/services/trendlab</loc>
      <lastmod>2025-01-09</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
   </url>
   <url>
      <loc>${baseUrl}/about</loc>
      <lastmod>2025-01-09</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
   </url>
   <url>
      <loc>${baseUrl}/case-studies</loc>
      <lastmod>2025-01-09</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
   </url>
   <url>
      <loc>${baseUrl}/contact</loc>
      <lastmod>2025-01-09</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
   </url>
   <url>
      <loc>${baseUrl}/faq</loc>
      <lastmod>2025-01-09</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
   </url>
   <url>
      <loc>${baseUrl}/terms</loc>
      <lastmod>2025-01-09</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.3</priority>
   </url>
   <url>
      <loc>${baseUrl}/privacy</loc>
      <lastmod>2025-01-09</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.3</priority>
   </url>
</urlset>`;

    res.status(200).send(sitemapContent);
  } catch (error) {
    console.error('Sitemap generation error:', error);
    res.status(500).send('Error generating sitemap');
  }
}
