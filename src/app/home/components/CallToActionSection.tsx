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
}: CallToActionProps) {
  return (
    <section id={id} className="py-20 bg-gradient-to-b from-white to-bg-card scroll-mt-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
          准备好开始你的浪漫之旅了吗？
        </h2>
        
        <div className="flex justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
            onClick={onPrimaryClick}
          >
            {primaryText}
          </motion.button>
          {secondaryText && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-gray-600 rounded-full font-medium shadow-lg"
              onClick={onSecondaryClick}
            >
              {secondaryText}
            </motion.button>
          )}
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
      </div>
    </section>
  );
} 