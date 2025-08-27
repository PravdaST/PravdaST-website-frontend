import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@/components/analytics';
import MetaPixel from '@/components/meta-pixel';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mini-Sites за малък бизнес | Pravda ST',
  description: 'Готов one-page сайт с вградено меню, контакти и карта за малък бизнес.',
};

export default function MiniSitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg">
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
        <Toaster />
        <Analytics />
        <MetaPixel />
        <SpeedInsights />
      </body>
    </html>
  );
}