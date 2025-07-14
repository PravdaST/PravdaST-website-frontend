import { useState } from 'react'

interface Toast {
  id: string
  title: string
  description?: string
  variant?: 'default' | 'destructive'
  action?: React.ReactNode
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = (toast: Omit<Toast, 'id'>) => {
    const toastWithId = { ...toast, id: Math.random().toString(36).substring(7) }
    setToasts((prev) => [...prev, toastWithId])
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter(t => t.id !== toastWithId.id))
    }, 5000)
  }

  return {
    toast,
    toasts
  }
}