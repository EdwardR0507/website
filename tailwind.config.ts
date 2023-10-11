import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-karla)", ...fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        "custom-background": "url('/background.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
