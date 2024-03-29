import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      // center: true,
    },
    extend: {
      backgroundImage: {
        mainbg: 'url("/images/moviebg.jpg")',
      },
      shadow: {
        mainShadow: "rgb(0 0 0 / 40%)",
      },
    },
  },
  plugins: [],
};
export default config;
