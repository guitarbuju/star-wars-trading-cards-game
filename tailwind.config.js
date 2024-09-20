/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'xs':'360px',
      'sm': '667px',
      'md': '740px',
      'tr':'768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      
    },
    extend: {},
  },
  plugins: [],
}