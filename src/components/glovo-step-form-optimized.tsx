"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calculator, Mail, Phone, CheckCircle } from "lucide-react";
import { submitGlovoForm, type GlovoFormData } from "@/app/actions/glovo-form";

export const GlovoStepFormOptimized = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<GlovoFormData>({
    restaurantName: "",
    dailyOrders: "",
    avgOrderValue: "",
    email: "",
    phone: ""
  });
  const [isPending, startTransition] = useTransition();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
  } | null>(null);

  const dailyOrderOptions = [
    { value: "5-10", label: "5-10 поръчки" },
    { value: "11-20", label: "11-20 поръчки" },
    { value: "21-35", label: "21-35 поръчки" },
    { value: "36-50", label: "36-50 поръчки" },
    { value: "50+", label: "50+ поръчки" }
  ];

  const avgOrderValueOptions = [
    { value: "15-25", label: "15-25 лв" },
    { value: "26-35", label: "26-35 лв" },
    { value: "36-50", label: "36-50 лв" },
    { value: "50+", label: "50+ лв" }
  ];

  const handleSubmit = () => {
    startTransition(async () => {
      try {
        const result = await submitGlovoForm(formData);
        setSubmitResult(result);
        
        if (result.success) {
          setIsSubmitted(true);
        }
      } catch (error) {
        setSubmitResult({
          success: false,
          message: "Възникна техническа грешка. Моля опитайте отново.",
          errors: {}
        });
      }
    });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0: return formData.restaurantName.length >= 2;
      case 1: return formData.dailyOrders !== "";
      case 2: return formData.avgOrderValue !== "";
      case 3: return /\S+@\S+\.\S+/.test(formData.email);
      case 4: return /^0[0-9]{8,9}$/.test(formData.phone);
      default: return false;
    }
  };

  const updateFormData = (field: keyof GlovoFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateSavings = () => {
    const ordersMap = {
      "5-10": 7.5,
      "11-20": 15.5,
      "21-35": 28,
      "36-50": 43,
      "50+": 60
    };
    
    const valueMap = {
      "15-25": 20,
      "26-35": 30.5,
      "36-50": 43,
      "50+": 60
    };

    const dailyOrders = ordersMap[formData.dailyOrders as keyof typeof ordersMap] || 0;
    const avgValue = valueMap[formData.avgOrderValue as keyof typeof valueMap] || 0;
    
    const monthlyRevenue = dailyOrders * avgValue * 30;
    const glovoCommission = monthlyRevenue * 0.30;
    const potentialSavings = glovoCommission * 0.70; // 70% reduction
    
    return {
      monthlyRevenue: Math.round(monthlyRevenue),
      glovoCommission: Math.round(glovoCommission),
      potentialSavings: Math.round(potentialSavings)
    };
  };

  const steps = [
    {
      title: "Как се казва вашият ресторант?",
      subtitle: "Това ни помага да персонализираме анализа",
      component: (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="напр. Италиански Ресторант Рома"
            value={formData.restaurantName}
            onChange={(e) => updateFormData('restaurantName', e.target.value)}
            className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
          />
        </div>
      )
    },
    {
      title: "Колко поръчки получавате дневно от Glovo?",
      subtitle: "Приблизителен брой за по-точен калкулация",
      component: (
        <div className="grid grid-cols-1 gap-3">
          {dailyOrderOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => updateFormData('dailyOrders', option.value)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                formData.dailyOrders === option.value
                  ? 'border-yellow-400 bg-yellow-400/20 text-yellow-400'
                  : 'border-gray-700 bg-gray-800 text-gray-300 hover:border-yellow-400/50'
              }`}
            >
              <div className="font-semibold">{option.label}</div>
            </button>
          ))}
        </div>
      )
    },
    {
      title: "Каква е средната стойност на поръчка?",
      subtitle: "Това ни помага да изчислим точните разходи",
      component: (
        <div className="grid grid-cols-1 gap-3">
          {avgOrderValueOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => updateFormData('avgOrderValue', option.value)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                formData.avgOrderValue === option.value
                  ? 'border-yellow-400 bg-yellow-400/20 text-yellow-400'
                  : 'border-gray-700 bg-gray-800 text-gray-300 hover:border-yellow-400/50'
              }`}
            >
              <div className="font-semibold">{option.label}</div>
            </button>
          ))}
        </div>
      )
    },
    {
      title: "Вашият имейл адрес",
      subtitle: "За да получите персонализирания анализ",
      component: (
        <div className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="вашия@имейл.bg"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              className="w-full p-4 pl-12 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
            />
          </div>
          {submitResult?.errors?.email && (
            <p className="text-red-400 text-sm">{submitResult.errors.email[0]}</p>
          )}
        </div>
      )
    },
    {
      title: "Телефон за контакт",
      subtitle: "За бърза консултация (по избор)",
      component: (
        <div className="space-y-4">
          <div className="relative">
            <Phone className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              placeholder="0888 123 456"
              value={formData.phone}
              onChange={(e) => updateFormData('phone', e.target.value)}
              className="w-full p-4 pl-12 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
            />
          </div>
          {submitResult?.errors?.phone && (
            <p className="text-red-400 text-sm">{submitResult.errors.phone[0]}</p>
          )}
          <p className="text-gray-400 text-sm">
            Български мобилен номер (започва с 08...)
          </p>
        </div>
      )
    }
  ];

  if (isSubmitted && submitResult?.success) {
    const savings = calculateSavings();
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glassmorphism border border-green-400/30 rounded-2xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-8 h-8 text-black" />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-green-400 mb-4">
          Анализът е готов!
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4">
            <div className="text-lg font-bold text-red-400">Glovo комисионни</div>
            <div className="text-2xl font-bold text-red-500">{savings.glovoCommission} лв/месец</div>
          </div>
          
          <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4">
            <div className="text-lg font-bold text-green-400">Възможни спестявания</div>
            <div className="text-2xl font-bold text-green-400">{savings.potentialSavings} лв/месец</div>
          </div>
          
          <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-4">
            <div className="text-lg font-bold text-yellow-400">Годишни спестявания</div>
            <div className="text-2xl font-bold text-yellow-400">{savings.potentialSavings * 12} лв</div>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6">
          {submitResult.message}
        </p>
        
        <div className="text-sm text-gray-400">
          🎯 Персонализиран план за освобождаване от Glovo ще получите на {formData.email}
        </div>
      </motion.div>
    );
  }

  // Show error state
  if (submitResult && !submitResult.success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glassmorphism border border-red-400/30 rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">❌</span>
        </div>
        
        <h3 className="text-2xl font-bold text-red-400 mb-4">
          Възникна проблем
        </h3>
        
        <p className="text-gray-300 mb-6">
          {submitResult.message}
        </p>
        
        <Button
          onClick={() => {
            setSubmitResult(null);
            setCurrentStep(0);
          }}
          className="bg-yellow-400 text-black hover:bg-yellow-500"
        >
          Опитай отново
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="glassmorphism border border-yellow-400/30 rounded-2xl p-8">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-400">
            Стъпка {currentStep + 1} от {steps.length}
          </span>
          <span className="text-sm text-yellow-400 font-semibold">
            {Math.round(((currentStep + 1) / steps.length) * 100)}% завършено
          </span>
        </div>
        
        <div className="w-full bg-gray-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-yellow-400 to-green-400 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            {steps[currentStep].title}
          </h3>
          <p className="text-gray-400 mb-6">
            {steps[currentStep].subtitle}
          </p>
          
          <div className="mb-8">
            {steps[currentStep].component}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          onClick={prevStep}
          disabled={currentStep === 0}
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
        >
          <ChevronLeft className="mr-2 w-4 h-4" />
          Назад
        </Button>

        <Button
          onClick={nextStep}
          disabled={!isStepValid() || isPending}
          className="bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:opacity-90 disabled:opacity-50"
        >
          {isPending ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
              Изпращане...
            </>
          ) : currentStep === steps.length - 1 ? (
            <>
              <Calculator className="mr-2 w-4 h-4" />
              Изчисли спестяванията
            </>
          ) : (
            <>
              Напред
              <ChevronRight className="ml-2 w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};