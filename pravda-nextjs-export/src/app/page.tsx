
import { Metadata } from 'next';
import { Navigation } from '@/components/sections/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { PartnersCarousel } from '@/components/sections/PartnersCarousel';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { SystemsSection } from '@/components/sections/SystemsSection';
import { CaseStudiesSlider } from '@/components/sections/CaseStudiesSlider';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';

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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <HeroSection />
      <PartnersCarousel />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <SystemsSection />
      <CaseStudiesSlider />
      <CTASection />
      <Footer />
    </div>
  );
}
