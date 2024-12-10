export type QuestionType = 'personality' | 'values' | 'requirements';

export interface Question {
  id: string;
  type: QuestionType;
  title: string;
  description?: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  value: number;
}

export interface Answer {
  questionId: string;
  optionId: string;
  value: number;
}

export interface TestProgress {
  currentQuestionIndex: number;
  totalQuestions: number;
  answers: Record<string, Answer>;
  sectionProgress: Record<QuestionType, number>;
}

export interface TestData {
  questions: Question[];
  answers: Record<string, Answer>;
  progress: TestProgress;
}

export interface TestResult {
  score: number;
  matches: Array<{
    key: string;
    value: number;
  }>;
  suggestions: string[];
} 