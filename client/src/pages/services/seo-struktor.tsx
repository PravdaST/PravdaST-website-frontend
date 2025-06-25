import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { 
  Search, 
  BarChart, 
  TrendingUp, 
  Target,
  CheckCircle,
  ArrowRight,
  Eye,
  Settings,
  Globe
} from "lucide-react";
import { SEOHead } from "@/components/seo-head";
import { pageSEOData } from "@/data/seo-pages";

const SEOStruktorPage = () => {
  const philosophyRef = useRef(null);
  const isInView = useInView(philosophyRef);

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead seo={pageSEOData["services/seo-struktor"]} pageSlug="services/seo-struktor" />
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0">
            {/* SEO Grid */}
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}></div>
            
            {/* SEO Ranking Nodes */}
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
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Search Signal Lines */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent opacity-30"
                style={{
                  left: `${5 + i * 15}%`,
                  top: `${20 + i * 15}%`,
                  width: '200px',
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
                  ease: "easeInOut"
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
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">
                    SEO Struktor™ <span className="text-[#ECB629] font-bold">система</span>
                  </span>
                </div>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Спрете да се крие от Google
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Инженерна система за SEO, която ви извежда на първа страница и задържа там. Не гадаене - точна наука.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-[#ECB629]/25 transition-all duration-300"
                  asChild
                >
                  <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                    Безплатна SEO диагностика
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            ref={philosophyRef}
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Хаос или система?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Повечето компании правят SEO на случаен принцип. Ние го третираме като точна инженерна наука.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Search,
                  title: "Сайтът ви е невидим",
                  description: "в Google търсенията"
                },
                {
                  icon: Target,
                  title: "Нямате система",
                  description: "за SEO оптимизация"
                },
                {
                  icon: TrendingUp,
                  title: "Искате доминация",
                  description: "в търсачките"
                }
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                >
                  <Card className="bg-slate-800/50 border-slate-600/30 h-full">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-[#ECB629]/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                        <point.icon className="w-8 h-8 text-[#ECB629]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{point.title}</h3>
                      <p className="text-gray-300">{point.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <Card className="bg-gradient-to-r from-[#ECB629]/10 to-[#ECB629]/5 border-[#ECB629]/20 max-w-4xl mx-auto">
                <CardContent className="p-12">
                  <div className="w-20 h-20 bg-[#ECB629]/20 rounded-full flex items-center justify-center mb-8 mx-auto">
                    <CheckCircle className="w-10 h-10 text-[#ECB629]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    SEO Struktor™ ви дава контрол
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Вместо да се губите в хаоса, доминирате търсенията с научен подход
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div>
                      <Eye className="w-8 h-8 text-[#ECB629] mb-4" />
                      <h4 className="text-xl font-bold text-white mb-4">Техническа основа</h4>
                      <p className="text-gray-300">
                        която Google разбира и харесва.
                      </p>
                    </div>
                    <div>
                      <Settings className="w-8 h-8 text-[#ECB629] mb-4" />
                      <h4 className="text-xl font-bold text-white mb-4">Съдържание, което изгражда доверие</h4>
                      <p className="text-gray-300">
                        на реални клиентски въпроси.
                      </p>
                    </div>
                    <div>
                      <Globe className="w-8 h-8 text-[#ECB629] mb-4" />
                      <h4 className="text-xl font-bold text-white mb-4">Постоянна оптимизация</h4>
                      <p className="text-gray-300">
                        за дългосрочна доминация.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#ECB629] text-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Готови ли сте да спрете да <br />
              се <span className="text-black">импровизирате?</span>
            </motion.h2>

            <motion.p 
              className="text-xl text-gray-800 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Безплатната ни диагностика ще ви покаже точно какво се случва с вашето SEO и как да стигнете до първа страница.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-black text-[#ECB629] hover:bg-black/90 font-bold text-xl px-12 py-6 rounded-lg shadow-lg hover:shadow-black/30 transition-all duration-300"
                asChild
              >
                <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                  Започнете безплатната диагностика
                  <ArrowRight className="ml-3 w-6 h-6" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOStruktorPage;