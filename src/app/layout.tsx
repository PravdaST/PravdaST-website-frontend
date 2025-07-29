import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { KlaviyoSetup } from '@/components/klaviyo-setup'
import { KlaviyoIntegration } from '@/components/klaviyo-integration'
import { ScrollToTop } from '@/components/scroll-to-top'
import { ClientOnly } from '@/components/client-only'
import { Analytics } from '@/components/analytics'
import MetaPixel from '@/components/meta-pixel'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ClarityAnalytics } from '@/components/clarity-analytics'
import { RetargetingPixels } from '@/components/retargeting-pixels'
import { ServiceWorkerSetup } from '@/components/service-worker-setup'
import { Toaster } from '@/components/ui/toaster'
import { Navigation } from '@/components/navigation'

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
          <Analytics />
          <MetaPixel />
          <ClarityAnalytics />
          <RetargetingPixels />
          <ServiceWorkerSetup />
        </ClientOnly>
        {children}
        <ClientOnly>
          <ScrollToTop />
        </ClientOnly>
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  )
}