import { type HeroProps } from '@/app/home/types';

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  onCtaClick,
  backgroundType = 'gradient'
}: HeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          {subtitle}
        </p>
        <button 
          onClick={onCtaClick}
          className="btn-primary text-lg"
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
} 