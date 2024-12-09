import { motion } from 'framer-motion';
import { type StepProps } from '../types';

export default function StepCard({
  step,
  title,
  description,
  icon
}: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: step * 0.2 }}
      viewport={{ once: true }}
      className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">
        {step}
      </div>
      <div>
        <div className="w-12 h-12 mb-3 text-brand-primary">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
} 