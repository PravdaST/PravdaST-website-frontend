import { useState } from "react";
import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Settings,
  Zap,
  Target,
  TrendingUp,
  Wrench,
  Eye,
  Activity,
  Crown,
  FileText,
  DollarSign,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

// Animated Background for Clickstarter
const ClickstarterBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {/* Engine Optimization Grid */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="engine-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="#ECB629"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <circle cx="40" cy="40" r="2" fill="#ECB629" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#engine-grid)" />
      </svg>

      {/* Floating Engine Gears */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <Settings className="w-6 h-6 text-[#ECB629]" />
        </motion.div>
      ))}

      {/* Optimization Indicators */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`indicator-${i}`}
          className="absolute"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          <TrendingUp className="w-4 h-4 text-[#ECB629]" />
        </motion.div>
      ))}
    </div>
  );
};

export default function Clickstarter() {
  return (
    <>
      <SEOHead 
        seo={{
          title: "Clickstarter™ - Оптимизация на рекламния бюджет | Pravdast",
          description: "Прецизна настройка на вашия рекламен процес за максимална възвръщаемост. Елиминирайте загубите и максимизирайте резултата от всеки лев.",
          ogImage: "/og-clickstarter.png",
        }}
        pageSlug="services/clickstarter"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <ClickstarterBackground />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Status Badge */}
                  <motion.div
                    className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                        <div className="absolute inset-0 bg-[#ECB629] rounded-full animate-ping opacity-75"></div>
                      </div>
                      <span className="text-sm text-gray-300 font-medium">
                        <span className="text-[#ECB629] font-bold">Прецизна</span>{" "}
                        оптимизация
                      </span>
                    </div>
                  </motion.div>

                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    Вашият рекламен бюджет е мощен двигател.{" "}
                    <span className="text-[#ECB629] relative">
                      Работи ли на пълни обороти?
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                      />
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-xl text-gray-300 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Много компании харчат пари за реклама, но малко от тях извличат максималната възвръщаемост от всеки лев. Нашата система Clickstarter™ е инженерното решение, което прецизно настройва вашия рекламен процес, за да елиминира загубите и да максимизира резултата.
                  </motion.p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <a 
                      href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-[#ECB629] hover:bg-[#ECB629]/90 text-black px-8 py-4 text-lg font-semibold group">
                        Започнете оптимизацията
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </motion.div>
                </motion.div>

                {/* Right Visual */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative bg-slate-800/30 rounded-2xl p-8 border border-slate-600/30 backdrop-blur-sm">
                    {/* Engine Visualization */}
                    <div className="flex justify-center items-center h-64">
                      <motion.div
                        className="relative"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="w-32 h-32 border-4 border-[#ECB629] rounded-full flex items-center justify-center">
                          <Settings className="w-16 h-16 text-[#ECB629]" />
                        </div>
                      </motion.div>
                      
                      {/* Adjustment Hand */}
                      <motion.div
                        className="absolute right-8"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                      >
                        <Wrench className="w-8 h-8 text-[#ECB629]" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-slate-800/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ECB629] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Двигателят на вашия растеж има нужда от настройка, а не само от повече гориво.
                </h2>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Problem vs Solution Visualization */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* Problem */}
                  <Card className="bg-red-900/20 border-red-500/30">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                          <Settings className="w-8 h-8 text-red-400 animate-pulse" />
                        </div>
                        <div>
                          <Badge className="bg-red-500/20 text-red-400 border-red-500/30 mb-2">
                            ПРОБЛЕМ
                          </Badge>
                          <h3 className="text-xl font-semibold text-white">Неоптимизиран двигател</h3>
                        </div>
                      </div>
                      <p className="text-gray-300">
                        Разпилени монети, шумен процес, хабене на гориво без движение напред
                      </p>
                    </CardContent>
                  </Card>

                  {/* Solution */}
                  <Card className="bg-[#ECB629]/10 border-[#ECB629]/30">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-[#ECB629]/20 rounded-full flex items-center justify-center">
                          <Settings className="w-8 h-8 text-[#ECB629]" />
                        </div>
                        <div>
                          <Badge className="bg-[#ECB629]/20 text-[#ECB629] border-[#ECB629]/30 mb-2">
                            РЕШЕНИЕ
                          </Badge>
                          <h3 className="text-xl font-semibold text-white">Прецизна настройка</h3>
                        </div>
                      </div>
                      <p className="text-gray-300">
                        Инженерска оптимизация с ръката на експерт за максимална ефективност
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Да наливате повече пари (гориво) в рекламен процес, който не е прецизно настроен, е най-бързият начин да ги изхабите. Повечето кликове не винаги означават повече печалба. Това е като да форсирате двигателя, без да сте на скорост – шумно е, хаби гориво, но не ви движи напред.
                    </p>
                    
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30">
                      <h4 className="text-xl font-semibold text-[#ECB629] mb-4">Нашият подход:</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Ние не просто „доставяме гориво". Ние сме инженерите, които разглобяват, анализират и настройват всеки компонент на вашия двигател за растеж – от рекламното послание до процеса след клика. Целта ни е всяка капка гориво (всеки лев) да се превърне в максимална, измерима мощност.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Process */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Нашата техническа инспекция: Процесът на настройка в 4 фази
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    phase: "1",
                    title: "Диагностика и пазарен анализ",
                    description: "Анализираме вашите цели, конкуренцията и идеалния ви клиент, за да идентифицираме къде двигателят \"губи мощност\" и какъв е потенциалът за оптимизация.",
                    icon: Eye,
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    phase: "2", 
                    title: "Анализ и оптимизация на \"горивото\"",
                    description: "Ние анализираме вашите съществуващи рекламни послания. При нужда, ако те не са достатъчно ефективни, активираме системата Trendlab™, за да създадем ново, по-въздействащо \"гориво\".",
                    icon: Activity,
                    color: "from-green-500 to-green-600"
                  },
                  {
                    phase: "3",
                    title: "Оптимизация на потока след клика", 
                    description: "Всеки клик трябва да води към ясен и ефективен процес. Ние анализираме и оптимизираме целия път на клиента след рекламата. За максимални резултати и пълна автоматизация силно препоръчваме интеграцията на системата Clientomat™.",
                    icon: Target,
                    color: "from-purple-500 to-purple-600"
                  },
                  {
                    phase: "4",
                    title: "Активация, измерване и фини настройки",
                    description: "Пускаме цялостната система в действие и чрез непрекъснат анализ на данните я настройваме в реално време за максимална ефективност и възвръщаемост.",
                    icon: Settings,
                    color: "from-[#ECB629] to-yellow-500"
                  }
                ].map((phase, index) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="relative bg-slate-800/50 border-slate-700 hover:border-[#ECB629]/50 transition-all duration-300 group h-full">
                      <CardContent className="p-6 h-full flex flex-col">
                        {/* Phase Number & Icon */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-white font-bold text-lg`}>
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
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expected Results */}
        <section className="py-20 bg-slate-800/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ECB629] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Спрете да се надявате. Започнете да изчислявате.
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Target,
                    title: "Пълна финансова прозрачност и контрол",
                    description: "върху рекламния ви бюджет"
                  },
                  {
                    icon: TrendingUp,
                    title: "Ясен, измерим \"Мултипликатор на инвестицията\"",
                    description: "за всеки вложен лев"
                  },
                  {
                    icon: Zap,
                    title: "Елиминиране на \"разхищението на аудитория\"",
                    description: "чрез хирургически прецизно таргетиране"
                  },
                  {
                    icon: Crown,
                    title: "Ускорен растеж",
                    description: "и бързо валидиране на пазарни хипотези с минимален риск"
                  }
                ].map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="relative bg-slate-800/50 border-slate-700 hover:border-[#ECB629]/50 transition-all duration-300 group h-full">
                      <CardContent className="p-6 text-center h-full flex flex-col">
                        <div className="w-16 h-16 bg-[#ECB629]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ECB629]/30 transition-colors">
                          <result.icon className="w-8 h-8 text-[#ECB629]" />
                        </div>
                        
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <h3 className="text-lg font-semibold text-white">
                            {result.title}
                          </h3>
                        </div>
                        
                        <p className="text-gray-400 text-sm">
                          {result.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
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
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Инвестиция по чертеж, а не на сляпо.
                </h2>
                
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-600/30 mb-8">
                  <div className="flex justify-center items-center gap-4 mb-6">
                    <FileText className="w-12 h-12 text-[#ECB629]" />
                    <DollarSign className="w-8 h-8 text-[#ECB629]" />
                  </div>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Базовата инвестиция за този инженерен проект започва от 
                    <span className="text-[#ECB629] font-bold"> 1570 лв./месец + рекламен бюджет</span>. 
                    Крайната стойност се дефинира след техническата диагностика. Вие получавате прозрачен инженерен план, където всеки компонент и всеки лев са напълно обосновани.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-[#ECB629] text-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-black rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Готови ли сте да превърнете разходите в предвидима инвестиция?
                </h2>
                
                <div className="bg-black/10 rounded-2xl p-8 mb-8">
                  <p className="text-xl mb-6 opacity-90 leading-relaxed">
                    Нашият инженерен процес е задълбочен и изисква пълна отдаденост, за да гарантираме реални резултати. Поради тази причина, за следващия месец имаме капацитет да приемем само 
                    <span className="font-bold text-black"> 3 нови проекта</span> за техническа диагностика.
                  </p>
                  
                  <a 
                    href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="bg-black text-[#ECB629] hover:bg-gray-900 px-8 py-4 text-xl font-semibold mb-4">
                      Запазете едно от 3-те места
                    </Button>
                  </a>
                  
                  <div className="flex items-center justify-center gap-2 text-black/80">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">
                      Ще се свържем с вас в рамките на 48 часа, за да потвърдим наличността.
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}