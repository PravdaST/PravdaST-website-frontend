import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BookOpen,
  Users,
  Clock,
  Handshake,
  Magnet,
  Microscope,
  FileText,
  Camera,
  Megaphone,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { UnifiedCTASection } from "@/components/unified-cta-section";
import { pageSEOData } from "@/data/seo-pages";

// Content Creation Background
const TrendlabBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-15">
      {/* Neural Network Grid */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="neural-grid"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="60" cy="60" r="2" fill="#ECB629" opacity="0.6" />
            <circle cx="20" cy="20" r="1.5" fill="#ECB629" opacity="0.4" />
            <circle cx="100" cy="20" r="1.5" fill="#ECB629" opacity="0.4" />
            <circle cx="20" cy="100" r="1.5" fill="#ECB629" opacity="0.4" />
            <circle cx="100" cy="100" r="1.5" fill="#ECB629" opacity="0.4" />

            {/* Connection Lines */}
            <path
              d="M 60 60 L 20 20"
              stroke="#ECB629"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path
              d="M 60 60 L 100 20"
              stroke="#ECB629"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path
              d="M 60 60 L 20 100"
              stroke="#ECB629"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path
              d="M 60 60 L 100 100"
              stroke="#ECB629"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>

          <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ECB629" stopOpacity="0" />
            <stop offset="50%" stopColor="#ECB629" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ECB629" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-grid)" />
      </svg>

      {/* Floating Content Blocks */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          >
            {/* Content Type Icons */}
            <div className="w-8 h-8 rounded border border-[#ECB629]/30 bg-[#ECB629]/5 flex items-center justify-center">
              {i % 4 === 0 && (
                <div className="w-3 h-2 bg-[#ECB629]/40 rounded-sm" />
              )}
              {i % 4 === 1 && (
                <div className="w-2 h-3 bg-[#ECB629]/40 rounded-full" />
              )}
              {i % 4 === 2 && (
                <div className="w-3 h-3 bg-[#ECB629]/40 rounded" />
              )}
              {i % 4 === 3 && (
                <div className="w-4 h-1 bg-[#ECB629]/40 rounded-full" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Data Flow Streams */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M ${i * 400 + 100} 100 Q ${i * 400 + 300} 200 ${i * 400 + 500} 300 Q ${i * 400 + 700} 400 ${i * 400 + 900} 200`}
            fill="none"
            stroke="url(#dataFlow)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Interactive Content Bubble */}
      <motion.div
        className="absolute w-24 h-24 pointer-events-none"
        style={{
          left: mousePosition.x - 48,
          top: mousePosition.y - 48,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full border border-[#ECB629]/30 bg-[#ECB629]/5">
          <div className="absolute inset-2 rounded-full border border-[#ECB629]/20">
            <div className="absolute inset-2 rounded-full bg-[#ECB629]/10" />
          </div>
        </div>
      </motion.div>
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
      <SEOHead
        seo={pageSEOData["services/trendlab"]}
        pageSlug="services/trendlab"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-10 relative min-h-screen flex items-center justify-center overflow-hidden">
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
                Приемаме проекти •{" "}
                <span className="text-[#ECB629]">
                  Системен подход към съдържанието
                </span>
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
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
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Вие притежавате безценна експертиза и опит. Нашата система
              Trendlab™ превръща тези ваши знания в автентично съдържание,
              което изгражда доверие, създава общност и ви превръща в безспорния
              авторитет във вашата сфера. Разгледайте{" "}
              <Link
                href="/case-studies"
                className="text-[#ECB629] hover:underline"
              >
                нашите резултати
              </Link>{" "}
              и{" "}
              <Link
                href="/calculators"
                className="text-[#ECB629] hover:underline"
              >
                изчислете Възвръщаемост на инвестицията
              </Link>{" "}
              от съдържанието.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold text-lg px-8 py-4 rounded-full shadow-lg shadow-[#ECB629]/25 hover:shadow-[#ECB629]/40 transition-all duration-300"
                asChild
              >
                <a
                  href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Вашата експертиза не е просто информация.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECB629] to-[#F59E0B]">
                  Тя е история
                </span>
                .
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Всеки може да изброи факти и характеристики. Но хората не се
                свързват с информация – те се свързват с истории. Една добре
                разказана история изгражда доверие и превръща пасивните
                наблюдатели в лоялни последователи.
              </p>
            </div>

            {/* Content Factory Visualization */}
            <div className="relative max-w-5xl mx-auto mb-16">
              <Card className="bg-slate-800/30 border-slate-600/30 p-8 backdrop-blur-sm relative overflow-hidden">
                {/* Factory Background */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                      linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
                    `,
                      backgroundSize: "30px 30px",
                    }}
                  ></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-center mb-8 text-white">
                    Фабриката за съдържание
                  </h3>

                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Input */}
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, x: -50 }}
                      animate={philosophyInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="w-20 h-20 mx-auto bg-slate-700/30 rounded-xl flex items-center justify-center mb-4 border border-slate-600/30">
                        <div className="text-gray-400">
                          <div className="w-8 h-1 bg-gray-400 rounded mb-1"></div>
                          <div className="w-6 h-1 bg-gray-400 rounded mb-1"></div>
                          <div className="w-7 h-1 bg-gray-400 rounded"></div>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-300 mb-2">
                        Сурова експертиза
                      </h4>
                      <p className="text-sm text-gray-400">
                        Знания, опит, факти
                      </p>
                    </motion.div>

                    {/* Process */}
                    <motion.div
                      className="text-center relative"
                      initial={{ opacity: 0, y: 30 }}
                      animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <motion.div
                        className="w-24 h-24 mx-auto bg-[#ECB629]/20 rounded-full flex items-center justify-center mb-4 border-2 border-[#ECB629]/30 relative"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Camera className="h-8 w-8 text-[#ECB629]" />

                        {/* Gear teeth */}
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-4 bg-[#ECB629]/30 rounded-sm"
                            style={{
                              transform: `rotate(${i * 45}deg) translateY(-14px)`,
                              transformOrigin: "center bottom",
                            }}
                          />
                        ))}
                      </motion.div>
                      <h4 className="text-lg font-semibold text-[#ECB629] mb-2">
                        Trendlab™ Система
                      </h4>
                      <p className="text-sm text-gray-400">AI + Креативност</p>
                    </motion.div>

                    {/* Output */}
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, x: 50 }}
                      animate={philosophyInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <div className="w-20 h-20 mx-auto bg-[#ECB629]/20 rounded-xl flex items-center justify-center mb-4 border border-[#ECB629]/30 relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ECB629]/20 to-transparent"
                          animate={{
                            x: [-100, 100],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <div className="relative z-10 text-[#ECB629]">
                          <div className="w-8 h-6 border border-[#ECB629] rounded mb-1"></div>
                          <div className="w-8 h-1 bg-[#ECB629] rounded"></div>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-[#ECB629] mb-2">
                        Въздействащи истории
                      </h4>
                      <p className="text-sm text-gray-400">
                        Видео, статии, визии
                      </p>
                    </motion.div>
                  </div>

                  {/* Flow arrows */}
                  <div className="hidden md:block absolute top-1/2 left-1/4 transform -translate-y-1/2">
                    <motion.div
                      animate={{
                        x: [0, 10, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="h-6 w-6 text-[#ECB629]" />
                    </motion.div>
                  </div>

                  <div className="hidden md:block absolute top-1/2 right-1/4 transform -translate-y-1/2">
                    <motion.div
                      animate={{
                        x: [0, 10, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    >
                      <ArrowRight className="h-6 w-6 text-[#ECB629]" />
                    </motion.div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Нашият подход
              </h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-300 mb-6">
                  Ние не сме просто създатели на съдържание. Ние сме инженери на
                  истории.
                </p>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ECB629]/5 via-[#ECB629]/10 to-[#ECB629]/5 rounded-lg"></div>
                  <p className="text-xl font-semibold text-[#ECB629] p-6 relative z-10">
                    Trendlab™ е нашата система, която взима вашата експертиза и
                    я превръща във въздействащ разказ, който отличава вашия
                    бранд от всички останали.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ultra-Modern Process Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Advanced Background System */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0">
            {/* Production Line Grid */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                linear-gradient(rgba(236, 182, 41, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(236, 182, 41, 0.1) 1px, transparent 1px),
                linear-gradient(rgba(236, 182, 41, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(236, 182, 41, 0.05) 1px, transparent 1px)
              `,
                backgroundSize: "60px 60px, 60px 60px, 20px 20px, 20px 20px",
              }}
            ></div>

            {/* Flowing Data Streams */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`stream-${i}`}
                className="absolute w-1 h-32 bg-gradient-to-b from-[#ECB629]/20 to-transparent rounded-full"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${20 + (i % 2) * 40}%`,
                }}
                animate={{
                  scaleY: [0.5, 1.2, 0.5],
                  opacity: [0.3, 0.8, 0.3],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Processing Nodes */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`processor-${i}`}
                className="absolute w-3 h-3 rounded-full border-2 border-[#ECB629]/30"
                style={{
                  left: `${15 + i * 10}%`,
                  top: `${30 + (i % 3) * 20}%`,
                }}
                animate={{
                  scale: [0.8, 1.4, 0.8],
                  borderWidth: [1, 3, 1],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#ECB629]/40 to-orange-500/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-l from-blue-500/20 to-[#ECB629]/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.25, 0.1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={processRef}
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced Header */}
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-[#ECB629]/30 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={processInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-2 h-2 bg-[#ECB629] rounded-full">
                  <motion.div
                    className="absolute inset-0 w-2 h-2 bg-[#ECB629] rounded-full opacity-40"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <span className="text-sm text-gray-300 font-medium">
                  <span className="text-[#ECB629] font-bold">
                    Поточна линия
                  </span>{" "}
                  за съдържание
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Нашата поточна линия за съдържание: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECB629] to-[#F59E0B] relative">
                  Процес в 4 фази
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#F59E0B] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={processInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </span>
              </h2>
            </motion.div>

            {/* Ultra-Modern Timeline Cards */}
            <div className="relative">
              {/* Connection Flow */}
              <div className="hidden lg:block absolute inset-0">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 1200 800"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M200,200 Q400,100 600,200 Q800,300 1000,200"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="10,5"
                    initial={{ pathLength: 0 }}
                    animate={processInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#ECB629", stopOpacity: 0.3 }}
                      />
                      <stop
                        offset="50%"
                        style={{ stopColor: "#ECB629", stopOpacity: 0.8 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#ECB629", stopOpacity: 0.3 }}
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Modern Process Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                {[
                  {
                    phase: "01",
                    title: "Извличане на експертиза",
                    description:
                      "Провеждаме стратегически сесии с вас, за да извлечем вашите уникални знания, ценности и истории.",
                    icon: Microscope,
                    duration: "2-3 седмици",
                    deliverables:
                      "Експертен профил, ключови послания, story bank",
                    color: "from-blue-500/20 to-[#ECB629]/20",
                  },
                  {
                    phase: "02",
                    title: "Проектиране на съдържанието",
                    description:
                      "Превръщаме суровата информация в конкретни формати – сценарии за видеа, структура на статии, концепции за визии.",
                    icon: FileText,
                    duration: "1-2 седмици",
                    deliverables:
                      "Съдържателен календар, готови формати, визуални концепции",
                    color: "from-[#ECB629]/20 to-orange-500/20",
                  },
                  {
                    phase: "03",
                    title: "Ефективна продукция",
                    description:
                      "Използваме модерни технологии за създаване на съдържание, които ни позволяват да продуцираме висококачествени видеа и текстове изключително бързо и с оптимизиран бюджет.",
                    icon: Camera,
                    duration: "Непрекъснато",
                    deliverables:
                      "Готово съдържание, оптимизирано за всяка платформа",
                    color: "from-orange-500/20 to-red-500/20",
                  },
                  {
                    phase: "04",
                    title: "Разпространение и анализ",
                    description:
                      "Публикуваме съдържанието в правилните канали и измерваме неговото въздействие върху репутацията ви.",
                    icon: Megaphone,
                    duration: "Непрекъснато",
                    deliverables: "Публикации, анализи, оптимизации",
                    color: "from-red-500/20 to-purple-500/20",
                  },
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: 50 }}
                    animate={processInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {/* Outer glow effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${phase.color} blur-xl opacity-0 group-hover:opacity-100`}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Main Card */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/90 border border-[#ECB629]/20 backdrop-blur-sm p-8 hover:border-[#ECB629]/40 transition-all duration-300">
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `
                            linear-gradient(45deg, rgba(236, 182, 41, 0.1) 25%, transparent 25%),
                            linear-gradient(-45deg, rgba(236, 182, 41, 0.1) 25%, transparent 25%)
                          `,
                            backgroundSize: "30px 30px",
                          }}
                        ></div>
                      </div>

                      {/* Phase Badge */}
                      <div className="absolute top-6 right-6">
                        <motion.div
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ECB629]/30 to-orange-500/30 border border-[#ECB629]/50"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="w-2 h-2 bg-[#ECB629] rounded-full">
                            <motion.div
                              className="absolute inset-0 bg-[#ECB629] rounded-full opacity-40"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />
                          </div>
                          <span className="text-xs text-[#ECB629] font-bold">
                            ФАЗА {phase.phase}
                          </span>
                        </motion.div>
                      </div>

                      <div className="relative z-10">
                        {/* Icon & Number */}
                        <div className="flex items-center gap-4 mb-6">
                          <motion.div
                            className="relative"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            {/* Outer ring */}
                            <motion.div
                              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ECB629]/20 to-orange-500/20 border-2 border-[#ECB629]/30 flex items-center justify-center"
                              animate={{
                                boxShadow: [
                                  "0 0 20px rgba(236, 182, 41, 0.2)",
                                  "0 0 30px rgba(236, 182, 41, 0.4)",
                                  "0 0 20px rgba(236, 182, 41, 0.2)",
                                ],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              <phase.icon className="h-8 w-8 text-[#ECB629]" />
                            </motion.div>

                            {/* Orbiting elements */}
                            <motion.div
                              className="absolute -top-1 -right-1 w-3 h-3 bg-[#ECB629] rounded-full"
                              animate={{
                                rotate: [0, 360],
                                scale: [0.8, 1.2, 0.8],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                          </motion.div>

                          <div>
                            <motion.div
                              className="text-6xl font-black text-[#ECB629] opacity-20 leading-none"
                              animate={{
                                opacity: [0.2, 0.4, 0.2],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              {phase.phase}
                            </motion.div>
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ECB629] transition-colors duration-300">
                          {phase.title}
                        </h3>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {phase.description}
                        </p>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 gap-4">
                          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <div>
                              <span className="text-sm text-gray-400">
                                Времетраене:
                              </span>
                              <span className="text-white font-semibold ml-2">
                                {phase.duration}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                            <div>
                              <span className="text-sm text-gray-400 block">
                                Резултати:
                              </span>
                              <span className="text-white font-semibold">
                                {phase.deliverables}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Progress Indicator */}
                        <div className="mt-6 pt-4 border-t border-slate-700/50">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">
                              Прогрес в процеса
                            </span>
                            <span className="text-sm text-[#ECB629] font-semibold">
                              {Math.round(((index + 1) / 4) * 100)}%
                            </span>
                          </div>
                          <div className="mt-2 w-full bg-slate-700/50 rounded-full h-2">
                            <motion.div
                              className="h-2 bg-gradient-to-r from-[#ECB629] to-orange-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={
                                processInView
                                  ? { width: `${((index + 1) / 4) * 100}%` }
                                  : {}
                              }
                              transition={{
                                duration: 1,
                                delay: index * 0.2 + 0.5,
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Floating elements */}
                      <div className="absolute bottom-4 right-4 opacity-20">
                        <motion.div
                          className="w-3 h-3 bg-[#ECB629] rounded-full"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.6, 0.2],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                <a
                  href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                  title:
                    "От просто още една опция на пазара, вие се превръщате в търсен експерт",
                  description:
                    "На когото клиентите се доверяват и търсят за съвет.",
                },
                {
                  icon: Users,
                  title: "Изграждате лоялна общност",
                  description:
                    "Около вашия бранд, а не просто случайна аудитория.",
                },
                {
                  icon: Clock,
                  title: "Вашият продажбен цикъл се скъсява",
                  description:
                    "Защото клиентите идват при вас с изградено доверие.",
                },
                {
                  icon: Handshake,
                  title: "Привличате по-качествени кадри и партньори",
                  description: "Които искат да работят с лидера в индустрията.",
                },
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Структура на{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECB629] to-[#F59E0B]">
                инвестицията
              </span>
            </h2>

            <Card className="bg-slate-800/30 border-slate-600/30 p-8 backdrop-blur-sm mb-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#ECB629] mb-4">
                  от 3450 лв.
                </div>
                <div className="text-xl text-gray-300 mb-6">
                  месечно / базови проекти
                </div>
                <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Всяка система Trendlab™ се проектира спрямо вашите цели и
                  ресурси. Базовите проекти започват от 3450 лв./месец.
                  Финалната инвестиция се определя след диагностика на текущото
                  ви състояние и желаните резултати.
                </p>
              </div>
            </Card>

            <Button
              size="lg"
              className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold px-8 py-4 rounded-full shadow-lg shadow-[#ECB629]/25"
              asChild
            >
              <a
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Заявете диагностика
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}

      {/* Unified CTA Section */}
      <UnifiedCTASection
        buttonText="Обърнете се към нас"
        headline="Готови ли сте да изградите авторитет?"
        description="Започнете трансформацията на вашия експертен глас в влиятелно съдържание с нашата система."
      />

      <Footer />
    </div>
  );
}
