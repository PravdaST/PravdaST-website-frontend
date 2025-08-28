import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isUrgent, setIsUrgent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const contactSection = document.getElementById('contact');
      
      if (heroSection && contactSection) {
        const heroBottom = heroSection?.offsetTop + heroSection?.offsetHeight;
        const contactTop = contactSection?.offsetTop;
        const scrollTop = window.pageYOffset;
        
        // Show button after hero section and hide when contact section is visible
        const shouldShow = scrollTop > heroBottom && scrollTop < contactTop - window.innerHeight / 2;
        setIsVisible(shouldShow);
        
        // Add urgency effect when scrolling deeper
        const urgencyThreshold = heroBottom + (contactTop - heroBottom) * 0.6;
        setIsUrgent(scrollTop > urgencyThreshold);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection?.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-floating-button">
      <div className={`transition-all duration-300 ${isUrgent ? 'animate-pulse' : ''}`}>
        <Button
          onClick={handleClick}
          className={`
            bg-accent hover:bg-accent/90 text-accent-foreground
            conversion-shadow hover:shadow-lg
            rounded-full p-4 sm:px-6 sm:py-4 sm:rounded-lg
            group relative overflow-hidden
            ${isUrgent ? 'ring-2 ring-warning ring-opacity-50' : ''}
          `}
        >
          {/* Mobile: Icon only */}
          <div className="sm:hidden">
            <Icon name="MessageCircle" size={24} />
          </div>
          
          {/* Desktop: Text with icon */}
          <div className="hidden sm:flex items-center space-x-2">
            <Icon name="MessageCircle" size={20} />
            <span className="font-semibold">Започни сега</span>
          </div>
          
          {/* Urgency indicator */}
          {isUrgent && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-warning rounded-full animate-ping" />
          )}
        </Button>
        
        {/* Urgency message */}
        {isUrgent && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-warning text-warning-foreground text-xs px-3 py-1 rounded-full whitespace-nowrap animate-fade-in">
            Само 20 места
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingActionButton;