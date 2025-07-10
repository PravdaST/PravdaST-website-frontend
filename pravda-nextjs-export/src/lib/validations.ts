
import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Името трябва да съдържа поне 2 символа.",
  }),
  email: z.string().email({
    message: "Невалиден имейл адрес.",
  }),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Съобщението трябва да съдържа поне 10 символа.",
  }),
  service: z.enum(["seo", "clientomat", "trendlab", "general"]).optional(),
  budget: z.enum(["under-5k", "5k-15k", "15k-30k", "over-30k"]).optional(),
  consent: z.boolean().refine((value) => value === true, {
    message: "Трябва да се съгласите с условията за защита на данните.",
  }),
})

export const newsletterSchema = z.object({
  email: z.string().email({
    message: "Невалиден имейл адрес.",
  }),
  consent: z.boolean().refine((value) => value === true, {
    message: "Трябва да се съгласите с условията.",
  }),
})

export const calculatorSchema = z.object({
  monthlyRevenue: z.number().min(0, "Стойността трябва да е положително число"),
  monthlyTraffic: z.number().min(0, "Стойността трябва да е положително число"),
  conversionRate: z.number().min(0).max(100, "Стойността трябва да е между 0 и 100"),
  averageOrderValue: z.number().min(0, "Стойността трябва да е положително число"),
  industry: z.enum(["ecommerce", "services", "saas", "manufacturing", "other"]),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type NewsletterData = z.infer<typeof newsletterSchema>
export type CalculatorData = z.infer<typeof calculatorSchema>
