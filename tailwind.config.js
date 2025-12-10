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
          base: 'var(--neu-base)',
          text: 'var(--neu-text)',
          accent: '#6C63FF',
          success: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444'
        },
        gray: {
          100: 'var(--neu-base)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
        }
      },
      boxShadow: {
        'neu-flat': 'var(--shadow-flat)',
        'neu-pressed': 'var(--shadow-pressed)',
        'neu-pressed-sm': 'var(--shadow-pressed-sm)',
        'neu-icon': 'var(--shadow-icon)',
        'neu-convex': 'var(--shadow-convex)',
        'neu-concave': 'var(--shadow-concave)',
      }
    }
  },
  plugins: [],
}
