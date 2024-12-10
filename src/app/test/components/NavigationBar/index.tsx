'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationBarProps {
  currentIndex: number;
  totalQuestions: number;
  canGoBack: boolean;
  canGoForward: boolean;
  onBack: () => void;
  onForward: () => void;
}

export default function NavigationBar({
  currentIndex,
  totalQuestions,
  canGoBack,
  canGoForward,
  onBack,
  onForward
}: NavigationBarProps) {
  // 键盘快捷键支持
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && canGoBack) {
        onBack();
      } else if (e.key === 'ArrowRight' && canGoForward) {
        onForward();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [canGoBack, canGoForward, onBack, onForward]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3 md:py-4">
      <div className="container mx-auto flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          disabled={!canGoBack}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
            ${canGoBack 
              ? 'text-gray-700 hover:bg-gray-100' 
              : 'text-gray-400 cursor-not-allowed'
            }
          `}
        >
          <ArrowLeft size={20} />
          <span>上一题</span>
        </motion.button>

        <div className="text-gray-500">
          {currentIndex + 1} / {totalQuestions}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onForward}
          disabled={!canGoForward}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
            ${canGoForward
              ? 'text-white bg-brand-primary hover:bg-brand-primary/90'
              : 'text-gray-400 bg-gray-100 cursor-not-allowed'
            }
          `}
        >
          <span>下一题</span>
          <ArrowRight size={20} />
        </motion.button>
      </div>
    </div>
  );
} 