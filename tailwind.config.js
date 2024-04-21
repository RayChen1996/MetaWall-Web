/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      'main-dark': '#000400',
      'main-blue': '#03438D',
      'main-blue-light': '#E2EDFA',
      'main-yellow': '#FECB02'
    }
  },
  plugins: [],
};
