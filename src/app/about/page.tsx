import { Metadata } from 'next'
import AboutClient from './AboutClient'

// Cache for 10 minutes (600 seconds)
export const revalidate = 600
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Екип | Не маркетолози, а бизнес инженери',
  description: 'Ние не правим маркетинг кампании - строим системи. Запознай се с екипа който превръща бизнес хаоса в предвидими резултати.',
  keywords: ['бизнес инженери', 'не маркетолози', 'систем строители', 'екип pravda', 'инженеринг българия'],
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
  other: {
    'fb:app_id': '1234567890123456',
  },
}

export default function AboutPage() {
  return <AboutClient />
}