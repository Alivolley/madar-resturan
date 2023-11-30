const getDesignTokens = mode => ({
   direction: 'rtl',
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
   },

   palette: {
      mode,

      customOrange: {
         main: '#FB9B40',
      },
      customOrange2: {
         main: '#FA7E0A',
      },
      buttonPink: {
         main: '#FEF1E4',
      },
      textOrange: {
         main: '#8E4603',
      },
      crimson: {
         main: '#6F0B0B',
      },
      textGray: {
         main: '#6E7E85',
      },
      bgColor: {
         main: '#f8f8f8',
      },
      buttonPink2: {
         main: '#FEE2C9',
      },
      white: {
         main: '#ffffff',
      },
      gold: {
         main: '#FBD100',
      },
      buttonBgGray: {
         main: '#E4EAF0',
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
               zIndex: 1,
            },
         },
      },

      MuiButton: {
         styleOverrides: {
            root: props => ({
               fontFamily: 'rokhRegular',
               boxShadow: 'none',
               '&:hover': {
                  boxShadow: '0px 4px 7px 0px #C2C2C236',
               },
               ...((props.ownerState.color === 'customOrange' || props.ownerState.color === 'customOrange2') && {
                  color: 'white',
               }),
            }),
         },
      },

      MuiInputLabel: {
         styleOverrides: {
            root: {
               fontFamily: 'rokhRegular',
            },
         },
      },
      MuiInputBase: {
         styleOverrides: {
            root: {
               fontFamily: 'rokhRegular',
            },
         },
      },
      MuiFormHelperText: {
         styleOverrides: {
            root: {
               fontFamily: 'rokhRegular',
            },
         },
      },

      MuiTab: {
         styleOverrides: {
            root: props => ({
               fontFamily: 'rokhRegular',
               ...(props['aria-selected'] &&
                  props.customOrange && {
                     color: '#FB9B40 !important',
                  }),
            }),
         },
      },

      MuiOutlinedInput: {
         styleOverrides: {
            root: {
               borderRadius: '10px',
            },
         },
      },

      MuiPaginationItem: {
         styleOverrides: {
            root: {
               fontFamily: 'rokhFaNum',
            },
         },
      },
   },
});

export default getDesignTokens;
