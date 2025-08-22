// Server Component - No 'use client'!
// Static content components that don't need interactivity

import { CheckCircle, AlertCircle, Info, XCircle } from 'lucide-react';

// Static Alert Component
export function StaticAlert({ 
  type = 'info',
  title,
  message 
}: {
  type?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
}) {
  const config = {
    success: {
      icon: CheckCircle,
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      textColor: 'text-green-400',
    },
    error: {
      icon: XCircle,
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      textColor: 'text-red-400',
    },
    warning: {
      icon: AlertCircle,
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      textColor: 'text-yellow-400',
    },
    info: {
      icon: Info,
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-400',
    },
  }[type];

  const Icon = config.icon;

  return (
    <div className={`${config.bgColor} ${config.borderColor} border rounded-lg p-4`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 ${config.textColor} mt-0.5`} />
        <div className="flex-1">
          {title && (
            <h4 className={`font-semibold ${config.textColor} mb-1`}>
              {title}
            </h4>
          )}
          <p className="text-gray-300">{message}</p>
        </div>
      </div>
    </div>
  );
}

// Static Progress Bar
export function StaticProgressBar({ 
  value, 
  max = 100,
  label,
  showPercentage = true 
}: {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm text-gray-400">{label}</span>}
          {showPercentage && (
            <span className="text-sm text-[#ECB629]">{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#ECB629] to-[#f4c94d] rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

// Static List Component
export function StaticList({ 
  items,
  ordered = false,
  className = '' 
}: {
  items: string[];
  ordered?: boolean;
  className?: string;
}) {
  const Tag = ordered ? 'ol' : 'ul';
  const listClass = ordered ? 'list-decimal' : 'list-disc';

  return (
    <Tag className={`${listClass} list-inside space-y-2 text-gray-300 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="leading-relaxed">
          {item}
        </li>
      ))}
    </Tag>
  );
}

// Static Divider
export function StaticDivider({ 
  text,
  className = '' 
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div className={`relative py-8 ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-[#ECB629]/20" />
      </div>
      {text && (
        <div className="relative flex justify-center">
          <span className="bg-black px-4 text-sm text-gray-400">
            {text}
          </span>
        </div>
      )}
    </div>
  );
}

// Static Quote Component
export function StaticQuote({ 
  text,
  author,
  role 
}: {
  text: string;
  author?: string;
  role?: string;
}) {
  return (
    <blockquote className="relative">
      <div className="glassmorphism p-6 rounded-xl border-l-4 border-[#ECB629]">
        <div className="text-6xl text-[#ECB629]/20 absolute -top-2 -left-2">"</div>
        <p className="text-lg text-gray-300 italic relative z-10">
          {text}
        </p>
        {author && (
          <footer className="mt-4">
            <cite className="not-italic">
              <span className="text-white font-semibold">{author}</span>
              {role && <span className="text-gray-400 ml-2">– {role}</span>}
            </cite>
          </footer>
        )}
      </div>
    </blockquote>
  );
}