// Enhanced Schema.org markup for Local SEO and services
export interface LocalBusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  image: string[];
  "@id": string;
  url: string;
  telephone: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: Array<{
    "@type": string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  sameAs: string[];
  priceRange: string;
  areaServed: string[];
  serviceArea: {
    "@type": string;
    name: string;
  };
  hasOfferCatalog: {
    "@type": string;
    name: string;
    itemListElement: Array<{
      "@type": string;
      itemOffered: {
        "@type": string;
        name: string;
        description: string;
        category: string;
      };
    }>;
  };
  aggregateRating: {
    "@type": string;
    ratingValue: string;
    reviewCount: string;
  };
  review: Array<{
    "@type": string;
    reviewRating: {
      "@type": string;
      ratingValue: string;
      bestRating: string;
    };
    author: {
      "@type": string;
      name: string;
    };
    reviewBody: string;
    datePublished: string;
  }>;
}

export interface ServiceSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  provider: {
    "@type": string;
    name: string;
    url: string;
  };
  areaServed: {
    "@type": string;
    name: string;
  };
  hasOfferCatalog: {
    "@type": string;
    name: string;
    itemListElement: Array<{
      "@type": string;
      itemOffered: {
        "@type": string;
        name: string;
        description: string;
        offers: {
          "@type": string;
          price: string;
          priceCurrency: string;
          priceValidUntil: string;
          availability: string;
        };
      };
    }>;
  };
  additionalType: string;
  serviceType: string;
  category: string;
}

// Local Business Schema for Pravdast in Bulgaria
export const localBusinessSchema: LocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pravdast Business Engineering",
  image: [
    "https://www.pravdagency.eu/og-image-homepage.svg",
    "https://www.pravdagency.eu/favicon-192x192.png"
  ],
  "@id": "https://www.pravdagency.eu/#business",
  url: "https://www.pravdagency.eu",
  telephone: "+359879282299",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Дебър №58",
    addressLocality: "Варна",
    postalCode: "9000",
    addressCountry: "BG"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.2141,
    longitude: 27.9147
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    }
  ],
  sameAs: [
    "https://www.facebook.com/pravdast.agency/",
    "https://www.youtube.com/@PravdaST",
    "https://www.instagram.com/pravdast.agency/",
    "https://www.linkedin.com/company/pravda-st/"
  ],
  priceRange: "$$$$",
  areaServed: [
    "България",
    "Варна",
    "София",
    "Пловдив",
    "Бургас",
    "Русе",
    "Стара Загора",
    "Плевен"
  ],
  serviceArea: {
    "@type": "Country",
    name: "България"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Business Engineering Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Struktor™",
          description: "Системен подход за органичен растеж и SEO оптимизация",
          category: "Digital Marketing"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Trendlab™",
          description: "Content marketing система за изграждане на авторитет",
          category: "Content Marketing"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Clickstarter™",
          description: "Система за оптимизация на рекламни кампании",
          category: "Paid Advertising"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Clientomat™",
          description: "Автоматизирана система за генериране на клиенти",
          category: "Lead Generation"
        }
      }
    ]
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47"
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      author: {
        "@type": "Person",
        name: "Георги Иванов"
      },
      reviewBody: "Невероятен резултат! За 6 месеца увеличихме органичния трафик с 340% и генерирахме 2.3М лв. нови продажби.",
      datePublished: "2024-11-15"
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      author: {
        "@type": "Person",
        name: "Мария Петрова"
      },
      reviewBody: "Системният подход на Pravdast напълно трансформира нашия бизнес. Препоръчвам без колебание!",
      datePublished: "2024-10-22"
    }
  ]
};

// Service-specific schemas
export const seoStruktorSchema: ServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Struktor™",
  description: "Инженерна система за органичен растеж и SEO оптимизация. Системен подход за устойчив растеж без импровизация.",
  provider: {
    "@type": "Organization",
    name: "Pravdast Business Engineering",
    url: "https://www.pravdagency.eu"
  },
  areaServed: {
    "@type": "Country",
    name: "България"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SEO Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Struktor™ - Професионален пакет",
          description: "Пълна SEO система за растеж на органичния трафик",
          offers: {
            "@type": "Offer",
            price: "1980",
            priceCurrency: "BGN",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock"
          }
        }
      }
    ]
  },
  additionalType: "https://schema.org/ProfessionalService",
  serviceType: "SEO Optimization",
  category: "Digital Marketing"
};

