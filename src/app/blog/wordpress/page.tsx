import { Metadata } from 'next'
import WordPressClient from './WordPressClient'

export const metadata: Metadata = {
  title: 'WordPress Блог - Pravda Agency | Експертни статии',
  description: 'Научете повече за бизнес инженерството от нашия WordPress блог. Експертни статии, казуси и практически съвети.',
  keywords: ['wordpress блог', 'бизнес инженерство', 'растеж', 'маркетинг', 'SEO'],
  openGraph: {
    title: 'WordPress Блог - Pravda Agency',
    description: 'Експертни статии за бизнес инженеринг от нашия WordPress блог.',
    url: 'https://www.pravdagency.eu/blog/wordpress',
    siteName: 'Pravda Agency',
    locale: 'bg_BG',
    images: [
      {
        url: 'https://pravdagency.eu/pravda-og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Pravda Agency WordPress Blog',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordPress Блог - Pravda Agency',
    description: 'Експертни статии за бизнес инженеринг от нашия WordPress блог.',
    images: ['https://pravdagency.eu/pravda-og-blog.png'],
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/blog/wordpress',
  },
}

export default function WordPressBlogPage() {
  return <WordPressClient />
}