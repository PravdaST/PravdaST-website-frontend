import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { 
  Network, 
  User, 
  Settings, 
  Search, 
  FileText, 
  Plug, 
  TrendingUp, 
  Zap, 
  Clock, 
  BarChart3, 
  Target,
  Power,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";

const ClientomatPage = () => {
  const philosophyRef = useRef(null);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0">
            {/* Network Grid */}
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}></div>
            
            {/* Communication Nodes */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${15 + (i % 4) * 20}%`,
              />
            ))}
            
            {/* Connection Lines */}
            {[...Array(6)].map((_, i) => (
                className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent opacity-30"
                style={{
                  left: `${5 + i * 15}%`,
                  top: `${20 + i * 15}%`,
                  width: '200px',
                  transform: `rotate(${i * 30}deg)`,
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                    />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">
                    Clientomat™ <span className="text-[#ECB629] font-bold">система</span>
                  </span>
                </div>
              </div className=">"

              <div className="h1 "
                className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight"
                Всяко пропуснато запитване <br />
                е <span className="text-[#ECB629] relative">
                  изгубен клиент
                  />
                </span>
              </div className="h1>"

              <div className="p "
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                Докато вие сте заети да управлявате бизнеса си, потенциални клиенти остават без отговор. Нашата система Clientomat™ работи като ваш 24/7 дигитален асистент, който посреща, квалифицира и насочва всяко запитване, без да пропуска нито една възможност.
              </div className="p>"

                <a
                  href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  <Button 
                    size="lg" 
                    Спрете да губите клиенти
                    <Network className="ml-3 h-5 w-5 md:h-6 md:w-6" />
                  </Button>
                </a>
              </div className=">"
            </div>

            {/* Visual Network Representation */}
              {/* Central Network Hub */}
              <div className="relative flex items-center justify-center">
                  <Network className="text-black" size={40} />
                </div className=">"
                
                {/* Surrounding Connection Points */}
                {[...Array(6)].map((_, i) => {
                  const angle = (i * 60) * (Math.PI / 180);
                  const radius = 80;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                      className="absolute w-8 h-8 bg-[#ECB629]/30 rounded-full flex items-center justify-center"
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: 'translate(-50%, -50%)'
                      <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                    </div className=">"
                  );
                })}
              </div>
            </div className=">"
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-slate-800/50 relative overflow-hidden" ref={philosophyRef}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(236, 182, 40, 0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(236, 182, 40, 0.1) 25%, transparent 25%)
            `,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Човешкият фактор срещу <br />
              <span className="text-[#ECB629]">системния процес</span>
            </h2>
          </div className=">"

          {/* Enhanced Transformation Animation */}
          <div className="max-w-6xl mx-auto mb-16">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(45deg, rgba(236, 182, 40, 0.1) 25%, transparent 25%),
                    linear-gradient(-45deg, rgba(236, 182, 40, 0.1) 25%, transparent 25%)
                  `,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              <div className="grid md:grid-cols-3 gap-12 items-center relative z-10">
                {/* Human Factor Side */}
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/30 mb-4 relative">
                      <User className="text-red-400" size={40} />
                      />
                    </div>
                    <h3 className="text-lg font-bold text-red-300 mb-3">Човешки фактор</h3>
                  </div>
                  
                  {/* Chaotic Communication Lines */}
                  <div className="relative h-24 flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                        className="absolute bg-red-400 rounded-full"
                        style={{
                          width: `${2 + i * 2}px`,
                          height: '2px',
                          transform: `rotate(${i * 36 - 72}deg) translateX(${15 + i * 8}px)`,
                      />
                    ))}
                    
                    {/* Center chaos indicator */}
                    />
                  </div>

                  <div className="space-y-2 text-sm text-gray-400">
                    <p>• Непоследователни отговори</p>
                    <p>• Забравени запитвания</p>
                    <p>• Различно качество</p>
                  </div>
                </div className=">"

                {/* Transformation Arrow */}
                  <div className="relative">
                      <ArrowRight className="text-black" size={32} />
                    </div className=">"
                    
                    {/* Transformation rings */}
                    {[...Array(3)].map((_, i) => (
                        className="absolute inset-0 border-2 border-[#ECB629] rounded-full"
                        style={{ 
                          transform: `scale(${1.2 + i * 0.3})`,
                          opacity: 0.3 - i * 0.1
                      />
                    ))}
                  </div>
                </div className=">"

                {/* System Process Side */}
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-[#ECB629]/20 rounded-full flex items-center justify-center border border-[#ECB629]/30 mb-4 relative">
                      <Settings className="text-[#ECB629]" size={40} />
                      />
                    </div>
                    <h3 className="text-lg font-bold text-[#ECB629] mb-3">Системен процес</h3>
                  </div>
                  
                  {/* Organized Communication Lines */}
                  <div className="relative h-24 flex items-center justify-center mb-4">
                    {[...Array(4)].map((_, i) => (
                        className="absolute bg-[#ECB629] rounded-full"
                        style={{
                          width: '40px',
                          height: '2px',
                          top: `${i * 6}px`,
                      />
                    ))}
                    
                    {/* System flow indicators */}
                        x: [-50, 0, -50],
                    />
                  </div>

                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• Еднакво високо качество</p>
                    <p>• 24/7 достъпност</p>
                    <p>• Автоматизиран отговор</p>
                  </div>
                </div className=">"
              </div>
            </div className=">"
          </div>

          {/* Content Cards */}
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {/* Problem Card */}
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-red-300">Проблемът</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Когато разчитате на ръчна комуникация, резултатите винаги са различни. Едно запитване получава перфектен отговор, друго е забравено. Тази непоследователност струва скъпо.
              </p>
            </div className=">"
            
            {/* Solution Card */}
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-[#ECB629] rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-[#ECB629]">Нашият подход</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Ние елиминираме случайността. Чрез Clientomat™ ние изграждаме предвидим, автоматизиран диалог, който гарантира, че всеки клиент получава едно и също високо ниво на обслужване, всеки път.
              </p>
            </div className=">"
          </div>
        </div>
      </section>

      {/* Engineering Process Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Как изграждаме вашия <br />
              <span className="text-[#ECB629]">автоматизиран комуникационен поток</span>
            </h2>
          </div className=">"

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  phase: "1",
                  title: "Анализ на комуникацията",
                  description: "Проучваме как и откъде идват вашите запитвания и какъв е пътят на клиента от първия контакт до сделката.",
                  icon: Search,
                  deliverables: "Карта на комуникационните канали"
                },
                {
                  phase: "2", 
                  title: "Проектиране на потока",
                  description: "Проектираме логиката на системата – последователността от автоматизирани допирни точки, които ще изграждат доверие и ще водят към продажба.",
                  icon: FileText,
                  deliverables: "Детайлна схема на автоматизацията"
                },
                {
                  phase: "3",
                  title: "Техническо внедряване", 
                  description: "Свързваме системата с вашия сайт и канали за комуникация и я тестваме обстойно.",
                  icon: Plug,
                  deliverables: "Функционираща система"
                },
                {
                  phase: "4",
                  title: "Оптимизация и анализ",
                  description: "Анализираме данните и постоянно подобряваме системата за по-висока ефективност.",
                  icon: TrendingUp,
                  deliverables: "Месечни доклади за оптимизация"
              ].map((step, index) => (
                  {/* Hover Glow */}
                  
                  <div className="flex items-start gap-6 relative z-10">
                    {/* Phase Number & Icon */}
                    <div className="flex-shrink-0">
                        <span className="text-black font-bold text-xl">{step.phase}</span>
                        />
                      </div>
                      
                      <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mx-2">
                        <step.icon className="text-[#ECB629]" size={24} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed mb-4">
                        {step.description}
                      </p>
                      
                      {/* Details */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-700/30 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="text-[#ECB629]" size={16} />
                            <span className="text-sm font-semibold text-[#ECB629]">Продължителност</span>
                          </div>
                          <p className="text-gray-300 text-sm">{step.duration}</p>
                        </div>
                        
                        <div className="bg-slate-700/30 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="text-[#ECB629]" size={16} />
                            <span className="text-sm font-semibold text-[#ECB629]">Резултат</span>
                          </div>
                          <p className="text-gray-300 text-sm">{step.deliverables}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div className=">"
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-slate-800/50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Крайният резултат: <br />
              <span className="text-[#ECB629]">Повече време за вас, повече приходи за бизнеса</span>
            </h2>
          </div className=">"

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Секундни отговори",
                description: "Всеки потенциален клиент получава отговор за секунди, 24/7",
                metric: "< 5 сек",
                color: "text-blue-400"
              },
              {
                icon: Clock,
                title: "Освободено време",
                description: "Освобождавате часове от вашето време от повтарящи се, административни задачи",
                metric: "80% време",
                color: "text-green-400"
              },
              {
                icon: BarChart3,
                title: "Скалируемост", 
                description: "Изграждате предвидим и скалируем процес на продажби, който не зависи от човешкия фактор",
                metric: "∞ капацитет",
                color: "text-purple-400"
              },
              {
                icon: Target,
                title: "Висока конверсия",
                description: "Увеличавате успеваемостта чрез последователна и професионална комуникация",
                metric: "+40% ROI",
                color: "text-[#ECB629]"
            ].map((benefit, index) => (
                <div className="relative mb-6">
                    <benefit.icon className={`${benefit.color}`} size={32} />
                  </div>
                  />
                </div>
                
                <div className={`text-2xl font-bold mb-2 ${benefit.color}`}>
                  {benefit.metric}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div className=">"
            ))}
          </div>
        </div>
      </section>

      {/* Investment Structure Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              <span className="text-[#ECB629]">Структура на инвестицията</span>
            </h2>
          </div className=">"

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  number: "1",
                  title: "Персонализирано решение",
                  description: "Всяка система Clientomat™ се проектира спрямо вашите уникални процеси. Ние не предлагаме готови пакети."
                },
                {
                  number: "2", 
                  title: "Бюджетна рамка",
                  description: "За ориентация, базовите инженерни проекти започват от 1750 лв./месец."
                },
                {
                  number: "3",
                  title: "Техническа спецификация", 
                  description: "Финалната инвестиция се определя след техническа диагностика. Вие получавате детайлно инженерно предложение, в което всеки компонент е ясно описан и остойностен."
              ].map((principle, index) => (
                  className="bg-slate-800/30 rounded-xl p-8 border-l-4 border-[#ECB629]"
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#ECB629] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-lg">{principle.number}</span>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div className=">"
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700 relative overflow-hidden">
        {/* Power Button Glow */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
              <div className="w-24 h-24 mx-auto bg-[#ECB629]/20 rounded-full flex items-center justify-center border border-[#ECB629]/30 mb-8">
                <Power className="text-[#ECB629]" size={48} />
              </div>
            </div className=">"

            <div className="h2 "
              className="text-4xl md:text-6xl font-bold mb-8 text-white"
              Готови ли сте да включите <br />
              бизнеса си на <span className="text-[#ECB629]">автопилот?</span>
            </div className="h2>"

            <div className="p "
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              Нашата експертна диагностика ще анализира настоящия ви процес по обработка на запитвания и ще ви покаже точно къде губите време и клиенти. Работим с ограничен брой клиенти всеки месец, за да гарантираме качество.
            </div className="p>"

              <a
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block"
                <Button 
                  size="lg" 
                  Получете своя диагностичен доклад
                  <Power className="ml-3 h-5 w-5 md:h-6 md:w-6" />
                </Button>
              </a>
            </div className=">"

              <span className="text-gray-300 font-medium">
                Диагностика за този месец: остават само <span className="text-[#ECB629] font-bold">3 свободни места</span>
              </span>
            </div className=">"
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientomatPage;