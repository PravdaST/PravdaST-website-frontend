import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface GeneratedMeta {
  description: string;
  keywords: string[];
}

export async function generateWordPressPostMeta(
  title: string,
  content: string,
  excerpt?: string
): Promise<GeneratedMeta> {
  try {
    // Clean and prepare content for analysis
    const cleanContent = content
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim()
      .substring(0, 3000); // Limit content for API efficiency

    const cleanTitle = title.replace(/<[^>]*>/g, '').trim();
    const cleanExcerpt = excerpt?.replace(/<[^>]*>/g, '').trim() || '';

    const prompt = `Анализирай следната българска статия и създай човешко, естествено звучащо meta description:

ЗАГЛАВИЕ: ${cleanTitle}

СЪДЪРЖАНИЕ: ${cleanContent}

${cleanExcerpt ? `КРАТКО ОПИСАНИЕ: ${cleanExcerpt}` : ''}

Създай meta description което звучи като написано от човек, а не от робот:

ИЗИСКВАНИЯ:
- 140-160 символа
- Естествен разговорен български език
- Емоционална връзка с читателя  
- Избягвай технически SEO жаргон
- Без фрази като "откройте", "научете повече", "оптимизация"
- Говори директно и лично към читателя
- Използвай любопитство вместо директни продажби

ДОБРИ ПРИМЕРИ (човешки тон):
- "Какво правят успешните компании различно? Разкривам 3 секрета които променят всичко в бизнеса."
- "Преди година бях на ръба на банкрута. Днес имам 50% ръст. Ето как се случи."
- "Защо половината SEO съвети не работят? Истината която никой не ти казва."

ЛОШИ ПРИМЕРИ (роботски):
- "Открийте SEO стратегии за увеличение на трафика с 300%. Научете повече сега!"
- "Проверени методи за дигитална трансформация. Свалете безплатния гид!"

Върни JSON с полетата:
- "description": човешко звучащо описание
- "keywords": 5-7 релевантни ключови думи`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o", // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
      messages: [
        {
          role: "system", 
          content: "Ти си талантлив български копирайтър. Пишеш meta descriptions които звучат човешки и естествено - като че ли разговаряш с приятел. Избягваш технически жаргон и роботски фрази. Целта ти е да създадеш любопитство и емоционална връзка."
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: { type: "json_object" },
      temperature: 0.8,
      max_tokens: 500,
    });

    const result = JSON.parse(response.choices[0].message.content || '{}');

    // Validate and clean the response
    let description = result.description || '';
    
    // Ensure description is within optimal length (140-160 chars)
    if (description.length > 160) {
      description = description.substring(0, 157) + '...';
    } else if (description.length < 120) {
      // If too short, try to expand with a call to action
      if (!description.includes('➤') && !description.includes('✓') && !description.includes('→')) {
        description += ' ➤ Научете повече';
      }
    }

    const keywords = Array.isArray(result.keywords) ? result.keywords : [];

    return {
      description,
      keywords: keywords.slice(0, 7) // Limit to 7 keywords max
    };

  } catch (error) {
    console.error('AI Meta Generation Error:', error);
    
    // Fallback to basic meta generation if AI fails
    const basicDescription = content
      .replace(/<[^>]*>/g, '')
      .trim()
      .substring(0, 140) + '...';

    return {
      description: basicDescription,
      keywords: ['бизнес инженеринг', 'маркетинг', 'растеж', 'SEO', 'правдаст']
    };
  }
}

// Cache generated meta to avoid repeated API calls
const metaCache = new Map<string, { meta: GeneratedMeta; timestamp: number }>();
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export async function getCachedWordPressPostMeta(
  slug: string,
  title: string,
  content: string,
  excerpt?: string
): Promise<GeneratedMeta> {
  const cacheKey = `${slug}-${Date.now().toString().substring(0, 8)}`; // Daily cache key
  const cached = metaCache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.meta;
  }

  const meta = await generateWordPressPostMeta(title, content, excerpt);
  
  metaCache.set(cacheKey, {
    meta,
    timestamp: Date.now()
  });

  return meta;
}