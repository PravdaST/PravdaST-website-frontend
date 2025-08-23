'use client'

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
  Phone,
  Crown,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import Link from "next/link";

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
    <div className="min-h-screen text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-10 relative min-h-screen flex items-center justify-center overflow-hidden">
        <TrendlabBackground />

        <div className="container mx-auto px-6 relative z-1">
          <motion.div
            ref={heroRef}
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center gap-2 glassmorphism rounded-full px-6 py-3 mb-8"
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
      <section className="py-20 glass-section relative overflow-hidden">
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
                Всеки може да изброи факти и характеристики, но хората не се
                свързват с информация – те се свързват с истории. Една добре
                разказана история изгражда доверие и превръща пасивните
                наблюдатели в лоялни последователи.
              </p>
            </div>

            {/* Content Factory Visualization */}
            <div className="relative max-w-5xl mx-auto mb-16">
              <Card className="glassmorphism p-8 relative overflow-hidden">
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
                      <div className="w-20 h-20 mx-auto glassmorphism rounded-xl flex items-center justify-center mb-4">
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
                            <div className="w-16 h-16 bg-gradient-to-br from-[#ECB629]/20 to-[#ECB629]/40 rounded-full flex items-center justify-center">
                              <phase.icon className="w-8 h-8 text-[#ECB629]" />
                            </div>
                          </motion.div>
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-white">
                            {phase.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {phase.description}
                          </p>

                          {/* Details Grid */}
                          <div className="grid grid-cols-1 gap-3 pt-4 border-t border-slate-600/30">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                              <span className="text-sm text-gray-400">
                                Времетраене:
                              </span>
                              <span className="text-sm font-semibold text-white">
                                {phase.duration}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                              <span className="text-sm text-gray-400">
                                Резултат:
                              </span>
                              <span className="text-sm font-semibold text-white">
                                {phase.deliverables}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section ref={resultsRef} className="py-20 bg-slate-800/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center px-6 py-2 bg-slate-800/80 border border-[#ECB629] rounded-full mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={resultsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-[#ECB629] text-sm font-medium tracking-wide">
                  ИЗМЕРИМИ РЕЗУЛТАТИ
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Когато изградите правилния авторитет
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Нашата система Trendlab™ трансформира експертизата ви в
                конкретни бизнес резултати
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Magnet,
                  title: "Запитванията идват при вас, а не вие при тях",
                  description:
                    "Клиентите ви намират и се свързват с вас, защото са видели съдържанието ви и се доверяват на опита ви.",
                },
                {
                  icon: Users,
                  title: "Изграждате реална, лоялна общност",
                  description:
                    "Хората следват работата ви и се превръщат в амбасадори на бранда ви.",
                },
                {
                  icon: Crown,
                  title: "Продавате на по-високи цени",
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

      {/* Investment Structure */}
      <section ref={investmentRef} className="py-20 bg-slate-900/60 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-16 gap-2 h-full p-4">
            {Array.from({ length: 256 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-[#ECB629] rounded-sm"
                style={{ height: Math.random() * 6 + 2 + "px" }}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={
                  investmentInView
                    ? {
                        opacity: Math.random() * 0.4 + 0.1,
                        scaleY: Math.random() * 1.5 + 0.3,
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  delay: i * 0.005,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={investmentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-[#ECB629]/10 rounded-full border border-[#ECB629]/20 mb-6">
                <span className="text-[#ECB629] text-sm font-semibold">
                  ПРОЗРАЧНО ЦЕНООБРАЗУВАНЕ
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Структура на инвестицията
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                Инженерно проектиране изисква прецизност и в техническата
                спецификация
              </p>
            </motion.div>

            {/* Price Display */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={investmentInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div className="inline-block p-8 bg-slate-800/60 backdrop-blur-sm rounded-3xl border border-slate-600/30 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-sm text-[#ECB629] font-semibold mb-2 tracking-wider">
                    ЗАПОЧВА ОТ
                  </div>
                  <div className="text-5xl md:text-6xl font-bold mb-2">
                    <span className="text-[#ECB629]">
                      3450 лв.
                    </span>
                    <span className="text-white text-3xl">/месечно</span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    *Финалната цена се определя след техническа диагностика
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Principles Grid */}
            <div className="grid gap-8 md:gap-12">
              {[
                {
                  number: "1",
                  title: "Персонализирано решение",
                  description:
                    "Всяка система Trendlab™ се проектира и изгражда спрямо уникалните цели и състояние на вашия бизнес. Ние не предлагаме готови пакети.",
                },
                {
                  number: "2",
                  title: "Бюджетна рамка",
                  description:
                    "За ориентация, базовите инженерни проекти започват от 3450 лв./месечно.",
                },
                {
                  number: "3",
                  title: "Техническа спецификация",
                  description:
                    "Финалната инвестиция се определя след задължителна техническа диагностика. Вие получавате детайлно инженерно предложение, в което всеки компонент е ясно описан и стойностен.",
                },
              ].map((principle, index) => (
                <motion.div
                  key={principle.number}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={investmentInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <motion.div
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Number Circle */}
                    <motion.div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#ECB629] to-yellow-600 rounded-full flex items-center justify-center shadow-xl">
                          <span className="text-black font-bold text-2xl">
                            {principle.number}
                          </span>
                        </div>
                        {/* Connection line to next */}
                        {index < 2 && (
                          <motion.div
                            className="absolute top-20 left-1/2 w-0.5 h-16 bg-gradient-to-b from-[#ECB629] to-slate-600 hidden md:block"
                            initial={{ scaleY: 0 }}
                            animate={investmentInView ? { scaleY: 1 } : {}}
                            transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                          />
                        )}
                      </div>
                    </motion.div>

                    {/* Content Card */}
                    <div className="flex-1 w-full">
                      <motion.div className="bg-slate-800/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-xl md:text-2xl font-bold text-white">
                            {principle.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                          {principle.description}
                        </p>

                        {/* Decorative element */}
                        <motion.div
                          className="mt-6 w-full h-1 bg-slate-700 rounded-full overflow-hidden"
                          initial={{ width: 0 }}
                          animate={investmentInView ? { width: "100%" } : {}}
                          transition={{ duration: 1, delay: index * 0.2 + 0.8 }}
                        >
                          <motion.div
                            className="h-full bg-gradient-to-r from-[#ECB629] to-yellow-400"
                            initial={{ width: "0%" }}
                            animate={investmentInView ? { width: "100%" } : {}}
                            transition={{ duration: 1.5, delay: index * 0.2 + 1 }}
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#ECB629] relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-black/10 px-4 py-2 rounded-full border border-black/20 mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-black font-medium">
                Остават 3 места за 2025
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Готови ли сте да изградите авторитет?
            </h2>

            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Започнете трансформацията на вашия експертен глас във влиятелно
              съдържание с нашата система.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-black/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Безплатна консултация</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Без ангажименти</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Отговор в 48 часа</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                whileHover={{
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Обърнете се към нас</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="tel:+359879282299"
                className="inline-flex items-center gap-3 border-2 border-black text-black px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-black hover:text-white"
                whileHover={{
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Обади се сега</span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}