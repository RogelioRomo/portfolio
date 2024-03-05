/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'custom-black': '#10100e',
      'custom-white': '#ffffe3',
      'custom-gray-1': '#191815',
      'custom-gray-2': '#30302b',
      'custom-gray-3': '#606055',
      'custom-gray-4': '#c0c0ab',
      'custom-gray-5': '#e8e8cf',
      'custom-gray-6': '#f8f8dd'
    },
    extend: {
      backgroundImage: {
        'stardust-pattern': "url('https://www.transparenttextures.com/patterns/stardust.png')",
        'asfalt-pattern': "url('https://www.transparenttextures.com/patterns/asfalt-light.png')"
      },
      fontFamily: {
        noto: ['Noto Sans', ...defaultTheme.fontFamily.sans],
        tanker: ['Tanker', ...defaultTheme.fontFamily.sans],
        general: ['General Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
