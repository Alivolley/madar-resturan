import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import moment from 'jalali-moment';

// MUI
import { Drawer, IconButton } from '@mui/material';

// Icons
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

// Redux
import { useSelector } from 'react-redux';

// Assets
import profilePic from '@/assets/images/userProfile.png';

// Components
import AdminSideBar from '../admin-sideBar/admin-sideBar';
import AdminLayoutStyle from './admin-layout.style';

// Apis
import useGetUserInfo from '@/apis/userInfo/useGetUserInfo';

function AdminLayout({ children }) {
   const [showMobileMenu, setShowMobileMenu] = useState(false);
   const userInfo = useSelector(state => state?.userInfoReducer);
   const isLogin = useSelector(state => state?.loginStatusReducer);

   // eslint-disable-next-line no-unused-vars
   const getUserInfo = useGetUserInfo(isLogin);

   const jalaliDate = moment().locale('fa').format('D MMMM YYYY', 'jalali');

   return (
      <AdminLayoutStyle className="relative flex bg-[#f5f8fc]">
         <AdminSideBar />

         <Drawer
            anchor="right"
            SlideProps={{
               direction: 'left',
            }}
            open={showMobileMenu}
            onClose={() => setShowMobileMenu(false)}
         >
            <AdminSideBar isMobile onClose={() => setShowMobileMenu(false)} />
         </Drawer>

         <div className="w-full" id="container">
            <div className="sticky top-0 z-[2] flex w-full items-center justify-between bg-white px-8 py-4 customMd:px-16 customMd:py-8">
               <p className="hidden font-bold tracking-[1px] customMd:block">{jalaliDate}</p>
               <div className="customMd:hidden">
                  <IconButton onClick={() => setShowMobileMenu(true)}>
                     <MenuOutlinedIcon className="!text-3xl" />
                  </IconButton>
               </div>
               <div className="flex items-center gap-3 customMd:gap-6">
                  <div className="flex items-center gap-2 rounded-10 border border-solid border-[#E4E9F2] px-2 py-1 customMd:px-4">
                     <div className="relative size-9 customMd:size-10">
                        <Image
                           alt="profile"
                           src={userInfo?.image || profilePic}
                           className="rounded-full object-cover"
                           fill
                        />
                     </div>

                     <p className="text-sm">{userInfo?.name || userInfo?.phone_number}</p>
                  </div>

                  <Link href="/">
                     <IconButton sx={{ backgroundColor: '#F5F8FC', border: '1px solid #E4E9F2', borderRadius: '10px' }}>
                        <HomeOutlinedIcon className="!text-[28px]" />
                     </IconButton>
                  </Link>
               </div>
            </div>
            <div className="w-full p-8">{children}</div>
         </div>
      </AdminLayoutStyle>
   );
}

export default AdminLayout;
