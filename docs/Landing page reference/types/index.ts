// Common types for the application

export interface BusinessCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
  features: string[];
  isPopular?: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  currency: string;
  features: string[];
  isPopular?: boolean;
  isCustom?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  position?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  businessType: string;
  message?: string;
  agreedToTerms: boolean;
}

// Component prop interfaces
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: Array<{ value: string; label: string }>;
}

// API response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Environment variables type
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_API_URL?: string;
      VITE_CONTACT_EMAIL?: string;
      VITE_PHONE_NUMBER?: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}