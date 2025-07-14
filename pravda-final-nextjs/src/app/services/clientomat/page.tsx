'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Network,
  Users,
  Clock,
  Handshake,
  Magnet,
  Microscope,
  FileText,
  Settings,
  CheckCircle,
  Target,
  TrendingUp,
  Phone,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

// Unique Client Network Background
const ClientomatBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {/* Client Ecosystem Network */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Central Hub Pattern */}
          <pattern
            id="client-ecosystem"
            width="150"
            height="150"
            patternUnits="userSpaceOnUse"
          >
            {/* Central Client Hub */}
            <circle cx="75" cy="75" r="4" fill="#ECB629" opacity="0.8" />

            {/* Client Journey Stages (6 points around hub) */}
            <circle cx="75" cy="25" r="2" fill="#ECB629" opacity="0.5" />
            <circle cx="115" cy="50" r="2" fill="#ECB629" opacity="0.5" />
            <circle cx="115" cy="100" r="2" fill="#ECB629" opacity="0.5" />
            <circle cx="75" cy="125" r="2" fill="#ECB629" opacity="0.5" />
            <circle cx="35" cy="100" r="2" fill="#ECB629" opacity="0.5" />
            <circle cx="35" cy="50" r="2" fill="#ECB629" opacity="0.5" />

            {/* Connection Lines from Central Hub */}
            <path
              d="M 75 75 L 75 25"
              stroke="#ECB629"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path
              d="M 75 75 L 115 50"
              stroke="#ECB629"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path
              d="M 75 75 L 115 100"
              stroke="#ECB629"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path
              d="M 75 75 L 75 125"
              stroke="#ECB629"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path
              d="M 75 75 L 35 100"
              stroke="#ECB629"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path
              d="M 75 75 L 35 50"
              stroke="#ECB629"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>

          {/* Client Data Flow Pattern */}
          <pattern
            id="dataFlow"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="40" cy="40" r="1" fill="#ECB629" opacity="0.4" />
            <circle cx="20" cy="20" r="0.5" fill="#ECB629" opacity="0.3" />
            <circle cx="60" cy="60" r="0.5" fill="#ECB629" opacity="0.3" />
          </pattern>

          {/* Client Flow Gradient */}
          <linearGradient id="clientFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ECB629" stopOpacity="0" />
            <stop offset="50%" stopColor="#ECB629" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ECB629" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Client Ecosystem Network Grid */}
        <rect
          width="100%"
          height="100%"
          fill="url(#client-ecosystem)"
          opacity="0.6"
        />

        {/* Secondary Data Flow Layer */}
        <rect
          width="100%"
          height="100%"
          fill="url(#dataFlow)"
          opacity="0.4"
        />
      </svg>

      {/* Floating Client Touchpoints */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + (i * 7) % 80}%`,
              top: `${15 + (i * 11) % 70}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          >
            {/* Client Touchpoint Icons */}
            <div className="w-8 h-8 rounded-lg border border-[#ECB629]/30 bg-[#ECB629]/5 flex items-center justify-center backdrop-blur-sm">
              {i % 4 === 0 && <Users className="w-3 h-3 text-[#ECB629]/60" />}
              {i % 4 === 1 && <Network className="w-3 h-3 text-[#ECB629]/60" />}
              {i % 4 === 2 && <Target className="w-3 h-3 text-[#ECB629]/60" />}
              {i % 4 === 3 && (
                <Handshake className="w-3 h-3 text-[#ECB629]/60" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Client Journey Flow Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M ${i * 300 + 50} 150 Q ${i * 300 + 200} 250 ${i * 300 + 350} 150 Q ${i * 300 + 500} 50 ${i * 300 + 650} 150`}
            fill="none"
            stroke="url(#clientFlow)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 1.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default function ClientomatPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-10 min-h-screen flex items-center relative overflow-hidden">
        <ClientomatBackground />

        <div className="container mx-auto px-6 relative z-1">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-[#ECB629] rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(236, 182, 40, 0.7)",
                        "0 0 0 4px rgba(236, 182, 40, 0)",
                        "0 0 0 0 rgba(236, 182, 40, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm text-gray-300 font-medium">
                    Clientomat™{" "}
                    <span className="text-[#ECB629] font-bold">система</span>
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Превърнете всеки контакт <br />в{" "}
                <span className="text-[#ECB629]">лоялен клиент</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Clientomat™ е системата, която автоматизира цялата клиентска
                екосистема - от първия контакт до доживотна лоялност.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    size="lg"
                    className="group relative bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-[#ECB629]/25 transition-all duration-300 overflow-hidden"
                    asChild
                  >
                    <a
                      href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="relative z-10">
                        Заявете експертна диагностика
                      </span>
                      <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-slate-800/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#ECB629]/10 border border-[#ECB629]/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-[#ECB629] rounded-full animate-pulse" />
                <span className="text-[#ECB629] font-semibold text-sm">
                  СИСТЕМНА
                </span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Защо губите клиенти?
              </motion.h2>

              <motion.p
                className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Повечето компании фокусират само върху привличането на нови
                клиенти. Истинският растеж идва от системното управление на
                целия клиентски цикъл.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Network,
                  title: "Разпокъсана комуникация",
                  description: "Клиентите получават непоследователни съобщения",
                  status: "ПРОБЛЕМ",
                  color: "red",
                },
                {
                  icon: Clock,
                  title: "Забавени отговори",
                  description: "Дълги времена за реакция на запитвания",
                  status: "ПРОБЛЕМ",
                  color: "red",
                },
                {
                  icon: Target,
                  title: "Липса на проследяване",
                  description: "Не знаете къде точно губите клиенти",
                  status: "ПРОБЛЕМ",
                  color: "red",
                },
              ].map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative bg-slate-800/50 border-red-600/30 h-full group hover:border-red-500/50 transition-all duration-300">
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="destructive"
                        className="bg-red-600/20 text-red-400 border-red-600/30"
                      >
                        {problem.status}
                      </Badge>
                    </div>
                    <div className="p-8">
                      <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <problem.icon className="w-8 h-8 text-red-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">
                        {problem.title}
                      </h3>
                      <p className="text-gray-300">{problem.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="bg-slate-800/60 border-[#ECB629]/20 max-w-4xl mx-auto">
                <div className="p-12">
                  <div className="w-20 h-20 bg-[#ECB629]/20 rounded-full flex items-center justify-center mb-8 mx-auto">
                    <Settings className="w-10 h-10 text-[#ECB629]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Решението е в системата
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Вместо да разчитате на случайността, изграждате автоматизирана
                    система за привличане, превръщане и задържане на клиенти.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div className="bg-slate-700/30 rounded-lg p-6 border border-[#ECB629]/20">
                      <Magnet className="w-8 h-8 text-[#ECB629] mb-4 mx-auto" />
                      <h4 className="font-semibold text-white mb-2">
                        Привличане
                      </h4>
                      <p className="text-gray-300">
                        Автоматично привличане на правилните клиенти
                      </p>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-6 border border-[#ECB629]/20">
                      <Target className="w-8 h-8 text-[#ECB629] mb-4 mx-auto" />
                      <h4 className="font-semibold text-white mb-2">
                        Превръщане
                      </h4>
                      <p className="text-gray-300">
                        Превръщане на контакти в клиенти
                      </p>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-6 border border-[#ECB629]/20">
                      <Handshake className="w-8 h-8 text-[#ECB629] mb-4 mx-auto" />
                      <h4 className="font-semibold text-white mb-2">
                        Задържане
                      </h4>
                      <p className="text-gray-300">
                        Изграждане на дългосрочни връзки
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Engineering Process */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#ECB629]/10 border border-[#ECB629]/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-[#ECB629] rounded-full animate-pulse" />
                <span className="text-[#ECB629] font-semibold text-sm">
                  ИНЖЕНЕРЕН ПОДХОД
                </span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Как изграждаме вашата Clientomat™ система
              </motion.h2>

              <motion.p
                className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Систематичен подход в 4 фази за изграждане на автоматизираната
                ви клиентска екосистема
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  phase: "1",
                  title: "Анализ и диагностика",
                  description:
                    "Изучаваме настоящия ви клиентски цикъл и идентифицираме пропуските. Определяме профила на идеалния клиент и mapping на цялата клиентска екосистема.",
                  icon: Microscope,
                  color: "from-blue-500 to-blue-600",
                },
                {
                  phase: "2",
                  title: "Проектиране на системата",
                  description:
                    "Създаваме техническа спецификация на вашата Clientomat™ система. Дефинираме автоматизирани процеси и touchpoints за всеки етап от клиентския цикъл.",
                  icon: FileText,
                  color: "from-green-500 to-green-600",
                },
                {
                  phase: "3",
                  title: "Изпълнение и автоматизация",
                  description:
                    "Внедряваме системата с всички необходими инструменти за автоматизация. Настройваме проследяване, уведомления и процеси за обслужване на клиентите.",
                  icon: Settings,
                  color: "from-purple-500 to-purple-600",
                },
                {
                  phase: "4",
                  title: "Оптимизация и мащабиране",
                  description:
                    "Следим резултатите и непрекъснато подобряваме системата. Мащабираме успешните процеси за постигане на още по-добри резултати.",
                  icon: TrendingUp,
                  color: "from-[#ECB629] to-yellow-500",
                },
              ].map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative bg-slate-800/50 border-slate-700 hover:border-[#ECB629]/50 transition-all duration-300 group h-full">
                    <div className="p-6 h-full flex flex-col">
                      {/* Phase Number & Icon */}
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-white font-bold text-lg`}
                        >
                          {phase.phase}
                        </div>
                        <phase.icon className="w-6 h-6 text-[#ECB629]" />
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#ECB629] transition-colors">
                        {phase.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed flex-grow">
                        {phase.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expected Results */}
      <section className="py-20 bg-slate-800/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#ECB629]/10 border border-[#ECB629]/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-[#ECB629] rounded-full animate-pulse" />
                <span className="text-[#ECB629] font-semibold text-sm">
                  РЕЗУЛТАТИ
                </span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Какви резултати да очаквате?
              </motion.h2>

              <motion.p
                className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Реални метрики от клиенти, които вече използват Clientomat™
                системата
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  metric: "60%+",
                  label: "Увеличение на клиентската база",
                  description:
                    "За първите 6 седмици след внедряване на нашата система.",
                  timeline: "2-месечен период",
                  color: "green",
                },
                {
                  metric: "85%",
                  label: "По-висока задържаемост на клиенти",
                  description:
                    "Клиентите използват услугите ни значително по-дълго.",
                  timeline: "6-месечен период",
                  color: "blue",
                },
                {
                  metric: "40%",
                  label: "Намаление на разходите за привличане на клиенти",
                  description:
                    "Оптимизираните процеси водят до значително по-ниски разходи",
                  timeline: "3-месечен период",
                  color: "purple",
                },
              ].map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-800/50 border-slate-600/30 h-full text-center group hover:border-[#ECB629]/50 transition-all duration-300">
                    <div className="p-8">
                      <motion.div
                        className="text-5xl font-bold text-[#ECB629] mb-4"
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        {result.metric}
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mb-4">
                        {result.label}
                      </h3>
                      <p className="text-gray-300 mb-4">{result.description}</p>
                      <Badge
                        variant="outline"
                        className="border-slate-600 text-slate-400"
                      >
                        {result.timeline}
                      </Badge>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="bg-slate-800/60 border-[#ECB629]/20 max-w-4xl mx-auto">
                <div className="p-12">
                  <div className="w-20 h-20 bg-[#ECB629]/20 rounded-full flex items-center justify-center mb-8 mx-auto">
                    <Users className="w-10 h-10 text-[#ECB629]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Клиентите ви са вашият най-ценен актив
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Вместо постоянно да търсите нови клиенти, изграждате
                    система, която превръща всеки контакт в дългосрочна
                    стойност.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Microscope className="w-6 h-6 text-[#ECB629] mr-3" />
                        Предвидим растеж
                      </h4>
                      <p className="text-gray-300">
                        Знаете точно колко нови клиенти ще привлечете месечно и
                        каква ще бъде тяхната обща стойност с времето.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                        <FileText className="w-6 h-6 text-[#ECB629] mr-3" />
                        Автоматизирано обслужване
                      </h4>
                      <p className="text-gray-300">
                        Всеки клиент получава отлично обслужване – без нужда от
                        постоянна ръчна намеса.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment Structure */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-2 bg-slate-800/80 border border-[#ECB629] rounded-full mb-8">
                <span className="text-[#ECB629] text-sm font-medium tracking-wide">
                  ПРОЗРАЧНО ЦЕНООБРАЗУВАНЕ
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Структура на инвестицията
              </h2>

              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Инженерно проектиране изисква прецизност и в техническата спецификация
              </p>

              {/* Price Card */}
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-600/30 mb-16">
                <div className="text-sm text-[#ECB629] mb-2 tracking-wide">ЗАПОЧВА ОТ</div>
                <div className="text-6xl md:text-7xl font-bold text-[#ECB629] mb-4">
                  2890 лв.
                  <span className="text-2xl text-gray-400">/месечно</span>
                </div>
                <p className="text-gray-400">
                  *Финалната цена се определя след техническа диагностика
                </p>
              </div>

              {/* Principles */}
              <div className="text-left space-y-8">
                {[
                  {
                    number: "1",
                    title: "Персонализирано решение",
                    description: "Всяка система Clientomat™ се проектира и изгражда спрямо уникалните цели и състояние на вашия бизнес. Ние не предлагаме готови пакети."
                  },
                  {
                    number: "2", 
                    title: "Бюджетна рамка",
                    description: "За ориентация, базовите инженерни проекти започват от 2890 лв./месечно."
                  },
                  {
                    number: "3",
                    title: "Техническа спецификация", 
                    description: "Финалната инвестиция се определя след задължителна техническа диагностика. Вие получавате детайлно инженерно предложение, в което всеки компонент е ясно описан и стойностен."
                  }
                ].map((principle, index) => (
                  <motion.div
                    key={principle.number}
                    className="flex gap-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#ECB629] rounded-full flex items-center justify-center text-black font-bold text-lg">
                        {principle.number}
                      </div>
                      {index < 2 && (
                        <div className="w-0.5 h-16 bg-[#ECB629] mx-auto mt-4"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#ECB629] relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-black/10 px-4 py-2 rounded-full border border-black/20 mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-black font-medium">Остават 3 места за 2025</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Готови ли сте да автоматизирате клиентския цикъл?
            </h2>
            
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Изградете система, която работи 24/7 за привличане и задържане на клиенти с нашата проверена методология.
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
                <span>Свържете се с експертите</span>
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

      <Footer />
    </div>
  );
}