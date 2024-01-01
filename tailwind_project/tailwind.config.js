/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': "425px",
      // => @media (min-width: 425px) { ... }

      'md': "768px",
      // => @media (min-width: 768px) { ... }

      'lg': "1024px",
      // => @media (min-width: 1024px) { ... }

      'xl': "1280px",
      // => @media (min-width: 1280px) { ... }

      '2xl': "1448px",
      // => @media (min-width: 1448px) { ... }
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        orangish: '#F8CC5E',
        mine_shaft: '#383737', 
        nevada: '#6E6F6F',
        snow: '#F9F9F9',
        night_rider: '#2C2C2C',
        floral_white: '#F7F5F1',
        dark_gray: '#ABABAB', //card_icon
        silver: '#C6C6C6', 
      },
      fontFamily: {
        body: ['Outfit'],
      }
    },
  },
  plugins: [],
}