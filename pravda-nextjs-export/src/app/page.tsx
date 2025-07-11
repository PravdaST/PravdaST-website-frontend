
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pravda Agency - Бизнес инженеринг за предвидим растеж',
  description: 'Престанете да залагате на маркетинг. Започнете да изграждате растеж. Изграждаме системи, които ви дават контрол, носят предвидими приходи и пестят времето ви.',
  keywords: [
    'бизнес инженеринг',
    'предвидим растеж',
    'маркетинг системи',
    'SEO оптимизация',
    'дигитален маркетинг',
    'автоматизация',
    'България'
  ],
  openGraph: {
    title: 'Pravda Agency - Бизнес инженеринг за предвидим растеж',
    description: 'Престанете да залагате на маркетинг. Започнете да изграждате растеж.',
    url: 'https://www.pravdagency.eu',
    siteName: 'Pravda Agency',
    images: [
      {
        url: '/og-images/home.svg',
        width: 1200,
        height: 630,
        alt: 'Pravda Agency - Бизнес инженеринг за предвидим растеж'
      }
    ],
    locale: 'bg_BG',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pravda Agency - Бизнес инженеринг за предвидим растеж',
    description: 'Престанете да залагате на маркетинг. Започнете да изграждате растеж.',
    images: ['/og-images/home.svg']
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Pravda Agency',
  url: 'https://www.pravdagency.eu',
  logo: 'https://www.pravdagency.eu/logo.png',
  description: 'Бизнес инженеринг за предвидим растеж',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BG'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+359-XXX-XXX-XXX',
    contactType: 'customer service'
  },
  sameAs: [
    'https://www.facebook.com/pravdagency',
    'https://www.linkedin.com/company/pravdagency'
  ]
};

import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import PartnersCarousel from '@/components/partners-carousel';
import ProblemSection from '@/components/problem-section';
import SystemsSection from '@/components/systems-section';
import CaseStudiesSlider from '@/components/case-studies-slider';
import ProcessSection from '@/components/process-section';
import CTASection from '@/components/cta-section';
import Footer from '@/components/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      <HeroSection />
      <PartnersCarousel />
      <ProblemSection />
      <SystemsSection />
      <CaseStudiesSlider />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  );
}
