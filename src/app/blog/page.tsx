import { Metadata } from 'next'
import BlogClient from './BlogClient'
import { readBlogPostsFromFiles } from '@/lib/blog-file-reader'

export const metadata: Metadata = {
  title: 'Блог - Pravda Agency | Бизнес инженерство и растеж',
  description: 'Научете повече за бизнес инженерството, системи за растеж и успешни стратегии за развитие на бизнеса от експертите на Pravda Agency.',
  keywords: ['бизнес инженерство', 'растеж', 'маркетинг', 'SEO', 'автоматизация', 'систем'],
  openGraph: {
    title: 'Блог - Pravda Agency | Бизнес инженеринг и растеж',
    description: 'Експертни статии за бизнес инженеринг, SEO оптимизация, дигитален маркетинг и растеж на компанията. Практически съвети и казуси.',
    url: 'https://www.pravdagency.eu/blog',
    siteName: 'Pravda Agency',
    locale: 'bg_BG',
    images: [
      {
        url: 'https://pravdagency.eu/pravda-og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Pravda Agency Blog - Бизнес инженеринг статии',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Блог - Pravda Agency | Бизнес инженеринг и растеж',
    description: 'Експертни статии за бизнес инженеринг, SEO оптимизация, дигитален маркетинг и растеж на компанията.',
    images: ['https://pravdagency.eu/pravda-og-blog.png'],
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/blog',
  },
}

// Server компонент за инициализиране на данните
export default function BlogPage() {
  // Прехвърляме всички данни към client компонента чрез API endpoint
  return <BlogClient />
}