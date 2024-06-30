/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "light-cream": "#fefcf7",
        "color-mint": "hsla(172, 45%, 75%, 1)",
        "color-red-rusty": "#F4A261",
        "color-pinky": "hsla(284, 61%, 74%, 1)",
        "color-dark-violet": "#ffdac6",
      },
      boxShadow: {
        "custom-black": "9px 9px 0px 0px #000",
      },
    },
  },
  plugins: [],
};
