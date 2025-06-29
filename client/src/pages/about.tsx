import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Target,
  Shield,
  Zap,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { SEOHead } from "@/components/seo-head";
import { pageSEOData } from "@/data/seo-pages";

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
    name: "Екипът на Pravdast",
    role: "Консултанти по системи за растеж",
    description:
      "Специалисти с над 10 години опит в изграждането на автоматизирани системи за растеж в различни индустрии.",
    expertise: [
      "Бизнес инженеринг",
      "Системна автоматизация",
      "Данни и анализи",
      "Процесна оптимизация",
    ],
  },
];

const stats = [
  { number: "47+", label: "Успешни проекта" },
  { number: "270%", label: "Средно подобрение" },
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
      "Следващите години превърнахме нашите собствени компании в истинска лаборатория. Разработвахме, тествахме и усъвършенствахме всяка система – SEO Struktor, Clientomat, Sales Engine – първо върху себе си. ",
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
      "Днес, след като сме преминали през реалните бизнес битки и сме доказали ефективността на нашия подход, предлагаме тези изпитани системи и на вас.Ние сме предприемачи, които изграждат за други предприемачи. Нашата цел не е просто да ви продадем услуга, а да ви дадем контрола, предвидимостта и спокойствието, които ние самите търсехме.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead seo={pageSEOData.about} pageSlug="about" />
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
                <Link href="/services">
                  <a className="text-[#ECB629] hover:underline cursor-pointer">
                    услуги
                  </a>
                </Link>{" "}
                и{" "}
                <Link href="/case-studies">
                  <a className="text-[#ECB629] hover:underline cursor-pointer">
                    постигнати резултати
                  </a>
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

                    <CardContent className="p-8 relative z-10 text-center">
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
          <div className="container mx-auto px-6 relative z-10">
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

            <div className="max-w-4xl mx-auto relative">
              {/* Desktop Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px bg-[#ECB629] h-full"></div>

              {/* Mobile Timeline Line */}
              <div className="md:hidden absolute left-8 w-px bg-[#ECB629] h-full"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="relative mb-12 last:mb-0"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center">
                    {/* Year Badge - Desktop */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#ECB629] text-black font-bold px-4 py-2 rounded-full text-sm z-10">
                      {milestone.year}
                    </div>

                    {/* Content - Desktop */}
                    <div
                      className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "ml-auto text-left pl-8"}`}
                    >
                      <Card className="bg-slate-800/50 border-slate-700">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-300">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden relative pl-16">
                    {/* Year Badge - Mobile */}
                    <div className="absolute left-0 top-6 bg-[#ECB629] text-black font-bold w-16 h-16 rounded-full text-sm z-10 flex items-center justify-center">
                      {milestone.year}
                    </div>

                    {/* Content - Mobile */}
                    <Card className="bg-slate-800/50 border-slate-700">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Екипът зад системите
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Специалисти с дългогодишен опит в създаването на работещи бизнес
                системи.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-[#ECB629]/50 transition-all duration-300 group">
                    <CardContent className="p-8 text-center">
                      <div className="relative inline-block mb-6">
                        <Users className="w-16 h-16 text-[#ECB629] mx-auto group-hover:scale-110 transition-transform duration-300" />
                        <motion.div
                          className="absolute inset-0 bg-[#ECB629] rounded-full opacity-20 scale-150"
                          animate={{ scale: [1.5, 1.8, 1.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ECB629] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-[#ECB629] font-medium mb-4">
                        {member.role}
                      </p>
                      <p className="text-gray-300 mb-6">{member.description}</p>

                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#ECB629] relative overflow-hidden">
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
                    Ограничени места за нови клиенти
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
                Готови ли сте за система?
              </motion.h2>

              <motion.p
                className="text-xl text-black/80 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Нека заедно изградим системите, които ще направят вашия бизнес
                по-предвидим и по-печеливш.
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
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Безплатна първа консултация</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Персонален подход</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Проверени методи</span>
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
                  <a
                    href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-0 group-hover:opacity-10"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    />
                    Започнете сега <ArrowRight className="ml-2 w-5 h-5" />
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
