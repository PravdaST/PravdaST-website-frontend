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

// Types
interface ROICalculatorProps {
  serviceName: string;
  monthlyPrice: number;
  description: string;
  averageResults: {
    trafficIncrease: number;
    conversionRate: number;
    leadIncrease: number;
    revenueMultiplier: number;
  };
  color: string;
  icon: React.ReactNode;
}

// Service-specific Calculator Components

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
    param3: ''
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
        </CardContent>
      </Card>

      {/* Results */}
      <Card className="bg-gradient-to-br from-[#ECB629]/10 to-slate-800/50 border-[#ECB629]/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#ECB629]" />
            {serviceName} Резултати
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-[#ECB629]">
                {serviceName === "SEO Struktor™" && "+"}
                {serviceName === "Clickstarter™" && results.metric2 > 0 && "-"}
                {results.metric1.toFixed(0)}{serviceResults.metric1.suffix}
              </div>
              <div className="text-sm text-gray-400">{serviceResults.metric1.label}</div>
            </div>
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-[#ECB629]">
                {serviceName === "SEO Struktor™" && "+"}
                {serviceName === "Trendlab™" && ""}
                {serviceName === "Clickstarter™" && "-"}
                {serviceName === "Clientomat™" && "+"}
                {results.metric2.toFixed(serviceName === "Clickstarter™" ? 2 : 0)}{serviceResults.metric2.suffix}
              </div>
              <div className="text-sm text-gray-400">{serviceResults.metric2.label}</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-700">
              <span className="text-gray-300">{serviceResults.detail1.label}:</span>
              <span className="text-white font-semibold">
                {serviceName === "SEO Struktor™" && "Позиция #"}
                {results.detail1.toFixed(serviceName === "Clickstarter™" ? 1 : 0)}{serviceResults.detail1.suffix}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
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

function ROICalculator({
  serviceName,
  monthlyPrice,
  description,
  averageResults,
  color,
  icon,
}: ROICalculatorProps) {
  const [inputs, setInputs] = useState({
    currentMonthlyRevenue: "",
    currentMonthlyTraffic: "",
    averageOrderValue: "",
    industry: "",
  });

  const [results, setResults] = useState({
    monthlyROI: 0,
    additionalRevenue: 0,
    projectedTraffic: 0,
    seoScore: 0,
    paybackPeriod: 0,
    timeframe: "3-6 месеца",
  });

  const [recommendations, setRecommendations] = useState<string[]>([]);

  // Calculate ROI when inputs change
  useEffect(() => {
    const revenue = parseFloat(inputs.currentMonthlyRevenue) || 0;
    const traffic = parseFloat(inputs.currentMonthlyTraffic) || 0;
    const orderValue = parseFloat(inputs.averageOrderValue) || 0;

    if (revenue > 0 && traffic > 0) {
      // Calculate projected improvements
      const trafficIncrease = (traffic * averageResults.trafficIncrease) / 100;
      const projectedTraffic = traffic + trafficIncrease;

      // Current conversion rate estimation
      const currentOrders =
        orderValue > 0 ? revenue / orderValue : revenue / 100;
      const currentConversionRate = (currentOrders / traffic) * 100;

      // Improved conversion rate
      const improvedConversionRate = Math.min(
        currentConversionRate +
          (averageResults.conversionRate / 100) * currentConversionRate,
        15, // Cap at 15%
      );

      // Calculate additional revenue
      const newOrders = (projectedTraffic * improvedConversionRate) / 100;
      const newRevenue = newOrders * (orderValue || 100);
      const additionalRevenue = newRevenue - revenue;

      // ROI calculation
      const monthlyROI =
        ((additionalRevenue - monthlyPrice) / monthlyPrice) * 100;
      const paybackPeriod = monthlyPrice / Math.max(additionalRevenue, 1);

      // SEO Score calculation
      let seoScore = 40; // Base score
      if (traffic > 1000) seoScore += 10;
      if (traffic > 5000) seoScore += 10;
      if (revenue > 10000) seoScore += 15;
      if (revenue > 50000) seoScore += 15;
      if (orderValue > 200) seoScore += 10;

      setResults({
        monthlyROI,
        additionalRevenue,
        projectedTraffic,
        seoScore: Math.min(seoScore, 100),
        paybackPeriod,
        timeframe: serviceName.includes("SEO")
          ? "3-6 месеца"
          : serviceName.includes("Trend")
            ? "2-4 месеца"
            : "1-3 месеца",
      });

      // Generate recommendations
      const recs = [];
      if (currentConversionRate < 2) recs.push("Конверсии оптимизация");
      if (traffic < 5000) recs.push("Органен трафик");
      if (!inputs.industry) recs.push("Техническо подобрение");
      if (orderValue < 100) recs.push("Ценова стратегия");
      if (seoScore < 70) recs.push("SEO аудит");
      if (serviceName.includes("Trend")) recs.push("Съдържание маркетинг");

      setRecommendations(recs.slice(0, 4));
    }
  }, [inputs, monthlyPrice, averageResults, serviceName]);

  return (
    <div className="space-y-8">
      {/* Service Description */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-[#ECB629]/30 rounded-full px-4 py-2 mb-4"
        >
          {icon}
          <span className="text-sm text-gray-300">{serviceName}</span>
        </motion.div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-4">{description}</p>
        
        {/* Recommendations */}
        <div className="bg-slate-800/40 rounded-xl p-4 border border-[#ECB629]/20 max-w-2xl mx-auto">
          <h4 className="text-white font-semibold mb-4 flex items-center gap-2 justify-center">
            <CheckCircle className="w-5 h-5 text-[#ECB629]" />
            Препоръки за подобрение:
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ECB629] rounded-full" />
              <span className="text-gray-300 text-sm">Органен трафик</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ECB629] rounded-full" />
              <span className="text-gray-300 text-sm">Техническо подобрение</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ECB629] rounded-full" />
              <span className="text-gray-300 text-sm">SEO аудит</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ECB629] rounded-full" />
              <span className="text-gray-300 text-sm">Контент стратегия</span>
            </div>
          </div>
        </div>
      </div>

      {/* Input Form */}
      <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            {icon}
            {serviceName} - ROI Калкулатор
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="revenue" className="text-white">
                Среден месечен оборот (лв.)
              </Label>
              <Input
                id="revenue"
                type="number"
                placeholder="напр. 25000"
                value={inputs.currentMonthlyRevenue}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    currentMonthlyRevenue: e.target.value,
                  })
                }
                className="bg-slate-900/50 border-slate-600 text-white"
              />
            </div>

            <div>
              <Label htmlFor="traffic" className="text-white">
                Среден брой месечни посетители
              </Label>
              <Input
                id="traffic"
                type="number"
                placeholder="напр. 5000"
                value={inputs.currentMonthlyTraffic}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    currentMonthlyTraffic: e.target.value,
                  })
                }
                className="bg-slate-900/50 border-slate-600 text-white"
              />
            </div>

            <div>
              <Label htmlFor="orderValue" className="text-white">
                Средна стойност на поръчка (лв.)
              </Label>
              <Input
                id="orderValue"
                type="number"
                placeholder="напр. 150"
                value={inputs.averageOrderValue}
                onChange={(e) =>
                  setInputs({ ...inputs, averageOrderValue: e.target.value })
                }
                className="bg-slate-900/50 border-slate-600 text-white"
              />
            </div>

            <div>
              <Label htmlFor="industry" className="text-white">
                Индустрия
              </Label>
              <Select
                value={inputs.industry}
                onValueChange={(value) =>
                  setInputs({ ...inputs, industry: value })
                }
              >
                <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                  <SelectValue placeholder="Изберете индустрия" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ecommerce">Онлайн Магазин</SelectItem>
                  <SelectItem value="services">Услуги</SelectItem>
                  <SelectItem value="manufacturing">Производство</SelectItem>
                  <SelectItem value="construction">Стройтелство</SelectItem>
                  <SelectItem value="hospitality">Хотелиерство</SelectItem>
                  <SelectItem value="Restaurant">Ресторантьорство</SelectItem>
                  <SelectItem value="retail">Търговия</SelectItem>
                  <SelectItem value="consulting">
                    Консултантски услуги
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
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
      {(results.seoScore > 0 || results.monthlyROI > 0) && (
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
                    SEO Потенциал Оценка
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
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - results.seoScore / 100)}`}
                      className="transition-all duration-1000 ease-in-out"
                    />
                  </svg>
                  {/* Center Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#ECB629]">
                        {results.seoScore}
                      </div>
                      <div className="text-sm text-gray-400">от 100</div>
                    </div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-[#ECB629]/10 blur-xl animate-pulse" />
                </div>

                <p className="text-gray-400">SEO Потенциал Скор</p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800/40 rounded-2xl p-6 text-center border border-slate-700/30">
                  <div className="text-2xl font-bold text-[#ECB629] mb-1">
                    +
                    {results.projectedTraffic > 0
                      ? Math.round(
                          results.projectedTraffic -
                            parseFloat(inputs.currentMonthlyTraffic || "0"),
                        ).toLocaleString("bg-BG")
                      : "10 000"}
                  </div>
                  <div className="text-gray-400 text-sm">
                    Потенциален трафик/месец
                  </div>
                </div>

                <div className="bg-slate-800/40 rounded-2xl p-6 text-center border border-slate-700/30">
                  <div className="text-2xl font-bold text-[#ECB629] mb-1">
                    {results.timeframe}
                  </div>
                  <div className="text-gray-400 text-sm">Очаквано време</div>
                </div>
              </div>

              {/* Recommendations */}
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-[#ECB629]" />
                  <span className="text-[#ECB629] font-semibold">Стартова инвестиция: {monthlyPrice.toLocaleString('bg-BG')} лв./месец</span>
                </div>
                <p className="text-gray-400 text-sm text-center">
                  Това са приходите, които може да ви донесе тази инвестиция на база трафика, който системата генерира. 
                  Спрете да харчите без план - започнете да строите с цифри.
                </p>
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
                  {results.monthlyROI > 0
                    ? `${results.monthlyROI.toFixed(0)}%`
                    : "245%"}
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
                  {results.additionalRevenue > 0
                    ? `${Math.round(results.additionalRevenue).toLocaleString("bg-BG")} лв.`
                    : "45 000 лв."}
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
                  {results.paybackPeriod > 0 && results.paybackPeriod < 12
                    ? `${results.paybackPeriod.toFixed(1)} мес.`
                    : "0.8 мес."}
                </div>
                <div className="text-gray-400 text-sm">срок</div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-slate-900/80 border-slate-700/50 backdrop-blur-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Готови за <span className="text-[#ECB629]">трансформация</span>?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Вашият SEO потенциал е {results.seoScore}/100. Започнете
                оптимизацията днес и постигнете измерими резултати.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() =>
                    window.open(
                      "https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu",
                      "_blank",
                    )
                  }
                  className="bg-[#ECB629] hover:bg-[#ECB629]/90 text-black font-semibold px-8 py-3 rounded-xl"
                >
                  Получете безплатен SEO одит
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const currentService = serviceName.toLowerCase();
                    if (currentService.includes("seo"))
                      window.location.href = "/services/seo-struktor";
                    else if (currentService.includes("click"))
                      window.location.href = "/services/clickstarter";
                    else if (currentService.includes("trend"))
                      window.location.href = "/services/trendlab";
                    else if (currentService.includes("client"))
                      window.location.href = "/services/clientomat";
                    else window.location.href = "/services";
                  }}
                  className="border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629]/10 px-8 py-3 rounded-xl"
                >
                  Научете повече за услугата
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
      description:
        "Системна SEO оптимизация за устойчив органичен трафик и по-високи позиции в Google.",
      averageResults: {
        trafficIncrease: 150,
        conversionRate: 25,
        leadIncrease: 200,
        revenueMultiplier: 1.8,
      },
      color: "bg-blue-500/10 text-blue-500",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      name: "Trendlab™",
      price: 3450,
      description:
        "Експертно създаване на съдържание за изграждане на авторитет и привличане на квалифицирани клиенти.",
      averageResults: {
        trafficIncrease: 200,
        conversionRate: 35,
        leadIncrease: 300,
        revenueMultiplier: 2.2,
      },
      color: "bg-purple-500/10 text-purple-500",
      icon: <Award className="w-5 h-5" />,
    },
    {
      name: "Clickstarter™",
      price: 1570,
      description:
        "Оптимизация на рекламните кампании за максимална ефективност и възвращаемост на инвестицията.",
      averageResults: {
        trafficIncrease: 80,
        conversionRate: 45,
        leadIncrease: 120,
        revenueMultiplier: 1.6,
      },
      color: "bg-green-500/10 text-green-500",
      icon: <Target className="w-5 h-5" />,
    },
    {
      name: "Clientomat™",
      price: 2890,
      description:
        "Автоматизирана система за привличане и превръщане на посетители в платящи клиенти.",
      averageResults: {
        trafficIncrease: 120,
        conversionRate: 30,
        leadIncrease: 180,
        revenueMultiplier: 1.9,
      },
      color: "bg-orange-500/10 text-orange-500",
      icon: <Users className="w-5 h-5" />,
    },
  ];

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
                Pravda ST <span className="text-[#ECB629]">Калкулатори</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Изчислете{" "}
                <span className="bg-[#ECB629] text-black px-2 py-1 rounded font-semibold">
                  точната печалба
                </span>{" "}
                от нашите системи. Спрете да гадаете - започнете да планирате с
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

              {services.map((service, index) => (
                <TabsContent
                  key={index}
                  value={service.name.toLowerCase().replace(/[™\s]/g, "-")}
                >
                  <ROICalculator
                    serviceName={service.name}
                    monthlyPrice={service.price}
                    description={service.description}
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

      <Footer />
    </>
  );
}
