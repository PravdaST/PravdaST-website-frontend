// SEO Generator за sitemap, robots.txt и schema markup
export class SEOGenerator {
  private baseUrl: string;
  
  constructor(baseUrl: string = 'https://www.pravdagency.eu') {
    this.baseUrl = baseUrl;
  }

  // Генерира Google-оптимизиран XML sitemap
  generateSitemap(): string {
    const pages = [
      // Главна страница - най-висок приоритет
      { url: '/', priority: '1.0', changefreq: 'weekly', lastmod: '2025-06-20' },
      
      // Услуги - висок приоритет за конверсии
      { url: '/services', priority: '0.9', changefreq: 'weekly', lastmod: '2025-06-20' },
      { url: '/services/seo-struktor', priority: '0.9', changefreq: 'monthly', lastmod: '2025-06-20' },
      { url: '/services/sales-engine', priority: '0.9', changefreq: 'monthly', lastmod: '2025-06-20' },
      { url: '/services/clientomat', priority: '0.9', changefreq: 'monthly', lastmod: '2025-06-20' },
      
      // Контакти - висок приоритет за lead generation
      { url: '/contact', priority: '0.8', changefreq: 'monthly', lastmod: '2025-06-20' },
      
      // Казуси - доказателства за резултати
      { url: '/case-studies', priority: '0.7', changefreq: 'monthly', lastmod: '2025-06-20' },
      
      // За нас - брандинг и доверие
      { url: '/about', priority: '0.6', changefreq: 'monthly', lastmod: '2025-06-20' }
    ];

    // Clean XML sitemap за съвременни Google стандарти
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    pages.forEach(page => {
      sitemap += `
  <url>
    <loc>${this.baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    });

    sitemap += `
</urlset>`;

    return sitemap;
  }

  // Генерира Google-оптимизиран robots.txt
  generateRobotsTxt(): string {
    return `# Robots.txt за Pravdast Business Engineering Platform
# Генериран автоматично на ${new Date().toISOString().split('T')[0]}

# Разрешаване на всички бот агенти за основното съдържание
User-agent: *
Allow: /
Allow: /services/
Allow: /case-studies
Allow: /about
Allow: /contact

# Блокиране на административни файлове
Disallow: /admin/
Disallow: /api/
Disallow: /.well-known/
Disallow: /private/
Disallow: /temp/
Disallow: /node_modules/
Disallow: /*.json$
Disallow: /*.log$

# Специални правила за различни бот агенти
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot  
Allow: /
Crawl-delay: 2

User-agent: YandexBot
Allow: /
Crawl-delay: 3

# XML Sitemaps за Google Search Console
Sitemap: ${this.baseUrl}/sitemap.xml
Sitemap: ${this.baseUrl}/sitemap-index.xml
Sitemap: ${this.baseUrl}/blog-sitemap.xml
Sitemap: ${this.baseUrl}/services-sitemap.xml

# Хост директива
Host: ${this.baseUrl.replace('https://', '').replace('http://', '')}

# Disallow admin and development paths
Disallow: /admin/
Disallow: /api/
Disallow: /strapi-test
Disallow: /seo-monitor

# Allow important pages
Allow: /
Allow: /services
Allow: /case-studies
Allow: /about
Allow: /contact
Allow: /blog

# Crawl delay
Crawl-delay: 1`;
  }

  // Генерира JSON-LD schema за организация с локален бизнес markup
  generateOrganizationSchema(): object {
    return {
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "name": "Pravdast",
      "alternateName": "Pravda Agency",
      "description": "Бизнес инженеринг платформа за предсказуем растеж на B2B компании в България. Специализирани услуги: SEO Struktor™, Clientomat™, Sales Engine™.",
      "url": this.baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${this.baseUrl}/favicon-192x192.png`,
        "width": 192,
        "height": 192
      },
      "image": `${this.baseUrl}/og-images/home.svg`,
      "foundingDate": "2024",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+359-879-282-299",
          "contactType": "customer service",
          "email": "contact@pravdast.agency",
          "availableLanguage": ["Bulgarian", "English"],
          "areaServed": "BG"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Дебър №58",
        "addressLocality": "Варна",
        "postalCode": "9000",
        "addressRegion": "Варна",
        "addressCountry": "BG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.2141",
        "longitude": "27.9147"
      },
      "serviceArea": {
        "@type": "Country",
        "name": "Bulgaria"
      },
      "priceRange": "$$",
      "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
      "currenciesAccepted": "BGN",
      "openingHours": "Mo-Fr 09:00-18:00",
      "sameAs": [
        "https://www.facebook.com/pravdagency",
        "https://www.youtube.com/@pravdagency",
        "https://www.instagram.com/pravdagency",
        "https://www.linkedin.com/company/pravdagency"
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