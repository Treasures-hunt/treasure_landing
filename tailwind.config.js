/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#343779',
          secondary: '#F5888E',
          grey: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#EEEEEE',
            300: '#E0E0E0',
            400: '#BDBDBD',
            500: '#9E9E9E',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
            
          },
          background: {
            primary:'#34366D',
            secondary:'#FDFAF0',
            tertiary:'#FFDD98',
            accent:'FCF4FF',
          }
          // Add your custom color palette
        },
        fontFamily: {
          sans: ['var(--font-inter)'],
          // Add custom fonts as needed
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  };