import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// MUI
import { Button, IconButton } from '@mui/material';

// Icons
import CloseIcon from '@mui/icons-material/Close';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import TakeoutDiningOutlinedIcon from '@mui/icons-material/TakeoutDiningOutlined';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';

// Assets
import footerLogo from '@/assets/images/footerLogo.png';

// Components
import LogoutModal from '@/components/templates/logout-modal/logout-modal';

// Utils
// import permissions from '@/utils/permission';

function AdminSideBar({ isMobile, onClose }) {
   const [showLogoutModal, setShowLogoutModal] = useState(false);

   const { pathname } = useRouter();

   return (
      <aside
         className={`shrink-0 h-screen bg-customOrange px-8 py-4 transition-all duration-500 customMd:p-8 customXs:w-[330px] font-rokhRegular
          ${isMobile ? 'customMd:hidden' : 'sticky top-0 z-[2] hidden customMd:block'}`}
      >
         <div className="flex justify-end customMd:hidden">
            <IconButton onClick={onClose}>
               <CloseIcon color="white" />
            </IconButton>
         </div>

         <Link href="/" className="flex items-center gap-3 border-b border-solid border-[#CCD3DD] pb-6">
            <Image src={footerLogo} alt="footer logo" />
            <div className="space-y-[2px]">
               <p className="font-elMessiri text-base font-bold text-[#8F0E0E]">رستوران مادر</p>
               <p className="text-xs text-white">غذاهای لذیذ و خانگی</p>
            </div>
         </Link>

         <div className="mb-3 mt-8 flex flex-col gap-3">
            <Link
               href="/adminPanel/products"
               className={`flex w-full items-center gap-3 rounded-10 px-3 py-2 transition-all duration-150 hover:bg-activeBrown hover:text-white ${
                  pathname === '/adminPanel/products' ? 'bg-activeBrown text-white' : ''
               }`}
            >
               <div>
                  <FastfoodIcon />
               </div>
               <p>غذاها</p>
            </Link>

            <Link
               href="/adminPanel/users"
               className={`flex w-full items-center gap-3 rounded-10 px-3 py-2 transition-all duration-150 hover:bg-activeBrown hover:text-white ${
                  pathname === '/adminPanel/users' ? 'bg-activeBrown text-white' : ''
               }`}
            >
               <div>
                  <PeopleAltOutlinedIcon />
               </div>
               <p>اشخاص</p>
            </Link>

            <Link
               href="/adminPanel/orders"
               className={`flex w-full items-center gap-3 rounded-10 px-3 py-2 transition-all duration-150 hover:bg-activeBrown hover:text-white ${
                  pathname === '/adminPanel/orders' ? 'bg-activeBrown text-white' : ''
               }`}
            >
               <div>
                  <TakeoutDiningOutlinedIcon />
               </div>
               <p>سفارشات</p>
            </Link>

            <Link
               href="/adminPanel/information"
               className={`flex w-full items-center gap-3 rounded-10 px-3 py-2 transition-all duration-150 hover:bg-activeBrown hover:text-white ${
                  pathname === '/adminPanel/information' ? 'bg-activeBrown text-white' : ''
               }`}
            >
               <div>
                  <RecentActorsOutlinedIcon />
               </div>
               <p>اطلاعات حساب</p>
            </Link>
         </div>

         <Button
            size="large"
            className="!rounded-10 !bg-none !px-3 !py-2 !text-black !shadow-none hover:!bg-activeBrown hover:!text-white"
            fullWidth
            onClick={() => setShowLogoutModal(true)}
         >
            <div className="flex w-full items-center gap-3">
               <LogoutOutlinedIcon />
               <p>خروج از حساب کاربری</p>
            </div>
         </Button>

         <LogoutModal show={showLogoutModal} onClose={() => setShowLogoutModal(false)} />
      </aside>
   );
}

export default AdminSideBar;
