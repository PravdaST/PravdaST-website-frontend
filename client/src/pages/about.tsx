import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { Target, Shield, Zap, Users, Award, TrendingUp, ArrowRight } from "lucide-react";
import { useRef } from "react";

const values = [
  {
    icon: Target,
    title: "Прецизност",
    description: "Всяко решение е базирано на данни, а не на предположения. Измерваме всичко и оптимизираме постоянно."
  },
  {
    icon: Shield,
    title: "Прозрачност",
    description: "Никакви скрити такси или неясни процеси. Знаете точно какво правим и защо го правим."
  },
  {
    icon: Zap,
    title: "Ефективност",
    description: "Не губим време с експерименти. Прилагаме проверени системи, които дават предвидими резултати."
  }
];

const stats = [
  { number: "50+", label: "Успешни проекта" },
  { number: "300%", label: "Средно подобрение" },
  { number: "95%", label: "Задоволени клиенти" },
  { number: "24/7", label: "Работещи системи" }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      {/* Modern Hero Section */}
      <section ref={ref} className="pt-32 pb-24 relative overflow-hidden">
        {/* Enhanced Technical Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="var(--pravdast-yellow)" opacity="0.4"/>
                <path d="M0,20 L40,20 M20,0 L20,40" stroke="var(--pravdast-yellow)" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="5" cy="5" r="0.5" fill="var(--pravdast-yellow)" opacity="0.6"/>
                <circle cx="35" cy="35" r="0.5" fill="var(--pravdast-yellow)" opacity="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-hero-pattern)" />
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--pravdast-yellow)]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--pravdast-yellow)]/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status badge */}
            <motion.div
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-slate-800/60 backdrop-blur-sm rounded-full border border-[var(--pravdast-yellow)]/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="w-3 h-3 bg-[var(--pravdast-yellow)] rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-[var(--pravdast-yellow)] rounded-full animate-ping opacity-30"></div>
              </div>
              <span className="text-gray-300 text-sm font-medium">
                <span className="text-[var(--pravdast-yellow)] font-semibold">Експерти</span> - Над 10 години опит
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              За нас и нашия подход
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ние не сме обикновена агенция. Ние сме инженери на бизнес системи, които превръщат хаоса в предвидими резултати.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  className="bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                >
                  <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      Започнете диагностиката
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Connection line from hero */}
        <motion.div
          className="w-0.5 h-16 bg-gradient-to-b from-[var(--pravdast-yellow)] to-slate-600 mx-auto mb-16"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8 }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-600/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-[var(--pravdast-yellow)] mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-6 py-3 bg-[var(--pravdast-yellow)]/10 rounded-full border border-[var(--pravdast-yellow)]/20 mb-8">
              <span className="text-[var(--pravdast-yellow)] text-sm font-semibold tracking-wider">НАШИТЕ ПРИНЦИПИ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Как работим
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Три принципа, които ръководят всяко наше решение
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="relative p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-600/30 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--pravdast-yellow)]/10 to-[var(--pravdast-yellow)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--pravdast-yellow)]/10 rounded-full -translate-y-12 translate-x-12"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[var(--pravdast-yellow)]/20 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-[var(--pravdast-yellow)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-6 py-3 bg-[var(--pravdast-yellow)]/10 rounded-full border border-[var(--pravdast-yellow)]/20 mb-8">
              <span className="text-[var(--pravdast-yellow)] text-sm font-semibold tracking-wider">ЕКИПЪТ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Кой стои зад системите
            </h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative p-8 bg-slate-800/40 backdrop-blur-sm rounded-3xl border border-slate-600/30 overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--pravdast-yellow)]/10 to-[var(--pravdast-yellow)]/5 opacity-50"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--pravdast-yellow)]/10 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Екипът на Pravdast</h3>
                <p className="text-[var(--pravdast-yellow)] font-semibold mb-6">Консултанти по системи за растеж</p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Специалисти с над 10 години опит в изграждането на автоматизирани системи за растеж в различни индустрии.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Бизнес инженеринг", "Системна автоматизация", "Данни и анализи", "Процесна оптимизация"].map((expertise, index) => (
                    <div key={index} className="flex items-center gap-2 justify-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"></div>
                      <span className="text-gray-300 text-sm">{expertise}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative p-12 bg-slate-800/40 backdrop-blur-sm rounded-3xl border border-[var(--pravdast-yellow)]/30 overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--pravdast-yellow)]/10 to-[var(--pravdast-yellow)]/5 opacity-50"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                  Готови за системен подход?
                </h2>
                <p className="text-xl text-gray-300 mb-12">
                  Заявете безплатна диагностика и открийте къде точно губите потенциал за растеж
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      className="bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                    >
                      <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                        <span className="relative z-10 flex items-center gap-2">
                          Започнете диагностиката
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      </a>
                    </Button>
                  </motion.div>
                  
                  <Button
                    asChild
                    variant="outline"
                    className="border-[var(--pravdast-yellow)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-yellow)]/10 px-8 py-4 text-lg font-semibold transition-all duration-300"
                  >
                    <a href="/contact">Свържете се с нас</a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}