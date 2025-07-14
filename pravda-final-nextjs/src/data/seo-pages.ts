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
      "@type": "Organization",
      "name": "Pravdast",
      "url": "https://www.pravdagency.eu",
      "logo": "https://www.pravdagency.eu/logo.png",
      "sameAs": [
        "https://www.facebook.com/pravdast",
        "https://www.linkedin.com/company/pravdast"
      ]
    }
  }
};