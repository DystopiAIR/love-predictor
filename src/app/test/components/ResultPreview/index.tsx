'use client';

import { motion } from 'framer-motion';
import { Share2 } from 'lucide-react';
import { TestResult } from '../../types';

interface ResultPreviewProps {
  result: TestResult;
  onRetry?: () => void;
  onShare?: () => void;
}

export default function ResultPreview({ result, onRetry, onShare }: ResultPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-block bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full px-6 py-2 mb-4"
        >
          测试完成!
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          你的契合度得分
        </h2>
        <div className="text-5xl font-bold gradient-text">
          {result.score}%
        </div>
      </div>

      <div className="space-y-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          特征匹配分析
        </h3>
        {result.matches.map((match, index) => (
          <motion.div
            key={match.key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">{match.key}</span>
              <span className="text-gray-900 font-medium">{match.value}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${match.value}%` }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">
          建议
        </h3>
        <ul className="space-y-2">
          {result.suggestions.map((suggestion, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-gray-600"
            >
              {suggestion}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRetry}
          className="px-6 py-2 bg-gray-100 text-gray-600 rounded-full font-medium text-lg 
            hover:bg-gradient-to-r hover:from-brand-primary hover:to-brand-secondary hover:text-white 
            transition-all duration-300 w-1/4"
        >
          重新测试
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onShare}
          className="px-6 py-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white 
            rounded-full font-medium text-lg transition-all duration-300 w-1/4 flex items-center justify-center gap-2"
        >
          <Share2 size={20} />
          分享结果
        </motion.button>
      </div>
    </motion.div>
  );
} 