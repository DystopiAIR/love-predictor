import { useEffect } from 'react';
import { TestData, Question } from '../types';

interface ValidationError {
  message: string;
  field?: string;
}

export function useTestValidation(data: TestData) {
  useEffect(() => {
    try {
      validateQuestions(data.questions);
      validateAnswers(data);
    } catch (error) {
      console.error('数据验证错误:', error);
      // 这里可以触发错误处理UI或其他逻辑
    }
  }, [data]);
}

function validateQuestions(questions: Question[]) {
  const errors: ValidationError[] = [];

  // 验证问题数量
  if (questions.length < 5) {
    errors.push({
      message: '测试题目数量不足'
    });
  }

  // 验证每个问题的结构
  questions.forEach((question, index) => {
    if (!question.id) {
      errors.push({
        message: `第${index + 1}题缺少ID`,
        field: 'id'
      });
    }

    if (!question.type) {
      errors.push({
        message: `第${index + 1}题缺少类型`,
        field: 'type'
      });
    }

    if (!question.title) {
      errors.push({
        message: `第${index + 1}题缺少标题`,
        field: 'title'
      });
    }

    if (!question.options || question.options.length < 2) {
      errors.push({
        message: `第${index + 1}题选项数量不足`,
        field: 'options'
      });
    }
  });

  if (errors.length > 0) {
    throw new Error(
      `数据验证失败:\n${errors.map(e => e.message).join('\n')}`
    );
  }
}

function validateAnswers(data: TestData) {
  const errors: ValidationError[] = [];

  // 验证答案格式
  Object.entries(data.answers).forEach(([questionId, answer]) => {
    const question = data.questions.find(q => q.id === questionId);
    if (!question) {
      errors.push({
        message: `找不到问题: ${questionId}`,
        field: 'questionId'
      });
      return;
    }

    const option = question.options.find(o => o.id === answer.optionId);
    if (!option) {
      errors.push({
        message: `问题 ${questionId} 找不到选项: ${answer.optionId}`,
        field: 'optionId'
      });
    }
  });

  if (errors.length > 0) {
    throw new Error(
      `答案验证失败:\n${errors.map(e => e.message).join('\n')}`
    );
  }
} 