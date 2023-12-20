/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        one: 'bg-green-800	',
        two: 'bg-teal-600	',
      },
    },
  },
  plugins: [require("daisyui")],
}

