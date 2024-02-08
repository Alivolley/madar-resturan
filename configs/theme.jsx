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
      activeBrown: {
         main: '#4C2000',
      },
      customYellow: {
         main: '#FFAE30',
      },
      black: {
         main: '#000',
      },
   },

   components: {
      MuiTooltip: {
         styleOverrides: {
            tooltip: {
               backgroundColor: '#F5F8FC',
               padding: '5px',
               border: '1px solid #DFEBF1',
               boxShadow: '0px 5px 20px 0px #B0C3D31A',
            },
         },
      },

      MuiFab: {
         styleOverrides: {
            root: {
               boxShadow: 'none',
               zIndex: 1,
               '&:hover': {
                  boxShadow: 'none',
                  backgroundColor: '#FCB777',
                  color: '#fff !important',
               },
            },
         },
      },

      MuiIconButton: {
         styleOverrides: {
            root: {
               '&:hover': {
                  color: '#E27005 !important',
               },
            },
         },
      },

      MuiButton: {
         styleOverrides: {
            root: props => ({
               fontFamily: 'rokhRegular',
               boxShadow: 'none',
               ...((props.ownerState.color === 'customOrange' || props.ownerState.color === 'customOrange2') && {
                  color: 'white',
               }),
               '&:hover': {
                  boxShadow: 'none',
                  ...(props?.ownerState?.variant !== 'contained'
                     ? {
                          backgroundColor: 'transparent',
                          color: '#E27005',
                       }
                     : {
                          backgroundColor: '#FCB777',
                          color: '#fff !important',
                       }),
               },
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
