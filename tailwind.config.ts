import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          deep: '#0C2340',
          medium: '#1E3A5F',
        },
        gold: {
          DEFAULT: '#F5C518',
          light: '#FFD63A',
          dark: '#D4AF37',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
