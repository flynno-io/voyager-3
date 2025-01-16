const tailwindcssTextshadow = require('tailwindcss-textshadow');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'voyager-hero': 'url("/voyager_xlg.jpg")',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms',
      },
      colors: {
        "baby-yellow": "#fffcc9"
      },
      animation: {
        slowScrollUp: 'slowScrollUp 60s linear infinite',
        slowScrollDown: 'slowScrollDown 60s linear infinite',
      }
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
      slowScrollUp: {
        '100%': {
          transform: 'translateY(calc(-50% - 0.25rem - 1px))',
        },
      },
      slowScrollDown: {
        '100%': {
          transform: 'translateY(calc(0% + 0.25rem + 1px))',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), tailwindcssTextshadow],
}