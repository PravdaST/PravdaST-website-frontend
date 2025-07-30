'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProfileCardProps {
  name?: string;
  title?: string;
  avatar?: string;
  bio?: string;
  stats?: {
    projects: number;
    clients: number;
    experience: number;
  };
  theme?: 'light' | 'dark';
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name = "Pravdast Team",
  title = "Business Engineers",
  avatar = "/team-avatar.jpg",
  bio = "Създаваме предвидими системи за растеж на бизнеса чрез инженерен подход.",
  stats = { projects: 50, clients: 25, experience: 5 },
  theme = 'dark',
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`profile-card ${theme} ${className}`}
    >
      {/* Glassmorphism background */}
      <div className="glassmorphism rounded-2xl p-8 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#ECB629]/10 to-transparent opacity-60"></div>
        
        {/* Header Section */}
        <div className="relative z-10 text-center mb-6">
          <div className="relative inline-block mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#ECB629] to-[#ECB629]/70 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                {avatar && avatar !== "/team-avatar.jpg" ? (
                  <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
                ) : (
                  <span className="text-2xl font-bold text-[#ECB629]">{name?.[0] || 'P'}</span>
                )}
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-900"></div>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-sm text-gray-300 font-medium">{title}</p>
        </div>

        {/* Bio Section */}
        <div className="relative z-10 text-center mb-6">
          <p className="text-sm text-gray-400 leading-relaxed">{bio}</p>
        </div>

        
      </div>
    </motion.div>
  );
};

export default ProfileCard;