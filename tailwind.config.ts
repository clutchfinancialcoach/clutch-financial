import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#001028",
        midnight: "#071832",
        blue: "#0b63ce",
        sky: "#31a8e8",
        green: "#70b840",
        ice: "#f5f9ff",
        cloud: "#edf4fb",
        line: "#dce8f3",
        slate: "#31445c",
        white: "#ffffff",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 16, 40, 0.12)",
        glow: "0 24px 80px rgba(49, 168, 232, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
