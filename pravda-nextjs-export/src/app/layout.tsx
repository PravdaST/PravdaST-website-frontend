
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pravda Agency - Бизнес Инженеринг за Растеж',
  description: 'Превръщаме хаоса в предвидим растеж с нашите 4 системи: SEO Struktor™, Clientomat™, Trendlab™, Clickstarter™.',
  keywords: 'pravda agency, бизнес инженеринг, seo, автоматизация, растеж, българия',
  authors: [{ name: 'Pravda Agency' }],
  creator: 'Pravda Agency',
  publisher: 'Pravda Agency',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    siteName: 'Pravda Agency',
    title: 'Pravda Agency - Бизнес Инженеринг за Растеж',
    description: 'Превръщаме хаоса в предвидим растеж с нашите 4 системи: SEO Struktor™, Clientomat™, Trendlab™, Clickstarter™.',
    url: 'https://www.pravdagency.eu',
    images: [
      {
        url: 'https://www.pravdagency.eu/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pravda Agency - Бизнес Инженеринг за Растеж'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pravda Agency - Бизнес Инженеринг за Растеж',
    description: 'Превръщаме хаоса в предвидим растеж с нашите 4 системи: SEO Struktor™, Clientomat™, Trendlab™, Clickstarter™.',
    images: ['https://www.pravdagency.eu/twitter-image.jpg']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
