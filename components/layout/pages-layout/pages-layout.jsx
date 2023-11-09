import { useRouter } from 'next/router';

// MUi
import { useMediaQuery, useTheme } from '@mui/material';

// Components
import Header from '../header/header';
import MobileHeader from '../mobile-header/mobile-header';
import Footer from '../footer/footer';
import MobileFooter from '../mobile-footer/mobile-footer';

function PagesLayout({ children }) {
   const router = useRouter();
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
   const isTablet = useMediaQuery(theme.breakpoints.down('md'));

   return (
      <div className="font-rokhRegular">
         {router.pathname !== '/login' && (isMobile ? <MobileHeader /> : <Header />)}
         <main className="bg-bgColor pb-32 customMd:pb-0">{children}</main>
         {router.pathname !== '/login' && (isTablet ? <MobileFooter /> : <Footer />)}
      </div>
   );
}

export default PagesLayout;
