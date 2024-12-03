/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit'],
        youngSerif: ['Young Serif']
      },
      colors: {
        stoneOne: "hsl(30, 54%, 90%)",
        stoneOneFive: "hsl(30, 18%, 87%)",
        stoneSix: "hsl(30, 10%, 34%)",
        stoneNine: "hsl(24, 5%, 18%)",
        mainBrown: "hsl(14, 45%, 36%)",
        roseEight: "hsl(332, 51%, 32%)",
        roseFive: "hsl(330, 100%, 98%)"
      }
    },
  },
  plugins: [],
}