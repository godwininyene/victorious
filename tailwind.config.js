/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#007B5E',
        'primary-dark':'#355E3B',
        'my-grey':'rgb(40, 44, 49)',
        'my-grey-light':'rgb(122, 122, 122)'
      }
    }
  },
  plugins: [],
}

