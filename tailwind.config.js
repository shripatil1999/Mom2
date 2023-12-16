/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        '27': '27%',
      },
      zIndex: {
        '100': '100',
      },
      colors: {
        'bg-papl':'rgb(37, 44, 72)'
      }
    },
    fontFamily: {
      'segoe': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif']
    },
  },
  plugins: [],
};
