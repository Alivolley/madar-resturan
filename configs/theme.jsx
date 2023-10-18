const getDesignTokens = mode => ({
   direction: 'rtl',
   colors: {
      customOrange: '#FB9B40',
      buttonPink: '#FEF1E4',
      textOrange: '#8E4603',
   },

   palette: {
      mode,

      customOrange: {
         main: '#FB9B40',
      },
      buttonPink: {
         main: '#FEF1E4',
      },
      textOrange: {
         main: '#8E4603',
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

      MuiFab: {
         styleOverrides: {
            root: {
               boxShadow: 'none',
            },
         },
      },

      MuiButton: {
         styleOverrides: {
            root: {
               fontFamily: 'rokhRegular',
               boxShadow: 'none',
               '&:hover': {
                  boxShadow: '0px 4px 7px 0px #C2C2C236',
               },
            },
         },
      },
   },
});

export default getDesignTokens;
