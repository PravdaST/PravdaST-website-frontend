"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function BulgarianCitiesSlider() {
  // Major Bulgarian cities
  const cities = [
    "София", "Пловдив", "Варна", "Бургас", "Русе", "Стара Загора", 
    "Плевен", "Добрич", "Шумен", "Перник", "Хасково", "Ямбол",
    "Пазарджик", "Благоевград", "Велико Търново", "Габрово", 
    "Видин", "Враца", "Кюстендил", "Кърджали", "Монтана", "Димитровград"
  ];

  // Duplicate cities for seamless infinite loop
  const duplicatedCities = [...cities, ...cities];

  return (
    <div className="relative w-full overflow-hidden py-4">
      <motion.div
        className="flex space-x-8 whitespace-nowrap"
        animate={{
          x: [0, -100 * cities.length]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ width: `${duplicatedCities.length * 160}px` }}
      >
        {duplicatedCities.map((city, index) => (
          <motion.div
            key={index}
            className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-yellow-400/10 to-green-400/10 border border-yellow-400/20 rounded-full text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300 min-w-[140px] flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="mr-2">📍</span>
            {city}
          </motion.div>
        ))}
      </motion.div>
      
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
    </div>
  );
}