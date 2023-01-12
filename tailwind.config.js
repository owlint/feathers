/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {},
  plugins: [require('@tailwindcss/forms')],
  prefix: 'of-',
}
