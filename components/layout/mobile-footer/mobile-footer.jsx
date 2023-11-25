import Link from 'next/link';
import Image from 'next/image';

// Assets
import footerBasketActive from '../../../assets/icons/footer/footer-basket-active.svg';
import footerBasket from '../../../assets/icons/footer/footer-basket.svg';
import footerHomeActive from '../../../assets/icons/footer/footer-home-active.svg';
import footerHome from '../../../assets/icons/footer/footer-home.svg';
import footerMessage from '../../../assets/icons/footer/footer-message.svg';
import footerProfileActive from '../../../assets/icons/footer/footer-profile-active.svg';
import footerProfile from '../../../assets/icons/footer/footer-profile.svg';
import footerSearch from '../../../assets/icons/footer/footer-search.svg';

function MobileFooter({ isLogin }) {
   return (
      <footer className="fixed inset-x-0 bottom-0 z-[2] bg-white">
         <div className="flex items-center justify-between p-4">
            <Link href="/" className="flex flex-1 flex-col items-center">
               <div>
                  <Image src={footerHome} alt="footer icon" />
               </div>
               <p className="text-xs text-[#FCA95C]">خانه</p>
            </Link>
            <Link href="/some" className="flex flex-1 flex-col items-center">
               <div>
                  <Image src={footerSearch} alt="footer icon" />
               </div>
               <p className="text-xs text-[#FCA95C]">جست و جو</p>
            </Link>
            {isLogin && (
               <Link href="/basket" className="flex flex-1 flex-col items-center">
                  <div>
                     <Image src={footerBasket} alt="footer icon" />
                  </div>
                  <p className="text-xs text-[#FCA95C]">سبد خرید</p>
               </Link>
            )}
            <Link href="/" className="flex flex-1 flex-col items-center">
               <div>
                  <Image src={footerMessage} alt="footer icon" />
               </div>
               <p className="text-xs text-[#FCA95C]">منو</p>
            </Link>
            {isLogin && (
               <Link href="/profile" className="flex flex-1 flex-col items-center">
                  <div>
                     <Image src={footerProfile} alt="footer icon" />
                  </div>
                  <p className="text-xs text-[#FCA95C]">پروفایل</p>
               </Link>
            )}
         </div>
      </footer>
   );
}

export default MobileFooter;
