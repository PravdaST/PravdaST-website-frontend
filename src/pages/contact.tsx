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
      // Analytics проследяване на успешна форма
      trackFormSubmission('contact_form', true);
      trackConversion('contact_lead');
      trackLead('website_contact_form', 100);
      
      toast({
        title: "Успешно изпратено!",
        description: "Ще се свържем с вас в най-скоро време.",
      });
      setFormData({ name: "", email: "", website: "", company: "", message: "" });
      setErrors({});
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      console.error('Грешка при изпращане:', error);
      // Analytics проследяване на неуспешна форма
      trackFormSubmission('contact_form', false);
      
      // По-детайлно съобщение за грешка
      let errorMessage = "Възникна проблем при изпращането. Моля, опитайте отново.";
      
      if (error?.response?.data?.error) {
        errorMessage = error.response.data.error;
      } else if (error?.message) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Грешка",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setErrors({});
      contactMutation.mutate(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<ContactFormData> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Имейл",
      info: "contact@pravdast.agency",
      description: "Отговаряме в рамките на 24 часа",
      link: "mailto:contact@pravdast.agency"
    },
    {
      icon: Phone,
      title: "Телефон / Viber",
      info: "+359 879 282 299",
      description: "Работни дни 9:00 - 18:00 или Viber чат",
      link: "viber://chat?number=%2B359879282299"
    },
    {
      icon: MapPin,
      title: "Локация",
      info: "гр.Варна ул. Дебър №58",
      description: "Работим с клиенти от цяла България"
    },
    {
      icon: Clock,
      title: "Време за отговор",
      info: "24 часа",
      description: "Максимално време за първоначален отговор"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[var(--pravdast-dark)] to-[var(--pravdast-dark-gray)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Спрете да губите време.{" "}
              <span className="text-[var(--pravdast-yellow)]">Започнете сега</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Заявете експертна диагностика. Ще анализираме вашия бизнес и ще ви дадем конкретен план за контролиран растеж.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-[var(--pravdast-dark)]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[var(--pravdast-dark-gray)] border-[var(--pravdast-yellow)]">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6">Заявете безплатна диагностика</h2>
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
                          className="mt-1 bg-[var(--pravdast-dark)] border-[var(--pravdast-medium-gray)] text-white"
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
                          className="mt-1 bg-[var(--pravdast-dark)] border-[var(--pravdast-medium-gray)] text-white"
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
                          className="mt-1 bg-[var(--pravdast-dark)] border-[var(--pravdast-medium-gray)] text-white"
                          placeholder="https://вашия-сайт.com"
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
                          className="mt-1 bg-[var(--pravdast-dark)] border-[var(--pravdast-medium-gray)] text-white"
                          placeholder="Название на компанията (незадължително)"
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
                          className="mt-1 bg-[var(--pravdast-dark)] border-[var(--pravdast-medium-gray)] text-white"
                          placeholder="Разкажете ни за вашия бизнес и какви предизвикателства имате..."
                          rows={5}
                        />
                        {errors.message && (
                          <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={contactMutation.isPending}
                        className="w-full bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] hover:bg-[#d4a426] font-semibold py-3"
                      >
                        {contactMutation.isPending ? "Изпращане..." : "Изпратете съобщението"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Как можете да се свържете с нас</h2>
                    <p className="text-gray-300 mb-8">
                      Избирайте най-удобния за вас начин за контакт. Ще се радваме да обсъдим как можем да помогнем на вашия бизнес.
                    </p>
                  </div>

                  <div className="grid gap-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-12 h-12 bg-[var(--pravdast-yellow)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="text-[var(--pravdast-yellow)]" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-[var(--pravdast-yellow)] font-medium mb-1 hover:underline cursor-pointer block"
                            >
                              {info.info}
                            </a>
                          ) : (
                            <p className="text-[var(--pravdast-yellow)] font-medium mb-1">{info.info}</p>
                          )}
                          <p className="text-gray-400 text-sm">{info.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quick CTA */}
                  <div className="bg-[var(--pravdast-dark-gray)] p-6 rounded-lg border border-[var(--pravdast-yellow)]/30">
                    <h3 className="font-semibold text-lg mb-3 text-[var(--pravdast-yellow)]">
                      Предпочитате директен разговор?
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Заявете директно онлайн консултация с нашия екип.
                    </p>
                    <Button
                      className="bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] hover:bg-[#d4a426] font-semibold"
                      onClick={() => window.open("https://form.typeform.com/to/GXLaGY98", "_blank")}
                    >
                      Запази консултация
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--pravdast-dark-gray)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Често задавани въпроси</h2>
              <p className="text-xl text-gray-300">
                Отговори на най-честите въпроси относно нашите услуги
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "Колко време отнема да видя първите резултати?",
                  answer: "Първите резултати обикновено се виждат в рамките на 4-8 седмици, в зависимост от сложността на проекта и избраната система."
                },
                {
                  question: "Какво включва безплатната диагностика?",
                  answer: "Анализираме вашето текущо състояние, идентифицираме възможностите за подобрение и ви предоставяме конкретен план с приоритети и очаквани резултати."
                },
                {
                  question: "Работите ли само с големи компании?",
                  answer: "Не, работим с утвърдени бизнеси от всякакъв размер - от малки семейни фирми до големи корпорации. Важното е да имате желание за системен растеж."
                },
                {
                  question: "Можете ли да гарантирате резултати?",
                  answer: "Не можем да гарантираме конкретни цифри, но можем да гарантираме, че ще следваме проверен процес и ще оптимизираме постоянно въз основа на данните."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-[var(--pravdast-dark)] border-[var(--pravdast-medium-gray)]">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3 text-[var(--pravdast-yellow)]">
                        {faq.question}
                      </h3>
                      <p className="text-gray-300">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}