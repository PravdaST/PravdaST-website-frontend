import React, { useState, useEffect } from 'react';

const SectionProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'hero', label: 'Начало' },
    { id: 'demo', label: 'Демо' },
    { id: 'templates', label: 'Шаблони' },
    { id: 'pricing', label: 'Цени' },
    { id: 'testimonials', label: 'Отзиви' },
    { id: 'contact', label: 'Контакт' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement?.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(scrollPercent, 100));

      // Find active section
      const sectionElements = sections?.map(section => ({
        ...section,
        element: document.getElementById(section?.id)
      }));

      const currentSectionIndex = sectionElements?.findIndex(section => {
        if (!section?.element) return false;
        const rect = section?.element?.getBoundingClientRect();
        return rect?.top <= 200 && rect?.bottom >= 200;
      });

      if (currentSectionIndex !== -1) {
        setActiveSection(currentSectionIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-nav hidden xl:block">
      <div className="flex flex-col items-center space-y-4">
        {/* Progress Bar */}
        <div className="w-1 h-32 bg-muted rounded-full relative overflow-hidden">
          <div 
            className="w-full bg-accent rounded-full transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* Section Indicators */}
        <div className="flex flex-col items-center space-y-3">
          {sections?.map((section, index) => (
            <div
              key={section?.id}
              className="group relative flex items-center"
            >
              <button
                onClick={() => {
                  const element = document.getElementById(section?.id);
                  if (element) {
                    const offsetTop = element?.offsetTop - 80;
                    window.scrollTo({
                      top: offsetTop,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index <= activeSection
                    ? 'bg-accent scale-110' :'bg-muted hover:bg-muted-foreground/30'
                }`}
                aria-label={`Go to ${section?.label}`}
              />
              
              {/* Tooltip */}
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
                  {section?.label}
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-[-2px] w-0 h-0 border-t-2 border-b-2 border-r-4 border-transparent border-r-foreground" />
              </div>
            </div>
          ))}
        </div>

        {/* Completion Percentage */}
        <div className="text-xs text-muted-foreground font-medium">
          {Math.round(scrollProgress)}%
        </div>
      </div>
    </div>
  );
};

export default SectionProgressIndicator;