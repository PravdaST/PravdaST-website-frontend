'use client';

import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import SystemsSection from '@/components/sections/SystemsSection';
import CTASection from '@/components/sections/CTASection';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Услуги - Правдаст | SEO, Маркетинг и Бизнес Системи България</title>
        <meta 
          name="description" 
          content="🎯 Професионални маркетинг услуги: SEO Struktor™, Clientomat™, Clickstarter™, Trendlab™. Системен подход за предсказуем растеж на бизнеса в България." 
        />
        <meta name="keywords" content="seo услуги българия, дигитален маркетинг, google ads управление, content marketing, автоматизация на продажби" />
        <link rel="canonical" href="https://www.pravdagency.eu/services/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Услуги - Правдаст | SEO, Маркетинг и Бизнес Системи България" />
        <meta property="og:description" content="🎯 Професионални маркетинг услуги: SEO Struktor™, Clientomat™, Clickstarter™, Trendlab™. Системен подход за предсказуем растеж на бизнеса в България." />
        <meta property="og:url" content="https://www.pravdagency.eu/services/" />
        
        {/* Twitter Cards */}
        <meta name="twitter:title" content="Услуги - Правдаст | SEO, Маркетинг и Бизнес Системи България" />
        <meta name="twitter:description" content="🎯 Професионални маркетинг услуги: SEO Struktor™, Clientomat™, Clickstarter™, Trendlab™. Системен подход за предсказуем растеж на бизнеса в България." />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        <Navigation />
        
        <main className="pt-10 sm:pt-0">
          {/* Hero Section */}
          <section className="py-20 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                  linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
                `,
                  backgroundSize: "50px 50px",
                }}
              ></div>
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Нашите <span className="text-[#ECB629]">системи</span> за растеж
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Четири проверени системи, които трансформират хаотичния маркетинг в предсказуем растеж
                </p>
              </div>
            </div>
          </section>

          <SystemsSection />
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}