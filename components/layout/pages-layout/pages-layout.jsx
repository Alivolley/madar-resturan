// Components
import MobileHeader from '../mobile-header/mobile-header';

function PagesLayout({ children }) {
   return (
      <div>
         <MobileHeader />
         {children}
      </div>
   );
}

export default PagesLayout;
