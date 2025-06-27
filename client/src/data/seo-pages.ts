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
          "name": "Sales Engine™",
          "description": "Автоматизирана система за B2B продажби"
        },
        {
          "@type": "Service",
          "name": "Clientomat™", 
          "description": "Система за автоматизация на клиентския цикъл"
        }
      ]
    }
  },
  
  about: {
    title: "За Нас - Pravdast | Експерти в Бизнес Инженеринг",
    description: "👥 Екипът на Pravdast - инженери на бизнес растежа с 5+ години опит. 🎯 Специалисти в B2B системи, автоматизация и SEO оптимизация. 📈 300+ успешни проекта в България.",
    keywords: "pravdast екип, бизнес инженеринг експерти българия, b2b консултанти софия, автоматизация специалисти, seo експерти българия, бизнес трансформация екип",
    canonical: "https://www.pravdagency.eu/about",
    ogTitle: "За Екипа на Pravdast - Инженери на Бизнес Растежа",
    ogDescription: "Запознайте се с екипа от инженери, който превръща бизнес хаоса в предсказуеми системи за растеж от 2020г.",
    ogImage: "https://www.pravdagency.eu/og-about.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "За Pravdast - Експерти в Бизнес Инженеринг",
    twitterDescription: "Екип от специалисти с 5+ години опит в B2B системи и автоматизация.",
    twitterImage: "https://www.pravdagency.eu/twitter-about.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "Pravdast",
        "foundingDate": "2020",
        "description": "Експертен екип в бизнес инженеринг и автоматизация на B2B процеси",
        "employee": [
          {
            "@type": "Person",
            "jobTitle": "Бизнес Инженер",
            "worksFor": "Pravdast"
          }
        ],
        "knowsAbout": [
          "Бизнес инженеринг",
          "B2B автоматизация", 
          "SEO оптимизация",
          "Продажбени системи",
          "Клиентски системи"
        ]
      }
    }
  },

  services: {
    title: "Услуги - Pravdast | SEO, Продажби, Автоматизация",
    description: "Професионални B2B услуги: SEO Struktor™, Trendlab™, Clickstarter™, Clientomat™. Проверени системи за предсказуем бизнес успех. Безплатна консултация.",
    keywords: "b2b услуги българия, seo оптимизация софия, продажбени системи автоматизация, клиентски системи crm, бизнес консултиране pravdast, маркетинг автоматизация 2025",
    canonical: "https://www.pravdagency.eu/services",
    ogTitle: "Услуги за B2B Растеж - SEO, Продажби, Клиентски Системи",
    ogDescription: "Инженерни решения за вашия бизнес: от SEO оптимизация до продажбени системи. Всичко за предсказуем растеж.",
    ogImage: "https://www.pravdagency.eu/og-services.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Pravdast Услуги - SEO, Продажби, Автоматизация",
    twitterDescription: "Професионални B2B услуги за предсказуем растеж: SEO, продажбени и клиентски системи.",
    twitterImage: "https://www.pravdagency.eu/twitter-services.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "provider": {
        "@type": "Organization",
        "name": "Pravdast"
      },
      "serviceType": "Business Engineering Services",
      "description": "Професионални услуги за B2B растеж и автоматизация",
      "offers": [
        {
          "@type": "Offer",
          "name": "SEO Struktor™",
          "description": "Система за SEO оптимизация и органична видимост",
          "category": "SEO Services"
        },
        {
          "@type": "Offer",
          "name": "Sales Engine™", 
          "description": "Автоматизирана система за B2B продажби",
          "category": "Sales Automation"
        },
        {
          "@type": "Offer",
          "name": "Clientomat™",
          "description": "Система за автоматизация на клиентския цикъл",
          "category": "Customer Management"
        }
      ]
    }
  },

  "services/seo-struktor": {
    title: "SEO Struktor™ - Професионална SEO Система България",
    description: "SEO Struktor™ - инженерна система за SEO оптимизация. Увеличете видимостта в Google с проверена методология. Технически SEO + съдържание + линк билдинг.",
    keywords: "seo struktor, професионално seo българия, технически seo оптимизация, google seo система, органично позициониране софия, seo консултиране pravdast, seo аудит 2025",
    canonical: "https://www.pravdagency.eu/services/seo-struktor",
    ogTitle: "SEO Struktor™ - Инженерна SEO Система за Органичен Растеж",
    ogDescription: "Превърнете SEO от разходи в инвестиция. Проверена система за дългосрочна видимост в Google.",
    ogImage: "https://www.pravdagency.eu/og-seo-struktor.jpg",
    ogType: "product",
    twitterCard: "summary_large_image",
    twitterTitle: "SEO Struktor™ - Професионална SEO Система",
    twitterDescription: "Инженерна система за SEO оптимизация и органична видимост в Google.",
    twitterImage: "https://www.pravdagency.eu/twitter-seo-struktor.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "SEO Struktor™",
      "description": "Инженерна система за SEO оптимизация и органична видимост",
      "brand": {
        "@type": "Brand",
        "name": "Pravdast"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "BGN",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Pravdast"
        }
      },
      "category": "SEO Services",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47"
      }
    }
  },

  "services/sales-engine": {
    title: "Sales Engine™ - B2B Продажбена Система България",
    description: "💼 Sales Engine™ - инженерна система за B2B продажби. 🤖 Автоматизация, CRM интеграция и предсказуеми резултати. 📊 Увеличение на конверсиите с 40%+.",
    keywords: "sales engine, автоматизация продажби българия, b2b продажбена система, crm интеграция софия, продажбени процеси оптимизация, lead management pravdast, sales funnel 2025",
    canonical: "https://www.pravdagency.eu/services/sales-engine",
    ogTitle: "Sales Engine™ - Инженерна Система за B2B Продажби",
    ogDescription: "Превърнете продажбите от хаос в предсказуема система за растеж. Автоматизация и оптимизация на цялия продажбен процес.",
    ogImage: "https://www.pravdagency.eu/og-sales-engine.jpg",
    ogType: "product",
    twitterCard: "summary_large_image",
    twitterTitle: "Sales Engine™ - Автоматизирана Продажбена Система",
    twitterDescription: "Инженерна система за B2B продажби с автоматизация и CRM интеграция.",
    twitterImage: "https://www.pravdagency.eu/twitter-sales-engine.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Sales Engine™",
      "description": "Автоматизирана система за B2B продажби и CRM управление",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web-based",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "BGN",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Pravdast"
        }
      },
      "provider": {
        "@type": "Organization",
        "name": "Pravdast"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "32"
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
      "@type": "SoftwareApplication",
      "name": "Clientomat™",
      "description": "Автоматизирана система за управление на клиентския жизнен цикъл",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web-based",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "BGN",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Pravdast"
        }
      },
      "provider": {
        "@type": "Organization",
        "name": "Pravdast"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "28"
      }
    }
  },

  "case-studies": {
    title: "Казуси - Pravdast | Успешни B2B Проекти България",
    description: "Реални казуси от успешни B2B проекти на Pravdast. Вижте как помагаме на компании да постигнат 200%+ растеж. Проверени резултати от 2020г.",
    keywords: "pravdast казуси, b2b проекти българия, успешни бизнес случаи, клиентски резултати софия, бизнес трансформация примери, roi case studies, растеж резултати 2025",
    canonical: "https://www.pravdagency.eu/case-studies",
    ogTitle: "Казуси - Примери за Успешни B2B Трансформации",
    ogDescription: "Реални истории за компании, които превърнаха хаоса в предсказуем растеж с нашите инженерни системи.",
    ogImage: "https://www.pravdagency.eu/og-case-studies.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Pravdast Казуси - Успешни B2B Проекти",
    twitterDescription: "Реални примери за компании, които постигнаха 200%+ растеж с нашите системи.",
    twitterImage: "https://www.pravdagency.eu/twitter-case-studies.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Казуси и Успешни Проекти",
      "description": "Колекция от реални примери за успешни B2B трансформации",
      "provider": {
        "@type": "Organization",
        "name": "Pravdast"
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "CaseStudy",
            "name": "B2B компания - 300% растеж за 12 месеца",
            "description": "Как една производствена компания постигна тройно увеличение на продажбите"
          }
        ]
      }
    }
  },

  contact: {
    title: "Контакти - Pravdast | Безплатна Консултация България",
    description: "Свържете се с Pravdast за безплатна консултация. Обсъдете вашите бизнес предизвикателства с експертите ни. Отговор в рамките на 24 часа.",
    keywords: "pravdast контакти, безплатна бизнес консултация софия, b2b експерти България, бизнес съвети правда, консултиране автоматизация, експертна помощ растеж 2025",
    canonical: "https://www.pravdagency.eu/contact",
    ogTitle: "Контакти - Започнете Трансформацията на Вашия Бизнес",
    ogDescription: "Готови сте да превърнете хаоса в предсказуем растеж? Свържете се с нас за безплатна експертна консултация.",
    ogImage: "https://www.pravdagency.eu/og-contact.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Свържете се с Pravdast - Безплатна Консултация",
    twitterDescription: "Започнете трансформацията на вашия бизнес с експертна консултация от Pravdast.",
    twitterImage: "https://www.pravdagency.eu/twitter-contact.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "Pravdast",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+359 879 282 299",
          "email": "contact@pravdast.agency",
          "contactType": "customer support",
          "availableLanguage": "Bulgarian",
          "areaServed": "BG"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. Дебър №58",
          "addressCountry": "BG",
          "addressRegion": "Варна",
          "addressLocality": "Варна"
        }
      }
    }
  },

  blog: {
    title: "Блог | Pravdast - Експертни съвети за бизнес инженерство",
    description: "Научете най-новите стратегии за B2B растеж, SEO оптимизация и автоматизация на продажбите. Експертни съвети от водещите консултанти в България.",
    keywords: "блог, бизнес инженерство, B2B растеж, SEO съвети, автоматизация продажби, маркетинг стратегии, България",
    canonical: "https://www.pravdagency.eu/blog",
    ogTitle: "Pravdast Блог - Експертни Съвети за Бизнес Растеж",
    ogDescription: "Научете проверени стратегии за предсказуем B2B растеж от водещите експерти в България.",
    ogImage: "https://www.pravdagency.eu/og-blog.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Pravdast Блог - Бизнес Инженерство и Растеж",
    twitterDescription: "Експертни съвети за B2B компании: SEO, автоматизация, продажбени системи.",
    twitterImage: "https://www.pravdagency.eu/twitter-blog.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Pravdast Блог",
      "description": "Експертни съвети за бизнес инженерство и B2B растеж",
      "publisher": {
        "@type": "Organization",
        "name": "Pravdast",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.pravdagency.eu/logo.png"
        }
      },
      "author": {
        "@type": "Organization",
        "name": "Pravdast"
      }
    }
  },

  "blog/predskazuem-rastezh-b2b-kompanii": {
    title: "Как да създадете предсказуем растеж в B2B компанията си | Pravdast",
    description: "Откройте тайните на системния подход към бизнес растежа. Научете как водещите компании строят устойчиви системи за генериране на клиенти.",
    keywords: "предсказуем растеж, B2B компании, бизнес системи, растеж стратегии, клиенти генериране",
    canonical: "https://www.pravdagency.eu/blog/predskazuem-rastezh-b2b-kompanii",
    ogTitle: "Предсказуем Растеж в B2B - Системен Подход",
    ogDescription: "Научете как да превърнете хаоса в предсказуеми резултати със системния инженерен подход.",
    ogImage: "https://www.pravdagency.eu/og-blog-growth.jpg",
    ogType: "article",
    twitterCard: "summary_large_image",
    twitterTitle: "Предсказуем B2B Растеж - Системен Подход",
    twitterDescription: "Тайните на устойчивия бизнес растеж от експертите на Pravdast.",
    twitterImage: "https://www.pravdagency.eu/twitter-blog-growth.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Как да създадете предсказуем растеж в B2B компанията си",
      "description": "Откройте тайните на системния подход към бизнес растежа",
      "author": {
        "@type": "Organization",
        "name": "Pravdast"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Pravdast"
      },
      "datePublished": "2024-12-15",
      "dateModified": "2024-12-15",
      "mainEntityOfPage": "https://www.pravdagency.eu/blog/predskazuem-rastezh-b2b-kompanii"
    }
  },

  "blog/seo-struktor-revolutsionen-podhod": {
    title: "SEO Struktor™: Революционен подход към търсещата оптимизация | Pravdast",
    description: "Разберете как нашата собствена методология SEO Struktor™ помага на клиентите ни да достигнат топ позиции в Google за ключови думи с висок търсещ обем.",
    keywords: "SEO Struktor, търсеща оптимизация, Google SEO, органичен трафик, методология SEO",
    canonical: "https://www.pravdagency.eu/blog/seo-struktor-revolutsionen-podhod",
    ogTitle: "SEO Struktor™ - Революционна SEO Методология",
    ogDescription: "Научете как нашата патентована методология постига топ позиции в Google.",
    ogImage: "https://www.pravdagency.eu/og-blog-seo.jpg",
    ogType: "article",
    twitterCard: "summary_large_image",
    twitterTitle: "SEO Struktor™ - Революционен SEO Подход",
    twitterDescription: "Патентована методология за топ позиции в Google от Pravdast.",
    twitterImage: "https://www.pravdagency.eu/twitter-blog-seo.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "SEO Struktor™: Революционен подход към търсещата оптимизация",
      "description": "Разберете как нашата собствена методология SEO Struktor™ помага на клиентите",
      "author": {
        "@type": "Organization",
        "name": "Pravdast"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Pravdast"
      },
      "datePublished": "2024-12-10",
      "dateModified": "2024-12-10",
      "mainEntityOfPage": "https://www.pravdagency.eu/blog/seo-struktor-revolutsionen-podhod"
    }
  },

  "services/trendlab": {
    title: "Trendlab™ - Система за Авторитетно Съдържание | България",
    description: "Trendlab™ превръща експертизата ви в авторитетно съдържание, което привлича клиенти. Стратегия, създаване и разпространение на съдържание. ROI 400%+.",
    keywords: "trendlab, content marketing българия, авторитетно съдържание, експертен контент, content creation sofia, блог стратегия, thought leadership българия, съдържание roi 2025",
    canonical: "https://www.pravdagency.eu/services/trendlab",
    ogTitle: "Trendlab™ - Авторитетно Съдържание за Експерти",
    ogDescription: "Превърнете експертизата си в магнит за клиенти с нашата система за създаване на авторитетно съдържание.",
    ogImage: "https://www.pravdagency.eu/og-trendlab.jpg",
    ogType: "product",
    twitterCard: "summary_large_image",
    twitterTitle: "Trendlab™ - Система за Авторитетно Съдържание",
    twitterDescription: "Превърнете експертизата си в магнит за клиенти със съдържание.",
    twitterImage: "https://www.pravdagency.eu/twitter-trendlab.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Trendlab™",
      "description": "Система за създаване и разпространение на авторитетно съдържание",
      "provider": {
        "@type": "Organization",
        "name": "Pravda ST"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "BGN",
        "price": "3450",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "3450",
          "priceCurrency": "BGN",
          "billingIncrement": "месечно"
        }
      }
    }
  },

  "services/clickstarter": {
    title: "Clickstarter™ - Оптимизация на Реклами | България",
    description: "Clickstarter™ оптимизира вашите реклами за максимален ROI. Facebook, Google, LinkedIn - всички канали в една система. Намаляване на разходите с 40%+.",
    keywords: "clickstarter, facebook реклами българия, google ads оптимизация, linkedin реклами sofia, ppc управление, ad optimization, реклама roi, digital advertising 2025",
    canonical: "https://www.pravdagency.eu/services/clickstarter",
    ogTitle: "Clickstarter™ - Оптимизация на Реклами за Максимален ROI",
    ogDescription: "Превърнете рекламните разходи в предсказуеми приходи с нашата оптимизационна система.",
    ogImage: "https://www.pravdagency.eu/og-clickstarter.jpg",
    ogType: "product",
    twitterCard: "summary_large_image",
    twitterTitle: "Clickstarter™ - Оптимизация на Реклами",
    twitterDescription: "Превърнете рекламните разходи в предсказуеми приходи.",
    twitterImage: "https://www.pravdagency.eu/twitter-clickstarter.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Clickstarter™",
      "description": "Система за оптимизация на реклами във всички дигитални канали",
      "provider": {
        "@type": "Organization",
        "name": "Pravda ST"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "BGN",
        "price": "1570",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1570",
          "priceCurrency": "BGN",
          "billingIncrement": "месечно"
        }
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
    twitterTitle: "ROI Калкулатори от Pravdast",
    twitterDescription: "Изчислете точната печалба от бизнес системите ни.",
    twitterImage: "https://www.pravdagency.eu/twitter-calculators.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "ROI Калкулатори",
      "description": "Безплатни калкулатори за изчисляване на възвращаемост от инвестиция",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BGN"
      }
    }
  },

  faq: {
    title: "Често Задавани Въпроси | Pravdast - Бизнес Инженеринг",
    description: "Отговори на най-честите въпроси за нашите бизнес системи, цени, процеси и резултати. Всичко което трябва да знаете за Pravdast услугите.",
    keywords: "pravdast въпроси, бизнес инженеринг faq, цени услуги българия, как работи seo struktor, clientomat въпроси, често задавани въпроси sofia",
    canonical: "https://www.pravdagency.eu/faq",
    ogTitle: "Често Задавани Въпроси - Pravdast",
    ogDescription: "Намерете отговори на всички въпроси за нашите бизнес системи и услуги.",
    ogImage: "https://www.pravdagency.eu/og-faq.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "FAQ - Pravdast Бизнес Системи",
    twitterDescription: "Отговори на най-честите въпроси за нашите услуги.",
    twitterImage: "https://www.pravdagency.eu/twitter-faq.jpg",
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Колко време отнема внедряването на системите?",
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