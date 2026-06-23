import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#A80C08',
          primary: '#D22418',
          orange: '#E85E2C',
          amber: '#ED8A38',
          cream: '#F6F1F1',
          rose: '#D3A2A1',
        },
        dark: {
          bg: '#0C0C0C',
          surface: '#1A1A1A',
          surfaceMuted: '#202020',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          inverse: 'var(--text-inverse)',
        },
        border: {
          default: 'var(--border-default)',
          strong: 'var(--border-strong)',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'sans-serif'],
      },
      screens: {
        xs: '375px',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        brand: '0 4px 24px rgba(210, 36, 24, 0.25)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-10px) rotate(12deg)' },
          '50%': { transform: 'translateY(10px) rotate(12deg)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
