'use client';

import { motion } from 'framer-motion';
import { type FeatureCardProps } from '../types';

export default function FeatureCard({
  title,
  description,
  icon,
  animationDelay = 0
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay: animationDelay
      }}
      className="w-[150px] text-center group relative"
    >
      <div className="mb-2 flex justify-center">
        <div className="w-12 h-12 flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
      <div className="relative inline-block">
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>
        <div className="
          absolute left-full top-1/2 -translate-y-1/2 ml-3
          opacity-0 group-hover:opacity-100
          translate-x-2 group-hover:translate-x-0
          pointer-events-none
          transition-all duration-300 ease-out
          whitespace-nowrap
          text-xs text-gray-500
        ">
          {description}
        </div>
      </div>
    </motion.div>
  );
} 