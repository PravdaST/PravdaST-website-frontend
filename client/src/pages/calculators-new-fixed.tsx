import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Target, DollarSign, BarChart3, ArrowRight, CheckCircle, Clock, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { injectStructuredData } from "@/lib/seo-schemas";

// Service-specific Calculator Function Components - keeping original design
function ServiceCalculator({ serviceName }: { serviceName: string }) {
  // Service-specific input states and calculations based on service type
  const getServiceInputs = () => {
    switch (serviceName) {
      case "SEO Struktor™":
        return {
          param1: { label: "Текущ месечен трафик", placeholder: "напр. 5000", key: "traffic" },
          param2: { label: "Средна позиция в Google", placeholder: "напр. 45", key: "ranking" },
          param3: { label: "Брой целеви ключови думи", placeholder: "напр. 20", key: "keywords" }
        };
      case "Trendlab™":
        return {
          param1: { label: "Текущи последователи", placeholder: "напр. 2500", key: "followers" },
          param2: { label: "Публикации седмично", placeholder: "напр. 3", key: "frequency" },
          param3: { label: "Engagement rate (%)", placeholder: "напр. 3.5", key: "engagement" }
        };
      case "Clickstarter™":
        return {
          param1: { label: "Месечен ad spend (лв.)", placeholder: "напр. 8000", key: "spend" },
          param2: { label: "Текущ CPC (лв.)", placeholder: "напр. 3.20", key: "cpc" },
          param3: { label: "Месечни конверсии", placeholder: "напр. 75", key: "conversions" }
        };
      case "Clientomat™":
        return {
          param1: { label: "Месечни клиенти", placeholder: "напр. 80", key: "clients" },
          param2: { label: "Средна поръчка (лв.)", placeholder: "напр. 3500", key: "aov" },
          param3: { label: "Repeat rate (%)", placeholder: "напр. 25", key: "repeat" }
        };
      default:
        return {
          param1: { label: "Параметър 1", placeholder: "напр. 1000", key: "param1" },
          param2: { label: "Параметър 2", placeholder: "напр. 50", key: "param2" },
          param3: { label: "Параметър 3", placeholder: "напр. 10", key: "param3" }
        };
    }
  };

  const getServiceResults = () => {
    switch (serviceName) {
      case "SEO Struktor™":
        return {
          metric1: { label: "Нов трафик", suffix: "" },
          metric2: { label: "Нови leads", suffix: "" },
          detail1: { label: "Подобрение в позиции", suffix: "" },
          detail2: { label: "Месечен ROI", suffix: "%" }
        };
      case "Trendlab™":
        return {
          metric1: { label: "Нови последователи", suffix: "" },
          metric2: { label: "Месечни гледания", suffix: "K" },
          detail1: { label: "Engagement подобрение", suffix: "%" },
          detail2: { label: "Authority Score", suffix: "/100" }
        };
      case "Clickstarter™":
        return {
          metric1: { label: "Допълнителни поръчки", suffix: "" },
          metric2: { label: "CPC намаление", suffix: " лв." },
          detail1: { label: "ROAS подобрение", suffix: "x" },
          detail2: { label: "Месечни спестявания", suffix: " лв." }
        };
      case "Clientomat™":
        return {
          metric1: { label: "Повторни поръчки", suffix: "%" },
          metric2: { label: "LTV увеличение", suffix: "K" },
          detail1: { label: "Retention подобрение", suffix: "%" },
          detail2: { label: "Допълнителен приход", suffix: "K лв./месец" }
        };
      default:
        return {
          metric1: { label: "Резултат 1", suffix: "" },
          metric2: { label: "Резултат 2", suffix: "" },
          detail1: { label: "Детайл 1", suffix: "" },
          detail2: { label: "Детайл 2", suffix: "" }
        };
    }
  };

  const calculateServiceResults = (inputs: any) => {
    const p1 = parseFloat(inputs.param1) || 0;
    const p2 = parseFloat(inputs.param2) || 0;
    const p3 = parseFloat(inputs.param3) || 0;

    switch (serviceName) {
      case "SEO Struktor™":
        return {
          metric1: p1 * 3.4, // 340% traffic increase
          metric2: (p1 * 3.4) * 0.025, // 2.5% conversion to leads
          detail1: Math.max(1, p2 - 30), // Position improvement
          detail2: (((p1 * 3.4 * 0.025 * 2500) - 1980) / 1980) * 100 // ROI
        };
      case "Trendlab™":
        return {
          metric1: p1 * 4.5, // 450% followers increase
          metric2: (p1 * 4.5 * p2 * 250) / 1000, // Monthly views in K
          detail1: p3 * 3.8, // Engagement boost
          detail2: Math.min(95, 40 + (p2 * 8) + (p3 * 5)) // Authority score
        };
      case "Clickstarter™":
        return {
          metric1: p3 * 0.85, // 85% modest increase in orders
          metric2: p2 * 0.25, // 25% CPC reduction
          detail1: 2.1, // 2.1x ROAS
          detail2: p1 * 0.20 // 20% cost savings
        };
      case "Clientomat™":
        return {
          metric1: p3 * 1.8, // 180% repeat orders increase
          metric2: (p2 * 2.2) / 1000, // 220% LTV increase in K
          detail1: Math.min(85, p3 + 35), // Retention boost
          detail2: (p1 * p2 * 2.2 * 0.3) / 1000 // Monthly revenue in K
        };
      default:
        return {
          metric1: p1 * 2,
          metric2: p2 * 1.5,
          detail1: p3 * 3,
          detail2: (p1 + p2 + p3) * 0.1
        };
    }
  };

  const serviceInputs = getServiceInputs();
  const serviceResults = getServiceResults();

  const [inputs, setInputs] = useState({
    param1: '',
    param2: '',
    param3: '',
    industry: ''
  });

  const results = calculateServiceResults(inputs);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Input Form */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-[#ECB629]" />
            {serviceName} Параметри
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="param1" className="text-white">{serviceInputs.param1.label}</Label>
            <Input
              id="param1"
              type="number"
              placeholder={serviceInputs.param1.placeholder}
              value={inputs.param1}
              onChange={(e) => setInputs({...inputs, param1: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="param2" className="text-white">{serviceInputs.param2.label}</Label>
            <Input
              id="param2"
              type="number"
              placeholder={serviceInputs.param2.placeholder}
              value={inputs.param2}
              onChange={(e) => setInputs({...inputs, param2: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="param3" className="text-white">{serviceInputs.param3.label}</Label>
            <Input
              id="param3"
              type="number"
              placeholder={serviceInputs.param3.placeholder}
              value={inputs.param3}
              onChange={(e) => setInputs({...inputs, param3: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="industry" className="text-white">Индустрия</Label>
            <Select value={inputs.industry} onValueChange={(value) => setInputs({...inputs, industry: value})}>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Изберете индустрия" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="services">Услуги</SelectItem>
                <SelectItem value="saas">SaaS</SelectItem>
                <SelectItem value="education">Образование</SelectItem>
                <SelectItem value="healthcare">Здравеопазване</SelectItem>
                <SelectItem value="consulting">Консултантски услуги</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* ROI Definition */}
          <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
            <h4 className="text-white font-medium mb-2">Какво е ROI?</h4>
            <p className="text-gray-400 text-sm">
              ROI (Return on Investment) показва колко лева печелите за всеки
              лев инвестиран в услугата. Например, 300% ROI означава, че за
              всеки лев инвестиран, получавате 3 лева обратно.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Results Section - Modern Design */}
      {(results.metric1 > 0 || results.metric2 > 0) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Main Score Card */}
          <Card className="bg-slate-900/80 border-slate-700/50 backdrop-blur-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-900/30" />
            <CardContent className="p-8 relative z-10">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <BarChart3 className="w-6 h-6 text-[#ECB629]" />
                  <h3 className="text-xl font-semibold text-white">
                    {serviceName} Потенциал Оценка
                  </h3>
                </div>

                <div className="relative w-40 h-40 mx-auto mb-4">
                  {/* Background Circle */}
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="rgb(51 65 85 / 0.5)"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Progress Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#ECB629"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - Math.min(results.detail2, 100) / 100)}`}
                      className="transition-all duration-1000 ease-in-out"
                    />
                  </svg>
                  {/* Center Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#ECB629]">
                        {Math.min(results.detail2, 100).toFixed(0)}
                      </div>
                      <div className="text-sm text-gray-400">от 100</div>
                    </div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-[#ECB629]/10 blur-xl animate-pulse" />
                </div>

                <p className="text-gray-400">{serviceName} Потенциал Скор</p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800/40 rounded-2xl p-6 text-center border border-slate-700/30">
                  <div className="text-2xl font-bold text-[#ECB629] mb-1">
                    {serviceName === "SEO Struktor™" && "+"}
                    {serviceName === "Clickstarter™" && results.metric2 > 0 && "-"}
                    {serviceName === "Clientomat™" && ""}
                    {serviceName === "Trendlab™" && "+"}
                    {results.metric1.toFixed(0)}{serviceResults.metric1.suffix}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {serviceResults.metric1.label}
                  </div>
                </div>

                <div className="bg-slate-800/40 rounded-2xl p-6 text-center border border-slate-700/30">
                  <div className="text-2xl font-bold text-[#ECB629] mb-1">
                    {serviceName === "SEO Struktor™" && "+"}
                    {serviceName === "Trendlab™" && ""}
                    {serviceName === "Clickstarter™" && "-"}
                    {serviceName === "Clientomat™" && "+"}
                    {results.metric2.toFixed(serviceName === "Clickstarter™" ? 2 : 0)}{serviceResults.metric2.suffix}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {serviceResults.metric2.label}
                  </div>
                </div>
              </div>

              {/* Results Details */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                  <span className="text-gray-300">{serviceResults.detail1.label}:</span>
                  <span className="text-white font-semibold">
                    {serviceName === "SEO Struktor™" && "Позиция #"}
                    {results.detail1.toFixed(serviceName === "Clickstarter™" ? 1 : 0)}{serviceResults.detail1.suffix}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">{serviceResults.detail2.label}:</span>
                  <span className="text-white font-semibold">
                    {results.detail2.toFixed(0)}{serviceResults.detail2.suffix}
                  </span>
                </div>
              </div>

              <Button 
                asChild
                className="w-full bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold"
              >
                <a 
                  href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {serviceName === "SEO Struktor™" && "Започнете SEO оптимизацията"}
                  {serviceName === "Trendlab™" && "Започнете content стратегията"}
                  {serviceName === "Clickstarter™" && "Оптимизирайте рекламите"}
                  {serviceName === "Clientomat™" && "Автоматизирайте клиентите"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}

export default function CalculatorsPage() {
  // SEO structured data
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "ROI Калкулатор - Pravdast",
      description:
        "Интерактивен калкулатор за изчисляване на ROI от дигитален маркетинг услуги",
      url: "https://www.pravdagency.eu/calculators",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BGN",
      },
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(236, 182, 41, 0.1) 2px, transparent 2px),
              linear-gradient(90deg, rgba(236, 182, 41, 0.1) 2px, transparent 2px)
            `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 pt-24 pb-12">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-[#ECB629]/30 rounded-full px-4 py-2 mb-6"
              >
                <Calculator className="w-4 h-4 text-[#ECB629]" />
                <span className="text-sm text-gray-300">
                  Безплатни ROI калкулатори
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Изчислете{" "}
                <span className="bg-[#ECB629] text-black px-2 py-1 rounded font-semibold">
                  точната печалба
                </span>{" "}
                от нашите системи
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Спрете да гадаете - започнете да планирате с
                реални числа.
              </motion.p>
            </div>

            {/* Calculator Tabs */}
            <Tabs defaultValue="seo-struktor" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/30">
                <TabsTrigger
                  value="seo-struktor"
                  className="data-[state=active]:bg-[#ECB629] data-[state=active]:text-black"
                >
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    <span className="hidden md:inline">SEO Struktor™</span>
                    <span className="md:hidden">SEO</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="trendlab"
                  className="data-[state=active]:bg-[#ECB629] data-[state=active]:text-black"
                >
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span className="hidden md:inline">Trendlab™</span>
                    <span className="md:hidden">Content</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="clickstarter"
                  className="data-[state=active]:bg-[#ECB629] data-[state=active]:text-black"
                >
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    <span className="hidden md:inline">Clickstarter™</span>
                    <span className="md:hidden">Ads</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="clientomat"
                  className="data-[state=active]:bg-[#ECB629] data-[state=active]:text-black"
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="hidden md:inline">Clientomat™</span>
                    <span className="md:hidden">CRM</span>
                  </div>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="seo-struktor" className="space-y-8">
                <div className="mb-8">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                        <Target className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        SEO Struktor™
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Инженерски подход към SEO оптимизация с измерими резултати. Увеличаваме органичния трафик с технически анализ и стратегически съдържание.
                    </p>
                    <div className="inline-block bg-[#ECB629]/10 px-3 py-1 rounded-full border border-[#ECB629]/20">
                      <span className="text-[#ECB629] font-semibold">
                        Инвестиция: 1980 лв./месец
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30 mb-6">
                    <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#ECB629]" />
                      Инвестиционна информация
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">
                      Цената от 1980 лв./месец включва пълна услуга
                      с персонализиран подход. ROI калкулаторът показва
                      очакваните резултати при оптимални условия.
                    </p>
                    <div className="text-xs text-gray-500 border-t border-slate-700 pt-2">
                      * Резултатите са ориентировъчни и зависят от множество
                      фактори като индустрия, конкуренция и начална позиция.
                    </div>
                  </div>

                  <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/20">
                    <h4 className="text-white font-medium mb-2">
                      Описание на услугата
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Инженерски подход към SEO оптимизация с измерими резултати. Увеличаваме органичния трафик с технически анализ и стратегически съдържание.
                    </p>
                  </div>
                </div>

                <ServiceCalculator serviceName="SEO Struktor™" />
              </TabsContent>

              <TabsContent value="trendlab" className="space-y-8">
                <div className="mb-8">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                        <Award className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        Trendlab™
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Система за създаване на авторитетно съдържание което изгражда експертност и привлича лоялни последователи. Превръщаме знанията ви в мощни маркетинг инструменти.
                    </p>
                    <div className="inline-block bg-[#ECB629]/10 px-3 py-1 rounded-full border border-[#ECB629]/20">
                      <span className="text-[#ECB629] font-semibold">
                        Инвестиция: 3450 лв./месец
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30 mb-6">
                    <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#ECB629]" />
                      Инвестиционна информация
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">
                      Цената от 3450 лв./месец включва пълна услуга
                      с персонализиран подход. ROI калкулаторът показва
                      очакваните резултати при оптимални условия.
                    </p>
                    <div className="text-xs text-gray-500 border-t border-slate-700 pt-2">
                      * Резултатите са ориентировъчни и зависят от множество
                      фактори като индустрия, конкуренция и начална позиция.
                    </div>
                  </div>

                  <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/20">
                    <h4 className="text-white font-medium mb-2">
                      Описание на услугата
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Система за създаване на авторитетно съдържание което изгражда експертност и привлича лоялни последователи. Превръщаме знанията ви в мощни маркетинг инструменти.
                    </p>
                  </div>
                </div>

                <ServiceCalculator serviceName="Trendlab™" />
              </TabsContent>

              <TabsContent value="clickstarter" className="space-y-8">
                <div className="mb-8">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                        <Target className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        Clickstarter™
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Оптимизация на реклами за максимален ROI. Скромни, но стабилни резултати с фокус върху конверсиите и намаляване на разходите за реклама.
                    </p>
                    <div className="inline-block bg-[#ECB629]/10 px-3 py-1 rounded-full border border-[#ECB629]/20">
                      <span className="text-[#ECB629] font-semibold">
                        Инвестиция: 1570 лв./месец
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30 mb-6">
                    <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#ECB629]" />
                      Инвестиционна информация
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">
                      Цената от 1570 лв./месец включва пълна услуга
                      с персонализиран подход. ROI калкулаторът показва
                      очакваните резултати при оптимални условия.
                    </p>
                    <div className="text-xs text-gray-500 border-t border-slate-700 pt-2">
                      * Резултатите са ориентировъчни и зависят от множество
                      фактори като индустрия, конкуренция и начална позиция.
                    </div>
                  </div>

                  <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/20">
                    <h4 className="text-white font-medium mb-2">
                      Описание на услугата
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Оптимизация на реклами за максимален ROI. Скромни, но стабилни резултати с фокус върху конверсиите и намаляване на разходите за реклама.
                    </p>
                  </div>
                </div>

                <ServiceCalculator serviceName="Clickstarter™" />
              </TabsContent>

              <TabsContent value="clientomat" className="space-y-8">
                <div className="mb-8">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                        <Users className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        Clientomat™
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Автоматизация на клиентския процес с фокус върху повторни поръчки и увеличаване на стойността на клиента през времето (LTV).
                    </p>
                    <div className="inline-block bg-[#ECB629]/10 px-3 py-1 rounded-full border border-[#ECB629]/20">
                      <span className="text-[#ECB629] font-semibold">
                        Инвестиция: 2890 лв./месец
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30 mb-6">
                    <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#ECB629]" />
                      Инвестиционна информация
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">
                      Цената от 2890 лв./месец включва пълна услуга
                      с персонализиран подход. ROI калкулаторът показва
                      очакваните резултати при оптимални условия.
                    </p>
                    <div className="text-xs text-gray-500 border-t border-slate-700 pt-2">
                      * Резултатите са ориентировъчни и зависят от множество
                      фактори като индустрия, конкуренция и начална позиция.
                    </div>
                  </div>

                  <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/20">
                    <h4 className="text-white font-medium mb-2">
                      Описание на услугата
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Автоматизация на клиентския процес с фокус върху повторни поръчки и увеличаване на стойността на клиента през времето (LTV).
                    </p>
                  </div>
                </div>

                <ServiceCalculator serviceName="Clientomat™" />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-20 bg-[#ECB629] text-black">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Scarcity Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full font-bold mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="bg-white text-red-500 px-2 py-1 rounded font-black text-sm">3</span>
                <span>места остават за следващото тримесечие</span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Готови за <span className="bg-black text-[#ECB629] px-2 py-1 rounded">трансформация</span>?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Калкулаторите показват потенциала. Ние го реализираме с измерими резултати.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <Button 
                  asChild
                  className="bg-black text-[#ECB629] hover:bg-gray-800 text-lg px-8 py-6 font-bold flex-1"
                >
                  <a 
                    href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Получете безплатен SEO одит <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-black hover:text-[#ECB629] text-lg px-8 py-6 font-semibold flex-1"
                >
                  <a 
                    href="/services/seo-struktor"
                    rel="noopener noreferrer"
                  >
                    Научете повече за услугата
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}