import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export const metadata: Metadata = {
  title: "Pravdast | Business Engineering Platform",
  description: "Създаваме предсказуем растеж за B2B компании с нашите три системи: SEO Struktor™, Clientomat™ и Sales Engine™",
};
'use client';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 2,
      },
    },
  }));

  return (
    <html lang="bg">
      <body className="bg-slate-900 text-white">
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <Navigation />
            <main>
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--pravdast-yellow)]"></div>
                </div>
              }>
                {children}
              </Suspense>
            </main>
            <Footer />
          </HelmetProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}