import { z } from "zod";

// Разширена SEO схема за безупречна Google оптимизация
export const seoDataSchema = z.object({
  title: z.string().min(1).max(60),
  description: z.string().min(1).max(160),
  keywords: z.string().optional(),
  canonical: z.string().url().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: z.string().url().optional(),
  ogType: z.string().optional(),
  twitterCard: z.string().optional(),
  twitterTitle: z.string().optional(),
  twitterDescription: z.string().optional(),
  twitterImage: z.string().url().optional(),
  robots: z.string().optional(),
  structuredData: z.any().optional(),
  noIndex: z.boolean().optional(),
  author: z.string().optional(),
  publishedTime: z.string().optional(),
  modifiedTime: z.string().optional(),
  locale: z.string().optional(),
  alternateUrls: z.array(z.object({
    hreflang: z.string(),
    href: z.string().url()
  })).optional(),
});

// Schema за страница със SEO данни
export const pageSchema = z.object({
  slug: z.string().min(1),
  seo: seoDataSchema,
  content: z.object({
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
    }),
    sections: z.array(z.any()).optional(),
  }),
  updatedAt: z.string().datetime(),
});

// Schema за блог пост
export const blogPostSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  content: z.string().min(1),
  author: z.string().min(1),
  publishedAt: z.string().datetime(),
  featuredImage: z.string().url().optional(),
  seo: seoDataSchema,
  tags: z.array(z.string()).default([]),
});

export type SEOData = z.infer<typeof seoDataSchema>;
export type PageData = z.infer<typeof pageSchema>;
export type BlogPost = z.infer<typeof blogPostSchema>;

// SEO данни за всички страници
export const defaultSEOConfig = {
  siteName: "Pravdast",
  siteUrl: "https://www.pravdagency.eu",
  defaultTitle: "Pravdast - Business Engineering Platform",
  defaultDescription: "Преобразуваме хаоса в предсказуем растеж. Инженерни системи за B2B бизнес развитие.",
  defaultImage: "/og-image.png",
  twitterHandle: "@pravdast",
  locale: "bg_BG",
  // Реални контактни данни Pravda Agency
  contactInfo: {
    address: "гр.Варна ул. Дебър №58",
    email: "contact@pravdast.agency",
    phone: "+359 879 282 299",
    viber: "+359 879 282 299",
    facebook: "https://www.facebook.com/pravdast.agency/",
    youtube: "https://www.youtube.com/@PravdaST",
    instagram: "https://www.instagram.com/pravdast.agency/",
    linkedin: "https://www.linkedin.com/company/pravda-st/"
  }
};