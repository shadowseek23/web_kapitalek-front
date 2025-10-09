/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './components/**/*.{js,ts,jsx,tsx,mdx}',
    // './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    // './styles/**/*.css'
  ],

  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};

