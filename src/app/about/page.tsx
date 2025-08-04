import { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'За нас - Pravda Agency | Бизнес инженери за растеж',
  description: 'Запознайте се с екипа от бизнес инженери в Pravda Agency. Нашата мисия е да превърнем хаоса в предсказуем растеж чрез инженерни системи.',
  keywords: ['бизнес инженери', 'екип', 'растеж', 'маркетинг', 'Pravda Agency'],
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdagency.eu/about',
    siteName: 'Pravda Agency',
    title: 'За нас - Pravda Agency | Бизнес инженери за растеж',
    description: 'Запознайте се с екипа от бизнес инженери в Pravda Agency. Нашата мисия е да превърнем хаоса в предсказуем растеж чрез инженерни системи.',
    images: [
      {
        url: 'https://pravdagency.eu/pravda-og-home.png',
        width: 1200,
        height: 630,
        alt: 'Pravda Agency Team - Business Engineers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'За нас - Pravda Agency | Бизнес инженери за растеж',
    description: 'Запознайте се с екипа от бизнес инженери в Pravda Agency. Нашата мисия е да превърнем хаоса в предсказуем растеж чрез инженерни системи.',
    images: ['https://pravdagency.eu/pravda-og-home.png'],
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/about',
  },
}

export default function AboutPage() {
  return <AboutClient />
}