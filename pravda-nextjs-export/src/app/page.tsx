'use client';

import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import PartnersCarousel from '@/components/sections/PartnersCarousel';
import SystemsSection from '@/components/sections/SystemsSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import CaseStudiesSlider from '@/components/sections/CaseStudiesSlider';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Pravdast - Бизнес инженеринг за предсказуем растеж в България</title>
        <meta 
          name="description" 
          content="🎯 Системен подход за растеж на бизнеса. SEO Struktor™, Clientomat™, Clickstarter™, Trendlab™. Проверени системи с измерими резултати в България." 
        />
        <meta name="keywords" content="бизнес инженеринг българия, seo услуги българия, дигитален маркетинг варна, растеж на бизнеса, системен подход маркетинг" />
        <link rel="canonical" href="https://www.pravdagency.eu/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pravdast - Бизнес инженеринг за предсказуем растеж в България" />
        <meta property="og:description" content="🎯 Системен подход за растеж на бизнеса. SEO Struktor™, Clientomat™, Clickstarter™, Trendlab™. Проверени системи с измерими резултати в България." />
        <meta property="og:url" content="https://www.pravdagency.eu/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pravdast - Бизнес инженеринг за предсказуем растеж в България" />
        <meta name="twitter:description" content="🎯 Системен подход за растеж на бизнеса. SEO Struktor™, Clientomat™, Clickstarter™, Trendlab™. Проверени системи с измерими резултати в България." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Pravdast - Бизнес инженеринг",
            "description": "Бизнес инженеринг за предсказуем растеж в България",
            "url": "https://www.pravdagency.eu",
            "telephone": "+359879282299",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. Дебър №58",
              "addressLocality": "Варна",
              "addressCountry": "BG"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "43.2141",
              "longitude": "27.9147"
            },
            "sameAs": [
              "https://www.facebook.com/pravdagency",
              "https://www.linkedin.com/company/pravdagency"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        <Navigation />
        
        <main>
          <HeroSection />
          <PartnersCarousel />
          <SystemsSection />
          <ComparisonSection />
          <CaseStudiesSlider />
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}