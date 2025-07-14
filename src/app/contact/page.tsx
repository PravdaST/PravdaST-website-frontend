import { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Контакти - Pravda Agency | Свържете се с нас',
  description: 'Свържете се с Pravda Agency за безплатна консултация. Офис във Варна, ул. Дебър №58. Тел: +359 879 282 299. Отговаряме в рамките на 24 часа.',
  keywords: 'контакти pravda agency, офис варна, бизнес консултация, digital marketing българия',
  openGraph: {
    title: 'Контакти - Pravda Agency | Свържете се с нас',
    description: 'Свържете се с Pravda Agency за безплатна консултация. Офис във Варна, ул. Дебър №58. Тел: +359 879 282 299. Отговаряме в рамките на 24 часа.',
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdagency.eu/contact',
    siteName: 'Pravda Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Контакти - Pravda Agency | Свържете се с нас',
    description: 'Свържете се с Pravda Agency за безплатна консултация. Офис във Варна, ул. Дебър №58. Тел: +359 879 282 299. Отговаряме в рамките на 24 часа.',
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/contact',
  },
}

export default function ContactPage() {
  return <ContactClient />
}