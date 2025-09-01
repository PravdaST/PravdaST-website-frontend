"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import PravdaHeading from "@/components/typography/PravdaHeading";
import { ChevronLeft, ChevronRight, Calculator, Mail, Phone, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  restaurantName: string;
  city: string;
  dailyOrders: string;
  avgOrderValue: string;
  email: string;
  phone: string;
}

export const GlovoStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    restaurantName: "",
    city: "",
    dailyOrders: "",
    avgOrderValue: "",
    email: "",
    phone: ""
  });
  const [customDailyOrders, setCustomDailyOrders] = useState("");
  const [customAvgOrderValue, setCustomAvgOrderValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dailyOrderOptions = [
    { value: "8", label: "8 поръчки дневно" },
    { value: "15", label: "15 поръчки дневно" },
    { value: "28", label: "28 поръчки дневно" },
    { value: "43", label: "43 поръчки дневно" }
  ];

  const avgOrderValueOptions = [
    { value: "20", label: "20 лв средна стойност" },
    { value: "30", label: "30 лв средна стойност" },
    { value: "43", label: "43 лв средна стойност" },
    { value: "60", label: "60 лв средна стойност" }
  ];

  const submitToAirtable = async () => {
    let response: Response | undefined;
    try {
      setIsSubmitting(true);
      
      response = await fetch('/api/airtable/glovo-calculator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          restaurant_name: formData.restaurantName,
          city: formData.city,
          daily_orders: formData.dailyOrders,
          avg_order_value: formData.avgOrderValue,
          email: formData.email,
          phone: formData.phone,
          timestamp: new Date().toISOString()
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
        return formData.restaurantName.trim().length > 0;
      case 3:
        return formData.city.trim().length > 0;
      case 4:
        return formData.dailyOrders !== "" && Number(formData.dailyOrders) > 0;
      case 5:
        return formData.avgOrderValue !== "" && Number(formData.avgOrderValue) > 0;
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
      title: "Къде да изпратим вашия Комплект за Независимост на Ресторанта?",
      subtitle: "Това ни помага да персонализираме всичко за вашата конкретна ситуация. Вижте колко наистина плащате",
      content: (
        <div className="text-center py-8">
          <div className="mb-8">
            <Calculator className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <p className="text-xl text-gray-300 leading-relaxed">
              Открийте точните си Glovo разходи за под 2 минути и получете персонализиран план за спестявания.
            </p>
          </div>
          {/* Trust Elements - Better Layout */}
          <div className="bg-gray-900/50 border border-green-400/20 rounded-2xl p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Row 1 */}
              <div className="flex items-center justify-center md:justify-start space-x-2 text-green-400 text-sm">
                <span className="text-lg">💯</span>
                <span className="font-medium">безплатно</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-green-400 text-sm">
                <span className="text-lg">🔒</span>
                <span className="font-medium">НИКОГА не споделяме информацията ви</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-green-400 text-sm">
                <span className="text-lg">📞</span>
                <span className="font-medium">Обаждаме се САМО в удобно за вас време</span>
              </div>
              
              {/* Row 2 */}
              <div className="flex items-center justify-center md:justify-start space-x-2 text-green-400 text-sm">
                <span className="text-lg">🚫</span>
                <span className="font-medium">Няма спам, няма натрапчиви обаждания</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-green-400 text-sm">
                <span className="text-lg">✅</span>
                <span className="font-medium">Само ценни съвети за вашия ресторант</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-green-400 text-sm">
                <span className="text-lg">📱</span>
                <span className="font-medium">Комплектът се изпраща веднага на телефона и имейла ви</span>
              </div>
            </div>
          </div>

          <Button
            onClick={nextStep}
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:opacity-90 px-8 py-4 text-lg font-bold"
          >
            Започни калкулатора
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      )
    },
    // Question 1: Name (Step 1)  
    {
      title: "Как можем да се обръщаме към Вас?",
      subtitle: "Въведете вашето име",
      content: (
        <div className="py-8">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="Въведете вашето име..."
            className="w-full px-6 py-4 bg-black/50 border border-green-400/30 rounded-xl text-white text-lg focus:border-green-400 focus:outline-none"
            autoFocus
          />
          {formData.name.trim().length > 0 && formData.name.trim().length < 2 && (
            <p className="text-red-400 text-sm mt-2">Моля въведете поне 2 символа</p>
          )}
        </div>
      )
    },
    // Question 2: Restaurant Name (Step 2)
    {
      title: "Как се казва вашият ресторант?",
      subtitle: "Това ще ни помогне да персонализираме анализа",
      content: (
        <div className="py-8">
          <input
            type="text"
            value={formData.restaurantName}
            onChange={(e) => setFormData({...formData, restaurantName: e.target.value})}
            placeholder="Въведете името на ресторанта"
            className="w-full px-6 py-4 bg-black/50 border border-green-400/30 rounded-xl text-white text-lg focus:border-green-400 focus:outline-none"
            autoFocus
          />
        </div>
      )
    },
    // Question 3: City (Step 3)
    {
      title: "В кой град се намира ресторантът ви?",
      subtitle: "Това ще ни помогне за по-точен анализ на пазара",
      content: (
        <div className="py-8">
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value})}
            placeholder="Въведете града..."
            className="w-full px-6 py-4 bg-black/50 border border-green-400/30 rounded-xl text-white text-lg focus:border-green-400 focus:outline-none"
            autoFocus
          />
        </div>
      )
    },
    // Question 4: Daily Orders (Step 4)
    {
      title: "Колко поръчки за доставка получавате дневно средно?",
      subtitle: "Изберете най-близкия вариант или въведете точно число",
      content: (
        <div className="py-8 space-y-4">
          {dailyOrderOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setFormData({...formData, dailyOrders: option.value});
                setCustomDailyOrders("");
              }}
              className={`w-full p-4 rounded-xl border text-left transition-all ${
                formData.dailyOrders === option.value
                  ? 'border-green-400 bg-green-400/10 text-green-400'
                  : 'border-gray-600 bg-black/30 text-gray-300 hover:border-green-400/50'
              }`}
            >
              <div className="text-lg font-semibold">{option.label}</div>
            </button>
          ))}
          <div className="mt-6">
            <label className="block text-green-400 font-semibold mb-2">
              Или въведете точен брой поръчки дневно:
            </label>
            <input
              type="number"
              value={customDailyOrders}
              onChange={(e) => {
                setCustomDailyOrders(e.target.value);
                setFormData({...formData, dailyOrders: e.target.value});
              }}
              placeholder="напр. 25"
              min="1"
              max="200"
              className="w-full px-6 py-4 bg-black/50 border border-green-400/30 rounded-xl text-white text-lg focus:border-green-400 focus:outline-none"
            />
          </div>
        </div>
      )
    },
    // Question 5: Average Order Value (Step 5)
    {
      title: "Каква е средната стойност на поръчката ви за доставка?",
      subtitle: "Изберете най-близкия вариант или въведете точна сума",
      content: (
        <div className="py-8 space-y-4">
          {avgOrderValueOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setFormData({...formData, avgOrderValue: option.value});
                setCustomAvgOrderValue("");
              }}
              className={`w-full p-4 rounded-xl border text-left transition-all ${
                formData.avgOrderValue === option.value
                  ? 'border-green-400 bg-green-400/10 text-green-400'
                  : 'border-gray-600 bg-black/30 text-gray-300 hover:border-green-400/50'
              }`}
            >
              <div className="text-lg font-semibold">{option.label}</div>
            </button>
          ))}
          <div className="mt-6">
            <label className="block text-green-400 font-semibold mb-2">
              Или въведете точна средна стойност (в лева):
            </label>
            <input
              type="number"
              value={customAvgOrderValue}
              onChange={(e) => {
                setCustomAvgOrderValue(e.target.value);
                setFormData({...formData, avgOrderValue: e.target.value});
              }}
              placeholder="напр. 35"
              min="5"
              max="300"
              className="w-full px-6 py-4 bg-black/50 border border-green-400/30 rounded-xl text-white text-lg focus:border-green-400 focus:outline-none"
            />
          </div>
        </div>
      )
    },
    // Question 6: Contact Info (Step 6)
    {
      title: "Къде да изпратим персонализирания ви Glovo анализ?",
      content: (
        <div className="py-8 space-y-6">
          <div>
            <label className="block text-green-400 font-semibold mb-2">
              <Mail className="inline w-4 h-4 mr-2" />
              Имейл адрес *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="your@email.com"
              className={`w-full px-6 py-4 bg-black/50 border rounded-xl text-white text-lg focus:outline-none ${
                formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
                  ? 'border-red-400 focus:border-red-400'
                  : 'border-green-400/30 focus:border-green-400'
              }`}
              required
            />
          </div>
          <div>
            <label className="block text-green-400 font-semibold mb-2">
              <Phone className="inline w-4 h-4 mr-2" />
              Телефон *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="0888 123 456 или +359888123456"
              className={`w-full px-6 py-4 bg-black/50 border rounded-xl text-white text-lg focus:outline-none ${
                formData.phone.trim() && !/^(\+359|0)[0-9]{8,9}$/.test(formData.phone.trim())
                  ? 'border-red-400 focus:border-red-400'
                  : 'border-green-400/30 focus:border-green-400'
              }`}
              required
            />
          </div>
          {getValidationMessage() && (
            <div className="text-red-400 text-sm bg-red-400/10 border border-red-400/30 rounded-lg p-3">
              ⚠️ {getValidationMessage()}
            </div>
          )}
          <div className="text-sm text-gray-400 bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
            💡 Ще ви изпратим доклада по имейл до 5 мин. Може да се свържем с допълнителни съвети за пестене на пари.
          </div>
        </div>
      )
    },
    // Processing Screen (Step 5)
    {
      title: "Изчисляваме вашия Glovo анализ...",
      subtitle: "Моля, изчакайте докато обработваме данните",
      content: (
        <div className="text-center py-8">
          <div className="mb-8">
            <div className="animate-spin w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-xl text-gray-300">
              Анализираме вашите данни и подготвяме персонализиран доклад...
            </p>
          </div>
        </div>
      )
    },
    // Thank You Screen (Step 6)
    {
      title: "Вашият Glovo анализ се изчислява...",
      subtitle: "Проверете имейла си след 2 минути!",
      content: (
        <div className="text-center py-8">
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-4" />
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Благодарим ви! Вашият персонализиран Glovo анализ ще бъде изпратен до <strong className="text-green-400">{formData.email}</strong>
            </p>
            <div className="bg-green-400/10 border border-green-400/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-400 mb-2">Какво ще получите:</h3>
              <ul className="text-left text-gray-300 space-y-2">
                <li>✅ Точната сума, която плащате на Glovo месечно</li>
                <li>✅ Персонализиран план за намаляване на разходите</li>
                <li>✅ Сравнение с директни поръчки</li>
                <li>✅ Стъпки за 60% намаляване на Glovo зависимостта</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // Step 7 - Success/Processing Screen
    {
      title: "Изчисляваме вашия Glovo анализ...",
      subtitle: "Моля, изчакайте докато обработваме данните",
      content: (
        <div className="text-center py-12">
          {/* Loading Animation */}
          <div className="mb-12">
            <div className="relative inline-block">
              {/* Outer spinning ring */}
              <div className="w-24 h-24 border-4 border-yellow-400/30 rounded-full animate-spin border-t-yellow-400 mx-auto"></div>
              {/* Inner pulsing circle */}
              <div className="absolute inset-4 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Processing Steps */}
          <div className="space-y-6 max-w-lg mx-auto mb-12">
            <div className="flex items-center space-x-4 text-left">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">Данните получени</div>
                <div className="text-sm text-gray-400">Вашата информация е успешно записана</div>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-left">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
              <div>
                <div className="font-semibold text-white">Анализираме вашите данни</div>
                <div className="text-sm text-gray-400">Изчисляваме Glovo разходи и потенциални спестявания</div>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-left opacity-60">
              <div className="w-8 h-8 border-2 border-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 border border-gray-600 rounded-full"></div>
              </div>
              <div>
                <div className="font-semibold text-gray-300">Подготвяме персонализиран доклад</div>
                <div className="text-sm text-gray-500">Създаваме план за намаляване на зависимостта</div>
              </div>
            </div>
          </div>

          {/* Email Instructions */}
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-400/30 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Mail className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-bold text-white">Резултатите се обработват</h3>
            </div>
            
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <p className="text-white font-medium">Очаквайте имейл до 5 минути!</p>
                  <p className="text-gray-300 text-sm">Ще получите пълен анализ на {formData.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black text-sm font-bold">2</span>
                </div>
                <div>
                  <p className="text-white font-medium">Проверете СПАМ папката си</p>
                  <p className="text-gray-300 text-sm">Ако не получите съобщение до 5 минути</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-3 h-3 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Обаждаме се в удобно за вас време</p>
                  <p className="text-gray-300 text-sm">За персонализирана консултация на {formData.phone}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-green-400/20">
              <p className="text-center text-green-400 font-bold text-lg">
                🎁 Комплектът за Независимост на Ресторанта е на път!
              </p>
              <p className="text-center text-gray-300 text-sm mt-2">
                Стойност 450лв - безплатно за вас днес
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-[600px] relative">
      {/* Progress Bar */}
      {currentStep > 0 && currentStep < 7 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Прогрес</span>
            <span className="text-sm text-green-400">{currentStep}/6</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-green-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / 6) * 100}%` }}
            ></div>
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
          className="text-center"
        >
          <PravdaHeading as="h2" size="2xl" className="md:text-3xl mb-4">
            {currentStepData.title}
          </PravdaHeading>
          <p className="text-gray-400 mb-8">
            {currentStepData.subtitle}
          </p>
          
          {currentStepData.content}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      {currentStep > 0 && currentStep < 7 && !isSubmitted && (
        <div className="flex justify-between items-center mt-8">
          <Button
            onClick={prevStep}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400"
          >
            <ChevronLeft className="mr-2 w-4 h-4" />
            Назад
          </Button>

          {currentStep === 6 ? (
            <Button
              onClick={submitToAirtable}
              disabled={!isStepValid() || isSubmitting}
              className="bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:opacity-90 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-black border-t-transparent rounded-full mr-2"></div>
                  Изпращане...
                </>
              ) : (
                <>
                  Получи анализа
                  <ChevronRight className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              disabled={!isStepValid()}
              className="bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:opacity-90 disabled:opacity-50"
            >
              Напред
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
};