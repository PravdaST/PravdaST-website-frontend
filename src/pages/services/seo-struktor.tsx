import { motion, useInView } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  BarChart3,
  TrendingDown,
  Crown,
  Zap,
} from "lucide-react";

// Blueprint Background Component
const BlueprintBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {/* Blueprint Grid */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="blueprint-grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
      </svg>
      
      {/* Moving nodes with parallax */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"
          style={{
            left: `${20 + (i * 15)}%`,
            top: `${30 + (i * 8)}%`,
          }}
          animate={{
            x: mousePosition.x * 0.02 * (i % 2 === 0 ? 1 : -1),
            y: mousePosition.y * 0.02 * (i % 2 === 0 ? -1 : 1),
          }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
        />
      ))}
      
      {/* Abstract connecting lines */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        animate={{
          x: mousePosition.x * 0.01,
          y: mousePosition.y * 0.01,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 10 }}
      >
        <path
          d="M 100 200 Q 400 100 800 300 T 1200 200"
          fill="none"
          stroke="var(--pravdast-yellow)"
          strokeWidth="1"
          opacity="0.3"
        />
        <path
          d="M 200 400 Q 600 300 1000 500 T 1400 400"
          fill="none"
          stroke="var(--pravdast-yellow)"
          strokeWidth="1"
          opacity="0.2"
        />
      </motion.svg>
    </div>
  );
};

// Philosophy Section Component
const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            За да е стабилна една сграда, тя се нуждае от инженерен план.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Chaos */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
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
                <h3 className="text-xl font-semibold mb-4 text-red-400 relative z-10">
                  Без система
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Повечето уебсайтове се развиват хаотично – добавя се страница
                тук, пише се статия там. Липсва единна, централна структура.
                Точно това е причината резултатите да са непредсказуеми и
                краткотрайни.
              </p>
            </motion.div>

            {/* Right Column - Structure */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative p-8 bg-slate-700/50 rounded-lg border border-[var(--pravdast-yellow)]/30">
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-6 gap-2 h-full p-4">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="bg-[var(--pravdast-yellow)] rounded-sm h-4"
                        initial={{
                          rotate: Math.random() * 90,
                          x: Math.random() * 20,
                          y: Math.random() * 20,
                        }}
                        animate={isInView ? {
                          rotate: 0,
                          x: 0,
                          y: 0,
                        } : {}}
                        transition={{
                          duration: 2,
                          delay: 0.6 + i * 0.05,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--pravdast-yellow)] relative z-10">
                  Със система
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Ние подхождаме към вашия сайт като архитекти. Преди да
                поставим и една „тухла" (съдържание), ние създаваме цялостния
                инженерен план (SEO Struktor™), който гарантира, че всеки
                елемент работи в синхрон с останалите, за да се постигне
                крайната цел – доминация в Google.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Engineering Process Section Component
const EngineeringProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const phases = [
    {
      number: "0",
      title: "Здравият фундамент (Pagekraft™)",
      description: "Техническа оптимизация и скоростна структура за стабилна основа.",
      icon: "🏗️"
    },
    {
      number: "1", 
      title: "Архитектурен план",
      description: "Проектиране на информационната архитектура и URL структура.",
      icon: "📐"
    },
    {
      number: "2",
      title: "Архитектура на съдържанието", 
      description: "Стратегическо планиране и създаване на оптимизирано съдържание.",
      icon: "📝"
    },
    {
      number: "3",
      title: "Външен авторитет",
      description: "Изграждане на доверие чрез качествени препратки и партньорства.",
      icon: "🔗"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[var(--pravdast-dark)] to-[var(--pravdast-dark-gray)]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            От основите до покрива: Нашият четирифазен процес на изграждане
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-8 top-0 w-0.5 bg-[var(--pravdast-yellow)]"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />

            <div className="space-y-12">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-8"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-[var(--pravdast-yellow)] rounded-full flex items-center justify-center text-black font-bold text-xl">
                    {phase.number}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {phase.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Results Section Component
const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Предвидим поток",
      description: "Стабилен и измерим растеж на органичния трафик"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Дългосрочен актив",
      description: "Вашият сайт става все по-ценен с времето"
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "По-малко реклами",
      description: "Намалена зависимост от платена реклама"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Пазарен авторитет", 
      description: "Водеща позиция в индустрията ви"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Очаквани резултати
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-slate-700/30 rounded-lg border border-slate-600/30"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4 text-[var(--pravdast-yellow)]">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Investment Section Component  
const InvestmentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[var(--pravdast-dark)] to-[var(--pravdast-dark-gray)] relative overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint-grid-investment" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid-investment)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Техническа спецификация на инвестицията
          </motion.h2>

          <motion.div
            className="bg-slate-800/50 p-8 rounded-lg border border-slate-600/30 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="text-4xl md:text-5xl font-bold mb-4"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <span className="text-[var(--pravdast-yellow)]">1980 лв.</span>
              <span className="text-white">/месечно</span>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-4 bg-slate-700/30 rounded">
                <h4 className="font-semibold mb-2 text-white">✓ Без скрити разходи</h4>
                <p className="text-gray-300 text-sm">Прозрачно ценообразуване без допълнителни такси</p>
              </div>
              <div className="p-4 bg-slate-700/30 rounded">
                <h4 className="font-semibold mb-2 text-white">✓ Измерими резултати</h4>
                <p className="text-gray-300 text-sm">Ежемесечни отчети с ясни KPI метрики</p>
              </div>
              <div className="p-4 bg-slate-700/30 rounded">
                <h4 className="font-semibold mb-2 text-white">✓ Дългосрочна стойност</h4>
                <p className="text-gray-300 text-sm">Всяка инвестиция се натрупва като актив</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Final CTA Section Component
const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Готови ли сте да изградите система, която работи?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Започваме с безплатна диагностика на вашето текущо състояние. 
            Ще получите детайлен план за подобрение и ясна roadmap за постигане на целите ви.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 px-12 py-6 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Кандидатствайте за диагностика
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function SeoStruktor() {
  const seoData = {
    title: "SEO Struktor™ - Инженерен подход към SEO оптимизация | Pravdast",
    description: "Изграждаме вашето онлайн присъствие като инженерно съоръжение. Структуриран SEO подход за предвидими резултати в Google.",
    keywords: "SEO оптимизация, SEO услуги България, структуриран SEO, инженерен SEO подход",
    ogImage: "/og-images/seo-struktor.svg"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--pravdast-dark)] to-[var(--pravdast-dark-gray)] text-white">
      <SEOHead seo={seoData} pageSlug="services/seo-struktor" />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <BlueprintBackground />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white"
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
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              В Google битката се печели не от най-големия, а от най-добре
              структурирания. SEO Struktor™ изгражда вашето онлайн присъствие
              като инженерно съоръжение, проектирано да доминира в търсенето по
              предвидим и измерим начин.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Изпреварете конкуренцията
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Engineering Process Section */}
      <EngineeringProcessSection />

      {/* Results Section */}
      <ResultsSection />

      {/* Investment Section */}
      <InvestmentSection />

      {/* Final CTA Section */}
      <FinalCTASection />

      <Footer />
    </div>
  );
}