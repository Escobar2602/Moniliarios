/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js", // Añadir esta línea
  ],

  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin") // Añadir el plugin de Flowbite
  ],};

