import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { trackCTAClick } from "@/lib/analytics";

export function MobileStickyNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Показваме sticky nav след като потребителят е скролнал поне 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartNow = () => {
    trackCTAClick('mobile_sticky_start_now', window.location.href);
    window.open("https://form.typeform.com/to/GXLaGY98", "_blank");
  };

  const handleContactSales = () => {
    trackCTAClick('mobile_sticky_contact_sales', window.location.href);
  };

  if (!isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 translate-y-0">
      <div className="bg-slate-900/95 backdrop-blur-md border-t border-[var(--pravdast-yellow)]/20 p-4">
        <div className="flex gap-3">
          {/* Primary CTA */}
          <Button
            onClick={handleStartNow}
            className="flex-1 bg-[var(--pravdast-yellow)] text-black hover:bg-[#d4a422] font-semibold h-12 text-sm group"
          >
            Започнете сега
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Secondary CTA */}
          <Link href="/contact">
            <Button
              onClick={handleContactSales}
              variant="outline"
              className="flex-1 border-[var(--pravdast-yellow)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-yellow)] hover:text-black h-12 text-sm group"
            >
              <Phone className="mr-2 h-4 w-4" />
              Контакт
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}