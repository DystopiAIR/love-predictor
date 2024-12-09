'use client';

import { motion } from 'framer-motion';
import { type CallToActionProps } from '../types';

export default function CallToActionSection({
  id,
  primaryText,
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
  showRegister = false,
  socialShare = false
}: CallToActionProps) {
  return (
    <section id={id} className="py-20 bg-gradient-to-b from-white to-bg-card scroll-mt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            准备好开始你的浪漫之旅了吗？
          </h2>
          <p className="text-text-secondary mb-8">
            立即开始测试，发现你的完美匹配
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onPrimaryClick}
              className="btn-primary"
            >
              {primaryText}
            </button>
            <button
              onClick={onSecondaryClick}
              className="btn-secondary"
            >
              {secondaryText}
            </button>
          </div>

          {showRegister && (
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
          )}

          {socialShare && (
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
          )}
        </motion.div>
      </div>
    </section>
  );
} 