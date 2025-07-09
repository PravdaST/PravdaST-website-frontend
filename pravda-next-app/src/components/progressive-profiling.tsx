import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Gift, TrendingUp, Users, Target } from "lucide-react";
import { updateUserProfile, getLeadScore } from "@/lib/tracking";

interface ProgressiveProfilingProps {
  trigger?: 'time' | 'scroll' | 'exit_intent' | 'engagement';
  delay?: number;
  showOnce?: boolean;
}

export function ProgressiveProiling({ 
  trigger = 'time', 
  delay = 30000, 
  showOnce = true 
}: ProgressiveProfilingProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    website: '',
    industry: '',
    company_size: '',
    role: '',
    budget_range: '',
    pain_points: [] as string[],
    interests: [] as string[]
  });
  const [leadScore, setLeadScore] = useState(0);

  useEffect(() => {
    // Check if user has already seen this
    if (showOnce && localStorage.getItem('pravdast_profiling_completed')) {
      return;
    }

    // Trigger based on type
    const triggerProfiling = () => {
      switch (trigger) {
        case 'time':
          setTimeout(() => setIsVisible(true), delay);
          break;
        case 'scroll':
          const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.5) {
              setIsVisible(true);
              window.removeEventListener('scroll', handleScroll);
            }
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        case 'exit_intent':
          const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0) {
              setIsVisible(true);
              document.removeEventListener('mouseleave', handleMouseLeave);
            }
          };
          document.addEventListener('mouseleave', handleMouseLeave);
          return () => document.removeEventListener('mouseleave', handleMouseLeave);
        case 'engagement':
          // Show after user interacts with multiple elements
          let interactions = 0;
          const trackInteraction = () => {
            interactions++;
            if (interactions >= 3) {
              setIsVisible(true);
              document.removeEventListener('click', trackInteraction);
            }
          };
          document.addEventListener('click', trackInteraction);
          return () => document.removeEventListener('click', trackInteraction);
      }
    };

    triggerProfiling();
  }, [trigger, delay, showOnce]);

  useEffect(() => {
    // Update lead score when form data changes
    const score = calculateLeadScore(formData);
    setLeadScore(score);
  }, [formData]);

  const calculateLeadScore = (data: typeof formData) => {
    let score = 0;
    if (data.email) score += 20;
    if (data.company) score += 15;
    if (data.website) score += 10;
    if (data.industry) score += 10;
    if (data.role?.includes('CEO') || data.role?.includes('Owner')) score += 25;
    if (data.budget_range === 'high') score += 20;
    return Math.min(score, 100);
  };

  const handleSubmit = async () => {
    // Update user profile with collected data
    await updateUserProfile(formData);
    
    // Mark as completed
    if (showOnce) {
      localStorage.setItem('pravdast_profiling_completed', 'true');
    }
    
    // Close modal
    setIsVisible(false);
    
    // Track completion
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'CompleteRegistration', {
        content_name: 'Progressive Profiling',
        value: leadScore
      });
    }
  };

  const handleSkip = () => {
    setIsVisible(false);
    if (showOnce) {
      localStorage.setItem('pravdast_profiling_skipped', 'true');
    }
  };

  const stepContent = {
    1: {
      title: "Безплатен Business Audit",
      subtitle: "Получете персонализирана оценка на вашия бизнес потенциал",
      icon: <Gift className="w-6 h-6 text-[#ECB629]" />,
      fields: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-white">Имейл адрес *</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-slate-700 border-slate-600 text-white"
              required
            />
          </div>
          <div>
            <Label htmlFor="company" className="text-white">Компания *</Label>
            <Input
              id="company"
              placeholder="Име на компанията"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="bg-slate-700 border-slate-600 text-white"
              required
            />
          </div>
        </div>
      )
    },
    2: {
      title: "Още няколко въпроса",
      subtitle: "Помогнете ни да персонализираме препоръките",
      icon: <TrendingUp className="w-6 h-6 text-[#ECB629]" />,
      fields: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="website" className="text-white">Уебсайт</Label>
            <Input
              id="website"
              type="url"
              placeholder="https://company.com"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="industry" className="text-white">Индустрия</Label>
            <Select value={formData.industry} onValueChange={(value) => setFormData({ ...formData, industry: value })}>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Изберете индустрия" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="b2b-services">B2B Услуги</SelectItem>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="saas">SaaS</SelectItem>
                <SelectItem value="manufacturing">Производство</SelectItem>
                <SelectItem value="consulting">Консултиране</SelectItem>
                <SelectItem value="healthcare">Здравеопазване</SelectItem>
                <SelectItem value="education">Образование</SelectItem>
                <SelectItem value="finance">Финанси</SelectItem>
                <SelectItem value="real-estate">Недвижими имоти</SelectItem>
                <SelectItem value="other">Друго</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )
    },
    3: {
      title: "Последни детайли",
      subtitle: "Финализираме вашия профил за най-добри препоръки",
      icon: <Target className="w-6 h-6 text-[#ECB629]" />,
      fields: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="role" className="text-white">Позиция в компанията</Label>
            <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Изберете позиция" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ceo">CEO / Собственик</SelectItem>
                <SelectItem value="marketing-director">Маркетинг директор</SelectItem>
                <SelectItem value="sales-director">Продажби директор</SelectItem>
                <SelectItem value="marketing-manager">Маркетинг мениджър</SelectItem>
                <SelectItem value="business-owner">Бизнес собственик</SelectItem>
                <SelectItem value="other">Друго</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="company-size" className="text-white">Размер на компанията</Label>
            <Select value={formData.company_size} onValueChange={(value) => setFormData({ ...formData, company_size: value })}>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Брой служители" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-5">1-5 служители</SelectItem>
                <SelectItem value="6-20">6-20 служители</SelectItem>
                <SelectItem value="21-50">21-50 служители</SelectItem>
                <SelectItem value="51-100">51-100 служители</SelectItem>
                <SelectItem value="100+">100+ служители</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )
    }
  };

  const currentStep = stepContent[step as keyof typeof stepContent];
  const canProceed = step === 1 ? formData.email && formData.company : true;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && handleSkip()}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-lg"
          >
            <Card className="bg-slate-800 border-slate-700 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-[#ECB629] rounded-full"
                      initial={{ 
                        x: Math.random() * 400, 
                        y: Math.random() * 300,
                        scale: 0 
                      }}
                      animate={{ 
                        y: [null, -10, 0],
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleSkip}
                className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
              >
                <X className="w-4 h-4" />
              </Button>

              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  {currentStep.icon}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#ECB629] text-sm font-medium">Стъпка {step} от 3</span>
                      {leadScore > 0 && (
                        <span className="text-green-500 text-sm">Score: {leadScore}</span>
                      )}
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-1">
                      <div 
                        className="bg-[#ECB629] h-1 rounded-full transition-all duration-300"
                        style={{ width: `${(step / 3) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-white text-xl">{currentStep.title}</CardTitle>
                <p className="text-gray-400 text-sm">{currentStep.subtitle}</p>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="mb-6">
                  {currentStep.fields}
                </div>

                <div className="flex gap-3">
                  {step > 1 && (
                    <Button
                      variant="outline"
                      onClick={() => setStep(step - 1)}
                      className="flex-1"
                    >
                      Назад
                    </Button>
                  )}
                  
                  {step < 3 ? (
                    <Button
                      onClick={() => setStep(step + 1)}
                      disabled={!canProceed}
                      className="flex-1 bg-[#ECB629] text-black hover:bg-[#ECB629]/90"
                    >
                      Продължи
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      className="flex-1 bg-[#ECB629] text-black hover:bg-[#ECB629]/90"
                    >
                      Получи безплатния audit
                    </Button>
                  )}
                </div>

                <div className="mt-4 text-center">
                  <button 
                    onClick={handleSkip}
                    className="text-gray-400 hover:text-white text-sm underline"
                  >
                    Пропусни засега
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Hook for easy integration
export function useProgressiveProfiling(options?: ProgressiveProfilingProps) {
  return <ProgressiveProiling {...options} />;
}