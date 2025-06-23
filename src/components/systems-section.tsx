import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Users, Bot, Eye, Edit, Globe, Repeat, MessageCircle, Coins, Magnet, Filter, BarChart, Cog } from "lucide-react";
import { Link } from "wouter";

const systems = [
  {
    id: "seo",
    title: "SEO Struktor™",
    subtitle: "Нашата система за онлайн доминация",
    description: "Ние изграждаме вашето онлайн присъствие като крепост. Чрез прецизна структура на сайта и съдържание, което отговаря на въпросите на клиентите ви, ние ви превръщаме в авторитета, който Google показва на първо място.",
    price: "от 1980 лв. / месец",
    period: "минимален период на договор – 3 месеца",
    icon: Search,
    link: "/services/seo-struktor",
    features: [
      {
        icon: Eye,
        title: "Технически изрядна основа",
        description: "Технически изрядна основа, която Google разбира и харесва."
      },
      {
        icon: Edit,
        title: "Съдържание, което изгражда доверие",
        description: "Съдържание, което отговаря на реални клиентски въпроси и изгражда доверие."
      },
      {
        icon: Globe,
        title: "Постоянна оптимизация",
        description: "Постоянна оптимизация за дългосрочно и стабилно присъствие на челни позиции."
      }
    ]
  },
  {
    id: "trendlab",
    title: "Trendlab™",
    subtitle: "Нашата система за създаване на въздействащо съдържание",
    description: "Ние създаваме горивото за вашия растеж. Продуцираме видеа, статии и визуални материали, които не просто изглеждат добре, а разказват вашата история, демонстрират експертизата ви и изграждат общност около вашия бранд.",
    price: "от 1350 лв. / месец",
    period: "минимален период на договор – 3 месеца",
    icon: Edit,
    link: "/services/trendlab",
    features: [
      {
        icon: Eye,
        title: "Видео съдържание",
        description: "Създаване на видео съдържание, което ангажира и образова."
      },
      {
        icon: MessageCircle,
        title: "Управление на социални канали",
        description: "Управление на социални канали, което ви позиционира като експерт."
      },
      {
        icon: Globe,
        title: "Съдържание, което продава",
        description: "Превръщане на вашата уникална история в съдържание, което продава."
      }
    ]
  },
  {
    id: "clickstarter",
    title: "Clickstarter™",
    subtitle: "Нашата система за ускорен растеж",
    description: "Когато имате нужда от бързи и предвидими резултати, тази система използва платени канали, за да постави вашето послание директно пред идеалните ви клиенти – в точния момент, когато те са готови да купят.",
    price: "от 2250 лв. / месец",
    period: "минимален период на договор – 3 месеца",
    icon: BarChart,
    link: "/services/clickstarter",
    features: [
      {
        icon: Filter,
        title: "Прецизно насочване",
        description: "Прецизно насочване към точната аудитория, без излишен разход."
      },
      {
        icon: Coins,
        title: "Ясно измерване на възвръщаемостта",
        description: "Ясно измерване на възвръщаемостта от всеки лев, вложен в реклама."
      },
      {
        icon: Magnet,
        title: "Бързо валидиране",
        description: "Бързо валидиране на оферти и пазарни хипотези."
      }
    ]
  },
  {
    id: "clientomat",
    title: "Clientomat™",
    subtitle: "Нашата система за автоматизирани връзки с клиенти",
    description: "Тази система създава автоматизиран процес, който превръща заинтересования посетител в лоялен клиент. Тя поддържа връзката, отговаря на въпроси и насочва към продажба, без да изисква вашето време.",
    price: "от 1350 лв. / месец",
    period: "минимален период на договор – 3 месеца",
    icon: Users,
    link: "/services/clientomat",
    features: [
      {
        icon: Cog,
        title: "Автоматизиране на комуникацията",
        description: "Автоматизиране на повтаряеми задачи в комуникацията с клиенти."
      },
      {
        icon: MessageCircle,
        title: "Персонализиран път за клиента",
        description: "Изграждане на персонализиран път за всеки клиент, който увеличава продажбите."
      },
      {
        icon: Repeat,
        title: "Спестяване на време",
        description: "Спестяване на вашето време, за да се фокусирате върху важните бизнес решения."
      }
    ]
  }
];

