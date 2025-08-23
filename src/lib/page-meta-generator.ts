import OpenAI from "openai";
import { Metadata } from "next";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

interface PageMeta {
  description: string;
  keywords: string[];
}

// 2025 SEO Best Practices: Humanized meta generation for specific pages
export async function generatePageMeta(
  pageTitle: string,
  pageContent: string,
  pageType: 'landing' | 'campaign' | 'service' | 'general' = 'general'
): Promise<PageMeta> {
  
  const prompt = `Създай SEO оптимизирано meta описание и ключови думи за следната страница:

ЗАГЛАВИЕ: ${pageTitle}
СЪДЪРЖАНИЕ: ${pageContent}
ТИП: ${pageType}

ИЗИСКВАНИЯ ЗА META ОПИСАНИЕ:
- Точно между 145-158 символа
- Звучи човешки и естествено (НЕ роботски)
- Включва "Pravda ST Agency" или "Pravda Agency"
- Споменава България/София където е подходящо
- Буди любопитство и кара хората да кликнат
- Без клишета като "най-добрия", "номер 1", etc.
- Разговорен тон, сякаш човек говори

ИЗИСКВАНИЯ ЗА КЛЮЧОВИ ДУМИ:
- Максимум 7 ключови думи/фрази
- Включват българска локализация
- Смесват брандови и generic keywords
- Фокус върху бизнес интент, не на информационни queries
- Без keyword stuffing

Отговори САМО в JSON формат:
{
  "description": "meta description тук",
  "keywords": ["keyword1", "keyword2", "keyword3"]
}`;

  try {
    // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "Ти си експерт български SEO копирайтър за 2025 година. Пишеш человешки, engaging meta descriptions които се конвертират. Избягваш корпоративен жаргон и роботски фрази."
        },
        { role: "user", content: prompt }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
      max_tokens: 400
    });

    const rawContent = response.choices?.[0]?.message?.content || "{}";
    const parsed = JSON.parse(rawContent);

    return {
      description: String(parsed.description || ""),
      keywords: Array.isArray(parsed.keywords) ? parsed.keywords : []
    };
  } catch (error) {
    console.error('Error generating page meta:', error);
    return {
      description: "Pravda ST Agency - Бизнес инженеринг системи за растеж на българските компании.",
      keywords: ["pravda agency", "бизнес системи", "растеж българия"]
    };
  }
}

// 2025 SEO Best Practices metadata template
export function createModernMetadata(
  title: string,
  description: string,
  keywords: string[],
  canonicalUrl: string,
  pageType: 'website' | 'article' = 'website',
  ogImage?: string
): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title,
      description,
      type: pageType,
      locale: 'bg_BG',
      url: canonicalUrl,
      siteName: 'Pravda ST Agency',
      images: ogImage ? [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/png',
        }
      ] : [
        {
          url: 'https://www.pravdast.agency/pravda-og-default.png',
          width: 1200,
          height: 630,
          alt: 'Pravda ST Agency - Бизнес инженеринг',
          type: 'image/png',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage || 'https://www.pravdast.agency/pravda-og-default.png'],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
    // 2025 SEO Best Practice: Additional meta tags
    other: {
      'theme-color': '#ECB629',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'format-detection': 'telephone=no',
      'geo.region': 'BG',
      'geo.country': 'Bulgaria',
      'geo.placename': 'Sofia',
      'ICBM': '42.6975, 23.3241',
    },
  };
}