
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yekan: ['YekanBakh', 'sans-serif'], // فونت فارسی
        nunito: ['Nunito', 'sans-serif'], // فونت انگلیسی
      },
    },
  },
  plugins: [],
};
