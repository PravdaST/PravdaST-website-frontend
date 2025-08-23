import { Metadata } from 'next'
import { generatePageMeta, createModernMetadata } from '@/lib/page-meta-generator'

// Generate optimized metadata for Glovo campaign landing page
export async function getCampaignGlovoMetadata(): Promise<Metadata> {
  const pageContent = `
  Специализирана кампания за ресторанти в София за намаляване на Glovo зависимостта. 
  23 ресторанта вече спестиха средно 1,800 лв месечно с нашите системи за директни поръчки.
  Безплатен анализ и план за освобождаване от високите Glovo комисионни. Реални резултати, измерими спестявания.
  `;

  try {
    const aiMeta = await generatePageMeta(
      "Glovo Ресторант Кампания - Спестете 1,800 лв месечно",
      pageContent,
      'campaign'
    );

    return createModernMetadata(
      "Glovo Кампания - Pravda ST | 23 ресторанта спестиха 1,800 лв",
      aiMeta.description,
      [...aiMeta.keywords, 'glovo кампания', 'ресторанти софия', 'доставки оптимизация'],
      'https://www.pravdast.agency/campaigns/glovo',
      'website',
      'https://www.pravdast.agency/pravda-og-glovo-campaign.png'
    );
  } catch (error) {
    // Fallback metadata if AI generation fails
    return createModernMetadata(
      "Glovo Кампания - Pravda ST | 23 ресторанта спестиха 1,800 лв",
      "Специализирана кампания за ресторанти в София. 23 заведения вече намалиха Glovo комисионните си с 1,800 лв месечно чрез нашите системи.",
      ['glovo кампания софия', 'ресторанти глово', 'комисионни намаляване', 'доставки българия', 'pravda agency'],
      'https://www.pravdast.agency/campaigns/glovo',
      'website',
      'https://www.pravdast.agency/pravda-og-glovo-campaign.png'
    );
  }
}