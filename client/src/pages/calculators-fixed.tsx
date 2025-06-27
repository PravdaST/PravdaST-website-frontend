import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Target, DollarSign, BarChart3, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { injectStructuredData } from "@/lib/seo-schemas";

// Service-specific Calculator Components

// SEO Struktor Calculator
function SEOStrukturCalculator() {
  const [inputs, setInputs] = useState({
    currentTraffic: '',
    currentRanking: '',
    targetKeywords: '',
    industry: ''
  });

  const [results, setResults] = useState({
    trafficIncrease: 0,
    newLeads: 0,
    rankingImprovement: 0,
    monthlyROI: 0
  });

  const calculateSEO = () => {
    const traffic = parseFloat(inputs.currentTraffic) || 0;
    const ranking = parseFloat(inputs.currentRanking) || 100;
    const keywords = parseFloat(inputs.targetKeywords) || 10;
    
    const trafficIncrease = traffic * 3.4; // 340% increase
    const newLeads = trafficIncrease * 0.025; // 2.5% conversion
    const rankingImprovement = Math.max(1, ranking - 30);
    const monthlyROI = ((newLeads * 2500) - 1980) / 1980 * 100;

    setResults({
      trafficIncrease,
      newLeads,
      rankingImprovement,
      monthlyROI
    });
  };

  useEffect(() => {
    calculateSEO();
  }, [inputs]);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Input Form */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-[#ECB629]" />
            SEO Параметри
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="traffic" className="text-white">Текущ месечен трафик</Label>
            <Input
              id="traffic"
              type="number"
              placeholder="напр. 5000"
              value={inputs.currentTraffic}
              onChange={(e) => setInputs({...inputs, currentTraffic: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="ranking" className="text-white">Средна позиция в Google</Label>
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
              placeholder="напр. 20"
              value={inputs.targetKeywords}
              onChange={(e) => setInputs({...inputs, targetKeywords: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <Card className="bg-gradient-to-br from-[#ECB629]/10 to-slate-800/50 border-[#ECB629]/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#ECB629]" />
            SEO Резултати
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-[#ECB629]">
                +{results.trafficIncrease.toFixed(0)}
              </div>
              <div className="text-sm text-gray-400">Нов трафик</div>
            </div>
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-[#ECB629]">
                +{results.newLeads.toFixed(0)}
              </div>
              <div className="text-sm text-gray-400">Нови leads</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-700">
              <span className="text-gray-300">Подобрение в позициите:</span>
              <span className="text-white font-semibold">
                Позиция #{results.rankingImprovement.toFixed(0)}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-300">Месечен ROI:</span>
              <span className="text-white font-semibold">
                {results.monthlyROI.toFixed(0)}%
              </span>
            </div>
          </div>

          {results.monthlyROI > 0 && (
            <Button 
              asChild
              className="w-full bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold"
            >
              <a 
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Започнете SEO оптимизацията <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// Trendlab Calculator
function TrendlabCalculator() {
  const [inputs, setInputs] = useState({
    currentFollowers: '',
    contentFrequency: '',
    engagementRate: '',
    industry: ''
  });

  const [results, setResults] = useState({
    newFollowers: 0,
    monthlyViews: 0,
    engagementBoost: 0,
    authorityScore: 0
  });

  const calculateContent = () => {
    const followers = parseFloat(inputs.currentFollowers) || 1000;
    const frequency = parseFloat(inputs.contentFrequency) || 4;
    const engagement = parseFloat(inputs.engagementRate) || 2;
    
    const newFollowers = followers * 4.5; // 450% increase
    const monthlyViews = newFollowers * frequency * 250;
    const engagementBoost = engagement * 3.8;
    const authorityScore = Math.min(95, 40 + (frequency * 8) + (engagement * 5));

    setResults({
      newFollowers,
      monthlyViews,
      engagementBoost,
      authorityScore
    });
  };

  useEffect(() => {
    calculateContent();
  }, [inputs]);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-[#ECB629]" />
            Content Параметри
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="followers" className="text-white">Текущи последователи</Label>
            <Input
              id="followers"
              type="number"
              placeholder="напр. 2500"
              value={inputs.currentFollowers}
              onChange={(e) => setInputs({...inputs, currentFollowers: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="frequency" className="text-white">Публикации седмично</Label>
            <Input
              id="frequency"
              type="number"
              placeholder="напр. 3"
              value={inputs.contentFrequency}
              onChange={(e) => setInputs({...inputs, contentFrequency: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="engagement" className="text-white">Engagement rate (%)</Label>
            <Input
              id="engagement"
              type="number"
              placeholder="напр. 3.5"
              value={inputs.engagementRate}
              onChange={(e) => setInputs({...inputs, engagementRate: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-[#ECB629]/10 to-slate-800/50 border-[#ECB629]/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#ECB629]" />
            Content Резултати
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-[#ECB629]">
                +{results.newFollowers.toFixed(0)}
              </div>
              <div className="text-sm text-gray-400">Нови последователи</div>
            </div>
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-[#ECB629]">
                {(results.monthlyViews/1000).toFixed(0)}K
              </div>
              <div className="text-sm text-gray-400">Месечни гледания</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-700">
              <span className="text-gray-300">Engagement подобрение:</span>
              <span className="text-white font-semibold">
                {results.engagementBoost.toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-300">Authority Score:</span>
              <span className="text-white font-semibold">
                {results.authorityScore.toFixed(0)}/100
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
              Започнете content стратегията <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

// Clickstarter Calculator  
function ClickstarterCalculator() {
  const [inputs, setInputs] = useState({
    currentAdSpend: '',
    currentCPC: '',
    currentConversions: '',
    targetROAS: ''
  });

  const [results, setResults] = useState({
    newOrders: 0,
    cpcReduction: 0,
    roasImprovement: 0,
    costSavings: 0
  });

  const calculateAds = () => {
    const spend = parseFloat(inputs.currentAdSpend) || 5000;
    const cpc = parseFloat(inputs.currentCPC) || 2.5;
    const conversions = parseFloat(inputs.currentConversions) || 50;
    
    const newOrders = conversions * 0.85; // 85% modest increase
    const cpcReduction = cpc * 0.25; // 25% CPC reduction
    const roasImprovement = 2.1; // 2.1x ROAS
    const costSavings = spend * 0.20; // 20% cost reduction

    setResults({
      newOrders,
      cpcReduction,
      roasImprovement,
      costSavings
    });
  };

  useEffect(() => {
    calculateAds();
  }, [inputs]);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-[#ECB629]" />
            Реклама Параметри
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="spend" className="text-white">Месечен ad spend (лв.)</Label>
            <Input
              id="spend"
              type="number"
              placeholder="напр. 8000"
              value={inputs.currentAdSpend}
              onChange={(e) => setInputs({...inputs, currentAdSpend: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="cpc" className="text-white">Текущ CPC (лв.)</Label>
            <Input
              id="cpc"
              type="number"
              placeholder="напр. 3.20"
              value={inputs.currentCPC}
              onChange={(e) => setInputs({...inputs, currentCPC: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="conversions" className="text-white">Месечни конверсии</Label>
            <Input
              id="conversions"
              type="number"
              placeholder="напр. 75"
              value={inputs.currentConversions}
              onChange={(e) => setInputs({...inputs, currentConversions: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-[#ECB629]/10 to-slate-800/50 border-[#ECB629]/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#ECB629]" />
            Ads Резултати
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-[#ECB629]">
                +{results.newOrders.toFixed(0)}
              </div>
              <div className="text-sm text-gray-400">Допълнителни поръчки</div>
            </div>
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-[#ECB629]">
                -{results.cpcReduction.toFixed(2)} лв.
              </div>
              <div className="text-sm text-gray-400">CPC намаление</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-700">
              <span className="text-gray-300">ROAS подобрение:</span>
              <span className="text-white font-semibold">
                {results.roasImprovement.toFixed(1)}x
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-300">Месечни спестявания:</span>
              <span className="text-white font-semibold">
                {results.costSavings.toFixed(0)} лв.
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
              Оптимизирайте рекламите <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

// Clientomat Calculator
function ClientomatCalculator() {
  const [inputs, setInputs] = useState({
    monthlyClients: '',
    averageOrderValue: '',
    repeatRate: '',
    retentionRate: ''
  });

  const [results, setResults] = useState({
    repeatOrders: 0,
    ltvIncrease: 0,
    retentionBoost: 0,
    monthlyRevenue: 0
  });

  const calculateAutomation = () => {
    const clients = parseFloat(inputs.monthlyClients) || 50;
    const aov = parseFloat(inputs.averageOrderValue) || 2500;
    const repeat = parseFloat(inputs.repeatRate) || 15;
    
    const repeatOrders = repeat * 1.8; // 180% increase in repeat orders
    const ltvIncrease = aov * 2.2; // 220% LTV increase
    const retentionBoost = Math.min(85, repeat + 35);
    const monthlyRevenue = clients * ltvIncrease * 0.3;

    setResults({
      repeatOrders,
      ltvIncrease,
      retentionBoost,
      monthlyRevenue
    });
  };

  useEffect(() => {
    calculateAutomation();
  }, [inputs]);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-[#ECB629]" />
            Клиент Параметри
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="clients" className="text-white">Месечни клиенти</Label>
            <Input
              id="clients"
              type="number"
              placeholder="напр. 80"
              value={inputs.monthlyClients}
              onChange={(e) => setInputs({...inputs, monthlyClients: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="aov" className="text-white">Средна поръчка (лв.)</Label>
            <Input
              id="aov"
              type="number"
              placeholder="напр. 3500"
              value={inputs.averageOrderValue}
              onChange={(e) => setInputs({...inputs, averageOrderValue: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="repeat" className="text-white">Repeat rate (%)</Label>
            <Input
              id="repeat"
              type="number"
              placeholder="напр. 25"
              value={inputs.repeatRate}
              onChange={(e) => setInputs({...inputs, repeatRate: e.target.value})}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-[#ECB629]/10 to-slate-800/50 border-[#ECB629]/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#ECB629]" />
            Automation Резултати
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-[#ECB629]">
                {results.repeatOrders.toFixed(0)}%
              </div>
              <div className="text-sm text-gray-400">Повторни поръчки</div>
            </div>
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-[#ECB629]">
                +{(results.ltvIncrease/1000).toFixed(1)}K
              </div>
              <div className="text-sm text-gray-400">LTV увеличение</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-700">
              <span className="text-gray-300">Retention подобрение:</span>
              <span className="text-white font-semibold">
                {results.retentionBoost.toFixed(0)}%
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-300">Допълнителен приход:</span>
              <span className="text-white font-semibold">
                {(results.monthlyRevenue/1000).toFixed(0)}K лв./месец
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
              Автоматизирайте клиентите <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </CardContent>
      </Card>
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
                <TabsTrigger value="seo-struktor" className="text-xs md:text-sm">SEO Struktor™</TabsTrigger>
                <TabsTrigger value="trendlab" className="text-xs md:text-sm">Trendlab™</TabsTrigger>
                <TabsTrigger value="clickstarter" className="text-xs md:text-sm">Clickstarter™</TabsTrigger>
                <TabsTrigger value="clientomat" className="text-xs md:text-sm">Clientomat™</TabsTrigger>
              </TabsList>

              <TabsContent value="seo-struktor">
                <div className="mb-8">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3">SEO Struktor™ - SEO Оптимизация</h3>
                    <p className="text-gray-300 mb-4">
                      Инженерски подход към SEO оптимизация с измерими резултати. Увеличаваме органичния трафик с технически анализ и стратегически съдържание.
                    </p>
                    <div className="inline-block bg-[#ECB629]/10 px-3 py-1 rounded-full border border-[#ECB629]/20">
                      <span className="text-[#ECB629] font-semibold">Инвестиция: 1980 лв./месец</span>
                    </div>
                  </div>
                </div>
                <SEOStrukturCalculator />
              </TabsContent>

              <TabsContent value="trendlab">
                <div className="mb-8">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3">Trendlab™ - Създаване на Съдържание</h3>
                    <p className="text-gray-300 mb-4">
                      Система за създаване на авторитетно съдържание което изгражда експертност и привлича лоялни последователи. Превръщаме знанията ви в мощни маркетинг инструменти.
                    </p>
                    <div className="inline-block bg-[#ECB629]/10 px-3 py-1 rounded-full border border-[#ECB629]/20">
                      <span className="text-[#ECB629] font-semibold">Инвестиция: 3450 лв./месец</span>
                    </div>
                  </div>
                </div>
                <TrendlabCalculator />
              </TabsContent>

              <TabsContent value="clickstarter">
                <div className="mb-8">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3">Clickstarter™ - Оптимизация на Реклами</h3>
                    <p className="text-gray-300 mb-4">
                      Оптимизация на реклами за максимален ROI. Скромни, но стабилни резултати с фокус върху конверсиите и намаляване на разходите за реклама.
                    </p>
                    <div className="inline-block bg-[#ECB629]/10 px-3 py-1 rounded-full border border-[#ECB629]/20">
                      <span className="text-[#ECB629] font-semibold">Инвестиция: 1570 лв./месец</span>
                    </div>
                  </div>
                </div>
                <ClickstarterCalculator />
              </TabsContent>

              <TabsContent value="clientomat">
                <div className="mb-8">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3">Clientomat™ - Автоматизация на Клиенти</h3>
                    <p className="text-gray-300 mb-4">
                      Автоматизация на клиентския процес с фокус върху повторни поръчки и увеличаване на стойността на клиента през времето (LTV).
                    </p>
                    <div className="inline-block bg-[#ECB629]/10 px-3 py-1 rounded-full border border-[#ECB629]/20">
                      <span className="text-[#ECB629] font-semibold">Инвестиция: 2890 лв./месец</span>
                    </div>
                  </div>
                </div>
                <ClientomatCalculator />
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