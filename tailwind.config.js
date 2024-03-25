/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      a:['Madimi One'],
      b:['Kalam'],
      c:['Comic Neue'],
      d:['Akaya Kanadaka']
    }
  },
  plugins: [require("daisyui")],
}

