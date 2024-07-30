import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".poppins-thin": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 100,
          fontStyle: "normal",
        },
        ".poppins-extralight": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 200,
          fontStyle: "normal",
        },
        ".poppins-light": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 300,
          fontStyle: "normal",
        },
        ".poppins-regular": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
        },
        ".poppins-medium": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 500,
          fontStyle: "normal",
        },
        ".poppins-semibold": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontStyle: "normal",
        },
        ".poppins-bold": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          fontStyle: "normal",
        },
        ".poppins-extrabold": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 800,
          fontStyle: "normal",
        },
        ".poppins-black": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 900,
          fontStyle: "normal",
        },
        ".poppins-thin-italic": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 100,
          fontStyle: "italic",
        },
        ".poppins-extralight-italic": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 200,
          fontStyle: "italic",
        },
        ".poppins-light-italic": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 300,
          fontStyle: "italic",
        },
        ".poppins-regular-italic": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          fontStyle: "italic",
        },
        ".poppins-medium-italic": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 500,
          fontStyle: "italic",
        },
        ".poppins-semibold-italic": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontStyle: "italic",
        },
        ".poppins-bold-italic": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          fontStyle: "italic",
        },
        ".poppins-extrabold-italic": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 800,
          fontStyle: "italic",
        },
        ".poppins-black-italic": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 900,
          fontStyle: "italic",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
