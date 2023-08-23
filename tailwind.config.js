/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Arial', 'sans-serif'],
      },
      fontSize: {
        '12xl': '12rem'
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      colors: {
        'shallow': '#E2E2E2',
        'deep-shallow': '#D8D8D8',
        'middle': '#999',
        'dark': '#333'
      }
    },
  },
  plugins: [],
}

