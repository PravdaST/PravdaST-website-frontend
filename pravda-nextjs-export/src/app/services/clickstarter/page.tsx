
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clickstarter™ - PPC Кампании | Pravda Agency',
  description: 'Професионални PPC кампании с Clickstarter™. Google Ads, Facebook Ads и LinkedIn кампании за максимален ROI.',
  keywords: 'PPC, Google Ads, Facebook Ads, LinkedIn Ads, реклама, дигитален маркетинг',
};

export default function ClickstarterPage() {
  return (
    <>
      <Navigation />
      <HeroSection
        subtitle="Clickstarter™"
        title="PPC Кампании за Максимален ROI"
        description="Професионални платени рекламни кампании в Google Ads, Facebook Ads и LinkedIn за бърз растеж на вашия бизнес."
        primaryCTA={{
          text: "Започни кампания",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Виж казуси",
          href: "/case-studies"
        }}
        backgroundGradient="from-green-50 to-emerald-100"
      />

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Защо Clickstarter™?
              </h2>
              <p className="text-xl text-gray-600">
                Професионален подход към платените реклами
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-green-600 text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Точно Таргетиране</h3>
                <p className="text-gray-600">
                  Достигаме точно вашата целева аудитория с прецизно таргетиране.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-green-600 text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Данни-Базирани Решения</h3>
                <p className="text-gray-600">
                  Всяка кампания се базира на анализ на данни и пазарни изследвания.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-green-600 text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Максимален ROI</h3>
                <p className="text-gray-600">
                  Оптимизираме за максимална възвръщаемост на инвестицията.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Платформи за Реклама
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Search кампании</li>
                  <li>• Display мрежа</li>
                  <li>• YouTube реклами</li>
                  <li>• Shopping кампании</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Facebook Ads</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Facebook кампании</li>
                  <li>• Instagram реклами</li>
                  <li>• Messenger боти</li>
                  <li>• Retargeting</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">LinkedIn Ads</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• B2B кампании</li>
                  <li>• Lead Generation</li>
                  <li>• Sponsored Content</li>
                  <li>• InMail кампании</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Готови за Първата Ви PPC Кампания?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Започнете с безплатна консултация и видете как можем да увеличим вашите продажби.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Безплатна Консултация
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
