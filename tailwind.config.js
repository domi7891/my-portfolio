const lineClamp = require('@tailwindcss/line-clamp')

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray_variant: {
          light: '#ededed',
          DEFAULT: '#737373',
          dark: '#1F1F1F',
        },
        orange: {
          50: '#ffe9d6',
          100: '#ffd1ab',
          200: '#ffb578',
          300: '#ff9a47',
          400: '#ff821c',
          500: '#ff7300',
          600: '#d66100',
          700: '#b85300',
          800: '#a34a00',
          900: '#6e3200',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      transitionDelay: {
        0: '0ms',
        250: '250ms',
        750: '750ms',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scrolldown: {
          '0%': { opacity: '0', top: '0.5rem' },
          '25%': { opacity: '1' },
          '50%': { opacity: '0', top: 'calc(2.5rem)' },
        },
      },
      animation: {
        blink: 'blink 1s ease-in-out infinite',
        scrolldown: 'scrolldown 3s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [lineClamp],
}
