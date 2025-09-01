"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import PravdaHeading from "@/components/typography/PravdaHeading";
import { ChevronLeft, ChevronRight, Palette, Mail, Phone, CheckCircle, Play } from "lucide-react";

interface FormData {
  name: string;
  businessName: string;
  industry: string;
  currentMarketing: string;
  monthlyBudget: string;
  mainGoal: string;
  email: string;
  phone: string;
}

export const CreativesStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    businessName: "",
    industry: "",
    currentMarketing: "",
    monthlyBudget: "",
    mainGoal: "",
    email: "",
    phone: ""
  });
  const [customCurrentMarketing, setCustomCurrentMarketing] = useState("");
  const [customMonthlyBudget, setCustomMonthlyBudget] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentMarketingOptions = [
    { value: "facebook-ads", label: "Facebook/Instagram реклами" },
    { value: "google-ads", label: "Google реклами" },
    { value: "social-media", label: "Органични социални медии" },
    { value: "none", label: "Нямаме активен маркетинг" }
  ];

  const monthlyBudgetOptions = [
    { value: "500", label: "500 - 1,000 лв месечно" },
    { value: "1500", label: "1,000 - 2,500 лв месечно" },
    { value: "3000", label: "2,500 - 5,000 лв месечно" },
    { value: "5000", label: "5,000+ лв месечно" }
  ];

  const industryOptions = [
    { value: "ecommerce", label: "E-commerce / Онлайн магазин" },
    { value: "services", label: "Услуги (консултиране, агенция, и др.)" },
    { value: "restaurant", label: "Ресторант / Хранителни заведения" },
    { value: "beauty", label: "Козметика / Красота" },
    { value: "fitness", label: "Фитнес / Здраве" },
    { value: "real-estate", label: "Недвижими имоти" },
    { value: "education", label: "Образование / Курсове" },
    { value: "other", label: "Друга индустрия" }
  ];

  const mainGoalOptions = [
    { value: "increase-sales", label: "Увеличение на продажбите" },
    { value: "brand-awareness", label: "Повишаване на познаваемостта на бранда" },
    { value: "lead-generation", label: "Генериране на повече запитвания" },
    { value: "customer-engagement", label: "По-добра ангажираност с клиентите" }
  ];

  const submitToAirtable = async () => {
    let response: Response | undefined;
    try {
      setIsSubmitting(true);
      
      response = await fetch('/api/airtable/creatives-calculator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          business_name: formData.businessName,
          industry: formData.industry,
          current_marketing: formData.currentMarketing,
          monthly_budget: formData.monthlyBudget,
          email: formData.email,
          phone: formData.phone
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setCurrentStep(7); // Thank you screen
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      try {
        if (response && !response.ok) {
          const errorResponse = await response.text();
          console.error('Response details:', errorResponse);
        }
      } catch (e) {
        console.error('Could not read error response');
      }
      alert('Възникна грешка при изпращането. Моля, опитайте отново.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name.trim().length >= 2;
      case 2:
        return formData.businessName.trim().length > 0;
      case 3:
        return formData.industry !== "";
      case 4:
        return formData.currentMarketing !== "";
      case 5:
        return formData.monthlyBudget !== "" && Number(formData.monthlyBudget) > 0;
      case 6:
        // Strict email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(formData.email.trim());
        
        // Bulgarian phone validation
        const phoneRegex = /^(\+359|0)[0-9]{8,9}$/;
        const isPhoneValid = phoneRegex.test(formData.phone.trim());
        
        return isEmailValid && isPhoneValid;
      default:
        return true;
    }
  };

  const getValidationMessage = () => {
    if (currentStep === 6) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^(\+359|0)[0-9]{8,9}$/;
      
      if (!emailRegex.test(formData.email.trim())) {
        return "Моля въведете валиден имейл адрес";
      }
      if (!phoneRegex.test(formData.phone.trim())) {
        return "Моля въведете валиден телефонен номер (започва с 0 или +359)";
      }
    }
    return "";
  };

  const steps = [
    // Welcome Screen (Step 0)
    {
      title: "Къде да изпратим вашата Креативна Стратегия?",
      subtitle: "Готов-за-действие план за креативи, които генерират продажби от първия ден",
      content: (
        <div className="text-center py-8">
          <div className="mb-8">
            <Palette className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <p className="text-xl text-gray-800 leading-relaxed">
              Открийте кои креативи ще работят най-добре за вашия бизнес за под 3 минути.
              Получете персонализирани примери и пълна стратегия.
            </p>
          </div>
          
          {/* Trust Elements - Better Layout */}
          <div className="bg-gray-900/50 border border-green-400/20 rounded-2xl p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Row 1 */}
              <div className="flex items-center justify-center md:justify-start space-x-2 text-green-400 text-sm">
                <span className="text-lg">🎨</span>
                <span className="font-medium">100% безплатно</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-green-400 text-sm">
                <span className="text-lg">🔒</span>
                <span className="font-medium">Пълна конфиденциалност</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-green-400 text-sm">
                <span className="text-lg">⚡</span>
                <span className="font-medium">Анализът е готов до 5 минути</span>
              </div>
              
              {/* Row 2 */}
              <div className="flex items-center justify-center md:justify-start space-x-2 text-green-400 text-sm">
                <span className="text-lg">📞</span>
                <span className="font-medium">Обаждаме се само при желание от вас</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-green-400 text-sm">
                <span className="text-lg">🎯</span>
                <span className="font-medium">Персонализиран за вашата индустрия</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-green-400 text-sm">
                <span className="text-lg">📱</span>
                <span className="font-medium">Изпраща се директно на телефона ви</span>
              </div>
            </div>
          </div>

          <Button
            onClick={nextStep}
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:opacity-90 px-8 py-4 text-lg font-bold"
          >
            Започни анализа ➤
          </Button>
        </div>
      )
    },
    
    // Step 1: Name
    {
      title: "Как мога да се обърна към вас?",
      subtitle: "Искаме анализът да бъде максимално персонален",
      content: (
        <div className="space-y-6">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-6 py-4 bg-black/50 border border-green-400/30 rounded-xl text-white text-lg focus:border-green-400 focus:outline-none"
            placeholder="Въведете вашето име..."
            autoFocus
          />
          <p className="text-gray-400 text-sm text-center">
            Използваме името ви само за персонализиране на анализа
          </p>
        </div>
      )
    },

    // Step 2: Business Name
    {
      title: `Отлично, ${formData.name}! Как се казва вашият бизнес?`,
      subtitle: "За да подготвим креативни идеи точно за вас",
      content: (
        <div className="space-y-6">
          <input
            type="text"
            value={formData.businessName}
            onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
            className="w-full px-6 py-4 bg-black/50 border border-green-400/30 rounded-xl text-white text-lg focus:border-green-400 focus:outline-none"
            placeholder="Име на бизнеса..."
            autoFocus
          />
        </div>
      )
    },

    // Step 3: Industry
    {
      title: "В коя индустрия работите?",
      subtitle: "Различните индустрии използват различни типове креативи",
      content: (
        <div className="grid gap-3">
          {industryOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setFormData(prev => ({ ...prev, industry: option.value }));
                setTimeout(nextStep, 300);
              }}
              className="w-full p-4 rounded-xl border text-left transition-all hover:scale-105 border-gray-600 bg-black/30 text-gray-300 hover:border-green-400/50 hover:bg-green-400/5"
            >
              {option.label}
            </button>
          ))}
        </div>
      )
    },

    // Step 4: Current Marketing
    {
      title: "Какъв маркетинг използвате в момента?",
      subtitle: "За да видим къде имате най-голям потенциал за подобрение",
      content: (
        <div className="space-y-4">
          <div className="grid gap-3">
            {currentMarketingOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  setFormData(prev => ({ ...prev, currentMarketing: option.value }));
                  setTimeout(nextStep, 300);
                }}
                className="w-full p-4 rounded-xl border text-left transition-all hover:scale-105 border-gray-600 bg-black/30 text-gray-300 hover:border-green-400/50 hover:bg-green-400/5"
              >
                {option.label}
              </button>
            ))}
          </div>
          
          <div className="pt-4 border-t border-gray-700">
            <p className="text-gray-400 text-sm mb-3">Или въведете друго:</p>
            <input
              type="text"
              value={customCurrentMarketing}
              onChange={(e) => {
                setCustomCurrentMarketing(e.target.value);
                setFormData(prev => ({ ...prev, currentMarketing: e.target.value }));
              }}
              className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-xl text-white focus:border-green-400 focus:outline-none"
              placeholder="Опишете вашия текущ маркетинг..."
            />
          </div>
        </div>
      )
    },

    // Step 5: Monthly Budget
    {
      title: "Какъв е вашият месечен маркетингов бюджет?",
      subtitle: "За да препоръчаме най-подходящите креативи за вашия бюджет",
      content: (
        <div className="space-y-4">
          <div className="grid gap-3">
            {monthlyBudgetOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  setFormData(prev => ({ ...prev, monthlyBudget: option.value }));
                  setTimeout(nextStep, 300);
                }}
                className="w-full p-4 rounded-xl border text-left transition-all hover:scale-105 border-gray-600 bg-black/30 text-gray-300 hover:border-green-400/50 hover:bg-green-400/5"
              >
                {option.label}
              </button>
            ))}
          </div>
          
          <div className="pt-4 border-t border-gray-700">
            <p className="text-gray-400 text-sm mb-3">Или въведете точна сума:</p>
            <div className="relative">
              <input
                type="number"
                value={customMonthlyBudget}
                onChange={(e) => {
                  setCustomMonthlyBudget(e.target.value);
                  setFormData(prev => ({ ...prev, monthlyBudget: e.target.value }));
                }}
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-xl text-white focus:border-green-400 focus:outline-none pr-12"
                placeholder="1000"
                min="0"
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">лв</span>
            </div>
          </div>
        </div>
      )
    },

    // Step 6: Contact Info
    {
      title: "Почти готово! Къде да изпратим анализа?",
      subtitle: "Ще получите персонализирания анализ до 5 минути",
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-white font-medium mb-2">Имейл адрес:</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-6 py-4 bg-black/50 border border-green-400/30 rounded-xl text-white text-lg focus:border-green-400 focus:outline-none"
              placeholder="ime@email.com"
              autoFocus
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-2">Телефонен номер:</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full px-6 py-4 bg-black/50 border border-green-400/30 rounded-xl text-white text-lg focus:border-green-400 focus:outline-none"
              placeholder="+359 ..."
            />
          </div>
          {getValidationMessage() && (
            <p className="text-red-400 text-sm text-center">
              {getValidationMessage()}
            </p>
          )}
          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-4">
            <p className="text-yellow-400 text-sm text-center">
              🔒 Използваме данните ви само за изпращане на анализа. Никой спам, никакви продажни обаждания без ваше съгласие.
            </p>
          </div>
        </div>
      )
    },

    // Step 7: Thank You
    {
      title: "Благодарим ви! Анализът е на път! 🎉",
      subtitle: "Получихме информацията и подготвяме персонализирания ви креативен анализ",
      content: (
        <div className="text-center py-8">
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} className="text-green-400" />
          </div>
          
          <div className="space-y-4 mb-8">
            <p className="text-xl text-white">
              Перфектно! Анализът за <span className="text-yellow-400 font-bold">{formData.businessName}</span> 
              ще бъде готов до <span className="text-green-400 font-bold">5 минути</span>.
            </p>
            
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Какво ще получите:</h3>
              <div className="grid text-left space-y-2">
                {[
                  "🎯 Персонализирани креативни идеи за вашата индустрия",
                  "📊 Анализ кои креативи ще работят най-добре за вас",
                  "🎥 Конкретни примери за UGC, Video и Carousel креативи",
                  "💡 Стратегия за първите 30 дни стъпка по стъпка",
                  "📈 ROI прогноза за различните типове креативи"
                ].map((item, index) => (
                  <div key={index} className="text-gray-300 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-gray-400">
              Анализът ще бъде изпратен на <span className="text-white">{formData.email}</span>
            </p>
          </div>
          
          <div className="bg-green-100 border border-green-300 rounded-xl p-6">
            <p className="text-green-700 text-center font-medium">
              ✅ Успешно изпратихме данните ви<br/>
              ⏰ Очаквайте вашата креативна стратегия в имейла си до 5 минути<br/>
              📱 Може да затворите този прозорец
            </p>
          </div>
        </div>
      )
    }
  ];

  const currentStepData = steps[currentStep];

  return (
    <div className="bg-white/95 backdrop-blur-xl border border-yellow-300 rounded-2xl p-8 shadow-xl">
      {/* Progress Bar */}
      {currentStep > 0 && currentStep < 7 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Стъпка {currentStep} от 6</span>
            <span className="text-sm text-yellow-600">
              {Math.round((currentStep / 6) * 100)}% завършено
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-green-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 6) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center mb-8">
            <PravdaHeading as="h2" size="xl" className="md:text-2xl text-gray-900 mb-4">
              {currentStepData.title}
            </PravdaHeading>
            <p className="text-gray-600">
              {currentStepData.subtitle}
            </p>
          </div>

          {currentStepData.content}

          {/* Navigation Buttons */}
          {currentStep > 0 && currentStep < 6 && (
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-300">
              <Button
                variant="outline"
                onClick={prevStep}
                className="flex items-center space-x-2"
              >
                <ChevronLeft size={16} />
                <span>Назад</span>
              </Button>

              <Button
                onClick={currentStep === 5 ? submitToAirtable : nextStep}
                disabled={!isStepValid() || isSubmitting}
                className="bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:opacity-90 disabled:opacity-50 flex items-center space-x-2"
              >
                <span>
                  {currentStep === 5 
                    ? (isSubmitting ? "Изпращане..." : "Получи стратегията")
                    : "Продължи"
                  }
                </span>
                <ChevronRight size={16} />
              </Button>
            </div>
          )}

          {currentStep === 6 && (
            <div className="flex justify-center mt-8 pt-6 border-t border-gray-300">
              <Button
                onClick={submitToAirtable}
                disabled={!isStepValid() || isSubmitting}
                className="bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:opacity-90 disabled:opacity-50 px-8 py-3 text-lg font-bold"
              >
                {isSubmitting ? "Изпращане..." : "Получи стратегията 🚀"}
              </Button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};