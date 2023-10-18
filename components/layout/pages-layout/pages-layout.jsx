// MUi
import { useMediaQuery, useTheme } from '@mui/material';

// Components
import Header from '../header/header';
import MobileHeader from '../mobile-header/mobile-header';

function PagesLayout({ children }) {
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <div className="font-rokhRegular">
         {isMobile ? <MobileHeader /> : <Header />}
         <main className="bg-bgColor">{children}</main>
      </div>
   );
}

export default PagesLayout;
