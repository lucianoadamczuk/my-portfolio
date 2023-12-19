import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx, html}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      light: "#F2F2F2",
      dark: "#08090D",
      gray: "#A6A6A6",

      primary: "#D96E11",
      "primary-dark": "#A14F08",

      secondary: "#0887A1",
      "secondary-dark": "#066578",

      transparent: "transparent",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
