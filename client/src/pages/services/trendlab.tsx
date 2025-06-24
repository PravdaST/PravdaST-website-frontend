import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Users, Clock, Handshake, Magnet, Microscope, FileText, Camera, Megaphone, CheckCircle, ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

// Animated Background Component
const TrendlabBackground = () => {
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
      {/* Story Grid */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="story-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#ECB629" strokeWidth="0.5" opacity="0.4"/>
            <circle cx="40" cy="40" r="2" fill="#ECB629" opacity="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#story-grid)" />
      </svg>

      {/* Floating Story Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 border border-[#ECB629]/20 rounded-lg"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-[#ECB629]/10 to-transparent rounded-lg" />
          </motion.div>
        ))}
      </div>

      {/* Story Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M 100 300 Q 400 200 700 350 Q 1000 500 1300 300"
          fill="none"
          stroke="#ECB629"
          strokeWidth="2"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Mouse Follower */}
      <motion.div
        className="absolute w-32 h-32 border border-[#ECB629]/30 rounded-full pointer-events-none"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default function Trendlab() {
  const heroRef = useRef(null);
  const philosophyRef = useRef(null);
  const processRef = useRef(null);
  const resultsRef = useRef(null);
  const investmentRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const philosophyInView = useInView(philosophyRef, { once: true });
  const processInView = useInView(processRef, { once: true });
  const resultsInView = useInView(resultsRef, { once: true });
  const investmentInView = useInView(investmentRef, { once: true });
  const ctaInView = useInView(ctaRef, { once: true });

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 1500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <TrendlabBackground />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={heroRef}
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-slate-800/60 rounded-full px-6 py-3 border border-slate-600/30 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <motion.div
                  className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <span className="text-sm font-medium text-gray-300">
                Приемаме проекти • <span className="text-[#ECB629]">Ново</span>
              </span>
            </motion.div>

            {/* Animated Badge */}
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Badge className="bg-gradient-to-r from-[#ECB629] to-[#F59E0B] text-black font-semibold px-4 py-2 text-sm">
                <BookOpen className="h-4 w-4 mr-2" />
                Системен подход към съдържанието
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Най-убедителната история е{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECB629] to-[#F59E0B]">
                вашата
              </span>
              . Време е да я разкажем.
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Вие притежавате безценна експертиза и опит. Нашата система Trendlab™ превръща тези ваши знания в автентично съдържание, което изгражда доверие, създава общност и ви превръща в безспорния авторитет във вашата сфера.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Button
                size="lg"
                className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold text-lg px-8 py-4 rounded-full shadow-lg shadow-[#ECB629]/25 hover:shadow-[#ECB629]/40 transition-all duration-300"
                asChild
              >
                <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                  Разкажете своята история
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-slate-800/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            ref={philosophyRef}
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-[#ECB629] to-[#F59E0B] text-black font-semibold px-4 py-2 mb-6">
                Философията
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Вашата експертиза не е просто информация.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECB629] to-[#F59E0B]">
                  Тя е история
                </span>
                .
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Всеки може да изброи факти и характеристики. Но хората не се свързват с информация – те се свързват с истории. Една добре разказана история изгражда доверие и превръща пасивните наблюдатели в лоялни последователи.
              </p>
            </div>

            {/* Transformation Visualization */}
            <div className="relative max-w-4xl mx-auto mb-16">
              <Card className="bg-slate-800/30 border-slate-600/30 p-8 backdrop-blur-sm">
                <div className="flex flex-col items-center space-y-8">
                  {/* Information vs Story */}
                  <div className="w-full max-w-2xl">
                    <motion.div 
                      className={`transition-all duration-1500 ${
                        isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
                      }`}
                    >
                      {!isTransitioning ? (
                        <div className="text-center p-8 bg-red-900/20 border border-red-600/30 rounded-lg">
                          <div className="text-6xl mb-4">📊</div>
                          <h3 className="text-2xl font-bold text-red-300 mb-4">СУХИ ДАННИ</h3>
                          <div className="font-mono text-sm text-gray-400 space-y-1">
                            <div>• Факт 1: Продукт А</div>
                            <div>• Факт 2: Функция Б</div>
                            <div>• Факт 3: Характеристика В</div>
                          </div>
                          <div className="mt-4 text-red-400 text-sm">Никого не интересува</div>
                        </div>
                      ) : (
                        <div className="text-center p-8 bg-[#ECB629]/20 border border-[#ECB629]/30 rounded-lg">
                          <div className="text-6xl mb-4">❤️</div>
                          <h3 className="text-2xl font-bold text-[#ECB629] mb-4">ИСТОРИЯ</h3>
                          <div className="text-sm text-gray-300 space-y-1">
                            <div>• Как решихме проблем X</div>
                            <div>• Защо направихме избор Y</div>
                            <div>• Какво научихме от грешка Z</div>
                          </div>
                          <div className="mt-4 text-[#ECB629] text-sm">Изгражда доверие и емоции</div>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {isTransitioning ? (
                      <ArrowLeft className="h-8 w-8 text-[#ECB629]" />
                    ) : (
                      <ArrowRight className="h-8 w-8 text-[#ECB629]" />
                    )}
                  </motion.div>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Нашият подход</h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Ние не сме просто създатели на съдържание. Ние сме инженери на истории. Trendlab™ е нашата система, която взима вашата експертиза и я превръща във въздействащ разказ, който отличава вашия бранд от всички останали.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            ref={processRef}
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-[#ECB629] to-[#F59E0B] text-black font-semibold px-4 py-2 mb-6">
                Процесът
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Нашата поточна линия за съдържание:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECB629] to-[#F59E0B]">
                  Процес в 4 фази
                </span>
              </h2>
            </div>

            <div className="grid gap-8 md:gap-12">
              {[
                {
                  phase: "01",
                  title: "Извличане на експертиза",
                  description: "Провеждаме стратегически сесии с вас, за да извлечем вашите уникални знания, ценности и истории.",
                  icon: Microscope,
                  duration: "2-3 седмици",
                  deliverables: "Експертен профил, ключови послания, story bank"
                },
                {
                  phase: "02", 
                  title: "Проектиране на съдържанието",
                  description: "Превръщаме суровата информация в конкретни формати – сценарии за видеа, структура на статии, концепции за визии.",
                  icon: FileText,
                  duration: "1-2 седмици",
                  deliverables: "Съдържателен календар, готови формати, визуални концепции"
                },
                {
                  phase: "03",
                  title: "Ефективна продукция",
                  description: "Използваме модерни технологии за създаване на съдържание, които ни позволяват да продуцираме висококачествени видеа и текстове изключително бързо и с оптимизиран бюджет.",
                  icon: Camera,
                  duration: "Непрекъснато",
                  deliverables: "Готово съдържание, оптимизирано за всяка платформа"
                },
                {
                  phase: "04",
                  title: "Разпространение и анализ", 
                  description: "Публикуваме съдържанието в правилните канали и измерваме неговото въздействие върху репутацията ви.",
                  icon: Megaphone,
                  duration: "Непрекъснато",
                  deliverables: "Публикации, анализи, оптимизации"
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={processInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="bg-slate-800/30 border-slate-600/30 p-8 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 group">
                    <div className="flex items-start space-x-6">
                      {/* Phase Number */}
                      <div className="relative">
                        <motion.div
                          className="w-16 h-16 bg-gradient-to-br from-[#ECB629] to-[#F59E0B] rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {phase.phase}
                        </motion.div>
                        <motion.div
                          className="absolute inset-0 w-16 h-16 border-2 border-[#ECB629] rounded-full opacity-0 group-hover:opacity-100"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0, 0.5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <phase.icon className="h-6 w-6 text-[#ECB629]" />
                          <h3 className="text-2xl font-bold">{phase.title}</h3>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {phase.description}
                        </p>
                        
                        {/* Details */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-slate-700/30 rounded-lg p-4">
                            <div className="text-sm text-[#ECB629] font-semibold mb-1">ПРОДЪЛЖИТЕЛНОСТ</div>
                            <div className="text-white">{phase.duration}</div>
                          </div>
                          <div className="bg-slate-700/30 rounded-lg p-4">
                            <div className="text-sm text-[#ECB629] font-semibold mb-1">РЕЗУЛТАТ</div>
                            <div className="text-white text-sm">{phase.deliverables}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold px-8 py-4 rounded-full shadow-lg shadow-[#ECB629]/25"
                asChild
              >
                <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                  Започнете процеса сега
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-slate-800/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            ref={resultsRef}
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-[#ECB629] to-[#F59E0B] text-black font-semibold px-4 py-2 mb-6">
                Резултатите
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Спрете да преследвате клиенти.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECB629] to-[#F59E0B]">
                  Нека те да търсят вас
                </span>
                .
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Magnet,
                  title: "От просто още една опция на пазара, вие се превръщате в търсен експерт",
                  description: "На когото клиентите се доверяват и търсят за съвет."
                },
                {
                  icon: Users,
                  title: "Изграждате лоялна общност",
                  description: "Около вашия бранд, а не просто случайна аудитория."
                },
                {
                  icon: Clock,
                  title: "Вашият продажбен цикъл се скъсява",
                  description: "Защото клиентите идват при вас с изградено доверие."
                },
                {
                  icon: Handshake,
                  title: "Привличате по-качествени кадри и партньори",
                  description: "Които искат да работят с лидера в индустрията."
                }
              ].map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="bg-slate-800/30 border-slate-600/30 p-8 backdrop-blur-sm h-full hover:bg-slate-800/50 transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <motion.div
                          className="w-12 h-12 bg-[#ECB629]/20 rounded-full flex items-center justify-center group-hover:bg-[#ECB629]/30 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <CheckCircle className="h-6 w-6 text-[#ECB629]" />
                        </motion.div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-white">
                          {result.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {result.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            ref={investmentRef}
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={investmentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-gradient-to-r from-[#ECB629] to-[#F59E0B] text-black font-semibold px-4 py-2 mb-6">
              Инвестицията
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Структура на{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECB629] to-[#F59E0B]">
                инвестицията
              </span>
            </h2>

            <Card className="bg-slate-800/30 border-slate-600/30 p-8 backdrop-blur-sm mb-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#ECB629] mb-4">
                  3450 лв.
                </div>
                <div className="text-xl text-gray-300 mb-6">
                  месечно / базови проекти
                </div>
                <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Всяка система Trendlab™ се проектира спрямо вашите цели и ресурси. Базовите проекти започват от 3450 лв./месец. Финалната инвестиция се определя след диагностика на текущото ви състояние и желаните резултати.
                </p>
              </div>
            </Card>

            <Button
              size="lg"
              className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold px-8 py-4 rounded-full shadow-lg shadow-[#ECB629]/25"
              asChild
            >
              <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                Заявете диагностика
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#ECB629] text-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ctaRef}
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Готови ли сте вашият глас да бъде чут?
            </h2>
            <p className="text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
              Нашата експертна диагностика ще анализира вашия настоящ авторитет и ще ви даде ясен инженерен план как да се превърнете в лидер на мнение във вашата сфера. Работим с ограничен брой клиенти всеки месец.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-black text-[#ECB629] hover:bg-black/90 font-semibold text-lg px-8 py-4 rounded-full shadow-lg"
                asChild
              >
                <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                  Искам диагностика на авторитета
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}