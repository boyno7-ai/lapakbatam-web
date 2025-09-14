/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lapak: {
          green: "#22c55e",
          blue:  "#0ea5a4",
          amber: "#f59e0b"
        }
      }
    },
  },
  plugins: [],
}