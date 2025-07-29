import { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'За нас - Pravda Agency | Екипът зад системите',
  description: 'Запознайте се с екипа на Pravda Agency - бизнес инженери със специализация в растеж на българските компании. Нашата мисия, ценности и резултати.',
  keywords: 'pravda agency екип, бизнес инженери българия, за нас компания, дигитален маркетинг варна',
  openGraph: {
    title: 'За нас - Pravda Agency | Екипът зад системите',
    description: 'Запознайте се с екипа на Pravda Agency - бизнес инженери със специализация в растеж на българските компании.',
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdagency.eu/about',
    siteName: 'Pravda Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'За нас - Pravda Agency | Екипът зад системите',
    description: 'Запознайте се с екипа на Pravda Agency - бизнес инженери със специализация в растеж на българските компании.',
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/about',
  },
}

export default function AboutPage() {
  return <AboutClient />
}