'use client'

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { Shield, Calendar, FileText } from "lucide-react";
import Link from "next/link";

export default function TermsClient() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="pt-16">
        {/* Modern Hero Section */}
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
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-white">Как работим заедно?</span><br />
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  Правилата на играта
                </span>
              </motion.h1>

              <motion.div
                className="mb-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                  Ненавиждам юридическия език колкото и вие. Затова ето условията на нашето сътрудничество 
                  обяснени на човешки език:
                </p>
                <div className="bg-gray-800/50 border border-yellow-400/30 rounded-xl p-6 mb-6">
                  <p className="text-lg text-yellow-300 italic">
                    "Стефане, какво точно ще правиш, как ще плащам и какво се случва ако нещо не стане?"
                  </p>
                </div>
                <p className="text-lg text-gray-300">
                  <span className="text-yellow-400 font-semibold">Всичко тук долу</span> - 
                  без адвокатски боклуци, само ясни правила за двамата ни.
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
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-gray-700/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="prose prose-lg prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <FileText className="w-8 h-8 text-yellow-400" />
                    1. Как започва всичко?
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Първо, представянето: ние сме Pravda ST Agency и помагаме на фирми да растат системно. 
                    Ако използваш някоя от <Link href="/services" className="text-yellow-400 hover:text-yellow-300 underline">услугите ни</Link>, 
                    това означава че приемаш правилата тук долу.
                  </p>
                  <p className="text-gray-300 mb-8">
                    Няма скрито писмо. Всичко е тук. За това как пазим данните ти, прочети 
                    <Link href="/privacy" className="text-yellow-400 hover:text-yellow-300 underline"> политиката за поверителност</Link>.
                    А ако искаш да <Link href="/about" className="text-yellow-400 hover:text-yellow-300 underline">научиш повече за нас</Link> - и това е там.
                  </p>

                  <h2 className="text-3xl font-bold text-white mb-6">2. Какво правим за теб?</h2>
                  <p className="text-gray-300 mb-4">Имаме 4 основни системи, които помагат на фирмите да растат:</p>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• <Link href="/services/seo-struktor" className="text-yellow-400 hover:text-yellow-300 underline">SEO Struktor™</Link> - Прави те номер 1 в Google</li>
                    <li>• <Link href="/services/clientomat" className="text-yellow-400 hover:text-yellow-300 underline">Clientomat™</Link> - Автоматизира цялата работа с клиенти</li>
                    <li>• <Link href="/services/clickstarter" className="text-yellow-400 hover:text-yellow-300 underline">Clickstarter™</Link> - Прави рекламите да работят, а не да горят пари</li>
                    <li>• <Link href="/services/trendlab" className="text-yellow-400 hover:text-yellow-300 underline">Trendlab™</Link> - Създава съдържание, което хората искат да четат</li>
                    <li>• Консултации когато се чудиш какво да правиш</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">3. Какво правим ние?</h2>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• Свършваме работата в договорения срок (не обещаваме невъзможно)</li>
                    <li>• Правим всичко качествено - не сме от евтините, но сме от добрите</li>
                    <li>• Всеки месец ти казваме какво сме направили и какви са резултатите</li>
                    <li>• Не споделяме бизнес информацията ти с никого</li>
                    <li>• Отговаряме на въпросите ти и поправяме ако нещо се счупи</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">4. Какво очаквам от теб?</h2>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• Да ни дадеш информацията, от която се нуждаем за работата</li>
                    <li>• Да плащаш в срок (без това не можем да работим)</li>
                    <li>• Да ни дадеш достъп до сайта/Facebook/където трябва да работим</li>
                    <li>• Да си отзивчив когато имаме въпроси</li>
                    <li>• Да ни информираш ако нещо се промени в бизнеса</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">5. За парите</h2>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• Всеки проект има своя цена - зависи какво точно искаш</li>
                    <li>• Можем да се разберем за месечно или еднократно плащане</li>
                    <li>• Работим само в лева - не се занимаваме с валута</li>
                    <li>• Ако закъснееш с плащането, ще има лихва 0.1% на ден (не е лично, просто трябва)</li>
                    <li>• Цените са без ДДС - ще го добавим в фактурата</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">6. Ако решим да спрем</h2>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• И двамата можем да кажем "стоп" с 30 дни предизвестие</li>
                    <li>• Ако някой нарушава правилата - можем да спрем веднага</li>
                    <li>• Ако си платил за работа, която още не сме свършили - връщаме парите</li>
                    <li>• Работата, която сме направили, остава наша докато не се разплатим</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">7. За отговорностите</h2>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• Не отговаряме за неща извън контрола ни (Google алгоритми, кризи, вируси...)</li>
                    <li>• Гарантираме работата си 3 месеца - ако се счупи нещо, поправяме го</li>
                    <li>• Не можем да ти гарантираме колко точно пари ще направиш (никой не може)</li>
                    <li>• Ако стане някаква беля, максимум ще ти върнем колкото си ни платил</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">8. За тайните</h2>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• Не споделяме информацията за твоя бизнес с никого</li>
                    <li>• Ти също не споделяш нашите методи с конкуренцията</li>
                    <li>• Това важи дори и след като спрем да работим заедно</li>
                    <li>• Изключение е само ако някой съд ни задължи или ти ни дадеш разрешение</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">9. Къде решаваме споровете?</h2>
                  <p className="text-gray-300 mb-8">
                    Всичко се решава по българските закони и в българските съдилища. 
                    (Надяваме се никога да не стигнем дотам - предпочитаме да си говорим като хора!)
                    А ако искаш да видиш как работим с други клиенти, виж <Link href="/case-studies" className="text-yellow-400 hover:text-yellow-300 underline">резултатите тук</Link>.
                  </p>

                  <h2 className="text-3xl font-bold text-white mb-6">10. Как да ни намериш</h2>
                  <div className="text-gray-300 space-y-2">
                    <p><strong>Pravda ST Agency</strong></p>
                    <p>📍 ул. Дебър №58, Варна, България</p>
                    <p>📧 Email: contact@pravdagency.eu</p>
                    <p>📞 Телефон: +359 879 282 299</p>
                    <p className="text-sm mt-4 text-gray-400 italic">
                      (Отговаряме всеки ден освен неделя - офисът не работи в почивни дни)
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Human CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 md:w-72 md:h-72 bg-yellow-400/10 rounded-full blur-3xl"
              animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
                Готов да работим заедно? <span className="text-yellow-400">Да започваме!</span>
              </motion.h2>

              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Прочете си правилата, но не се притеснявай - съм нормален човек и решаваме всичко с разговор.
                <br /><br />
                <span className="text-yellow-400 font-semibold">Готов си? Започваме с 30-минутен безплатен разговор.</span>
              </motion.p>

              <motion.a
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-yellow-400/25"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Започваме разговора</span>
              </motion.a>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}