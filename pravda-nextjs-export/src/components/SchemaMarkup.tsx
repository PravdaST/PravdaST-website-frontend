
'use client';

interface SchemaMarkupProps {
  schema: object;
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pravdast",
  "alternateName": "Pravda Agency",
  "url": "https://www.pravdagency.eu",
  "logo": "https://www.pravdagency.eu/icon-512.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+359879282299",
    "contactType": "customer service",
    "availableLanguage": "Bulgarian"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Varna",
    "addressCountry": "BG"
  },
  "sameAs": [
    "https://www.linkedin.com/company/pravdast",
    "https://www.facebook.com/pravdast"
  ],
  "founder": {
    "@type": "Person",
    "name": "Петър Петров"
  },
  "foundingDate": "2019",
  "description": "Pravdast е водеща агенция за бизнес инженеринг в България, специализирана в SEO оптимизация, автоматизация на клиенти и дигитален маркетинг.",
  "knowsAbout": [
    "SEO оптимизация",
    "Дигитален маркетинг", 
    "Автоматизация на бизнес процеси",
    "Lead generation",
    "Конверсионна оптимизация"
  ],
  "serviceArea": {
    "@type": "Country",
    "name": "Bulgaria"
  }
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Pravdast",
  "url": "https://www.pravdagency.eu",
  "description": "Pravdast - Бизнес инженеринг за предвидим растеж в България",
  "publisher": {
    "@type": "Organization",
    "name": "Pravdast"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.pravdagency.eu/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// Service Schemas
export const seoStruktorSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SEO Struktor™",
  "description": "Система за SEO оптимизация - техническо SEO, съдържание и линкбилдинг",
  "provider": {
    "@type": "Organization",
    "name": "Pravdast"
  },
  "serviceType": "SEO Services",
  "offers": {
    "@type": "Offer",
    "price": "1570",
    "priceCurrency": "BGN",
    "priceSpecification": {
      "@type": "RecurringPaymentFrequency",
      "frequency": "monthly"
    }
  }
};

export const clientomatSchema = {
  "@context": "https://schema.org", 
  "@type": "Service",
  "name": "Clientomat™",
  "description": "Система за автоматизация на клиентския цикъл - CRM, автоматизация и персонализация",
  "provider": {
    "@type": "Organization", 
    "name": "Pravdast"
  },
  "serviceType": "Business Automation",
  "offers": {
    "@type": "Offer",
    "price": "2890", 
    "priceCurrency": "BGN",
    "priceSpecification": {
      "@type": "RecurringPaymentFrequency",
      "frequency": "monthly"
    }
  }
};
