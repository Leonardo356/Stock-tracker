/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          100: '#19224D',
          200: '#0F142D',
        },
        yellow: '#F4F7D7',
        babyBlue: '#CBEAFF',
        green: '#65E4D7',
        blue: '#3c55b1',
        purple: '#E2ADF2',
        red: '#DC5349',
        gray: '#f2f7fa',
        alphaWhite: 'rgba(255, 255, 255, 20%)',
        alphaBlack: 'rgba(0, 0, 0, 10%)',
      },

      boxShadow: {
        sh1: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
        sh2: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
        sh3: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
        sh4: 'rgba(0, 0, 0, 0.35) 0px -25px 18px -14px inset',
        shPop: '-1px 1px #3c55b1, -2px 2px #3c55b1, -3px 3px #3c55b1, -4px 4px #3c55b1, -5px 5px #3c55b1',
      },
    },
  },
  plugins: [],
}
