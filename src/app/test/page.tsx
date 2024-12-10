'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useDragControls } from 'framer-motion';
import { useTestData } from './hooks/useTestData';
import { useTestProgress } from './hooks/useTestProgress';
import { mockQuestions } from './data/mockQuestions';
import QuestionCard from './components/QuestionCard';
import NavigationBar from './components/NavigationBar';
import ProgressBar from './components/ProgressBar';
import ResultPreview from './components/ResultPreview';
import { Option } from './types';
import { calculateResult } from './utils/calculateResult';
import { useTestValidation } from './hooks/useTestValidation';
import { ErrorBoundary } from './components/ErrorBoundary';

const DRAG_THRESHOLD = 50; // 拖动阈值

export default function TestPage() {
  const { data, saveAnswer, clearData } = useTestData(mockQuestions);
  const { progress, updateProgress, goToQuestion } = useTestProgress(mockQuestions.length);
  const [isLoading, setIsLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);

  // 添加数据验证
  useTestValidation(data);

  // 优化手势控制
  const dragControls = useDragControls();
  const dragX = useMotionValue(0);
  const dragProgress = useTransform(dragX, [-200, 200], [100, -100]);

  useEffect(() => {
    // 模拟加载
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // 使用 useMemo 缓存计算结果
  const testResult = useMemo(() => {
    if (!showResult) return null;
    return calculateResult(data);
  }, [showResult, data]);

  // 优化回调函数
  const handleOptionSelect = useCallback((option: Option) => {
    const currentQuestion = data.questions[progress.currentQuestionIndex];
    saveAnswer(currentQuestion.id, option);
    updateProgress(currentQuestion.id, {
      questionId: currentQuestion.id,
      optionId: option.id,
      value: option.value
    }, currentQuestion.type);

    if (progress.currentQuestionIndex === data.questions.length - 1) {
      setShowResult(true);
    }
  }, [data, progress.currentQuestionIndex, saveAnswer, updateProgress]);

  // 使用 useCallback 优化手势处理函数
  const handleDragEnd = useCallback((event: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    // 添加速度判断,提升用户体验
    const shouldSwipe = Math.abs(offset) > DRAG_THRESHOLD || Math.abs(velocity) > 500;

    if (shouldSwipe) {
      if ((offset > 0 || velocity > 500) && progress.currentQuestionIndex > 0) {
        goToQuestion(progress.currentQuestionIndex - 1);
      } else if ((offset < 0 || velocity < -500) && progress.currentQuestionIndex < data.questions.length - 1) {
        goToQuestion(progress.currentQuestionIndex + 1);
      }
    }
  }, [progress.currentQuestionIndex, data.questions.length, goToQuestion]);

  // 处理重新测试
  const handleRetry = useCallback(() => {
    clearData();           // 清除测试数据
    setShowResult(false);  // 隐藏结果页
    goToQuestion(0);      // 回到第一题
  }, [clearData, goToQuestion]);

  // 处理分享
  const handleShare = useCallback(() => {
    // 这里可以实现分享逻辑，比如：
    // 1. 复制链接到剪贴板
    // 2. 打开分享弹窗
    // 3. 生成分享图片等
    alert('分享功能开发中...');
  }, []);

  if (showResult && testResult) {
    return (
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-2xl">
          <ResultPreview
            result={testResult}
            onRetry={handleRetry}
            onShare={handleShare}
          />
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        {isLoading ? (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-gray-600">加载中...</p>
            </div>
          </div>
        ) : (
          <div className="pt-4 pb-20">
            <div className="container mx-auto px-4 max-w-2xl">
              <div className="mb-8">
                <ProgressBar
                  progress={
                    (progress.sectionProgress[data.questions[progress.currentQuestionIndex].type] || 0)
                  }
                  type={data.questions[progress.currentQuestionIndex].type}
                />
              </div>

              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                style={{ x: dragX }}
              >
                <QuestionCard
                  question={data.questions[progress.currentQuestionIndex]}
                  selectedOptionId={data.answers[data.questions[progress.currentQuestionIndex].id]?.optionId}
                  onSelect={handleOptionSelect}
                />
              </motion.div>
            </div>

            <NavigationBar
              currentIndex={progress.currentQuestionIndex}
              totalQuestions={data.questions.length}
              canGoBack={progress.currentQuestionIndex > 0}
              canGoForward={
                progress.currentQuestionIndex < data.questions.length - 1 &&
                data.answers[data.questions[progress.currentQuestionIndex].id] !== undefined
              }
              onBack={() => goToQuestion(progress.currentQuestionIndex - 1)}
              onForward={() => goToQuestion(progress.currentQuestionIndex + 1)}
            />
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
} 