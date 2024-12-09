'use client';

import { motion } from 'framer-motion';
import { type FeatureCardProps } from '../types';

export default function FeatureCard({
  icon,
  title,
  description,
  animationDelay = 0
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-16 h-16 flex items-center justify-center text-brand-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
} 