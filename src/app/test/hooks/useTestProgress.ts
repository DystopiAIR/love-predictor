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
      
      // 计算分类进度
      const sectionAnswers = Object.values(newAnswers)
        .filter(a => a.questionId.startsWith(type));
      const sectionProgress = {
        ...prev.sectionProgress,
        [type]: (sectionAnswers.length / totalQuestions) * 100
      };

      return {
        ...prev,
        answers: newAnswers,
        currentQuestionIndex: Math.min(answeredCount, totalQuestions - 1),
        sectionProgress
      };
    });
  }, [totalQuestions]);

  const goToQuestion = useCallback((index: number) => {
    setProgress(prev => ({
      ...prev,
      currentQuestionIndex: Math.max(0, Math.min(index, prev.totalQuestions - 1))
    }));
  }, []);

  return {
    progress,
    updateProgress,
    goToQuestion
  };
} 