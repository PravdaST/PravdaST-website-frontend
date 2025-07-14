import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { KlaviyoSetup } from '@/components/klaviyo-setup'
import { KlaviyoIntegration } from '@/components/klaviyo-integration'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
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
        <KlaviyoSetup />
        <KlaviyoIntegration />
        {children}
      </body>
    </html>
  )
}