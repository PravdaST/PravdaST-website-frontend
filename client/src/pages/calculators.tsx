import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Target, DollarSign, BarChart3, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { injectStructuredData } from "@/lib/seo-schemas";

// ROI Calculator Components
interface ROICalculatorProps {
  serviceName: string;
  monthlyPrice: number;
  averageResults: {
    trafficIncrease: number;
    conversionRate: number;
    leadIncrease: number;
    revenueMultiplier: number;
  };
}

function ROICalculator({ serviceName, monthlyPrice, averageResults }: ROICalculatorProps) {
  const [inputs, setInputs] = useState({
    currentMonthlyRevenue: '',
    averageOrderValue: '',
    currentConversionRate: '',
    currentMonthlyTraffic: '',
    industry: ''
  });

  const [results, setResults] = useState({
    monthlyROI: 0,
    annualROI: 0,
    additionalRevenue: 0,
    paybackPeriod: 0,
    projectedTraffic: 0,
    projectedLeads: 0
  });

  const calculateROI = () => {
    const revenue = parseFloat(inputs.currentMonthlyRevenue) || 0;
    const aov = parseFloat(inputs.averageOrderValue) || 0;
    const conversionRate = parseFloat(inputs.currentConversionRate) || 0;
    const traffic = parseFloat(inputs.currentMonthlyTraffic) || 0;

    if (revenue > 0 && aov > 0) {
      // Calculate projected improvements
      const projectedTraffic = traffic * (1 + averageResults.trafficIncrease / 100);
      const improvedConversionRate = conversionRate * (1 + averageResults.conversionRate / 100);
      const projectedLeads = (projectedTraffic * improvedConversionRate) / 100;
      
      // Calculate additional revenue
      const currentLeads = (traffic * conversionRate) / 100;
      const additionalLeads = projectedLeads - currentLeads;
      const additionalRevenue = additionalLeads * aov;
      
      // Calculate ROI
      const monthlyROI = ((additionalRevenue - monthlyPrice) / monthlyPrice) * 100;
      const annualROI = monthlyROI * 12;
      const paybackPeriod = monthlyPrice / additionalRevenue;

      setResults({
        monthlyROI,
        annualROI,
        additionalRevenue,
        paybackPeriod,
        projectedTraffic,
        projectedLeads
      });
    }
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Input Form */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#ECB629]" />
            {serviceName} ROI Калкулатор
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="revenue" className="text-white">Текущ месечен оборот (лв.)</Label>
            <Input
              id="revenue"
              type="number"
              placeholder="напр. 50000"
              value={inputs.currentMonthlyRevenue}
              onChange={(e) => setInputs({...inputs, currentMonthlyRevenue: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>

          <div>
            <Label htmlFor="aov" className="text-white">Средна стойност на поръчка (лв.)</Label>
            <Input
              id="aov"
              type="number"
              placeholder="напр. 2500"
              value={inputs.averageOrderValue}
              onChange={(e) => setInputs({...inputs, averageOrderValue: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>

          <div>
            <Label htmlFor="conversion" className="text-white">Текущ conversion rate (%)</Label>
            <Input
              id="conversion"
              type="number"
              placeholder="напр. 2.5"
              value={inputs.currentConversionRate}
              onChange={(e) => setInputs({...inputs, currentConversionRate: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>

          <div>
            <Label htmlFor="traffic" className="text-white">Месечен трафик (посетители)</Label>
            <Input
              id="traffic"
              type="number"
              placeholder="напр. 5000"
              value={inputs.currentMonthlyTraffic}
              onChange={(e) => setInputs({...inputs, currentMonthlyTraffic: e.target.value})}
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
                <SelectItem value="b2b-services">B2B Услуги</SelectItem>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="saas">SaaS</SelectItem>
                <SelectItem value="manufacturing">Производство</SelectItem>
                <SelectItem value="real-estate">Недвижими имоти</SelectItem>
                <SelectItem value="healthcare">Здравеопазване</SelectItem>
                <SelectItem value="education">Образование</SelectItem>
                <SelectItem value="other">Друго</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <Card className="bg-gradient-to-br from-[#ECB629]/10 to-slate-800/50 border-[#ECB629]/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#ECB629]" />
            Прогнозирани Резултати
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-[#ECB629]">
                {results.monthlyROI.toFixed(0)}%
              </div>
              <div className="text-sm text-gray-400">Месечен ROI</div>
            </div>
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-[#ECB629]">
                {results.paybackPeriod > 0 ? results.paybackPeriod.toFixed(1) : '0'} мес.
              </div>
              <div className="text-sm text-gray-400">Възвращаемост</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-700">
              <span className="text-gray-300">Допълнителен месечен приход:</span>
              <span className="text-white font-semibold">
                {results.additionalRevenue.toFixed(0)} лв.
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-700">
              <span className="text-gray-300">Годишен ROI:</span>
              <span className="text-white font-semibold">
                {results.annualROI.toFixed(0)}%
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-700">
              <span className="text-gray-300">Прогнозиран трафик:</span>
              <span className="text-white font-semibold">
                {results.projectedTraffic.toFixed(0)} посетители
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-300">Прогнозирани leads:</span>
              <span className="text-white font-semibold">
                {results.projectedLeads.toFixed(0)} leads
              </span>
            </div>
          </div>

          {results.monthlyROI > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              <Button 
                asChild
                className="w-full bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold"
              >
                <a 
                  href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Започнете сега <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// SEO Potential Calculator
function SEOPotentialCalculator() {
  const [inputs, setInputs] = useState({
    website: '',
    industry: '',
    currentRanking: '',
    targetKeywords: '',
    competitorAnalysis: ''
  });

  const [analysis, setAnalysis] = useState({
    seoScore: 0,
    potentialTraffic: 0,
    competitionLevel: '',
    recommendations: [] as string[],
    timeframe: ''
  });

  const analyzeSEOPotential = () => {
    let score = 0;
    let traffic = 0;
    let competition = 'Средна';
    const recommendations = [];
    let timeframe = '6-9 месеца';

    // Basic scoring algorithm
    if (inputs.currentRanking) {
      const ranking = parseInt(inputs.currentRanking);
      if (ranking > 50) {
        score += 30;
        traffic += 2000;
        recommendations.push('Техническа SEO оптимизация');
        recommendations.push('Подобряване на съдържанието');
      } else if (ranking > 20) {
        score += 50;
        traffic += 5000;
        recommendations.push('Link building кампания');
        recommendations.push('Локална SEO оптимизация');
      } else {
        score += 70;
        traffic += 10000;
        recommendations.push('Advanced SEO стратегии');
        timeframe = '3-6 месеца';
      }
    }

    // Industry factor
    if (inputs.industry) {
      switch(inputs.industry) {
        case 'b2b-services':
          score += 20;
          traffic *= 1.5;
          competition = 'Средна';
          break;
        case 'ecommerce':
          score += 10;
          traffic *= 2;
          competition = 'Висока';
          break;
        case 'local-business':
          score += 25;
          traffic *= 1.2;
          competition = 'Ниска';
          timeframe = '3-4 месеца';
          break;
      }
    }

    setAnalysis({
      seoScore: Math.min(score, 95),
      potentialTraffic: Math.round(traffic),
      competitionLevel: competition,
      recommendations,
      timeframe
    });
  };

  useEffect(() => {
    analyzeSEOPotential();
  }, [inputs]);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Input Form */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-[#ECB629]" />
            SEO Потенциал Анализ
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="website" className="text-white">URL на уебсайта</Label>
            <Input
              id="website"
              type="url"
              placeholder="https://example.com"
              value={inputs.website}
              onChange={(e) => setInputs({...inputs, website: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>

          <div>
            <Label htmlFor="seo-industry" className="text-white">Индустрия</Label>
            <Select value={inputs.industry} onValueChange={(value) => setInputs({...inputs, industry: value})}>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Изберете индустрия" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="b2b-services">B2B Услуги</SelectItem>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="local-business">Локален бизнес</SelectItem>
                <SelectItem value="professional-services">Професионални услуги</SelectItem>
                <SelectItem value="manufacturing">Производство</SelectItem>
                <SelectItem value="healthcare">Здравеопазване</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="ranking" className="text-white">Текуща позиция в Google (1-100)</Label>
            <Input
              id="ranking"
              type="number"
              placeholder="напр. 45"
              value={inputs.currentRanking}
              onChange={(e) => setInputs({...inputs, currentRanking: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>

          <div>
            <Label htmlFor="keywords" className="text-white">Брой целеви ключови думи</Label>
            <Input
              id="keywords"
              type="number"
              placeholder="напр. 50"
              value={inputs.targetKeywords}
              onChange={(e) => setInputs({...inputs, targetKeywords: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>

          <div>
            <Label htmlFor="competitor" className="text-white">Конкурентен анализ</Label>
            <Select value={inputs.competitorAnalysis} onValueChange={(value) => setInputs({...inputs, competitorAnalysis: value})}>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Ниво на конкуренция" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Ниска конкуренция</SelectItem>
                <SelectItem value="medium">Средна конкуренция</SelectItem>
                <SelectItem value="high">Висока конкуренция</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Results */}
      <Card className="bg-gradient-to-br from-[#ECB629]/10 to-slate-800/50 border-[#ECB629]/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-[#ECB629]" />
            SEO Потенциал Оценка
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#ECB629] mb-2">
              {analysis.seoScore}/100
            </div>
            <div className="text-gray-400">SEO Потенциал Скор</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="text-xl font-bold text-white">
                +{analysis.potentialTraffic.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Потенциален трафик/месец</div>
            </div>
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="text-xl font-bold text-white">
                {analysis.timeframe}
              </div>
              <div className="text-sm text-gray-400">Очаквано време</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Препоръки за подобрение:</h4>
            <div className="space-y-2">
              {analysis.recommendations.map((rec, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-[#ECB629]" />
                  <span className="text-sm">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-700 pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-300">Ниво на конкуренция:</span>
              <span className="text-white font-semibold">{analysis.competitionLevel}</span>
            </div>
          </div>

          {analysis.seoScore > 50 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              <Button 
                asChild
                className="w-full bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold"
              >
                <a 
                  href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Получете безплатен SEO одит <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default function Calculators() {
  useEffect(() => {
    // Inject structured data for calculators page
    const calculatorSchema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "ROI и SEO Калкулатори",
      description: "Безплатни калкулатори за изчисляване на ROI от маркетинг инвестиции и SEO потенциал",
      url: "https://www.pravdagency.eu/calculators",
      provider: {
        "@type": "Organization",
        name: "Pravdast Business Engineering"
      },
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser"
    };

    injectStructuredData(calculatorSchema, 'calculator-schema');
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#ECB629] rounded-full"
                initial={{ 
                  x: Math.random() * window.innerWidth, 
                  y: Math.random() * window.innerHeight,
                  scale: 0 
                }}
                animate={{ 
                  y: [null, -20, 0],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-[#ECB629]/10 px-4 py-2 rounded-full border border-[#ECB629]/20 mb-6">
                <Calculator className="w-4 h-4 text-[#ECB629]" />
                <span className="text-[#ECB629] font-medium">Безплатни Калкулатори</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Изчислете вашия{" "}
                <span className="text-[#ECB629]">ROI</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Открийте точно колко ще спечелите от всяка маркетинг инвестиция. 
                Инженерни калкулатори за predictable резултати.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calculators Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="seo-struktor" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12 bg-slate-800/50">
              <TabsTrigger value="seo-struktor" className="text-xs md:text-sm">SEO Struktor™</TabsTrigger>
              <TabsTrigger value="trendlab" className="text-xs md:text-sm">Trendlab™</TabsTrigger>
              <TabsTrigger value="clickstarter" className="text-xs md:text-sm">Clickstarter™</TabsTrigger>
              <TabsTrigger value="clientomat" className="text-xs md:text-sm">Clientomat™</TabsTrigger>
              <TabsTrigger value="seo-potential" className="text-xs md:text-sm">SEO Анализ</TabsTrigger>
            </TabsList>

            <TabsContent value="seo-struktor">
              <ROICalculator
                serviceName="SEO Struktor™"
                monthlyPrice={1980}
                averageResults={{
                  trafficIncrease: 340,
                  conversionRate: 85,
                  leadIncrease: 250,
                  revenueMultiplier: 2.3
                }}
              />
            </TabsContent>

            <TabsContent value="trendlab">
              <ROICalculator
                serviceName="Trendlab™"
                monthlyPrice={3450}
                averageResults={{
                  trafficIncrease: 180,
                  conversionRate: 120,
                  leadIncrease: 200,
                  revenueMultiplier: 1.8
                }}
              />
            </TabsContent>

            <TabsContent value="clickstarter">
              <ROICalculator
                serviceName="Clickstarter™"
                monthlyPrice={1570}
                averageResults={{
                  trafficIncrease: 120,
                  conversionRate: 95,
                  leadIncrease: 180,
                  revenueMultiplier: 2.1
                }}
              />
            </TabsContent>

            <TabsContent value="clientomat">
              <ROICalculator
                serviceName="Clientomat™"
                monthlyPrice={2890}
                averageResults={{
                  trafficIncrease: 220,
                  conversionRate: 150,
                  leadIncrease: 300,
                  revenueMultiplier: 2.5
                }}
              />
            </TabsContent>

            <TabsContent value="seo-potential">
              <SEOPotentialCalculator />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#ECB629] text-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готови за measurable резултати?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Калкулаторите показват потенциала. Ние го реализираме.
            </p>
            <Button 
              asChild
              className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6"
            >
              <a 
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Започнете безплатната консултация <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}