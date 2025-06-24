import { useState } from "react";

interface Toast {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (toast: Toast) => {
    console.log(`Toast: ${toast.title}`, toast.description);
    // Simple console implementation for Vercel compatibility
  };

  return { toast };
}