import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Bot, Magnet, Filter, BarChart, ArrowRight, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Magnet,
    title: "Автоматично привличане на лийдове",
    description: "Системата работи 24/7 за да привлича квалифицирани потенциални клиенти към бизнеса ви."
  },
  {
    icon: Filter,
    title: "Оптимизирана продажбена фуния",
    description: "Всяка стъпка от процеса е проектирана да максимизира конверсиите."
  },
  {
    icon: BarChart,
    title: "Предвидими резултати",
    description: "Точно знаете колко лийдове и продажби да очаквате всеки месец."
  }
];

const targetAudience = [
  "Нямате постоянен поток от нови клиенти",
  "Разчитате на препоръки и случайни контакти",
  "Искате предвидим процес за генериране на продажби"
];

const process = [
  {
    step: "01",
    title: "Анализ на целевата аудитория",
    description: "Определяме точно кой е идеалният ви клиент и къде се намира онлайн."
  },
  {
    step: "02",
    title: "Създаване на магнити за лийдове",
    description: "Разработваме стойностни предложения, които привличат квалифицирани потенциални клиенти."
  },
  {
    step: "03",
    title: "Автоматизирана продажбена фуния",
    description: "Изграждаме система, която автоматично насочва лийдовете към покупка."
  },
  {
    step: "04",
    title: "Оптимизация и скалиране",
    description: "Постоянно подобряваме резултатите и увеличаваме обема на генерираните продажби."
  }
];

export default function SalesEngine() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[var(--pravdast-dark)] to-[var(--pravdast-dark-gray)] relative overflow-hidden">
        {/* Tech Background - Sales Automation Engine */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="tech-grid-bg absolute inset-0 opacity-20"></div>
          <div className="tech-lines">
            {/* Sales pipeline flow lines */}
            <motion.div
              className="tech-line"
              style={{ top: "12%", width: "400px" }}
              initial={{ x: "-100%" }}
              animate={{ x: "100vw" }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
                delay: 0,
              }}
            />
            <motion.div
              className="tech-line"
              style={{ top: "32%", width: "300px" }}
              initial={{ x: "-100%" }}
              animate={{ x: "100vw" }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5,
              }}
            />
            <motion.div
              className="tech-line"
              style={{ top: "52%", width: "450px" }}
              initial={{ x: "-100%" }}
              animate={{ x: "100vw" }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: 3.5,
              }}
            />
            <motion.div
              className="tech-line"
              style={{ top: "72%", width: "250px" }}
              initial={{ x: "-100%" }}
              animate={{ x: "100vw" }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
                delay: 5,
              }}
            />
            <motion.div
              className="tech-line"
              style={{ top: "88%", width: "180px" }}
              initial={{ x: "-100%" }}
              animate={{ x: "100vw" }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                delay: 7,
              }}
            />
          </div>
          {/* Sales engine processing nodes */}
          <motion.div
            className="absolute top-16 right-12 w-6 h-6 border-2 border-[var(--pravdast-yellow)]/50 rounded-sm rotate-45"
            animate={{ 
              rotate: [45, 405, 45],
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-32 left-16 w-3 h-3 bg-[var(--pravdast-yellow)]/60 rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute top-40 left-1/3 w-4 h-4 border border-[var(--pravdast-yellow)]/40"
            animate={{ 
              rotate: [0, 180, 360],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="w-20 h-20 mx-auto mb-8 bg-[var(--pravdast-yellow)]/10 rounded-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Bot className="text-[var(--pravdast-yellow)]" size={40} />
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-[var(--pravdast-yellow)]">Sales Engine™</span><br />
              Спрете да чакате клиенти
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Изграждаме система, която работи 24/7 за вас. Автоматизирано генериране и конвертиране на лийдове с предвидими резултати.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] hover:bg-[#d4a426] text-lg font-semibold px-8 py-4"
                onClick={() => window.open("https://form.typeform.com/to/GXLaGY98", "_blank")}
              >
                Заявете диагностика сега
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-[var(--pravdast-dark)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Чакате ли клиентите да ви намерят?</h2>
            <p className="text-xl text-gray-300">
              Повечето компании разчитат на случайни контакти вместо да имат система за постоянен поток от клиенти
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {targetAudience.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[var(--pravdast-dark-gray)] border-red-500/30 h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 bg-red-500/10 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-300 text-center">{problem}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[var(--pravdast-dark-gray)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Sales Engine™ ви дава <span className="text-[var(--pravdast-yellow)]">контрол</span>
            </h2>
            <p className="text-xl text-gray-300">
              Вместо да чакате, получавате постоянен поток от квалифицирани лийдове и продажби
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[var(--pravdast-dark)] border-[var(--pravdast-yellow)] h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-[var(--pravdast-yellow)]/10 rounded-full flex items-center justify-center">
                      <feature.icon className="text-[var(--pravdast-yellow)]" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-[var(--pravdast-yellow)]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[var(--pravdast-dark)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Как работи системата?</h2>
            <p className="text-xl text-gray-300">
              4-стъпков процес за автоматизирано генериране на продажби
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[var(--pravdast-dark-gray)] border-[var(--pravdast-medium-gray)] h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[var(--pravdast-yellow)] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-[var(--pravdast-dark)]">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-[var(--pravdast-dark-gray)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Какви резултати да очаквате?</h2>
            <p className="text-xl text-gray-300">
              Реални данни от клиенти, които използват Sales Engine™
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { metric: "£1.5M", description: "месечен приход (от £400K)" },
              { metric: "13.9K", description: "месечни посещения (от 2.3K)" },
              { metric: "350%", description: "ръст в генерирани лийдове" }
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[var(--pravdast-dark)] border-[var(--pravdast-yellow)] text-center">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-[var(--pravdast-yellow)] mb-4">
                      {result.metric}
                    </div>
                    <p className="text-gray-300">{result.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-[var(--pravdast-dark)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[var(--pravdast-dark-gray)] border-[var(--pravdast-yellow)]">
                <CardContent className="p-12">
                  <h2 className="text-3xl font-bold mb-6">Sales Engine™</h2>
                  <div className="text-4xl font-bold text-[var(--pravdast-yellow)] mb-2">
                    от 2250 лв. / месец
                  </div>
                  <p className="text-gray-400 mb-8">минимален период на договор – 3 месеца</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold mb-4">Включва:</h4>
                      <ul className="space-y-2 text-left">
                        {[
                          "Анализ на целевата аудитория",
                          "Магнити за лийдове",
                          "Автоматизирана фуния",
                          "Landing pages оптимизация",
                          "Месечни отчети с метрики"
                        ].map((item, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="text-[var(--pravdast-yellow)] flex-shrink-0" size={16} />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Резултати:</h4>
                      <ul className="space-y-2 text-left">
                        {[
                          "Постоянен поток от лийдове",
                          "Квалифицирани потенциални клиенти",
                          "Автоматизирани продажби",
                          "Предвидими приходи",
                          "Скалируем растеж"
                        ].map((item, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="text-[var(--pravdast-yellow)] flex-shrink-0" size={16} />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button
                    size="lg"
                    className="bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] hover:bg-[#d4a426] text-lg font-semibold px-8 py-4"
                    onClick={() => window.open("https://form.typeform.com/to/GXLaGY98", "_blank")}
                  >
                    Започнете сега
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}