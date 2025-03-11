/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          navy: {
            700: '#1a237e',
            800: '#0d1b3e',
            900: '#0a1432',
            950: '#060d21',
          },
        },
      },
    },
    plugins: [],
  };