import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Building, Code, TrendingUp, Target, BarChart3, Shield, Zap } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const SeoStruktorNewPage = () => {
  return (
    <>
      <SEOHead 
        title="SEO Struktor™ - Инженерна система за онлайн доминация | Pravdast"
        description="Вашите конкуренти не са по-добри. Просто имат по-добра система. SEO Struktor™ изгражда вашето онлайн присъствие като инженерно съоръжение за предвидими резултати."
        keywords="SEO система, онлайн доминация, Google позиции, SEO услуги България, уеб оптимизация, дигитален маркетинг"
        ogImage="/og-seo-struktor.jpg"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          {/* Engineering Blueprint Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(236,182,40,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(236,182,40,0.08)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60"></div>
            
            {/* Animated Blueprint Elements */}
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 border-2 border-[var(--pravdast-yellow)]/20 rounded-lg"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-24 h-24 border border-[var(--pravdast-yellow)]/15"
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-full h-full border border-[var(--pravdast-yellow)]/10 rounded-full"></div>
            </motion.div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Вашите конкуренти не са по-добри.{" "}
                <span className="text-[var(--pravdast-yellow)]">Просто имат по-добра система.</span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                В Google битката се печели не от най-големия, а от най-добре структурирания. SEO Struktor™ изгражда вашето онлайн присъствие като инженерно съоръжение, проектирано да доминира в търсенето по предвидим и измерим начин.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-[var(--pravdast-yellow)] text-slate-900 hover:bg-amber-400 text-xl font-bold py-6 px-10 rounded-xl shadow-2xl hover:shadow-[0_0_40px_rgba(236,182,40,0.3)] transition-all duration-300"
                  onClick={() => window.open("https://form.typeform.com/to/GXLaGY98", "_blank")}
                >
                  Изпреварете конкуренцията
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                За да е стабилна една сграда, тя се нуждае от инженерен план.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              {/* Left Column - Chaotic Approach */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="mb-8 relative">
                  {/* Chaotic Elements Animation */}
                  <div className="relative h-48 bg-slate-700/50 rounded-2xl p-6 border border-slate-600/50">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-6 h-6 bg-red-400/60 rounded"
                        style={{
                          top: `${Math.random() * 70 + 10}%`,
                          left: `${Math.random() * 70 + 10}%`,
                        }}
                        animate={{
                          rotate: [0, 360],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Повечето уебсайтове се развиват хаотично – добавя се страница тук, пише се статия там. Липсва единна, централна структура. Точно това е причината резултатите да са непредсказуеми и краткотрайни.
                </p>
              </motion.div>

              {/* Right Column - Structured Approach */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-8 relative">
                  {/* Organized Elements Animation */}
                  <div className="relative h-48 bg-slate-700/50 rounded-2xl p-6 border border-[var(--pravdast-yellow)]/30">
                    <div className="grid grid-cols-4 gap-3 h-full">
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="bg-[var(--pravdast-yellow)]/80 rounded"
                          initial={{ scale: 0, rotate: 45 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                            type: "spring",
                            bounce: 0.3
                          }}
                          viewport={{ once: true }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Ние подхождаме към вашия сайт като архитекти. Преди да поставим и една „тухла" (съдържание), ние създаваме цялостния инженерен план (SEO Struktor™), който гарантира, че всеки елемент работи в синхрон с останалите, за да се постигне крайната цел – доминация в Google.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Engineering Process Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                От основите до покрива: Нашият четирифазен процес на изграждане
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {[
                {
                  phase: "Фаза 0",
                  title: "Здравият фундамент (Pagekraft™)",
                  description: "Преди да строим, проверяваме терена. Ако вашият сайт е бавен или технически неизправен, ние го изграждаме наново. Това е фундаментът, без който всяка конструкция е нестабилна.",
                  icon: Search
                },
                {
                  phase: "Фаза 1",
                  title: "Архитектурен план",
                  description: "Проектираме перфектната вътрешна архитектура, за да може Google лесно да „разбере" и оцени стойността на вашия сайт. Това е чертежът, който следваме.",
                  icon: Building
                },
                {
                  phase: "Фаза 2",
                  title: "Архитектура на съдържанието",
                  description: "Създаваме съдържание, което отговаря на въпросите на клиентите ви и демонстрира вашата експертиза. Всяка страница е структурен елемент, който допринася за здравината и стойността на цялата сграда.",
                  icon: Code
                },
                {
                  phase: "Фаза 3",
                  title: "Външен авторитет",
                  description: "Систематично изграждаме репутацията на вашия сайт в интернет, превръщайки го в авторитетен източник. Това му придава по-висока стойност и стабилност в очите на Google и пазара.",
                  icon: TrendingUp
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-8 mb-12 last:mb-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[var(--pravdast-yellow)]/20 rounded-xl flex items-center justify-center border border-[var(--pravdast-yellow)]/30">
                      <step.icon className="w-8 h-8 text-[var(--pravdast-yellow)]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-bold text-[var(--pravdast-yellow)] uppercase tracking-wider">{step.phase}</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-[var(--pravdast-yellow)]/50 to-transparent"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expected Results Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Крайният резултат: Повече от просто "позиции"
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Target,
                  title: "Предвидим поток от качествени запитвания",
                  description: "от клиенти, които активно търсят вашите решения."
                },
                {
                  icon: BarChart3,
                  title: "Дълготраен дигитален актив",
                  description: "с нарастваща стойност, който работи за вас 24/7."
                },
                {
                  icon: Shield,
                  title: "Намалена зависимост",
                  description: "от постоянни и рискови рекламни бюджети."
                },
                {
                  icon: Zap,
                  title: "Установен пазарен авторитет",
                  description: "и разпознаваемост на вашия бранд като експерт в нишата."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-6 p-8 bg-slate-700/50 rounded-2xl border border-slate-600/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-[var(--pravdast-yellow)]/20 rounded-lg flex items-center justify-center border border-[var(--pravdast-yellow)]/30 flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-[var(--pravdast-yellow)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-400">✓ {benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Structure Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Структура на инвестицията
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800/50 rounded-3xl p-10 border border-slate-700/50 backdrop-blur-sm">
                {[
                  {
                    number: "1",
                    title: "Персонализирано решение:",
                    description: "Всяка система SEO Struktor™ се проектира и изгражда спрямо уникалните цели и състояние на вашия бизнес. Ние не предлагаме готови пакети."
                  },
                  {
                    number: "2",
                    title: "Бюджетна рамка:",
                    description: "За ориентация, базовите инженерни проекти започват от 1980 лв./месечно."
                  },
                  {
                    number: "3",
                    title: "Техническа спецификация:",
                    description: "Финалната инвестиция се определя след задължителна техническа диагностика. Вие получавате детайлно инженерно предложение, в което всеки компонент е ясно описан и стойностен."
                  }
                ].map((principle, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-6 mb-8 last:mb-0"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 bg-[var(--pravdast-yellow)] text-slate-900 rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                      {principle.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{principle.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Готови ли сте да спрете да импровизирате?
              </motion.h2>
              
              <motion.div
                className="bg-[var(--pravdast-dark)]/5 backdrop-blur-sm rounded-3xl p-10 mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-xl text-[var(--pravdast-dark)]/90 leading-relaxed mb-8">
                  Нашият инженерен процес е задълбочен и изисква пълна отдаденост. Затова работим с <strong>ограничен брой нови клиенти всеки месец</strong>, за да гарантираме качество и реални резултати.
                </p>
                <p className="text-lg text-[var(--pravdast-dark)]/80 leading-relaxed">
                  Първата стъпка е нашата експертна диагностика. С нейна помощ ще научите повече за скритите възможности и проблеми на вашия сайт, отколкото от месеци собствени изследвания.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  className="bg-[var(--pravdast-dark)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-dark)]/90 text-xl font-bold py-6 px-12 rounded-xl shadow-2xl hover:shadow-xl transition-all duration-300 mb-6"
                  onClick={() => window.open("https://form.typeform.com/to/GXLaGY98", "_blank")}
                >
                  Кандидатствайте за диагностика
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                
                <p className="text-[var(--pravdast-dark)]/70 text-sm">
                  Ще се свържем с вас в рамките на 48 часа, ако имаме свободен капацитет за този месец.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SeoStruktorNewPage;