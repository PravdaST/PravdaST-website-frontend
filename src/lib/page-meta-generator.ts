import OpenAI from "openai";
import { Metadata } from "next";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

interface PageMeta {
  description: string;
  keywords: string[];
}

// Enhanced fallback meta generation without AI
function generateFallbackMeta(pageTitle: string, pageContent: string, pageType: string): PageMeta {
  // Extract key themes from content for smarter fallbacks
  const contentLower = pageContent.toLowerCase();
  const titleLower = pageTitle.toLowerCase();
  
  // Page-specific metadata templates
  if (pageType === 'campaign') {
    if (contentLower.includes('glovo') || titleLower.includes('glovo')) {
      return {
        description: "Спри да залагаш на скъпите Glovo комисионни! 23 ресторанта в София вече спестиха средно 1,800 лв месечно с нашите системи за директни поръчки. Безплатен анализ сега.",
        keywords: ["glovo комисионни софия", "ресторанти системи", "директни поръчки", "спестяване комисионни", "pravda agency glovo", "доставки българия", "ресторант инженеринг"]
      };
    }
    if (contentLower.includes('creativess') || titleLower.includes('creative')) {
      return {
        description: "Забрави маркетинг агенциите - получи професионални креативи за по-малко от цената на един дизайнер. Бизнес инженеринг системи за визуална комуникация в България.",
        keywords: ["креативи българия", "дизайн системи", "визуална комуникация", "pravda agency", "бизнес креативи", "маркетинг алтернатива", "софия дизайн"]
      };
    }
  }
  
  if (pageType === 'service') {
    return {
      description: "Спри да разчиташ на традиционния маркетинг! Pravda ST Agency създава бизнес инженеринг системи за устойчив растеж на българските компании. Реални резултати, измерими ROI.",
      keywords: ["pravda agency българия", "бизнес инженеринг", "системи растеж", "маркетинг алтернатива", "автоматизация софия", "ROI оптимизация", "бизнес системи"]
    };
  }
  
  if (pageType === 'landing') {
    if (contentLower.includes('mini') && contentLower.includes('site')) {
      return {
        description: "Уморен от маркетинг експерименти? Получи готов мини-сайт за 48 часа и започни да генерираш реални клиенти. Pravda ST Agency - бизнес инженеринг в България.",
        keywords: ["мини сайтове българия", "бърза уеб разработка", "клиенти генериране", "pravda agency", "бизнес уебсайтове", "софия уеб", "маркетинг системи"]
      };
    }
  }
  
  // Default fallback
  return {
    description: "Pravda ST Agency предлага бизнес инженеринг системи като алтернатива на традиционния маркетинг. Реални резултати за българските компании чрез автоматизации и системи за растеж.",
    keywords: ["pravda agency", "бизнес инженеринг българия", "растеж системи", "маркетинг алтернатива", "автоматизация софия", "бизнес системи"]
  };
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

БРАНДИНГ СТРАТЕГИЯ:
- Позиционираме се срещу традиционния маркетинг
- Предлагаме СИСТЕМИ, ИНЖЕНЕРИНГ, АВТОМАТИЗАЦИИ като по-добра алтернатива
- Примери: "Спри да залагаш на маркетинга", "Забрави маркетинг тактиките", "Уморен от маркетинг експерименти?"

ИЗИСКВАНИЯ ЗА META ОПИСАНИЕ:
- Точно между 145-158 символа
- Звучи човешки и естествено (НЕ роботски)
- Различни начални фрази за всяка страница (НЕ еднотипни)
- Включва "маркетинг" като нещо остаряло/проблемно
- Предлага системи/инженеринг/автоматизации като решение
- България/София споменати където е подходящо
- Буди любопитство и кара хората да кликнат

ИЗИСКВАНИЯ ЗА КЛЮЧОВИ ДУМИ:
- Максимум 7 ключови думи/фрази
- Включват "маркетинг" за SEO покритие
- Смесват традиционни + нови термини (системи, инженеринг)
- Българска локализация
- Без keyword stuffing

Отговори САМО в JSON формат:
{
  "description": "meta description тук",
  "keywords": ["keyword1", "keyword2", "keyword3"]
}`;

  try {
    // Check if OpenAI API key is available and valid
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY.length < 10) {
      console.warn('OpenAI API key not properly configured, using smart fallback metadata');
      return generateFallbackMeta(pageTitle, pageContent, pageType);
    }

    // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "Ти си експерт български SEO копирайтър за 2025 година. Специализираш се в позициониране срещу традиционния маркетинг. Пишеш человешки, engaging meta descriptions с уникални започвания за всяка страница."
        },
        { role: "user", content: prompt }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
      max_tokens: 400
    });

    const rawContent = response.choices?.[0]?.message?.content || "{}";
    const parsed = JSON.parse(rawContent);

    // Validate AI response
    if (!parsed.description || !Array.isArray(parsed.keywords)) {
      console.warn('Invalid AI response format, using fallback');
      return generateFallbackMeta(pageTitle, pageContent, pageType);
    }

    return {
      description: String(parsed.description || ""),
      keywords: Array.isArray(parsed.keywords) ? parsed.keywords : []
    };
  } catch (error: any) {
    const errorMessage = error?.message || String(error);
    
    // Handle specific OpenAI errors
    if (errorMessage.includes('429') || errorMessage.includes('quota')) {
      console.warn('OpenAI quota exceeded, using smart fallback metadata for optimal SEO');
    } else if (errorMessage.includes('API key')) {
      console.warn('OpenAI API authentication failed, using fallback metadata');
    } else {
      console.warn('OpenAI meta generation failed, using optimized fallback:', errorMessage);
    }
    
    // Return enhanced fallback instead of basic one
    return generateFallbackMeta(pageTitle, pageContent, pageType);
  }
}

// Check if we have a valid OpenAI configuration
export function hasValidOpenAIConfig(): boolean {
  return !!(process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY.length > 10);
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