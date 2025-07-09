import { useState, useEffect } from "react";
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
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
// SEO structured data will be injected directly

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

  const serviceInputs = getServiceInputs();

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
    };
  };

  // Calculate profit when inputs change
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
        if (param1 < 5000) recs.push("Органичен трафик");
        if (param2 > 30) recs.push("Подобрение на позиции");
        if (param3 < 15) recs.push("Изследване на ключови думи");
        if (newResults.score < 70) recs.push("Технически оптимизация");
        break;
      case "Trendlab™":
        if (param1 < 10000) recs.push("Изграждане на аудитория");
        if (param2 < 5) recs.push("Честота на съдържание");
        if (param3 < 5) recs.push("Стратегия за ангажираност");
        if (newResults.score < 70) recs.push("Изграждане на авторитет");
        break;
      case "Clickstarter™":
        if (param2 > 3) recs.push("Оптимизация на цена за клик");
        if (param3 < 100) recs.push("Подобрение на конверсии");
        if (param1 > 10000) recs.push("Ефективност на бюджета");
        if (newResults.score < 70) recs.push("Структура на кампании");
        break;
      case "Clientomat™":
        if (param3 < 30) recs.push("Стратегия за задържане");
        if (param2 < 2000) recs.push("Оптимизация на стойност на клиент");
        if (param1 < 100) recs.push("Привличане на клиенти");
        if (newResults.score < 70) recs.push("Автоматизация на управление");
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

        {/* Service-Specific Recommendations */}
        {recommendations.length > 0 && (
          <div className="bg-slate-800/40 rounded-xl p-4 border border-[#ECB629]/20 max-w-2xl mx-auto">
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

      {/* Calculator Section - Split Layout */}
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group"
                >
                  <Label
                    htmlFor="param1"
                    className="text-white text-sm block mb-3 flex items-center gap-2 font-medium"
                  >
                    <motion.div
                      className="w-2 h-2 bg-[#ECB629] rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {serviceInputs.param1.label}
                  </Label>
                  <div className="relative">
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
                      }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group"
                >
                  <Label
                    htmlFor="param2"
                    className="text-white text-sm block mb-3 flex items-center gap-2 font-medium"
                  >
                    <motion.div
                      className="w-2 h-2 bg-[#ECB629] rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    {serviceInputs.param2.label}
                  </Label>
                  <div className="relative">
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
                        delay: 0.5,
                      }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="group"
                >
                  <Label
                    htmlFor="param3"
                    className="text-white text-sm block mb-3 flex items-center gap-2 font-medium"
                  >
                    <motion.div
                      className="w-2 h-2 bg-[#ECB629] rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                    {serviceInputs.param3.label}
                  </Label>
                  <div className="relative">
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
                        delay: 1,
                      }}
                    />
                  </div>
                </motion.div>

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
                    <SelectTrigger className="bg-slate-900/70 backdrop-blur-sm border-slate-600/50 text-white h-12 transition-all duration-300 hover:border-slate-500 focus:border-[#ECB629] focus:bg-slate-800/70">
                      <SelectValue placeholder="Изберете индустрия" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ecommerce">Онлайн Магазин</SelectItem>
                      <SelectItem value="services">Услуги</SelectItem>
                      <SelectItem value="manufacturing">
                        Производство
                      </SelectItem>
                      <SelectItem value="construction">Стройтелство</SelectItem>
                      <SelectItem value="hospitality">Хотелиерство</SelectItem>
                      <SelectItem value="Restaurant">
                        Ресторантьорство
                      </SelectItem>
                      <SelectItem value="retail">Търговия</SelectItem>
                      <SelectItem value="consulting">
                        Консултантски услуги
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
              </div>

              {/* Service-Specific Profit Definition */}
              <motion.div
                className="bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-slate-900/70 backdrop-blur-sm rounded-xl p-4 border border-[#ECB629]/20 mt-6 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="p-2 bg-[#ECB629]/20 rounded-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Sparkles className="w-4 h-4 text-[#ECB629]" />
                  </motion.div>
                  <h4 className="text-white font-semibold text-sm bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {serviceName === "SEO Struktor™" &&
                      "Как се изчислява печалбата от търсене?"}
                    {serviceName === "Trendlab™" &&
                      "Как се изчислява печалбата от съдържание?"}
                    {serviceName === "Clickstarter™" &&
                      "Как се изчислява печалбата от реклами?"}
                    {serviceName === "Clientomat™" &&
                      "Как се изчислява печалбата от клиенти?"}
                  </h4>
                </div>

                <motion.p
                  className="text-gray-300 text-xs leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  {serviceName === "SEO Struktor™" &&
                    "Базирано на органичен трафик увеличение от 340%, продажби от 2.5% и средна стойност на клиент от 2500 лв. Показва реалната печалба от инвестицията в търсене."}
                  {serviceName === "Trendlab™" &&
                    "Базирано на 450% увеличение на последователи, месечни гледания и приходи от авторитет. Показва стойността на качественото съдържание."}
                  {serviceName === "Clickstarter™" &&
                    "Базирано на 85% повече продажби, 25% по-нисък разход за клик и 20% спестени разходи. Показва оптимизацията на рекламните кампании."}
                  {serviceName === "Clientomat™" &&
                    "Базирано на 180% по-висок процент връщащи се клиенти, 220% увеличение стойност на клиент и автоматизирани процеси. Показва стойността на всеки клиент."}
                </motion.p>

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-1 -right-1 w-8 h-8 bg-[#ECB629]/10 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-2 left-2 w-4 h-4 bg-[#ECB629]/20 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>
            </div>

            {/* Right Side - Results */}
            <div className="p-4 sm:p-6 relative overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 20% 30%, rgba(236, 182, 41, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
                    `,
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                  }}
                />
              </div>

              {results.score > 0 || results.monthlyProfit > 0 ? (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6 relative z-10"
                >
                  {/* Before/After Comparison */}
                  <motion.div
                    className="bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-xl p-5 border border-slate-700/30 mb-6 relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 via-[#ECB629] to-green-500"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    <h4 className="text-white font-semibold text-sm mb-4 text-center flex items-center justify-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <RotateCcw className="w-4 h-4 text-[#ECB629]" />
                      </motion.div>
                      Преди vs След {serviceName.replace("™", "")}
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        className="text-center p-3 bg-red-500/10 rounded-lg border border-red-500/20 relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <motion.div
                          className="text-red-400 font-bold text-lg mb-1"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          {serviceName === "SEO Struktor™" &&
                            Math.round(
                              parseFloat(inputs.currentTraffic) || 5000,
                            ).toLocaleString("bg-BG")}
                          {serviceName === "Trendlab™" &&
                            Math.round(
                              parseFloat(inputs.currentFollowers) || 2500,
                            ).toLocaleString("bg-BG")}
                          {serviceName === "Clickstarter™" &&
                            Math.round(
                              parseFloat(inputs.monthlyConversions) || 75,
                            ).toLocaleString("bg-BG")}
                          {serviceName === "Clientomat™" &&
                            `${parseFloat(inputs.repeatRate) || 25}%`}
                        </motion.div>
                        <div className="text-gray-400 text-xs font-medium">
                          ПРЕДИ
                        </div>
                        <TrendingDown className="w-3 h-3 text-red-400 mx-auto mt-1" />
                      </motion.div>

                      <motion.div
                        className="text-center p-3 bg-[#ECB629]/10 rounded-lg border border-[#ECB629]/20 relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <motion.div
                          className="text-[#ECB629] font-bold text-lg mb-1"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          {serviceName === "SEO Struktor™" && "+"}
                          {serviceName === "Trendlab™" && "+"}
                          {serviceName === "Clickstarter™" && "+"}
                          {serviceName === "Clientomat™" && ""}
                          {results.metric1 > 0
                            ? Math.round(results.metric1).toLocaleString(
                                "bg-BG",
                              )
                            : (serviceName === "SEO Struktor™" && "17 000") ||
                              (serviceName === "Trendlab™" && "11 250") ||
                              (serviceName === "Clickstarter™" && "139") ||
                              (serviceName === "Clientomat™" && "45")}
                          {serviceName === "Clientomat™" && "%"}
                        </motion.div>
                        <div className="text-gray-400 text-xs font-medium">
                          СЛЕД
                        </div>
                        <TrendingUp className="w-3 h-3 text-[#ECB629] mx-auto mt-1" />
                      </motion.div>
                    </div>

                    {/* Animated arrow between before/after */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                      animate={{
                        x: [0, 5, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="w-6 h-6 text-[#ECB629] bg-slate-800 rounded-full p-1" />
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    className="text-white font-semibold mb-6 flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="p-2 bg-[#ECB629]/20 rounded-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <BarChart3 className="w-5 h-5 text-[#ECB629]" />
                    </motion.div>
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Анализ на резултатите
                    </span>
                  </motion.h3>

                  {/* Main Score Circle */}
                  <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="relative w-40 h-40 mx-auto mb-4 group">
                      {/* Glowing background effect */}
                      <motion.div
                        className="absolute inset-0 bg-[#ECB629]/10 rounded-full blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Background Circle */}
                      <svg
                        className="w-full h-full transform -rotate-90"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          stroke="rgb(51 65 85 / 0.5)"
                          strokeWidth="4"
                          fill="none"
                        />
                        {/* Progress Circle */}
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="35"
                          stroke="#ECB629"
                          strokeWidth="4"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 35}`}
                          initial={{ strokeDashoffset: `${2 * Math.PI * 35}` }}
                          animate={{
                            strokeDashoffset: `${2 * Math.PI * 35 * (1 - results.score / 100)}`,
                          }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                            delay: 0.5,
                          }}
                          className="drop-shadow-lg"
                          style={{
                            filter:
                              "drop-shadow(0 0 8px rgba(236, 182, 41, 0.3))",
                          }}
                        />

                        {/* Animated dots on the circle */}
                        <motion.circle
                          cx="85"
                          cy="50"
                          r="2"
                          fill="#ECB629"
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0.8, 1.2, 0.8],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </svg>

                      {/* Center Content */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="text-center"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 1 }}
                        >
                          <motion.div
                            className="text-3xl font-bold text-[#ECB629] mb-1"
                            animate={{
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 2,
                            }}
                          >
                            {results.score}
                          </motion.div>
                          <div className="text-xs text-gray-400 font-medium">
                            от 100
                          </div>
                        </motion.div>
                      </div>

                      {/* Floating sparkles */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-3 h-3"
                        animate={{
                          rotate: 360,
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Sparkles className="w-3 h-3 text-[#ECB629]" />
                      </motion.div>
                    </div>

                    <motion.p
                      className="text-gray-300 text-sm bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      {serviceName === "SEO Struktor™" &&
                        "Потенциален резултат за търсене"}
                      {serviceName === "Trendlab™" &&
                        "Потенциален резултат за съдържание"}
                      {serviceName === "Clickstarter™" &&
                        "Потенциален резултат за реклами"}
                      {serviceName === "Clientomat™" &&
                        "Потенциален резултат за клиенти"}
                    </motion.p>
                  </motion.div>

                  {/* Key Metrics */}
                  <div className="space-y-4">
                    <motion.div
                      className="bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-slate-900/70 backdrop-blur-sm rounded-xl p-4 border border-slate-700/30 hover:border-[#ECB629]/40 transition-all duration-300 group relative overflow-hidden"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div className="absolute top-0 left-0 w-full h-0.5 bg-[#ECB629] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="w-4 h-4 text-[#ECB629]" />
                        <motion.div
                          className="text-lg font-bold text-[#ECB629]"
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                          }}
                        >
                          {serviceName === "SEO Struktor™" && "+"}
                          {serviceName === "Trendlab™" && "+"}
                          {serviceName === "Clickstarter™" && "+"}
                          {serviceName === "Clientomat™" && ""}
                          {results.metric1 > 0
                            ? Math.round(results.metric1).toLocaleString(
                                "bg-BG",
                              )
                            : (serviceName === "SEO Struktor™" && "17 000") ||
                              (serviceName === "Trendlab™" && "11 250") ||
                              (serviceName === "Clickstarter™" && "139") ||
                              (serviceName === "Clientomat™" && "45")}
                          {serviceName === "Clientomat™" && "%"}
                        </motion.div>
                      </div>
                      <div className="text-gray-300 text-xs font-medium">
                        {serviceName === "SEO Struktor™" && "Нов трафик/месец"}
                        {serviceName === "Trendlab™" && "Нови последователи"}
                        {serviceName === "Clickstarter™" &&
                          "Допълнителни продажби"}
                        {serviceName === "Clientomat™" &&
                          "Повторни поръчки (%)"}
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-slate-900/70 backdrop-blur-sm rounded-xl p-4 border border-slate-700/30 hover:border-[#ECB629]/40 transition-all duration-300 group relative overflow-hidden"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div className="absolute top-0 left-0 w-full h-0.5 bg-[#ECB629] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      <div className="flex items-center gap-3 mb-2">
                        <BarChart3 className="w-4 h-4 text-[#ECB629]" />
                        <motion.div
                          className="text-lg font-bold text-[#ECB629]"
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.5,
                          }}
                        >
                          {serviceName === "SEO Struktor™" && "+"}
                          {serviceName === "Trendlab™" && ""}
                          {serviceName === "Clickstarter™" && "-"}
                          {serviceName === "Clientomat™" && "+"}
                          {results.metric2 > 0
                            ? Math.round(results.metric2).toLocaleString(
                                "bg-BG",
                              )
                            : "0"}
                          {serviceName === "Trendlab™" && "К"}
                          {serviceName === "Clickstarter™" && " лв."}
                          {serviceName === "Clientomat™" && "К"}
                        </motion.div>
                      </div>
                      <div className="text-gray-300 text-xs font-medium">
                        {serviceName === "SEO Struktor™" &&
                          "Нови заявки/месец"}
                        {serviceName === "Trendlab™" && "Месечни гледания"}
                        {serviceName === "Clickstarter™" && "Спестени разходи"}
                        {serviceName === "Clientomat™" &&
                          "Стойност на клиент увеличение"}
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-green-900/20 via-green-800/10 to-green-900/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 group relative overflow-hidden"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div className="absolute top-0 left-0 w-full h-0.5 bg-green-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      <div className="flex items-center gap-3 mb-2">
                        <DollarSign className="w-4 h-4 text-green-500" />
                        <motion.div
                          className="text-lg font-bold text-green-500"
                          animate={{
                            scale: [1, 1.08, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2,
                          }}
                        >
                          {results.monthlyProfit > 0
                            ? `${results.monthlyProfit.toFixed(0)}%`
                            : "245%"}
                        </motion.div>
                      </div>
                      <div className="text-gray-300 text-xs font-medium">
                        Печалба месечно (процент от вложеното)
                      </div>
                    </motion.div>
                  </div>

                  {/* Investment Info */}
                  <motion.div
                    className="bg-gradient-to-br from-[#ECB629]/10 via-[#ECB629]/5 to-[#ECB629]/10 backdrop-blur-sm rounded-xl p-4 border border-[#ECB629]/30 text-center relative overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#ECB629]/0 via-[#ECB629]/10 to-[#ECB629]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-[#ECB629]" />
                      <motion.div
                        className="text-[#ECB629] font-bold text-sm"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        Стартова инвестиция:{" "}
                        {monthlyPrice.toLocaleString("bg-BG")} лв./месец
                      </motion.div>
                    </div>

                    <motion.p
                      className="text-gray-300 text-xs leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      Спрете да харчите без план - започнете да строите с цифри.
                    </motion.p>

                    {/* Floating elements */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-6 h-6 bg-[#ECB629]/20 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </motion.div>
              ) : (
                <div className="flex items-center justify-center h-full text-center">
                  <div>
                    <Calculator className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                    <p className="text-gray-400 text-sm">
                      Въведете данните си за да видите вашия потенциал за
                      печалба
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Extended Results Section */}
      {(results.score > 0 || results.monthlyProfit > 0) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Transformation Preview Section */}
          <Card className="bg-slate-900/80 border-slate-700/50 backdrop-blur-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 via-transparent to-[#ECB629]/5" />
            <CardContent className="p-6 md:p-8 relative z-10">
              {/* Header */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-[#ECB629]/30 rounded-full px-6 py-3 mb-6">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Zap className="w-6 h-6 text-[#ECB629]" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Вашата трансформация в действие
                  </h3>
                </div>
                <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                  Ето как ще изглежда бизнесът ви след{" "}
                  <span className="text-[#ECB629] font-semibold">
                    {results.timeframe}
                  </span>
                  :
                </p>
              </motion.div>

              {/* Before/After Comparison - Improved Layout */}
              <motion.div
                className="bg-gradient-to-r from-slate-800/40 via-slate-800/30 to-slate-800/40 rounded-3xl p-6 md:p-8 mb-8 border border-slate-700/50 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="text-center mb-8">
                  <h4 className="text-white font-bold text-lg md:text-xl mb-2">
                    Преди vs След <br>система</br>
                  </h4>
                  <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#ECB629] to-transparent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
                  {/* Before - Left */}
                  <motion.div
                    className="order-1"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-2xl p-6 border border-red-500/20 backdrop-blur-sm relative overflow-hidden">
                      <div className="absolute top-2 right-2">
                        <TrendingDown className="w-5 h-5 text-red-400/60" />
                      </div>
                      <div className="text-center mb-4">
                        <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm rounded-full px-3 py-1 mb-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                          <span className="text-red-400 text-sm font-semibold">
                            ПРЕДИ
                          </span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-red-500/10">
                          <span className="text-gray-300 text-sm font-medium">
                            {serviceName === "SEO Struktor™" &&
                              "Месечен трафик"}
                            {serviceName === "Trendlab™" && "Последователи"}
                            {serviceName === "Clickstarter™" && "Продажби"}
                            {serviceName === "Clientomat™" &&
                              "Повторни клиенти"}
                          </span>
                          <span className="text-red-400 font-bold text-lg">
                            {serviceName === "SEO Struktor™" &&
                              Math.round(
                                parseFloat(inputs.currentTraffic) || 5000,
                              ).toLocaleString("bg-BG")}
                            {serviceName === "Trendlab™" &&
                              Math.round(
                                parseFloat(inputs.currentFollowers) || 2500,
                              ).toLocaleString("bg-BG")}
                            {serviceName === "Clickstarter™" &&
                              Math.round(
                                parseFloat(inputs.monthlyConversions) || 75,
                              ).toLocaleString("bg-BG")}
                            {serviceName === "Clientomat™" &&
                              `${parseFloat(inputs.repeatRate) || 25}%`}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-red-500/10">
                          <span className="text-gray-300 text-sm font-medium">
                            Контрол
                          </span>
                          <span className="text-red-400 font-bold">Липсва</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-300 text-sm font-medium">
                            Прогнозируемост
                          </span>
                          <span className="text-red-400 font-bold">Ниска</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow - Center */}
                  <motion.div
                    className="order-2 lg:order-2 flex justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="hidden lg:flex items-center justify-center">
                      <div className="relative">
                        <motion.div
                          className="w-16 h-16 bg-gradient-to-r from-[#ECB629] to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-[#ECB629]/25"
                          animate={{
                            scale: [1, 1.1, 1],
                            boxShadow: [
                              "0 10px 30px rgba(236, 182, 40, 0.25)",
                              "0 20px 60px rgba(236, 182, 40, 0.4)",
                              "0 10px 30px rgba(236, 182, 40, 0.25)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <ArrowRight className="w-8 h-8 text-black font-bold" />
                        </motion.div>
                      </div>
                    </div>
                    <div className="lg:hidden flex justify-center py-4">
                      <motion.div
                        className="w-1 h-12 bg-gradient-to-b from-[#ECB629] to-yellow-500 rounded-full"
                        animate={{
                          scaleY: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* After - Right */}
                  <motion.div
                    className="order-3"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="bg-gradient-to-br from-[#ECB629]/10 to-yellow-500/5 rounded-2xl p-6 border border-[#ECB629]/30 backdrop-blur-sm relative overflow-hidden">
                      <div className="absolute top-2 right-2">
                        <TrendingUp className="w-5 h-5 text-[#ECB629]/60" />
                      </div>
                      <div className="text-center mb-4">
                        <div className="inline-flex items-center gap-2 bg-[#ECB629]/20 backdrop-blur-sm rounded-full px-3 py-1 mb-3">
                          <motion.div
                            className="w-2 h-2 bg-[#ECB629] rounded-full"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <span className="text-[#ECB629] text-sm font-semibold">
                            СЛЕД
                          </span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-[#ECB629]/10">
                          <span className="text-gray-300 text-sm font-medium">
                            {serviceName === "SEO Struktor™" &&
                              "Месечен трафик"}
                            {serviceName === "Trendlab™" && "Последователи"}
                            {serviceName === "Clickstarter™" && "Продажби"}
                            {serviceName === "Clientomat™" &&
                              "Повторни клиенти"}
                          </span>
                          <span className="text-[#ECB629] font-bold text-lg">
                            {results.metric1 > 0
                              ? `+${Math.round(results.metric1).toLocaleString("bg-BG")}${serviceName === "Clientomat™" ? "%" : ""}`
                              : "+340%"}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-[#ECB629]/10">
                          <span className="text-gray-300 text-sm font-medium">
                            Контрол
                          </span>
                          <span className="text-[#ECB629] font-bold">
                            Пълен
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-300 text-sm font-medium">
                            Прогнозируемост
                          </span>
                          <span className="text-[#ECB629] font-bold">100%</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Timeline Section - Enhanced */}
              <motion.div
                className="bg-gradient-to-r from-slate-800/40 via-slate-800/30 to-slate-800/40 rounded-3xl p-6 md:p-8 mb-8 border border-slate-700/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-[#ECB629]/30 rounded-full px-6 py-3 mb-4">
                    <Clock className="w-5 h-5 text-[#ECB629]" />
                    <h4 className="text-white font-bold text-lg md:text-xl">
                      График на резултатите
                    </h4>
                  </div>
                  <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#ECB629] to-transparent mx-auto rounded-full"></div>
                </div>

                <div className="relative max-w-4xl mx-auto">
                  {/* Timeline Line */}
                  <div className="absolute left-6 md:left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#ECB629]/20 via-[#ECB629]/60 to-[#ECB629]/20 rounded-full"></div>

                  <div className="space-y-8 md:space-y-12">
                    {/* Month 1 */}
                    <motion.div
                      className="flex items-start gap-6 md:gap-8"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <div className="relative">
                        <motion.div
                          className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#ECB629] to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-lg md:text-xl shadow-lg shadow-[#ECB629]/25 z-10 relative"
                          animate={{
                            boxShadow: [
                              "0 8px 25px rgba(236, 182, 40, 0.25)",
                              "0 15px 35px rgba(236, 182, 40, 0.4)",
                              "0 8px 25px rgba(236, 182, 40, 0.25)",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 0,
                          }}
                        >
                          1
                        </motion.div>
                      </div>
                      <div className="flex-1 bg-slate-800/30 rounded-2xl p-4 md:p-6 border border-slate-700/30 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <h5 className="text-white font-bold text-lg md:text-xl">
                            Първи месец
                          </h5>
                          <div className="px-3 py-1 bg-[#ECB629]/20 rounded-full border border-[#ECB629]/30">
                            <span className="text-[#ECB629] text-xs font-semibold">
                              СТАРТ
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                          {serviceName === "SEO Struktor™" &&
                            "Техническа оптимизация, изследване на ключови думи, първи подобрения"}
                          {serviceName === "Trendlab™" &&
                            "Стратегия за съдържание, първо качествено съдържание"}
                          {serviceName === "Clickstarter™" &&
                            "Преглед на кампании, нова структура, първи оптимизации"}
                          {serviceName === "Clientomat™" &&
                            "Преглед на процеси, първи автоматизации, настройка на система за управление на клиенти"}
                        </p>
                      </div>
                    </motion.div>

                    {/* Month 3 */}
                    <motion.div
                      className="flex items-start gap-6 md:gap-8"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <div className="relative">
                        <motion.div
                          className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#ECB629] to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-lg md:text-xl shadow-lg shadow-[#ECB629]/25 z-10 relative"
                          animate={{
                            boxShadow: [
                              "0 8px 25px rgba(236, 182, 40, 0.25)",
                              "0 15px 35px rgba(236, 182, 40, 0.4)",
                              "0 8px 25px rgba(236, 182, 40, 0.25)",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 1,
                          }}
                        >
                          3
                        </motion.div>
                      </div>
                      <div className="flex-1 bg-slate-800/30 rounded-2xl p-4 md:p-6 border border-slate-700/30 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <h5 className="text-white font-bold text-lg md:text-xl">
                            Трети месец
                          </h5>
                          <div className="px-3 py-1 bg-[#ECB629]/20 rounded-full border border-[#ECB629]/30">
                            <span className="text-[#ECB629] text-xs font-semibold">
                              РАСТЕЖ
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                          {serviceName === "SEO Struktor™" &&
                            "Видими позиции в Google, 40-60% увеличение на трафика"}
                          {serviceName === "Trendlab™" &&
                            "50% увеличение на ангажираност, изградена аудитория"}
                          {serviceName === "Clickstarter™" &&
                            "25-35% по-нисък разход за клик, 40% повече продажби"}
                          {serviceName === "Clientomat™" &&
                            "30% по-висок процент връщащи се клиенти, автоматизирани процеси"}
                        </p>
                      </div>
                    </motion.div>

                    {/* Month 6 */}
                    <motion.div
                      className="flex items-start gap-6 md:gap-8"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <div className="relative">
                        <motion.div
                          className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#ECB629] to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-lg md:text-xl shadow-lg shadow-[#ECB629]/25 z-10 relative"
                          animate={{
                            boxShadow: [
                              "0 8px 25px rgba(236, 182, 40, 0.25)",
                              "0 15px 35px rgba(236, 182, 40, 0.4)",
                              "0 8px 25px rgba(236, 182, 40, 0.25)",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 2,
                          }}
                        >
                          6
                        </motion.div>
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-[#ECB629]/10 to-yellow-500/5 rounded-2xl p-4 md:p-6 border border-[#ECB629]/30 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <h5 className="text-white font-bold text-lg md:text-xl">
                            Шести месец
                          </h5>
                          <div className="px-3 py-1 bg-[#ECB629]/30 rounded-full border border-[#ECB629]/50">
                            <span className="text-[#ECB629] text-xs font-bold">
                              РЕЗУЛТАТ
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                          <span className="text-[#ECB629] font-semibold">
                            Пълни резултати:{" "}
                            {results.monthlyProfit > 0
                              ? `${Math.round(results.monthlyProfit)}%`
                              : "250%"}{" "}
                            печалба спрямо вложеното
                          </span>
                          <br />
                          Устойчив растеж, системата работи самостоятелно
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Social Proof - Enhanced */}
              <motion.div
                className="bg-gradient-to-r from-slate-800/40 via-slate-800/30 to-slate-800/40 rounded-3xl p-6 md:p-8 border border-slate-700/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-[#ECB629]/30 rounded-full px-6 py-3 mb-4">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Award className="w-6 h-6 text-[#ECB629]" />
                    </motion.div>
                    <span className="text-white font-bold text-lg md:text-xl">
                      Доказани резултати
                    </span>
                  </div>
                  <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#ECB629] to-transparent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  <motion.div
                    className="text-center bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <motion.div
                      className="text-3xl md:text-4xl font-bold text-[#ECB629] mb-2"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      47+
                    </motion.div>
                    <div className="text-gray-300 text-sm md:text-base font-medium">
                      Успешни проекта
                    </div>
                    <div className="w-12 h-1 bg-[#ECB629]/30 mx-auto mt-3 rounded-full"></div>
                  </motion.div>

                  <motion.div
                    className="text-center bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <motion.div
                      className="text-3xl md:text-4xl font-bold text-[#ECB629] mb-2"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    >
                      285%
                    </motion.div>
                    <div className="text-gray-300 text-sm md:text-base font-medium">
                      Средна печалба
                    </div>
                    <div className="w-12 h-1 bg-[#ECB629]/30 mx-auto mt-3 rounded-full"></div>
                  </motion.div>

                  <motion.div
                    className="text-center bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <motion.div
                      className="text-3xl md:text-4xl font-bold text-[#ECB629] mb-2"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    >
                      95%
                    </motion.div>
                    <div className="text-gray-300 text-sm md:text-base font-medium">
                      Задоволени клиенти
                    </div>
                    <div className="w-12 h-1 bg-[#ECB629]/30 mx-auto mt-3 rounded-full"></div>
                  </motion.div>
                </div>
              </motion.div>
            </CardContent>
          </Card>

          {/* Profit Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-lg">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">
                      Печалба
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Процент от вложеното
                    </p>
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-green-500 mb-1">
                  {results.monthlyProfit > 0
                    ? `${results.monthlyProfit.toFixed(0)}%`
                    : "245%"}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">месечно</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-lg">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">
                      Приход
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Допълнителен
                    </p>
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-blue-500 mb-1">
                  {results.monthlyProfit > 0
                    ? `${Math.round((results.monthlyProfit * monthlyPrice) / 100).toLocaleString("bg-BG")} лв.`
                    : "45 000 лв."}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">месечно</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-lg sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">
                      Период
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Възвращаемост
                    </p>
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-purple-500 mb-1">
                  {results.paybackPeriod > 0 && results.paybackPeriod < 12
                    ? `${results.paybackPeriod.toFixed(1)} мес.`
                    : "0.8 мес."}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">срок</div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-slate-900/80 border-slate-700/50 backdrop-blur-lg">
            <CardContent className="p-4 sm:p-6 md:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Готови за <span className="text-[#ECB629]">трансформация</span>?
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                {serviceName === "SEO Struktor™" &&
                  `Вашият потенциал за търсене е ${results.score}/100. Започнете оптимизацията днес и постигнете измерими резултати.`}
                {serviceName === "Trendlab™" &&
                  `Вашият потенциал за съдържание е ${results.score}/100. Започнете създаването на съдържание днес и постигнете измерими резултати.`}
                {serviceName === "Clickstarter™" &&
                  `Вашият рекламен потенциал е ${results.score}/100. Започнете оптимизацията на рекламите днес и постигнете измерими резултати.`}
                {serviceName === "Clientomat™" &&
                  `Вашият потенциал за клиенти е ${results.score}/100. Започнете автоматизацията днес и постигнете измерими резултати.`}
              </p>
              <div className="flex flex-col gap-3 sm:gap-4 justify-center">
                <Button
                  onClick={() =>
                    window.open(
                      "https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu",
                      "_blank",
                    )
                  }
                  className="bg-[#ECB629] hover:bg-[#ECB629]/90 text-black font-semibold px-6 sm:px-8 py-3 rounded-xl w-full sm:w-auto text-sm sm:text-base h-12"
                >
                  {serviceName === "SEO Struktor™" &&
                    "Получете безплатен преглед за търсене"}
                  {serviceName === "Trendlab™" &&
                    "Получете безплатен преглед за съдържание"}
                  {serviceName === "Clickstarter™" &&
                    "Получете безплатен преглед на рекламите"}
                  {serviceName === "Clientomat™" &&
                    "Получете безплатен преглед за клиенти"}
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
                  className="border-[#ECB629] text-black hover:bg-[#ECB629]/10 hover:text-[#ECB629] px-6 sm:px-8 py-3 rounded-xl w-full sm:text-base h-12"
                >
                  {serviceName === "SEO Struktor™" &&
                    "Научете повече за системата за търсене"}
                  {serviceName === "Trendlab™" &&
                    "Научете повече за системата за съдържание"}
                  {serviceName === "Clickstarter™" &&
                    "Научете повече за рекламната система"}
                  {serviceName === "Clientomat™" &&
                    "Научете повече за системата за клиенти"}
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
        "Системна оптимизация за търсене за устойчив органичен трафик и по-високи позиции в Google.",
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
        "Оптимизация на рекламните кампании за максимална ефективност и печалба от инвестицията.",
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
      price: 2750,
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
      name: "Калкулатор за печалба от инвестиция - Pravdast",
      description:
        "Интерактивен калкулатор за изчисляване на печалбата от дигитален маркетинг услуги",
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

        <div className="relative z-1 pt-10 sm:pt-24 pb-8 sm:pb-12">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            {/* Header - matching main site style */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-[#ECB629]/20 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                    <motion.div
                      className="absolute inset-0 w-2 h-2 bg-[#ECB629] rounded-full opacity-20"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">
                    <span className="text-[#ECB629] font-bold">Безплатни</span>{" "}
                    калкулатори за печалба
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0 leading-tight"
              >
                Pravda <span className="text-[#ECB629]">Калкулатори</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed"
              >
                Изчислете{" "}
                <span className="bg-[#ECB629] text-black px-2 py-1 rounded font-semibold">
                  точната печалба
                </span>{" "}
                от нашите системи. Спрете да гадаете - започнете да планирате с
                реални числа.
              </motion.p>

              {/* Availability Message */}
              <motion.div
                className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-[#ECB629]/30 rounded-full px-4 py-2 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-white text-sm font-semibold">
                  Остават места -{" "}
                  <span className="text-[#ECB629] text-base">3</span>
                </span>
              </motion.div>
            </div>

            {/* Calculator Tabs */}
            <Tabs defaultValue="seo-struktor-" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 h-auto p-2">
                {services.map((service, index) => (
                  <TabsTrigger
                    key={index}
                    value={service.name.toLowerCase().replace(/[™\s]/g, "-")}
                    className="data-[state=active]:bg-[#ECB629] data-[state=active]:text-black py-3 px-2 md:px-4 h-auto text-xs md:text-sm"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
                      <div className="text-lg md:text-base">{service.icon}</div>
                      <span className="hidden md:inline font-medium">
                        {service.name}
                      </span>
                      <span className="md:hidden text-center font-medium leading-tight">
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
                  <ProfitCalculator
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

      {/* CTA Section - matching main site design */}
      <section className="py-20 bg-[#ECB629] relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-black/10 px-4 py-2 rounded-full border border-black/20 mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-black font-medium">
                Остават 3 места за 2025
              </span>
            </div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Готови ли сте да превърнете числата в резултати?
            </motion.h2>

            <motion.p
              className="text-xl text-black/80 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Изберете подходящата система за вашия бизнес и започнете
              трансформацията с безплатна консултация.
            </motion.p>

            {/* Trust Signals */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-black/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Безплатна диагностика</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Без ангажименти</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>48 часа отговор</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                whileHover={{
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Започнете днес</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
