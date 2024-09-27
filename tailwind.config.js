/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Add a custom breakpoint for extra small screens
        // you can add more breakpoints as needed
      },
    },
  },
  plugins: [],
};
