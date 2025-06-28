import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Calendar } from "lucide-react";
import { pageSEOData } from "@/data/seo-pages";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead
        seo={pageSEOData.privacy}
        pageSlug="privacy"
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
                  <Lock className="w-4 h-4 text-[#ECB629]" />
                  <span className="text-sm text-gray-300">
                    <span className="text-[#ECB629] font-bold">GDPR</span> съвместимост
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Политика за <br />
                <span className="text-[#ECB629] relative">
                  поверителност
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
                Как събираме, използваме и защитаваме вашите лични данни. Пълна прозрачност и съответствие с GDPR.
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
                    <Shield className="w-8 h-8 text-[#ECB629]" />
                    1. Обща информация
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Pravdast Agency ("ние", "нашият", "нас") зачита поверителността на вашите лични данни и се ангажира да ги защитава в съответствие с приложимото законодателство, включително Общия регламент за защита на данните (GDPR).
                  </p>
                  <p className="text-gray-300 mb-8">
                    Настоящата политика обяснява как събираме, използваме, съхраняваме и защитаваме вашите лични данни.
                  </p>

                  <h2 className="text-3xl font-bold text-white mb-6">2. Какви данни събираме</h2>
                  <p className="text-gray-300 mb-4">Събираме следните видове лични данни:</p>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• <strong>Контактна информация:</strong> име, имейл адрес, телефонен номер</li>
                    <li>• <strong>Бизнес информация:</strong> име на компанията, уебсайт, позиция</li>
                    <li>• <strong>Комуникация:</strong> съобщения и кореспонденция с нас</li>
                    <li>• <strong>Технически данни:</strong> IP адрес, тип браузър, време на посещение</li>
                    <li>• <strong>Аналитични данни:</strong> поведение на сайта чрез Google Analytics и Klaviyo</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">3. Как събираме данните</h2>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• <strong>Директно от вас:</strong> чрез контактни форми, имейл или телефон</li>
                    <li>• <strong>Автоматично:</strong> чрез cookies и аналитични инструменти</li>
                    <li>• <strong>От трети страни:</strong> публично достъпна бизнес информация</li>
                    <li>• <strong>Социални мрежи:</strong> ако се свържете с нас чрез социални платформи</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">4. За какво използваме данните</h2>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• <strong>Предоставяне на услуги:</strong> изпълнение на договори и проекти</li>
                    <li>• <strong>Комуникация:</strong> отговаряне на запитвания и поддръжка</li>
                    <li>• <strong>Маркетинг:</strong> изпращане на релевантна информация (с ваше съгласие)</li>
                    <li>• <strong>Подобряване:</strong> анализ и оптимизация на нашите услуги</li>
                    <li>• <strong>Правни задължения:</strong> спазване на приложимото законодателство</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">5. Правна основа за обработката</h2>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• <strong>Договор:</strong> изпълнение на услуги по договор</li>
                    <li>• <strong>Съгласие:</strong> за маркетингови комуникации</li>
                    <li>• <strong>Законен интерес:</strong> подобряване на услугите и анализи</li>
                    <li>• <strong>Правно задължение:</strong> спазване на законодателството</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">6. Споделяне на данни</h2>
                  <p className="text-gray-300 mb-4">Споделяме вашите данни единствено в следните случаи:</p>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• <strong>Доставчици на услуги:</strong> Google Analytics, Klaviyo, Typeform</li>
                    <li>• <strong>Правни изисквания:</strong> при законово задължение</li>
                    <li>• <strong>Бизнес партньори:</strong> само с ваше изрично съгласие</li>
                    <li>• <strong>Защита на права:</strong> при защита на наши или ваши права</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">7. Съхранение на данните</h2>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• <strong>Клиентски данни:</strong> до 7 години след прекратяване на договора</li>
                    <li>• <strong>Маркетингови данни:</strong> до оттегляне на съгласието</li>
                    <li>• <strong>Аналитични данни:</strong> 26 месеца (Google Analytics стандарт)</li>
                    <li>• <strong>Технически логове:</strong> до 12 месеца</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">8. Вашите права</h2>
                  <p className="text-gray-300 mb-4">Съгласно GDPR имате следните права:</p>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• <strong>Достъп:</strong> да поискате копие от вашите данни</li>
                    <li>• <strong>Поправка:</strong> да коригирате неточни данни</li>
                    <li>• <strong>Изтриване:</strong> да поискате изтриване на данните</li>
                    <li>• <strong>Ограничаване:</strong> да ограничите обработката</li>
                    <li>• <strong>Преносимост:</strong> да получите данните в структуриран формат</li>
                    <li>• <strong>Възражение:</strong> да възразите срещу обработката</li>
                    <li>• <strong>Жалба:</strong> да подадете жалба до КЗД</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">9. Cookies и проследяване</h2>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• <strong>Необходими cookies:</strong> за функционалност на сайта</li>
                    <li>• <strong>Аналитични cookies:</strong> Google Analytics за статистика</li>
                    <li>• <strong>Маркетингови cookies:</strong> Klaviyo за персонализация</li>
                    <li>• <strong>Управление:</strong> можете да ги контролирате от браузъра</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">10. Сигурност</h2>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• SSL криптиране на всички комуникации</li>
                    <li>• Регулярни backup-и и мониторинг</li>
                    <li>• Ограничен достъп до данните</li>
                    <li>• Съответствие със стандартите за сигурност</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">11. Контакт за въпроси относно данните</h2>
                  <div className="text-gray-300 space-y-2">
                    <p>За всякакви въпроси относно обработката на вашите лични данни:</p>
                    <p><strong>Email:</strong> contact@pravdagency.eu</p>
                    <p><strong>Телефон:</strong> +359 879 282 299</p>
                    <p><strong>Адрес:</strong> ул. Дебър №58, Варна, България</p>
                  </div>

                  <div className="mt-8 p-6 bg-slate-700/50 rounded-lg border border-[#ECB629]/20">
                    <div className="flex items-start gap-3">
                      <Eye className="w-6 h-6 text-[#ECB629] mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">Важна забележка</h3>
                        <p className="text-gray-300 text-sm">
                          Тази политика може да бъде актуализирана. При съществени промени ще ви уведомим по имейл или чрез съобщение на сайта. Препоръчваме да преглеждате периодично настоящата страница.
                        </p>
                      </div>
                    </div>
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
                Вашата поверителност е приоритет
              </motion.h2>
              
              <motion.p
                className="text-xl text-black/80 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Свържете се с нас за въпроси относно вашите данни или започнете сигурно сътрудничество.
              </motion.p>

              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Lock className="w-5 h-5" />
                <span>Свържете се с нас</span>
              </motion.a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}