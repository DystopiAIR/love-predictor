/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 主色调
        brand: {
          primary: {
            DEFAULT: '#FF6B6B',
            hover: '#FF5252',
            active: '#FF3838',
          },
          secondary: {
            DEFAULT: '#4ECDC4',
            hover: '#45B7B0',
            active: '#3CA29C',
          },
        },
        // 中性色
        gray: {
          50: '#F8F9FA',    // 卡片背景
          100: '#EEEEEE',   // 分割线
          400: '#999999',   // 浅色文本
          600: '#666666',   // 次要文本
          900: '#333333',   // 主要文本
        },
        // 功能色
        success: '#2ECC71',
        warning: '#F1C40F',
        error: '#E74C3C',
        info: '#3498DB',
      },
      fontFamily: {
        sans: ['PingFang SC', 'Microsoft YaHei', 'sans-serif'],
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      perspective: {
        '1000': '1000px',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      transform: {
        'rotateY-180': 'rotateY(180deg)',
      },
    },
  },
  plugins: [],
};

