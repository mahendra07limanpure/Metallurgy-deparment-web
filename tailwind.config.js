/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'academic-blue': {
          DEFAULT: '#ADD8E6',
          600: '#5FA8D3',
          700: '#2D85C1',
          800: '#1D4E89'
        },
        'academic-gold': '#B6922E',
        'academic-gray': '#4A4A4A',
      },
    },
  },
  plugins: [],
};
