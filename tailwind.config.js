/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{tsx, jsx, ts, js}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "sm": "3px 3px 5px #333333"
      }
    },
  },
  plugins: [],
}

