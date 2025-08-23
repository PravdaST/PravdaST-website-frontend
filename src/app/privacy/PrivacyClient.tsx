'use client'

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Calendar } from "lucide-react";
import Link from "next/link";

export default function PrivacyClient() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 md:w-72 md:h-72 bg-yellow-400/10 rounded-full blur-3xl"
              animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-48 h-48 md:w-96 md:h-96 bg-yellow-400/5 rounded-full blur-3xl"
              animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gray-800/50 border border-yellow-400/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-300">
                    <span className="text-yellow-400 font-bold">GDPR</span> съвместимост
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-white">Политика за</span><br />
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  поверителност
                </span>
              </motion.h1>

              <motion.div
                className="mb-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                  Как събираме, използваме и защитаваме вашите лични данни. 
                  Пълна прозрачност и съответствие с GDPR.
                </p>
                <div className="bg-gray-800/50 border border-yellow-400/30 rounded-xl p-6 mb-6">
                  <p className="text-lg text-yellow-300 italic">
                    "Вашите данни са в безопасност при нас" <br />
                    "Прозрачност и контрол над личната информация"
                  </p>
                </div>
                <p className="text-lg text-gray-300">
                  <span className="text-yellow-400 font-semibold">Всичко обяснено ясно и честно:</span>
                </p>
              </motion.div>

              <motion.div
                className="text-sm text-gray-400 flex items-center justify-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Calendar className="w-4 h-4" />
                <span>Последна актуализация: Декември 2024</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 md:w-72 md:h-72 bg-yellow-400/5 rounded-full blur-3xl"
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/30 shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="prose prose-lg prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Shield className="w-8 h-8 text-yellow-400" />
                    1. Обща информация
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Pravda ST Agency ("ние", "нашият", "нас") зачита поверителността на вашите лични данни и се ангажира да ги защитава в съответствие с приложимото законодателство, включително Общия регламент за защита на данните (GDPR). Научете повече <Link href="/about" className="text-yellow-400 hover:text-yellow-300 underline">за нас</Link> и нашите ценности.
                  </p>
                  <p className="text-gray-300 mb-8">
                    Настоящата политика обяснява как събираме, използваме, съхраняваме и защитаваме вашите лични данни при използването на нашите <Link href="/services" className="text-yellow-400 hover:text-yellow-300 underline">услуги</Link>. За общи условия прочетете <Link href="/terms" className="text-yellow-400 hover:text-yellow-300 underline">условията за ползване</Link>.
                  </p>

                  <h2 className="text-3xl font-bold text-white mb-6">2. Какви данни събираме</h2>
                  <p className="text-gray-300 mb-4">Събираме следните видове лични данни при предоставянето на нашите <Link href="/services" className="text-yellow-400 hover:text-yellow-300 underline">услуги</Link>:</p>
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
                    <p>За всякакви въпроси относно обработката на вашите лични данни или за да се <Link href="/contact" className="text-yellow-400 hover:text-yellow-300 underline">свържете с нас</Link>:</p>
                    <p><strong>Email:</strong> contact@pravdagency.eu</p>
                    <p><strong>Телефон:</strong> +359 879 282 299</p>
                    <p><strong>Адрес:</strong> ул. Дебър №58, Варна, България</p>
                    <p>Научете повече за успешните ни проекти в <Link href="/case-studies" className="text-yellow-400 hover:text-yellow-300 underline">казусите</Link>.</p>
                  </div>

                  <div className="mt-8 p-6 bg-gray-800/50 rounded-lg border border-yellow-400/20">
                    <div className="flex items-start gap-3">
                      <Eye className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
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
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 md:w-72 md:h-72 bg-yellow-400/10 rounded-full blur-3xl"
              animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-48 h-48 md:w-96 md:h-96 bg-yellow-400/5 rounded-full blur-3xl"
              animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Вашата <span className="text-yellow-400">поверителност</span> е приоритет
              </motion.h2>

              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Свържете се с нас за въпроси относно вашите данни или започнете сигурно сътрудничество.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 items-center justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Lock className="w-5 h-5" />
                  <span>Свържете се с нас</span>
                </motion.a>
                
                <motion.a
                  href="/terms"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800/80 text-white font-medium rounded-lg border border-gray-700 hover:bg-gray-700/80 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <span>Общи условия</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}