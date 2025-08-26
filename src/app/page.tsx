import { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: "Правдаст - Бизнес системи вместо маркетинг хаос | България",
  description: "Защо да залагаш на маркетинг когато можеш да имаш система? Превръщаме хаоса в предвидими резултати чрез инженеринг - не догадки.",
  keywords: "бизнес системи българия, pravdast, маркетинг хаос, инженеринг систем, предвидим растеж софия, автоматизация, системи за растеж",
  openGraph: {
    title: "Правдаст - Бизнес инженеринг за предвидим растеж",
    description: "Превръщаме хаоса в предсказуеми системи. Проверени методи за B2B растеж.",
    url: 'https://www.pravdast.agency/',
    siteName: 'Pravda ST Agency',
    locale: 'bg_BG',
    images: ['https://www.pravdast.agency/pravda-og-home.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Правдаст - Бизнес инженеринг",
    description: "Систематичен подход към B2B растеж в България.",
    images: ['/pravda-twitter-home.png'],
  },
  robots: "index, follow, max-snippet:-1, max-image-preview:large",
  alternates: {
    canonical: 'https://www.pravdast.agency/',
  },
}

export default function HomePage() {
  return <HomeClient />
}