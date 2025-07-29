import { Metadata } from 'next'
import { StaticHomepage } from '@/components/static-homepage'

export const metadata: Metadata = {
  title: 'Pravda Agency | Бизнес инженерство и предсказуем растеж',
  description: 'Превръщаме хаоса в предсказуем растеж чрез инженерни системи. SEO Struktor™, Trendlab™, Clickstarter™, Clientomat™ - проверени решения за българските компании.',
  keywords: 'бизнес инженерство, дигитален маркетинг българия, SEO оптимизация, автоматизация продажби, pravda agency',
  openGraph: {
    title: 'Pravda Agency | Бизнес инженерство и предсказуем растеж',
    description: 'Превръщаме хаоса в предсказуем растеж чрез инженерни системи. Проверени решения за българските компании.',
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdagency.eu',
    siteName: 'Pravda Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pravda Agency | Бизнес инженерство и предсказуем растеж',
    description: 'Превръщаме хаоса в предсказуем растеж чрез инженерни системи. Проверени решения за българските компании.',
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu',
  },
}

export default function HomePage() {
  return <StaticHomepage />
}