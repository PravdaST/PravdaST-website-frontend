import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const LeadCaptureForm = ({ onFormSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessCategory: '',
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    city: '',
    currentWebsite: '',
    timeline: '',
    budget: '',
    specificNeeds: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const businessCategories = [
    { value: 'restaurant', label: 'Ресторант' },
    { value: 'cafe', label: 'Кафе/Бар' },
    { value: 'beauty', label: 'Салон за красота' },
    { value: 'auto', label: 'Автосервиз' },
    { value: 'legal', label: 'Юридически услуги' },
    { value: 'accounting', label: 'Счетоводни услуги' },
    { value: 'medical', label: 'Медицински услуги' },
    { value: 'fitness', label: 'Фитнес/Спорт' },
    { value: 'retail', label: 'Търговия на дребно' },
    { value: 'other', label: 'Друго' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'Възможно най-скоро' },
    { value: 'week', label: 'В рамките на седмица' },
    { value: 'month', label: 'В рамките на месец' },
    { value: 'later', label: 'Все още планирам' }
  ];

  const budgetOptions = [
    { value: 'standard', label: '299 лв - Стандартен пакет' },
    { value: 'premium', label: '499 лв - Премиум пакет' },
    { value: 'custom', label: 'Персонализирано решение' }
  ];

  const cities = [
    { value: 'sofia', label: 'София' },
    { value: 'plovdiv', label: 'Пловдив' },
    { value: 'varna', label: 'Варна' },
    { value: 'burgas', label: 'Бургас' },
    { value: 'ruse', label: 'Русе' },
    { value: 'stara-zagora', label: 'Стара Загора' },
    { value: 'pleven', label: 'Плевен' },
    { value: 'sliven', label: 'Сливен' },
    { value: 'other', label: 'Друг град' }
  ];

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData?.businessCategory) newErrors.businessCategory = 'Изберете категория бизнес';
      if (!formData?.businessName?.trim()) newErrors.businessName = 'Въведете име на бизнеса';
    }

    if (step === 2) {
      if (!formData?.ownerName?.trim()) newErrors.ownerName = 'Въведете вашето име';
      if (!formData?.email?.trim()) newErrors.email = 'Въведете имейл адрес';
      else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Невалиден имейл адрес';
      if (!formData?.phone?.trim()) newErrors.phone = 'Въведете телефонен номер';
      else if (!/^(\+359|0)[0-9]{8,9}$/?.test(formData?.phone?.replace(/\s/g, ''))) {
        newErrors.phone = 'Невалиден български телефонен номер';
      }
      if (!formData?.city) newErrors.city = 'Изберете град';
    }

    if (step === 3) {
      if (!formData?.timeline) newErrors.timeline = 'Изберете времеви период';
      if (!formData?.budget) newErrors.budget = 'Изберете бюджет';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      onFormSubmit && onFormSubmit(formData);
      setIsSubmitting(false);
      // Reset form or show success message
    }, 2000);
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Разкажете ни за вашия бизнес';
      case 2: return 'Как да се свържем с вас?';
      case 3: return 'Финални детайли';
      default: return '';
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 1: return 'Помогнете ни да разберем какъв тип сайт ви трябва';
      case 2: return 'Нужни са ни вашите данни за контакт';
      case 3: return 'Последни въпроси за персонализиране';
      default: return '';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Получете вашия сайт за 24 часа
          </h2>
          <p className="text-xl text-text-secondary">
            Попълнете формата и ще се свържем с вас в рамките на 1 час
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-elevation-2 overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-gray-50 px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3]?.map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step <= currentStep 
                      ? 'bg-primary text-white' :'bg-gray-200 text-text-secondary'
                  }`}>
                    {step < currentStep ? (
                      <Icon name="Check" size={20} />
                    ) : (
                      step
                    )}
                  </div>
                  {step < 3 && (
                    <div className={`w-20 h-1 mx-4 ${
                      step < currentStep ? 'bg-primary' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-text-primary">{getStepTitle()}</h3>
              <p className="text-text-secondary">{getStepDescription()}</p>
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8">
            {/* Step 1: Business Info */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <Select
                  label="Тип на бизнеса"
                  options={businessCategories}
                  value={formData?.businessCategory}
                  onChange={(value) => handleInputChange('businessCategory', value)}
                  error={errors?.businessCategory}
                  placeholder="Изберете категория"
                  required
                />

                <Input
                  label="Име на бизнеса"
                  type="text"
                  value={formData?.businessName}
                  onChange={(e) => handleInputChange('businessName', e?.target?.value)}
                  error={errors?.businessName}
                  placeholder="напр. Ресторант 'Старата къща'"
                  required
                />

                <Input
                  label="Имате ли съществуващ сайт? (незадължително)"
                  type="url"
                  value={formData?.currentWebsite}
                  onChange={(e) => handleInputChange('currentWebsite', e?.target?.value)}
                  placeholder="https://example.com"
                />
              </div>
            )}

            {/* Step 2: Contact Info */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <Input
                  label="Вашето име"
                  type="text"
                  value={formData?.ownerName}
                  onChange={(e) => handleInputChange('ownerName', e?.target?.value)}
                  error={errors?.ownerName}
                  placeholder="Георги Петров"
                  required
                />

                <Input
                  label="Имейл адрес"
                  type="email"
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  error={errors?.email}
                  placeholder="georgi@example.com"
                  required
                />

                <Input
                  label="Телефонен номер"
                  type="tel"
                  value={formData?.phone}
                  onChange={(e) => handleInputChange('phone', e?.target?.value)}
                  error={errors?.phone}
                  placeholder="+359 888 123 456"
                  required
                />

                <Select
                  label="Град"
                  options={cities}
                  value={formData?.city}
                  onChange={(value) => handleInputChange('city', value)}
                  error={errors?.city}
                  placeholder="Изберете град"
                  required
                />
              </div>
            )}

            {/* Step 3: Project Details */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <Select
                  label="Кога искате да стартирате?"
                  options={timelineOptions}
                  value={formData?.timeline}
                  onChange={(value) => handleInputChange('timeline', value)}
                  error={errors?.timeline}
                  placeholder="Изберете времеви период"
                  required
                />

                <Select
                  label="Бюджет"
                  options={budgetOptions}
                  value={formData?.budget}
                  onChange={(value) => handleInputChange('budget', value)}
                  error={errors?.budget}
                  placeholder="Изберете бюджет"
                  required
                />

                <Input
                  label="Специфични нужди (незадължително)"
                  type="text"
                  value={formData?.specificNeeds}
                  onChange={(e) => handleInputChange('specificNeeds', e?.target?.value)}
                  placeholder="напр. онлайн поръчки, резервации, галерия"
                />
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              {currentStep > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  iconName="ChevronLeft"
                  iconPosition="left"
                >
                  Назад
                </Button>
              ) : (
                <div />
              )}

              {currentStep < 3 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  iconName="ChevronRight"
                  iconPosition="right"
                >
                  Напред
                </Button>
              ) : (
                <Button
                  type="submit"
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  className="bg-success hover:bg-success/90"
                >
                  {isSubmitting ? 'Изпращане...' : 'Изпрати заявката'}
                </Button>
              )}
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center space-y-2">
            <Icon name="Clock" size={32} className="text-primary mx-auto" />
            <h4 className="font-bold text-text-primary">Отговор за 1 час</h4>
            <p className="text-sm text-text-secondary">
              Ще се свържем с вас в рамките на 1 час
            </p>
          </div>
          <div className="text-center space-y-2">
            <Icon name="Shield" size={32} className="text-success mx-auto" />
            <h4 className="font-bold text-text-primary">Без ангажимент</h4>
            <p className="text-sm text-text-secondary">
              Безплатна консултация и оферта
            </p>
          </div>
          <div className="text-center space-y-2">
            <Icon name="Award" size={32} className="text-accent mx-auto" />
            <h4 className="font-bold text-text-primary">Гарантирано качество</h4>
            <p className="text-sm text-text-secondary">
              30-дневна гаранция за възстановяване
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;