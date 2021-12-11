// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
        fontFamily:{
          readex: ['Readex Pro']
        }
      },
   },
   variants: {},
   plugins: [],
 }