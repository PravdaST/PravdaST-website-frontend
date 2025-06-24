import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, Clock, Target, Zap, CheckCircle, Eye, Star } from "lucide-react";
import { SEOHead } from "@/components/seo-head";
import { pageSEOData } from "@/data/seo-pages";
// Removed framer-motion for Vercel compatibility

const caseStudies = [
  {
    id: "bacho-iliya",
    company: "Бачо Илия",
    industry: "Млечна индустрия",
    tagline: "Mарка с обичан вкус и богата история, но без изградена дигитална връзка със своите потребители и търговски партньори.",
    description: "Традиционен млечен производител с богата история, който се нуждаеше от модерна дигитална присъствие за достигане до нови аудитории.",
    challenge: "Компанията разчиташе основно на традиционни канали за продажба и имаше слаба онлайн видимост. Нуждаеше се от система за изграждане на бранд авторитет и привличане на по-млада аудитория.",
    solution: "Изградихме цялостна система за съдържание и бранд позициониране, фокусирана върху автентичността и качеството на продуктите. Създадохме видео съдържание, което разказва историята на бранда и демонстрира производствения процес.",
    results: [
      { metric: "5 000 000", description: "гледания на месец с минимален бюджет" },
      { metric: "+243%", description: "ръст на месечната бранд аудитория" },
      { metric: "70%", description: "ръст на запитванията от дистрибутори" },
    ],
    systems: ["Trendlab™", "SEO Struktor™"],
    testimonial: "Pravdast ни помогна да превърнем традиционния ни бизнес в модерен бранд, без да загубим автентичността си.",
    image: "/api/placeholder/600/400",
  },
  {
    id: "euphoria-beauty",
    company: "Euphoria Beauty",
    industry: "Козметични услуги",
    tagline: "Салон с репутация. Без дигитална визия.",
    description: "Успешен козметичен салон във Варна с отлична репутация сред съществуващите клиенти, но липса на онлайн присъствие.",
    challenge: "Салонът разчиташе изцяло на препоръки от уста на уста и нямаше видимост в Google. Нуждаеше се от локална SEO стратегия и система за привличане на нови клиенти.",
    solution: "Внедрихме SEO Struktor™ система, фокусирана върху локални търсения. Оптимизирахме Google My Business профила и създадохме съдържание, насочено към местната аудитория във Варна.",
    results: [
      { metric: "+280%", description: "повече запитвания онлайн" },
      { metric: "+137%", description: "нови клиенти от Google" },
      { metric: "+42%", description: "разпознаваемост на бранд" },
    ],
    systems: ["SEO Struktor™", "Clientomat™"],
    testimonial: "Благодарение на Pravdast сега имаме постоянен поток от нови клиенти.",
    image: "/api/placeholder/600/400",
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead seo={pageSEOData["case-studies"]} pageSlug="case-studies" />
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Animated Tech Background */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0">
              {/* Success Pattern */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.3) 1px, transparent 0)
                `,
                backgroundSize: '40px 40px'
              }}></div>
              
              {/* Growth Lines */}
              {[...Array(5)].map((_, i) => (
                  className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
                  style={{
                    left: `${i * 20}%`,
                    top: `${80 - i * 15}%`,
                    width: `${30 + i * 10}%`,
                />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
              {/* Status Badge */}
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">
                    <span className="text-[#ECB629] font-bold">Проследими</span> резултати от реални проекти
                  </span>
                </div>
              </div className=">"

              <div className="h1 "
                className="text-5xl md:text-6xl font-bold mb-6 text-white"
                Реални резултати от <br />
                <span className="text-[#ECB629] relative">
                  нашите системи
                  />
                </span>
              </div className="h1>"
              
              <div className="p "
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                Разгледайте как нашите клиенти постигнаха измерим растеж с инженерни бизнес системи.
              </div className="p>"

              {/* Stats Preview */}
                {[
                  { label: "Средно увеличение", value: "+250%" },
                  { label: "Успешни проекта", value: "47+" },
                  { label: "ROI за клиенти", value: "380%" },
                  { label: "Време за резултат", value: "3-6м" },
                ].map((stat, index) => (
                    className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
                    whileHover={{ scale: 1.05 }}
                    <div className="text-2xl font-bold text-[#ECB629] mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div className=">"
                ))}
              </div className=">"
            </div className=">"
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ECB629] rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                    {/* Hover Glow Effect */}
                    
                    <CardContent className="p-0 relative z-10">
                      <div className="grid lg:grid-cols-2 gap-0">
                        {/* Content */}
                        <div className="p-8 lg:p-12">
                            {study.systems.map((system, idx) => (
                              <Badge key={idx} className="bg-[#ECB629] text-black font-semibold px-3 py-1">
                                {system}
                              </Badge>
                            ))}
                            <Badge variant="outline" className="border-slate-600 text-gray-300 px-3 py-1">
                              {study.industry}
                            </Badge>
                          </div className=">"
                          
                          <div className="h3 "
                            {study.company}
                          </div className="h3>"

                          <div className="p "
                            className="text-gray-400 mb-6 italic"
                            {study.tagline}
                          </div className="p>"
                          
                          <div className="space-y-6">
                              <h4 className="text-lg font-semibold text-[#ECB629] mb-2 flex items-center gap-2">
                                <Target className="w-5 h-5" />
                                Предизвикателство
                              </h4>
                              <p className="text-gray-300">{study.challenge}</p>
                            </div className=">"
                            
                              <h4 className="text-lg font-semibold text-[#ECB629] mb-2 flex items-center gap-2">
                                <Zap className="w-5 h-5" />
                                Решение
                              </h4>
                              <p className="text-gray-300">{study.solution}</p>
                            </div className=">"

                              <blockquote className="bg-slate-800/30 p-4 rounded-lg border-l-4 border-[#ECB629]">
                                <p className="text-gray-300 italic">"{study.testimonial}"</p>
                              </blockquote>
                            </div className=">"
                          </div>
                        </div>
                        
                        {/* Metrics */}
                        <div className="bg-slate-800/30 p-8 lg:p-12 flex items-center relative">
                          {/* Animated Background Pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                              backgroundImage: `
                                linear-gradient(45deg, rgba(236, 182, 40, 0.1) 25%, transparent 25%),
                                linear-gradient(-45deg, rgba(236, 182, 40, 0.1) 25%, transparent 25%),
                                linear-gradient(45deg, transparent 75%, rgba(236, 182, 40, 0.1) 75%),
                                linear-gradient(-45deg, transparent 75%, rgba(236, 182, 40, 0.1) 75%)
                              `,
                              backgroundSize: '20px 20px',
                              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                            }}></div>
                          </div>

                          <div className="w-full relative z-10">
                            <div className="h4 "
                              className="text-xl font-bold text-white mb-6 text-center"
                              Ключови резултати
                            </div className="h4>"
                            <div className="space-y-6">
                              {study.results.map((result, metricIndex) => (
                                  className="text-center group/metric"
                                  whileHover={{ scale: 1.05 }}
                                  <div className="relative">
                                      {result.metric}
                                    </div>
                                    />
                                  </div>
                                  <div className="text-sm text-gray-400">
                                    {result.description}
                                  </div>
                                </div className=">"
                              ))}
                            </div>
                          </div>
                        </div>
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
                    Само 3 места за Q1 2025
                  </span>
                </div>
              </div className=">"

              <div className="h2 "
                className="text-4xl md:text-5xl font-bold text-black mb-6"
                Готови за такива резултати?
              </div className="h2>"
              
              <div className="p "
                className="text-xl text-black/80 mb-8 max-w-2xl mx-auto"
                Започнете своята история на успех с безплатна консултация.
              </div className="p>"

              {/* Trust Signals */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span>Безплатна стратегия</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span>Конкретен план</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span>Гарантирани резултати</span>
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
