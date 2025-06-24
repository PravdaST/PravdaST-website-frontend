import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Users, TrendingUp, Clock, Target, Zap, Bot } from "lucide-react";
import { SEOHead } from "@/components/seo-head";
import { pageSEOData } from "@/data/seo-pages";
import { Link } from "wouter";
import { motion } from "framer-motion";

const services = [
  {
    id: "seo-struktor",
    title: "SEO Struktor™",
    subtitle: "Нашата система за онлайн доминация",
    description: "Ние изграждаме вашето онлайн присъствие като крепост. Чрез прецизна структура на сайта и съдържание, което отговаря на въпросите на клиентите ви, ние ви превръщаме в авторитета, който Google показва на първо място.",
    price: "от 1980 лв. / месец",
    icon: Search,
    slug: "seo-struktor"
  },
  {
    id: "trendlab",
    title: "Trendlab™",
    subtitle: "Нашата система за създаване на въздействащо съдържание",
    description: "Ние създаваме горивото за вашия растеж. Продуцираме видеа, статии и визуални материали, които не просто изглеждат добре, а разказват вашата история, демонстрират експертизата ви и изграждат общност около вашия бранд.",
    price: "от 1350 лв. / месец",
    icon: Users,
    slug: "trendlab"
  },
  {
    id: "clickstarter",
    title: "Clickstarter™",
    subtitle: "Нашата система за ускорен растеж",
    description: "Когато имате нужда от бързи и предвидими резултати, тази система използва платени канали, за да постави вашето послание директно пред идеалните ви клиенти – в точния момент, когато те са готови да купят.",
    price: "от 2250 лв. / месец",
    icon: Bot,
    slug: "clickstarter"
  },
  {
    id: "clientomat",
    title: "Clientomat™",
    subtitle: "Нашата система за автоматизирани връзки с клиенти",
    description: "Тази система създава автоматизиран процес, който превръща заинтересования посетител в лоялен клиент. Тя поддържа връзката, отговаря на въпроси и насочва към продажба, без да изисква вашето време.",
    price: "от 1350 лв. / месец",
    icon: Users,
    slug: "clientomat"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead seo={pageSEOData.services} pageSlug="services" />
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Animated Tech Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0">
              {/* Grid Pattern */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}></div>
              
              {/* Floating Elements */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-[#ECB629] rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
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
                    <span className="text-[#ECB629] font-bold">Инженерен</span> подход за системи
                  </span>
                </div>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Инженерни системи за <br />
                <span className="text-[#ECB629] relative">
                  предвидим растеж
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Спрете да залагате на късмет. Изграждаме системи, които работят предвидимо и носят измерими резултати.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Button 
                  size="lg" 
                  className="relative bg-[#ECB629] text-black hover:bg-[#ECB629]/90 px-8 py-4 text-lg font-semibold overflow-hidden group"
                  asChild
                >
                  <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#ECB629] via-white to-[#ECB629] opacity-0 group-hover:opacity-20"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                    />
                    Разгледайте системите <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ECB629] rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#ECB629] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-sm text-gray-300 font-medium">
                  <span className="text-[#ECB629] font-bold">Проверени</span> системи за растеж
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Нашите системи
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Всяка система е проектирана да решава конкретен проблем във вашия бизнес и да генерира измерим растеж.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative bg-slate-800/50 border-slate-700 hover:border-[#ECB629]/50 transition-all duration-300 group overflow-hidden h-full">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ECB629]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <CardContent className="p-8 relative z-10">
                      <div className="mb-6">
                        <div className="relative">
                          <service.icon className="w-12 h-12 text-[#ECB629] mb-4 group-hover:scale-110 transition-transform duration-300" />
                          <motion.div
                            className="absolute inset-0 bg-[#ECB629] rounded-full opacity-20 scale-150"
                            animate={{ scale: [1.5, 1.8, 1.5] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                          />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ECB629] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-[#ECB629] text-sm mb-4 font-medium">
                          {service.subtitle}
                        </p>
                        <p className="text-gray-300 mb-6">
                          {service.description}
                        </p>
                        
                        {/* Price & Trust Signals */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="text-2xl font-bold text-[#ECB629]">
                            {service.price}
                          </div>
                          <div className="text-sm text-gray-400">
                            Без ангажименти
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629] hover:text-black group-hover:bg-[#ECB629] group-hover:text-black transition-all relative overflow-hidden"
                        asChild
                      >
                        <Link href={`/services/${service.slug}`}>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                          />
                          Научете повече <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#ECB629] relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-black rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Urgency Badge */}
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-black/10 backdrop-blur-sm border border-black/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <span className="text-sm text-black font-semibold">
                    Ограничени места за Q1 2025
                  </span>
                </div>
              </motion.div>

              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-black mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Готови за предвидим растеж?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-black/80 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Започнете с безплатна консултация и разберете коя система е най-подходяща за вашия бизнес.
              </motion.p>

              {/* Trust Signals */}
              <motion.div 
                className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-black/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-1 bg-white rounded-full rotate-45"></div>
                  </div>
                  <span>Безплатна консултация</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-1 bg-white rounded-full rotate-45"></div>
                  </div>
                  <span>Без ангажименти</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-1 bg-white rounded-full rotate-45"></div>
                  </div>
                  <span>48 часа отговор</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="relative border-2 border-black text-black hover:bg-black hover:text-[#ECB629] px-8 py-4 text-lg font-semibold overflow-hidden group"
                  asChild
                >
                  <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-0 group-hover:opacity-10"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                    />
                    Безплатна консултация <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}