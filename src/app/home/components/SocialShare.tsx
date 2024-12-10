'use client';

export default function SocialShare() {
  return (
    <div className="mt-8">
      <p className="text-text-secondary mb-4">
        分享给好友
      </p>
      <div className="flex justify-center gap-4">
        <button className="text-text-secondary hover:text-primary transition-colors">
          微信
        </button>
        <button className="text-text-secondary hover:text-primary transition-colors">
          朋友圈
        </button>
        <button className="text-text-secondary hover:text-primary transition-colors">
          复制链接
        </button>
      </div>
    </div>
  );
} 