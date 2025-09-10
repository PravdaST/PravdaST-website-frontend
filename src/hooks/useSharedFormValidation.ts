// Shared form validation to reduce Zod duplication across forms
// Reduces bundle size by centralizing validation logic

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

// Common validation patterns
export const commonValidation = {
  // Bulgarian phone validation
  phone: z.string()
    .regex(/^(\+359|0)[0-9]{8,9}$/, "Моля въведете валиден телефон"),
  
  // Email validation  
  email: z.string()
    .email("Моля въведете валиден имейл"),
    
  // Required string with min length
  requiredString: (minLength: number, message: string) =>
    z.string().min(minLength, message),
    
  // Optional string
  optionalString: z.string().optional(),
  
  // Business name validation
  businessName: z.string().min(2, "Името трябва да е поне 2 символа"),
  
  // Location validation
  location: z.string().min(3, "Моля въведете локация"),
  
  // Category selection
  category: z.string().min(1, "Моля изберете категория"),
  
  // Menu items count
  menuItemsCount: z.string().min(1, "Моля изберете брой позиции")
}

// Pre-built schemas for common forms
export const formSchemas = {
  // Mini-sites form schema
  miniSites: z.object({
    category: commonValidation.category,
    businessName: commonValidation.businessName,
    location: commonValidation.location,
    contactPhone: commonValidation.phone,
    contactEmail: commonValidation.email,
    menuItemsCount: commonValidation.menuItemsCount,
    message: commonValidation.optionalString
  }),
  
  // Contact form schema
  contact: z.object({
    name: commonValidation.requiredString(2, "Името трябва да е поне 2 символа"),
    email: commonValidation.email,
    phone: commonValidation.phone,
    company: commonValidation.optionalString,
    message: commonValidation.requiredString(10, "Съобщението трябва да е поне 10 символа")
  }),
  
  // Basic lead form
  basicLead: z.object({
    name: commonValidation.requiredString(2, "Името трябва да е поне 2 символа"),
    email: commonValidation.email,
    phone: commonValidation.phone
  })
}

// Shared form submission hook
export function useSharedFormSubmission<T extends Record<string, any>>(
  schema: z.ZodSchema<T>,
  apiEndpoint: string,
  successMessage = "Успешно изпратено!",
  trackingEvent?: string
) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  
  const form = useForm<T>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: T) => {
    setIsSubmitting(true)

    try {
      // Track form start
      if (trackingEvent && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', `${trackingEvent}_start`, {
          form_type: trackingEvent
        })
      }

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString()
        }),
      })

      if (response.ok) {
        // Track success
        if (trackingEvent && typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', `${trackingEvent}_complete`, {
            form_type: trackingEvent
          })
        }

        toast({
          title: successMessage,
          description: "Ще се свържем с вас до 2 часа.",
        })

        form.reset()
      } else {
        throw new Error('Network response was not ok')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast({
        title: "Грешка при изпращане",
        description: "Моля опитайте отново или се свържете с нас директно.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
    isSubmitting
  }
}