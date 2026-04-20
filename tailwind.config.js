/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "Inter", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        neon: {
          400: "#E1FF01", // The vibrant yellow-green from the reference
          500: "#C6E500",
        },
      },
    },
  },
  plugins: [],
};