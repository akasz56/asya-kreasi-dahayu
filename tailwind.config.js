/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    './node_modules/flowbite-react/lib/**/*.js',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-about': "url('/images/about.jpg')",
      },
      colors: {
        asya: {
          light: '#D3EF70',
          dark: '#598A3D',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
