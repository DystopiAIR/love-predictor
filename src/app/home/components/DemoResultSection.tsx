'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type DemoResultSectionProps, type ResultCardProps } from '../types';
import ResultCard from './ResultCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface CarouselProps {
  items: ResultCardProps['data'][];
  autoPlay?: boolean;
  interval?: number;
}

// 添加默认示例数据
export const DEFAULT_RESULTS = [
  {
    score: 85,
    matches: [
      { key: "性格特征", value: 92 },
      { key: "兴趣爱好", value: 88 },
      { key: "价值观", value: 85 }
    ],
    suggestions: [
      "你们都是愿意尝试新事物的性格，这种开放性格会让你们的生活充满乐趣和惊喜。建议多一起参与新鲜的体验，比如尝试不同风格的美食、探索陌生的旅行地点等。",
      "共同的兴趣爱好是维系感情的重要纽带。你们在旅行和美食方面有很高的契合度，可以一起规划周末美食之旅，或者制定长期的旅行计划，这将帮助你们建立更多共同话题。",
      "建议多分享各自的生活经历和感受，特别是工作中的有趣故事或者生活中的小发现。这种分享不仅能增进了解，还能培养共同成长的默契。"
    ]
  },
  {
    score: 92,
    matches: [
      { key: "生活方式", value: 95 },
      { key: "未来规划", value: 90 },
      { key: "沟通方式", value: 88 }
    ],
    suggestions: [
      "你们对工作和事业的理念高度一致，都注重个人发展和职业规划。建议定期交流各自的职业目标和发展方向，互相支持和鼓励，共同规划未来的职业道路。",
      "生活品质的追求是你们的共同点，都很注重生活的精致感和仪式感。可以一起布置居住空间，创造温馨的生活氛围，也可以共同养成健康的生活习惯，如一起晨跑或健身。",
      "建议制定明确的共同目标，比如三年内的置业计划、旅行规划或者技能提升目标。定期回顾和调整这些目标，让你们的感情在共同奋斗中更加稳固。"
    ]
  },
  {
    score: 78,
    matches: [
      { key: "家庭观念", value: 82 },
      { key: "消费习惯", value: 75 },
      { key: "休闲方式", value: 78 }
    ],
    suggestions: [
      "你们对家庭的重视程度相似，都很看重亲情关系。建议多创造机会与对方家庭互动，可以定期组织家庭聚会，或者一起参与家庭活动，这将有助于建立更深厚的感情基础。",
      "在消费理财方面，你们都倾向于理性规划。建议一起制定详细的理财计划，包括日常开支预算、储蓄目标和投资策略，这样可以避免因金钱问题产生分歧。",
      "休闲时光的共处方式需要更多探索和调整。建议尝试不同的居家活动，如一起下厨、园艺或者观影，找到能让双方都感到放松和享受的相处方式。"
    ]
  }
];

const ResultCarousel: React.FC<CarouselProps> = ({ 
  items, 
  autoPlay = true, 
  interval = 3000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [flippedIndices, setFlippedIndices] = useState<boolean[]>(new Array(items.length).fill(false));

  useEffect(() => {
    if (!autoPlay || isUserInteracting) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval, isUserInteracting]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleFlip = (index: number) => {
    setFlippedIndices(prev => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsUserInteracting(true);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const difference = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(difference) < minSwipeDistance) return;

    if (difference > 0) {
      nextSlide();
    } else {
      prevSlide();
    }

    setIsUserInteracting(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    setIsUserInteracting(true);
    switch (e.key) {
      case 'ArrowLeft':
        prevSlide();
        break;
      case 'ArrowRight':
        nextSlide();
        break;
    }
    setIsUserInteracting(false);
  };

  return (
    <div 
      className="relative overflow-hidden w-full h-[400px]"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="示例结果轮播"
    >
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0 flex items-center justify-center px-[75px]">
            <ResultCard 
              data={item}
              isFlipped={flippedIndices[index]}
              onFlip={() => handleFlip(index)}
            />
          </div>
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white"
        aria-label="上一个"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white"
        aria-label="下一个"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default function DemoResultSection({
  id,
  results = DEFAULT_RESULTS,
  statistics
}: DemoResultSectionProps) {
  return (
    <section id={id} className="py-8 bg-gradient-to-b from-bg-card to-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
          示例结果
        </h2>
        <p className="text-text-secondary text-center mb-6">
          看看AI是如何分析和预测的
        </p>

        <div className="w-[600px] mx-auto mb-16 h-[400px]">
          <ResultCarousel items={results} />
        </div>

        {/* 数据统计 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {statistics.totalUsers.toLocaleString()}+
            </div>
            <div className="text-text-secondary">用户总数</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {statistics.successMatches.toLocaleString()}+
            </div>
            <div className="text-text-secondary">成功匹配</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {statistics.accuracy}%
            </div>
            <div className="text-text-secondary">准确率</div>
          </div>
        </div>
      </div>
    </section>
  );
} 