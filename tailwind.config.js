/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Esto le dice a Tailwind que busque clases en tus componentes
  ],
  theme: {
    extend: {
      colors: {
        // Aquí puedes definir tu azul exacto si quieres reusarlo
        'azul-rey': '#2563eb',
      }
    },
  },
  plugins: [],
}