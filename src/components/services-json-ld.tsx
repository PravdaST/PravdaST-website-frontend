"use client";
import Script from "next/script";

export default function ServicesJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "SEO Struktor™",
          "description": "Системи за SEO оптимизация и органичен растеж",
          "url": "https://www.pravdagency.eu/services/seo-struktor",
          "provider": {
            "@type": "Organization",
            "name": "Pravda Agency",
            "url": "https://www.pravdagency.eu"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Trendlab™",
          "description": "Анализ на тенденции и пазарни възможности",
          "url": "https://www.pravdagency.eu/services/trendlab",
          "provider": {
            "@type": "Organization",
            "name": "Pravda Agency",
            "url": "https://www.pravdagency.eu"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Clickstarter™",
          "description": "Система за стартиране и оптимизиране на реклами",
          "url": "https://www.pravdagency.eu/services/clickstarter",
          "provider": {
            "@type": "Organization",
            "name": "Pravda Agency",
            "url": "https://www.pravdagency.eu"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Clientomat™",
          "description": "Автоматизирана система за привличане на клиенти",
          "url": "https://www.pravdagency.eu/services/clientomat",
          "provider": {
            "@type": "Organization",
            "name": "Pravda Agency",
            "url": "https://www.pravdagency.eu"
          }
        }
      }
    ]
  };

  return (
    <Script 
      id="jsonld-services" 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} 
    />
  );
}