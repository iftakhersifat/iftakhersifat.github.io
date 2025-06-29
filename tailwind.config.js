/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",  // <<< This enables class-based dark mode toggling
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], 
  },
}
