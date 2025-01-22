/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "var(--lightGray)",
        darkGray: "var(--darkGray)",
      },
      minWidth: { "3xl": "48rem" },
    },
  },
  plugins: [],
};
