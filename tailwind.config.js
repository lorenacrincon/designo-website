/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        "dark-peach": "hsl(11, 73%, 66%)",
        "light-peach": "hsl(11, 100%, 80%)",
        "lighter-peach": "hsl(14, 76%, 97%)",
        "dark-grey": "hsl(264, 5%, 20%)",
        "light-grey": "hsl(210, 17%, 95%)",
      },
    },
    variants: {
      textColor: ["responsive", "hover", "focus", "group-hover"],
    },
    container: {
      center: true,
    },
    fontFamily: {
      jost: "'Jost', sans-serif",
    },
  },
  plugins: [],
};
