/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '10rem',
      },
      fontFamily: {
        patrickhand: ["Patrick Hand", "cursive"],
      },
      fontSize: {
        '7xl': '5rem',
      },
    },
    plugins: [],
  }
}
