const getDesignTokens = mode => ({
   direction: 'rtl',
   colors: {
      //
   },

   palette: {
      mode,

      customOrange: {
         main: '#FB9B40',
      },
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
