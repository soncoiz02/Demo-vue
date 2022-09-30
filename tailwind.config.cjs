/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--gradient-color-stops))'
    }
  },
  plugins: [],
}
