import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const contactSchema = z.object({
  name: z.string().min(2, "Името трябва да бъде поне 2 символа"),
  email: z.string().email("Невалиден имейл адрес"),
  company: z.string().optional(),
  website: z.string().url("Невалиден URL").optional().or(z.literal("")),
  message: z.string().min(10, "Съобщението трябва да бъде поне 10 символа"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactNew() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      website: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: "Съобщението е изпратено!",
        description: "Ще се свържем с Вас в рамките на 24 часа.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Грешка",
        description: "Моля опитайте отново.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Имейл",
      value: "contact@pravdagency.eu",
      subtitle: "Отговаряме в рамките на 24 часа",
      color: "text-[#ECB629]"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Телефон",
      value: "+359 879 282 299",
      subtitle: "Работни дни 9:00 - 18:00",
      color: "text-[#ECB629]"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Офис",
      value: "ул. Дебър №58, Варна",
      subtitle: "Среща по предварително уговаряне",
      color: "text-[#ECB629]"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Работно време",
      value: "Понеделник - Петък",
      subtitle: "09:00 - 18:00 (GMT +2)",
      color: "text-[#ECB629]"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(236, 182, 41, 0.1) 2px, transparent 2px),
              linear-gradient(90deg, rgba(236, 182, 41, 0.1) 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

      <div className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-[#ECB629]/30 rounded-full px-4 py-2 mb-6"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Активен екип • Отговор в 24 часа</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Свържете се с <span className="text-[#ECB629]">нас</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Готови сме да обсъдим как можем да трансформираме вашия бизнес в предсказуема система за растеж
            </motion.p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800/30 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 shadow-2xl"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Изпратете ни <span className="text-[#ECB629]">съобщение</span>
                </h2>
                <p className="text-gray-400">
                  Ще се свържем с вас в рамките на 24 часа
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Име *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Вашето име"
                              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-[#ECB629] h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Имейл *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="email@company.com"
                              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-[#ECB629] h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Уебсайт *</FormLabel>
                          <FormControl>
                            <Input
                              type="url"
                              placeholder="https://company.com"
                              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-[#ECB629] h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Компания</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Име на компанията"
                              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-[#ECB629] h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Съобщение *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Разкажете ни за вашия проект и как можем да ви помогнем..."
                            className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-[#ECB629] min-h-[120px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ECB629] hover:bg-[#ECB629]/90 text-black font-semibold h-12 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Изпращане...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Изпрати съобщение
                      </div>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Информация за <span className="text-[#ECB629]">контакт</span>
                </h2>
                <p className="text-gray-400">
                  Можете да се свържете с нас по всеки от следните начини:
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-slate-800/40 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-[#ECB629]/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#ECB629]/10 rounded-xl flex items-center justify-center text-[#ECB629] group-hover:bg-[#ECB629]/20 transition-colors">
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                        <p className={`${info.color} font-medium mb-1`}>{info.value}</p>
                        <p className="text-gray-400 text-sm">{info.subtitle}</p>
                      </div>
                      <div className="w-3 h-3 bg-green-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-gradient-to-r from-[#ECB629]/10 to-[#ECB629]/5 rounded-2xl p-6 border border-[#ECB629]/20 mt-8"
              >
                <h3 className="text-white font-semibold mb-2">Безплатна консултация</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Запишете се за 30-минутна консултация за да обсъдим как можем да помогнем на вашия бизнес.
                </p>
                <Button
                  onClick={() => window.open('https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu', '_blank')}
                  className="w-full bg-[#ECB629] hover:bg-[#ECB629]/90 text-black font-semibold h-10 rounded-xl"
                >
                  Запиши консултация
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}