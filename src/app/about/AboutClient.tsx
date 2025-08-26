"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ProfileCard } from "@/components/reactbits";
import {
  Target,
  Shield,
  Zap,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
  Calendar,
  Code,
  Briefcase,
  Mail,
  Linkedin,
  Star,
  Clock,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const values = [
  {
    icon: Target,
    title: "Прецизност",
    description:
      "Всяко решение е базирано на данни, а не на предположения. Измерваме всичко и оптимизираме постоянно.",
  },
  {
    icon: Shield,
    title: "Прозрачност",
    description:
      "Никакви скрити такси или неясни процеси. Знаете точно какво правим и защо го правим.",
  },
  {
    icon: Zap,
    title: "Ефективност",
    description:
      "Не губим време с експерименти. Прилагаме проверени системи, които дават предвидими резултати.",
  },
];

const teamMembers = [
  {
    id: "simo",
    name: "Симеон Сираков",
    role: "Бизнес директор",
    image: "/Simo.webp",
    description:
      "Ръководи стратегическото развитие и бизнес операциите на агенцията.",
    experience: "8+ години",
    location: "Варна, България",
    specialties: [
      "Продуктова и бизнес стратегия",
      "Управление на жизнен цикъл на продукта",
      "Растеж на приходи",
      "Операционно управление и партньорства",
    ],
    achievements: [],
    bio: "В ролята си на Бизнес директор, аз съм двигателят, който свързва пазарните възможности с продуктовото развитие в Pravda Agency. Чрез управление на целия жизнен цикъл на продукта – от идеята до пазарната реализация – аз гарантирам, че създаваме стойност, която генерира реален растеж на приходите. За мен успехът се измерва с процъфтяващия бизнес на нашите партньори и създаването на решения с трайно пазарно въздействие.",
    email: "simo@pravdast.agency",
    linkedin: "linkedin.com/in/simeonsirakov",
  },
  {
    id: "tomi",
    name: "Томи Сапунджиев",
    role: "Креативен директор",
    image: "/Tomi.webp",
    description:
      "Отговаря за креативната визия и дизайн стратегията на проектите.",
    experience: "6+ години",
    location: "София, България",
    specialties: [
      "Проучване и приложение на AI технологии",
      "Разработка на AI системи за творци",
      "Уеб разработка с AI интеграция",
      "Генеративен дизайн и Prompt Engineering",
    ],
    achievements: [],
    bio: "Моята роля като креативен директор е да бъда мост между креативността и най-новите AI технологии. Преобразувам технологичния потенциал във функционални инструменти и уебсайтове, които разширяват границите на възможното. Вдъхновявам се, когато виждам как иновативните решения, които създаваме, помагат на бизнеса да постига резултати от следващо поколение.",
    email: "tommy@pravdast.agency",
    linkedin: "linkedin.com/in/tomisapundzhiev",
  },
  {
    id: "jivko",
    name: "Живомир Арнаудов",
    role: "Програмен мениджър",
    image: "/Jivko.webp",
    description:
      "Управлява техническите проекти и координира развойните процеси.",
    experience: "7+ години",
    location: "Варна, България",
    specialties: [
      "Стратегическо управление на проекти и портфолиа",
      "Изграждане на ефективни процеси за по-бързи резултати",
      "Проактивно управление на рискове за сигурност на проекта",
      "Лидерство и развитие на екипи",
    ],
    achievements: [],
    bio: "Като програмен мениджър, моята мисия е да превръщам сложните бизнес цели в успешно реализирани проекти. Подхождам структурирано към всяко предизвикателство, за да гарантирам, че екипът ми доставя изключителни резултати – винаги в срок и в рамките на бюджета. За мен най-голямото удовлетворение е да видя как нашите усилия носят реална стойност за клиентите.",
    email: "zarnaudov@pravdast.agency",
    linkedin: "linkedin.com/in/zhivomir-arnaudov",
  },
  {
    id: "koko",
    name: "Калоян Богданов",
    role: "AI девелопър",
    image: "/Koko.webp",
    description:
      "Специализира в изкуствен интелект и автоматизация на бизнес процеси.",
    experience: "5+ години",
    location: "Лондон, Великобритания",
    specialties: [
      "Разработка с машинно обучение",
      "Интелигентна автоматизация на процесите",
      "Генеративен изкуствен интелект и автоматизация на съдържанието",
      "Създаване на техническо съдържание",
    ],
    achievements: [],
    bio: "Като AI девелопър и създател на съдържание, моята мисия е да превръщам изкуственият интелект в работещ инструмент за бизнеса. Разработвам интелигентни системи за автоматизация, които спестяват ресурси, и същевременно създавам съдържание, което помага на клиентите ни да разберат и използват пълния потенциал на тези технологии. За мен най-голямото удовлетворение е да видя как решенията ми не просто оптимизират разходи, а дават възможност на екипите да се фокусират върху това, в което са най-добри – идеите и растежа.",
    email: "koko@pravdast.agency",
    linkedin: "www.linkedin.com/in/2a79aa342",
  },
  {
    id: "viki",
    name: "Виктория Петрова",
    role: "Маркетинг експерт",
    image: "/Viki.webp",
    description: "Експерт по дигитален маркетинг и имейл кампании за растеж.",
    experience: "6+ години",
    location: "Варна, България",
    specialties: [
      "Разработване на продукти и управление на жизнения цикъл",
      "Стратегия за имейл маркетинг",
      "Включване и задържане на потребители",
      "Автоматизация и сегментиране на кампании",
    ],
    achievements: [],
    bio: "Като маркетинг експерт с фокус върху продуктовото развитие, моята мисия е да създавам кампании, които са естествено продължение на самия продукт. Участвам в развитието на продукта, за да разбера нуждите на потребителите, след което изграждам автоматизирани системи за привличане и задържане, които комуникират тази стойност ефективно. За мен истинският успех е, когато маркетингът и продуктът работят в пълен синхрон, за да превръщат потребителите в лоялни клиенти.",
    email: "viki@pravdast.agency",
    linkedin: "https://www.linkedin.com/in/viktoriapetrova96/",
  },
  {
    id: "petio",
    name: "Петър Петров",
    role: "SEO експерт",
    image: "/Petio.webp",
    description: "Специалист по органично позициониране и SEO оптимизация.",
    experience: "2+ години",
    location: "Варна, България",
    specialties: [
      "SEO автоматизация и писане на скриптове",
      "Техническо SEO Стратегия за съдържание",
      "Изграждане на линкове",
      "Локално SEO",
    ],
    achievements: [],
    bio: "В ролята си на SEO експерт аз комбинирам задълбочени познания по оптимизация с умения в автоматизацията на процеси, за да създавам SEO кампании от ново поколение. Моят подход е да идентифицирам и автоматизирам процеса от технически одити до генериране на доклади, за да осигуря бързина, точност и мащабируемост. Крайният резултат за нашите клиенти е конкурентно предимство, изградено върху основата на интелигентни SEO решения.",
    email: "pepi@pravdast.agency",
    linkedin: "#",
  },
];

const stats = [
  { number: "47+", label: "Успешни проекта" },
  { number: "250%", label: "Средно подобрение" },
  { number: "100%", label: "Доволни клиенти" },
  { number: "24/7", label: "Работещи системи" },
];

const milestones = [
  {
    year: "2022",
    title: "Преди да бъдем Pravda ST",
    description:
      "Ние бяхме на вашето място – предприемачи, които управляват собствени бизнеси и се борят с несигурността на пазара. Години наред инвестирахме в традиционен маркетинг с променлив и често разочароващ резултат.",
  },
  {
    year: "2023",
    title: "Стигнахме до извода",
    description:
      "Проблемът не е в липсата на усилия, а в липсата на система. Тогава се роди философията Pravda – да спрем да залагаме на късмета и да започнем да прилагаме инженерен подход към растежа.",
  },
  {
    year: "2024",
    title: "Изграждане на системи",
    description:
      "Следващите години превърнахме нашите собствени компании в истинска лаборатория. Разработвахме, тествахме и усъвършенствахме всяка система – SEO Struktor, Clientomat, Clickstarter, Trendlab – първо върху себе си. ",
  },
  {
    year: "2024",
    title: "Прилагане на системи",
    description:
      "След като видяхме предвидимите резултати, ги приложихме и при доверени партньори, за да докажем, че нашите методи работят безотказно в различни пазарни условия.",
  },
  {
    year: "2025",
    title: "Развитие на бизнеси",
    description:
      "Днес, след като сме преминали през реалните бизнес битки и сме доказали ефективността на нашия подход, предлагаме тези изпитани системи и на вас. Ние сме предприемачи, които изграждат за други предприемачи. Нашата цел не е просто да ви продадем услуга, а да ви дадем контрола, предвидимостта и спокойствието, които ние самите търсехме.",
  },
];

export default function AboutClient() {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const handleMemberClick = (member: any) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen">

      <main className="pt-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Animated Tech Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0">
              {/* Team Grid Pattern */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                  linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
                `,
                  backgroundSize: "40px 40px",
                }}
              ></div>

              {/* Connection Lines */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-px bg-gradient-to-b from-transparent via-[#ECB629] to-transparent"
                  style={{
                    left: `${20 + i * 15}%`,
                    height: "60%",
                    top: "20%",
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scaleY: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-1">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full glassmorphism"
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
                    <span className="text-[#ECB629] font-bold">Инженерен</span>{" "}
                    подход към бизнеса
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Ние сме <br />
                <span className="text-[#ECB629] relative">
                  бизнес инженери
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
                Ние изграждаме системи, които работят. Нашата мисия е да
                превърнем хаотичния растеж в предвидими, измерими резултати.
                Разгледайте нашите{" "}
                <Link
                  href="/services"
                  className="text-[#ECB629] hover:underline cursor-pointer"
                >
                  услуги
                </Link>{" "}
                и{" "}
                <Link
                  href="/case-studies"
                  className="text-[#ECB629] hover:underline cursor-pointer"
                >
                  постигнати резултати
                </Link>
                .
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <GlassCard
                      padding="sm"
                      rounded="lg"
                    >
                      <div className="text-2xl font-bold text-[#ECB629] mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-20 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ECB629] rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-1">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glassmorphism"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-sm text-gray-300 font-medium">
                  <span className="text-[#ECB629] font-bold">Рискът</span> е
                  нулев
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Нашите принципи
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Всяко решение, което вземаме, се базира на тези основни
                принципи. 
                <Link
                  href="/blog/wp-zashho-rabotata-s-biznes-inzheneri-e-po-dobrata-alternativa-ot-izgrazhdaneto-i-poddrzhaneto-na-marketing-ekip"
                  className="text-[#ECB629] hover:text-[#ECB629]/80 transition-colors underline ml-2"
                >
                  Научете защо бизнес инженерите са по-добрата алтернатива от вътрешен екип →
                </Link>
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard
                    hoverBorder={true}
                    borderOpacity="30"
                    className="relative group overflow-hidden h-full transition-all duration-300"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ECB629]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <CardContent className="p-8 relative z-1 text-center">
                      <div className="relative">
                        <value.icon className="w-12 h-12 text-[#ECB629] mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                        <motion.div
                          className="absolute inset-0 bg-[#ECB629] rounded-full opacity-20 scale-150"
                          animate={{ scale: [1.5, 1.8, 1.5] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ECB629] transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-300">{value.description}</p>
                    </CardContent>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-1">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Кои сме ние?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                От идея до лидер в бизнес инженерството - ето как стигнахме
                дотук.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {/* Desktop Timeline */}
              <div className="hidden md:block relative">
                {/* Central Line */}
                <div className="absolute left-1/2 transform -translate-x-px h-full w-px bg-gradient-to-b from-[#ECB629] via-[#ECB629]/50 to-[#ECB629]"></div>

                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center mb-16 ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-5/12">
                      <Card className="glassmorphism hover:border-[#ECB629]/50 transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl font-bold text-[#ECB629]">
                              {milestone.year}
                            </span>
                            <div className="h-px bg-[#ECB629]/30 flex-1"></div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ECB629] transition-colors">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-300">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-[#ECB629] rounded-full border-4 border-slate-900 relative">
                        <motion.div
                          className="absolute inset-0 bg-[#ECB629] rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        />
                      </div>
                    </div>

                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Timeline */}
              <div className="md:hidden">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4 mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="bg-[#ECB629] text-slate-900 px-3 py-1 rounded-full text-sm font-bold mb-2">
                        {milestone.year}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-px bg-[#ECB629]/30 flex-1 min-h-16"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <Card className="glassmorphism">
                        <CardContent className="p-4">
                          <h3 className="text-lg font-bold text-white mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-300 text-sm">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6 relative z-1">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Нашият екип
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Запознайте се с хората, които правят всичко възможно.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="cursor-pointer"
                  onClick={() => handleMemberClick(member)}
                >
                  <ProfileCard
                    name={member.name}
                    title={member.role}
                    avatar={member.image}
                    bio={member.description}
                    stats={{
                      projects: 50,
                      clients: 25,
                      experience: parseInt(member.experience) || 5
                    }}
                    className="max-w-sm"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#ECB629] relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-1">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-black/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-sm text-black font-medium">
                  Остават <span className="font-bold">3</span> места за 2025
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Готови ли сте за система?
              </h2>
              <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
                Ако искате да спрете да залагате на случайността и да започнете
                да изграждате предвидим растеж, нека поговорим.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    className="bg-black text-white hover:bg-black/90 font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 shadow-lg"
                    onClick={() => {
                      window.open(
                        "https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdast.agency",
                        "_blank",
                      );
                    }}
                  >
                    Започнете с безплатна консултация
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="outline"
                    className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300"
                    onClick={() => {
                      window.open("tel:+359879282299", "_self");
                    }}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Обади се сега
                  </Button>
                </motion.div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-black/70">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Безплатна консултация</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Без ангажименти</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>100% поверителност</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Отговор в 48 часа</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Процес 5 минути</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>


      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <Dialog open={!!selectedMember} onOpenChange={closeModal}>
            <DialogContent className="max-w-4xl w-[95vw] md:w-full glass-card border-[#ECB629]/20 max-h-[90vh] overflow-y-auto">
              <DialogTitle className="sr-only">{selectedMember.name} - Профил</DialogTitle>
              <DialogDescription className="sr-only">
                Подробна информация за {selectedMember.name}, {selectedMember.role} в Pravda Agency
              </DialogDescription>
              
              <div className="p-4 md:p-8">
                {/* Header Section with Profile Image and Basic Info */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                  <div className="relative">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      width={120}
                      height={120}
                      className="w-24 h-24 sm:w-30 sm:h-30 rounded-full object-cover border-2 border-[#ECB629] glass-card"
                      sizes="120px"
                      quality={85}
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {selectedMember.name}
                    </h3>
                    <p className="text-[#ECB629] font-semibold mb-4 text-base sm:text-lg">
                      {selectedMember.role}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm">
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-300 glass-card px-3 py-2 rounded-lg">
                        <Clock className="h-4 w-4 text-[#ECB629]" />
                        {selectedMember.experience}
                      </div>
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-300 glass-card px-3 py-2 rounded-lg">
                        <MapPin className="h-4 w-4 text-[#ECB629]" />
                        {selectedMember.location}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Sections */}
                <div className="space-y-6">
                  <div className="glass-card p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <div className="h-2 w-2 bg-[#ECB629] rounded-full"></div>
                      За мен
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {selectedMember.bio}
                    </p>
                  </div>

                  <div className="glass-card p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <div className="h-2 w-2 bg-[#ECB629] rounded-full"></div>
                      Специалности
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedMember.specialties.map(
                        (specialty: string, index: number) => (
                          <span
                            key={index}
                            className="px-4 py-2 glass-card rounded-full text-sm text-gray-300"
                          >
                            {specialty}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <motion.a
                      href={`mailto:${selectedMember.email}`}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-[#ECB629] text-black rounded-lg hover:bg-[#ECB629]/90 transition-all duration-200 font-semibold text-sm sm:text-base flex-1 sm:flex-none"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail className="h-4 w-4" />
                      Свържи се
                    </motion.a>
                    <motion.a
                      href={`https://${selectedMember.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 glass-card text-white rounded-lg hover:border-[#ECB629]/50 hover:text-[#ECB629] transition-all duration-200 text-sm sm:text-base flex-1 sm:flex-none"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </motion.a>
                  </div>
                  </div>
                </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
