import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "screen-92": "92vh",
        "screen-8": "8vh",
      },
      colors: {
        blue: "#5680e9",
        teal: "#84ceeb",
        ocean: "#5ab9ea",
        gray: "#c1c8e4",
        purple: "#8860d0",
      },
    },
  },
  plugins: [],
};
export default config;
