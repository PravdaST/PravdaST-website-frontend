'use client'

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  TrendingDown,
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Slider } from "@/components/ui/slider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

interface ProfitCalculatorProps {
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

function ProfitCalculator({
  serviceName,
  monthlyPrice,
  description,
  averageResults,
  color,
  icon,
}: ProfitCalculatorProps) {
  // Service-specific input states
  const getServiceInputs = () => {
    switch (serviceName) {
      case "SEO Struktor™":
        return {
          param1: {
            key: "currentTraffic",
            label: "Текущ месечен трафик (посетители)",
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
            label: "Ангажираност (% хора които реагират)",
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
            label: "Месечен рекламен бюджет (лв.)",
            placeholder: "напр. 8000",
          },
          param2: {
            key: "currentCPC",
            label: "Цена за клик (лв. за всеки клик)",
            placeholder: "напр. 3.20",
          },
          param3: {
            key: "monthlyConversions",
            label: "Месечни продажби/заявки",
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
            label: "Връщащи се клиенти (% които пазаруват отново)",
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

  const serviceInputs = useMemo(() => getServiceInputs(), [serviceName]);

  const [inputs, setInputs] = useState({
    [serviceInputs.param1.key]: "",
    [serviceInputs.param2.key]: "",
    [serviceInputs.param3.key]: "",
    [serviceInputs.param4.key]: "",
  });

  const [results, setResults] = useState({
    monthlyProfit: 0,
    metric1: 0,
    metric2: 0,
    score: 0,
    paybackPeriod: 0,
    timeframe: "3-6 месеца",
    scoreBreakdown: {}, // <-- ДОБАВИ ТОВА
  });

  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [personalizedAdvice, setPersonalizedAdvice] = useState(""); // <-- ДОБАВИ ТОВА

  // Service-specific calculations
  const calculateResults = () => {
    if (!serviceInputs || !inputs) {
      return {
        monthlyProfit: 0,
        metric1: 0,
        metric2: 0,
        score: 0,
        paybackPeriod: 0,
        timeframe: "3-6 месеца",
        scoreBreakdown: {},
      };
    }
    
    const param1 = parseFloat(String(inputs[serviceInputs.param1.key] || "0")) || 0;
    const param2 = parseFloat(String(inputs[serviceInputs.param2.key] || "0")) || 0;
    const param3 = parseFloat(String(inputs[serviceInputs.param3.key] || "0")) || 0;

    if (param1 > 0) {
      switch (serviceName) {
        case "SEO Struktor™": {
          // Traffic/ranking/keywords calculations
          const newTraffic = param1 * 3.4; // 340% increase
          const newLeads = newTraffic * 0.025; // 2.5% conversion
          const revenuePerLead = 2500; // Average revenue per lead
          const additionalRevenue = newLeads * revenuePerLead;
          const monthlyProfit =
            ((additionalRevenue - monthlyPrice) / monthlyPrice) * 100;
          const score = Math.min(
            95,
            40 +
              (param1 > 1000 ? 15 : 0) +
              (param2 < 20 ? 20 : 10) +
              (param3 > 10 ? 15 : 10),
          );

          return {
            monthlyProfit,
            metric1: newTraffic,
            metric2: newLeads,
            score,
            paybackPeriod: monthlyPrice / Math.max(additionalRevenue / 12, 1),
            timeframe: "3-6 месеца",
            scoreBreakdown: {},
          };
        }
        case "Trendlab™": {
          // Followers/content/engagement calculations
          const newFollowers = param1 * 4.5; // 450% increase
          const monthlyViews = (newFollowers * param2 * 250) / 1000; // Views in K
          const authorityScore = Math.min(95, 40 + param2 * 8 + param3 * 5);
          const revenueFromContent = newFollowers * 0.5; // Revenue per follower
          const monthlyProfit =
            ((revenueFromContent - monthlyPrice) / monthlyPrice) * 100;

          return {
            monthlyProfit,
            metric1: newFollowers,
            metric2: monthlyViews,
            score: authorityScore,
            paybackPeriod: monthlyPrice / Math.max(revenueFromContent / 12, 1),
            timeframe: "2-4 месеца",
            scoreBreakdown: {},
          };
        }
        case "Clickstarter™": {
          // Ad spend/CPC/conversions calculations
          const newConversions = param3 * 1.85; // 85% increase
          const newCPC = param2 * 0.75; // 25% CPC reduction
          const costSavings = param1 * 0.2; // 20% cost savings
          const additionalRevenue = (newConversions - param3) * 500; // Revenue per conversion
          const monthlyProfit =
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
            monthlyProfit,
            metric1: newConversions,
            metric2: costSavings,
            score,
            paybackPeriod:
              monthlyPrice /
              Math.max((additionalRevenue + costSavings) / 12, 1),
            timeframe: "1-3 месеца",
            scoreBreakdown: {},
          };
        }
        case "Clientomat™": {
          // Clients/AOV/repeat rate calculations
          const newRepeatRate = param3 * 1.8; // 180% increase in repeat rate
          const newClientValue = param2 * 2.2; // 220% client value increase
          const additionalClients = param1 * 0.4; // 40% more repeat clients
          const additionalRevenue = additionalClients * newClientValue * 0.3; // Monthly portion
          const monthlyProfit =
            ((additionalRevenue - monthlyPrice) / monthlyPrice) * 100;
          const score = Math.min(
            95,
            45 +
              (param1 > 50 ? 15 : 10) +
              (param2 > 1000 ? 15 : 10) +
              (param3 > 20 ? 15 : 10),
          );

          return {
            monthlyProfit,
            metric1: newRepeatRate,
            metric2: newClientValue / 1000, // In K
            score,
            paybackPeriod: monthlyPrice / Math.max(additionalRevenue / 12, 1),
            timeframe: "2-5 месеца",
            scoreBreakdown: {},
          };
        }
        default:
          return {
            monthlyProfit: 0,
            metric1: 0,
            metric2: 0,
            score: 0,
            paybackPeriod: 0,
            timeframe: "3-6 месеца",
            scoreBreakdown: {},
          };
      }
    }
    return {
      monthlyProfit: 0,
      metric1: 0,
      metric2: 0,
      score: 0,
      paybackPeriod: 0,
      timeframe: "3-6 месеца",
      scoreBreakdown: {},
    };
  };

  // Calculate profit when inputs change
  useEffect(() => {
    const newResults = calculateResults();
    setResults(newResults);

    const param1 = parseFloat(String(inputs[serviceInputs.param1.key] || "0")) || 0;
    const param2 = parseFloat(String(inputs[serviceInputs.param2.key] || "0")) || 0;
    const param3 = parseFloat(String(inputs[serviceInputs.param3.key] || "0")) || 0;
    
    // Generate service-specific recommendations
    const recs = [];
    let advice = "";

    switch (serviceName) {
      case "SEO Struktor™":
        if (param1 < 5000) recs.push("Органичен трафик");
        if (param2 > 30) recs.push("Подобрение на позиции");
        if (param3 < 15) recs.push("Изследване на ключови думи");
        if (newResults.score < 70) recs.push("Технически оптимизация");
        if(newResults.metric1 > 0) {
            advice = `С наша помощ, трафикът Ви може да скочи от ${Math.round(param1).toLocaleString()} на ${Math.round(newResults.metric1).toLocaleString()} посетители. Това ще генерира около ${Math.round(newResults.metric2).toLocaleString()} нови запитвания месечно, превръщайки сайта Ви в машина за клиенти.`
        }
        break;
      case "Trendlab™":
        if (param1 < 10000) recs.push("Изграждане на аудитория");
        if (param2 < 5) recs.push("Честота на съдържание");
        if (param3 < 5) recs.push("Стратегия за ангажираност");
        if (newResults.score < 70) recs.push("Изграждане на авторитет");
         if(newResults.metric1 > 0) {
            advice = `Представете си да увеличите аудиторията си от ${Math.round(param1).toLocaleString()} на ${Math.round(newResults.metric1).toLocaleString()} последователи. Това ще Ви превърне в авторитет във Вашата ниша, достигайки до хиляди потенциални клиенти всеки месец.`
        }
        break;
      case "Clickstarter™":
        if (param2 > 3) recs.push("Оптимизация на цена за клик");
        if (param3 < 100) recs.push("Подобрение на конверсии");
        if (param1 > 10000) recs.push("Ефективност на бюджета");
        if (newResults.score < 70) recs.push("Структура на кампании");
        if(newResults.metric1 > 0) {
            advice = `Ще оптимизираме кампаниите Ви, за да постигнете ${Math.round(newResults.metric1)} продажби вместо сегашните ${Math.round(param3)}. Освен това, ще спестим ${Math.round(newResults.metric2)} лв. от бюджета Ви, които може да реинвестирате за още по-силни резултати.`
        }
        break;
      case "Clientomat™":
        if (param3 < 30) recs.push("Стратегия за задържане");
        if (param2 < 2000) recs.push("Оптимизация на стойност на клиент");
        if (param1 < 100) recs.push("Привличане на клиенти");
        if (newResults.score < 70) recs.push("Автоматизация на управление");
        if(newResults.metric1 > 0) {
            advice = `Чрез нашите системи за лоялност, ще увеличим повторните Ви покупки до ${Math.round(newResults.metric1)}% и ще вдигнем стойността на всеки клиент до ${Math.round(newResults.metric2 * 1000).toLocaleString()} лв. Това е ключът към стабилен и предвидим растеж.`
        }
        break;
    }
    setRecommendations(recs.slice(0, 4));
    setPersonalizedAdvice(advice);
  }, [inputs, serviceName, monthlyPrice, serviceInputs]);

  return (
    <div className="space-y-8">
      {/* Service Description */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 glassmorphism rounded-full px-4 py-2 mb-4"
        >
          {icon}
          <span className="text-sm text-gray-300">{serviceName}</span>
        </motion.div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-4">
          {description}
        </p>

        {/* Service-Specific Recommendations */}
        {recommendations.length > 0 && (
          <div className="glassmorphism rounded-xl p-4 border border-[#ECB629]/20 max-w-2xl mx-auto">
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2 justify-center">
              <CheckCircle className="w-5 h-5 text-[#ECB629]" />
              Препоръки за {serviceName.replace("™", "")}:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-2">
              {recommendations.map((rec, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#ECB629] rounded-full flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{rec}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Calculator Section */}
      <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-lg overflow-hidden">
        <CardHeader className="pb-4">
          <CardTitle className="flex flex-col sm:flex-row items-center gap-2 text-white text-lg sm:text-xl">
            <div className="flex items-center gap-2">
              {icon}
              <span className="text-center sm:text-left">{serviceName}</span>
            </div>
            <span className="text-sm sm:text-base text-gray-400">
              Калкулатор за печалба
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Input Form */}
            <div className="p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-700/30 relative overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ECB629]/5 via-transparent to-blue-500/5"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                  }}
                />
              </div>

              <motion.h3
                className="text-white font-semibold mb-6 flex items-center gap-3 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="p-2 bg-[#ECB629]/20 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Calculator className="w-5 h-5 text-[#ECB629]" />
                </motion.div>
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Въведете данни за анализ
                </span>
              </motion.h3>

              <div className="space-y-5 relative z-10">
                {[1, 2, 3].map((index) => {
                  const paramKey = `param${index}` as keyof typeof serviceInputs;
                  const inputConfig = serviceInputs[paramKey];

                  // Use Slider for the second parameter
                  if (index === 2) {
                    const currentValue = parseFloat(inputs[inputConfig.key] || "0");
                    let max = 100;
                    if (serviceName === "SEO Struktor™") max = 100;
                    if (serviceName === "Trendlab™") max = 10;
                    if (serviceName === "Clickstarter™") max = 10;
                    if (serviceName === "Clientomat™") max = 5000;

                    return (
                       <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group"
                      >
                         <Label
                          htmlFor={`param${index}`}
                          className="text-white text-sm block mb-3 flex items-center justify-between font-medium"
                        >
                          <span className="flex items-center gap-2">
                             <motion.div
                              className="w-2 h-2 bg-[#ECB629] rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                            />
                            {inputConfig.label}
                          </span>
                           <span className="font-bold text-[#ECB629]">
                              {currentValue}
                           </span>
                        </Label>
                        <Slider
                            id={`param${index}`}
                            max={max}
                            step={serviceName === "Clickstarter™" ? 0.1 : 1}
                            value={[currentValue]}
                            onValueChange={(value) => setInputs({ ...inputs, [inputConfig.key]: String(value[0]) })}
                            className="mt-5"
                        />
                      </motion.div>
                    )
                  }
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <Label
                        htmlFor={`param${index}`}
                        className="text-white text-sm block mb-3 flex items-center gap-2 font-medium"
                      >
                        <motion.div
                          className="w-2 h-2 bg-[#ECB629] rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        />
                        {inputConfig.label}
                      </Label>
                      <div className="relative">
                        <Input
                          id={`param${index}`}
                          type="number"
                          placeholder={inputConfig.placeholder}
                          value={inputs[inputConfig.key]}
                          onChange={(e) =>
                            setInputs({
                              ...inputs,
                              [inputConfig.key]: e.target.value,
                            })
                          }
                          className="bg-slate-900/70 backdrop-blur-sm border-slate-600/50 text-white h-12 text-base transition-all duration-300 focus:border-[#ECB629] focus:bg-slate-800/70 focus:shadow-lg focus:shadow-[#ECB629]/10 group-hover:border-slate-500"
                        />
                        <motion.div
                          className="absolute inset-0 rounded-md bg-gradient-to-r from-[#ECB629]/0 via-[#ECB629]/5 to-[#ECB629]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 0.5,
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="group"
                >
                  <Label
                    htmlFor="industry"
                    className="text-white text-sm block mb-3 flex items-center gap-2 font-medium"
                  >
                    <motion.div
                      className="w-2 h-2 bg-[#ECB629] rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                    />
                    {serviceInputs.param4.label}
                  </Label>
                  <Select
                    value={inputs[serviceInputs.param4.key]}
                    onValueChange={(value) =>
                      setInputs({
                        ...inputs,
                        [serviceInputs.param4.key]: value,
                      })
                    }
                  >
                    <SelectTrigger className="bg-slate-900/70 backdrop-blur-sm border-slate-600/50 text-white h-12 text-base transition-all duration-300 focus:border-[#ECB629] focus:bg-slate-800/70 group-hover:border-slate-500">
                      <SelectValue placeholder={serviceInputs.param4.placeholder} />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600 text-white">
                      {[
                        "E-commerce",
                        "SaaS",
                        "Здравеопазване",
                        "Образование",
                        "Недвижими имоти",
                        "Ресторантьорство",
                        "Консултиране",
                        "Производство",
                        "Строителство",
                        "Технологии",
                        "Маркетинг",
                        "Финанси",
                        "Друго",
                      ].map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
              </div>
            </div>

            {/* Right Side - Results */}
            <div className="p-4 sm:p-6 bg-slate-900/20 relative overflow-hidden">
              <div className="space-y-6">
                {/* Main Score Circle */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2 justify-center">
                    <BarChart3 className="w-5 h-5 text-[#ECB629]" />
                    {serviceName} Потенциал
                  </h3>
                   <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="relative w-32 h-32 mx-auto mb-4 cursor-pointer">
                          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                            <circle
                              cx="60"
                              cy="60"
                              r="54"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="12"
                              className="text-slate-700/50"
                            />
                            <motion.circle
                              cx="60"
                              cy="60"
                              r="54"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="12"
                              strokeLinecap="round"
                              className="text-[#ECB629]"
                              initial={{ strokeDasharray: "0 339.292" }}
                              animate={{
                                strokeDasharray: `${(results.score / 100) * 339.292} 339.292`,
                              }}
                              transition={{ duration: 2, ease: "easeInOut" }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <motion.div
                                className="text-3xl font-bold text-white"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                              >
                                {Math.round(results.score)}
                              </motion.div>
                              <div className="text-xs text-gray-400">от 100</div>
                            </div>
                          </div>
                        </div>
                      </TooltipTrigger>
                       <TooltipContent className="bg-slate-800 border-slate-600 text-white">
                        <p>Резултатът Ви се базира на:</p>
                        <ul className="list-disc pl-4 mt-2">
                           <li>Текущи данни: <span className="font-bold text-[#ECB629]">40т.</span></li>
                           <li>Потенциал за растеж: <span className="font-bold text-[#ECB629]">35т.</span></li>
                           <li>Индустрия фактор: <span className="font-bold text-[#ECB629]">20т.</span></li>
                        </ul>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </motion.div>
                
                {/* Personalized Advice */}
                {personalizedAdvice && (
                   <motion.div
                    className="bg-slate-800/50 rounded-lg p-4 border border-[#ECB629]/30 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h4 className="font-semibold text-white mb-2">Какво означава това за Вас?</h4>
                    <p className="text-gray-300 text-sm">{personalizedAdvice}</p>
                   </motion.div>
                )}

                {/* Metrics */}
                 {results.metric1 > 0 && (
                  <div className="grid grid-cols-1 gap-4">
                      <motion.div
                        className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                         <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">
                            {serviceName === "SEO Struktor™" && "Месечен трафик"}
                            {serviceName === "Trendlab™" && "Последователи"}
                            {serviceName === "Clickstarter™" && "Конверсии"}
                            {serviceName === "Clientomat™" && "Repeat Rate"}
                          </span>
                           <div className="text-right">
                              <div className="text-sm text-gray-500">Преди: <span className="font-semibold">{Math.round(parseFloat(inputs[serviceInputs.param1.key] || "0")).toLocaleString()}{serviceName === "Clientomat™" ? "%":""}</span></div>
                              <div className="text-white font-bold text-lg">Сега: {serviceName === "Clientomat™" ? `${Math.round(results.metric1)}%` : Math.round(results.metric1).toLocaleString()}</div>
                              <div className="text-xs text-[#ECB629]">+{Math.round(((results.metric1 - parseFloat(inputs[serviceInputs.param1.key] || "0")) / parseFloat(inputs[serviceInputs.param1.key] || "1")) * 100)}%</div>
                           </div>
                        </div>
                      </motion.div>

                  {results.monthlyProfit > 0 && (
                    <motion.div
                      className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">ROI</span>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">
                            {Math.round(results.monthlyProfit)}%
                          </div>
                          <div className="text-xs text-[#ECB629]">месечно</div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <motion.div
                    className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Срок за резултати</span>
                      <div className="text-white font-semibold">{results.timeframe}</div>
                    </div>
                  </motion.div>
                </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function CalculatorsClient() {
  const [activeTab, setActiveTab] = useState("seo-struktor");

  const services = [
    {
      id: "seo-struktor",
      name: "SEO Struktor™",
      monthlyPrice: 1980,
      description: "SEO оптимизация за органичен растеж и подобрени позиции в Google",
      averageResults: {
        trafficIncrease: 340,
        conversionRate: 2.5,
        leadIncrease: 185,
        revenueMultiplier: 2.8,
      },
      color: "text-blue-400",
      icon: <Target className="w-5 h-5" />,
    },
    {
      id: "trendlab",
      name: "Trendlab™",
      monthlyPrice: 3450,
      description: "Изграждане на съдържание и авторитет за по-голямо влияние",
      averageResults: {
        trafficIncrease: 450,
        conversionRate: 4.2,
        leadIncrease: 220,
        revenueMultiplier: 3.1,
      },
      color: "text-purple-400",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      id: "clickstarter",
      name: "Clickstarter™",
      monthlyPrice: 1570,
      description: "Оптимизация на платени реклами за максимален ROI",
      averageResults: {
        trafficIncrease: 85,
        conversionRate: 8.5,
        leadIncrease: 165,
        revenueMultiplier: 2.3,
      },
      color: "text-orange-400",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: "clientomat",
      name: "Clientomat™",
      monthlyPrice: 2890,
      description: "Автоматизация на клиентски процеси за по-висока лоялност",
      averageResults: {
        trafficIncrease: 180,
        conversionRate: 12.5,
        leadIncrease: 280,
        revenueMultiplier: 3.8,
      },
      color: "text-green-400",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Изчислете <span className="bg-[#ECB629] text-black px-2 py-1 rounded">точната печалба</span><br />
                система
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Спрете да гадаете - започнете да планирате с реални числа.
              </motion.p>

              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-red-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm text-red-400 font-bold">Остават 3 места за 2025</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Calculators Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-slate-800/50 rounded-xl p-1 mb-8">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="data-[state=active]:bg-[#ECB629] data-[state=active]:text-black text-white rounded-lg py-3 px-4 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      {service.icon}
                      <span className="hidden sm:inline">{service.name}</span>
                      <span className="sm:hidden">{service.name.split("™")[0]}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>

              {services.map((service) => (
                <TabsContent key={service.id} value={service.id} className="space-y-8">
                  <ProfitCalculator
                    serviceName={service.name}
                    monthlyPrice={service.monthlyPrice}
                    description={service.description}
                    averageResults={service.averageResults}
                    color={service.color}
                    icon={service.icon}
                  />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-red-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm text-red-400 font-bold">Остават 3 места за 2025</span>
                </div>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Готови ли сте да превърнете<br />
                тези числа в резултати?
              </motion.h2>

              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Кандидатствайте за диагностика и получете персонализиран план за растеж.
              </motion.p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Безплатна консултация</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Без ангажименти</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Отговор в 48 часа</span>
                </div>
              </div>

              <motion.a
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calculator className="w-5 h-5" />
                <span>Кандидатствайте за диагностика</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}