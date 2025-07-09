import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import { pageSEOData } from '../../client/src/data/seo-pages';

// SEO данни за динамично заместване в HTML
const getSEOForRoute = (route: string) => {
  // Мапиране на routes към SEO ключове
  const routeMapping: Record<string, string> = {
    '/': 'home',
    '/services': 'services',
    '/services/seo-struktor': 'services/seo-struktor',
    '/services/trendlab': 'services/trendlab',
    '/services/clickstarter': 'services/clickstarter',
    '/services/clientomat': 'services/clientomat',
    '/about': 'about',
    '/contact': 'contact',
    '/blog': 'blog',
    '/faq': 'faq',
    '/terms': 'terms',
    '/privacy': 'privacy',
    '/case-studies': 'case-studies'
  };

  const seoKey = routeMapping[route] || 'home';
  return pageSEOData[seoKey] || pageSEOData.home;
};

export const seoMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Skip middleware in development - let Vite handle routing
  if (process.env.NODE_ENV === 'development') {
    return next();
  }

  // Ако не е HTML заявка, продължи
  if (!req.headers.accept?.includes('text/html')) {
    return next();
  }

  // Прочети статичния HTML файл
  const htmlPath = path.join(process.cwd(), 'client', 'dist', 'index.html');
  
  try {
    let html = fs.readFileSync(htmlPath, 'utf8');
    const seoData = getSEOForRoute(req.path);

    // Замести title и meta description
    if (seoData.title) {
      html = html.replace(
        /<title>.*?<\/title>/,
        `<title>${seoData.title}</title>`
      );
    }

    if (seoData.description) {
      html = html.replace(
        /<meta name="description" content=".*?"[^>]*>/,
        `<meta name="description" content="${seoData.description}" />`
      );
    }

    // Добави canonical URL
    if (seoData.canonical) {
      const canonicalTag = `<link rel="canonical" href="${seoData.canonical}" />`;
      html = html.replace(
        /<\/head>/,
        `  ${canonicalTag}\n  </head>`
      );
    }

    // Добави Open Graph тагове
    if (seoData.ogTitle && seoData.ogDescription) {
      const ogTags = `
  <meta property="og:title" content="${seoData.ogTitle}" />
  <meta property="og:description" content="${seoData.ogDescription}" />
  <meta property="og:url" content="${seoData.canonical || 'https://www.pravdagency.eu' + req.path}" />
  <meta property="og:type" content="${seoData.ogType || 'website'}" />
  <meta property="og:image" content="${seoData.ogImage || 'https://www.pravdagency.eu/og-home.jpg'}" />`;

      html = html.replace(
        /<\/head>/,
        `${ogTags}\n  </head>`
      );
    }

    // Добави Twitter Cards
    if (seoData.twitterTitle && seoData.twitterDescription) {
      const twitterTags = `
  <meta name="twitter:card" content="${seoData.twitterCard || 'summary_large_image'}" />
  <meta name="twitter:title" content="${seoData.twitterTitle}" />
  <meta name="twitter:description" content="${seoData.twitterDescription}" />
  <meta name="twitter:image" content="${seoData.twitterImage || 'https://www.pravdagency.eu/twitter-home.jpg'}" />`;

      html = html.replace(
        /<\/head>/,
        `${twitterTags}\n  </head>`
      );
    }

    // Добави robots meta tag
    if (seoData.robots) {
      const robotsTag = `<meta name="robots" content="${seoData.robots}" />`;
      html = html.replace(
        /<\/head>/,
        `  ${robotsTag}\n  </head>`
      );
    }

    // Добави structured data ако има
    if (seoData.structuredData) {
      const structuredDataScript = `
  <script type="application/ld+json">
  ${JSON.stringify(seoData.structuredData, null, 2)}
  </script>`;

      html = html.replace(
        /<\/head>/,
        `${structuredDataScript}\n  </head>`
      );
    }

    res.send(html);
  } catch (error) {
    console.error('SEO middleware error:', error);
    next();
  }
};