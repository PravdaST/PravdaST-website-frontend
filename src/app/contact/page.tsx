import { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Контакти - Pravda Agency | Свържете се с нас',
  description: 'Свържете се с Pravda Agency за безплатна консултация. Офис във Варна, ул. Дебър №58. Тел: +359 879 282 299. Отговаряме в рамките на 24 часа.',
  keywords: ['контакти', 'консултация', 'Варна', 'телефон', 'Pravda Agency'],
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdagency.eu/contact',
    siteName: 'Pravda Agency',
    title: 'Контакти - Pravda Agency | Свържете се с нас',
    description: 'Свържете се с Pravda Agency за безплатна консултация. Офис във Варна, ул. Дебър №58. Тел: +359 879 282 299. Отговаряме в рамките на 24 часа.',
    images: [
      {
        url: 'https://pravdagency.eu/pravda-og-home.png',
        width: 1200,
        height: 630,
        alt: 'Pravda Agency Contact',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Контакти - Pravda Agency | Свържете се с нас',
    description: 'Свържете се с Pravda Agency за безплатна консултация. Офис във Варна, ул. Дебър №58. Тел: +359 879 282 299. Отговаряме в рамките на 24 часа.',
    images: ['https://pravdagency.eu/pravda-og-home.png'],
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/contact',
  },
}

export default function ContactPage() {
  return <ContactClient />
}