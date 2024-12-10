import { useState, useCallback } from 'react';
import { TestProgress, Answer, QuestionType } from '../types';

export function useTestProgress(totalQuestions: number) {
  const [progress, setProgress] = useState<TestProgress>({
    currentQuestionIndex: 0,
    totalQuestions,
    answers: {},
    sectionProgress: {
      personality: 0,
      values: 0,
      requirements: 0
    }
  });

  const updateProgress = useCallback((
    questionId: string, 
    answer: Answer, 
    type: QuestionType
  ) => {
    setProgress(prev => {
      const newAnswers = { ...prev.answers, [questionId]: answer };
      const answeredCount = Object.keys(newAnswers).length;
      
      // 简单计算总体进度百分比
      const progressPercentage = (answeredCount / totalQuestions) * 100;

      return {
        ...prev,
        answers: newAnswers,
        currentQuestionIndex: Math.min(answeredCount, totalQuestions - 1),
        sectionProgress: {
          personality: progressPercentage,
          values: progressPercentage,
          requirements: progressPercentage
        }
      };
    });
  }, [totalQuestions]);

  const goToQuestion = useCallback((index: number) => {
    setProgress(prev => {
      // 如果是回到第一题，完全重置进度
      if (index === 0) {
        return {
          currentQuestionIndex: 0,
          totalQuestions: prev.totalQuestions,
          answers: {},
          sectionProgress: {
            personality: 0,
            values: 0,
            requirements: 0
          }
        };
      }
      
      // 否则只更新当前题目索引
      return {
        ...prev,
        currentQuestionIndex: Math.max(0, Math.min(index, prev.totalQuestions - 1))
      };
    });
  }, []);

  return {
    progress,
    updateProgress,
    goToQuestion
  };
} 