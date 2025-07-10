
import { Metadata } from 'next';
import { HeroSection } from '@/components/HeroSection';
import { SystemsSection } from '@/components/SystemsSection';
import { CaseStudiesSlider } from '@/components/CaseStudiesSlider';
import { PartnersCarousel } from '@/components/PartnersCarousel';
import { CTASection } from '@/components/CTASection';
import { EnhancedSEO } from '@/components/seo/EnhancedSEO';
import { WebsiteSchema } from '@/components/seo/WebsiteSchema';

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
    <>
      <EnhancedSEO
        title="Pravda Agency - Бизнес инженеринг за предвидим растеж"
        description="Престанете да залагате на маркетинг. Започнете да изграждате растеж. Изграждаме системи, които ви дават контрол, носят предвидими приходи и пестят времето ви."
        canonical="https://www.pravdagency.eu"
        ogImage="/og-images/home.svg"
      />
      
      <WebsiteSchema data={jsonLd} />
      
      <main className="min-h-screen bg-slate-900">
        <HeroSection />
        
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Спрете да залагате. Време е за <span className="text-[#ECB629]">система</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Ние не предлагаме маркетинг. Нашият подход е бизнес инженеринг. 
                Разликата е в резултата: данни, предвидими резултати, измерими приходи.
              </p>
            </div>
          </div>
        </section>

        <SystemsSection />
        <CaseStudiesSlider />
        <PartnersCarousel />
        
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                <div className="w-16 h-16 bg-[#ECB629]/20 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Данни, не предположения</h3>
                <p className="text-slate-300">
                  Всяко решение се базира на конкретни данни и измерими резултати.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                <div className="w-16 h-16 bg-[#ECB629]/20 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Автоматизация</h3>
                <p className="text-slate-300">
                  Системи, които работят за вас 24/7, без да изискват постоянно внимание.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                <div className="w-16 h-16 bg-[#ECB629]/20 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Предвидими резултати</h3>
                <p className="text-slate-300">
                  Знаете точно какво да очаквате и кога да го очаквате.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
}
