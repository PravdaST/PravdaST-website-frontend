import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const LeadGenerationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 - Business Info
    businessName: '',
    businessType: '',
    businessAddress: '',
    hasWebsite: '',
    
    // Step 2 - Contact Info
    ownerName: '',
    email: '',
    phone: '',
    preferredContact: '',
    
    // Step 3 - Package Selection
    selectedPackage: 'standard',
    additionalServices: [],
    urgency: '',
    budget: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const businessTypes = [
    { value: 'restaurant', label: 'Ресторант' },
    { value: 'cafe', label: 'Кафе/Бар' },
    { value: 'beauty', label: 'Салон за красота' },
    { value: 'service', label: 'Услуги (автосервиз, ремонти и др.)' },
    { value: 'retail', label: 'Магазин' },
    { value: 'medical', label: 'Медицински услуги' },
    { value: 'other', label: 'Друго' }
  ];

  const contactPreferences = [
    { value: 'phone', label: 'Телефон' },
    { value: 'email', label: 'Имейл' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'viber', label: 'Viber' }
  ];

  const packages = [
    {
      id: 'basic',
      name: 'Основен',
      price: '199 лв',
      features: ['Основна информация', 'Контакти', 'Карта', 'Мобилна версия'],
      popular: false
    },
    {
      id: 'standard',
      name: 'Стандартен',
      price: '299 лв',
      features: ['QR меню система', 'Галерия', 'SEO оптимизация', 'Социални мрежи', 'Всичко от Основен'],
      popular: true
    },
    {
      id: 'premium',
      name: 'Премиум',
      price: '399 лв',
      features: ['Онлайн резервации', 'Аналитика', 'Чат поддръжка', 'Персонализиран дизайн', 'Всичко от Стандартен'],
      popular: false
    }
  ];

  const additionalServices = [
    { value: 'photography', label: 'Професионална фотография', price: '150 лв' },
    { value: 'copywriting', label: 'Писане на съдържание', price: '100 лв' },
    { value: 'social_setup', label: 'Настройка социални мрежи', price: '80 лв' },
    { value: 'training', label: 'Обучение за управление', price: '120 лв' }
  ];

  const urgencyOptions = [
    { value: 'asap', label: 'Възможно най-скоро (24ч)' },
    { value: 'week', label: 'В рамките на седмица' },
    { value: 'month', label: 'В рамките на месец' },
    { value: 'flexible', label: 'Гъвкав график' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleAdditionalServiceChange = (service, checked) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        additionalServices: [...prev?.additionalServices, service]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        additionalServices: prev?.additionalServices?.filter(s => s !== service)
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData?.businessName?.trim()) newErrors.businessName = 'Моля въведете име на бизнеса';
      if (!formData?.businessType) newErrors.businessType = 'Моля изберете тип бизнес';
      if (!formData?.businessAddress?.trim()) newErrors.businessAddress = 'Моля въведете адрес';
      if (!formData?.hasWebsite) newErrors.hasWebsite = 'Моля отговорете на въпроса';
    }

    if (step === 2) {
      if (!formData?.ownerName?.trim()) newErrors.ownerName = 'Моля въведете вашето име';
      if (!formData?.email?.trim()) newErrors.email = 'Моля въведете имейл';
      else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Невалиден имейл адрес';
      if (!formData?.phone?.trim()) newErrors.phone = 'Моля въведете телефон';
      if (!formData?.preferredContact) newErrors.preferredContact = 'Моля изберете начин за контакт';
    }

    if (step === 3) {
      if (!formData?.selectedPackage) newErrors.selectedPackage = 'Моля изберете пакет';
      if (!formData?.urgency) newErrors.urgency = 'Моля изберете срок';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(4); // Success step
    }, 2000);
  };

  const calculateTotal = () => {
    const packagePrice = packages?.find(p => p?.id === formData?.selectedPackage)?.price || '299 лв';
    const basePrice = parseInt(packagePrice?.replace(' лв', ''));
    const additionalPrice = formData?.additionalServices?.reduce((total, service) => {
      const serviceObj = additionalServices?.find(s => s?.value === service);
      return total + (serviceObj ? parseInt(serviceObj?.price?.replace(' лв', '')) : 0);
    }, 0);
    
    return basePrice + additionalPrice;
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">Информация за бизнеса</h3>
        <p className="text-muted-foreground">Разкажете ни за вашия бизнес</p>
      </div>

      <Input
        label="Име на бизнеса"
        placeholder="напр. Ресторант 'Старата къща'"
        value={formData?.businessName}
        onChange={(e) => handleInputChange('businessName', e?.target?.value)}
        error={errors?.businessName}
        required
      />

      <Select
        label="Тип бизнес"
        placeholder="Изберете тип бизнес"
        options={businessTypes}
        value={formData?.businessType}
        onChange={(value) => handleInputChange('businessType', value)}
        error={errors?.businessType}
        required
      />

      <Input
        label="Адрес на бизнеса"
        placeholder="напр. ул. Витоша 15, София"
        value={formData?.businessAddress}
        onChange={(e) => handleInputChange('businessAddress', e?.target?.value)}
        error={errors?.businessAddress}
        required
      />

      <div>
        <label className="block text-sm font-semibold text-foreground mb-3">
          Имате ли вече уебсайт? *
        </label>
        <div className="space-y-2">
          {[
            { value: 'no', label: 'Не, нямам уебсайт' },
            { value: 'old', label: 'Да, но е остарял и не работи добре' },
            { value: 'social', label: 'Само Facebook/Instagram страница' }
          ]?.map((option) => (
            <label key={option?.value} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="hasWebsite"
                value={option?.value}
                checked={formData?.hasWebsite === option?.value}
                onChange={(e) => handleInputChange('hasWebsite', e?.target?.value)}
                className="w-4 h-4 text-accent"
              />
              <span className="text-foreground">{option?.label}</span>
            </label>
          ))}
        </div>
        {errors?.hasWebsite && <p className="text-error text-sm mt-1">{errors?.hasWebsite}</p>}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">Контактна информация</h3>
        <p className="text-muted-foreground">Как можем да се свържем с вас?</p>
      </div>

      <Input
        label="Вашето име"
        placeholder="напр. Иван Петров"
        value={formData?.ownerName}
        onChange={(e) => handleInputChange('ownerName', e?.target?.value)}
        error={errors?.ownerName}
        required
      />

      <Input
        label="Имейл адрес"
        type="email"
        placeholder="ivan@example.com"
        value={formData?.email}
        onChange={(e) => handleInputChange('email', e?.target?.value)}
        error={errors?.email}
        required
      />

      <Input
        label="Телефон"
        type="tel"
        placeholder="0888 123 456"
        value={formData?.phone}
        onChange={(e) => handleInputChange('phone', e?.target?.value)}
        error={errors?.phone}
        required
      />

      <Select
        label="Предпочитан начин за контакт"
        placeholder="Как предпочитате да се свържем?"
        options={contactPreferences}
        value={formData?.preferredContact}
        onChange={(value) => handleInputChange('preferredContact', value)}
        error={errors?.preferredContact}
        required
      />

      <div className="bg-muted rounded-xl p-4">
        <div className="flex items-start space-x-3">
          <Icon name="Shield" size={20} className="text-success mt-1" />
          <div>
            <h4 className="font-semibold text-foreground mb-1">Защита на данните</h4>
            <p className="text-sm text-muted-foreground">
              Вашите данни са защитени и няма да бъдат споделяни с трети страни. 
              Използваме ги само за контакт относно вашия проект.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">Изберете пакет</h3>
        <p className="text-muted-foreground">Кой пакет най-добре отговаря на нуждите ви?</p>
      </div>

      {/* Packages */}
      <div className="grid md:grid-cols-3 gap-6">
        {packages?.map((pkg) => (
          <div
            key={pkg?.id}
            onClick={() => handleInputChange('selectedPackage', pkg?.id)}
            className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
              formData?.selectedPackage === pkg?.id
                ? 'border-accent bg-accent/5 scale-105' :'border-muted hover:border-muted-foreground'
            }`}
          >
            {pkg?.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Най-популярен
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-foreground mb-2">{pkg?.name}</h4>
              <div className="text-3xl font-bold text-accent mb-4">{pkg?.price}</div>
            </div>

            <ul className="space-y-3">
              {pkg?.features?.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {formData?.selectedPackage === pkg?.id && (
              <div className="absolute top-4 right-4">
                <Icon name="CheckCircle" size={24} className="text-accent" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Services */}
      <div>
        <h4 className="text-lg font-bold text-foreground mb-4">Допълнителни услуги (по избор)</h4>
        <div className="space-y-3">
          {additionalServices?.map((service) => (
            <div key={service?.value} className="flex items-center justify-between p-4 bg-muted rounded-xl">
              <div className="flex items-center space-x-3">
                <Checkbox
                  checked={formData?.additionalServices?.includes(service?.value)}
                  onChange={(e) => handleAdditionalServiceChange(service?.value, e?.target?.checked)}
                />
                <div>
                  <div className="font-medium text-foreground">{service?.label}</div>
                  <div className="text-sm text-muted-foreground">+{service?.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Urgency */}
      <Select
        label="Кога искате да е готов сайтът?"
        placeholder="Изберете срок"
        options={urgencyOptions}
        value={formData?.urgency}
        onChange={(value) => handleInputChange('urgency', value)}
        error={errors?.urgency}
        required
      />

      {/* Total */}
      <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-6">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-lg font-bold text-foreground">Обща сума</h4>
            <p className="text-sm text-muted-foreground">Еднократно плащане</p>
          </div>
          <div className="text-3xl font-bold text-accent">
            {calculateTotal()} лв
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="text-center space-y-8">
      <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto">
        <Icon name="CheckCircle" size={40} color="white" />
      </div>

      <div>
        <h3 className="text-3xl font-bold text-foreground mb-4">Благодарим ви!</h3>
        <p className="text-xl text-muted-foreground mb-6">
          Заявката ви е получена успешно
        </p>
      </div>

      <div className="bg-muted rounded-2xl p-6 max-w-md mx-auto">
        <h4 className="font-bold text-foreground mb-4">Следващи стъпки:</h4>
        <div className="space-y-3 text-left">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
            <span className="text-sm text-foreground">Ще се свържем с вас до 2 часа</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
            <span className="text-sm text-foreground">Обсъждаме детайлите и започваме работа</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
            <span className="text-sm text-foreground">Сайтът ви е готов за 24 часа</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-accent to-primary rounded-2xl p-6 text-white">
        <h4 className="font-bold mb-2">Специална оферта!</h4>
        <p className="text-white/90">
          Като нов клиент получавате 20% отстъпка от допълнителните услуги
        </p>
      </div>
    </div>
  );

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted via-white to-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Започнете <span className="text-accent">днес</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Попълнете формата и получете готов сайт за 24 часа
          </p>
        </div>

        <div className="bg-white rounded-3xl conversion-shadow overflow-hidden">
          {/* Progress Bar */}
          {currentStep <= 3 && (
            <div className="bg-muted p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-foreground">
                  Стъпка {currentStep} от 3
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round((currentStep / 3) * 100)}% завършено
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-accent h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Form Content */}
          <div className="p-8">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            {currentStep === 4 && renderStep4()}
          </div>

          {/* Navigation */}
          {currentStep <= 3 && (
            <div className="bg-muted p-6 flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                iconName="ChevronLeft"
                iconPosition="left"
              >
                Назад
              </Button>

              {currentStep < 3 ? (
                <Button
                  onClick={handleNext}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  iconName="ChevronRight"
                  iconPosition="right"
                >
                  Напред
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  loading={isSubmitting}
                  className="bg-success hover:bg-success/90 text-success-foreground"
                  iconName="Send"
                  iconPosition="right"
                >
                  {isSubmitting ? 'Изпращане...' : 'Изпрати заявка'}
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        {currentStep <= 3 && (
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Shield" size={20} className="text-success" />
              <span className="text-sm text-muted-foreground">Защитени данни</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Clock" size={20} className="text-accent" />
              <span className="text-sm text-muted-foreground">24ч доставка</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="RefreshCw" size={20} className="text-primary" />
              <span className="text-sm text-muted-foreground">Гаранция за връщане</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadGenerationForm;