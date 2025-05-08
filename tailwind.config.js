/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Ajuste os caminhos conforme a estrutura do seu projeto
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Azul escuro personalizado
        secondary: "#1E3A8A", // Azul secundário
        accent: "#F59E0B", // Amarelo para destaques
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Fonte padrão
      },
    },
  },
  plugins: [],
};