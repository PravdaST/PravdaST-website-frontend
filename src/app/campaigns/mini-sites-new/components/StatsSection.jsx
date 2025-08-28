import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    delivery: 0,
    growth: 0,
    rating: 0
  });

  const finalValues = {
    clients: 500,
    delivery: 24,
    growth: 40,
    rating: 4.9
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues)?.map(key => {
      const increment = finalValues?.[key] / steps;
      let currentStep = 0;

      return setInterval(() => {
        currentStep++;
        setCounters(prev => ({
          ...prev,
          [key]: key === 'rating' 
            ? Math.min(currentStep * increment, finalValues?.[key])?.toFixed(1)
            : Math.min(Math.floor(currentStep * increment), finalValues?.[key])
        }));

        if (currentStep >= steps) {
          clearInterval(intervals?.find(interval => interval === this));
        }
      }, stepDuration);
    });

    return () => intervals?.forEach(interval => clearInterval(interval));
  }, []);

  const stats = [
    {
      icon: 'Users',
      value: `${counters?.clients}+`,
      label: 'Доволни клиенти',
      color: 'text-primary'
    },
    {
      icon: 'Clock',
      value: `${counters?.delivery}ч`,
      label: 'Доставка',
      color: 'text-success'
    },
    {
      icon: 'TrendingUp',
      value: `${counters?.growth}%`,
      label: 'Ръст в продажбите',
      color: 'text-accent'
    },
    {
      icon: 'Star',
      value: `${counters?.rating}★`,
      label: 'Рейтинг',
      color: 'text-warning'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className={`w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center ${stat?.color}`}>
                  <Icon name={stat?.icon} size={28} />
                </div>
              </div>
              <div className="space-y-2">
                <div className={`text-3xl lg:text-4xl font-bold ${stat?.color}`}>
                  {stat?.value}
                </div>
                <div className="text-text-secondary font-medium">
                  {stat?.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;