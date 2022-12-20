/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '14px',
      'sm': '16px',
      'lg': '21px',
      'xl': '27px',
    },
    fontFamily: {
      'heading': ['Nunito', 'sans-serif'],
      'body': ['Nunito', 'sans-serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'body': '#f7f7f7',
        'primary': '#0077c8',
        'info': '#06038d',
        'font': '#141415',
        'white': '#ffffff',
        'black': '#181818',
        'fade': '#14141580',
        'danger': '#d34607',
        'footer': '#f0f0f0',
      },
      transition: {
        'ease-in-out': 'all 0.3s ease-in-out',
      },
      keyframes: {
        'slide-up': {
          '0%': {
            transform: 'translateY(100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'slide-down': {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(100%)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.3s ease-in-out',
        'slide-down': 'slide-down 0.3s ease-in-out',
        'fade-in': 'fade-in 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
}
