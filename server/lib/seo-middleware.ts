import { Request, Response, NextFunction } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

// Page-specific SEO data
const pageSEOData = {
  '/': {
    title: 'Pravdast - Бизнес инженеринг за предвидим растеж в България',
    description: 'Превръщаме хаотичния растеж в предвидими, измерими резултати чрез проверени бизнес системи. SEO оптимизация, създаване на съдържание, рекламни кампании.',
    canonical: 'https://www.pravdagency.eu/',
    h1: 'Спрете да залагате на късмет. Време е за инженерни системи.',
  },
  '/services': {
    title: 'Услуги - Pravdast | Бизнес Инженеринг Системи',
    description: 'Нашите бизнес системи: SEO Struktor™, Trendlab™, Clickstarter™, Clientomat™. Предвидими резултати за B2B компании в България.',
    canonical: 'https://www.pravdagency.eu/services',
    h1: 'Инженерни системи за предвидим растеж',
  },
  '/services/seo-struktor': {
    title: 'SEO Struktor™ - Системен SEO за България | Pravdast - 1980лв/месец',
    description: 'SEO Struktor™ - нашата флагманска система за органична видимост. От 0 до топ позиции с инженерен подход. 1980 лв./месечно. Безплатна диагностика.',
    canonical: 'https://www.pravdagency.eu/services/seo-struktor',
    h1: 'Заложете на системата, не на случайностите. Изградете SEO структура, която работи предвидимо.',
  },
  '/services/trendlab': {
    title: 'Trendlab™ - Система за Съдържание и Авторитет | Pravdast - 3450лв/месец',
    description: 'Trendlab™ - система за създаване на съдържание и изграждане на авторитет. Content factory + AI креативност. 3450 лв./месечно. Консултация безплатно.',
    canonical: 'https://www.pravdagency.eu/services/trendlab',
    h1: 'Най-убедителната история е вашата. Време е да я разкажем.',
  },
  '/services/clickstarter': {
    title: 'Clickstarter™ - Реклами с Измерим ROI | Pravdast - 1570лв/месец',
    description: 'Clickstarter™ - системно управление на рекламни кампании. Google/Meta Ads оптимизация за максимален ROI. 1570 лв./месечно. Безплатен анализ.',
    canonical: 'https://www.pravdagency.eu/services/clickstarter',
    h1: 'Двигателят на вашия растеж има нужда от настройка, а не само от повече гориво',
  },
  '/services/clientomat': {
    title: 'Clientomat™ - Автоматизация Клиенти | Pravdast - 2890лв/месец',
    description: 'Clientomat™ - система за автоматизация на клиентския цикъл. CRM + автоматизация + персонализация. 2890 лв./месечно. Безплатна консултация.',
    canonical: 'https://www.pravdagency.eu/services/clientomat',
    h1: 'Превърнете всеки контакт в възможност, всяка възможност в клиент',
  },
  '/contact': {
    title: 'Контакти - Pravdast | Свържете се с нас',
    description: 'Свържете се с екипа на Pravdast. Офис във Варна, телефон: +359 879 282 299, имейл: contact@pravdast.agency. Безплатна консултация за вашия бизнес.',
    canonical: 'https://www.pravdagency.eu/contact',
    h1: 'Свържете се с нас',
  },
  '/about': {
    title: 'За Нас - Pravdast | Бизнес Инженери за Растеж',
    description: 'Научете повече за Pravdast - екип от бизнес инженери, които превръщат хаоса в предвидим растеж. История, ценности и подход към бизнес трансформация.',
    canonical: 'https://www.pravdagency.eu/about',
    h1: 'За нас',
  },
  '/blog': {
    title: 'Блог - Pravdast | Бизнес Инженеринг Статии',
    description: 'Експертни статии за бизнес инженеринг, SEO, автоматизация и растеж. Практични съвети и казуси от екипа на Pravdast за B2B компании в България.',
    canonical: 'https://www.pravdagency.eu/blog',
    h1: 'Блог - Експертни статии и анализи',
  },
  '/case-studies': {
    title: 'Казуси - Pravdast | Успешни Проекти и Резултати',
    description: 'Реални резултати от нашите бизнес системи. Казуси от SEO проекти, автоматизация и растеж на B2B компании в България. Измерими резултати.',
    canonical: 'https://www.pravdagency.eu/case-studies',
    h1: 'Казуси - Реални резултати от нашите системи',
  },
  '/faq': {
    title: 'Често Задавани Въпроси | Pravdast - Бизнес Инженеринг',
    description: 'Отговори на най-честите въпроси за нашите бизнес системи. Цени, процеси, сроке и резултати от SEO Struktor™, Trendlab™, Clickstarter™, Clientomat™.',
    canonical: 'https://www.pravdagency.eu/faq',
    h1: 'Често задавани въпроси',
  },
};

export function seoMiddleware(req: Request, res: Response, next: NextFunction) {
  const path = req.path;
  const seoData = pageSEOData[path as keyof typeof pageSEOData];
  
  if (seoData && req.accepts('html')) {
    try {
      let html = readFileSync(join(process.cwd(), 'client/dist/index.html'), 'utf-8');
      
      // Replace title
      html = html.replace(
        /<title>.*?<\/title>/,
        `<title>${seoData.title}</title>`
      );
      
      // Replace description
      html = html.replace(
        /<meta name="description" content=".*?">/,
        `<meta name="description" content="${seoData.description}">`
      );
      
      // Replace canonical
      html = html.replace(
        /<link rel="canonical" href=".*?">/,
        `<link rel="canonical" href="${seoData.canonical}">`
      );
      
      // Update Open Graph
      html = html.replace(
        /<meta property="og:title" content=".*?">/,
        `<meta property="og:title" content="${seoData.title}">`
      );
      html = html.replace(
        /<meta property="og:description" content=".*?">/,
        `<meta property="og:description" content="${seoData.description}">`
      );
      html = html.replace(
        /<meta property="og:url" content=".*?">/,
        `<meta property="og:url" content="${seoData.canonical}">`
      );
      
      // Update Twitter Cards
      html = html.replace(
        /<meta name="twitter:title" content=".*?">/,
        `<meta name="twitter:title" content="${seoData.title}">`
      );
      html = html.replace(
        /<meta name="twitter:description" content=".*?">/,
        `<meta name="twitter:description" content="${seoData.description}">`
      );
      
      // Add H1 to noscript for crawlers
      html = html.replace(
        /<noscript>([\s\S]*?)<\/noscript>/,
        `<noscript>$1<h1 style="font-size: 2rem; font-weight: bold; margin: 1rem 0; color: #ECB629;">${seoData.h1}</h1></noscript>`
      );
      
      res.send(html);
      return;
    } catch (error) {
      console.error('SEO middleware error:', error);
    }
  }
  
  next();
}