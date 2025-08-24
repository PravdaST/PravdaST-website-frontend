import { Metadata } from 'next'
import BlogClient from './BlogClient'
import { readBlogPostsFromFiles } from '@/lib/blog-file-reader'

export const metadata: Metadata = {
  title: 'Бизнес блог | Инженеринг вместо маркетинг митове',
  description: 'Разкриваме какво наистина работи в бизнеса. Без маркетинг приказки - само проверени системи и реални резултати от практиката.',
  keywords: ['бизнес блог', 'инженеринг система', 'маркетинг митове', 'реални резултати', 'автоматизация', 'растеж българия'],
  openGraph: {
    title: 'Блог - Pravda ST | Бизнес инженеринг и растеж',
    description: 'Експертни статии за бизнес инженеринг, SEO оптимизация, дигитален маркетинг и растеж на компанията. Практически съвети и казуси.',
    url: 'https://www.pravdast.agency/blog',
    siteName: 'Pravda ST',
    locale: 'bg_BG',
    images: [
      {
        url: 'https://www.pravdast.agency/pravda-og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Pravda ST Blog - Бизнес инженеринг статии',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Блог - Pravda ST | Бизнес инженеринг и растеж',
    description: 'Експертни статии за бизнес инженеринг, SEO оптимизация, дигитален маркетинг и растеж на компанията.',
    images: ['https://www.pravdast.agency/pravda-og-blog.png'],
  },
  alternates: {
    canonical: 'https://www.pravdast.agency/blog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

// Server компонент за инициализиране на данните
export default function BlogPage() {
  // Прехвърляме всички данни към client компонента чрез API endpoint
  return <BlogClient />
}