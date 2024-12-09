'use client';

import { motion } from 'framer-motion';
import { type IntroductionSectionProps } from '../types';
import StepCard from './StepCard';

export default function IntroductionSection({
  id,
  steps
}: IntroductionSectionProps) {
  return (
    <section id={id} className="py-20 bg-gradient-to-b from-white to-bg-card scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
          使用流程
        </h2>
        <p className="text-text-secondary text-center mb-12">
          简单三步，开启你的浪漫之旅
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
} 