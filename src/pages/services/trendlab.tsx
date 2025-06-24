// Removed framer-motion for Vercel compatibility
import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Users, Clock, Handshake, Magnet, Microscope, FileText, Camera, Megaphone, CheckCircle, ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

// Content Creation Background
const TrendlabBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-15">
      {/* Neural Network Grid */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="neural-grid" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="60" cy="60" r="2" fill="#ECB629" opacity="0.6"/>
            <circle cx="20" cy="20" r="1.5" fill="#ECB629" opacity="0.4"/>
            <circle cx="100" cy="20" r="1.5" fill="#ECB629" opacity="0.4"/>
            <circle cx="20" cy="100" r="1.5" fill="#ECB629" opacity="0.4"/>
            <circle cx="100" cy="100" r="1.5" fill="#ECB629" opacity="0.4"/>
            
            {/* Connection Lines */}
            <path d="M 60 60 L 20 20" stroke="#ECB629" strokeWidth="0.5" opacity="0.3"/>
            <path d="M 60 60 L 100 20" stroke="#ECB629" strokeWidth="0.5" opacity="0.3"/>
            <path d="M 60 60 L 20 100" stroke="#ECB629" strokeWidth="0.5" opacity="0.3"/>
            <path d="M 60 60 L 100 100" stroke="#ECB629" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
          
          <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ECB629" stopOpacity="0"/>
            <stop offset="50%" stopColor="#ECB629" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#ECB629" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-grid)" />
      </svg>

      {/* Floating Content Blocks */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
            className="absolute"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${15 + (i % 4) * 20}%`,
              y: [0, -15, 0],
            {/* Content Type Icons */}
            <div className="w-8 h-8 rounded border border-[#ECB629]/30 bg-[#ECB629]/5 flex items-center justify-center">
              {i % 4 === 0 && <div className="w-3 h-2 bg-[#ECB629]/40 rounded-sm" />}
              {i % 4 === 1 && <div className="w-2 h-3 bg-[#ECB629]/40 rounded-full" />}
              {i % 4 === 2 && <div className="w-3 h-3 bg-[#ECB629]/40 rounded" />}
              {i % 4 === 3 && <div className="w-4 h-1 bg-[#ECB629]/40 rounded-full" />}
            </div>
          </div className=">"
        ))}
      </div>

      {/* Data Flow Streams */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 3 }).map((_, i) => (
          <div className="path"
            key={i}
            d={`M ${i * 400 + 100} 100 Q ${i * 400 + 300} 200 ${i * 400 + 500} 300 Q ${i * 400 + 700} 400 ${i * 400 + 900} 200`}
            fill="none"
            stroke="url(#dataFlow)"
            strokeWidth="2"
              pathLength: [0, 1, 0],
          />
        ))}
      </svg>

      {/* Interactive Content Bubble */}
        style={{
          left: mousePosition.x - 48,
          top: mousePosition.y - 48,
        <div className="w-full h-full rounded-full border border-[#ECB629]/30 bg-[#ECB629]/5">
          <div className="absolute inset-2 rounded-full border border-[#ECB629]/20">
            <div className="absolute inset-2 rounded-full bg-[#ECB629]/10" />
          </div>
        </div>
      </div className=">"
    </div>
  );
};

export default function Trendlab() {
  const heroRef = useRef(null);
  const philosophyRef = useRef(null);
  const processRef = useRef(null);
  const resultsRef = useRef(null);
  const investmentRef = useRef(null);
  const ctaRef = useRef(null);


  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 1500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <TrendlabBackground />
        
        <div className="container mx-auto px-6 relative z-10">
            className="max-w-5xl mx-auto text-center"
            {/* Status Badge */}
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                />
              </div>
              <span className="text-sm font-medium text-gray-300">
                Приемаме проекти • <span className="text-[#ECB629]">Системен подход към съдържанието</span>
              </span>
            </div className=">"

            <div className="h1"
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              Най-убедителната история е{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECB629] to-[#F59E0B]">
                вашата
              </span>
              . Време е да я разкажем.
            </div className="h1>"

            <div className="p"
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              Вие притежавате безценна експертиза и опит. Нашата система Trendlab™ превръща тези ваши знания в автентично съдържание, което изгражда доверие, създава общност и ви превръща в безспорния авторитет във вашата сфера.
            </div className="p>"

              <Button
                size="lg"
                asChild
                <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                  Разкажете своята история
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div className=">"
          </div className=">"
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-slate-800/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
            className="max-w-6xl mx-auto"
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Вашата експертиза не е просто информация.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECB629] to-[#F59E0B]">
                  Тя е история
                </span>
                .
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Всеки може да изброи факти и характеристики. Но хората не се свързват с информация – те се свързват с истории. Една добре разказана история изгражда доверие и превръща пасивните наблюдатели в лоялни последователи.
              </p>
            </div>

            {/* Content Factory Visualization */}
            <div className="relative max-w-5xl mx-auto mb-16">
              <Card className="bg-slate-800/30 border-slate-600/30 p-8 backdrop-blur-sm relative overflow-hidden">
                {/* Factory Background */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px'
                  }}></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-center mb-8 text-white">
                    Фабриката за съдържание
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Input */}
                      <div className="w-20 h-20 mx-auto bg-slate-700/30 rounded-xl flex items-center justify-center mb-4 border border-slate-600/30">
                        <div className="text-gray-400">
                          <div className="w-8 h-1 bg-gray-400 rounded mb-1"></div>
                          <div className="w-6 h-1 bg-gray-400 rounded mb-1"></div>
                          <div className="w-7 h-1 bg-gray-400 rounded"></div>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-300 mb-2">Сурова експертиза</h4>
                      <p className="text-sm text-gray-400">Знания, опит, факти</p>
                    </div className=">"

                    {/* Process */}
                          rotate: [0, 360],
                        <Camera className="h-8 w-8 text-[#ECB629]" />
                        
                        {/* Gear teeth */}
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div 
                            key={i}
                            className="absolute w-2 h-4 bg-[#ECB629]/30 rounded-sm"
                            style={{
                              transform: `rotate(${i * 45}deg) translateY(-14px)`,
                              transformOrigin: 'center bottom'
                          />
                        ))}
                      </div className=">"
                      <h4 className="text-lg font-semibold text-[#ECB629] mb-2">Trendlab™ Система</h4>
                      <p className="text-sm text-gray-400">AI + Креативност</p>
                    </div className=">"

                    {/* Output */}
                      <div className="w-20 h-20 mx-auto bg-[#ECB629]/20 rounded-xl flex items-center justify-center mb-4 border border-[#ECB629]/30 relative overflow-hidden">
                            x: [-100, 100],
                        />
                        <div className="relative z-10 text-[#ECB629]">
                          <div className="w-8 h-6 border border-[#ECB629] rounded mb-1"></div>
                          <div className="w-8 h-1 bg-[#ECB629] rounded"></div>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-[#ECB629] mb-2">Въздействащи истории</h4>
                      <p className="text-sm text-gray-400">Видео, статии, визии</p>
                    </div className=">"
                  </div>

                  {/* Flow arrows */}
                  <div className="hidden md:block absolute top-1/2 left-1/4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-[#ECB629]" />
                    </div className=">"
                  </div>
                  
                  <div className="hidden md:block absolute top-1/2 right-1/4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-[#ECB629]" />
                    </div className=">"
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Нашият подход</h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-300 mb-6">
                  Ние не сме просто създатели на съдържание. Ние сме инженери на истории.
                </p>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ECB629]/5 via-[#ECB629]/10 to-[#ECB629]/5 rounded-lg"></div>
                  <p className="text-xl font-semibold text-[#ECB629] p-6 relative z-10">
                    Trendlab™ е нашата система, която взима вашата експертиза и я превръща във въздействащ разказ, който отличава вашия бранд от всички останали.
                  </p>
                </div>
              </div>
            </div>
          </div className=">"
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-6">
            className="max-w-6xl mx-auto"
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Нашата поточна линия за съдържание:{" "}
                <span className="text-[#ECB629] font-bold">
                  Процес в 4 фази
                </span>
              </h2>
            </div>

            {/* Modern Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Central Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#ECB629] via-[#ECB629]/50 to-[#ECB629]/20 rounded-full"></div>
              
              <div className="space-y-16">
                {[
                  {
                    phase: "01",
                    title: "Извличане на експертиза",
                    description: "Провеждаме стратегически сесии с вас, за да извлечем вашите уникални знания, ценности и истории.",
                    icon: Microscope,
                    deliverables: "Експертен профил, ключови послания, story bank",
                    position: "left"
                  },
                  {
                    phase: "02", 
                    title: "Проектиране на съдържанието",
                    description: "Превръщаме суровата информация в конкретни формати – сценарии за видеа, структура на статии, концепции за визии.",
                    icon: FileText,
                    deliverables: "Съдържателен календар, готови формати, визуални концепции",
                    position: "right"
                  },
                  {
                    phase: "03",
                    title: "Ефективна продукция",
                    description: "Използваме модерни технологии за създаване на съдържание, които ни позволяват да продуцираме висококачествени видеа и текстове изключително бързо и с оптимизиран бюджет.",
                    icon: Camera,
                    deliverables: "Готово съдържание, оптимизирано за всяка платформа",
                    position: "left"
                  },
                  {
                    phase: "04",
                    title: "Разпространение и анализ", 
                    description: "Публикуваме съдържанието в правилните канали и измерваме неговото въздействие върху репутацията ви.",
                    icon: Megaphone,
                    deliverables: "Публикации, анализи, оптимизации",
                    position: "right"
                ].map((phase, index) => (
                    className="relative flex items-center"
                    {/* Timeline Node */}
                      <div className="w-20 h-20 bg-gradient-to-br from-[#ECB629] to-[#F59E0B] rounded-full flex items-center justify-center text-black font-bold text-xl shadow-2xl border-4 border-slate-900 relative">
                        {phase.phase}
                        
                        {/* Pulsing Ring */}
                        />
                      </div>
                    </div className=">"

                    {/* Content Card */}
                    <div className={`w-full ${phase.position === 'left' ? 'pr-16' : 'pl-16'}`}>
                        phase.position === 'left' ? 'ml-0 mr-auto' : 'ml-auto mr-0'
                      } max-w-md`}>
                        {/* Card Glow Effect */}
                        
                        <div className="relative z-10">
                          {/* Icon & Title */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-[#ECB629]/20 rounded-full flex items-center justify-center">
                              <phase.icon className="h-5 w-5 text-[#ECB629]" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                            {phase.description}
                          </p>

                          {/* Details Grid */}
                          <div className="space-y-3">
                            <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/20">
                              <div className="text-xs text-[#ECB629] font-semibold mb-1">ВРЕМЕТРАЕНЕ</div>
                              <div className="text-white text-sm">{phase.duration}</div>
                            </div>
                            <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/20">
                              <div className="text-xs text-[#ECB629] font-semibold mb-1">РЕЗУЛТАТ</div>
                              <div className="text-white text-xs leading-relaxed">{phase.deliverables}</div>
                            </div>
                          </div>
                        </div>

                        {/* Connection Line to Timeline */}
                        <div className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-px bg-[#ECB629]/50 ${
                          phase.position === 'left' ? 'right-0' : 'left-0'
                        }`}></div>
                      </Card>
                    </div>
                  </div className=">"
                ))}
              </div>
            </div>

            {/* CTA */}
              <Button
                size="lg"
                className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold px-8 py-4 rounded-full shadow-lg shadow-[#ECB629]/25"
                asChild
                <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                  Започнете процеса сега
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div className=">"
          </div className=">"
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-slate-800/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
            className="max-w-6xl mx-auto"
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Спрете да преследвате клиенти.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECB629] to-[#F59E0B]">
                  Нека те да търсят вас
                </span>
                .
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Magnet,
                  title: "От просто още една опция на пазара, вие се превръщате в търсен експерт",
                  description: "На когото клиентите се доверяват и търсят за съвет."
                },
                {
                  icon: Users,
                  title: "Изграждате лоялна общност",
                  description: "Около вашия бранд, а не просто случайна аудитория."
                },
                {
                  icon: Clock,
                  title: "Вашият продажбен цикъл се скъсява",
                  description: "Защото клиентите идват при вас с изградено доверие."
                },
                {
                  icon: Handshake,
                  title: "Привличате по-качествени кадри и партньори",
                  description: "Които искат да работят с лидера в индустрията."
              ].map((result, index) => (
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                          <CheckCircle className="h-6 w-6 text-[#ECB629]" />
                        </div className=">"
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-white">
                          {result.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {result.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div className=">"
              ))}
            </div>
          </div className=">"
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-6">
            className="max-w-4xl mx-auto text-center"

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Структура на{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECB629] to-[#F59E0B]">
                инвестицията
              </span>
            </h2>

            <Card className="bg-slate-800/30 border-slate-600/30 p-8 backdrop-blur-sm mb-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#ECB629] mb-4">
                  3450 лв.
                </div>
                <div className="text-xl text-gray-300 mb-6">
                  месечно / базови проекти
                </div>
                <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Всяка система Trendlab™ се проектира спрямо вашите цели и ресурси. Базовите проекти започват от 3450 лв./месец. Финалната инвестиция се определя след диагностика на текущото ви състояние и желаните резултати.
                </p>
              </div>
            </Card>

            <Button
              size="lg"
              className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold px-8 py-4 rounded-full shadow-lg shadow-[#ECB629]/25"
              asChild
              <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                Заявете диагностика
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div className=">"
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#ECB629] text-black relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
              className="absolute w-2 h-2 bg-black rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                rotate: [0, 180, 360],
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
            className="max-w-4xl mx-auto text-center"
              />
              <span className="text-sm font-medium">
                Ограничена наличност • Работим с <span className="font-bold">максимум 8 клиента</span> месечно
              </span>
            </div className=">"

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Готови ли сте вашият глас да бъде{" "}
              <span className="relative">
                чут
                />
              </span>
              ?
            </h2>
            
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-xl mb-6 leading-relaxed">
                Нашата експертна диагностика ще анализира вашия настоящ авторитет и ще ви даде ясен инженерен план как да се превърнете в лидер на мнение във вашата сфера.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-black/10 rounded-lg p-4 border border-black/20">
                  <div className="font-semibold mb-1">🎯 Персонализиран план</div>
                  <div className="opacity-80">За вашата индустрия</div>
                </div>
                <div className="bg-black/10 rounded-lg p-4 border border-black/20">
                  <div className="font-semibold mb-1">⚡ Бърз старт</div>
                  <div className="opacity-80">Резултати за 30 дни</div>
                </div>
                <div className="bg-black/10 rounded-lg p-4 border border-black/20">
                  <div className="font-semibold mb-1">🔒 Без ангажименти</div>
                  <div className="opacity-80">Безплатна диагностика</div>
                </div>
              </div>
            </div>

              <Button
                size="lg"
                asChild
                <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">
                    Искам диагностика на авторитета
                  </span>
                    whileHover={{ x: "100%" }}
                  />
                </a>
              </Button>
            </div className=">"
          </div className=">"
        </div>
      </section>

      <Footer />
    </div>
  );
