import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Removed framer-motion for Vercel compatibility
import { Target, Shield, Zap, Users, Award, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { SEOHead } from "@/components/seo-head";
import { pageSEOData } from "@/data/seo-pages";

const values = [
  {
    icon: Target,
    title: "Прецизност",
    description: "Всяко решение е базирано на данни, а не на предположения. Измерваме всичко и оптимизираме постоянно."
  },
  {
    icon: Shield,
    title: "Прозрачност", 
    description: "Никакви скрити такси или неясни процеси. Знаете точно какво правим и защо го правим."
  },
  {
    icon: Zap,
    title: "Ефективност",
    description: "Не губим време с експерименти. Прилагаме проверени системи, които дават предвидими резултати."
];

const teamMembers = [
  {
    name: "Екипът на Pravdast",
    role: "Консултанти по системи за растеж",
    description: "Специалисти с над 10 години опит в изграждането на автоматизирани системи за растеж в различни индустрии.",
    expertise: ["Бизнес инженеринг", "Системна автоматизация", "Данни и анализи", "Процесна оптимизация"]
];

const stats = [
  { number: "50+", label: "Успешни проекта" },
  { number: "300%", label: "Средно подобрение" },
  { number: "95%", label: "Задоволени клиенти" },
  { number: "24/7", label: "Работещи системи" }
];

const milestones = [
  {
    year: "2020",
    title: "Започваме мисията",
    description: "Основаване на Pravdast с ясна визия за системен подход към бизнес растежа."
  },
  {
    year: "2021", 
    title: "Първите системи",
    description: "Разработка на SEO Struktor™ - първата ни собствена методология за органичен растеж."
  },
  {
    year: "2022",
    title: "Автоматизация",
    description: "Лансиране на Clientomat™ системата за автоматизирано управление на клиенти."
  },
  {
    year: "2023",
    title: "Иновации",
    description: "Въвеждане на Trendlab™ и Clickstarter™ за пълноценно покритие на растежните нужди."
  },
  {
    year: "2024",
    title: "Лидерство",
    description: "Утвърждаване като лидери в България за data-driven бизнес инженерство."
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead seo={pageSEOData.about} pageSlug="about" />
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Animated Tech Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0">
              {/* Team Grid Pattern */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}></div>
              
              {/* Connection Lines */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-px bg-gradient-to-b from-transparent via-[#ECB628] to-transparent animate-pulse"
                  style={{
                    left: `${20 + i * 15}%`,
                    height: '60%',
                    top: '20%',
                    animationDelay: `${i * 0.3}s`
                />
              ))}
                />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-300 font-medium">
                    <span className="text-[#ECB629] font-bold">Инженерен</span> подход към бизнеса
                  </span>
                </div>
              </div className=">"

              <div className="h1 "
                className="text-5xl md:text-6xl font-bold mb-6 text-white"
                Ние сме <br />
                <span className="text-[#ECB629] relative">
                  бизнес инженери
                  />
                </span>
              </div className="h1>"
              
              <div className="p "
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                Ние изграждаме системи, които работят. Нашата мисия е да превърнем хаотичния растеж в предвидими, измерими резултати.
              </div className="p>"

              {/* Stats Grid */}
                {stats.map((stat, index) => (
                    className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
                    whileHover={{ scale: 1.05 }}
                    <div className="text-2xl font-bold text-[#ECB629] mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div className=">"
                ))}
              </div className=">"
            </div className=">"
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
                <span className="text-sm text-gray-300 font-medium">
                  <span className="text-[#ECB629] font-bold">Безплатна</span> философия на работа
                </span>
              </div className=">"

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Нашите принципи
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Всяко решение, което вземаме, се базира на тези основни принципи.
              </p>
            </div className=">"

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                    {/* Hover Glow Effect */}
                    
                    <CardContent className="p-8 relative z-10 text-center">
                      <div className="relative">
                        />
                      </div>
                      
                        {value.title}
                      </h3>
                      <p className="text-gray-300">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </div className=">"
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-slate-800/30 relative">
          <div className="container mx-auto px-6 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Нашето пътуване
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                От идея до лидер в бизнес инженерството - ето как стигнахме дотук.
              </p>
            </div className=">"

            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                  className="relative flex items-center mb-12 last:mb-0"
                  {/* Timeline Line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-[#ECB629] h-full -z-10"></div>
                  
                  {/* Year Badge */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#ECB629] text-black font-bold px-4 py-2 rounded-full text-sm z-10">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'ml-auto text-left pl-8'}`}>
                    <Card className="bg-slate-800/50 border-slate-700">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div className=">"
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Екипът зад системите
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Специалисти с дългогодишен опит в създаването на работещи бизнес системи.
              </p>
            </div className=">"

            <div className="max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                    <CardContent className="p-8 text-center">
                      <div className="relative inline-block mb-6">
                        />
                      </div>
                      
                        {member.name}
                      </h3>
                      <p className="text-[#ECB629] font-medium mb-4">{member.role}</p>
                      <p className="text-gray-300 mb-6">{member.description}</p>
                      
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.expertise.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full"
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div className=">"
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#ECB629] relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(8)].map((_, i) => (
                className="absolute w-1 h-1 bg-black rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
              />
            ))}
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
              {/* Urgency Badge */}
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-black font-semibold">
                    Ограничени места за нови клиенти
                  </span>
                </div>
              </div className=">"

              <div className="h2 "
                className="text-4xl md:text-5xl font-bold text-black mb-6"
                Готови за сътрудничество?
              </div className="h2>"
              
              <div className="p "
                className="text-xl text-black/80 mb-8 max-w-2xl mx-auto"
                Нека заедно изградим системите, които ще направят вашия бизнес по-предвидим и по-печеливш.
              </div className="p>"

              {/* Trust Signals */}
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
              </div className=">"
              
                <Button 
                  size="lg"
                  variant="outline"
                  className="relative border-2 border-black text-black hover:bg-black hover:text-[#ECB629] px-8 py-4 text-lg font-semibold overflow-hidden group"
                  asChild
                  <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                    />
                    Започнете сега <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div className=">"
            </div className=">"
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
