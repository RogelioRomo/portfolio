/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'custom-black': '#131315',
      'custom-orange': '#ff5e1a',
      'custom-gray': '#8a8a93',
    },
    extend: {
      backgroundImage:{
        'stardust-pattern': "url('https://www.transparenttextures.com/patterns/stardust.png')",
        'asfalt-pattern': "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
      }
    },
  },
  plugins: [],
}
