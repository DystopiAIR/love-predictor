'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BrainCircuit, ChartPieIcon, FileSpreadsheet } from 'lucide-react';
import ResultCard from './home/components/ResultCard';

// 示例结果数据
const demoResults = [
  {
    score: 85,
    matches: [
      { key: '性格匹配', value: 90 },
      { key: '价值观契合', value: 85 },
      { key: '生活方式', value: 80 }
    ],
    suggestions: [
      '你们在性格上非常契合,建议多交流共同兴趣',
      '在价值观方面有较高的一致性,可以深入探讨未来规划',
      '生活方式略有差异,需要互相理解和适应'
    ]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
          >
            AI智能婚恋契合度测试
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            科学的测试方法，帮你找到最适合的伴侣
          </motion.p>
          <Link href="/test">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full font-medium text-lg shadow-lg"
            >
              开始测试
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">特色功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 text-brand-primary bg-brand-primary/10 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Result Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 gradient-text">
            示例结果
          </h2>
          <p className="text-gray-600 text-center mb-12">
            看看AI是如何分析和预测的
          </p>

          <div className="flex justify-center">
            <ResultCard
              data={demoResults[0]}
              isFlipped={false}
              onFlip={() => {}}
            />
          </div>

          {/* 统计数据 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">
                10,000+
              </div>
              <div className="text-gray-600">用户总数</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">
                8,500+
              </div>
              <div className="text-gray-600">成功匹配</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">
                85%
              </div>
              <div className="text-gray-600">准确率</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
