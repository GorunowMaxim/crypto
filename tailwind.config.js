/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'customBounce': {
          '0%, 100%': { transform: 'translateY(-10%) rotate(10deg)' },
          '50%': { transform: 'translateY(10%) rotate(10deg)' },
        },
        'reverseCustomBounce': {
          '0%, 100%': { transform: 'translateY(10%) rotate(-10deg)' },
          '50%': { transform: 'translateY(-10%) rotate(-10deg)' },
        },
      },
      animation: {
        'custom-bounce': 'customBounce 3s linear infinite',
        'reverse-custom-bounce': 'reverseCustomBounce 3s linear infinite',
      }
    },
  },
  plugins: [],
}

