import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Search,
  Users,
  Bot,
  Eye,
  Edit,
  Globe,
  Repeat,
  MessageCircle,
  Coins,
  Magnet,
  Filter,
  BarChart,
  Cog,
} from "lucide-react";

const systems = [
  {
    id: "seo",
    title: "SEO Struktor™",
    subtitle: "Нашата система за онлайн доминация",
    description:
      "Ние изграждаме вашето онлайн присъствие като крепост. Чрез прецизна структура на сайта и съдържание, което отговаря на въпросите на клиентите ви, ние ви превръщаме в авторитета, който Google показва на първо място.",
    price: "от 1980 лв. / месец",
    period: "минимален период на договор – 3 месеца",
    icon: Search,
    link: "/services/seo-struktor",
    features: [
      {
        icon: Eye,
        title: "Технически изрядна основа",
        description: "която Google разбира и харесва.",
      },
      {
        icon: Edit,
        title: "Съдържание, което изгражда доверие",
        description: "на реални клиентски въпроси и изгражда доверие.",
      },
      {
        icon: Globe,
        title: "Постоянна оптимизация",
        description: "за дългосрочно и стабилно присъствие на челни позиции.",
      },
    ],
  },
  {
    id: "trendlab",
    title: "Trendlab™",
    subtitle: "Нашата система за създаване на въздействащо съдържание",
    description:
      "Ние създаваме горивото за вашия растеж. Продуцираме видеа, статии и визуални материали, които не просто изглеждат добре, а разказват вашата история, демонстрират експертизата ви и изграждат общност около вашия бранд.",
    price: "от 1350 лв. / месец",
    period: "минимален период на договор – 3 месеца",
    icon: Edit,
    link: "/services/trendlab",
    features: [
      {
        icon: Eye,
        title: "Видео съдържание",
        description: "което ангажира и образова.",
      },
      {
        icon: MessageCircle,
        title: "Управление на социални канали",
        description: "което ви позиционира като експерт.",
      },
      {
        icon: Globe,
        title: "Съдържание, което продава",
        description: "вашата уникална история.",
      },
    ],
  },
  {
    id: "clickstarter",
    title: "Clickstarter™",
    subtitle: "Нашата система за ускорен растеж",
    description:
      "Когато имате нужда от бързи и предвидими резултати, тази система използва платени канали, за да постави вашето послание директно пред идеалните ви клиенти – в точния момент, когато те са готови да купят.",
    price: "от 2250 лв. / месец",
    period: "минимален период на договор – 3 месеца",
    icon: BarChart,
    link: "/services/clickstarter",
    features: [
      {
        icon: Filter,
        title: "Прецизно насочване",
        description:
          "Прецизно насочване към точната аудитория, без излишен разход.",
      },
      {
        icon: Coins,
        title: "Ясно измерване на възвръщаемостта",
        description: "от всеки лев, вложен в реклама.",
      },
      {
        icon: Magnet,
        title: "Бързо валидиране",
        description: "на оферти и пазарни хипотези.",
      },
    ],
  },
  {
    id: "clientomat",
    title: "Clientomat™",
    subtitle: "Нашата система за автоматизирани връзки с клиенти",
    description:
      "Тази система създава автоматизиран процес, който превръща заинтересования посетител в лоялен клиент. Тя поддържа връзката, отговаря на въпроси и насочва към продажба, без да изисква вашето време.",
    price: "от 1350 лв. / месец",
    period: "минимален период на договор – 3 месеца",
    icon: Users,
    link: "/services/clientomat",
    features: [
      {
        icon: Cog,
        title: "Автоматизиране на комуникацията",
        description: "задачи в комуникацията с клиенти.",
      },
      {
        icon: MessageCircle,
        title: "Персонализиран път за клиента",
        description: "който увеличава продажбите.",
      },
      {
        icon: Repeat,
        title: "Спестяване на време",
        description: "за да се фокусирате върху важните бизнес решения.",
      },
    ],
  },
];

