import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@/components/analytics'
import { QueryProvider } from '@/components/query-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pravdast - Бизнес инженеринг за предвидим растеж в България',
  description: 'Превръщаме хаотичния растеж в предвидими, измерими резултати чрез проверени бизнес системи. SEO оптимизация, създаване на съдържание, рекламни кампании.',
  keywords: 'бизнес инженеринг българия, pravdast, seo оптимизация софия, систематичен растеж, b2b маркетинг',
  openGraph: {
    title: 'Pravdast - Бизнес инженеринг за предвидим растеж',
    description: 'Превръщаме хаоса в предсказуеми системи. Проверени методи за B2B растеж.',
    images: ['https://www.pravdagency.eu/og-home.jpg'],
    locale: 'bg_BG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pravdast - Бизнес инженеринг',
    description: 'Систематичен подход към B2B растеж в България.',
    images: ['https://www.pravdagency.eu/twitter-home.jpg'],
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JQ8F0NZDX0"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JQ8F0NZDX0');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <QueryProvider>
          <TooltipProvider>
            {children}
            <Toaster />
            <SpeedInsights />
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  )
}