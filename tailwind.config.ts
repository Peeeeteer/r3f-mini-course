import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './containers/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        xl: "1440px",
      },
      colors:{
        white56: '#FFFFFF8F',
        white20: '#FFFFFF33',
        dark: '#171819',
        lightBlue: '#0EC8E9',
        lightYellow: '#FFC85F',
        lightGreen: '#03D0B0',
        orangeRed: '#FF5A50',
        lightDark: '#232627',
        lightPurple: '#6363F9',
        bgDark: '#040404',
        bgGray: '#232627'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        // 👇 Add CSS variables
        inter: ["var--font-inter)"],
        nanumPenScript: ["var(--font-nanum-pen-script)"],
      },
    },
  },
  plugins: [],
};
export default config;
