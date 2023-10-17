import { ToastContainer } from 'react-toastify';

// MUI
import { ThemeProvider, createTheme } from '@mui/material';

// Redux
import { Provider } from 'react-redux';
import store from '../../../store/store';

// Components
import getDesignTokens from '@/configs/theme';

import 'react-toastify/dist/ReactToastify.css';

function AppLayout({ children }) {
   const themeConfig = createTheme(getDesignTokens('light'));

   return (
      <Provider store={store}>
         <ThemeProvider theme={themeConfig}>
            <ToastContainer />
            {children}
         </ThemeProvider>
      </Provider>
   );
}

export default AppLayout;
