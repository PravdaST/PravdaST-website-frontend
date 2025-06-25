import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Search,
  Users,
  BarChart,
  Edit,
  Eye,
  Globe,
  Repeat,
  MessageCircle,
  Coins,
  Magnet,
  Filter,
  Cog,
} from "lucide-react";
import { Link } from "wouter";

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
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#ECB629] rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${25 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -5, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
                <span className="text-[#ECB629] font-bold">Проверени</span> системи за устойчив растеж
              </span>
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Нашите системи за <br />
            <span className="text-[#ECB629] relative">
              растеж:
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Всяка система е проектирана да решава конкретен проблем във вашия бизнес и да генерира измерим растеж.
          </motion.p>
        </motion.div>

        {/* Modern Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {systems.map((system, index) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* System Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/90 border border-[#ECB629]/20 p-6 h-full backdrop-blur-sm hover:border-[#ECB629]/40 transition-all duration-300 group-hover:transform group-hover:scale-105">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(rgba(236, 182, 40, 0.2) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(236, 182, 40, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECB629]/20 border border-[#ECB629]/40">
                    <div className="w-2 h-2 bg-green-500 rounded-full">
                      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <span className="text-xs text-[#ECB629] font-medium">АКТИВНА</span>
                  </div>
                </div>
                
                <div className="relative z-10">
                  {/* Icon Section */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ECB629] to-[#ECB629]/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <system.icon className="text-black" size={32} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-[#ECB629]">
                        {system.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-tight">
                        {system.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                    {system.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {system.features.slice(0, 2).map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-[#ECB629] rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-[#ECB629] font-medium">{feature.title}:</span>
                          <span className="text-gray-300 ml-1">{feature.description}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Pricing */}
                  <div className="border-t border-gray-700 pt-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{system.price}</div>
                      <div className="text-xs text-gray-400">{system.period}</div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Link href={system.link}>
                    <Button 
                      className="w-full bg-gradient-to-r from-[#ECB629] to-[#ECB629]/80 hover:from-[#ECB629]/90 hover:to-[#ECB629]/70 text-black font-semibold py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#ECB629]/20"
                    >
                      Научи повече
                    </Button>
                  </Link>
                </div>
                
                {/* Floating Success Elements */}
                <div className="absolute bottom-4 left-4 opacity-20">
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 bg-[#ECB629] rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};