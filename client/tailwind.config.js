/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs': '320px',
        'sm': '648px',
        'md': '768px',
        'lg': '1000px',
      },
    },
  },
  plugins: [],
}