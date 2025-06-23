import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SeoStruktorBackground } from "@/components/SeoStruktorBackground";

import { motion } from "framer-motion";
import { Search, Eye, Edit, Globe, ArrowRight, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Видимост, която продава",
    description: "Сайтът ви започва да се показва пред хора, които търсят точно това, което продавате и са готови да купят."
  },
  {
    icon: Edit,
    title: "Съдържание, което убеждава",
    description: "Имате съдържание, което не просто информира, а насочва купувача към поръчка."
  },
  {
    icon: Globe,
    title: "Доверие от Google",
    description: "Google започва да ви препоръчва, защото вижда ясен, подреден сайт, който заслужава да е на върха."
  }
];

const targetAudience = [
  "Плащате за реклама, но не получавате органичен растеж",
  "Клиентите не ви намират в Google - парите ви отиват при конкурентите",
  "Чували сте за SEO, но не знаете от къде да започнете"
];

const process = [
  {
    step: "01",
    title: "Техническа диагностика",
    description: "Анализираме структурата на сайта ви и откриваме техническите проблеми, които ви държат невидими."
  },
  {
    step: "02", 
    title: "Ключови думи стратегия",
    description: "Определяме точно за какво търсят клиентите ви и как да се позиционирате пред тях."
  },
  {
    step: "03",
    title: "Съдържание оптимизация",
    description: "Създаваме и оптимизираме съдържание, което отговаря на въпросите на клиентите ви."
  },
  {
    step: "04",
    title: "Авторитет изграждане",
    description: "Изграждаме доверието на Google към вашия сайт чрез качествени връзки и сигнали."
  }
];

export default function SeoStruktor() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[var(--pravdast-dark)] to-[var(--pravdast-dark-gray)] relative overflow-hidden">
        <SeoStruktorBackground />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="w-20 h-20 mx-auto mb-8 bg-[var(--pravdast-yellow)]/10 rounded-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Search className="text-[var(--pravdast-yellow)]" size={40} />
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-[var(--pravdast-yellow)]">SEO Struktor™</span><br />
              Спрете да се скривате в Google
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Изграждаме система, която ви прави видими точно когато клиентите ви търсят. Не залагаме на късмет - използваме инженерна точност.
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
            <h2 className="text-4xl font-bold mb-6">Познавате ли тези проблеми?</h2>
            <p className="text-xl text-gray-300">
              Повечето компании губят клиенти всеки ден, защото са невидими онлайн
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
              SEO Struktor™ ви дава <span className="text-[var(--pravdast-yellow)]">контрол</span>
            </h2>
            <p className="text-xl text-gray-300">
              Вместо да чакате и се надявате, получавате система с предвидими резултати
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
              4-стъпков инженерен процес за предвидими резултати
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

      {/* Pricing Section */}
      <section className="py-20 bg-[var(--pravdast-dark-gray)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[var(--pravdast-dark)] border-[var(--pravdast-yellow)]">
                <CardContent className="p-12">
                  <h2 className="text-3xl font-bold mb-6">SEO Struktor™</h2>
                  <div className="text-4xl font-bold text-[var(--pravdast-yellow)] mb-2">
                    от 1980 лв. / месец
                  </div>
                  <p className="text-gray-400 mb-8">минимален период на договор – 3 месеца</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold mb-4">Включва:</h4>
                      <ul className="space-y-2 text-left">
                        {[
                          "Техническа SEO диагностика",
                          "Ключови думи изследване",
                          "Съдържание оптимизация",
                          "Месечни отчети с данни",
                          "Постоянна оптимизация"
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
                          "Повече органичен трафик",
                          "Квалифицирани посетители",
                          "Подобрени конверсии",
                          "Дългосрочна видимост",
                          "ROI проследяване"
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