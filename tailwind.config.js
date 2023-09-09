/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "/src/**/*.{js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    require('flowbite/plugin')
  ],
  corePlugins: {
    animation: false,
  },
  variants: {},
  keyframes: {
    shake: {
      '0%, 100%': {
        transform: 'translateX(0)',
      },
      '25%': {
        transform: 'translateX(-5px)',
      },
      '50%': {
        transform: 'translateX(5px)',
      },
      '75%': {
        transform: 'translateX(-5px)',
      },
    },
  },
  animations: {
    shake: 'shake 1s ease-in-out infinite',
  },
};

