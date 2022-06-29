/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur_bg.png)'
      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      colors: {
        yellow: {
          300: '#FFE814',
          500: '#FFD412',
          700: '#FFC114',
        },
        green: {
          500: '#00B37E',
        },
        orange: {
          500: '#fc8860',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#CBC9CF',
          200: '#A2A1A6',
          300: '#6D6C70',
          500: '#3C3B3D',
          600: '#252525',
          700: '#1d1d1d',
          900: '#151515'
        }
      },
    },
  },
  plugins: [],
}
