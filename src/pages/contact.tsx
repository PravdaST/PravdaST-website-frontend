import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
// Removed framer-motion for Vercel compatibility
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
                    y: [0, -10, 0],
                  }}
                >
                  <Send className="w-6 h-6 text-[#ECB629]" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
              {/* Status Badge */}
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">
                    <span className="text-[#ECB629] font-bold">Безплатна</span> консултация за всеки проект
                  </span>
                </div>
              </div className=">"

              <div className="h1 "
                className="text-5xl md:text-6xl font-bold mb-6 text-white"
                Готови за <br />
                <span className="text-[#ECB629] relative">
                  разговор?
                  />
                </span>
              </div className="h1>"
              
              <div className="p "
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                Свържете се с нас за безплатна консултация. Ще обсъдим вашите цели и как можем да ви помогнем да ги постигнете.
              </div className="p>"

              {/* Quick Stats */}
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
              </div className=">"
            </div className=">"
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ECB629] rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-white mb-2">Изпратете ни съобщение</h2>
                      <p className="text-gray-300">Ще се свържем с вас в рамките на 24 часа</p>
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

                      <Button
                        type="submit"
                        disabled={contactMutation.isPending}
                        className="w-full bg-[#ECB629] text-black hover:bg-[#ECB629]/90 py-3 text-lg font-semibold relative overflow-hidden group"
                        {contactMutation.isPending ? (
                          <span>Изпращане...</span>
                        ) : (
                          <>
                            />
                            Изпрати съобщение <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div className=">"

              {/* Contact Information */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Информация за контакт</h2>
                  <p className="text-gray-300">Можете да се свържете с нас по всеки от следните начини:</p>
                </div>

                {contactInfo.map((info, index) => (
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="relative">
                            />
                          </div>
                          <div>
                              {info.title}
                            </h3>
                            <p className="text-[#ECB629] font-medium mb-1">{info.info}</p>
                            <p className="text-gray-400 text-sm">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div className=">"
                ))}

                {/* Quick CTA */}
                  <Card className="bg-gradient-to-r from-[#ECB629]/20 to-[#ECB629]/10 border-[#ECB629]/30">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold text-white mb-2">Предпочитате директен разговор?</h3>
                      <p className="text-gray-300 mb-4">Резервирайте 30-минутна безплатна консултация</p>
                      <Button 
                        variant="outline"
                        className="border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629] hover:text-black relative overflow-hidden group"
                        asChild
                        <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                          />
                          Резервирай консултация <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div className=">"
              </div className=">"
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
