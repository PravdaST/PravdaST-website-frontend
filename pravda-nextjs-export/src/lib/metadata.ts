
import { Metadata } from 'next';

interface MetadataProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  jsonLd?: object;
}

export function generateMetadata({
  title,
  description,
  canonical,
  ogImage = '/og-images/default.svg',
  noIndex = false,
  jsonLd
}: MetadataProps): Metadata {
  const baseUrl = 'https://www.pravdagency.eu';
  const fullTitle = title.includes('Pravdast') ? title : `${title} | Pravdast`;
  
  return {
    title: fullTitle,
    description,
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    canonical: canonical || baseUrl,
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || baseUrl,
      siteName: 'Pravdast',
      images: [
        {
          url: `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'bg_BG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${baseUrl}${ogImage}`],
    },
    other: {
      'google-site-verification': 'Qci6DEOZjmJNWJALHmStqqrAqp4oI23Qm7bHYnFKTWY',
    },
    ...(jsonLd && {
      other: {
        'google-site-verification': 'Qci6DEOZjmJNWJALHmStqqrAqp4oI23Qm7bHYnFKTWY',
        'application/ld+json': JSON.stringify(jsonLd),
      },
    }),
  };
}

// SEO data for each page
export const seoData = {
  home: {
    title: 'Pravdast - Бизнес Инженеринг за Предвидим Растеж в България',
    description: 'Превръщаме хаотичния растеж в предвидими, измерими резултати чрез проверени бизнес системи. SEO оптимизация, автоматизация на клиенти и реклами.',
    canonical: 'https://www.pravdagency.eu',
    ogImage: '/og-images/home.svg',
  },
  about: {
    title: 'За Нас - Pravdast | Бизнес Инженери за Растеж',
    description: 'Научете повече за Pravdast - екипът от бизнес инженери, който помага на B2B компании в България да постигнат предвидим растеж чрез проверени системи.',
    canonical: 'https://www.pravdagency.eu/about',
    ogImage: '/og-images/about.svg',
  },
  services: {
    title: 'Услуги - Pravdast | SEO, Автоматизация, Реклами',
    description: 'Нашите услуги за бизнес растеж: SEO Struktor™ за органичен трафик, Clientomat™ за автоматизация, Clickstarter за реклами. Пълен спектър решения.',
    canonical: 'https://www.pravdagency.eu/services',
    ogImage: '/og-images/services.svg',
  },
  contact: {
    title: 'Контакти - Pravdast | Свържете се с нас',
    description: 'Свържете се с екипа на Pravdast. Офис във Варна, телефон: +359 879 282 299, имейл: contact@pravdast.agency. Безплатна консултация за вашия бизнес.',
    canonical: 'https://www.pravdagency.eu/contact',
    ogImage: '/og-images/contact.svg',
  },
  seoStruktor: {
    title: 'SEO Struktor™ - Pravdast | Система за SEO Оптимизация',
    description: 'SEO Struktor™ - нашата система за SEO оптимизация. Техническо SEO + съдържание + линкбилдинг. 1570 лв./месечно. Безплатна SEO консултация.',
    canonical: 'https://www.pravdagency.eu/services/seo-struktor',
    ogImage: '/og-images/seo-struktor.svg',
  },
  clientomat: {
    title: 'Clientomat™ - Pravdast | Автоматизация на Клиенти',
    description: 'Clientomat™ - система за автоматизация на клиентския цикъл. CRM + автоматизация + персонализация. 2890 лв./месечно. Безплатна консултация.',
    canonical: 'https://www.pravdagency.eu/services/clientomat',
    ogImage: '/og-images/clientomat.svg',
  },
  trendlab: {
    title: 'Trendlab - Pravdast | Изследване на Пазара и Конкуренцията',
    description: 'Trendlab - задълбочено изследване на пазара, конкуренцията и възможностите за растеж. Стратегически анализ за вашия бизнес.',
    canonical: 'https://www.pravdagency.eu/services/trendlab',
    ogImage: '/og-images/trendlab.svg',
  },
  clickstarter: {
    title: 'Clickstarter - Pravdast | Facebook и Google Реклами',
    description: 'Clickstarter - управление на Facebook и Google реклами за B2B компании. Оптимизация за конверсии и ROI. Професионално рекламно управление.',
    canonical: 'https://www.pravdagency.eu/services/clickstarter',
    ogImage: '/og-images/clickstarter.svg',
  },
};