export const SystemsSection = () => {
  const [activeTab, setActiveTab] = useState("seo");

  const activeSystem = systems.find((system) => system.id === activeTab);

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0">
          {/* Systems Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Connection Nodes */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#ECB629] rounded-full animate-pulse"
              style={{
                left: `${15 + i * 15}%`,
                top: `${25 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ECB629] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                <div
                  className="absolute inset-0 w-2 h-2 bg-[#ECB629] rounded-full opacity-20 animate-ping"
                />
              </div>
              <span className="text-sm text-gray-300 font-medium">
                <span className="text-[#ECB629] font-bold">Проверени</span> системи за устойчив растеж
              </span>
            </div>
          </div>

          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Нашите системи за <br />
            <span className="text-[#ECB629] relative">
              растеж:
              <div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
              />
            </span>
          </h2>

          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Всяка система е проектирана да решава конкретен проблем във вашия бизнес и да генерира измерим растеж.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tab Navigation */}
            <div className="lg:w-1/3">
              <div className="space-y-3">
                {systems.map((system, index) => (
                  <motion.div
                    key={system.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      className={`w-full p-6 rounded-xl backdrop-blur-sm transition-all duration-300 relative group ${
                        activeTab === system.id
                          ? "bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-[#ECB629] text-white shadow-lg shadow-[#ECB629]/10"
                          : "bg-slate-800/30 border border-slate-700/50 text-gray-300 hover:bg-slate-700/40 hover:border-[#ECB629]/30 hover:text-white"
                      }`}
                      onClick={() => setActiveTab(system.id)}
                    >
                      {/* Active Tab Glow */}
                      {activeTab === system.id && (
                        <div div
                          className="absolute inset-0 bg-gradient-to-r from-[#ECB629]/10 to-transparent rounded-xl"
                        />
                      )}
                      
                      {/* Hover Glow Effect */}
                      
                      <div className="relative z-10 flex items-center">
                        <div className="mr-4">
                            activeTab === system.id 
                              ? "bg-[#ECB629] text-black" 
                              : "bg-slate-700 text-gray-400 group-hover:bg-[#ECB629]/20 group-hover:text-[#ECB629]"
                          }`}>
                            <system.icon size={24} />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                            activeTab === system.id ? "text-[#ECB629]" : "text-current"
                          }`}>
                            {system.title}
                          </h3>
                          <p className="text-sm text-gray-400 line-clamp-2">{system.subtitle}</p>
                        </div>
                        
                        {/* Active Indicator */}
                        {activeTab === system.id && (
                          <div div
                            className="w-1 h-8 bg-[#ECB629] rounded-full ml-3"
                          />
                        )}
                      </div>
                    </button>
                  </div div>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="lg:w-2/3">
              <div mode="wait">
                {activeSystem && (
                  <div div
                    key={activeSystem.id}
                    exit={{ opacity: 0, y: -20 }}
                      {/* Hover Glow Effect */}
                      
                      <CardContent className="p-8 relative z-10">
                        {/* Engineering Visual */}
                        <div className="w-full h-64 mb-8 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg flex items-center justify-center border border-[#ECB629]/30 relative overflow-hidden">
                          {/* Animated Background Pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                              backgroundImage: `
                                linear-gradient(45deg, rgba(236, 182, 40, 0.1) 25%, transparent 25%),
                                linear-gradient(-45deg, rgba(236, 182, 40, 0.1) 25%, transparent 25%)
                              `,
                              backgroundSize: '20px 20px'
                            }}></div>
                          </div>
                          
                          <div className="text-center relative z-10">
                            <div div
                              className="relative"
                              whileHover={{ scale: 1.1 }}
                              <activeSystem.icon
                                className="text-[#ECB629] text-6xl mb-4 mx-auto"
                                size={96}
                              />
                              <div div
                                className="absolute inset-0 bg-[#ECB629] rounded-full opacity-10"
                              />
                            </div div>
                            
                            <div className="flex items-center justify-center space-x-4">
                              <div div 
                                className="w-12 h-12 bg-[#ECB629] rounded-full flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                                <Edit className="text-black" size={20} />
                              </div div>
                              <div div 
                                className="w-8 h-1 bg-[#ECB629]"
                              ></div div>
                              <div div 
                                className="w-12 h-12 bg-[#ECB629] rounded-full flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                                <Cog className="text-black" size={20} />
                              </div div>
                              <div div 
                                className="w-8 h-1 bg-[#ECB629]"
                              ></div div>
                              <div div 
                                className="w-12 h-12 bg-[#ECB629] rounded-full flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                                <BarChart className="text-black" size={20} />
                              </div div>
                            </div>
                          </div>
                        </div>

                        <div h3 
                          {activeSystem.title}
                        </div h3>
                        
                        <div p 
                          className="text-lg text-gray-300 mb-6"
                          {activeSystem.description}
                        </div p>

                        <div div 
                          className="flex items-center justify-between mb-6"
                          <div className="text-2xl font-bold text-[#ECB629]">
                            {activeSystem.price}
                          </div>
                          <div className="text-sm text-gray-400">
                            Без ангажименти
                          </div>
                        </div div>
                        
                        <div p 
                          className="text-sm text-gray-400 mb-8"
                          {activeSystem.period}
                        </div p>

                        <div className="space-y-6">
                          {activeSystem.features.map((feature, index) => (
                            <div div
                              key={index}
                              className="flex items-start space-x-4 group/feature"
                              whileHover={{ x: 5 }}
                                <feature.icon className="text-black text-sm" size={16} />
                              </div>
                              <div>
                                  {feature.title}
                                </h4>
                                <p className="text-gray-300">
                                  {feature.description}
                                </p>
                              </div>
                            </div div>
                          ))}
                        </div>

                        <div div
                          <Link href={activeSystem.link}>
                            <Button className="mt-8 bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold px-8 py-3 relative overflow-hidden group">
                              <div div
                                className="absolute inset-0 bg-gradient-to-r from-[#ECB629] via-white to-[#ECB629] opacity-0 group-hover:opacity-20"
                              />
                              <span className="relative z-10">Разгледай системата</span>
                            </Button>
                          </Link>
                        </div div>
                      </CardContent>
                    </Card>
                  </div div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
