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
    canonical: "https://www.pravdast.agency",
    ogTitle: "Pravdast - Бизнес инженеринг за предвидим растеж",
    ogDescription: "Превръщаме хаоса в предсказуеми системи. Проверени методи за B2B растеж.",
    ogImage: "https://www.pravdast.agency/og-home.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Pravdast - Бизнес инженеринг",
    twitterDescription: "Систематичен подход към B2B растеж в България.",
    twitterImage: "https://www.pravdast.agency/twitter-home.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.pravdast.agency/#organization",
          "name": "Pravda ST",
          "alternateName": "Pravdast",
          "url": "https://www.pravdast.agency",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.pravdast.agency/_next/image?url=/logo.png&w=256&q=75",
            "width": 256,
            "height": 75
          },
          "image": "https://www.pravdast.agency/og-home.jpg",
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
          "@id": "https://www.pravdast.agency/#website",
          "url": "https://www.pravdast.agency",
          "name": "Pravda ST",
          "description": "Бизнес инженеринг за предвидим растеж в България",
          "publisher": {
            "@id": "https://www.pravdast.agency/#organization"
          },
          "inLanguage": "bg-BG"
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.pravdast.agency/#faq-home",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Какво включва безплатната диагностика?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "60–90 мин анализ на данни и структура, завършващ с доклад от 3 приоритета и ориентировъчни KPI."
              }
            },
            {
              "@type": "Question", 
              "name": "За колко време се усещат резултатите?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Кампании: първи сигнали 2–4 седмици. SEO: 8–12 седмици за стабилни трендове."
              }
            },
            {
              "@type": "Question",
              "name": "Какъв е минималният ангажимент?",
              "acceptedAnswer": {
                "@type": "Answer", 
                "text": "3 месеца на система, за да има валидна диагностика, внедряване и първа оптимизация."
              }
            },
            {
              "@type": "Question",
              "name": "За кого не е услугата?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "За екипи без капацитет за промени, без достъп до данни и без готовност да следват процес."
              }
            }
          ]
        }
      ]
    }
  },
  
  contact: {
    title: "Контакти - Pravda ST | Свържете се с нас",
    description: "Свържете се с Pravda ST за консултация по бизнес инженеринг. Офис във Варна, телефон +359 879 282 299, email contact@pravdast.agency",
    keywords: "контакти pravda st, консултация, бизнес инженеринг варна, телефон, email, офис",
    canonical: "https://www.pravdast.agency/contact",
    ogTitle: "Контакти - Pravda ST | Свържете се с нас",
    ogDescription: "Свържете се с Pravda ST за консултация по бизнес инженеринг. Офис във Варна, телефон +359 879 282 299",
    ogImage: "https://www.pravdast.agency/og-contact.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Контакти - Pravda Agency",
    twitterDescription: "Свържете се с нас за консултация по бизнес инженеринг",
    twitterImage: "https://www.pravdast.agency/twitter-contact.jpg",
    robots: "index, follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "Organization",
        "@id": "https://www.pravdast.agency/#organization",
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
          "email": "contact@pravdast.agency",
          "contactType": "customer service",
          "areaServed": "BG",
          "availableLanguage": "Bulgarian"
        }
      }
    }
  },

  faq: {
    title: "Често задавани въпроси - Pravda ST | FAQ",
    description: "Отговори на най-честите въпроси за нашите бизнес системи, цени, сроки и процеси. Научете повече за SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™.",
    keywords: "faq pravda st, въпроси отговори, цени услуги, процеси, бизнес системи",
    canonical: "https://www.pravdast.agency/faq",
    ogTitle: "Често задавани въпроси - Pravda Agency | FAQ",
    ogDescription: "Отговори на най-честите въпроси за нашите бизнес системи, цени, сроки и процеси",
    ogImage: "https://www.pravdast.agency/og-faq.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "FAQ - Pravda Agency",
    twitterDescription: "Отговори на най-честите въпроси за нашите бизнес системи",
    twitterImage: "https://www.pravdast.agency/twitter-faq.jpg",
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
    title: "Услуги - Pravda ST | Бизнес системи за растеж",
    description: "Проверени бизнес системи за предвидим растеж: SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™. Превърнете хаоса в измерими резултати.",
    keywords: "бизнес системи, seo struktor, trendlab, clickstarter, clientomat, pravda st услуги",
    canonical: "https://www.pravdast.agency/services",
    ogTitle: "Услуги - Pravda Agency | Бизнес системи за растеж",
    ogDescription: "Проверени бизнес системи за предвидим растеж: SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™",
    ogImage: "https://www.pravdast.agency/og-services.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Услуги - Pravda Agency",
    twitterDescription: "Проверени бизнес системи за предвидим растеж",
    twitterImage: "https://www.pravdast.agency/twitter-services.jpg",
    robots: "index, follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.pravdast.agency/services/seo-struktor#service",
      "serviceType": "SEO Struktor™",
      "provider": { 
        "@id": "https://www.pravdast.agency/#organization" 
      },
      "name": "SEO Struktor™",
      "description": "Проверена система за първи позиции в Google. Технически SEO, качествено съдържание, постоянна оптимизация.",
      "areaServed": "BG",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.pravdast.agency/contact",
        "servicePhone": "+359-879-282-299"
      },
      "offers": {
        "@type": "Offer",
        "price": "1980.00",
        "priceCurrency": "BGN",
        "url": "https://www.pravdast.agency/services/seo-struktor"
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