const lineClamp = require('@tailwindcss/line-clamp')
const plugin = require('tailwindcss/plugin')

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
      boxShadow: {
        'md-white': '0 0 30px -5 px rgba(255, 255, 255, 0.5)',
      },
      transitionDelay: {
        0: '0ms',
        250: '250ms',
        750: '750ms',
        1250: '1250ms',
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
        upBounce: {
          '0%': {
            transform: 'translateY(0)',
          },
          '33%': {
            transform: 'translateY(-12.5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
            // animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '66%': {
            transform: 'translateY(12.5%)',
            // animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
            // animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        blink: 'blink 1s ease-in-out infinite',
        scrolldown: 'scrolldown 3s ease-in-out infinite',
        bounceUp: 'upBounce 1s infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    lineClamp,
    plugin(function ({ addVariant, e }) {
      addVariant('invalid', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`invalid${separator}${className}`)}:invalid`
        })
      })
    }),
  ],
}
