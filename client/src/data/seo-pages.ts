import { SEOData } from "../../shared/seo-types";

// Безупречно SEO за всички страници - Google оптимизирано
export const pageSEOData: Record<string, Partial<SEOData>> = {
  home: {
    title: "Pravdast - Бизнес Инженеринг за Растеж | България",
    description: "Превръщаме хаоса в предсказуем растеж с инженерни системи. SEO Struktor™, Trendlab™, Clickstarter™, Clientomat™ за B2B компании в България. Безплатна консултация.",
    keywords: "бизнес инженеринг българия, b2b растеж системи, предсказуем бизнес растеж, автоматизация продажби, seo оптимизация българия, клиентски системи, pravdast консултиране, бизнес трансформация 2025",
    canonical: "https://www.pravdagency.eu/",
    ogTitle: "Pravdast - Спрете да залагате на късмет, започнете да строите системи",
    ogDescription: "Професионални инженерни решения за B2B компании в България. Превръщаме хаоса в предсказуем растеж с проверени системи от 2020г.",
    ogImage: "https://www.pravdagency.eu/og-home.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Pravdast - Инженерни системи за бизнес растеж",
    twitterDescription: "Превръщаме хаоса в предсказуем растеж. SEO, продажби, клиентски системи за B2B компании.",
    twitterImage: "https://www.pravdagency.eu/twitter-home.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Pravdast",
      "alternateName": "Pravda ST",
      "url": "https://www.pravdagency.eu",
      "logo": "https://www.pravdagency.eu/logo.png",
      "description": "Бизнес инженерни системи за предсказуем растеж на B2B компании в България",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Дебър №58",
        "addressCountry": "BG",
        "addressRegion": "Варна",
        "addressLocality": "Варна"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+359 879 282 299",
        "email": "contact@pravdast.agency",
        "contactType": "customer service",
        "availableLanguage": "Bulgarian"
      },
      "sameAs": [
        "https://www.facebook.com/pravdast.agency/",
        "https://www.youtube.com/@PravdaST",
        "https://www.instagram.com/pravdast.agency/",
        "https://www.linkedin.com/company/pravda-st/"
      ],
      "offers": [
        {
          "@type": "Service",
          "name": "SEO Struktor™",
          "description": "Система за органична видимост и SEO оптимизация"
        },
        {
          "@type": "Service",
          "name": "Trendlab™",
          "description": "Система за създаване на съдържание и изграждане на авторитет"
        },
        {
          "@type": "Service",
          "name": "Clickstarter™",
          "description": "Оптимизация на рекламни кампании за максимална ефективност"
        },
        {
          "@type": "Service",
          "name": "Clientomat™", 
          "description": "Система за автоматизация на клиентския цикъл"
        }
      ]
    }
  },

  "services/seo-struktor": {
    title: "SEO Struktor™ - SEO Система България | Pravdast",
    description: "SEO Struktor™ - инженерска система за SEO оптимизация и органичен трафик. Технически SEO, съдържание и линк билдинг за B2B компании. ROI 340%+.",
    keywords: "seo struktor, seo оптимизация българия, технически seo софия, органичен трафик, google позиции, seo услуги pravdast, keyword research българия 2025",
    canonical: "https://www.pravdagency.eu/services/seo-struktor",
    ogTitle: "SEO Struktor™ - Инженерска SEO Система за Растеж",
    ogDescription: "Превърнете SEO от разходи в предсказуеми приходи с нашата систематична методология.",
    ogImage: "https://www.pravdagency.eu/og-seo-struktor.jpg",
    ogType: "product",
    twitterCard: "summary_large_image",
    twitterTitle: "SEO Struktor™ - Инженерска SEO Система",
    twitterDescription: "Технически SEO подход за устойчив органичен растеж.",
    twitterImage: "https://www.pravdagency.eu/twitter-seo-struktor.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SEO Struktor™",
      "description": "Инженерска система за SEO оптимизация и органичен трафик",
      "serviceType": "SEO Services",
      "provider": {
        "@type": "Organization",
        "name": "Pravdast"
      },
      "offers": {
        "@type": "Offer",
        "price": "1980",
        "priceCurrency": "BGN",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "42"
      }
    }
  },

  "services/trendlab": {
    title: "Trendlab™ - Система за Съдържание България",
    description: "Trendlab™ - професионална система за създаване на съдържание и изграждане на авторитет. Експертно писане, стратегии и измерими резултати за B2B компании.",
    keywords: "trendlab, създаване съдържание българия, content marketing софия, експертно писане, авторитет изграждане, blog система pravdast, content strategy 2025",
    canonical: "https://www.pravdagency.eu/services/trendlab",
    ogTitle: "Trendlab™ - Инженерна Система за Съдържание",
    ogDescription: "От експертиза до влиятелно съдържание - система за изграждане на авторитет и привличане на квалифицирани клиенти.",
    ogImage: "https://www.pravdagency.eu/og-trendlab.jpg",
    ogType: "product",
    twitterCard: "summary_large_image",
    twitterTitle: "Trendlab™ - Система за Създаване на Съдържание",
    twitterDescription: "Професионална система за content marketing и изграждане на авторитет.",
    twitterImage: "https://www.pravdagency.eu/twitter-trendlab.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Trendlab™",
      "description": "Система за създаване на съдържание и изграждане на авторитет",
      "serviceType": "Content Marketing",
      "provider": {
        "@type": "Organization",
        "name": "Pravdast"
      },
      "offers": {
        "@type": "Offer",
        "price": "3450",
        "priceCurrency": "BGN",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "28"
      }
    }
  },

  "services/clickstarter": {
    title: "Clickstarter™ - Реклами Оптимизация България",
    description: "Clickstarter™ - система за оптимизация на рекламни кампании. Максимална ефективност, по-ниски разходи и по-високи конверсии за Google и Meta реклами.",
    keywords: "clickstarter, google ads оптимизация българия, facebook реклами софия, ppc управление, реклами оптимизация pravdast, roi подобрение, ad campaigns 2025",
    canonical: "https://www.pravdagency.eu/services/clickstarter",
    ogTitle: "Clickstarter™ - Инженерна Система за Реклами",
    ogDescription: "От разхищение до ефективност - оптимизирайте рекламните си кампании и постигнете максимална възвращаемост.",
    ogImage: "https://www.pravdagency.eu/og-clickstarter.jpg",
    ogType: "product",
    twitterCard: "summary_large_image",
    twitterTitle: "Clickstarter™ - Оптимизация на Реклами",
    twitterDescription: "Система за максимизиране ефективността на Google и Meta рекламите.",
    twitterImage: "https://www.pravdagency.eu/twitter-clickstarter.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Clickstarter™",
      "description": "Система за оптимизация на рекламни кампании",
      "serviceType": "Digital Advertising",
      "provider": {
        "@type": "Organization",
        "name": "Pravdast"
      },
      "offers": {
        "@type": "Offer",
        "price": "1570",
        "priceCurrency": "BGN",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "35"
      }
    }
  },

  "services/clientomat": {
    title: "Clientomat™ - Клиентска Система България",
    description: "Clientomat™ - инженерна система за привличане и задържане на клиенти. Автоматизация на целия клиентски цикъл. Увеличение на клиентската база с 60%+.",
    keywords: "clientomat, автоматизация маркетинг българия, lead generation система, клиентско обслужване автоматизация, customer journey sofia, email маркетинг pravdast, nurturing campaigns 2025",
    canonical: "https://www.pravdagency.eu/services/clientomat",
    ogTitle: "Clientomat™ - Автоматизирана Клиентска Система",
    ogDescription: "От първия контакт до лоялни клиенти - автоматизирайте цялата клиентска екосистема с нашата проверена система.",
    ogImage: "https://www.pravdagency.eu/og-clientomat.jpg",
    ogType: "product",
    twitterCard: "summary_large_image",
    twitterTitle: "Clientomat™ - Автоматизирана Клиентска Система",
    twitterDescription: "Инженерна система за привличане, развитие и задържане на клиенти.",
    twitterImage: "https://www.pravdagency.eu/twitter-clientomat.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Clientomat™",
      "description": "Автоматизирана система за управление на клиентския жизнен цикъл",
      "serviceType": "Customer Management",
      "provider": {
        "@type": "Organization",
        "name": "Pravdast"
      },
      "offers": {
        "@type": "Offer",
        "price": "2890",
        "priceCurrency": "BGN",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "28"
      }
    }
  },

  contact: {
    title: "Контакти - Pravdast | Свържете се с Нас",
    description: "Свържете се с екипа на Pravdast за безплатна консултация. Офис във Варна, ул. Дебър №58. Тел: +359 879 282 299. Отговаряме в рамките на 24 часа.",
    keywords: "pravdast контакти, бизнес консултации варна, офис дебър 58, +359 879 282 299, contact@pravdast.agency, консултация софия",
    canonical: "https://www.pravdagency.eu/contact",
    ogTitle: "Контакти - Свържете се с Pravdast",
    ogDescription: "Свържете се с нас за безплатна консултация и започнете трансформацията на вашия бизнес.",
    ogImage: "https://www.pravdagency.eu/og-contact.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Pravdast Контакти - Безплатна Консултация",
    twitterDescription: "Свържете се с нас за безплатна консултация и трансформация на бизнеса.",
    twitterImage: "https://www.pravdagency.eu/twitter-contact.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Pravdast",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. Дебър №58",
          "addressLocality": "Варна",
          "addressRegion": "Варна",
          "postalCode": "9000",
          "addressCountry": "BG"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 43.2141,
          "longitude": 27.9147
        },
        "telephone": "+359879282299",
        "email": "contact@pravdast.agency",
        "openingHours": "Mo-Fr 09:00-18:00"
      }
    }
  },

  calculators: {
    title: "ROI Калкулатори - Изчислете Печалбата от Системите | Pravdast",
    description: "Безплатни ROI калкулатори за всички наши системи. Изчислете точната печалба от SEO Struktor™, Trendlab™, Clickstarter™, Clientomat™. Спрете да гадаете!",
    keywords: "roi калкулатор българия, seo roi изчисление, маркетинг калкулатор, печалба от реклами, бизнес калкулатор софия, pravdast roi tools, marketing calculator 2025",
    canonical: "https://www.pravdagency.eu/calculators",
    ogTitle: "ROI Калкулатори - Изчислете Точната Печалба",
    ogDescription: "Безплатни калкулатори за изчисляване на ROI от всички наши бизнес системи.",
    ogImage: "https://www.pravdagency.eu/og-calculators.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Pravdast ROI Калкулатори",
    twitterDescription: "Изчислете точната печалба от нашите бизнес системи.",
    twitterImage: "https://www.pravdagency.eu/twitter-calculators.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Pravdast ROI Калкулатори",
      "description": "Безплатни калкулатори за изчисляване на ROI от бизнес системи",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web-based",
      "provider": {
        "@type": "Organization",
        "name": "Pravdast"
      }
    }
  },

  blog: {
    title: "Блог - Pravdast | Бизнес Инженеринг Статии",
    description: "Експертни статии за бизнес инженеринг, SEO, автоматизация и растеж. Практични съвети и казуси от екипа на Pravdast за B2B компании в България.",
    keywords: "pravdast блог, бизнес инженеринг статии, seo съвети българия, автоматизация маркетинг, b2b растеж случаи, експертни статии софия",
    canonical: "https://www.pravdagency.eu/blog",
    ogTitle: "Pravdast Блог - Експертни Статии за Бизнес Растеж",
    ogDescription: "Практични съвети, казуси и експертни статии за превръщане на хаоса в предсказуем растеж.",
    ogImage: "https://www.pravdagency.eu/og-blog.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Pravdast Блог - Бизнес Инженеринг",
    twitterDescription: "Експертни статии и практични съвети за бизнес растеж.",
    twitterImage: "https://www.pravdagency.eu/twitter-blog.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Pravdast Блог",
      "description": "Експертни статии за бизнес инженеринг и растеж",
      "publisher": {
        "@type": "Organization",
        "name": "Pravdast"
      }
    }
  },

  faq: {
    title: "Често Задавани Въпроси | Pravdast - Бизнес Инженеринг",
    description: "Отговори на най-честите въпроси за нашите бизнес системи. Цени, процеси, сроки и резултати от SEO Struktor™, Trendlab™, Clickstarter™, Clientomat™.",
    keywords: "pravdast faq, често задавани въпроси, цени бизнес системи, сроки результати, как работи seo struktor, въпроси отговори България",
    canonical: "https://www.pravdagency.eu/faq",
    ogTitle: "FAQ - Често Задавани Въпроси за Pravdast",
    ogDescription: "Намерете отговори на всички въпроси за нашите бизнес системи и процеси.",
    ogImage: "https://www.pravdagency.eu/og-faq.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Pravdast FAQ - Често Задавани Въпроси",
    twitterDescription: "Отговори на най-честите въпроси за нашите бизнес системи.",
    twitterImage: "https://www.pravdagency.eu/twitter-faq.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Колко време отнема да видя резултати?",
          "@context": "https://schema.org",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Зависи от системата - SEO Struktor™ стартира за 2-3 седмици, Clientomat™ за 1-2 седмици."
          }
        }
      ]
    }
  },

  terms: {
    title: "Условия за Ползване | Pravdast - Бизнес Инженеринг",
    description: "Условия за ползване на услугите на Pravdast. Права и задължения, политика за плащания, гаранции и отговорности при използване на нашите бизнес системи.",
    keywords: "pravdast условия ползване, бизнес услуги договор, terms of service българия, правила използване, юридически условия sofia",
    canonical: "https://www.pravdagency.eu/terms",
    robots: "index, follow"
  },

  privacy: {
    title: "Политика за Поверителност | Pravdast - Защита на Данни",
    description: "Политика за поверителност на Pravdast. Как събираме, използваме и защитаваме личните ви данни в съответствие с GDPR и българското законодателство.",
    keywords: "pravdast поверителност, gdpr политика българия, защита лични данни, privacy policy sofia, данни сигурност",
    canonical: "https://www.pravdagency.eu/privacy",
    robots: "index, follow"
  }
};