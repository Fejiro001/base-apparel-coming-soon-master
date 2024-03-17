/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "script.js"],
  theme: {
    screens: {
      sm: "376px",
      md: "1300px",
    },
    extend: {
      colors: {
        "desaturated-red": "hsl(0, 36%, 70%)",
        "soft-red": "hsl(0, 93%, 68%)",
        "dark-grayish-red": "hsl(0, 6%, 24%)",
      },
      fontFamily: {
        primary: ["Josefin Sans", "sans-serif"],
      },
      fontSize: {
        "4xl": "clamp(2.25rem, 4.1vw, 4rem)",
        sm: "clamp(0.875rem, 1.1vw, 2rem)",
      },
      backgroundImage: () => ({
        "gradient-to-neutral":
          "linear-gradient(135deg, hsl(0, 100%, 90%), hsl(0, 74%, 85%))",
        "gradient-to-primary":
          "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
      }),
    },
  },
  plugins: [],
};

