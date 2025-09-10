
'use client';

import { LucideIcon } from 'lucide-react';

interface StatItem {
  icon: LucideIcon;
  stat: string;
  label: string;
}

interface StatsGridProps {
  stats: StatItem[];
  className?: string;
  iconClassName?: string;
  statClassName?: string;
  labelClassName?: string;
}

const StatsGrid = ({ 
  stats, 
  className = "grid grid-cols-2 md:grid-cols-4 gap-8",
  iconClassName = "w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-3",
  statClassName = "text-2xl font-bold text-gray-900 mb-1",
  labelClassName = "text-sm text-gray-600"
}: StatsGridProps) => {
  return (
    <div className={className}>
      {stats.map((item, index) => (
        <div key={index} className="text-center">
          <div className={iconClassName}>
            <item.icon size={20} className="text-yellow-400" />
          </div>
          <div className={statClassName}>{item.stat}</div>
          <div className={labelClassName}>{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
