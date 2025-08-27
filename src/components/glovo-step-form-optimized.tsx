"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calculator, Mail, Phone, CheckCircle } from "lucide-react";
import PravdaHeading from "@/components/typography/PravdaHeading";
import { submitGlovoForm, type GlovoFormData } from "@/app/actions/glovo-form";

export const GlovoStepFormOptimized = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<GlovoFormData>({
    name: "",
    restaurantType: "",
    city: "",
    monthlyOrders: "",
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

  const restaurantTypeOptions = [
    { value: "pizza", label: "Пицария" },
    { value: "kebab", label: "Кебапче/Дюнер" },
    { value: "traditional", label: "Традиционен ресторант/Механа" },
    { value: "fastfood", label: "Бързо хранене" },
    { value: "other", label: "Друго" }
  ];

  const cityOptions = [
    { value: "sofia", label: "София" },
    { value: "plovdiv", label: "Пловдив" },
    { value: "varna", label: "Варна" },
    { value: "burgas", label: "Бургас" },
    { value: "stara-zagora", label: "Стара Загора" },
    { value: "other", label: "Друг град" }
  ];

  const monthlyOrderOptions = [
    { value: "0-50", label: "0-50 поръчки" },
    { value: "51-150", label: "51-150 поръчки" },
    { value: "151-300", label: "151-300 поръчки" },
    { value: "300+", label: "300+ поръчки" }
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
      case 0: return formData.name.trim().length >= 2;
      case 1: return formData.restaurantType !== "";
      case 2: return formData.city !== "";
      case 3: return formData.monthlyOrders !== "";
      case 4: return /\S+@\S+\.\S+/.test(formData.email) && formData.phone.length >= 9;
      default: return false;
    }
  };

  const updateFormData = (field: keyof GlovoFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const steps = [
    {
      title: "Как можем да се обръщаме към Вас?",
      subtitle: "Въведете вашето име",
      component: (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Въведете вашето име..."
            value={formData.name}
            onChange={(e) => updateFormData('name', e.target.value)}
            className="w-full p-4 rounded-lg border-2 border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-all"
          />
          {formData.name.trim().length > 0 && formData.name.trim().length < 2 && (
            <p className="text-red-400 text-sm">Моля въведете поне 2 символа</p>
          )}
        </div>
      )
    },
    {
      title: "Какъв тип заведение имате?",
      subtitle: "",
      component: (
        <div className="grid grid-cols-1 gap-3">
          {restaurantTypeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => updateFormData('restaurantType', option.value)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                formData.restaurantType === option.value
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
      title: "В кой град се намирате?",
      subtitle: "",
      component: (
        <div className="grid grid-cols-1 gap-3">
          {cityOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => updateFormData('city', option.value)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                formData.city === option.value
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
      title: "Приблизително колко поръчки получавате от Glovo месечно?",
      subtitle: "",
      component: (
        <div className="grid grid-cols-1 gap-3">
          {monthlyOrderOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => updateFormData('monthlyOrders', option.value)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                formData.monthlyOrders === option.value
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
      title: "Къде да изпратим комплекта и да се свържем за консултацията?",
      subtitle: "Това ни помага да персонализираме всичко за вашата конкретна ситуация.",
      component: (
        <div className="space-y-4">
          <div className="text-sm text-gray-400 mb-4">
            *Това ни помага да персонализираме всичко за вашата конкретна ситуация.*
          </div>
          
          <div className="relative">
            <Phone className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              placeholder="+359 888 123 456"
              value={formData.phone}
              onChange={(e) => updateFormData('phone', e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
            />
            <div className="text-xs text-gray-400 mt-1 ml-12">Телефон:</div>
          </div>
          
          <div className="relative">
            <Mail className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="ваш@имейл.бг"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
            />
            <div className="text-xs text-gray-400 mt-1 ml-12">Имейл:</div>
          </div>
        </div>
      )
    }
  ];

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6"
      >
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Перфектно! Комплектът ви е изпратен
          </h3>
          <p className="text-gray-300 text-lg">
            Проверете телефона и имейла си за персонализирания анализ. 
            Ще се свържем с вас за консултацията в удобно за вас време.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Стъпка {currentStep + 1} от {steps.length}</span>
          <span>({Math.round(((currentStep + 1) / steps.length) * 100)}% завършено)</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-yellow-400 to-green-400 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Form Introduction Text */}
      {currentStep === 0 && (
        <div className="mb-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            "Започнете пътя към независимост от Glovo"
          </h3>
          <p className="text-gray-400 text-sm">
            Първо се запознайте - как можем да се обръщаме към Вас?
          </p>
        </div>
      )}

      {/* Form Content */}
      <motion.div
        className="bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        key={currentStep}
      >
        <div className="mb-6">
          <PravdaHeading as="h3" size="2xl" className="text-white mb-2">
            {steps[currentStep].title}
          </PravdaHeading>
          {steps[currentStep].subtitle && (
            <p className="text-gray-400 text-sm">{steps[currentStep].subtitle}</p>
          )}
        </div>

        <div className="mb-8">
          {steps[currentStep].component}
        </div>

        <div className="flex justify-between items-center">
          {currentStep > 0 ? (
            <Button
              onClick={prevStep}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <ChevronLeft className="mr-2 w-4 h-4" />
              Назад
            </Button>
          ) : (
            <div></div>
          )}
          
          <Button
            onClick={nextStep}
            disabled={!isStepValid() || isPending}
            className="bg-gradient-to-r from-yellow-400 to-green-400 text-black font-semibold px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
          >
            {isPending ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                Изпращане...
              </div>
            ) : currentStep === steps.length - 1 ? (
              "Получи комплекта БЕЗПЛАТНО"
            ) : (
              <div className="flex items-center gap-2">
                Следваща стъпка
                <ChevronRight className="w-4 h-4" />
              </div>
            )}
          </Button>
        </div>
      </motion.div>

      {/* Enhanced Trust Signals */}
      <div className="mt-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-400">
          <div className="flex items-center justify-center gap-2">
            🔒 <span>НИКОГА не споделяме информацията ви</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            📞 <span>Обаждаме се САМО в удобно за вас време</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            🚫 <span>Няма спам, няма натрапчиви обаждания</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            ✅ <span>Само ценни съвети за вашия ресторант</span>
          </div>
        </div>
        <div className="mt-2 text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            📱 <span>Комплектът се изпраща веднага на телефона и имейла ви</span>
          </div>
        </div>
      </div>
    </div>
  );
};