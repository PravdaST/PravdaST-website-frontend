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
import { BackgroundEffects } from '@/components/background-effects'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pravdagency.eu'),
  title: 'Правдаст - Бизнес инженеринг за предвидим растеж в България',
  description: 'Превръщаме хаоса в предсказуеми системи. Проверени методи за B2B растеж.',
  keywords: ['бизнес инженеринг', 'растеж', 'маркетинг', 'SEO', 'автоматизация', 'Pravda Agency'],
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdagency.eu/',
    siteName: 'Pravda Agency',
    title: 'Правдаст - Бизнес инженеринг за предвидим растеж',
    description: 'Превръщаме хаоса в предсказуеми системи. Проверени методи за B2B растеж.',
    images: [
      {
        url: 'https://pravdagency.eu/pravda-og-home.png',
        width: 1200,
        height: 630,
        alt: 'Pravda Agency - Business Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Правдаст - Бизнес инженеринг за предвидим растеж',
    description: 'Превръщаме хаоса в предсказуеми системи. Проверени методи за B2B растеж.',
    images: ['https://pravdagency.eu/pravda-og-home.png'],
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/',
  },
  other: {
    'fb:app_id': '1234567890123456',
  },
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
          <BackgroundEffects />
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