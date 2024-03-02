/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },

    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        display: ["Alata", "sans-serif"],
      },
    },
  },
  plugins: [],
};
