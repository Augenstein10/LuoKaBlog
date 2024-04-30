/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/**/*.js",
    "./docs/**/*.ts",
    "./docs/**/*.vue",
    "./docs/**/*.md",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  options: {
    safelist: ["html", "body"],
  },
}

