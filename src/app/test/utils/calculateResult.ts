import { TestData, TestResult, Answer, QuestionType } from '../types';

interface CategoryScore {
  total: number;
  count: number;
}

export function calculateResult(data: TestData): TestResult {
  // 按类型分组计算分数
  const categoryScores = Object.values(data.answers).reduce((acc, answer) => {
    const question = data.questions.find(q => q.id === answer.questionId);
    if (!question) return acc;

    if (!acc[question.type]) {
      acc[question.type] = { total: 0, count: 0 };
    }

    acc[question.type].total += answer.value;
    acc[question.type].count += 1;

    return acc;
  }, {} as Record<QuestionType, CategoryScore>);

  // 计算各维度得分
  const matches = Object.entries(categoryScores).map(([type, score]) => {
    const percentage = Math.round((score.total / (score.count * 5)) * 100);
    return {
      key: getTypeLabel(type as QuestionType),
      value: percentage
    };
  });

  // 计算总分
  const totalScore = Math.round(
    matches.reduce((sum, match) => sum + match.value, 0) / matches.length
  );

  // 生成建议
  const suggestions = generateSuggestions(matches);

  return {
    score: totalScore,
    matches,
    suggestions
  };
}

function getTypeLabel(type: QuestionType): string {
  const labels: Record<QuestionType, string> = {
    personality: '性格匹配',
    values: '价值观契合',
    requirements: '基本条件'
  };
  return labels[type];
}

function generateSuggestions(matches: Array<{ key: string; value: number }>): string[] {
  const suggestions: string[] = [];

  matches.forEach(match => {
    if (match.value >= 80) {
      suggestions.push(
        `在${match.key}方面非常契合,建议继续保持良好的互动和理解`
      );
    } else if (match.value >= 60) {
      suggestions.push(
        `在${match.key}方面有一定契合度,可以通过沟通增进理解`
      );
    } else {
      suggestions.push(
        `在${match.key}方面存在一些差异,需要更多包容和适应`
      );
    }
  });

  // 根据总体情况添加综合建议
  const avgScore = matches.reduce((sum, m) => sum + m.value, 0) / matches.length;
  if (avgScore >= 80) {
    suggestions.push('总体来看,你们是非常匹配的一对,建议进一步发展关系');
  } else if (avgScore >= 60) {
    suggestions.push('总体来看,你们有发展潜力,建议多些互相了解');
  } else {
    suggestions.push('总体来看,你们可能需要更多时间相互了解��调适');
  }

  return suggestions;
} 