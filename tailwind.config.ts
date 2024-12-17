/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
      colors: {
        Dun: "#D1C6AD",
        Khaki: "#f5f5f5",
        richBlack: "#141414",
        ButtonRed: "#8B2635",
        hoverColor: "#ffaa17",
      },
    },
  },
  plugins: [],
};
