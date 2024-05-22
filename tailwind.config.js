/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        header:
          "0px 323px 90px 0px rgba(0, 0, 0, 0.00), 0px 206px 83px 0px rgba(0, 0, 0, 0.01), 0px 116px 70px 0px rgba(0, 0, 0, 0.05), 0px 52px 52px 0px rgba(0, 0, 0, 0.09), 0px 13px 28px 0px rgba(0, 0, 0, 0.10)",
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        Herobg: "#F2F0EB",
        Redtext: "#FF492C",
        Yellowtext: "#DDE041",
        Orange: "#EB664E",
        "light-black": "#1E1E1E",
        offwhite: "#F2F0EB"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
