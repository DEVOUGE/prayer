/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'media',
   content: [
    "./App.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx,}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./navigation/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        light:"#e5e5e5",
        dark:"black",
        primary:"purple-500",
        Text:this.darkMode?"red":"blue"
      }      
    },
  },

  plugins: [],
}

