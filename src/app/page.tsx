import { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: "Правдаст - Бизнес инженеринг за предвидим растеж в България",
  description: "Превръщаме хаотичния растеж в предвидими, измерими резултати чрез проверени бизнес системи. SEO оптимизация, създаване на съдържание, рекламни кампании.",
  keywords: "бизнес инженеринг българия, pravdast, seo оптимизация софия, систематичен растеж, b2b маркетинг, автоматизация продажби, предвидим растеж",
  openGraph: {
    title: "Правдаст - Бизнес инженеринг за предвидим растеж",
    description: "Превръщаме хаоса в предсказуеми системи. Проверени методи за B2B растеж.",
    images: ['/pravda-og-home.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Правдаст - Бизнес инженеринг",
    description: "Систематичен подход към B2B растеж в България.",
    images: ['/pravda-twitter-home.png'],
  },
  robots: "index, follow, max-snippet:-1, max-image-preview:large",
}

export default function HomePage() {
  return <HomeClient />
}