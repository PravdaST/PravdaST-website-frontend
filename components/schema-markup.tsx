import { useEffect } from 'react';

interface SchemaMarkupProps {
  type: 'organization' | 'website' | 'service' | 'breadcrumb';
  data?: any;
}

export function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  useEffect(() => {
    const addSchemaScript = (schema: object) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      script.id = `schema-${type}`;
      
      // Премахваме предишен script ако съществува
      const existing = document.getElementById(`schema-${type}`);
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    };

    if (type === 'organization') {
      const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Pravda ST",
        "description": "Business Engineering консултантска компания за предсказуем растеж и системен подход към бизнеса в България",
        "url": "https://pravdast.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://pravdast.vercel.app/pravda-st-logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
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
      addSchemaScript(organizationSchema);
    }

    if (type === 'website') {
      const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Pravda ST - Business Engineering",
        "description": "Спрете да залагате на късмет в бизнеса. Изграждаме предсказуеми системи за растеж.",
        "url": "https://pravdast.vercel.app",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://pravdast.vercel.app/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Pravda ST",
          "url": "https://pravdast.vercel.app"
        },
        "inLanguage": "bg-BG",
        "copyrightYear": new Date().getFullYear(),
        "copyrightHolder": {
          "@type": "Organization",
          "name": "Pravda ST"
        }
      };
      addSchemaScript(websiteSchema);
    }

    if (type === 'service' && data) {
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": data.name,
        "description": data.description,
        "provider": {
          "@type": "Organization",
          "name": "Pravda ST",
          "url": "https://pravdast.vercel.app"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Bulgaria"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${data.name} Packages`,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": data.name
              },
              "price": data.price,
              "priceCurrency": "BGN"
            }
          ]
        },
        "category": "Business Consulting",
        "serviceType": "Business Engineering"
      };
      addSchemaScript(serviceSchema);
    }

    if (type === 'breadcrumb' && data?.breadcrumbs) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": data.breadcrumbs.map((crumb: any, index: number) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": `https://pravdast.vercel.app${crumb.url}`
        }))
      };
      addSchemaScript(breadcrumbSchema);
    }

    // Cleanup функция за премахване на schema при unmount
    return () => {
      const existing = document.getElementById(`schema-${type}`);
      if (existing) {
        existing.remove();
      }
    };
  }, [type, data]);

  return null; // Компонентът не рендира нищо визуално
}

// Hook за лесно използване на schema markup
export function useSchemaMarkup() {
  const addOrganizationSchema = () => <SchemaMarkup type="organization" />;
  const addWebsiteSchema = () => <SchemaMarkup type="website" />;
  const addServiceSchema = (serviceData: { name: string; description: string; price: string }) => 
    <SchemaMarkup type="service" data={serviceData} />;
  const addBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => 
    <SchemaMarkup type="breadcrumb" data={{ breadcrumbs }} />;

  return {
    OrganizationSchema: addOrganizationSchema,
    WebsiteSchema: addWebsiteSchema,
    ServiceSchema: addServiceSchema,
    BreadcrumbSchema: addBreadcrumbSchema
  };
}