import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  TrendingUp,
  Target,
  DollarSign,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Award,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
// SEO structured data will be injected directly

interface ReturnOnInvestmentCalculatorProps {
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

function ReturnOnInvestmentCalculator({
  serviceName,
  monthlyPrice,
  description,
  averageResults,
  color,
  icon,
}: ReturnOnInvestmentCalculatorProps) {
  // Service-specific input states
  const getServiceInputs = () => {
    switch (serviceName) {
      case "SEO Struktor™":
        return {
          param1: {
            key: "currentTraffic",
            label: "Текущ месечен трафик",
            placeholder: "напр. 5000",
          },
          param2: {
            key: "currentRanking",
            label: "Средна позиция в Google",
            placeholder: "напр. 45",
          },
          param3: {
            key: "targetKeywords",
            label: "Брой целеви ключови думи",
            placeholder: "напр. 20",
          },
          param4: {
            key: "industry",
            label: "Индустрия",
            placeholder: "Изберете индустрия",
          },
        };
      case "Trendlab™":
        return {
          param1: {
            key: "currentFollowers",
            label: "Текущи последователи",
            placeholder: "напр. 2500",
          },
          param2: {
            key: "postsPerWeek",
            label: "Публикации седмично",
            placeholder: "напр. 3",
          },
          param3: {
            key: "engagementRate",
            label: "Engagement rate (%)",
            placeholder: "напр. 3.5",
          },
          param4: {
            key: "industry",
            label: "Индустрия",
            placeholder: "Изберете индустрия",
          },
        };
      case "Clickstarter™":
        return {
          param1: {
            key: "monthlyAdSpend",
            label: "Месечен ad spend (лв.)",
            placeholder: "напр. 8000",
          },
          param2: {
            key: "currentCPC",
            label: "Текущ CPC (лв.)",
            placeholder: "напр. 3.20",
          },
          param3: {
            key: "monthlyConversions",
            label: "Месечни конверсии",
            placeholder: "напр. 75",
          },
          param4: {
            key: "industry",
            label: "Индустрия",
            placeholder: "Изберете индустрия",
          },
        };
      case "Clientomat™":
        return {
          param1: {
            key: "monthlyClients",
            label: "Месечни клиенти",
            placeholder: "напр. 80",
          },
          param2: {
            key: "averageOrderValue",
            label: "Средна поръчка (лв.)",
            placeholder: "напр. 3500",
          },
          param3: {
            key: "repeatRate",
            label: "Repeat rate (%)",
            placeholder: "напр. 25",
          },
          param4: {
            key: "industry",
            label: "Индустрия",
            placeholder: "Изберете индустрия",
          },
        };
      default:
        return {
          param1: {
            key: "currentMonthlyRevenue",
            label: "Текущ месечен оборот (лв.)",
            placeholder: "напр. 25000",
          },
          param2: {
            key: "currentMonthlyTraffic",
            label: "Месечен трафик",
            placeholder: "напр. 5000",
          },
          param3: {
            key: "averageOrderValue",
            label: "Средна поръчка (лв.)",
            placeholder: "напр. 150",
          },
          param4: {
            key: "industry",
            label: "Индустрия",
            placeholder: "Изберете индустрия",
          },
        };
    }
  };

  const serviceInputs = getServiceInputs();

  const [inputs, setInputs] = useState({
    [serviceInputs.param1.key]: "",
    [serviceInputs.param2.key]: "",
    [serviceInputs.param3.key]: "",
    [serviceInputs.param4.key]: "",
  });

  const [results, setResults] = useState({
    monthlyROI: 0,
    metric1: 0,
    metric2: 0,
    score: 0,
    paybackPeriod: 0,
    timeframe: "3-6 месеца",
  });

  const [recommendations, setRecommendations] = useState<string[]>([]);

  // Service-specific calculations
  const calculateResults = () => {
    const param1 = parseFloat(inputs[serviceInputs.param1.key]) || 0;
    const param2 = parseFloat(inputs[serviceInputs.param2.key]) || 0;
    const param3 = parseFloat(inputs[serviceInputs.param3.key]) || 0;

    if (param1 > 0) {
      switch (serviceName) {
        case "SEO Struktor™": {
          // Traffic/ranking/keywords calculations
          const newTraffic = param1 * 3.4; // 340% increase
          const newLeads = newTraffic * 0.025; // 2.5% conversion
          const revenuePerLead = 2500; // Average revenue per lead
          const additionalRevenue = newLeads * revenuePerLead;
          const monthlyROI =
            ((additionalRevenue - monthlyPrice) / monthlyPrice) * 100;
          const score = Math.min(
            95,
            40 +
              (param1 > 1000 ? 15 : 0) +
              (param2 < 20 ? 20 : 10) +
              (param3 > 10 ? 15 : 10),
          );

          return {
            monthlyROI,
            metric1: newTraffic,
            metric2: newLeads,
            score,
            paybackPeriod: monthlyPrice / Math.max(additionalRevenue / 12, 1),
            timeframe: "3-6 месеца",
          };
        }
        case "Trendlab™": {
          // Followers/content/engagement calculations
          const newFollowers = param1 * 4.5; // 450% increase
          const monthlyViews = (newFollowers * param2 * 250) / 1000; // Views in K
          const authorityScore = Math.min(95, 40 + param2 * 8 + param3 * 5);
          const revenueFromContent = newFollowers * 0.5; // Revenue per follower
          const monthlyROI =
            ((revenueFromContent - monthlyPrice) / monthlyPrice) * 100;

          return {
            monthlyROI,
            metric1: newFollowers,
            metric2: monthlyViews,
            score: authorityScore,
            paybackPeriod: monthlyPrice / Math.max(revenueFromContent / 12, 1),
            timeframe: "2-4 месеца",
          };
        }
        case "Clickstarter™": {
          // Ad spend/CPC/conversions calculations
          const newConversions = param3 * 1.85; // 85% increase
          const newCPC = param2 * 0.75; // 25% CPC reduction
          const costSavings = param1 * 0.2; // 20% cost savings
          const additionalRevenue = (newConversions - param3) * 500; // Revenue per conversion
          const monthlyROI =
            ((additionalRevenue + costSavings - monthlyPrice) / monthlyPrice) *
            100;
          const score = Math.min(
            95,
            50 +
              (param1 > 5000 ? 15 : 10) +
              (param2 < 2 ? 20 : 15) +
              (param3 > 50 ? 10 : 5),
          );

          return {
            monthlyROI,
            metric1: newConversions,
            metric2: costSavings,
            score,
            paybackPeriod:
              monthlyPrice /
              Math.max((additionalRevenue + costSavings) / 12, 1),
            timeframe: "1-3 месеца",
          };
        }
        case "Clientomat™": {
          // Clients/AOV/repeat rate calculations
          const newRepeatRate = param3 * 1.8; // 180% increase in repeat rate
          const newLTV = param2 * 2.2; // 220% LTV increase
          const additionalClients = param1 * 0.4; // 40% more repeat clients
          const additionalRevenue = additionalClients * newLTV * 0.3; // Monthly portion
          const monthlyROI =
            ((additionalRevenue - monthlyPrice) / monthlyPrice) * 100;
          const score = Math.min(
            95,
            45 +
              (param1 > 50 ? 15 : 10) +
              (param2 > 1000 ? 15 : 10) +
              (param3 > 20 ? 15 : 10),
          );

          return {
            monthlyROI,
            metric1: newRepeatRate,
            metric2: newLTV / 1000, // In K
            score,
            paybackPeriod: monthlyPrice / Math.max(additionalRevenue / 12, 1),
            timeframe: "2-5 месеца",
          };
        }
        default:
          return {
            monthlyROI: 0,
            metric1: 0,
            metric2: 0,
            score: 0,
            paybackPeriod: 0,
            timeframe: "3-6 месеца",
          };
      }
    }
    return {
      monthlyROI: 0,
      metric1: 0,
      metric2: 0,
      score: 0,
      paybackPeriod: 0,
      timeframe: "3-6 меесеца",
    };
  };

  // Calculate ROI when inputs change
  useEffect(() => {
    const newResults = calculateResults();
    setResults(newResults);

    // Generate service-specific recommendations
    const param1 = parseFloat(inputs[serviceInputs.param1.key]) || 0;
    const param2 = parseFloat(inputs[serviceInputs.param2.key]) || 0;
    const param3 = parseFloat(inputs[serviceInputs.param3.key]) || 0;

    const recs = [];
    switch (serviceName) {
      case "SEO Struktor™":
        if (param1 < 5000) recs.push("Органен трафик");
        if (param2 > 30) recs.push("Позиции подобрение");
        if (param3 < 15) recs.push("Keyword research");
        if (newResults.score < 70) recs.push("Технически SEO");
        break;
      case "Trendlab™":
        if (param1 < 10000) recs.push("Audience building");
        if (param2 < 5) recs.push("Content frequency");
        if (param3 < 5) recs.push("Engagement стратегия");
        if (newResults.score < 70) recs.push("Authority building");
        break;
      case "Clickstarter™":
        if (param2 > 3) recs.push("CPC оптимизация");
        if (param3 < 100) recs.push("Conversion rate");
        if (param1 > 10000) recs.push("Budget ефективност");
        if (newResults.score < 70) recs.push("Campaign структура");
        break;
      case "Clientomat™":
        if (param3 < 30) recs.push("Retention стратегия");
        if (param2 < 2000) recs.push("LTV оптимизация");
        if (param1 < 100) recs.push("Client acquisition");
        if (newResults.score < 70) recs.push("CRM автоматизация");
        break;
    }
    setRecommendations(recs.slice(0, 4));
  }, [inputs, serviceName, monthlyPrice]);

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
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-4">
          {description}
        </p>

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
              <span className="text-gray-300 text-sm">
                Техническо подобрение
              </span>
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
              <Label htmlFor="param1" className="text-white">
                {serviceInputs.param1.label}
              </Label>
              <Input
                id="param1"
                type="number"
                placeholder={serviceInputs.param1.placeholder}
                value={inputs[serviceInputs.param1.key]}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    [serviceInputs.param1.key]: e.target.value,
                  })
                }
                className="bg-slate-900/50 border-slate-600 text-white"
              />
            </div>

            <div>
              <Label htmlFor="param2" className="text-white">
                {serviceInputs.param2.label}
              </Label>
              <Input
                id="param2"
                type="number"
                placeholder={serviceInputs.param2.placeholder}
                value={inputs[serviceInputs.param2.key]}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    [serviceInputs.param2.key]: e.target.value,
                  })
                }
                className="bg-slate-900/50 border-slate-600 text-white"
              />
            </div>

            <div>
              <Label htmlFor="param3" className="text-white">
                {serviceInputs.param3.label}
              </Label>
              <Input
                id="param3"
                type="number"
                placeholder={serviceInputs.param3.placeholder}
                value={inputs[serviceInputs.param3.key]}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    [serviceInputs.param3.key]: e.target.value,
                  })
                }
                className="bg-slate-900/50 border-slate-600 text-white"
              />
            </div>

            <div>
              <Label htmlFor="industry" className="text-white">
                {serviceInputs.param4.label}
              </Label>
              <Select
                value={inputs[serviceInputs.param4.key]}
                onValueChange={(value) =>
                  setInputs({ ...inputs, [serviceInputs.param4.key]: value })
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
            <h4 className="text-white font-medium mb-2">Какво е възвърната инвестиция?</h4>
            <p className="text-gray-400 text-sm">
              Възвърната инвестиция показва колко лева печелите за всеки
              лев инвестиран в услугата. Например, 300% възвърната инвестиция означава, че за
              всеки лев инвестиран, получавате 3 лева обратно.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Results Section - Modern Design */}
      {(results.score > 0 || results.monthlyROI > 0) && (
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
                    {serviceName === "SEO Struktor™" && "SEO Потенциал Оценка"}
                    {serviceName === "Trendlab™" && "Content Потенциал Оценка"}
                    {serviceName === "Clickstarter™" && "Реклама Потенциал Оценка"}
                    {serviceName === "Clientomat™" && "Клиент Потенциал Оценка"}
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
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - results.score / 100)}`}
                      className="transition-all duration-1000 ease-in-out"
                    />
                  </svg>
                  {/* Center Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#ECB629]">
                        {results.score}
                      </div>
                      <div className="text-sm text-gray-400">от 100</div>
                    </div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-[#ECB629]/10 blur-xl animate-pulse" />
                </div>

                <p className="text-gray-400">
                  {serviceName === "SEO Struktor™" && "SEO Потенциал Скор"}
                  {serviceName === "Trendlab™" && "Content Потенциал Скор"}
                  {serviceName === "Clickstarter™" && "Реклама Потенциал Скор"}
                  {serviceName === "Clientomat™" && "Клиент Потенциал Скор"}
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800/40 rounded-2xl p-6 text-center border border-slate-700/30">
                  <div className="text-2xl font-bold text-[#ECB629] mb-1">
                    {serviceName === "SEO Struktor™" && "+"}
                    {serviceName === "Trendlab™" && "+"}
                    {serviceName === "Clickstarter™" && "+"}
                    {serviceName === "Clientomat™" && ""}
                    {results.metric1 > 0
                      ? Math.round(results.metric1).toLocaleString("bg-BG")
                      : "0"}
                    {serviceName === "Clientomat™" && "%"}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {serviceName === "SEO Struktor™" && "Нов трафик/месец"}
                    {serviceName === "Trendlab™" && "Нови последователи"}
                    {serviceName === "Clickstarter™" &&
                      "Допълнителни конверсии"}
                    {serviceName === "Clientomat™" && "Повторни поръчки (%)"}
                  </div>
                </div>

                <div className="bg-slate-800/40 rounded-2xl p-6 text-center border border-slate-700/30">
                  <div className="text-2xl font-bold text-[#ECB629] mb-1">
                    {serviceName === "SEO Struktor™" && "+"}
                    {serviceName === "Trendlab™" && ""}
                    {serviceName === "Clickstarter™" && "-"}
                    {serviceName === "Clientomat™" && "+"}
                    {results.metric2 > 0
                      ? Math.round(results.metric2).toLocaleString("bg-BG")
                      : "0"}
                    {serviceName === "Trendlab™" && "K"}
                    {serviceName === "Clickstarter™" && " лв."}
                    {serviceName === "Clientomat™" && "K"}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {serviceName === "SEO Struktor™" && "Нови leads/месец"}
                    {serviceName === "Trendlab™" && "Месечни гледания"}
                    {serviceName === "Clickstarter™" && "Спестени разходи"}
                    {serviceName === "Clientomat™" && "LTV увеличение"}
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-[#ECB629]" />
                  <span className="text-[#ECB629] font-semibold">
                    Стартова инвестиция: {monthlyPrice.toLocaleString("bg-BG")}{" "}
                    лв./месец
                  </span>
                </div>
                <p className="text-gray-400 text-sm text-center">
                  Това са приходите, които може да ви донесе тази инвестиция на
                  база трафика, който системата генерира. Спрете да харчите без
                  план - започнете да строите с цифри.
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
                  {results.monthlyROI > 0
                    ? `${Math.round((results.monthlyROI * monthlyPrice) / 100).toLocaleString("bg-BG")} лв.`
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
                {serviceName === "SEO Struktor™" && `Вашият SEO потенциал е ${results.score}/100. Започнете оптимизацията днес и постигнете измерими резултати.`}
                {serviceName === "Trendlab™" && `Вашият content потенциал е ${results.score}/100. Започнете създаването на съдържание днес и постигнете измерими резултати.`}
                {serviceName === "Clickstarter™" && `Вашият реклама потенциал е ${results.score}/100. Започнете оптимизацията на рекламите днес и постигнете измерими резултати.`}
                {serviceName === "Clientomat™" && `Вашият клиент потенциал е ${results.score}/100. Започнете автоматизацията днес и постигнете измерими резултати.`}
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
      name: "Калкулатор за възвърната инвестиция - Pravdast",
      description:
        "Интерактивен калкулатор за изчисляване на възвърната инвестиция от дигитален маркетинг услуги",
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
            <Tabs defaultValue="seo-struktor-" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/30">
                {services.map((service, index) => (
                  <TabsTrigger
                    key={index}
                    value={service.name.toLowerCase().replace(/[™\s]/g, "-")}
                    className="data-[state=active]:bg-[#ECB629] data-[state=active]:text-black"
                  >
                    <div className="flex items-center gap-2">
                      {service.icon}
                      <span className="hidden md:inline">{service.name}</span>
                      <span className="md:hidden">
                        {service.name.split("™")[0]}
                      </span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>

              {services.map((service, index) => (
                <TabsContent
                  key={index}
                  value={service.name.toLowerCase().replace(/[™\s]/g, "-")}
                >
                  <ReturnOnInvestmentCalculator
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
