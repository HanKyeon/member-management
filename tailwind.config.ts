import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'Roboto'],
        roboto: ['Roboto', 'Roboto'],
      },
      colors: {
        recatch: {
          error: '#FF4D4F',
          primary: '#4A7CFE',
          'primary-hover': '#739FFF',
          'primary-active': '#345DD9',
          disabled: '#0000000A',
          border: '#E3E3E3',
          'text-hover': '#0000000F',
          'text-secondary': '#000000A6',
          'text-tertiary': '#00000073',
          'text-light-solid': '#FFFFFF',
          'text-disabled': '#00000040',
          'text-placeholder': '#00000040',
          'text-description': '#00000073',
          text: '#000000E0',
          'item-active': '#F0F7FF',
          'item-hover': '#0000000A',
          'fill-alter': '#00000005',
          split: '#0000000F',
          icon: '#00000073',
        },
      },
      spacing: {
        vh: '1vh',
        vw: '1vw',
      },
      boxShadow: {
        'input-blur': '0px 0px 0px 2px rgba(74, 124, 254, 0.15)',
        'calendar-blur': `
          0px 9px 28px 8px rgba(0, 0, 0, 0.05),
          0px 3px 6px -4px rgba(0, 0, 0, 0.12),
          0px 6px 16px 0px rgba(0, 0, 0, 0.08)
        `,
      },
    },
  },
  plugins: [],
} satisfies Config;
