/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "brand-green": "#00856F",
        "green-light": "#DCE9E2",
        "green-light-02": "#F7F9F9",
        "brand-beige": "#FFFAF1",
        "green-hover": "#00453A",
      },
      fontFamily: {
        "primary": ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
