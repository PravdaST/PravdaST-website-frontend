interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  robots: string;
  structuredData?: any;
}

export const pageSEOData: Record<string, SEOData> = {
  home: {
    title: "Pravdast - Бизнес инженеринг за предвидим растеж в България",
    description: "Превръщаме хаотичния растеж в предвидими, измерими резултати чрез проверени бизнес системи. SEO оптимизация, създаване на съдържание, рекламни кампании.",
    keywords: "бизнес инженеринг българия, pravdast, seo оптимизация софия, систематичен растеж, b2b маркетинг, автоматизация продажби, предвидим растеж",
    canonical: "https://www.pravdagency.eu",
    ogTitle: "Pravdast - Бизнес инженеринг за предвидим растеж",
    ogDescription: "Превръщаме хаоса в предсказуеми системи. Проверени методи за B2B растеж.",
    ogImage: "https://www.pravdagency.eu/og-home.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Pravdast - Бизнес инженеринг",
    twitterDescription: "Систематичен подход към B2B растеж в България.",
    twitterImage: "https://www.pravdagency.eu/twitter-home.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.pravdagency.eu/#organization",
          "name": "Pravda Agency",
          "alternateName": "Pravdast",
          "url": "https://www.pravdagency.eu",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.pravdagency.eu/logo.png",
            "width": 300,
            "height": 100
          },
          "image": "https://www.pravdagency.eu/og-home.jpg",
          "description": "Бизнес инженеринг агенция за предвидим растеж в България. Специализираме се в SEO оптимизация, създаване на съдържание, рекламни кампании и автоматизация на продажбите.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Дебър №58",
            "addressLocality": "Варна",
            "addressCountry": "BG"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+359-879-282-299",
            "contactType": "customer service",
            "areaServed": "BG",
            "availableLanguage": "Bulgarian"
          },
          "sameAs": [
            "https://www.facebook.com/pravdast",
            "https://www.linkedin.com/company/pravdast"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://www.pravdagency.eu/#website",
          "url": "https://www.pravdagency.eu",
          "name": "Pravda Agency",
          "description": "Бизнес инженеринг за предвидим растеж в България",
          "publisher": {
            "@id": "https://www.pravdagency.eu/#organization"
          },
          "inLanguage": "bg-BG"
        }
      ]
    }
  },
  
  contact: {
    title: "Контакти - Pravda Agency | Свържете се с нас",
    description: "Свържете се с Pravda Agency за консултация по бизнес инженеринг. Офис във Варна, телефон +359 879 282 299, email contact@pravdagency.eu",
    keywords: "контакти pravda agency, консултация, бизнес инженеринг варна, телефон, email, офис",
    canonical: "https://www.pravdagency.eu/contact",
    ogTitle: "Контакти - Pravda Agency | Свържете се с нас",
    ogDescription: "Свържете се с Pravda Agency за консултация по бизнес инженеринг. Офис във Варна, телефон +359 879 282 299",
    ogImage: "https://www.pravdagency.eu/og-contact.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Контакти - Pravda Agency",
    twitterDescription: "Свържете се с нас за консултация по бизнес инженеринг",
    twitterImage: "https://www.pravdagency.eu/twitter-contact.jpg",
    robots: "index, follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "Organization",
        "@id": "https://www.pravdagency.eu/#organization",
        "name": "Pravda Agency",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. Дебър №58",
          "addressLocality": "Варна",
          "addressCountry": "BG"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+359-879-282-299",
          "email": "contact@pravdagency.eu",
          "contactType": "customer service",
          "areaServed": "BG",
          "availableLanguage": "Bulgarian"
        }
      }
    }
  },

  faq: {
    title: "Често задавани въпроси - Pravda Agency | FAQ",
    description: "Отговори на най-честите въпроси за нашите бизнес системи, цени, сроки и процеси. Научете повече за SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™.",
    keywords: "faq pravda agency, въпроси отговори, цени услуги, процеси, бизнес системи",
    canonical: "https://www.pravdagency.eu/faq",
    ogTitle: "Често задавани въпроси - Pravda Agency | FAQ",
    ogDescription: "Отговори на най-честите въпроси за нашите бизнес системи, цени, сроки и процеси",
    ogImage: "https://www.pravdagency.eu/og-faq.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "FAQ - Pravda Agency",
    twitterDescription: "Отговори на най-честите въпроси за нашите бизнес системи",
    twitterImage: "https://www.pravdagency.eu/twitter-faq.jpg",
    robots: "index, follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Колко време отнема да видя резултати?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Първите резултати се виждат след 30-45 дни. Пълният ефект от системите се постига след 3-6 месеца в зависимост от избраната услуга."
          }
        },
        {
          "@type": "Question",
          "name": "Какви са цените на услугите?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Цените варират според избраната система и обхвата на проекта. Свържете се с нас за персонализирана оферта."
          }
        },
        {
          "@type": "Question",
          "name": "Работите ли само с големи компании?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Не, работим с компании от всички размери - от стартиращи бизнеси до големи корпорации. Нашите системи са адаптивни."
          }
        }
      ]
    }
  },

  services: {
    title: "Услуги - Pravda Agency | Бизнес системи за растеж",
    description: "Проверени бизнес системи за предвидим растеж: SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™. Превърнете хаоса в измерими резултати.",
    keywords: "бизнес системи, seo struktor, trendlab, clickstarter, clientomat, pravda agency услуги",
    canonical: "https://www.pravdagency.eu/services",
    ogTitle: "Услуги - Pravda Agency | Бизнес системи за растеж",
    ogDescription: "Проверени бизнес системи за предвидим растеж: SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™",
    ogImage: "https://www.pravdagency.eu/og-services.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Услуги - Pravda Agency",
    twitterDescription: "Проверени бизнес системи за предвидим растеж",
    twitterImage: "https://www.pravdagency.eu/twitter-services.jpg",
    robots: "index, follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "provider": {
        "@id": "https://www.pravdagency.eu/#organization"
      },
      "serviceType": "Business Engineering",
      "name": "Бизнес инженеринг системи",
      "description": "Превръщаме хаотичния растеж в предвидими, измерими резултати чрез проверени бизнес системи",
      "areaServed": "BG",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.pravdagency.eu/contact",
        "servicePhone": "+359-879-282-299"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pravda Agency Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Struktor™",
              "description": "Система за техническа SEO оптимизация"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Trendlab™",
              "description": "Система за създаване на съдържание и storytelling"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Clickstarter™",
              "description": "Система за оптимизация на платени реклами"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Clientomat™",
              "description": "Система за автоматизация на клиентската комуникация"
            }
          }
        ]
      }
    }
  }
};