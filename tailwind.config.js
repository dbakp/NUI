/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
      colors: {
        neu: {
          base: '#EBECF0',
          text: '#59657F',
          accent: '#6C63FF',
          success: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444'
        }
      },
      boxShadow: {
        'neu-flat': '5px 5px 10px #BABECC, -5px -5px 10px #FFFFFF',
        'neu-pressed': 'inset 5px 5px 10px #BABECC, inset -5px -5px 10px #FFFFFF',
        'neu-pressed-sm': 'inset 2px 2px 5px #BABECC, inset -2px -2px 5px #FFFFFF',
        'neu-icon': '3px 3px 6px #BABECC, -3px -3px 6px #FFFFFF',
        'neu-convex': '6px 6px 12px #BABECC, -6px -6px 12px #FFFFFF',
        'neu-concave': 'inset 6px 6px 12px #BABECC, inset -6px -6px 12px #FFFFFF',
      }
    }
  },
  plugins: [],
}
