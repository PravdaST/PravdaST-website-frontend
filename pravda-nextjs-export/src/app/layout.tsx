import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { HelmetProvider } from 'react-helmet-async';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pravdast - Бизнес инженеринг за предсказуем растеж',
  description: 'Професионални SEO, маркетинг и бизнес консултации в България. Системен подход за предсказуем растеж на вашия бизнес.',
  keywords: 'SEO България, дигитален маркетинг, бизнес консултации, растеж, Варна',
  authors: [{ name: 'Pravdast Agency' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Pravdast - Бизнес инженеринг за предсказуем растеж',
    description: 'Професионални SEO, маркетинг и бизнес консултации в България',
    url: 'https://www.pravdagency.eu',
    siteName: 'Pravdast Agency',
    locale: 'bg_BG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pravdast - Бизнес инженеринг за предсказуем растеж',
    description: 'Професионални SEO, маркетинг и бизнес консултации в България',
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu',
  },
};

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