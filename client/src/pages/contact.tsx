import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { UnifiedCTASection } from "@/components/unified-cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "wouter";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";
import { SEOHead } from "@/components/seo-head";
import { pageSEOData } from "@/data/seo-pages";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Името трябва да съдържа поне 2 символа"),
  email: z.string().email("Невалиден имейл адрес"),
  website: z.string().url("Моля въведете валиден URL (напр. https://example.com)"),
  company: z.string().optional(),
  message: z.string().min(10, "Съобщението трябва да съдържа поне 10 символа")
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: "Имейл",
    info: "contact@pravdagency.eu",
    description: "Отговаряме в рамките на 24 часа"
  },
  {
    icon: Phone,
    title: "Телефон",
    info: "+359 879 282 299",
    description: "Работни дни: 9:00 - 18:00"
  },
  {
    icon: MapPin,
    title: "Офис",
    info: "ул. Дебър №58, Варна",
    description: "Среща по предварително уговаряне"
  },
  {
    icon: Clock,
    title: "Работно време",
    info: "Понеделник - Петък",
    description: "09:00 - 18:00 (GMT+2)"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    website: "",
    company: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      console.log('Изпращане на данни:', data);
      return await apiRequest("/api/contacts", "POST", data);
    },
    onSuccess: (response) => {
      console.log('Успешен отговор:', response);
      toast({
        title: "Съобщението е изпратено!",
        description: "Благодарим ви! Ще се свържем с вас в най-скоро време.",
      });
      
      // Изчистване на формата
      setFormData({
        name: "",
        email: "",
        website: "",
        company: "",
        message: ""
      });
      setErrors({});
      
      // Invalidate контактните заявки
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
    },
    onError: (error: any) => {
      console.error('Грешка при изпращане:', error);
      toast({
        title: "Грешка при изпращане",
        description: "Моля опитайте отново или се свържете с нас директно.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Изчистване на грешката при промяна
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Валидация на данните
      const validatedData = contactSchema.parse(formData);
      
      // Изчистване на предишни грешки
      setErrors({});
      
      // Изпращане на данните
      contactMutation.mutate(validatedData);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<ContactFormData> = {};
        error.errors.forEach((err) => {
          const path = err.path[0] as keyof ContactFormData;
          newErrors[path] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead seo={pageSEOData.contact} pageSlug="contact" />
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}></div>
            
            {/* Floating elements */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#ECB629]/30 rounded-full"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + (i % 3) * 30}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Status Badge */}
                <motion.div
                  className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-slate-800/80 border border-slate-600/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <motion.div
                        className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full opacity-20"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    <span className="text-sm text-gray-300">
                      <span className="text-[#ECB629] font-bold">Безплатна</span> консултация
                    </span>
                  </div>
                </motion.div>

                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Готови за <br />
                  <span className="text-[#ECB629] relative">
                    разговор?
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Свържете се с нас за безплатна консултация. Ще обсъдим вашите цели и как можем да ви помогнем да ги постигнете. Разгледайте нашите{" "}
                  <Link href="/services">
                    <a className="text-[#ECB629] hover:underline cursor-pointer">бизнес системи</a>
                  </Link>{" "}
                  и{" "}
                  <Link href="/case-studies">
                    <a className="text-[#ECB629] hover:underline cursor-pointer">успешни проекти</a>
                  </Link>.
                </motion.p>

                {/* Contact Info Cards */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-[#ECB629]/30 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[#ECB629]/10 rounded-lg flex items-center justify-center">
                            <info.icon className="w-6 h-6 text-[#ECB629]" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                          <p className="text-[#ECB629] font-medium mb-1">{info.info}</p>
                          <p className="text-sm text-gray-400">{info.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Trust Indicators */}
                <motion.div 
                  className="grid grid-cols-3 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#ECB629] mb-1">24h</div>
                    <div className="text-sm text-gray-400">Отговор</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#ECB629] mb-1">0 лв.</div>
                    <div className="text-sm text-gray-400">Консултация</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#ECB629] mb-1">100%</div>
                    <div className="text-sm text-gray-400">Поверителност</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-white mb-2">Започнете разговора</h2>
                      <p className="text-gray-400">Попълнете формата и ще се свържем с вас до 24 часа</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-white">Име *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Вашето име"
                            className="mt-2 bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-[#ECB629]"
                            required
                          />
                          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                          <Label htmlFor="company" className="text-white">Компания</Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Име на компанията"
                            className="mt-2 bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-[#ECB629]"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-white">Имейл *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="mt-2 bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-[#ECB629]"
                          required
                        />
                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <Label htmlFor="website" className="text-white">Уебсайт *</Label>
                        <Input
                          id="website"
                          name="website"
                          type="url"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="https://yourwebsite.com"
                          className="mt-2 bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-[#ECB629]"
                          required
                        />
                        {errors.website && <p className="text-red-400 text-sm mt-1">{errors.website}</p>}
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-white">Съобщение *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Разкажете ни за вашия проект и целите..."
                          rows={5}
                          className="mt-2 bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-[#ECB629] resize-none"
                          required
                        />
                        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                      </div>

                      <Button
                        type="submit"
                        disabled={contactMutation.isPending}
                        className="w-full bg-[#ECB629] hover:bg-[#ECB629]/90 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {contactMutation.isPending ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                            Изпращане...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Изпратете съобщението
                          </div>
                        )}
                      </Button>

                      <div className="flex items-center gap-2 text-sm text-gray-400 mt-4">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Отговаряме в рамките на 24 часа
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Unified CTA Section */}
        <UnifiedCTASection 
          buttonText="Получете оферта"
          headline="Първата консултация е безплатна"
          description="Ще анализираме вашия бизнес и ще предложим конкретни решения за растеж. Без ангажименти, само резултати."
        />
      </main>
      
      <Footer />
    </div>
  );
}