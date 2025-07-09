import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { motion } from "framer-motion";
import { Shield, Calendar, FileText } from "lucide-react";
import { pageSEOData } from "@/data/seo-pages";

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead
        seo={pageSEOData.terms}
        pageSlug="terms"
      />
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}></div>
            
            {/* Floating elements */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#ECB629]/30 rounded-full"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${25 + (i % 2) * 50}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-slate-800/80 border border-slate-600/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#ECB629]" />
                  <span className="text-sm text-gray-300">
                    <span className="text-[#ECB629] font-bold">Прозрачни</span> условия
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Общи <br />
                <span className="text-[#ECB629] relative">
                  условия
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Условията за ползване на нашите бизнес инженеринг услуги. Прозрачност и яснота във всяко партньорство.
              </motion.p>

              <motion.div
                className="text-sm text-gray-400 flex items-center justify-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Calendar className="w-4 h-4" />
                <span>Последна актуализация: Декември 2024</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="bg-slate-800/50 rounded-2xl p-8 md:p-12 border border-slate-700/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="prose prose-lg prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <FileText className="w-8 h-8 text-[#ECB629]" />
                    1. Общи положения
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Настоящите общи условия регулират предоставянето на бизнес инженеринг услуги от Pravdast Agency (наричано по-долу "Доставчик") на клиентите (наричани по-долу "Клиент").
                  </p>
                  <p className="text-gray-300 mb-8">
                    Използването на нашите услуги означава пълно приемане на настоящите условия.
                  </p>

                  <h2 className="text-3xl font-bold text-white mb-6">2. Услуги</h2>
                  <p className="text-gray-300 mb-4">Доставчикът предоставя следните основни услуги:</p>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• SEO Struktor™ - Системна SEO оптимизация</li>
                    <li>• Clientomat™ - Автоматизация на клиентски процеси</li>
                    <li>• Clickstarter™ - Платени реклами и конверсии</li>
                    <li>• Trendlab™ - Съдържание и брандиране</li>
                    <li>• Консултации и стратегическо планиране</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">3. Задължения на Доставчика</h2>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• Предоставяне на услугите в договорените срокове</li>
                    <li>• Осигуряване на професионално качество на работата</li>
                    <li>• Редовно отчитане на напредъка пред Клиента</li>
                    <li>• Спазване на конфиденциалността на бизнес информацията</li>
                    <li>• Предоставяне на техническа поддръжка в рамките на договора</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">4. Задължения на Клиента</h2>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• Предоставяне на необходимата информация за проекта</li>
                    <li>• Своевременно плащане на договорените суми</li>
                    <li>• Осигуряване на достъп до необходимите системи и платформи</li>
                    <li>• Сътрудничество при изпълнението на проекта</li>
                    <li>• Информиране при промени, които засягат проекта</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">5. Плащания и цени</h2>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• Цените се определят индивидуално за всеки проект</li>
                    <li>• Възможни са месечни или еднократни плащания</li>
                    <li>• Плащанията се извършват в български лева (BGN)</li>
                    <li>• При забавяне на плащането се начислява лихва 0.1% на ден</li>
                    <li>• Всички цени са без включен ДДС (20%)</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">6. Прекратяване на договора</h2>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• Всяка от страните може да прекрати договора с 30 дни предизвестие</li>
                    <li>• При нарушение на условията договорът може да бъде прекратен веднага</li>
                    <li>• Заплатените суми за неизпълнени услуги се възстановяват пропорционално</li>
                    <li>• Интелектуалната собственост остава при Доставчика до пълно плащане</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">7. Отговорности и гаранции</h2>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• Доставчикът не носи отговорност за външни фактори извън контрола му</li>
                    <li>• Гаранцията за услугите е 3 месеца от приключване на проекта</li>
                    <li>• Доставчикът не гарантира конкретни бизнес резултати</li>
                    <li>• Максималната отговорност е ограничена до стойността на договора</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">8. Конфиденциалност</h2>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• Двете страни се задължават да пазят конфиденциалността</li>
                    <li>• Бизнес информацията не се разкрива на трети лица</li>
                    <li>• Задължението за конфиденциалност важи и след прекратяване на договора</li>
                    <li>• Изключения са възможни само със съгласие или по закон</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">9. Приложимо право</h2>
                  <p className="text-gray-300 mb-8">
                    Настоящите условия се регулират от българското законодателство. Всички спорове се решават от компетентните български съдилища.
                  </p>

                  <h2 className="text-3xl font-bold text-white mb-6">10. Контакти</h2>
                  <div className="text-gray-300 space-y-2">
                    <p><strong>Pravdast Agency</strong></p>
                    <p>ул. Дебър №58, Варна, България</p>
                    <p>Email: contact@pravdagency.eu</p>
                    <p>Телефон: +359 879 282 299</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#ECB629] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-black mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Готови за сътрудничество?
              </motion.h2>
              
              <motion.p
                className="text-xl text-black/80 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Започнете с безплатна консултация и изградете успешен бизнес инженеринг проект.
              </motion.p>

              <motion.a
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Shield className="w-5 h-5" />
                <span>Започнете сега</span>
              </motion.a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}