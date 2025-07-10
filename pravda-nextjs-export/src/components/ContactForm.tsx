
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Име *
          </label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
            className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
            placeholder="Вашето име"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Имейл *
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
            className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-2">
          Услуга
        </label>
        <Select onValueChange={(value) => handleChange('service', value)}>
          <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white">
            <SelectValue placeholder="Изберете услуга" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="seo-struktor">SEO Struktor™</SelectItem>
            <SelectItem value="clientomat">Clientomat™</SelectItem>
            <SelectItem value="clickstarter">Clickstarter</SelectItem>
            <SelectItem value="trendlab">Trendlab</SelectItem>
            <SelectItem value="other">Друго</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Съобщение *
        </label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          required
          rows={5}
          className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
          placeholder="Разкажете ни за вашия проект..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[var(--pravdast-yellow)] text-black hover:bg-yellow-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
      >
        {isSubmitting ? 'Изпращане...' : 'Изпрати съобщение'}
      </Button>

      {submitStatus === 'success' && (
        <div className="text-green-500 text-center">
          Съобщението е изпратено успешно! Ще се свържем с вас скоро.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="text-red-500 text-center">
          Възникна грешка при изпращането. Моля опитайте отново.
        </div>
      )}
    </form>
  );
}
