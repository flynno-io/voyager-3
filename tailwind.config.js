/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    backgroundImage: {
      "blog-hero": "url('/voyager_md.jpg')",
    },
    extend: {
      transitionDuration: {
        // used for PhotoStack component
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
        5000: "5000ms",
      },
      colors: {
        "baby-yellow": "#fffcc9",
      },
      animation: {
        // used for PhotoStack component
        slowScrollUp: "slowScrollUp 180s linear infinite",
        slowScrollDown: "slowScrollDown 200s linear infinite",
      },
    },
    variants: {
      outline: ["focus"], // Add outline variant to focus state
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
      slowScrollUp: {
        // used for PhotoStack component
        "100%": {
          transform: "translateY(calc(-50% - 0.25rem - 1px))",
        },
      },
      slowScrollDown: {
        // used for PhotoStack component
        "100%": {
          transform: "translateY(calc(0% + 0.25rem + 1px))",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
