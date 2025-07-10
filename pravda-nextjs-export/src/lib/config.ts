
export const siteConfig = {
  name: "Pravdast",
  title: "Pravdast - Бизнес Инженери за Растеж",
  description: "Професионални SEO услуги, CRM системи и дигитален маркетинг за българския пазар. SEO Struktor, Clientomat, Trendlab решения.",
  url: "https://www.pravdagency.eu",
  ogImage: "https://www.pravdagency.eu/og-images/home.png",
  links: {
    twitter: "https://twitter.com/pravdagency",
    linkedin: "https://linkedin.com/company/pravdagency",
    facebook: "https://facebook.com/pravdagency",
  },
  creator: "Pravdast Team",
  keywords: [
    "SEO България",
    "Дигитален маркетинг",
    "CRM системи",
    "Бизнес автоматизация",
    "Уеб дизайн",
    "Google Ads",
    "Facebook реклами",
    "Lead generation"
  ],
  authors: [
    {
      name: "Pravdast Team",
      url: "https://www.pravdagency.eu",
    },
  ],
  themeColor: "#0F172A",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  },
  contact: {
    email: "contact@pravdagency.eu",
    phone: "+359879282299",
    address: "Варна, България",
  },
  social: {
    twitter: "@pravdagency",
    linkedin: "pravdagency",
    facebook: "pravdagency",
  },
}

export type SiteConfig = typeof siteConfig
