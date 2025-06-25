import { HeroSection } from "@/components/hero-section-simple";
import { Button } from "@/components/ui/button";

// Simple Navigation Component
const SimpleNav = () => (
  <nav className="w-full bg-slate-900 border-b border-[#ECB629]/20 relative z-50">
    <div className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-[#ECB629]">PRAVDA ST</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-white hover:text-[#ECB629]">
            Начало
          </a>
          <a href="/services" className="text-white hover:text-[#ECB629]">
            Услуги
          </a>
          <a href="/about" className="text-white hover:text-[#ECB629]">
            За нас
          </a>
          <a href="/contact" className="text-white hover:text-[#ECB629]">
            Контакти
          </a>
          <Button className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90">
            ЗАПОЧНЕТЕ СЕГАа
          </Button>
        </div>
      </div>
    </div>
  </nav>
);

// Simple Footer Component
const SimpleFooter = () => (
  <footer className="py-16 bg-slate-900 border-t border-[#ECB629]/20">
    <div className="container mx-auto px-6">
      <div className="text-center">
        <div className="text-2xl font-bold text-[#ECB629] mb-4">PRAVDA ST</div>
        <p className="text-gray-300 mb-6">
          Бизнес инженерни системи за предсказуем растеж
        </p>
        <div className="space-y-2 text-gray-400">
          <p>📧 contact@pravdast.agency</p>
          <p>📱 +359 879 282 299</p>
          <p>📍 гр.Варна ул. Дебър №58</p>
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <SimpleNav />
      <HeroSection />

      {/* Simple Partners Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Партньори и платформи
            </h2>
            <p className="text-gray-300">
              Работим с водещите технологии за най-добри резултати
            </p>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-20 bg-[#ECB628]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-black mb-6">
              Приемаме до 3 нови партньори за следващото тримесечие
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Ограничаваме броя клиенти, за да гарантираме качество и внимание
              към всеки проект.
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-black/90">
              Започнете вашия проект
            </Button>
          </div>
        </div>
      </section>

      <SimpleFooter />
    </div>
  );
}
