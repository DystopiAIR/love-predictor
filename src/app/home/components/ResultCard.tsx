'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { type ResultCardProps } from '../types';

export default function ResultCard({
  data: { score, matches, suggestions },
  isFlipped,
  onFlip,
}: ResultCardProps) {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full cursor-pointer"
        onClick={onFlip}
        style={{ 
          // @ts-ignore
          transformStyle: 'preserve-3d' 
        }}
      >
        {/* 正面 */}
        <div 
          className="absolute w-full h-full"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="p-5 bg-gray-50 rounded-xl shadow-lg h-full flex flex-col">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold gradient-text mb-1">{score}%</div>
                  <div className="text-gray-600 text-sm">契合度</div>
                </div>
                <div className="space-y-3">
                  {matches.slice(0, 3).map((match) => (
                    <div key={match.key} className="flex justify-between items-center">
                      <span className="text-gray-900 text-sm">{match.key}</span>
                      <span className="text-gray-600 text-sm">{match.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 text-center text-sm text-gray-400">
                点击查看详细分析
              </div>
            </div>
          </div>
        </div>

        {/* 背面 */}
        <div 
          className="absolute w-full h-full"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="p-5 bg-gray-50 rounded-xl shadow-lg h-full flex flex-col">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">建议</h3>
                <ul className="space-y-2">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} className="text-gray-600 text-sm">
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 text-center text-sm text-gray-400">
                点击返回概览
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 