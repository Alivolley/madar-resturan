const getDesignTokens = mode => ({
   direction: 'rtl',
   colors: {
      //
   },

   palette: {
      mode,

      // textGray: {
      //    main: '#A0AEC0',
      // },
   },

   components: {
      MuiTooltip: {
         styleOverrides: {
            tooltip: {
               // fontFamily: 'vazir',
            },
         },
      },
   },
});

export default getDesignTokens;
