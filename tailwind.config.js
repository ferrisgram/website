/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './assets/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      notoSans: ['Noto Sans', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}
