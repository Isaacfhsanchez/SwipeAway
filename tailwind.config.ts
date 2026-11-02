import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1F3A',
        ink: '#0F172A',
        ice: '#EAF4FF',
        blue: {
          50: '#F2F8FF',
          100: '#DDEEFF',
          500: '#2A6BFF',
          600: '#1E5AE6',
          700: '#1849BA',
        },
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.12)',
        card: '0 10px 30px rgba(10, 31, 58, 0.08)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top, rgba(42,107,255,0.15), transparent 35%), linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(243,248,255,1) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
