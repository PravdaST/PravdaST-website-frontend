import { Metadata } from 'next'
import { generatePageMeta, createModernMetadata } from '@/lib/page-meta-generator'

// Generate optimized metadata for Glovo landing page
export async function getGlovoMetadata(): Promise<Metadata> {
  const pageContent = `
  Безплатен калкулатор за изчисляване на Glovo комисионни и персонализиран план за освобождаване от зависимостта. 
  Спестете 1,800 лв месечно като 23 ресторанта в София, които намалиха Glovo разходите си с нашите системи.
  Получете план за директни поръчки и избягайте 30% комисионни на Glovo.
  `;

  try {
    const aiMeta = await generatePageMeta(
      "Glovo Калкулатор - Спестете 1,800 лв месечно от комисионни",
      pageContent,
      'landing'
    );

    return createModernMetadata(
      "Glovo Калкулатор - Pravda ST | Спестете 1,800 лв месечно",
      aiMeta.description,
      [...aiMeta.keywords, 'glovo българия', 'ресторанти софия', 'доставки'],
      'https://www.pravdast.agency/glovo',
      'website',
      'https://www.pravdast.agency/pravda-og-glovo.png'
    );
  } catch (error) {
    // Fallback metadata if AI generation fails
    return createModernMetadata(
      "Glovo Калкулатор - Pravda ST | Спестете 1,800 лв месечно",
      "Безплатен калкулатор за Glovo комисионни. Вижте как 23 ресторанта в София спестиха средно 1,800 лв месечно от доставки.",
      ['glovo калкулатор', 'ресторанти софия', 'доставки българия', 'комисионни', 'pravda agency'],
      'https://www.pravdast.agency/glovo',
      'website',
      'https://www.pravdast.agency/pravda-og-glovo.png'
    );
  }
}