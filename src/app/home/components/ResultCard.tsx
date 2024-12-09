'use client';

import { motion } from 'framer-motion';
import { type ResultCardProps } from '../types';

export default function ResultCard({
  data: { score, matches, suggestions },
  isFlipped,
  onFlip,
}: ResultCardProps) {
  return (
    <div className="w-[300px] bg-white rounded-xl shadow-lg overflow-hidden">
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-[300px] cursor-pointer"
        onClick={onFlip}
        style={{ 
          // @ts-ignore
          transformStyle: 'preserve-3d' 
        }}
      >
        {/* 正面 */}
        <div 
          className="absolute inset-0 bg-white"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex-1">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold gradient-text mb-2">{score}%</div>
                <div className="text-gray-600">契合度</div>
              </div>
              <div className="space-y-4">
                {matches.slice(0, 3).map((match) => (
                  <div key={match.key} className="flex justify-between items-center">
                    <span className="text-gray-900">{match.key}</span>
                    <span className="text-gray-600">{match.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center text-sm text-gray-400 mt-4">
              点击查看详细分析
            </div>
          </div>
        </div>

        {/* 背面 */}
        <div 
          className="absolute inset-0 bg-white"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">建议</h3>
              <ul className="space-y-3">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="text-gray-600">
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center text-sm text-gray-400 mt-4">
              点击返回概览
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 