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
        searchInput: "80%",
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
        borderRight: "#E9E9E9",
        inputDiv : "#F4F4F4"
      },
    boxShadow : {
      listShadow: "0px 5px 30px 0px #0000001A"
    },
    borderWidth : {
      borderWidthOne: '1px'
    }
      
    },
  },
  plugins: [],
}

