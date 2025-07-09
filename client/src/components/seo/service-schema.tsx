import { Helmet } from 'react-helmet-async';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  price: string;
  features: string[];
  url: string;
}

export function ServiceSchema({ serviceName, description, price, features, url }: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Pravda ST",
      "url": "https://www.pravdagency.eu"
    },
    "offers": {
      "@type": "Offer",
      "price": price.replace(/[^\d]/g, ''),
      "priceCurrency": "BGN",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": price.replace(/[^\d]/g, ''),
        "priceCurrency": "BGN",
        "unitText": "месец"
      },
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0]
    },
    "serviceType": "Бизнес инженеринг услуги",
    "category": "Digital Marketing",
    "areaServed": {
      "@type": "Country",
      "name": "България"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceName} Features`,
      "itemListElement": features.map((feature, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        }
      }))
    },
    "url": url,
    "mainEntityOfPage": url,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
}