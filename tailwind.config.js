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
        // amazon_blue: {
        //   light: "#232F3E",
        //   DEFAULT: "#131921",
        // },
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
