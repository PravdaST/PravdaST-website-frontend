import { Metadata } from 'next'
import CaseStudiesClient from './CaseStudiesClient'

export const metadata: Metadata = {
  title: 'Успешни казуси - Pravda Agency | Реални резултати',
  description: 'Вижте как помогнахме на клиентите си да постигнат исключителни резултати с нашите бизнес системи. Реални проекти, измерими резултати.',
  keywords: 'успешни казуси pravda agency, клиенти резултати, бизнес растеж, digital marketing българия',
  openGraph: {
    title: 'Успешни казуси - Pravda Agency | Реални резултати',
    description: 'Вижте как помогнахме на клиентите си да постигнат исключителни резултати с нашите бизнес системи. Реални проекти, измерими резултати.',
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdagency.eu/case-studies',
    siteName: 'Pravda Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Успешни казуси - Pravda Agency | Реални резултати',
    description: 'Вижте как помогнахме на клиентите си да постигнат исключителни резултати с нашите бизнес системи. Реални проекти, измерими резултати.',
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/case-studies',
  },
}

export default function CaseStudiesPage() {
  return <CaseStudiesClient />
}