export const trendlabSchema: ServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Trendlab™",
  description: "Content marketing система за изграждане на авторитет и brand awareness. Създаваме съдържание което конвертира.",
  provider: {
    "@type": "Organization",
    name: "Pravdast Business Engineering",
    url: "https://www.pravdagency.eu"
  },
  areaServed: {
    "@type": "Country",
    name: "България"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Content Marketing Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Trendlab™ - Authority пакет",
          description: "Пълна content marketing система за изграждане на авторитет",
          offers: {
            "@type": "Offer",
            price: "3450",
            priceCurrency: "BGN",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock"
          }
        }
      }
    ]
  },
  additionalType: "https://schema.org/ProfessionalService",
  serviceType: "Content Marketing",
  category: "Digital Marketing"
};

export const clickstarterSchema: ServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Clickstarter™",
  description: "Система за оптимизация на рекламни кампании и максимизиране на ROI от платена реклама.",
  provider: {
    "@type": "Organization",
    name: "Pravdast Business Engineering",
    url: "https://www.pravdagency.eu"
  },
  areaServed: {
    "@type": "Country",
    name: "България"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Advertising Optimization Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Clickstarter™ - Performance пакет",
          description: "Система за оптимизация на рекламни кампании",
          offers: {
            "@type": "Offer",
            price: "1570",
            priceCurrency: "BGN",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock"
          }
        }
      }
    ]
  },
  additionalType: "https://schema.org/ProfessionalService",
  serviceType: "Advertising Optimization",
  category: "Digital Marketing"
};

export const clientomatSchema: ServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Clientomat™",
  description: "Автоматизирана система за генериране на клиенти и lead generation с predictable резултати.",
  provider: {
    "@type": "Organization",
    name: "Pravdast Business Engineering",
    url: "https://www.pravdagency.eu"
  },
  areaServed: {
    "@type": "Country",
    name: "България"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Lead Generation Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Clientomat™ - Automation пакет",
          description: "Автоматизирана система за генериране на клиенти",
          offers: {
            "@type": "Offer",
            price: "2890",
            priceCurrency: "BGN",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock"
          }
        }
      }
    ]
  },
  additionalType: "https://schema.org/ProfessionalService",
  serviceType: "Lead Generation",
  category: "Digital Marketing"
};

// FAQ Schema for better search visibility
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какво е Business Engineering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Business Engineering е системен подход за изграждане на predictable растеж. Вместо да разчитаме на случайности, създаваме engineering systems които гарантират резултати."
      }
    },
    {
      "@type": "Question",
      name: "Колко време отнема да видя резултати?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Първите резултати се виждат в рамките на 30-60 дни, а пълния потенциал на системата се разкрива след 90-120 дни от стартиране."
      }
    },
    {
      "@type": "Question",
      name: "Подходящо ли е за всякакъв бизнес?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нашите системи работят най-добре за B2B компании с AOV над 1000 лв. и амбиция за систематичен растеж."
      }
    },
    {
      "@type": "Question",
      name: "Каква е разликата между вас и обикновена агенция?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Агенциите изпълняват задачи. Ние създаваме systems. Фокусираме се на engineering approach с measurable резултати и predictable ROI."
      }
    }
  ]
};

// Helper function to inject schemas into page head
export function injectStructuredData(schema: any, id: string) {
  if (typeof window !== 'undefined') {
    // Remove existing schema with same ID
    const existing = document.getElementById(id);
    if (existing) {
      existing.remove();
    }

    // Create new script tag
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}

// Content clusters for local SEO
export const contentClusters = {
  "бизнес растеж българия": [
    "системи за растеж на бизнеса",
    "predictable растеж българия",
    "business engineering българия",
    "консултанти растеж варна",
    "b2b растеж системи"
  ],
  "seo услуги българия": [
    "seo оптимизация варна",
    "seo агенция българия",
    "органичен трафик растеж",
    "seo консултант българия",
    "местно seo варна"
  ],
  "digital marketing българия": [
    "дигитален маркетинг варна",
    "онлайн маркетинг българи",
    "lead generation българия",
    "facebook реклами българ",
    "google ads ссср българи"
  ],
  "content marketing българи": [
    "content strategy българи",
    "съдържание маркетинг",
    "brand building български",
    "thought leadership българи",
    "влогиране българск"
  ]
};

// Local keywords for different cities in Bulgaria
export const localKeywords = {
  "варна": [
    "бизнес консултанти варна",
    "маркетинг агенция варна",
    "seo услуги варна",
    "растеж на бизнеса варна"
  ],
  "софия": [
    "бизнес консултанти софия",
    "маркетинг агенция софия",
    "seo услуги софия",
    "растеж на бизнеса софия"
  ],
  "пловдив": [
    "бизнес консултанти пловдив",
    "маркетинг агенция пловдив",
    "seo услуги пловдив",
    "растеж на бизнеса пловдив"
  ],
  "бургас": [
    "бизнес консултанти бургас",
    "маркетинг агенция бургас",
    "seo услуги бургас",
    "растеж на бизнеса бургас"
  ]
};