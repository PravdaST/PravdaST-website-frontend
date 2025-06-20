import { useEffect } from "react";
import { SEOData, defaultSEOConfig } from "../../shared/seo-types";

interface SEOHeadProps {
  seo?: Partial<SEOData>;
  pageSlug?: string;
}

export function SEOHead({ seo, pageSlug }: SEOHeadProps) {
  const title = seo?.title || defaultSEOConfig.defaultTitle;
  const description = seo?.description || defaultSEOConfig.defaultDescription;
  const keywords = seo?.keywords;
  const canonical = seo?.canonical || `${defaultSEOConfig.siteUrl}${pageSlug ? `/${pageSlug}` : ''}`;
  const ogTitle = seo?.ogTitle || title;
  const ogDescription = seo?.ogDescription || description;
  const ogImage = seo?.ogImage || `${defaultSEOConfig.siteUrl}${defaultSEOConfig.defaultImage}`;
  const noIndex = seo?.noIndex || false;

  useEffect(() => {
    // Обновяване на title
    document.title = title;

    // Функция за обновяване или създаване на meta тагове
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Основни SEO meta тагове
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    if (noIndex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    }
    
    // Допълнителни SEO тагове
    updateMetaTag('author', 'Pravdast');
    updateMetaTag('language', 'Bulgarian');
    updateMetaTag('geo.region', 'BG');
    updateMetaTag('geo.country', 'Bulgaria'); 
    updateMetaTag('geo.placename', 'София');
    updateMetaTag('ICBM', '42.6977, 23.3219'); // София координати
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('rating', 'general');
    updateMetaTag('distribution', 'global');
    
    // Viewport и мобилна оптимизация (ако не са зададени)
    if (!document.querySelector('meta[name="viewport"]')) {
      updateMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
    }
    
    // Тема цвят за мобилни браузъри
    updateMetaTag('theme-color', '#ECB628');
    updateMetaTag('msapplication-TileColor', '#ECB628');

    // Open Graph тагове
    updateMetaTag('og:title', ogTitle, true);
    updateMetaTag('og:description', ogDescription, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', defaultSEOConfig.siteName, true);
    updateMetaTag('og:locale', defaultSEOConfig.locale, true);

    // Twitter Card тагове
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', defaultSEOConfig.twitterHandle);
    updateMetaTag('twitter:title', ogTitle);
    updateMetaTag('twitter:description', ogDescription);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Schema.org JSON-LD
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(script => script.remove());

    // Основна организация schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": defaultSEOConfig.siteName,
      "url": defaultSEOConfig.siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${defaultSEOConfig.siteUrl}/logo.png`,
        "width": 300,
        "height": 100
      },
      "description": description,
      "foundingDate": "2024",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BG",
        "addressLocality": "София"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+359-xxx-xxx-xxx",
        "contactType": "Customer Service",
        "areaServed": "BG",
        "availableLanguage": "Bulgarian"
      },
      "sameAs": [
        "https://www.linkedin.com/company/pravdast",
        "https://github.com/pravdast"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "B2B Business Growth Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Struktor™",
              "description": "Професионална SEO система за органичен растеж"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Sales Engine™",
              "description": "Автоматизирана продажбена система"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Clientomat™",
              "description": "Система за привличане и задържане на клиенти"
            }
          }
        ]
      }
    };

    // Website schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": defaultSEOConfig.siteName,
      "url": defaultSEOConfig.siteUrl,
      "description": description,
      "inLanguage": "bg-BG",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${defaultSEOConfig.siteUrl}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    };

    // Специфична schema за услугите
    let serviceSchema = null;
    if (pageSlug?.includes('services/')) {
      const serviceName = pageSlug.split('/')[1];
      const serviceNames = {
        'seo-struktor': 'SEO Struktor™',
        'sales-engine': 'Sales Engine™', 
        'clientomat': 'Clientomat™'
      };
      
      if (serviceNames[serviceName as keyof typeof serviceNames]) {
        serviceSchema = {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": serviceNames[serviceName as keyof typeof serviceNames],
          "description": description,
          "provider": {
            "@type": "Organization",
            "name": defaultSEOConfig.siteName,
            "url": defaultSEOConfig.siteUrl
          },
          "areaServed": {
            "@type": "Country",
            "name": "Bulgaria"
          },
          "serviceType": "Business Consulting",
          "category": "B2B Growth Systems"
        };
      }
    }

    // Добавяне на всички schemas
    const schemas = [organizationSchema, websiteSchema];
    if (serviceSchema) schemas.push(serviceSchema);

    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      script.setAttribute('data-schema-type', schema['@type']);
      document.head.appendChild(script);
    });

  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, noIndex]);

  return null; // Този компонент не рендира нищо визуално
}

// Hook за лесно използване на SEO
export function useSEO(seo?: Partial<SEOData>, pageSlug?: string) {
  useEffect(() => {
    // Тази логика се изпълнява при промяна на страницата
  }, [seo, pageSlug]);
}