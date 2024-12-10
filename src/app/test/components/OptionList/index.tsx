'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { Option } from '../../types';

interface OptionListProps {
  options: Option[];
  selectedId?: string;
  onSelect: (option: Option) => void;
}

function OptionList({ options, selectedId, onSelect }: OptionListProps) {
  return (
    <div className="space-y-3">
      {options.map((option, index) => (
        <motion.div
          key={option.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative"
        >
          <button
            onClick={() => onSelect(option)}
            className={`
              w-full p-4 text-left rounded-lg transition-all duration-200
              ${selectedId === option.id 
                ? 'bg-brand-primary text-white shadow-lg scale-[1.02]' 
                : 'bg-white hover:bg-gray-50 text-gray-700 shadow-md hover:scale-[1.01]'
              }
            `}
          >
            <div className="flex items-center gap-3">
              <div className={`
                w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0
                ${selectedId === option.id 
                  ? 'border-white' 
                  : 'border-gray-300'
                }
              `}>
                {selectedId === option.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-3 h-3 bg-white rounded-full"
                  />
                )}
              </div>
              <span className="text-lg">{option.text}</span>
            </div>
          </button>
        </motion.div>
      ))}
    </div>
  );
}

// 使用 memo 优化重渲染
export default memo(OptionList); 