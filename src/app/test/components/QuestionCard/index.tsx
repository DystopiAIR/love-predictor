'use client';

import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question, Option } from '../../types';
import OptionList from '../OptionList';

interface QuestionCardProps {
  question: Question;
  selectedOptionId?: string;
  onSelect: (option: Option) => void;
}

function QuestionCard({ 
  question,
  selectedOptionId,
  onSelect
}: QuestionCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="bg-white rounded-xl shadow-lg p-6 md:p-8"
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-gray-900"
            >
              {question.title}
            </motion.h2>
            {question.description && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600"
              >
                {question.description}
              </motion.p>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <OptionList
              options={question.options}
              selectedId={selectedOptionId}
              onSelect={onSelect}
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// 使用 memo 优化重渲染
export default memo(QuestionCard); 