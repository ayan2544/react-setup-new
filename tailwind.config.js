/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      "2xl": "1535px",
      xl: { max: "1535px" },
      lg: { max: "1279px" },
      md: { max: "1023px" },
      sm: { max: "767px" },
      xs: { max: "639px" },
    },
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        black: "900",
      },
      colors: {},
      borderRadius: {},
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1500px",
          "@screen xl": {
            maxWidth: "1200px",
          },
          "@screen lg": {
            maxWidth: "1000px",
          },
          "@screen md": {
            maxWidth: "100%",
          },
        },
      });
    },
  ],
};
