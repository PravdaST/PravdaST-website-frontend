import { Metadata } from 'next'

export async function getCampaignCreativesMetadata(): Promise<Metadata> {
  const title = 'Креативи за Реклами България - Carousels, Video & UGC | Правда СТ'
  const description = 'Професионални креативи, които удвояват продажбите: Carousels, Video Content и UGC. +280% ръст за 90 дни. Получете безплатен анализ за вашия бизнес от Правда СТ Агенция.'
  
  return {
    title,
    description,
    keywords: [
      'креативи за реклами',
      'video content България', 
      'UGC креативи',
      'carousel реклами',
      'креативни услуги',
      'видео маркетинг',
      'user generated content',
      'социални медии креативи',
      'Правда СТ',
      'реклама България'
    ],
    openGraph: {
      title,
      description, 
      type: 'website',
      locale: 'bg_BG',
      url: 'https://www.pravdast.agency/campaigns/creatives',
      siteName: 'Правда СТ Агенция',
      images: [
        {
          url: 'https://www.pravdast.agency/pravda-og-creatives.png',
          width: 1200,
          height: 630,
          alt: 'Правда СТ - Креативи за Реклами България',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.pravdast.agency/pravda-og-creatives.png'],
    },
    alternates: {
      canonical: 'https://www.pravdast.agency/campaigns/creatives',
    },
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  }
}