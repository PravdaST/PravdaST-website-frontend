// Analytics functions for Next.js migration
export function trackContactForm(data: any) {
  try {
    // Google Analytics tracking
    if (typeof window !== 'undefined' && (window as GtagWindow).gtag) {
      (window as GtagWindow).gtag!('event', 'contact_form_submit', {
        event_category: 'engagement',
        event_label: 'contact_form',
        value: 1
      })
    }
    
    console.log('Contact form submitted:', data)
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

export function trackPhoneCall(phoneNumber: string) {
  try {
    // Google Analytics tracking
    if (typeof window !== 'undefined' && (window as GtagWindow).gtag) {
      (window as GtagWindow).gtag!('event', 'phone_call', {
        event_category: 'engagement',
        event_label: 'phone_contact',
        value: 1
      })
    }
    
    console.log('Phone call tracked:', phoneNumber)
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

// Using proper interface extension for Google Analytics
interface GtagWindow extends Window {
  gtag?: (command: string, targetId: string, config?: any) => void
}