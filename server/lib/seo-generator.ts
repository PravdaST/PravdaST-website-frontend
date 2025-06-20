// SEO Generator за sitemap, robots.txt и schema markup
export class SEOGenerator {
  private baseUrl: string;
  
  constructor(baseUrl: string = 'https://www.pravdagency.eu') {
    this.baseUrl = baseUrl;
  }

  // Генерира XML sitemap
  generateSitemap(): string {
    const pages = [
      { url: '/', priority: '1.0', changefreq: 'weekly' },
      { url: '/services', priority: '0.9', changefreq: 'weekly' },
      { url: '/services/seo-struktor', priority: '0.8', changefreq: 'monthly' },
      { url: '/services/clientomat', priority: '0.8', changefreq: 'monthly' },
      { url: '/services/sales-engine', priority: '0.8', changefreq: 'monthly' },
      { url: '/case-studies', priority: '0.7', changefreq: 'monthly' },
      { url: '/about', priority: '0.6', changefreq: 'monthly' },
      { url: '/contact', priority: '0.8', changefreq: 'monthly' }
    ];

    const currentDate = new Date().toISOString().split('T')[0];

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    pages.forEach(page => {
      sitemap += `
  <url>
    <loc>${this.baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    });

    sitemap += `
</urlset>`;

    return sitemap;
  }

  // Генерира robots.txt
  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${this.baseUrl}/sitemap.xml

# Disallow admin and development paths
Disallow: /admin/
Disallow: /api/
Disallow: /strapi-test

# Allow important pages
Allow: /
Allow: /services
Allow: /case-studies
Allow: /about
Allow: /contact

# Crawl delay
Crawl-delay: 1`;
  }

  // Генерира JSON-LD schema за организация
  generateOrganizationSchema(): object {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Pravda ST",
      "description": "Business Engineering консултантска компания за предсказуем растеж и системен подход към бизнеса в България",
      "url": this.baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${this.baseUrl}/pravda-st-logo.png`
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+359-XXX-XXX-XXX",
        "contactType": "customer service",
        "availableLanguage": "Bulgarian"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BG",
        "addressRegion": "София",
        "addressLocality": "София"
      },
      "sameAs": [
        "https://www.linkedin.com/company/pravda-st",
        "https://www.facebook.com/pravdast"
      ],
      "offers": [
        {
          "@type": "Service",
          "name": "SEO Struktor™",
          "description": "Система за органична видимост и SEO оптимизация"
        },
        {
          "@type": "Service", 
          "name": "Clientomat™",
          "description": "Автоматизирана система за генериране на клиенти"
        },
        {
          "@type": "Service",
          "name": "Sales Engine™", 
          "description": "Система за автоматизиране на продажбите"
        }
      ]
    };
  }

  // Генерира JSON-LD schema за уеб сайт
  generateWebsiteSchema(): object {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Pravda ST - Business Engineering",
      "description": "Спрете да залагате на късмет в бизнеса. Изграждаме предсказуеми системи за растеж.",
      "url": this.baseUrl,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${this.baseUrl}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Pravda ST",
        "url": this.baseUrl
      },
      "inLanguage": "bg-BG",
      "copyrightYear": new Date().getFullYear(),
      "copyrightHolder": {
        "@type": "Organization",
        "name": "Pravda ST"
      }
    };
  }

  // Генерира JSON-LD schema за услуга
  generateServiceSchema(serviceName: string, description: string, price: string): object {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": description,
      "provider": {
        "@type": "Organization",
        "name": "Pravda ST",
        "url": this.baseUrl
      },
      "areaServed": {
        "@type": "Country",
        "name": "Bulgaria"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${serviceName} Packages`,
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": serviceName
            },
            "price": price,
            "priceCurrency": "BGN"
          }
        ]
      },
      "category": "Business Consulting",
      "serviceType": "Business Engineering"
    };
  }

  // Генерира breadcrumb schema
  generateBreadcrumbSchema(breadcrumbs: Array<{name: string, url: string}>): object {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": `${this.baseUrl}${crumb.url}`
      }))
    };
  }
}

export const seoGenerator = new SEOGenerator();