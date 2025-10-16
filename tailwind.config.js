/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'academic-blue': '#003366',
        'academic-gold': '#B6922E',
        'academic-gray': '#4A4A4A',
      },
    },
  },
  plugins: [],
};
