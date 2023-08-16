/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        mobWidth: "90%",
        toggleCircle: "14px",
        forCircle: "42px"
      },
      height: {
        toggleCircle: "14px"
      },
      margin : {
        mobMargin: "0 auto",
        toggleMargin: "auto 0"
      },
      colors : {
        hoverColor: "#A445ED",
        toggleBgColor: "#757575",
        borderRight: "#E9E9E9"
      },
    
      
    },
  },
  plugins: [],
}

