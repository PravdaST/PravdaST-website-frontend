import { Metadata } from 'next'
import { pageSEOData } from '@/data/seo-pages'
import { StaticHomepage } from '@/components/static-homepage'

export const metadata: Metadata = {
  title: pageSEOData.home.title,
  description: pageSEOData.home.description,
  keywords: pageSEOData.home.keywords,
  openGraph: {
    title: pageSEOData.home.ogTitle,
    description: pageSEOData.home.ogDescription,
    images: [pageSEOData.home.ogImage || ''],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageSEOData.home.twitterTitle,
    description: pageSEOData.home.twitterDescription,
    images: [pageSEOData.home.twitterImage || ''],
  },
  robots: pageSEOData.home.robots,
}

export default function HomePage() {
  return <StaticHomepage />
}