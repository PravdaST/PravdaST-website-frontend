import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Network,
  User,
  Settings,
  Search,
  FileText,
  Plug,
  TrendingUp,
  Zap,
  Clock,
  BarChart3,
  Target,
  Power,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "wouter";

const ClientomatPage = () => {
  const philosophyRef = useRef(null);
  const isInView = useInView(philosophyRef);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0">
            {/* Network Grid */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
              `,
                backgroundSize: "60px 60px",
              }}
            ></div>

            {/* Communication Nodes */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-[#ECB629] rounded-full"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${15 + (i % 4) * 20}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Connection Lines */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent opacity-30"
                style={{
                  left: `${5 + i * 15}%`,
                  top: `${20 + i * 15}%`,
                  width: "200px",
                  transform: `rotate(${i * 30}deg)`,
                }}
                animate={{
                  opacity: [0.1, 0.5, 0.1],
                  scaleX: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                    <motion.div
                      className="absolute inset-0 w-2 h-2 bg-[#ECB629] rounded-full opacity-20"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
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
                Всяко пропуснато запитване <br />е{" "}
                <span className="text-[#ECB629] relative">
                  изгубен клиент
                  <motion.div
                    className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Докато вие сте заети да управлявате бизнеса си, потенциални
                клиенти остават без отговор. Нашата система Clientomat™ работи
                като ваш 24/7 дигитален асистент, който посреща, квалифицира и
                насочва всяко запитване, без да пропуска нито една възможност.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <Button
                    size="lg"
                    className="relative bg-[#ECB629] text-black hover:bg-[#ECB629]/90 px-8 py-4 md:px-12 md:py-6 text-base md:text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  >
                    Спрете да губите клиенти
                    <Network className="ml-3 h-5 w-5 md:h-6 md:w-6" />
                  </Button>
                </a>
              </motion.div>
            </div>

            {/* Visual Network Representation */}
            <motion.div
              className="w-full max-w-2xl mx-auto h-64 bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-2xl border border-[#ECB629]/20 relative overflow-hidden flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {/* Central Network Hub */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 bg-[#ECB629] rounded-full flex items-center justify-center relative z-10"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Network className="text-black" size={40} />
                </motion.div>

                {/* Surrounding Connection Points */}
                {[...Array(6)].map((_, i) => {
                  const angle = i * 60 * (Math.PI / 180);
                  const radius = 80;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={i}
                      className="absolute w-8 h-8 bg-[#ECB629]/30 rounded-full flex items-center justify-center"
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        className="py-20 bg-slate-800/50 relative overflow-hidden"
        ref={philosophyRef}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(45deg, rgba(236, 182, 40, 0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(236, 182, 40, 0.1) 25%, transparent 25%)
            `,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Човешкият фактор срещу <br />
              <span className="text-[#ECB629]">системния процес</span>
            </h2>
          </motion.div>

          {/* Enhanced Transformation Animation */}
          <div className="max-w-6xl mx-auto mb-16">
            <motion.div
              className="bg-slate-800/60 rounded-2xl p-8 border border-slate-600/30 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                    linear-gradient(45deg, rgba(236, 182, 40, 0.1) 25%, transparent 25%),
                    linear-gradient(-45deg, rgba(236, 182, 40, 0.1) 25%, transparent 25%)
                  `,
                    backgroundSize: "20px 20px",
                  }}
                ></div>
              </div>

              <div className="grid md:grid-cols-3 gap-12 items-center relative z-10">
                {/* Human Factor Side */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/30 mb-4 relative">
                      <User className="text-red-400" size={40} />
                      <motion.div
                        className="absolute inset-0 bg-red-500 rounded-full opacity-10"
                        animate={{ scale: [1.1, 1.3, 1.1] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-red-300 mb-3">
                      Човешки фактор
                    </h3>
                  </div>

                  {/* Chaotic Communication Lines */}
                  <div className="relative h-24 flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute bg-red-400 rounded-full"
                        style={{
                          width: `${2 + i * 2}px`,
                          height: "2px",
                          transform: `rotate(${i * 36 - 72}deg) translateX(${15 + i * 8}px)`,
                        }}
                        animate={{
                          opacity: [0.2, 0.8, 0.2],
                          scaleX: [0.5, 1.5, 0.5],
                        }}
                        transition={{
                          duration: 2 + i * 0.3,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut",
                        }}
                      />
                    ))}

                    {/* Center chaos indicator */}
                    <motion.div
                      className="w-4 h-4 bg-red-500 rounded-full opacity-60"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>

                  <div className="space-y-2 text-sm text-gray-400">
                    <p>• Непоследователни отговори</p>
                    <p>• Забравени запитвания</p>
                    <p>• Различно качество</p>
                  </div>
                </motion.div>

                {/* Transformation Arrow */}
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="relative">
                    <motion.div
                      className="w-16 h-16 bg-[#ECB629] rounded-full flex items-center justify-center relative"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <ArrowRight className="text-black" size={32} />
                    </motion.div>

                    {/* Transformation rings */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 border-2 border-[#ECB629] rounded-full"
                        style={{
                          transform: `scale(${1.2 + i * 0.3})`,
                          opacity: 0.3 - i * 0.1,
                        }}
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 6 + i * 2,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* System Process Side */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-[#ECB629]/20 rounded-full flex items-center justify-center border border-[#ECB629]/30 mb-4 relative">
                      <Settings className="text-[#ECB629]" size={40} />
                      <motion.div
                        className="absolute inset-0 bg-[#ECB629] rounded-full opacity-10"
                        animate={{ scale: [1.1, 1.3, 1.1] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-[#ECB629] mb-3">
                      Системен процес
                    </h3>
                  </div>

                  {/* Organized Communication Lines */}
                  <div className="relative h-24 flex items-center justify-center mb-4">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute bg-[#ECB629] rounded-full"
                        style={{
                          width: "40px",
                          height: "2px",
                          top: `${i * 6}px`,
                        }}
                        animate={{
                          opacity: [0.4, 0.9, 0.4],
                          scaleX: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut",
                        }}
                      />
                    ))}

                    {/* System flow indicators */}
                    <motion.div
                      className="absolute right-0 w-2 h-2 bg-[#ECB629] rounded-full"
                      animate={{
                        x: [-50, 0, -50],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• Еднакво високо качество</p>
                    <p>• 24/7 достъпност</p>
                    <p>• Автоматизиран отговор</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Content Cards */}
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {/* Problem Card */}
            <motion.div
              className="bg-slate-800/60 rounded-xl p-8 border border-red-500/20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-red-300">Проблемът</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Когато разчитате на ръчна комуникация, резултатите винаги са
                различни. Едно запитване получава перфектен отговор, друго е
                забравено. Тази непоследователност струва скъпо.
              </p>
            </motion.div>

            {/* Solution Card */}
            <motion.div
              className="bg-slate-800/60 rounded-xl p-8 border border-[#ECB629]/20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-[#ECB629] rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-[#ECB629]">
                  Нашият подход
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Ние елиминираме случайността. Чрез Clientomat™ ние изграждаме
                предвидим, автоматизиран диалог, който гарантира, че всеки
                клиент получава едно и също високо ниво на обслужване, всеки
                път.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineering Process Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Как изграждаме вашия <br />
              <span className="text-[#ECB629]">
                автоматизиран комуникационен поток
              </span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  phase: "1",
                  title: "Анализ на комуникацията",
                  description:
                    "Проучваме как и откъде идват вашите запитвания и какъв е пътят на клиента от първия контакт до сделката.",
                  icon: Search,
                  duration: "1-2 седмици",
                  deliverables: "Карта на комуникационните канали",
                },
                {
                  phase: "2",
                  title: "Проектиране на потока",
                  description:
                    "Проектираме логиката на системата – последователността от автоматизирани допирни точки, които ще изграждат доверие и ще водят към продажба.",
                  icon: FileText,
                  duration: "2-3 седмици",
                  deliverables: "Детайлна схема на автоматизацията",
                },
                {
                  phase: "3",
                  title: "Техническо внедряване",
                  description:
                    "Свързваме системата с вашия сайт и канали за комуникация и я тестваме обстойно.",
                  icon: Plug,
                  duration: "3-4 седмици",
                  deliverables: "Функционираща система",
                },
                {
                  phase: "4",
                  title: "Оптимизация и анализ",
                  description:
                    "Анализираме данните и постоянно подобряваме системата за по-висока ефективност.",
                  icon: TrendingUp,
                  duration: "Непрекъснато",
                  deliverables: "Месечни доклади за оптимизация",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 rounded-2xl p-8 border border-slate-600/30 relative overflow-hidden group hover:border-[#ECB629]/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ECB629]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="flex items-start gap-6 relative z-10">
                    {/* Phase Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#ECB629] rounded-full flex items-center justify-center mb-4 relative group-hover:scale-105 transition-transform duration-300">
                        <span className="text-black font-bold text-xl">
                          {step.phase}
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-[#ECB629] rounded-full opacity-10"
                          animate={{ scale: [1.1, 1.3, 1.1] }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 1,
                          }}
                        />
                      </div>

                      <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mx-2">
                        <step.icon className="text-[#ECB629]" size={24} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ECB629] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Details */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-700/30 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="text-[#ECB629]" size={16} />
                            <span className="text-sm font-semibold text-[#ECB629]">
                              Продължителност
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm">
                            {step.duration}
                          </p>
                        </div>

                        <div className="bg-slate-700/30 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="text-[#ECB629]" size={16} />
                            <span className="text-sm font-semibold text-[#ECB629]">
                              Резултат
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm">
                            {step.deliverables}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-slate-800/50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Крайният резултат: <br />
              <span className="text-[#ECB629]">
                Повече време за вас, повече приходи за бизнеса
              </span>
            </h2>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Секундни отговори",
                description:
                  "Всеки потенциален клиент получава отговор за секунди, 24/7",
                metric: "< 5 сек",
                color: "text-blue-400",
              },
              {
                icon: Clock,
                title: "Освободено време",
                description:
                  "Освобождавате часове от вашето време от повтарящи се, административни задачи",
                metric: "80% време",
                color: "text-green-400",
              },
              {
                icon: BarChart3,
                title: "Скалируемост",
                description:
                  "Изграждате предвидим и скалируем процес на продажби, който не зависи от човешкия фактор",
                metric: "∞ капацитет",
                color: "text-purple-400",
              },
              {
                icon: Target,
                title: "Висока конверсия",
                description:
                  "Увеличавате успеваемостта чрез последователна и професионална комуникация",
                metric: "+40% ROI",
                color: "text-[#ECB629]",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/60 rounded-xl p-6 border border-slate-600/30 hover:border-[#ECB629]/30 transition-all duration-300 group text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center border group-hover:scale-110 transition-transform duration-300 ${benefit.color.replace("text-", "bg-").replace("400", "500/20")} ${benefit.color.replace("text-", "border-").replace("400", "500/30")}`}
                  >
                    <benefit.icon className={`${benefit.color}`} size={32} />
                  </div>
                  <motion.div
                    className={`absolute inset-0 rounded-full opacity-5 ${benefit.color.replace("text-", "bg-").replace("400", "500")}`}
                    animate={{ scale: [1.1, 1.3, 1.1] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 1,
                    }}
                  />
                </div>

                <div className={`text-2xl font-bold mb-2 ${benefit.color}`}>
                  {benefit.metric}
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">
                  {benefit.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Structure Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              <span className="text-[#ECB629]">Структура на инвестицията</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  number: "1",
                  title: "Персонализирано решение",
                  description:
                    "Всяка система Clientomat™ се проектира спрямо вашите уникални процеси. Ние не предлагаме готови пакети.",
                },
                {
                  number: "2",
                  title: "Бюджетна рамка",
                  description:
                    "За ориентация, базовите инженерни проекти започват от 1750 лв./месец.",
                },
                {
                  number: "3",
                  title: "Техническа спецификация",
                  description:
                    "Финалната инвестиция се определя след техническа диагностика. Вие получавате детайлно инженерно предложение, в което всеки компонент е ясно описан и остойностен.",
                },
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/30 rounded-xl p-8 border-l-4 border-[#ECB629]"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#ECB629] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-lg">
                        {principle.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700 relative overflow-hidden">
        {/* Power Button Glow */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <motion.div
            className="w-96 h-96 rounded-full border-4 border-[#ECB629]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 mx-auto bg-[#ECB629]/20 rounded-full flex items-center justify-center border border-[#ECB629]/30 mb-8">
                <Power className="text-[#ECB629]" size={48} />
              </div>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Готови ли сте да включите <br />
              бизнеса си на <span className="text-[#ECB629]">автопилот?</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Нашата експертна диагностика ще анализира настоящия ви процес по
              обработка на запитвания и ще ви покаже точно къде губите време и
              клиенти. Работим с ограничен брой клиенти всеки месец, за да
              гарантираме качество.
            </motion.p>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <Button
                  size="lg"
                  className="relative bg-[#ECB629] text-black hover:bg-[#ECB629]/90 px-8 py-4 md:px-12 md:py-6 text-base md:text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                >
                  Получете своя диагностичен доклад
                  <Power className="ml-3 h-5 w-5 md:h-6 md:w-6" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/60 border border-[#ECB629]/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300 font-medium">
                Диагностика за този месец: остават само{" "}
                <span className="text-[#ECB629] font-bold">
                  3 свободни места
                </span>
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientomatPage;
