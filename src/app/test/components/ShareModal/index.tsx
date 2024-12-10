'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ShareModalProps {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareModal({ imageUrl, isOpen, onClose }: ShareModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />
          
          {/* 弹窗内容 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
              {/* 弹窗头部 */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-xl font-semibold text-gray-900">
                  分享结果
                </h3>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* 截图预览 */}
              <div className="p-4 overflow-auto">
                <img
                  src={imageUrl}
                  alt="测试结果"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              
              {/* 操作按钮 */}
              <div className="p-4 border-t flex justify-end gap-4">
                <button
                  onClick={() => {
                    // 下载图片
                    const link = document.createElement('a');
                    link.href = imageUrl;
                    link.download = '测试结果.png';
                    link.click();
                  }}
                  className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                >
                  保存图片
                </button>
                <button
                  onClick={() => {
                    // 复制图片到剪贴板
                    navigator.clipboard.writeText(imageUrl)
                      .then(() => alert('已复制到剪贴板'))
                      .catch(() => alert('复制失败'));
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full"
                >
                  复制图片
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 