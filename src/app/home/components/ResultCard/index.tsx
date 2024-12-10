'use client';

import { motion } from 'framer-motion';

interface ResultCardProps {
  data: {
    score: number;
    matches: Array<{
      key: string;
      value: number;
    }>;
    suggestions: string[];
  };
  isFlipped: boolean;
  onFlip: () => void;
}

// 修改进度条组件
const ProgressBar = ({ value }: { value: number }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-4 bg-gray-100 rounded overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary"
        />
      </div>
      <div className="w-12 text-sm font-medium text-gray-700 text-right">
        {value}%
      </div>
    </div>
  );
};

export default function ResultCard({
  data: { score, matches, suggestions },
  isFlipped,
  onFlip,
}: ResultCardProps) {
  return (
    <div className="w-[500px] bg-white rounded-xl shadow-lg overflow-hidden">
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-[400px] cursor-pointer"
        onClick={onFlip}
        style={{ 
          transformStyle: 'preserve-3d' 
        }}
      >
        {/* 正面 */}
        <div 
          className="absolute inset-0 bg-white"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="p-8 h-full flex flex-col">
            <div className="flex-1">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4">
                  <div className="text-5xl font-bold gradient-text">{score}%</div>
                  <div className="text-gray-600 text-lg">契合度</div>
                </div>
              </div>
              <div className="space-y-6">
                {matches.map((match) => (
                  <div key={match.key} className="space-y-2">
                    <div className="text-base font-medium text-gray-700">
                      {match.key}
                    </div>
                    <ProgressBar value={Number(match.value)} />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center text-base text-gray-400 mt-6">
              点��查看详细分析
            </div>
          </div>
        </div>

        {/* 背面 */}
        <div 
          className="absolute inset-0 bg-white overflow-y-auto"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="p-8 h-full flex flex-col">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">建议</h3>
              <ul className="space-y-6">
                {suggestions.map((suggestion, index) => (
                  <li 
                    key={index} 
                    className="text-gray-600 text-base leading-relaxed"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center text-base text-gray-400 mt-6 pt-4 border-t border-gray-100">
              点击返回概览
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 