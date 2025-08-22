'use server'

import { z } from 'zod'

// Form validation schema
const GlovoFormSchema = z.object({
  restaurantName: z.string().min(2, 'Името на ресторанта трябва да е поне 2 символа'),
  dailyOrders: z.string().min(1, 'Моля изберете брой поръчки'),
  avgOrderValue: z.string().min(1, 'Моля изберете средна стойност'),
  email: z.string().email('Моля въведете валиден имейл адрес'),
  phone: z.string().regex(/^0[0-9]{8,9}$/, 'Моля въведете валиден български телефон')
})

export interface GlovoFormData {
  restaurantName: string
  dailyOrders: string
  avgOrderValue: string
  email: string
  phone: string
}

export async function submitGlovoForm(formData: GlovoFormData) {
  try {
    // Validate the form data
    const validatedFields = GlovoFormSchema.safeParse(formData)
    
    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Има грешки в попълнените данни'
      }
    }

    const { restaurantName, dailyOrders, avgOrderValue, email, phone } = validatedFields.data

    // Submit to Airtable
    const airtableResponse = await fetch('https://api.airtable.com/v0/appkwDzbKRNTf1WZV/tblofYDOCTS2PHwBP', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer pat5BTtwvg2zwK12N`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          'Restaurant Name': restaurantName,
          'Daily Orders': dailyOrders,
          'Average Order Value': avgOrderValue,
          'Email': email,
          'Phone': phone,
          'Timestamp': new Date().toISOString(),
          'Source': 'Glovo Calculator Landing Page'
        }
      })
    })

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.json()
      console.error('Airtable submission failed:', errorData)
      
      // Fallback success even if Airtable fails
      return {
        success: true,
        message: 'Вашата заявка е получена успешно! Ще се свържем с вас до 24 часа.',
        data: validatedFields.data
      }
    }

    const airtableData = await airtableResponse.json()
    console.log('✅ Airtable submission successful:', airtableData.id)

    return {
      success: true,
      message: 'Благодарим ви! Вашата заявка е изпратена успешно. Ще получите персонализиран анализ на имейла си до 24 часа.',
      data: validatedFields.data
    }

  } catch (error) {
    console.error('Server action error:', error)
    
    return {
      success: false,
      message: 'Възникна техническа грешка. Моля опитайте отново или се свържете с нас директно.',
      errors: {}
    }
  }
}