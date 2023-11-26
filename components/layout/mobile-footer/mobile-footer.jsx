import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// Icons
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

// Assets
import footerBasket from '../../../assets/icons/footer/footer-basket.svg';
import footerBasketActive from '../../../assets/icons/footer/footer-basket-active.svg';
import footerHome from '../../../assets/icons/footer/footer-home.svg';
import footerHomeActive from '../../../assets/icons/footer/footer-home-active.svg';
import footerMenu from '../../../assets/icons/footer/footer-menu.svg';
import footerMenuActive from '../../../assets/icons/footer/footer-menu-active.svg';
import footerProfile from '../../../assets/icons/footer/footer-profile.svg';
import footerProfileActive from '../../../assets/icons/footer/footer-profile-active.svg';

function MobileFooter({ isLogin }) {
   const router = useRouter();

   return (
      <footer className="fixed inset-x-0 bottom-0 z-[2] bg-white">
         <div className="flex items-center justify-between p-4">
            {!isLogin && (
               <Link href="/login" className="flex flex-1 flex-col items-center">
                  <div className="text-[#626E94]">
                     <AccountCircleOutlinedIcon />
                  </div>
               </Link>
            )}

            <Link href="/" className="flex flex-1 flex-col items-center">
               <div>
                  <Image src={router.pathname === '/' ? footerHomeActive : footerHome} alt="footer icon" />
               </div>
               {router.pathname === '/' && <p className="text-xs text-[#FCA95C]">خانه</p>}
            </Link>

            {isLogin && (
               <Link href="/basket" className="flex flex-1 flex-col items-center">
                  <div>
                     <Image src={router.pathname === '/basket' ? footerBasketActive : footerBasket} alt="footer icon" />
                  </div>
                  {router.pathname === '/basket' && <p className="text-xs text-[#FCA95C]">سبد خرید</p>}
               </Link>
            )}
            <Link href="/category/منوی روز/1" className="flex flex-1 flex-col items-center">
               <div>
                  <Image
                     src={router.pathname.startsWith('/category') ? footerMenuActive : footerMenu}
                     alt="footer icon"
                  />
               </div>
               {router.pathname.startsWith('/category') && <p className="text-xs text-[#FCA95C]">منو</p>}
            </Link>
            {isLogin && (
               <Link href="/profile" className="flex flex-1 flex-col items-center">
                  <div>
                     <Image
                        src={router.pathname === '/profile' ? footerProfileActive : footerProfile}
                        alt="footer icon"
                     />
                  </div>
                  {router.pathname === '/profile' && <p className="text-xs text-[#FCA95C]">پروفایل</p>}
               </Link>
            )}
         </div>
      </footer>
   );
}

export default MobileFooter;
