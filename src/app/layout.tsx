import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { KlaviyoSetup } from '@/components/klaviyo-setup'
import { KlaviyoIntegration } from '@/components/klaviyo-integration'
import { ScrollToTop } from '@/components/scroll-to-top'
import { ClientOnly } from '@/components/client-only'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://pravdagency.eu'),
  title: 'Pravdast - Бизнес инженеринг за предвидим растеж в България',
  description: 'Превръщаме хаотичния растеж в предвидими, измерими резултати чрез проверени бизнес системи. SEO оптимизация, създаване на съдържание, рекламни кампании.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg">
      <body className={inter.className}>
        <ClientOnly>
          <KlaviyoSetup />
          <KlaviyoIntegration />
        </ClientOnly>
        {children}
        <ClientOnly>
          <ScrollToTop />
        </ClientOnly>
      </body>
    </html>
  )
}