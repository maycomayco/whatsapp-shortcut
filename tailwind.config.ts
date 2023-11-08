import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "jungle-green": {
          "100": "#A7E1C5",
          "200": "#8AD9B6",
          "300": "#6CCFA7",
          "400": "#4FC799",
          "500": "#339E77",
          "600": "#2C8D6C",
          "700": "#257D61",
          "800": "#1E6D56",
          "900": "#175C4A",
        },
        "cadet-gray": {
          "100": "#B7C5C7",
          "200": "#A3B6B9",
          "300": "#8FA8AC",
          "400": "#7B999E",
          "500": "#879B9D",
          "600": "#6C7D7E",
          "700": "#586F70",
          "800": "#445F61",
          "900": "#304F52",
        },
        "prussian-blue": {
          "100": "#476278",
          "200": "#3F5673",
          "300": "#364B6D",
          "400": "#2E4168",
          "500": "#1C3648",
          "600": "#172F41",
          "700": "#132838",
          "800": "#0E212F",
          "900": "#0A1A28",
        },
      },
    },
  },
  plugins: [],
};
export default config;
