// Server Component Footer - optimized for performance
import Link from "next/link"

export function FooterServer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <div className="text-2xl font-bold text-[#ECB628] mb-4">
              PRAVDA ST
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Превръщаме хаоса в предсказуеми системи. Бизнес инженеринг за измерим растеж.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/seo-struktor" className="text-gray-400 hover:text-[#ECB628] transition-colors">SEO Struktor™</Link></li>
              <li><Link href="/services/trendlab" className="text-gray-400 hover:text-[#ECB628] transition-colors">Trendlab™</Link></li>
              <li><Link href="/services/clickstarter" className="text-gray-400 hover:text-[#ECB628] transition-colors">Clickstarter™</Link></li>
              <li><Link href="/services/clientomat" className="text-gray-400 hover:text-[#ECB628] transition-colors">Clientomat™</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-[#ECB628] transition-colors">За нас</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-[#ECB628] transition-colors">Случаи</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-[#ECB628] transition-colors">Блог</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#ECB628] transition-colors">Контакти</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Правна информация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-gray-400 hover:text-[#ECB628] transition-colors">Поверителност</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-[#ECB628] transition-colors">Условия</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/50 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Pravdast. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  )
}