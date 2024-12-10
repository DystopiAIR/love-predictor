/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
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
        gray: {
          50: '#F8F9FA',
          100: '#EEEEEE',
          400: '#999999',
          600: '#666666',
          900: '#333333',
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      perspective: {
        '1000': '1000px',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      }
    },
  },
  plugins: [],
};

