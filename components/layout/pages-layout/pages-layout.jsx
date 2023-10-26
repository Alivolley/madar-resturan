// MUi
import { useMediaQuery, useTheme } from '@mui/material';

// Components
import Header from '../header/header';
import MobileHeader from '../mobile-header/mobile-header';
import Footer from '../footer/footer';

function PagesLayout({ children }) {
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <div className="font-rokhRegular">
         {isMobile ? <MobileHeader /> : <Header />}
         <main className="bg-bgColor">{children}</main>
         <Footer />
      </div>
   );
}

export default PagesLayout;
