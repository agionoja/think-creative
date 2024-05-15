/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Herobg: "#F2F0EB",
        Redtext: "#FF492C",
        Yellowtext: "#DDE041",
        
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      
    },
  },
},
  plugins: [],
}