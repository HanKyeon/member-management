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
    },
  },
  plugins: [],
} satisfies Config;