export const SystemsSection = () => {
  const [activeTab, setActiveTab] = useState("seo");

  const activeSystem = systems.find(system => system.id === activeTab);

  return (
    <section className="py-20 bg-[var(--pravdast-dark)]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm text-gray-300 font-medium">
              <span className="text-[var(--pravdast-yellow)]">
                <b>Проверени</b>
              </span>{" "}
              системи за устойчив растеж
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Нашите системи за растеж:
          </h2>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tab Navigation */}
            <div className="lg:w-1/3">
              <div className="space-y-4">
                {systems.map((system) => (
                  <motion.button
                    key={system.id}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                      activeTab === system.id
                        ? 'bg-[var(--pravdast-dark-gray)] border border-[var(--pravdast-yellow)] text-[var(--pravdast-yellow)]'
                        : 'bg-[var(--pravdast-dark-gray)] border border-[var(--pravdast-medium-gray)] text-gray-300 hover:bg-[var(--pravdast-yellow)]/10 hover:border-[var(--pravdast-yellow)] hover:text-[var(--pravdast-yellow)]'
                    }`}
                    onClick={() => setActiveTab(system.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <h3 className="text-xl font-semibold mb-2">{system.title}</h3>
                    <p className="text-sm text-gray-400">{system.subtitle}</p>
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                {activeSystem && (
                  <motion.div
                    key={activeSystem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="bg-[var(--pravdast-dark-gray)] border-[var(--pravdast-yellow)]">
                      <CardContent className="p-8">
                        {/* Engineering Visual */}
                        <div className="w-full h-64 mb-8 bg-gradient-to-r from-[var(--pravdast-dark)] to-[var(--pravdast-medium-gray)] rounded-lg flex items-center justify-center border border-[var(--pravdast-yellow)]/30">
                          <div className="text-center">
                            <activeSystem.icon className="text-[var(--pravdast-yellow)] text-6xl mb-4 mx-auto" size={96} />
                            <div className="flex items-center justify-center space-x-4">
                              <div className="w-12 h-12 bg-[var(--pravdast-yellow)] rounded-full flex items-center justify-center">
                                <Edit className="text-[var(--pravdast-dark)]" size={20} />
                              </div>
                              <div className="w-8 h-1 bg-[var(--pravdast-yellow)]"></div>
                              <div className="w-12 h-12 bg-[var(--pravdast-yellow)] rounded-full flex items-center justify-center">
                                <Cog className="text-[var(--pravdast-dark)]" size={20} />
                              </div>
                              <div className="w-8 h-1 bg-[var(--pravdast-yellow)]"></div>
                              <div className="w-12 h-12 bg-[var(--pravdast-yellow)] rounded-full flex items-center justify-center">
                                <BarChart className="text-[var(--pravdast-dark)]" size={20} />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-3xl font-bold mb-4 text-[var(--pravdast-yellow)]">
                          {activeSystem.title}
                        </h3>
                        <p className="text-lg text-gray-300 mb-6">
                          {activeSystem.description}
                        </p>
                        
                        <div className="text-2xl font-bold text-[var(--pravdast-yellow)] mb-6">
                          {activeSystem.price}
                        </div>
                        <p className="text-sm text-gray-400 mb-8">
                          {activeSystem.period}
                        </p>
                        
                        <div className="space-y-6">
                          {activeSystem.features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-4">
                              <div className="w-8 h-8 bg-[var(--pravdast-yellow)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <feature.icon className="text-[var(--pravdast-dark)] text-sm" size={16} />
                              </div>
                              <div>
                                <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                                <p className="text-gray-300">{feature.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <Link href={activeSystem.link}>
                          <Button 
                            className="mt-8 bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] hover:bg-[#d4a426] font-semibold px-8 py-3"
                          >
                            Разгледай системата
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
