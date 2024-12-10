'use client';

import { motion } from 'framer-motion';
import { QuestionType } from '../../types';

interface ProgressBarProps {
  progress: number;
  type: QuestionType;
}

const typeColors = {
  personality: '#FF6B6B',
  values: '#4ECDC4', 
  requirements: '#3498DB'
};

export default function ProgressBar({ progress, type }: ProgressBarProps) {
  return (
    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="h-full"
        style={{ backgroundColor: typeColors[type] }}
      />
    </div>
  );
} 