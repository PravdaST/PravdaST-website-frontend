import { Metadata } from 'next';
import { ClickstarterBackground } from '@/components/backgrounds/ClickstarterBackground';
import { EnhancedSEO } from '@/components/seo/EnhancedSEO';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { CTASection } from '@/components/CTASection';
import { BackToTop } from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Clickstarter - Управление на онлайн репутация | Pravda Agency',
  description: 'Защитете и подобрете онлайн репутацията на вашия бизнес. Следене, анализ и управление на отзиви и споменавания в реално време.',
  keywords: [
    'управление на репутация',
    'онлайн репутация',
    'отзиви',
    'споменавания',
    'мониторинг',
    'Clickstarter',
    'България'
  ],
  openGraph: {
    title: 'Clickstarter - Управление на онлайн репутация',
    description: 'Защитете и подобрете онлайн репутацията на вашия бизнес.',
    url: 'https://www.pravdagency.eu/services/clickstarter',
    images: [
      {
        url: '/og-images/clickstarter.svg',
        width: 1200,
        height: 630,
        alt: 'Clickstarter - Управление на онлайн репутация'
      }
    ]
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/services/clickstarter'
  }
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Clickstarter',
  description: 'Управление на онлайн репутация и мониторинг',
  provider: {
    '@type': 'Organization',
    name: 'Pravda Agency',
    url: 'https://www.pravdagency.eu'
  },
  serviceType: 'Online Reputation Management',
  areaServed: 'Bulgaria',
  availableLanguage: 'Bulgarian'
};

export default function ClickstarterPage() {
  return (
    <>
      <EnhancedSEO
        title="Clickstarter - Управление на онлайн репутация | Pravda Agency"
        description="Защитете и подобрете онлайн репутацията на вашия бизнес. Следене, анализ и управление на отзиви и споменавания в реално време."
        canonical="https://www.pravdagency.eu/services/clickstarter"
        ogImage="/og-images/clickstarter.svg"
      />

      <ServiceSchema data={serviceSchema} />

      <div className="min-h-screen bg-slate-900">
        <ClickstarterBackground />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                <span className="text-[#ECB629]">Clickstarter</span>
                <br />
                Управление на репутация
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8">
                Защитете и подобрете онлайн репутацията на вашия бизнес
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#ECB629] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#ECB629]/90 transition-colors">
                  Започнете сега
                </button>
                <button className="border border-[#ECB629] text-[#ECB629] px-8 py-4 rounded-lg font-semibold hover:bg-[#ECB629]/10 transition-colors">
                  Научете повече
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
                Защо да изберете <span className="text-[#ECB629]">Clickstarter</span>?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                  <div className="w-16 h-16 bg-[#ECB629]/20 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl">👁️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">24/7 Мониторинг</h3>
                  <p className="text-slate-300">
                    Следим всички споменавания на вашия бранд в реално време
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                  <div className="w-16 h-16 bg-[#ECB629]/20 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Бърза реакция</h3>
                  <p className="text-slate-300">
                    Моментално известяване при негативни отзиви или споменавания
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                  <div className="w-16 h-16 bg-[#ECB629]/20 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Детайлна аналитика</h3>
                  <p className="text-slate-300">
                    Пълни отчети за вашата онлайн репутация и тенденции
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
        <BackToTop />
      </div>
    </>
  );
}