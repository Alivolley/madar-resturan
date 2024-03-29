/** @type {import('tailwindcss').Config} */
module.exports = {
   corePlugins: {
      preflight: false,
   },
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         '@layer base': {
            button: [],
         },

         screens: {
            customXs: '350px',
            custom400: '400px',
            customSm: '600px',
            customMd: '900px',
            customLg: '1200px',
            customXl: '1400px',
         },

         colors: {
            customOrange: '#FB9B40',
            customOrange2: '#FA7E0A',
            buttonPink: '#FEF1E4',
            buttonPink2: '#FEE2C9',
            textOrange: '#8E4603',
            crimson: '#6F0B0B',
            textGray: '#6E7E85',
            bgColor: '#f8f8f8',
            gold: '#FBD100',
            buttonBgGray: '#E4EAF0',
            activeBrown: '#4C2000',
            customYellow: '#FFAE30',
         },

         fontFamily: {
            rokhFaNum: 'rokhFaNum',
            rokhRegular: 'rokhRegular',
            elMessiri: 'elMessiri',
         },
         boxShadow: {
            searchBoxShadow: '0px 4px 7px 0px #C2C2C236',
         },
         borderRadius: {
            10: '10px',
         },
         fontSize: {
            10: '10px',
         },
         width: {
            calculated: 'calc(100% - 310px)',
         },
      },
   },
   plugins: [],
};
