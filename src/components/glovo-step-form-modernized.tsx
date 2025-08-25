"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle, Lock, Phone, Mail } from "lucide-react";
import PravdaHeading from "@/components/typography/PravdaHeading";

// Simplified form data type for 2025 design
type ModernGlovoFormData = {
  restaurantType: string;
  city: string;
  monthlyOrders: string;
  email: string;
  phone: string;
};

export const GlovoStepFormModernized = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<ModernGlovoFormData>({
    restaurantType: "",
    city: "",
    monthlyOrders: "",
    email: "",
    phone: ""
  });
  const [isPending, startTransition] = useTransition();
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async () => {
    startTransition(async () => {
      try {
        // Simulate API call for now
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitted(true);
      } catch (error) {
        console.error("Submit error:", error);
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

  const isStepValid = () => {
    switch (currentStep) {
      case 0: return formData.restaurantType !== "";
      case 1: return formData.city !== "";
      case 2: return formData.monthlyOrders !== "";
      case 3: return /\S+@\S+\.\S+/.test(formData.email) && formData.phone.length >= 9;
      default: return false;
    }
  };

  const updateFormData = (field: keyof ModernGlovoFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const steps = [
    {
      title: "Какъв тип заведение имате?",
      component: (
        <div className="grid grid-cols-1 gap-3">
          {restaurantTypeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => updateFormData('restaurantType', option.value)}
              className={`p-4 rounded-xl border transition-all text-left group ${
                formData.restaurantType === option.value
                  ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400'
                  : 'border-gray-700 bg-gray-900/50 text-gray-300 hover:border-yellow-400/50 hover:bg-yellow-400/5'
              }`}
            >
              <div className="font-medium">{option.label}</div>
            </button>
          ))}
        </div>
      )
    },
    {
      title: "В кой град се намирате?",
      component: (
        <div className="grid grid-cols-1 gap-3">
          {cityOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => updateFormData('city', option.value)}
              className={`p-4 rounded-xl border transition-all text-left ${
                formData.city === option.value
                  ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400'
                  : 'border-gray-700 bg-gray-900/50 text-gray-300 hover:border-yellow-400/50 hover:bg-yellow-400/5'
              }`}
            >
              <div className="font-medium">{option.label}</div>
            </button>
          ))}
        </div>
      )
    },
    {
      title: "Приблизително колко поръчки получавате от Glovo месечно?",
      component: (
        <div className="grid grid-cols-1 gap-3">
          {monthlyOrderOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => updateFormData('monthlyOrders', option.value)}
              className={`p-4 rounded-xl border transition-all text-left ${
                formData.monthlyOrders === option.value
                  ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400'
                  : 'border-gray-700 bg-gray-900/50 text-gray-300 hover:border-yellow-400/50 hover:bg-yellow-400/5'
              }`}
            >
              <div className="font-medium">{option.label}</div>
            </button>
          ))}
        </div>
      )
    },
    {
      title: "Къде да изпратим комплекта и да се свържем за консултацията?",
      component: (
        <div className="space-y-4">
          <div className="relative">
            <Phone className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              placeholder="+359 888 123 456"
              value={formData.phone}
              onChange={(e) => updateFormData('phone', e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
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
              className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
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
      {/* Progress Bar - Clean 2025 Style */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Стъпка {currentStep + 1} от {steps.length}</span>
          <span>{Math.round(((currentStep + 1) / steps.length) * 100)}% завършено</span>
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

      {/* Pre-Form Value Proposition */}
      {currentStep === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-400/30 rounded-2xl"
        >
          <div className="text-center mb-4">
            <div className="text-2xl mb-2">🎁</div>
            <h3 className="text-xl font-bold text-green-400 mb-2">
              Получете БЕЗПЛАТНИЯ си Комплект за Независимост на Ресторанта
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Вместо да се чудите колко ви струва Glovo, получете точни числа + пълен план за намаляване на зависимостта с 60% за 90 дни.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-2 text-sm">
            <div className="text-green-400">✓ Персонализиран Glovo доклад за разходи</div>
            <div className="text-green-400">✓ 3-стъпков план за освобождаване</div>
            <div className="text-green-400">✓ Схема за система за директни поръчки</div>
            <div className="text-green-400">✓ БЕЗПЛАТНА 15-минутна консултация</div>
          </div>
          
          <div className="mt-4 text-center">
            <span className="text-yellow-400 font-bold">Обща стойност: 450 лв</span>
            <span className="text-green-400 font-bold ml-2">- Ваша безплатно днес</span>
          </div>
        </motion.div>
      )}

      {/* Form Content */}
      <motion.div
        className="bg-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        key={currentStep}
      >
        <div className="mb-6">
          <PravdaHeading as="h3" size="2xl" className="text-white mb-2">
            {steps[currentStep].title}
          </PravdaHeading>
          {currentStep === 3 && (
            <p className="text-gray-400 text-sm">
              *Това ни помага да персонализираме всичко за вашата конкретна ситуация.*
            </p>
          )}
        </div>

        <div className="mb-8">
          {steps[currentStep].component}
        </div>

        <div className="flex justify-between items-center">
          <div></div>
          
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

      {/* Trust Signals - Clean 2025 Design */}
      <div className="mt-6 text-center">
        <div className="flex justify-center items-center gap-6 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <Lock className="w-3 h-3" />
            <span>НИКОГА не споделяме информацията ви</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3" />
            <span>Обаждаме се САМО в удобно за вас време</span>
          </div>
        </div>
      </div>
    </div>
  );
};