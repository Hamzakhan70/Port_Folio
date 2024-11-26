/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { transform: 'scale(0) translateY(200px)', opacity: '0' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
      },
      animation: {
        appear: 'appear 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};

