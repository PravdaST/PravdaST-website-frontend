'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const contactSchema = z.object({
  name: z.string().min(2, "Името трябва да бъде поне 2 символа"),
  email: z.string().email("Невалиден имейл адрес"),
  company: z.string().optional(),
  website: z.string().url("Невалиден URL").optional().or(z.literal("")),
  message: z.string().min(10, "Съобщението трябва да бъде поне 10 символа"),
})

type ContactForm = z.infer<typeof contactSchema>

export default function ContactClient() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      website: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)

    try {
      // For Next.js, we would need to create API routes
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      toast({
        title: "Съобщението е изпратено!",
        description: "Ще се свържем с Вас в рамките на 24 часа.",
      })

      form.reset()
    } catch (error) {
      toast({
        title: "Грешка",
        description: "Моля опитайте отново или се обадете директно.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Отговаряме в рамките на 2 часа</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Заявете{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                консултация
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Поговорете с бизнес инженер за 15 минути. Безплатно. Без ангажименти.
              Ще получите индивидуален план за растеж на вашия бизнес.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-4">Изпратете заявка</h2>
                  <p className="text-gray-300">
                    Попълнете формата и ще се свържем с вас в рамките на 2 часа
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Име *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Вашето име"
                                className="bg-slate-800 border-slate-700 text-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
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
                                placeholder="your@email.com"
                                type="email"
                                className="bg-slate-800 border-slate-700 text-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Компания</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Вашата компания"
                                className="bg-slate-800 border-slate-700 text-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Уебсайт</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="https://yourwebsite.com"
                                className="bg-slate-800 border-slate-700 text-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
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
                              placeholder="Разкажете ни за вашия бизнес и какви резултати търсите..."
                              className="bg-slate-800 border-slate-700 text-white min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold py-3 text-lg"
                    >
                      {isSubmitting ? (
                        "Изпраща се..."
                      ) : (
                        <>
                          Изпрати заявка
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-4">Директен контакт</h2>
                  <p className="text-gray-300">
                    Предпочитате директен разговор? Ето как можете да се свържете с нас
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
                    <Phone className="h-6 w-6 text-yellow-400 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-gray-300 mb-2">+359 879 282 299</p>
                      <p className="text-sm text-gray-400">
                        Понеделник - Петък: 9:00 - 18:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
                    <Mail className="h-6 w-6 text-yellow-400 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Имейл</h3>
                      <p className="text-gray-300 mb-2">contact@pravdagency.eu</p>
                      <p className="text-sm text-gray-400">
                        Отговаряме в рамките на 2 часа
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
                    <MapPin className="h-6 w-6 text-yellow-400 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Офис</h3>
                      <p className="text-gray-300 mb-2">
                        ул. Дебър №58<br />
                        Варна, България
                      </p>
                      <p className="text-sm text-gray-400">
                        Срещи по предварителна уговорка
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
                    <Clock className="h-6 w-6 text-yellow-400 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Работно време</h3>
                      <div className="text-gray-300 space-y-1">
                        <p>Понеделник - Петък: 9:00 - 18:00</p>
                        <p>Събота: 10:00 - 14:00</p>
                        <p>Неделя: Почивен ден</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-yellow-400/10 rounded-lg border border-yellow-400/30">
                  <h3 className="font-semibold mb-2 text-yellow-400">Бърза връзка</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    За спешни въпроси можете да се свържете директно с нас
                  </p>
                  <Button
                    asChild
                    className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
                  >
                    <a href="tel:+359879282299">
                      <Phone className="mr-2 h-4 w-4" />
                      Обади сега
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}