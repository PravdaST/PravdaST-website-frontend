import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { trackFormSubmission, trackConversion, trackLead } from "@/lib/analytics";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
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
    info: "contact@pravdast.agency",
    description: "Основен канал за комуникация"
  },
  {
    icon: Phone,
    title: "Телефон",
    info: "+359 879 282 299",
    description: "За спешни въпроси и Viber чат"
  },
  {
    icon: MapPin,
    title: "Офис",
    info: "гр. Варна, ул. Дебър №58",
    description: "Работим и дистанционно с клиенти от цяла България"
  },
  {
    icon: Clock,
    title: "Време за отговор",
    info: "24 часа",
    description: "Максимално време за първоначален отговор"
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      console.log('Изпращане на данни:', data);
      return await apiRequest("/api/contacts", "POST", data);
    },
    onSuccess: (response) => {
      console.log('Успешен отговор:', response);
      trackFormSubmission('contact_form', true);
      trackConversion('contact_lead');
      trackLead('website_contact_form', 100);
      
      toast({
        title: "Успешно изпратено!",
        description: "Ще се свържем с вас в рамките на 24 часа.",
      });
      
      setFormData({
        name: "",
        email: "",
        website: "",
        company: "",
        message: ""
      });
      setErrors({});
    },
    onError: (error: any) => {
      console.error('Грешка при изпращане:', error);
      trackFormSubmission('contact_form', false);
      
      toast({
        title: "Възникна грешка",
        description: "Моля опитайте отново или ни пишете директно на contact@pravdast.agency",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = contactSchema.parse(formData);
      setErrors({});
      contactMutation.mutate(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<ContactFormData> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      {/* Modern Hero Section */}
      <section ref={ref} className="pt-32 pb-24 relative overflow-hidden">
        {/* Enhanced Technical Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="var(--pravdast-yellow)" opacity="0.4"/>
                <path d="M0,20 L40,20 M20,0 L20,40" stroke="var(--pravdast-yellow)" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="5" cy="5" r="0.5" fill="var(--pravdast-yellow)" opacity="0.6"/>
                <circle cx="35" cy="35" r="0.5" fill="var(--pravdast-yellow)" opacity="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-hero-pattern)" />
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--pravdast-yellow)]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--pravdast-yellow)]/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status badge */}
            <motion.div
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-slate-800/60 backdrop-blur-sm rounded-full border border-[var(--pravdast-yellow)]/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-30"></div>
              </div>
              <span className="text-gray-300 text-sm font-medium">
                <span className="text-green-400 font-semibold">Активни</span> - Отговаряме в рамките на 48 часа
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Започнете разговора
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Готови сме да обсъдим как можем да помогнем за растежа на вашия бизнес
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-600/20">
                <div className="w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"></div>
                <span className="text-gray-300 text-sm font-medium">Безплатна консултация</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-600/20">
                <div className="w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"></div>
                <span className="text-gray-300 text-sm font-medium">100% поверителност</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-600/20">
                <div className="w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"></div>
                <span className="text-gray-300 text-sm font-medium">Процес 5 минути</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Connection line from hero */}
        <motion.div
          className="w-0.5 h-16 bg-gradient-to-b from-[var(--pravdast-yellow)] to-slate-600 mx-auto mb-16"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8 }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                className="relative p-8 bg-slate-800/40 backdrop-blur-sm rounded-3xl border border-slate-600/30 overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--pravdast-yellow)]/5 to-[var(--pravdast-yellow)]/1 opacity-50"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--pravdast-yellow)]/10 rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6 text-white">Заявете безплатна диагностика</h2>
                  <p className="text-gray-300 mb-8">
                    Попълнете формата и ще се свържем с вас в рамките на 24 часа с конкретен план за подобрение.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-white">
                        Име *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="mt-1 bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-[var(--pravdast-yellow)]"
                        placeholder="Вашето име"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-white">
                        Имейл *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-1 bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-[var(--pravdast-yellow)]"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="website" className="text-sm font-medium text-white">
                        Сайт *
                      </Label>
                      <Input
                        id="website"
                        type="url"
                        value={formData.website}
                        onChange={(e) => handleInputChange("website", e.target.value)}
                        className="mt-1 bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-[var(--pravdast-yellow)]"
                        placeholder="https://yourwebsite.com"
                      />
                      {errors.website && (
                        <p className="text-red-400 text-sm mt-1">{errors.website}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-sm font-medium text-white">
                        Компания
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="mt-1 bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-[var(--pravdast-yellow)]"
                        placeholder="Название на компанията (по избор)"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-white">
                        Съобщение *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="mt-1 bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-[var(--pravdast-yellow)] min-h-[120px]"
                        placeholder="Разкажете ни за вашия бизнес и какви са предизвикателствата ви..."
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={contactMutation.isPending}
                        className="w-full bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 font-semibold py-3 rounded-xl transition-all duration-300 relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                        <span className="relative z-10">
                          {contactMutation.isPending ? "Изпращане..." : "Изпрати съобщението"}
                        </span>
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="relative p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-600/30 overflow-hidden group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--pravdast-yellow)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="w-12 h-12 bg-[var(--pravdast-yellow)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-[var(--pravdast-yellow)]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                        <p className="text-[var(--pravdast-yellow)] font-medium mb-2">{info.info}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}