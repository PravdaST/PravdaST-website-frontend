import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Target, DollarSign, BarChart3, ArrowRight, CheckCircle, Zap, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// SEO structured data will be injected directly

interface ROICalculatorProps {
  serviceName: string;
  monthlyPrice: number;
  averageResults: {
    trafficIncrease: number;
    conversionRate: number;
    leadIncrease: number;
    revenueMultiplier: number;
  };
  color: string;
  icon: React.ReactNode;
}

function ROICalculator({ serviceName, monthlyPrice, averageResults, color, icon }: ROICalculatorProps) {
  const [inputs, setInputs] = useState({
    currentMonthlyRevenue: '',
    averageOrderValue: '',
    currentConversionRate: '',
    currentMonthlyTraffic: '',
    industry: ''
  });

  const [results, setResults] = useState({
    seoScore: 0,
    monthlyROI: 0,
    annualROI: 0,
    additionalRevenue: 0,
    paybackPeriod: 0,
    projectedTraffic: 0,
    projectedLeads: 0,
    timeframe: ''
  });

  const calculateROI = () => {
    const revenue = parseFloat(inputs.currentMonthlyRevenue) || 0;
    const aov = parseFloat(inputs.averageOrderValue) || 0;
    const conversionRate = parseFloat(inputs.currentConversionRate) || 0;
    const traffic = parseFloat(inputs.currentMonthlyTraffic) || 0;

    if (revenue > 0 && aov > 0) {
      // Calculate SEO potential score (0-100)
      let seoScore = 0;
      if (traffic > 0) seoScore += 25;
      if (conversionRate > 0) seoScore += 20;
      if (revenue > 10000) seoScore += 20; // Higher revenue = more potential
      if (inputs.industry) seoScore += 15;
      
      // Bonus points for competitive industries
      if (['ecommerce', 'b2b-services', 'saas'].includes(inputs.industry)) {
        seoScore += 20;
      }

      // Calculate projected improvements
      const projectedTraffic = traffic * (1 + averageResults.trafficIncrease / 100);
      const improvedConversionRate = conversionRate * (1 + averageResults.conversionRate / 100);
      const projectedLeads = projectedTraffic * (improvedConversionRate / 100);
      const additionalRevenue = projectedLeads * aov * averageResults.revenueMultiplier;
      
      const monthlyROI = monthlyPrice > 0 ? ((additionalRevenue - monthlyPrice) / monthlyPrice) * 100 : 0;
      const annualROI = monthlyROI * 12;
      const paybackPeriod = additionalRevenue > 0 ? monthlyPrice / additionalRevenue : 0;

      // Determine timeframe based on service type
      let timeframe = '6-9 месеца';
      if (serviceName.includes('SEO')) timeframe = '6-9 месеца';
      if (serviceName.includes('Clickstarter')) timeframe = '2-4 месеца';
      if (serviceName.includes('Trendlab')) timeframe = '3-6 месеца';
      if (serviceName.includes('Clientomat')) timeframe = '4-8 месеца';

      setResults({
        seoScore: Math.min(seoScore, 100),
        monthlyROI,
        annualROI,
        additionalRevenue,
        paybackPeriod,
        projectedTraffic,
        projectedLeads,
        timeframe
      });
    }
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const recommendations = [
    'SEO оптимизация',
    'Техническа подобрения',
    'Content маркетинг',
    'Линк билдинг'
  ];

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-3">
            <div className={`p-2 rounded-lg ${color}`}>
              {icon}
            </div>
            {serviceName} ROI Калкулатор
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="revenue" className="text-white">Месечен оборот (лв.)</Label>
              <Input
                id="revenue"
                type="number"
                placeholder="напр. 50000"
                value={inputs.currentMonthlyRevenue}
                onChange={(e) => setInputs({...inputs, currentMonthlyRevenue: e.target.value})}
                className="bg-slate-700/50 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="aov" className="text-white">Средна стойност на поръчка (лв.)</Label>
              <Input
                id="aov"
                type="number"
                placeholder="напр. 500"
                value={inputs.averageOrderValue}
                onChange={(e) => setInputs({...inputs, averageOrderValue: e.target.value})}
                className="bg-slate-700/50 border-slate-600 text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="conversion" className="text-white">Конверсия (%)</Label>
              <Input
                id="conversion"
                type="number"
                placeholder="напр. 2.5"
                value={inputs.currentConversionRate}
                onChange={(e) => setInputs({...inputs, currentConversionRate: e.target.value})}
                className="bg-slate-700/50 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="traffic" className="text-white">Месечен трафик</Label>
              <Input
                id="traffic"
                type="number"
                placeholder="напр. 10000"
                value={inputs.currentMonthlyTraffic}
                onChange={(e) => setInputs({...inputs, currentMonthlyTraffic: e.target.value})}
                className="bg-slate-700/50 border-slate-600 text-white"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="industry" className="text-white">Индустрия</Label>
            <Select value={inputs.industry} onValueChange={(value) => setInputs({...inputs, industry: value})}>
              <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                <SelectValue placeholder="Изберете индустрия" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="b2b-services">B2B Услуги</SelectItem>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="saas">SaaS</SelectItem>
                <SelectItem value="manufacturing">Производство</SelectItem>
                <SelectItem value="consulting">Консултиране</SelectItem>
                <SelectItem value="healthcare">Здравеопазване</SelectItem>
                <SelectItem value="education">Образование</SelectItem>
                <SelectItem value="finance">Финанси</SelectItem>
                <SelectItem value="real-estate">Недвижими имоти</SelectItem>
                <SelectItem value="other">Друго</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results Section - Modern Design */}
      {(results.seoScore > 0 || results.monthlyROI > 0) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Main Score Card */}
          <Card className="bg-gradient-to-br from-[#ECB629]/10 to-slate-800/50 border-[#ECB629]/30 backdrop-blur-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ECB629]/5 to-transparent" />
            <CardContent className="p-8 relative z-10">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <BarChart3 className="w-6 h-6 text-[#ECB629]" />
                  <h3 className="text-xl font-semibold text-white">SEO Потенциал Оценка</h3>
                </div>
                
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full border-8 border-slate-700/50" />
                  <div 
                    className="absolute inset-0 rounded-full border-8 border-[#ECB629] transition-all duration-1000"
                    style={{
                      clipPath: `polygon(50% 50%, 50% 0%, ${
                        50 + 50 * Math.cos((results.seoScore / 100) * 2 * Math.PI - Math.PI / 2)
                      }% ${
                        50 + 50 * Math.sin((results.seoScore / 100) * 2 * Math.PI - Math.PI / 2)
                      }%, 50% 50%)`
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#ECB629]">{results.seoScore}</div>
                      <div className="text-xs text-gray-400">от 100</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400">SEO Потенциал Скор</p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800/40 rounded-2xl p-6 text-center border border-slate-700/30">
                  <div className="text-2xl font-bold text-[#ECB629] mb-1">
                    +{results.projectedTraffic > 0 ? Math.round(results.projectedTraffic - parseFloat(inputs.currentMonthlyTraffic || '0')).toLocaleString('bg-BG') : '10 000'}
                  </div>
                  <div className="text-gray-400 text-sm">Потенциален трафик/месец</div>
                </div>
                
                <div className="bg-slate-800/40 rounded-2xl p-6 text-center border border-slate-700/30">
                  <div className="text-2xl font-bold text-[#ECB629] mb-1">{results.timeframe}</div>
                  <div className="text-gray-400 text-sm">Очаквано време</div>
                </div>
              </div>

              {/* Recommendations */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#ECB629]" />
                  Препоръки за подобрение:
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#ECB629] rounded-full" />
                      <span className="text-gray-300 text-sm">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ROI Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">ROI</h4>
                    <p className="text-gray-400 text-sm">Възвращаемост</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-500 mb-1">
                  {results.monthlyROI > 0 ? `${results.monthlyROI.toFixed(0)}%` : '245%'}
                </div>
                <div className="text-gray-400 text-sm">месечно</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Приход</h4>
                    <p className="text-gray-400 text-sm">Допълнителен</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-500 mb-1">
                  {results.additionalRevenue > 0 ? `${Math.round(results.additionalRevenue).toLocaleString('bg-BG')} лв.` : '45 000 лв.'}
                </div>
                <div className="text-gray-400 text-sm">месечно</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Период</h4>
                    <p className="text-gray-400 text-sm">Възвращаемост</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-purple-500 mb-1">
                  {results.paybackPeriod > 0 && results.paybackPeriod < 12 ? `${results.paybackPeriod.toFixed(1)} мес.` : '0.8 мес.'}
                </div>
                <div className="text-gray-400 text-sm">срок</div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-[#ECB629]/10 to-[#ECB629]/5 border-[#ECB629]/30 backdrop-blur-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Готови за <span className="text-[#ECB629]">трансформация</span>?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Вашият SEO потенциал е {results.seoScore}/100. Започнете оптимизацията днес и постигнете измерими резултати.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open('https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu', '_blank')}
                  className="bg-[#ECB629] hover:bg-[#ECB629]/90 text-black font-semibold px-8 py-3 rounded-xl"
                >
                  Получете безплатен SEO одит
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629]/10 px-8 py-3 rounded-xl"
                >
                  Научете повече
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}

export default function CalculatorsNew() {
  const services = [
    {
      name: "SEO Struktor™",
      price: 1980,
      averageResults: {
        trafficIncrease: 150,
        conversionRate: 25,
        leadIncrease: 200,
        revenueMultiplier: 1.8
      },
      color: "bg-blue-500/10 text-blue-500",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      name: "Trendlab™",
      price: 3450,
      averageResults: {
        trafficIncrease: 200,
        conversionRate: 35,
        leadIncrease: 300,
        revenueMultiplier: 2.2
      },
      color: "bg-purple-500/10 text-purple-500",
      icon: <Award className="w-5 h-5" />
    },
    {
      name: "Clickstarter™",
      price: 1570,
      averageResults: {
        trafficIncrease: 80,
        conversionRate: 45,
        leadIncrease: 120,
        revenueMultiplier: 1.6
      },
      color: "bg-green-500/10 text-green-500",
      icon: <Zap className="w-5 h-5" />
    },
    {
      name: "Clientomat™",
      price: 2890,
      averageResults: {
        trafficIncrease: 120,
        conversionRate: 40,
        leadIncrease: 180,
        revenueMultiplier: 2.0
      },
      color: "bg-orange-500/10 text-orange-500",
      icon: <Users className="w-5 h-5" />
    }
  ];

  useEffect(() => {
    // Inject SEO structured data for calculator page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Pravdast ROI Calculator",
      "description": "Интерактивен калкулатор за изчисляване на ROI от дигитален маркетинг услуги",
      "url": "https://www.pravdagency.eu/calculators",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BGN"
      }
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(236, 182, 41, 0.1) 2px, transparent 2px),
            linear-gradient(90deg, rgba(236, 182, 41, 0.1) 2px, transparent 2px)
          `,
          backgroundSize: '60px 60px'
        }} />
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
              <span className="text-sm text-gray-300">Безплатни ROI калкулатори</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              ROI & SEO <span className="text-[#ECB629]">Калкулатори</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              Изчислете точния ROI и SEO потенциал на вашия бизнес с нашите интерактивни калкулатори, базирани на реални данни от над 100+ проекта
            </motion.p>
          </div>

          {/* Calculator Tabs */}
          <Tabs defaultValue="seo-struktor" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-slate-800/50 rounded-2xl p-2 mb-8">
              {services.map((service, index) => (
                <TabsTrigger
                  key={index}
                  value={service.name.toLowerCase().replace('™', '').replace(' ', '-')}
                  className="rounded-xl data-[state=active]:bg-[#ECB629] data-[state=active]:text-black font-medium"
                >
                  {service.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service, index) => (
              <TabsContent
                key={index}
                value={service.name.toLowerCase().replace('™', '').replace(' ', '-')}
              >
                <ROICalculator
                  serviceName={service.name}
                  monthlyPrice={service.price}
                  averageResults={service.averageResults}
                  color={service.color}
                  icon={service.icon}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}