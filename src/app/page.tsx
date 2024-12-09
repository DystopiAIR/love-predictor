'use client';

import { BrainCircuit, FileSpreadsheet, ChartPieIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Suspense, useState, useEffect } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';

const HeroSection = dynamic(() => import('./home/components/HeroSection'));
const IntroductionSection = dynamic(() => import('./home/components/IntroductionSection'), {
  ssr: true,
  loading: () => (
    <div className="py-20 animate-pulse">
      <div className="container mx-auto px-4">
        <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  )
});
const DemoResultSection = dynamic(() => import('./home/components/DemoResultSection'), {
  ssr: true,
  loading: () => (
    <div className="py-20 bg-gradient-to-b from-bg-card to-white animate-pulse">
      <div className="container mx-auto px-4">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-12"></div>
        <div className="max-w-sm mx-auto h-80 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
});
const CallToActionSection = dynamic(() => import('./home/components/CallToActionSection'), {
  ssr: true,
  loading: () => (
    <div className="py-20 animate-pulse">
      <div className="container mx-auto px-4 text-center">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-8"></div>
        <div className="flex justify-center gap-4">
          <div className="h-12 w-32 bg-gray-200 rounded-full"></div>
          <div className="h-12 w-32 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  )
});

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

const preloadComponents = () => {
  const components = [
    () => import('./home/components/HeroSection'),
    () => import('./home/components/IntroductionSection'),
    () => import('./home/components/DemoResultSection'),
    () => import('./home/components/CallToActionSection'),
  ];
  
  components.forEach(comp => {
    const prefetch = () => {
      comp();
      window.removeEventListener('mousemove', prefetch);
    };
    window.addEventListener('mousemove', prefetch);
  });
};

export default function Home() {
  useEffect(() => {
    preloadComponents();
  }, []);

  const handleCtaClick = (section?: string) => {
    const targetSection = document.getElementById(section || 'test-section');
    if (targetSection) {
      const offset = 80; // 考虑固定导航栏的高度
      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const features = [
    {
      icon: <BrainCircuit size={32} />,
      title: "AI算法分析",
      description: "先进的机器学习算法，精准分析性格特征"
    },
    {
      icon: <ChartPieIcon size={32} />,
      title: "快速精准匹配",
      description: "多维度数据分析，找到最适合的伴侣"
    },
    {
      icon: <FileSpreadsheet size={32} />,
      title: "科学评估体系",
      description: "基于心理学理论的专业评估体系"
    }
  ];

  const steps = [
    {
      step: 1,
      icon: <FileSpreadsheet size={32} />,
      title: "完成测试问卷",
      description: "简单的性格测试和价值观调查"
    },
    {
      step: 2,
      icon: <BrainCircuit size={32} />,
      title: "AI分析处理",
      description: "智能算法分析你的性格特征"
    },
    {
      step: 3,
      icon: <ChartPieIcon size={32} />,
      title: "获取详细报告",
      description: "查看完整的匹配分析报告"
    }
  ];

  const demoResults = [
    {
      score: 85,
      matches: [
        { key: '性格特征', value: '高度匹配' },
        { key: '价值观', value: '非常相似' },
        { key: '生活方式', value: '较为契合' }
      ],
      suggestions: [
        '你们都是善解人意的性格，沟通会很顺畅',
        '共同的价值观是系关系的重要基础',
        '在生活习惯上可能需要一些小调整'
      ]
    },
    {
      score: 92,
      matches: [
        { key: '兴趣爱好', value: '完美契合' },
        { key: '沟通方式', value: '高度匹配' },
        { key: '未来规划', value: '目标一致' }
      ],
      suggestions: [
        '共同的兴趣爱好将让你们的关系更加稳固',
        '良好的沟通基础有助于解决问题',
        '对未来的共同规划是感情长久的保障'
      ]
    },
    {
      score: 78,
      matches: [
        { key: '性格互补', value: '较好' },
        { key: '生活节奏', value: '有差异' },
        { key: '共同话题', value: '丰富' }
      ],
      suggestions: [
        '性格上的互补可以带来新鲜感',
        '需要在生活节奏上相互理解和调整',
        '丰富的共同话题有助于维持感情新鲜度'
      ]
    }
  ];

  const statistics = {
    totalUsers: 10000,
    successMatches: 2000,
    accuracy: 95
  };

  return (
    <main className="min-h-screen relative">
      <ScrollProgress />
      <ErrorBoundary>
        <Suspense fallback={null}>
          <HeroSection 
            title="AI智能婚恋契合度预测"
            subtitle="科技赋能，助你找到真爱"
            ctaText="开始测试"
            onCtaClick={() => handleCtaClick('intro-section')}
            backgroundType="gradient"
          />
        </Suspense>
      </ErrorBoundary>
      <Suspense fallback={null}>
        <IntroductionSection 
          id="intro-section"
          features={features}
          steps={steps}
        />
      </Suspense>
      <Suspense fallback={null}>
        <DemoResultSection
          id="demo-section"
          results={demoResults}
          statistics={statistics}
        />
      </Suspense>
      <Suspense fallback={null}>
        <CallToActionSection
          id="test-section"
          primaryText="立即开始测试"
          secondaryText="了解更多"
          onPrimaryClick={() => handleCtaClick('test-section')}
          onSecondaryClick={() => handleCtaClick('demo-section')}
          showRegister={true}
          socialShare={true}
        />
      </Suspense>
    </main>
  );
}
