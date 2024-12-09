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
const DEFAULT_RESULTS = [
  {
    score: 85,
    matches: [
      { key: "性格特征", value: "开朗大方" },
      { key: "兴趣爱好", value: "旅行、美食" },
      { key: "价值观", value: "积极向上" }
    ],
    suggestions: [
      "你们都很喜欢尝试新事物",
      "共同的兴趣爱好是很好的交流话题",
      "建议多分享各自的生活经历"
    ]
  },
  {
    score: 92,
    matches: [
      { key: "生活方式", value: "规律作息" },
      { key: "未来规划", value: "事业为重" },
      { key: "沟通方式", value: "直接坦诚" }
    ],
    suggestions: [
      "工作理念��契合",
      "都很注重生活质量",
      "建议制定共同的目标"
    ]
  },
  {
    score: 78,
    matches: [
      { key: "家庭观念", value: "重视亲情" },
      { key: "消费习惯", value: "理性消费" },
      { key: "休闲方式", value: "居家为主" }
    ],
    suggestions: [
      "对家庭的重视程度相似",
      "经济观念比较一致",
      "可以多创造共处的时光"
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
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
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

        <div className="w-[450px] mx-auto mb-16 h-[400px]">
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