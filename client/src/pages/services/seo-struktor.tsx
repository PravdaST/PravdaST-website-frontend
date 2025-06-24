import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Search, Target, TrendingUp, Users, ArrowRight, FunnelIcon, BarChart3, Shield, Star } from "lucide-react";
import { SeoStruktorBackground } from "@/components/SeoStruktorBackground";

export default function SeoStruktor() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <SeoStruktorBackground />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Вашите конкуренти не са по-добри.{" "}
              <span className="text-[var(--pravdast-yellow)]">
                Просто имат по-добра система.
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              В Google битката се печели не от най-големия, а от най-добре структурирания. SEO Struktor™ изгражда вашето онлайн присъствие като инженерно съоръжение, проектирано да доминира в търсенето по предвидим и измерим начин.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 px-8 py-4 text-lg font-semibold"
              >
                Изпреварете конкуренцията
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Философията Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              За да е стабилна една сграда, тя се нуждае от инженерен план.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Лява колона - Хаотичен подход */}
              <div className="space-y-6">
                <div className="relative p-8 bg-slate-700/50 rounded-lg border border-red-500/30">
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-6 gap-2 h-full p-4">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="bg-red-400 rounded-sm h-4"
                          style={{
                            transform: `rotate(${Math.random() * 90}deg) translate(${Math.random() * 20}px, ${Math.random() * 20}px)`,
                          }}
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-4 text-red-400">Стандартният подход</h3>
                    <p className="text-gray-300">
                      Повечето уебсайтове се развиват хаотично – добавя се страница тук, пише се статия там. Липсва единна, централна структура. Точно това е причината резултатите да са непредсказуеми и краткотрайни.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Дясна колона - Структуриран подход */}
              <div className="space-y-6">
                <div className="relative p-8 bg-slate-700/50 rounded-lg border border-[var(--pravdast-yellow)]/30">
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-4 gap-4 h-full p-4">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="bg-[var(--pravdast-yellow)] rounded-sm h-4"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: i * 0.1,
                            duration: 0.5,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-4 text-[var(--pravdast-yellow)]">Нашият подход</h3>
                    <p className="text-gray-300">
                      Ние подхождаме към вашия сайт като архитекти. Преди да поставим и една „тухла" (съдържание), ние създаваме цялостния инженерен план (SEO Struktor™), който гарантира, че всеки елемент работи в синхрон с останалите, за да се постигне крайната цел – доминация в Google.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Инженерен процес Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              От основите до покрива: Нашият четирифазен процес на изграждане
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Вертикална линия */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--pravdast-yellow)]/30"></div>
              
              <div className="space-y-12">
                {[
                  {
                    phase: "Фаза 0",
                    title: "Здравият фундамент (Pagekraft™)",
                    description: "Преди да строим, проверяваме терена. Ако вашият сайт е бавен или технически неизправен, ние го изграждаме наново. Това е фундаментът, без който всяка конструкция е нестабилна.",
                    icon: <Search className="h-6 w-6" />
                  },
                  {
                    phase: "Фаза 1",
                    title: "Архитектурен план",
                    description: "Проектираме перфектната вътрешна архитектура, за да може Google лесно да „разбере" и оцени стойността на вашия сайт. Това е чертежът, който следваме.",
                    icon: <Target className="h-6 w-6" />
                  },
                  {
                    phase: "Фаза 2", 
                    title: "Архитектура на съдържанието",
                    description: "Създаваме съдържание, което отговаря на въпросите на клиентите ви и демонстрира вашата експертиза. Всяка страница е структурен елемент, който допринася за здравината и стойността на цялата сграда.",
                    icon: <Users className="h-6 w-6" />
                  },
                  {
                    phase: "Фаза 3",
                    title: "Външен авторитет", 
                    description: "Систематично изграждаме репутацията на вашия сайт в интернет, превръщайки го в авторитетен източник. Това му придава по-висока стойност и стабилност в очите на Google и пазара.",
                    icon: <TrendingUp className="h-6 w-6" />
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-start gap-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {/* Икона */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-[var(--pravdast-yellow)] text-black rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    
                    {/* Съдържание */}
                    <div className="flex-1 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                      <div className="mb-2">
                        <span className="text-sm text-[var(--pravdast-yellow)] font-semibold">{item.phase}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-gray-300 italic">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Очаквани резултати Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Крайният резултат: Повече от просто "позиции"
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <FunnelIcon className="h-8 w-8" />,
                title: "Предвидим поток от качествени запитвания",
                description: "от клиенти, които активно търсят вашите решения."
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "Дълготраен дигитален актив",
                description: "с нарастваща стойност, който работи за вас 24/7."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Намалена зависимост",
                description: "от постоянни и рискови рекламни бюджети."
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Установен пазарен авторитет",
                description: "и разпознаваемост на вашия бранд като експерт в нишата."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 bg-slate-700/50 rounded-lg border border-slate-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--pravdast-yellow)]/20 rounded-lg flex items-center justify-center">
                  <div className="text-[var(--pravdast-yellow)]">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Структура на инвестицията Section */}
      <section className="py-16 bg-slate-900 relative">
        {/* Blueprint grid background */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 120 }).map((_, i) => (
              <div key={i} className="border-l border-[var(--pravdast-yellow)]"></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Структура на инвестицията
            </h2>
            
            <div className="space-y-8">
              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-[var(--pravdast-yellow)]">1. Персонализирано решение</h3>
                <p className="text-gray-300 leading-relaxed">
                  Всяка система SEO Struktor™ се проектира и изгражда спрямо уникалните цели и състояние на вашия бизнес. Ние не предлагаме готови пакети.
                </p>
              </div>
              
              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-[var(--pravdast-yellow)]">2. Бюджетна рамка</h3>
                <p className="text-gray-300 leading-relaxed">
                  За ориентация, базовите инженерни проекти започват от <span className="text-white font-semibold">1980 лв./месечно</span>.
                </p>
              </div>
              
              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-[var(--pravdast-yellow)]">3. Техническа спецификация</h3>
                <p className="text-gray-300 leading-relaxed">
                  Финалната инвестиция се определя след задължителна техническа диагностика. Вие получавате детайлно инженерно предложение, в което всеки компонент е ясно описан и стойностен.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Финален CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Готови ли сте да спрете да импровизирате?
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Нашият инженерен процес е задълбочен и изисква пълна отдаденост. Затова работим с <span className="text-white font-semibold">ограничен брой нови клиенти всеки месец</span>, за да гарантираме качество и реални резултати.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Първата стъпка е нашата експертна диагностика. С нейна помощ ще научите повече за скритите проблеми на вашия сайт, отколкото повечето агенции могат да ви кажат след месеци работа.
              </p>
            </div>
            
            <div className="pt-8">
              <Button 
                size="lg" 
                className="bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 px-12 py-6 text-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Кандидатствайте за диагностика
              </Button>
              
              <p className="text-sm text-gray-400 mt-4">
                Ще се свържем с вас в рамките на 48 часа, ако имаме свободен капацитет за този месец.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}