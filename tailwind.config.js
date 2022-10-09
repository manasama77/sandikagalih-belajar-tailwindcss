/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mons: ['Montserrat']
      },
      colors: {
        adam: '#bada55'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        goyang: 'goyangkey 1s linear infinite',
      },
      keyframes: {
        goyangkey: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
          '100%': { transform: 'rotate(-3deg)' },
        },
      },
    },
  },
  plugins: [],
}
