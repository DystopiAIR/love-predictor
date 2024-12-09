import { ReactNode } from 'react';

export interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
  backgroundType?: 'particles' | 'gradient' | 'animation';
}

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  animationDelay?: number;
}

export interface StepProps {
  step: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface IntroductionSectionProps {
  id?: string;
  features: FeatureCardProps[];
  steps: StepProps[];
}

export interface MatchPoint {
  key: string;
  value: string;
}

export interface ResultCardData {
  score: number;
  matches: Array<{
    key: string;
    value: string;
  }>;
  suggestions: string[];
}

export interface ResultCardProps {
  data: ResultCardData;
  isFlipped: boolean;
  onFlip: () => void;
}

export interface DemoResultSectionProps {
  id?: string;
  results: ResultCardData[];
  statistics: {
    totalUsers: number;
    successMatches: number;
    accuracy: number;
  };
}

export interface CallToActionProps {
  id?: string;
  primaryText: string;
  secondaryText: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
  showRegister?: boolean;
  socialShare?: boolean;
} 