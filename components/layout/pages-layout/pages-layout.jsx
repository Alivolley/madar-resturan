import { useRouter } from 'next/router';

// MUi
import { useMediaQuery, useTheme } from '@mui/material';

// Redux
import { useSelector } from 'react-redux';

// Components
import Header from '../header/header';
import MobileHeader from '../mobile-header/mobile-header';
import Footer from '../footer/footer';
import MobileFooter from '../mobile-footer/mobile-footer';

function PagesLayout({ children }) {
   const { pathname } = useRouter();
   const theme = useTheme();
   const isTablet = useMediaQuery(theme.breakpoints.down('md'));
   const isLogin = useSelector(state => state?.loginStatusReducer);

   return (
      <div className="font-rokhRegular">
         {pathname !== '/login' &&
            !pathname.startsWith('/adminPanel') &&
            (isTablet ? <MobileHeader isLogin={isLogin} /> : <Header isLogin={isLogin} />)}
         <main className="bg-bgColor pb-20 customMd:pb-0">{children}</main>
         {pathname !== '/login' &&
            !pathname.startsWith('/adminPanel') &&
            (isTablet ? <MobileFooter isLogin={isLogin} /> : <Footer isLogin={isLogin} />)}
      </div>
   );
}

export default PagesLayout;
