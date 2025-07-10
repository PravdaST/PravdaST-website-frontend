
// Schema.org structured data generators

interface Organization {
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressCountry: string;
  };
  contactPoint: {
    telephone: string;
    email: string;
    contactType: string;
  };
  sameAs: string[];
}

interface Service {
  name: string;
  description: string;
  url: string;
  price?: {
    currency: string;
    value: string;
  };
  serviceType: string;
}

interface Article {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: {
    name: string;
    url: string;
  };
  publisher: Organization;
}

export const generateOrganizationSchema = (): Organization => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pravda Agency",
  url: "https://www.pravdagency.eu",
  logo: "https://www.pravdagency.eu/logo.png",
  description: "Дигитална агенция специализирана в SEO, автоматизация на продажбите и дигитален маркетинг.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "София център",
    addressLocality: "София",
    addressCountry: "BG"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+359-888-123-456",
    email: "contact@pravdagency.eu",
    contactType: "customer service"
  },
  sameAs: [
    "https://www.facebook.com/pravdaagency",
    "https://www.linkedin.com/company/pravda-agency",
    "https://www.instagram.com/pravdaagency"
  ]
} as any);

export const generateServiceSchema = (service: Partial<Service>): Service => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name || "",
  description: service.description || "",
  url: service.url || "",
  serviceType: service.serviceType || "Digital Marketing",
  provider: {
    "@type": "Organization",
    name: "Pravda Agency",
    url: "https://www.pravdagency.eu"
  },
  ...(service.price && {
    offers: {
      "@type": "Offer",
      price: service.price.value,
      priceCurrency: service.price.currency,
      availability: "https://schema.org/InStock"
    }
  })
} as any);

export const generateArticleSchema = (article: Partial<Article>): Article => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.headline || "",
  description: article.description || "",
  image: article.image || "https://www.pravdagency.eu/og-image.jpg",
  datePublished: article.datePublished || new Date().toISOString(),
  dateModified: article.dateModified || new Date().toISOString(),
  author: {
    "@type": "Person",
    name: article.author?.name || "Pravda Agency Team",
    url: article.author?.url || "https://www.pravdagency.eu/about"
  },
  publisher: {
    "@type": "Organization",
    name: "Pravda Agency",
    logo: {
      "@type": "ImageObject",
      url: "https://www.pravdagency.eu/logo.png"
    }
  }
} as any);

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.pravdagency.eu/#organization",
  name: "Pravda Agency",
  image: "https://www.pravdagency.eu/logo.png",
  telephone: "+359-888-123-456",
  email: "contact@pravdagency.eu",
  url: "https://www.pravdagency.eu",
  address: {
    "@type": "PostalAddress",
    streetAddress: "София център",
    addressLocality: "София",
    addressCountry: "BG"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "42.6977",
    longitude: "23.3219"
  },
  openingHours: "Mo-Fr 09:00-18:00",
  priceRange: "$$"
});
