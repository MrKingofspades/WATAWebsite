/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%'
      },

      inset: {
        'cart': '6rem',
      },

      colors: {
        'neon-purple' : '#CC00FF',
        'neon-red' : '#fd1c03eb',
        'nav-bg': '#3B3B3B',
        'neon-orange': '#FF6600',
        'neon-blue': '#00FFFF',
        'neon-yellow': '#FFFF33',
        'neon-green': '#00FF33',
      },

      fontFamily: {
        'metal-mania': ['"Metal Mania"', 'sans-serif'],
        'space-mono': ['"Space Mono"', 'monospace'],
        'lacquer': ['"Lacquer"', 'sans-serif'],
        'ysabeau': ['"Ysabeau SC"', 'monospace'],
      },
    },
  },
  plugins: [],
}

