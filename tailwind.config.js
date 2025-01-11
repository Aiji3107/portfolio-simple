/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}", // Semua file di dalam folder `src`
    "./public/**/*.html", // Semua file HTML di folder `public`
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellowing: "var(--yellowing)",
        greenArmy: "var(--greenArmy)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
console.log("Tailwind config loaded!");
