export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { href: "/services/seo-struktor", label: "SEO Struktor™" },
    { href: "/services/clientomat", label: "Clientomat™" },
    { href: "/services/sales-engine", label: "Sales Engine™" },
    { href: "/services/trendlab", label: "Trendlab™" }
  ];

  const company = [
    { href: "/about", label: "За компанията" },
    { href: "/case-studies", label: "Казуси" },
    { href: "/blog", label: "Блог" },
    { href: "/faq", label: "FAQ" }
  ];

  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#ECB628]">Pravdast</h3>
            <p className="text-gray-300 mb-4">
              Бизнес инженерна платформа за системен растеж и автоматизация на процесите.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>България, София</p>
              <p>info@pravdagency.eu</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#ECB628] transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">За нас</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#ECB628] transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Контакти</h4>
            <div className="space-y-4">
              <a
                href="/contact"
                className="bg-[#ECB628] hover:bg-[#ECB628]/90 text-black px-6 py-2 rounded-lg font-semibold inline-block transition-colors"
              >
                Свържи се
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Pravdast. Всички права запазени.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Поверителност
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm">
                Условия
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}