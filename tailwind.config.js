/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F4EEFF',
        secondary: '#DCD6F7',
        tertiary: '#A6B1E1',
        quaternary: '#424874',
    },
    },
  },
  plugins: [],
}

