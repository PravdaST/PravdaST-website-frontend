// Google Search Console интеграция и SEO мониторинг

export interface SearchConsoleMetrics {
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
  date: string;
}

export interface KeywordPerformance {
  query: string;
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
}

// Генериране на enhanced sitemap за Search Console
export const generateSitemapIndex = () => {
  const baseUrl = 'https://www.pravdagency.eu';
  const sitemaps = [
    { loc: `${baseUrl}/sitemap.xml`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/blog-sitemap.xml`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/services-sitemap.xml`, lastmod: new Date().toISOString() }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sitemap => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

  return xml;
};

// Генериране на специализиран блог sitemap
export const generateBlogSitemap = () => {
  const baseUrl = 'https://www.pravdagency.eu';
  const blogPosts = [
    {
      slug: 'predskazuem-rastezh-b2b-kompanii',
      lastmod: '2024-12-15',
      priority: '0.8',
      changefreq: 'monthly'
    },
    {
      slug: 'seo-struktor-revolutsionen-podhod', 
      lastmod: '2024-12-10',
      priority: '0.8',
      changefreq: 'monthly'
    }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
${blogPosts.map(post => `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.lastmod}</lastmod>
    <changefreq>${post.changefreq}</changefreq>
    <priority>${post.priority}</priority>
    <mobile:mobile/>
  </url>`).join('\n')}
</urlset>`;

  return xml;
};

// Генериране на услуги sitemap
export const generateServicesSitemap = () => {
  const baseUrl = 'https://www.pravdagency.eu';
  const services = [
    { slug: 'services', priority: '0.9' },
    { slug: 'services/seo-struktor', priority: '0.8' },
    { slug: 'services/clientomat', priority: '0.8' },
    { slug: 'services/sales-engine', priority: '0.8' }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${services.map(service => `  <url>
    <loc>${baseUrl}/${service.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${service.priority}</priority>
    <mobile:mobile/>
  </url>`).join('\n')}
</urlset>`;

  return xml;
};

// Submit URL за мгновенно индексиране
export const submitURLToGoogle = async (url: string) => {
  // Това ще се използва с Google Indexing API в production
  console.log(`Submitting URL to Google for indexing: ${url}`);
  
  // За development - просто логваме
  if (process.env.NODE_ENV === 'development') {
    console.log('Development mode - URL submission simulated');
    return true;
  }
  
  // В production тук ще има Google Indexing API заявка
  return false;
};

// Проверка на SEO здравето на страницата
export const checkPageSEOHealth = (url: string) => {
  const checks = {
    hasTitle: !!(document.title && document.title.length > 0),
    titleLengthOK: document.title ? document.title.length >= 30 && document.title.length <= 60 : false,
    hasDescription: !!document.querySelector('meta[name="description"]'),
    hasCanonical: !!document.querySelector('link[rel="canonical"]'),
    hasOGImage: !!document.querySelector('meta[property="og:image"]'),
    hasStructuredData: !!document.querySelector('script[type="application/ld+json"]'),
    hasH1: document.querySelectorAll('h1').length === 1,
    hasAltTags: Array.from(document.querySelectorAll('img')).every(img => img.alt),
    isHTTPS: window.location.protocol === 'https:',
    isMobileFriendly: window.innerWidth <= 768 ? true : !!document.querySelector('meta[name="viewport"]')
  };

  const score = Object.values(checks).filter(Boolean).length / Object.keys(checks).length * 100;
  
  return {
    url,
    score: Math.round(score),
    checks,
    recommendations: generateSEORecommendations(checks)
  };
};

const generateSEORecommendations = (checks: Record<string, boolean>) => {
  const recommendations = [];
  
  if (!checks.hasTitle) recommendations.push('Добавете title tag');
  if (!checks.titleLengthOK) {
    recommendations.push('Оптимизирайте дължината на title (30-60 символа)');
  }
  if (!checks.hasDescription) recommendations.push('Добавете meta description');
  if (!checks.hasCanonical) recommendations.push('Добавете canonical URL');
  if (!checks.hasOGImage) recommendations.push('Добавете Open Graph изображение');
  if (!checks.hasStructuredData) recommendations.push('Добавете Schema.org structured data');
  if (!checks.hasH1) recommendations.push('Добавете единствен H1 заглавие');
  if (!checks.hasAltTags) recommendations.push('Добавете alt атрибути на всички изображения');
  
  return recommendations;
};