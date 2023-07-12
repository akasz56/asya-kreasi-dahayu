/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-landing": "url('/images/hero.jpg')",
        "hero-about": "url('/images/about.jpg')",
      },
      colors: {
        asya: {
          light: "#D3EF70",
          dark: "#598A3D",
        },
      },
    },
  },
  plugins: [],
};
