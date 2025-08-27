"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

// Form validation schema
const miniSitesFormSchema = z.object({
  category: z.string().min(1, "Моля изберете категория"),
  businessName: z.string().min(2, "Името трябва да е поне 2 символа"),
  location: z.string().min(3, "Моля въведете локация"),
  contactPhone: z.string()
    .regex(/^(\+359|0)[0-9]{8,9}$/, "Моля въведете валиден телефон"),
  contactEmail: z.string()
    .email("Моля въведете валиден имейл"),
  menuItemsCount: z.string().min(1, "Моля изберете брой позиции"),
  message: z.string().optional()
});

type MiniSitesFormData = z.infer<typeof miniSitesFormSchema>;

export default function MiniSitesForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<MiniSitesFormData>({
    resolver: zodResolver(miniSitesFormSchema)
  });

  const onSubmit = async (data: MiniSitesFormData) => {
    setIsSubmitting(true);

    // Track form start
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'mini_form_start', {
        category: data.category
      });
    }

    try {
      const response = await fetch('/api/airtable/mini-sites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: data.category,
          business_name: data.businessName,
          location: data.location,
          contact_phone: data.contactPhone,
          contact_email: data.contactEmail,
          menu_items_count: data.menuItemsCount,
          message: data.message || '',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        // Track success
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'mini_form_complete', {
            category: data.category
          });
        }

        // Meta Pixel Lead event
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: 'Mini-Sites',
            content_category: data.category,
            value: 299,
            currency: 'BGN'
          });
        }

        toast({
          title: "Успешно изпратено!",
          description: "Ще се свържем с вас до 2 часа.",
        });

        reset();
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      // Track error
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'mini_form_error');
      }

      toast({
        title: "Грешка",
        description: "Моля, опитайте отново или се обадете на 0888 123 456",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Category */}
      <div>
        <Label htmlFor="category">Категория бизнес *</Label>
        <Select onValueChange={(value) => setValue('category', value)}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Изберете категория" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="restaurants">Ресторанти (пицарии, таверни, барове)</SelectItem>
            <SelectItem value="cafes">Кафенета & Fast Food</SelectItem>
            <SelectItem value="services">Услуги (автосервизи, адвокати)</SelectItem>
            <SelectItem value="beauty">Красота & Здраве</SelectItem>
            <SelectItem value="other">Друго</SelectItem>
          </SelectContent>
        </Select>
        {errors.category && (
          <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
        )}
      </div>

      {/* Business Name */}
      <div>
        <Label htmlFor="businessName">Име на бизнеса *</Label>
        <Input
          id="businessName"
          {...register('businessName')}
          placeholder="напр. Пицария Везувий"
          className="mt-2"
        />
        {errors.businessName && (
          <p className="text-red-500 text-sm mt-1">{errors.businessName.message}</p>
        )}
      </div>

      {/* Location */}
      <div>
        <Label htmlFor="location">Локация (град/квартал) *</Label>
        <Input
          id="location"
          {...register('location')}
          placeholder="напр. София, Младост 1"
          className="mt-2"
        />
        {errors.location && (
          <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
        )}
      </div>

      {/* Contact Phone */}
      <div>
        <Label htmlFor="contactPhone">Телефон *</Label>
        <Input
          id="contactPhone"
          {...register('contactPhone')}
          placeholder="0888 123 456"
          className="mt-2"
          type="tel"
        />
        {errors.contactPhone && (
          <p className="text-red-500 text-sm mt-1">{errors.contactPhone.message}</p>
        )}
      </div>

      {/* Contact Email */}
      <div>
        <Label htmlFor="contactEmail">Имейл *</Label>
        <Input
          id="contactEmail"
          {...register('contactEmail')}
          placeholder="email@example.com"
          className="mt-2"
          type="email"
        />
        {errors.contactEmail && (
          <p className="text-red-500 text-sm mt-1">{errors.contactEmail.message}</p>
        )}
      </div>

      {/* Menu Items Count */}
      <div>
        <Label htmlFor="menuItemsCount">Брой позиции в менюто *</Label>
        <Select onValueChange={(value) => setValue('menuItemsCount', value)}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Изберете брой позиции" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="up-to-20">До 20 позиции</SelectItem>
            <SelectItem value="21-50">21-50 позиции</SelectItem>
            <SelectItem value="50+">Над 50 позиции</SelectItem>
            <SelectItem value="no-menu">Няма меню (услуги)</SelectItem>
          </SelectContent>
        </Select>
        {errors.menuItemsCount && (
          <p className="text-red-500 text-sm mt-1">{errors.menuItemsCount.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message">Допълнителна информация (по желание)</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Има ли нещо специфично, което искате да включим?"
          className="mt-2"
          rows={4}
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-xl py-6 text-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Изпращане...
          </>
        ) : (
          'Изпрати заявката'
        )}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        Ще се свържем с вас до 2 часа в работно време
      </p>
    </form>
  );
}