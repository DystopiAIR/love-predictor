import { useState, useCallback } from 'react';
import { TestData, Question, Answer, Option } from '../types';

const STORAGE_KEY = 'test_data';

// 创建初始状态的工厂函数
const createInitialState = (questions: Question[]): TestData => ({
  questions,
  answers: {},
  progress: {
    currentQuestionIndex: 0,
    totalQuestions: questions.length,
    answers: {},
    sectionProgress: {
      personality: 0,
      values: 0,
      requirements: 0
    }
  }
});

export function useTestData(initialQuestions: Question[]) {
  const [data, setData] = useState<TestData>(() => {
    // 尝试从 localStorage 恢复数据
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse saved test data:', e);
        }
      }
    }
    
    return createInitialState(initialQuestions);
  });

  // 保存答案
  const saveAnswer = useCallback((questionId: string, option: Option) => {
    setData(prev => {
      const answer: Answer = {
        questionId,
        optionId: option.id,
        value: option.value
      };
      
      const newData = {
        ...prev,
        answers: {
          ...prev.answers,
          [questionId]: answer
        }
      };

      // 保存到 localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      }

      return newData;
    });
  }, []);

  // 清除数据
  const clearData = useCallback(() => {
    // 完全重置到初始状态
    const initialState = createInitialState(initialQuestions);
    
    // 清除 localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    
    setData(initialState);
  }, [initialQuestions]);

  return {
    data,
    saveAnswer,
    clearData
  };
} 