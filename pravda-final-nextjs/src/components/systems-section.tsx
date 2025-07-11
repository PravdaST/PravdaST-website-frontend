'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
} from "lucide-react"
import Link from "next/link"

const systems = [
  {
    id: "seo",
    title: "SEO Struktor™",
    subtitle: "Система за онлайн доминация",
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
        description: "на реални клиентски въпроси.",
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
    subtitle: "Система за създаване на въздействащо съдържание",
    description:
      "Ние създаваме горивото за вашия растеж. Продуцираме видеа, статии и визуални материали, които не просто изглеждат добре, а разказват вашата история, демонстрират експертизата ви и изграждат общност около вашия бранд.",
    price: "от 3450 лв. / месец",
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
    subtitle: "Система за ускорен растеж",
    description:
      "Когато имате нужда от бързи и предвидими резултати, тази система използва платени канали, за да постави вашето послание директно пред идеалните ви клиенти – в точния момент, когато те са готови да купят.",
    price: "от 1570 лв. / месец",
    period: "минимален период на договор – 3 месеца",
    icon: BarChart,
    link: "/services/clickstarter",
    features: [
      {
        icon: Filter,
        title: "Прецизно насочване",
        description: "към точната аудитория, без излишен разход.",
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
    subtitle: "Система за автоматизирани връзки с клиенти",
    description:
      "Тази система създава автоматизиран процес, който превръща заинтересования посетител в лоялен клиент. Тя поддържа връзката, отговаря на въпроси и насочва към продажба, без да изисква вашето време.",
    price: "от 2750 лв. / месец",
    period: "минимален период на договор – 3 месеца",
    icon: Users,
    link: "/services/clientomat",
    features: [
      {
        icon: Cog,
        title: "Автоматизиране на комуникацията",
        description: "с клиенти.",
      },
      {
        icon: MessageCircle,
        title: "Персонализиран път за клиента",
        description: "който увеличава продажбите.",
      },
      {
        icon: Repeat,
        title: "Постоянно развитие",
        description: "на взаимоотношенията с клиентите.",
      },
    ],
  },
]

export function SystemsSection() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Нашите <span className="text-yellow-400">системи</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Проверени решения за всеки етап от растежа на вашия бизнес
            </p>
          </motion.div>

          {/* Systems Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {systems.map((system, index) => (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full bg-slate-800/50 border-slate-700 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/10">
                  <CardContent className="p-8 flex flex-col h-full">
                    {/* Icon & Status */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-4 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400/20 transition-all duration-300">
                        <system.icon className="h-8 w-8 text-yellow-400" />
                      </div>
                      <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">
                        АКТИВНА
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 mb-2">
                          {system.title}
                        </h3>
                        <p className="text-yellow-400 font-semibold text-sm mb-3">
                          {system.subtitle}
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {system.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        {system.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <feature.icon className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-white text-sm font-medium">
                                {feature.title}
                              </p>
                              <p className="text-gray-400 text-xs">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 pt-6 border-t border-slate-700">
                      <div className="text-center mb-4">
                        <p className="text-2xl font-bold text-yellow-400">
                          {system.price}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {system.period}
                        </p>
                      </div>
                      
                      <Link href={system.link}>
                        <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300">
                          Научете повече
                        </Button>
                      </Link>
                    </div>

                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}