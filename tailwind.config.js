/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark':'#0A090D',
        'pink':'#FFD9E7',
        'ivory':'#FFFFF0',
        'blue':'#D9E7FF',
        'darkBlue':'#2D2C6C'
      },
      screens:{
        sm:'300px'
      }
    },
  },
  plugins: [],
};
