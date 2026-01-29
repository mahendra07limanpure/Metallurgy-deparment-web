/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'academic-blue': {
          600: '#3b63e6',
          700: '#2f4db4',
          800: '#243a82',
        },
        'academic-gold': '#B6922E',
        'academic-gray': '#4A4A4A',
      },
    },
  },
  plugins: [],
};