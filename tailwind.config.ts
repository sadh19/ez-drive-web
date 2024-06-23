import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue-bg": "rgba(0,146,228,.05)",
        "custom-blue-1": "rgba(0,146,228,.6)",
        "custom-blue-2": "rgba(0,146,228,.7)",
        "custom-blue-3": "rgba(0,146,228,.8)",
        "custom-pink-bg": "rgba(228,0,125,.05)",
        "custom-pink-1": "rgba(228,0,125,.6)",
        "custom-pink-2": "rgba(228,0,125,.7)",
        "custom-pink-3": "rgba(228,0,125,.8)",
        "custom-light": "#f9f9f9",
        "custom-dark": "#989898",
      },
    },
  },
  plugins: [],
};
export default config;
