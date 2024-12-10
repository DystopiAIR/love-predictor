'use client';

export default function RegisterForm() {
  return (
    <div className="mt-12">
      <p className="text-text-secondary mb-4">
        注册会员，获取更多专业分析
      </p>
      <div className="flex justify-center gap-4">
        <button className="text-text-secondary hover:text-primary transition-colors">
          微信登录
        </button>
        <button className="text-text-secondary hover:text-primary transition-colors">
          手机注册
        </button>
      </div>
    </div>
  );
} 