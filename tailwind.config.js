/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      width: {
        'w-27': '27%',
      },
      zIndex: {
        '100': '100',
      },
      colors: {
        'bg-papl': 'rgb(37, 44, 72)'
      },
      boxShadow: {
        'myShadow': 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
      }
    },
    fontFamily: {
      'segoe': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif']
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),      
    require('preline/plugin'),
  ],
};
