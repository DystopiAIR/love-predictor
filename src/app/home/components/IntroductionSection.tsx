import { type IntroductionSectionProps } from '../types';
import FeatureCard from './FeatureCard';
import StepCard from './StepCard';

export default function IntroductionSection({
  id,
  features,
  steps
}: IntroductionSectionProps) {
  return (
    <section id={id} className="py-20 bg-gradient-to-b from-white to-bg-card scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* 特征卡片 */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            核心功能
          </h2>
          <p className="text-text-secondary text-center mb-12">
            科学的评估体系，精准的匹配算法
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                animationDelay={index * 0.2}
              />
            ))}
          </div>
        </div>

        {/* 步骤卡片 */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            使用流程
          </h2>
          <p className="text-text-secondary text-center mb-12">
            简单三步，开启你的浪漫之旅
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <StepCard key={step.step} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 