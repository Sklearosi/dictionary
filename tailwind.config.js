/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        mobWidth: "90%"
      },
      margin : {
        mobMargin: "0 auto"
      },
      colors : {
        hoverColor: "#A445ED"
      }
    },
  },
  plugins: [],
}

