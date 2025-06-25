export default async function handler(req, res) {
  try {
    const pages = [
      // Главна страница - най-висок приоритет
      { url: '/', priority: '1.0', changefreq: 'weekly', lastmod: '2025-06-21' },
      
      // Услуги - висок приоритет за конверсии
      { url: '/services', priority: '0.9', changefreq: 'weekly', lastmod: '2025-06-21' },
      { url: '/services/seo-struktor', priority: '0.9', changefreq: 'monthly', lastmod: '2025-06-21' },
      { url: '/services/sales-engine', priority: '0.9', changefreq: 'monthly', lastmod: '2025-06-21' },
      { url: '/services/clientomat', priority: '0.9', changefreq: 'monthly', lastmod: '2025-06-21' },
      
      // Контакти - висок приоритет за lead generation
      { url: '/contact', priority: '0.8', changefreq: 'monthly', lastmod: '2025-06-21' },
      
      // Казуси - доказателства за резултати
      { url: '/case-studies', priority: '0.7', changefreq: 'monthly', lastmod: '2025-06-21' },
      
      // За нас - брандинг и доверие
      { url: '/about', priority: '0.6', changefreq: 'monthly', lastmod: '2025-06-21' },
      
      // Блог и FAQ
      { url: '/blog', priority: '0.6', changefreq: 'weekly', lastmod: '2025-06-21' },
      { url: '/faq', priority: '0.5', changefreq: 'monthly', lastmod: '2025-06-21' },
      
      // Ценоразпис
      { url: '/pricing', priority: '0.7', changefreq: 'monthly', lastmod: '2025-06-21' }
    ];

    const baseUrl = 'https://www.pravdagency.eu';

    // Clean XML sitemap за съвременни Google стандарти
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    pages.forEach(page => {
      sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    });

    sitemap += `
</urlset>`;

    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
    res.status(200).send(sitemap);
  } catch (error) {
    console.error('Sitemap generation error:', error);
    res.status(500).send('Error generating sitemap');
  }
}