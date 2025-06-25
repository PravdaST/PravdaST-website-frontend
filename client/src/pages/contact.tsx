import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
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
        <section className="py-20 relative overflow-hidden">
          {/* Animated Tech Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0">
              {/* Communication Grid Pattern */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, rgba(236, 182, 40, 0.1) 2px, transparent 2px),
                  radial-gradient(circle at 75% 75%, rgba(236, 182, 40, 0.1) 2px, transparent 2px)
                `,
                backgroundSize: '50px 50px'
              }}></div>
              
              {/* Connection Signals */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${25 + i * 25}%`,
                    top: `${30 + i * 10}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  <Send className="w-6 h-6 text-[#ECB629]" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <motion.div
                      className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full opacity-20"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">
                    <span className="text-[#ECB629] font-bold">Безплатна</span> консултация за всеки проект
                  </span>
                </div>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 text-white"
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
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Свържете се с нас за безплатна консултация. Ще обсъдим вашите цели и как можем да ви помогнем да ги постигнете.
              </motion.p>

              {/* Quick Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="text-lg font-bold text-[#ECB629] mb-1">24h</div>
                  <div className="text-sm text-gray-400">Отговор</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="text-lg font-bold text-[#ECB629] mb-1">0 лв.</div>
                  <div className="text-sm text-gray-400">Консултация</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 col-span-2 md:col-span-1">
                  <div className="text-lg font-bold text-[#ECB629] mb-1">100%</div>
                  <div className="text-sm text-gray-400">Конфиденциалност</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Ultra-Modern Contact Form & Info Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Ultra-Enhanced Background System */}
          <div className="absolute inset-0">
            {/* Advanced Grid Pattern */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(236, 182, 41, 0.1) 2px, transparent 2px),
                  linear-gradient(90deg, rgba(236, 182, 41, 0.1) 2px, transparent 2px),
                  linear-gradient(rgba(236, 182, 41, 0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(236, 182, 41, 0.05) 1px, transparent 1px)
                `,
                backgroundSize: '100px 100px, 100px 100px, 25px 25px, 25px 25px'
              }}></div>
            </div>

            {/* Dynamic Communication Flow Network */}
            <div className="absolute inset-0 opacity-20">
              {/* Message Stream Lines */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`message-stream-${i}`}
                  className="absolute bg-[#ECB629]/30 rounded-full"
                  style={{
                    left: `${8 + i * 8}%`,
                    top: `${20 + (i % 4) * 20}%`,
                    width: '3px',
                    height: '60px',
                    transformOrigin: 'center',
                  }}
                  animate={{
                    scaleY: [0.4, 1.8, 0.4],
                    opacity: [0.2, 0.8, 0.2],
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 4 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Communication Nodes */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={`comm-node-${i}`}
                  className="absolute rounded-full border-2 border-[#ECB629]/40"
                  style={{
                    left: `${5 + i * 6}%`,
                    top: `${10 + (i % 5) * 18}%`,
                    width: `${8 + (i % 3) * 4}px`,
                    height: `${8 + (i % 3) * 4}px`,
                  }}
                  animate={{
                    scale: [0.8, 1.6, 0.8],
                    opacity: [0.3, 0.9, 0.3],
                    borderWidth: [1, 3, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 5 + (i % 3),
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Contact Signal Cores */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`contact-signal-${i}`}
                  className="absolute w-10 h-10 rounded-full bg-gradient-to-r from-[#ECB629]/40 to-green-500/30"
                  style={{
                    left: `${12 + i * 16}%`,
                    top: `${15 + (i % 2) * 70}%`,
                  }}
                  animate={{
                    scale: [1, 2.4, 1],
                    opacity: [0.4, 0.9, 0.4],
                    boxShadow: [
                      '0 0 30px rgba(236,182,41,0.2)',
                      '0 0 60px rgba(236,182,41,0.6)',
                      '0 0 30px rgba(236,182,41,0.2)'
                    ],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 opacity-8">
              <motion.div 
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#ECB629]/40 to-green-500/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.3, 0.1],
                  x: [0, 30, 0],
                  y: [0, -15, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-l from-green-500/50 to-[#ECB629]/40 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.1, 0.25, 0.1],
                  x: [0, -25, 0],
                  y: [0, 20, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
              <motion.div 
                className="absolute top-1/2 right-1/3 w-56 h-56 bg-gradient-to-r from-blue-500/30 to-[#ECB629]/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.05, 0.2, 0.05],
                  rotate: [0, 360],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
              {/* Ultra-Premium Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Form glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-[#ECB629]/15 via-green-500/10 to-[#ECB629]/15 blur-2xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <Card className="relative overflow-hidden bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-700/50 border-2 border-slate-600/40 hover:border-[#ECB629]/50 transition-all duration-500 backdrop-blur-lg shadow-2xl rounded-[2rem]">
                  {/* Premium pattern overlay */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(45deg, rgba(236, 182, 41, 0.1) 25%, transparent 25%),
                        linear-gradient(-45deg, rgba(236, 182, 41, 0.1) 25%, transparent 25%),
                        linear-gradient(45deg, transparent 75%, rgba(236, 182, 41, 0.05) 75%),
                        linear-gradient(-45deg, transparent 75%, rgba(236, 182, 41, 0.05) 75%)
                      `,
                      backgroundSize: '60px 60px, 60px 60px, 60px 60px, 60px 60px',
                      backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
                    }}></div>
                  </div>

                  {/* Premium status badge */}
                  <div className="absolute top-6 right-6">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/40 to-[#ECB629]/40 blur-lg"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-[#ECB629]/20 border border-green-500/40 backdrop-blur-sm">
                        <motion.div 
                          className="w-3 h-3 bg-green-500 rounded-full"
                          animate={{
                            boxShadow: [
                              '0 0 10px rgba(34, 197, 94, 0.5)',
                              '0 0 20px rgba(34, 197, 94, 0.8)',
                              '0 0 10px rgba(34, 197, 94, 0.5)'
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-green-500 rounded-full"
                            animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                          />
                        </motion.div>
                        <span className="text-xs text-green-400 font-semibold uppercase tracking-wide">
                          24h ОТГОВОР
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  <CardContent className="p-10 relative z-10">
                    <div className="mb-8">
                      <motion.h2 
                        className="text-3xl font-bold text-white mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        Изпратете ни <span className="text-[#ECB629]">съобщение</span>
                      </motion.h2>
                      <motion.p 
                        className="text-gray-300 text-lg"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        Ще се свържем с вас в рамките на 24 часа
                      </motion.p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-white">Име *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-[#ECB629] ${
                              errors.name ? 'border-red-500' : ''
                            }`}
                            placeholder="Вашето име"
                          />
                          {errors.name && (
                            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="email" className="text-white">Имейл *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-[#ECB629] ${
                              errors.email ? 'border-red-500' : ''
                            }`}
                            placeholder="your@email.com"
                          />
                          {errors.email && (
                            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="website" className="text-white">Уебсайт *</Label>
                          <Input
                            id="website"
                            name="website"
                            type="url"
                            value={formData.website}
                            onChange={handleInputChange}
                            className={`bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-[#ECB629] ${
                              errors.website ? 'border-red-500' : ''
                            }`}
                            placeholder="https://your-website.com"
                          />
                          {errors.website && (
                            <p className="text-red-400 text-sm mt-1">{errors.website}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="company" className="text-white">Компания</Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-[#ECB629]"
                            placeholder="Вашата компания (по избор)"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-white">Съобщение *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className={`bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-[#ECB629] resize-none ${
                            errors.message ? 'border-red-500' : ''
                          }`}
                          placeholder="Разкажете ни за вашия проект и как можем да ви помогнем..."
                        />
                        {errors.message && (
                          <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                        )}
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative"
                      >
                        {/* Button glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ECB629]/30 to-green-500/20 blur-xl"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        
                        <Button
                          type="submit"
                          disabled={contactMutation.isPending}
                          className="relative w-full bg-gradient-to-r from-[#ECB629] to-[#ECB629]/90 text-black hover:from-[#ECB629]/90 hover:to-[#ECB629]/80 py-4 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-[#ECB629]/20 transition-all duration-300 border-2 border-[#ECB629]/20"
                        >
                          {contactMutation.isPending ? (
                            <div className="flex items-center gap-3">
                              <motion.div
                                className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              />
                              <span>Изпращане...</span>
                            </div>
                          ) : (
                            <>
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 rounded-2xl"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
                              />
                              <span className="relative z-10 flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
                                Изпрати съобщение
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                              </span>
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Ultra-Premium Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Info section glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-[2rem] bg-gradient-to-l from-[#ECB629]/10 via-green-500/5 to-[#ECB629]/10 blur-2xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative space-y-8">
                  {/* Enhanced Header */}
                  <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative">
                      <motion.h2 
                        className="text-3xl font-bold text-white mb-4"
                        animate={{
                          textShadow: [
                            '0 0 20px rgba(236, 182, 41, 0.3)',
                            '0 0 30px rgba(236, 182, 41, 0.5)',
                            '0 0 20px rgba(236, 182, 41, 0.3)'
                          ],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        Информация за <span className="text-[#ECB629]">контакт</span>
                      </motion.h2>
                      <p className="text-gray-300 text-lg">Можете да се свържете с нас по всеки от следните начини:</p>
                    </div>
                  </motion.div>

                  {/* Enhanced Contact Cards */}
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        {/* Card glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ECB629]/15 via-green-500/5 to-[#ECB629]/15 blur-xl"
                          animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{ 
                            duration: 3 + index * 0.5, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: index * 0.4 
                          }}
                        />
                        
                        <Card className="relative overflow-hidden bg-gradient-to-br from-slate-800/70 via-slate-800/50 to-slate-700/60 border-2 border-slate-600/40 hover:border-[#ECB629]/60 transition-all duration-500 group backdrop-blur-lg shadow-xl rounded-2xl">
                          {/* Premium pattern overlay */}
                          <div className="absolute inset-0 opacity-8">
                            <div className="absolute inset-0" style={{
                              backgroundImage: `
                                radial-gradient(circle at 25% 25%, rgba(236, 182, 41, 0.1) 2px, transparent 2px),
                                radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.05) 2px, transparent 2px)
                              `,
                              backgroundSize: '40px 40px, 60px 60px'
                            }}></div>
                          </div>

                          {/* Premium status indicator */}
                          <div className="absolute top-4 right-4">
                            <motion.div
                              className="w-3 h-3 bg-green-500 rounded-full"
                              animate={{
                                boxShadow: [
                                  '0 0 10px rgba(34, 197, 94, 0.4)',
                                  '0 0 20px rgba(34, 197, 94, 0.8)',
                                  '0 0 10px rgba(34, 197, 94, 0.4)'
                                ],
                              }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                            >
                              <motion.div
                                className="absolute inset-0 bg-green-500 rounded-full"
                                animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0, 0.8] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: index * 0.5 }}
                              />
                            </motion.div>
                          </div>

                          <CardContent className="p-8 relative z-10">
                            <div className="flex items-start gap-6">
                              <div className="relative">
                                {/* Enhanced icon container */}
                                <motion.div
                                  className="relative w-16 h-16 bg-gradient-to-br from-[#ECB629]/20 to-green-500/10 rounded-2xl flex items-center justify-center border-2 border-[#ECB629]/30 group-hover:border-[#ECB629]/60 transition-all duration-300"
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <info.icon className="w-8 h-8 text-[#ECB629] group-hover:scale-110 transition-transform duration-300" />
                                  
                                  {/* Orbital ring */}
                                  <motion.div
                                    className="absolute inset-0 border-2 border-[#ECB629]/20 rounded-2xl"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                  />
                                  <motion.div
                                    className="absolute inset-0 border border-green-500/20 rounded-2xl"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                  />
                                  
                                  {/* Pulsing background */}
                                  <motion.div
                                    className="absolute inset-0 bg-[#ECB629]/10 rounded-2xl"
                                    animate={{
                                      scale: [1, 1.3, 1],
                                      opacity: [0.2, 0.6, 0.2],
                                    }}
                                    transition={{ 
                                      duration: 3, 
                                      repeat: Infinity, 
                                      delay: index * 0.4,
                                      ease: "easeInOut" 
                                    }}
                                  />
                                </motion.div>
                              </div>
                              
                              <div className="flex-1">
                                <motion.h3 
                                  className="text-xl font-bold text-white mb-2 group-hover:text-[#ECB629] transition-colors duration-300"
                                  whileHover={{ x: 5 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {info.title}
                                </motion.h3>
                                <motion.p 
                                  className="text-[#ECB629] font-semibold text-lg mb-2"
                                  animate={{
                                    textShadow: [
                                      '0 0 10px rgba(236, 182, 41, 0.3)',
                                      '0 0 20px rgba(236, 182, 41, 0.5)',
                                      '0 0 10px rgba(236, 182, 41, 0.3)'
                                    ],
                                  }}
                                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.8 }}
                                >
                                  {info.info}
                                </motion.p>
                                <p className="text-gray-400">{info.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {/* Ultra-Premium Quick CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="relative mt-12"
                  >
                    {/* CTA glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-[#ECB629]/20 via-green-500/15 to-[#ECB629]/20 blur-2xl"
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1, 1.03, 1],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    <Card className="relative overflow-hidden bg-gradient-to-br from-[#ECB629]/15 via-[#ECB629]/10 to-green-500/10 border-2 border-[#ECB629]/40 shadow-2xl rounded-[2rem] backdrop-blur-lg">
                      {/* Premium pattern system */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `
                            linear-gradient(45deg, rgba(236, 182, 41, 0.15) 25%, transparent 25%),
                            linear-gradient(-45deg, rgba(34, 197, 94, 0.1) 25%, transparent 25%),
                            linear-gradient(45deg, transparent 75%, rgba(236, 182, 41, 0.05) 75%),
                            linear-gradient(-45deg, transparent 75%, rgba(34, 197, 94, 0.05) 75%)
                          `,
                          backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
                          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
                        }}></div>
                      </div>

                      {/* Premium status badge */}
                      <div className="absolute top-6 right-6">
                        <motion.div 
                          className="relative"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ECB629]/40 to-green-500/40 blur-lg"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          />
                          <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ECB629]/20 to-green-500/20 border border-[#ECB629]/50 backdrop-blur-sm">
                            <motion.div 
                              className="w-3 h-3 bg-[#ECB629] rounded-full"
                              animate={{
                                boxShadow: [
                                  '0 0 10px rgba(236, 182, 41, 0.5)',
                                  '0 0 20px rgba(236, 182, 41, 0.8)',
                                  '0 0 10px rgba(236, 182, 41, 0.5)'
                                ],
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <motion.div
                                className="absolute inset-0 bg-[#ECB629] rounded-full"
                                animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                              />
                            </motion.div>
                            <span className="text-xs text-[#ECB629] font-bold uppercase tracking-wide">
                              30 МИН БЕЗПЛАТНО
                            </span>
                          </div>
                        </motion.div>
                      </div>

                      <CardContent className="p-10 text-center relative z-10">
                        <motion.h3 
                          className="text-2xl font-bold text-white mb-3"
                          animate={{
                            textShadow: [
                              '0 0 20px rgba(236, 182, 41, 0.3)',
                              '0 0 30px rgba(236, 182, 41, 0.5)',
                              '0 0 20px rgba(236, 182, 41, 0.3)'
                            ],
                          }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                          Предпочитате <span className="text-[#ECB629]">директен разговор</span>?
                        </motion.h3>
                        <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
                          Резервирайте 30-минутна безплатна консултация и обсъдете вашия проект директно с нас
                        </p>
                        
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative inline-block"
                        >
                          {/* Button glow effect */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ECB629]/30 to-green-500/20 blur-xl"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          />
                          
                          <Button 
                            variant="outline"
                            size="lg"
                            className="relative border-2 border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629] hover:text-black font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-[#ECB629]/30 transition-all duration-300 backdrop-blur-sm"
                            asChild
                          >
                            <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 rounded-2xl"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
                              />
                              <span className="relative z-10 flex items-center gap-3">
                                <CheckCircle className="w-5 h-5" />
                                Резервирай консултация
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                              </span>
                            </a>
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}