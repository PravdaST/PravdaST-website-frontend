'use client'

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
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
  X,
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
    image: "/simo.webp",
    description: "Ръководи стратегическото развитие и бизнес операциите на агенцията.",
    experience: "8+ години",
    location: "Варна, България",
    specialties: ["Бизнес стратегия", "Операционно управление", "Растеж на приходи", "Партньорства"],
    achievements: ["47+ успешни проекта", "250% средно подобрение", "100% доволни клиенти"],
    bio: "Симеон е движещата сила зад стратегическото развитие на Pravda Agency. С богат опит в бизнес операциите, той помага на компаниите да изградят устойчиви системи за растеж. Неговият подход съчетава аналитично мислене с практическо изпълнение.",
    email: "simo@pravdagency.eu",
    linkedin: "linkedin.com/in/simeonsirakov",
  },
  {
    id: "tomi",
    name: "Томи Сапунджиев",
    role: "Креативен директор",
    image: "/tomi.webp",
    description: "Отговаря за креативната визия и дизайн стратегията на проектите.",
    experience: "6+ години",
    location: "София, България",
    specialties: ["Уеб дизайн", "Брандинг", "UX/UI", "Визуална идентичност"],
    achievements: ["200+ дизайн проекта", "15+ награди за дизайн", "98% клиентска удовлетвореност"],
    bio: "Томи трансформира сложни бизнес идеи в елегантни визуални решения. Неговият креативен подход помага на марките да се отличат и да създават емоционална връзка с аудиторията си.",
    email: "tomi@pravdagency.eu",
    linkedin: "linkedin.com/in/tomisapundzhiev",
  },
  {
    id: "jivko",
    name: "Живомир Арнаудов",
    role: "Програмен мениджър",
    image: "/jivko.png",
    description: "Управлява техническите проекти и координира развойните процеси.",
    experience: "7+ години",
    location: "Пловдив, България",
    specialties: ["Управление на проекти", "Agile методологии", "Техническа архитектура", "Quality Assurance"],
    achievements: ["100+ доставени проекта", "99.5% навременно доставяне", "Zero критични грешки"],
    bio: "Живомир е майсторът на организацията и планирането. Той гарантира, че всеки проект се изпълнява навременно, в рамките на бюджета и с най-високо качество.",
    email: "jivko@pravdagency.eu",
    linkedin: "linkedin.com/in/zhivomir-arnaudov",
  },
  {
    id: "koko",
    name: "Калоян Богданов",
    role: "AI девелопър",
    image: "/koko.png",
    description: "Специализира в изкуствен интелект и автоматизация на бизнес процеси.",
    experience: "5+ години",
    location: "Варна, България",
    specialties: ["Machine Learning", "Process Automation", "Python", "API Integration"],
    achievements: ["30+ AI решения", "75% редукция на времето", "15+ автоматизирани процеса"],
    bio: "Калоян внедрява най-новите AI технологии за автоматизация на бизнес процесите. Неговите решения помагат на компаниите да спестят време и ресурси чрез интелигентна автоматизация.",
    email: "kaloyan@pravdagency.eu",
    linkedin: "linkedin.com/in/kaloyan-bogdanov",
  },
  {
    id: "viki",
    name: "Виктория Петрова",
    role: "Маркетинг експерт",
    image: "/viki.webp",
    description: "Експерт по дигитален маркетинг и имейл кампании за растеж.",
    experience: "6+ години",
    location: "София, България",
    specialties: ["Email Marketing", "Lead Generation", "Marketing Automation", "Conversion Optimization"],
    achievements: ["500K+ генерирани лийдове", "45% средно CTR", "300% ROI подобрение"],
    bio: "Виктория създава маркетингови кампании, които не просто привличат внимание, а генерират реални резултати. Нейната експертиза в автоматизацията помага на бизнесите да скалират ефективно.",
    email: "viktoria@pravdagency.eu",
    linkedin: "linkedin.com/in/viktoria-petrova",
  },
  {
    id: "petio",
    name: "Петър Петров",
    role: "SEO експерт",
    image: "/petio.png",
    description: "Специалист по органично позициониране и SEO оптимизация.",
    experience: "9+ години",
    location: "Бургас, България",
    specialties: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO"],
    achievements: ["Top 3 позиции за 90% ключови думи", "400% трафик увеличение", "50+ #1 rankings"],
    bio: "Петър е SEO стратегът, който превръща уебсайтовете в мощни инструменти за привличане на клиенти. Неговите техники за оптимизация довеждат до устойчиви позиции в Google.",
    email: "peter@pravdagency.eu",
    linkedin: "linkedin.com/in/peter-petrov-seo",
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
    <div className="min-h-screen bg-slate-900">
      <Navigation />

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
                <Link href="/services" className="text-[#ECB629] hover:underline cursor-pointer">
                  услуги
                </Link>{" "}
                и{" "}
                <Link href="/case-studies" className="text-[#ECB629] hover:underline cursor-pointer">
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
                    className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl font-bold text-[#ECB629] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
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
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
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
                  <Card className="relative bg-slate-800/50 border-slate-700 hover:border-[#ECB629]/50 transition-all duration-300 group overflow-hidden h-full">
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
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-slate-800/30 relative">
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
                      <Card className="bg-slate-800/50 border-slate-700 hover:border-[#ECB629]/50 transition-all duration-300 group">
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
                          <p className="text-gray-300">{milestone.description}</p>
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
                      <Card className="bg-slate-800/50 border-slate-700">
                        <CardContent className="p-4">
                          <h3 className="text-lg font-bold text-white mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-300 text-sm">{milestone.description}</p>
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
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-[#ECB629]/50 transition-all duration-300 group overflow-hidden h-full">
                    <CardContent className="p-6 text-center">
                      <div className="relative mb-4">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-slate-600 group-hover:border-[#ECB629] transition-colors"
                        />
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-[#ECB629] opacity-0 group-hover:opacity-100"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ECB629] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-[#ECB629] font-semibold mb-3">{member.role}</p>
                      <p className="text-gray-300 text-sm">{member.description}</p>
                    </CardContent>
                  </Card>
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
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
                  <Button
                    className="bg-black text-white hover:bg-black/90 font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 shadow-lg"
                    onClick={() => {
                      window.open("https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu", "_blank");
                    }}
                  >
                    Започнете с безплатна консултация
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
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

      <Footer />

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <Dialog open={!!selectedMember} onOpenChange={closeModal}>
            <DialogContent className="max-w-2xl bg-slate-900 border-slate-700">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 text-gray-400 hover:text-white"
                  onClick={closeModal}
                >
                  <X className="h-4 w-4" />
                </Button>

                <div className="p-6">
                  <div className="flex items-start gap-6 mb-6">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      width={120}
                      height={120}
                      className="w-30 h-30 rounded-full object-cover border-2 border-[#ECB629]"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {selectedMember.name}
                      </h3>
                      <p className="text-[#ECB629] font-semibold mb-3 text-lg">
                        {selectedMember.role}
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-300">
                          <Clock className="h-4 w-4" />
                          {selectedMember.experience}
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <MapPin className="h-4 w-4" />
                          {selectedMember.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">За мен</h4>
                      <p className="text-gray-300">{selectedMember.bio}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Специалности</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.specialties.map((specialty: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-gray-300"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Постижения</h4>
                      <div className="space-y-2">
                        {selectedMember.achievements.map((achievement: string, index: number) => (
                          <div key={index} className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-[#ECB629]" />
                            <span className="text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        href={`mailto:${selectedMember.email}`}
                        className="flex items-center gap-2 px-4 py-2 bg-[#ECB629] text-black rounded-lg hover:bg-[#ECB629]/90 transition-colors font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Mail className="h-4 w-4" />
                        Имейл
                      </motion.a>
                      <motion.a
                        href={`https://${selectedMember.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-slate-600 text-white rounded-lg hover:border-[#ECB629] hover:text-[#ECB629] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </motion.a>
                    </div>
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