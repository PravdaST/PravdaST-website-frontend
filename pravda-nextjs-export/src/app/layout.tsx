import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pravda Agency - Дигитален Маркетинг и SEO',
  description: 'Професионални дигитални маркетинг услуги - SEO, автоматизация на продажбите, PPC кампании и уеб разработка.',
  keywords: 'дигитален маркетинг, SEO, автоматизация, PPC, уеб разработка, България',
  authors: [{ name: 'Pravda Agency' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdagency.eu',
    siteName: 'Pravda Agency',
    title: 'Pravda Agency - Дигитален Маркетинг и SEO',
    description: 'Професионални дигитални маркетинг услуги за растеж на вашия бизнес.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
        <script
          async
          type="text/javascript"
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UTqrCz"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon-192x192.png" />
        <meta name="theme-color" content="#ECB628" />
      </head>
      <body className={`${inter.className} bg-slate-900 text-white min-h-screen`}>
        <HelmetProvider>
          {children}
        </HelmetProvider>
      </body>
    </html>
  );
}