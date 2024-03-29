import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Redux
import { useSelector } from 'react-redux';

// MUI
import { Button, Fab } from '@mui/material';

// Icon
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

// Assets
import profilePic from '../../../assets/images/userProfile.png';

// Components
import LogoutModal from '@/components/templates/logout-modal/logout-modal';

function ProfileLayout({ children }) {
   const [showLogoutModal, setShowLogoutModal] = useState(false);
   const pathName = usePathname();

   const userInfo = useSelector(state => state?.userInfoReducer);

   return (
      <div className="relative gap-6 px-5 py-16 customMd:flex customMd:px-[60px]">
         <aside className="sticky top-[150px] hidden h-fit w-[378px] shrink-0 rounded-2xl bg-white px-11 py-7 customMd:block">
            <div className="flex flex-col items-center border-b border-solid border-[#E4EAF0] pb-7">
               <div className="relative size-[75px]">
                  <Image
                     alt="profile"
                     src={userInfo?.image || profilePic}
                     className="size-full rounded-full object-cover"
                     fill
                  />
               </div>
               <p className="mt-2 text-xl font-bold">{userInfo?.name}</p>
               <p className="mt-1 font-rokhFaNum text-sm text-[#626E94]">{userInfo?.phone_number}</p>
            </div>

            <div className="mb-3 mt-12 flex flex-col gap-8 border-b border-solid border-[#E4EAF0] pb-16">
               <Link
                  href="/profile/information"
                  className={`flex w-full items-center gap-4 ${
                     pathName === '/profile/information' ? 'text-customOrange2' : ''
                  }`}
               >
                  <Fab
                     color={pathName === '/profile/information' ? 'buttonPink' : 'buttonBgGray'}
                     sx={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                     }}
                  >
                     <PersonOutlineIcon color={pathName === '/profile/information' ? 'customOrange2' : 'inherit'} />
                  </Fab>

                  <p className="text-[15px]">اطلاعات حساب کاربری</p>

                  <div className="mr-auto">
                     <ArrowBackIosNewOutlinedIcon fontSize="inherit" />
                  </div>
               </Link>

               <Link
                  href="/profile/address"
                  className={`flex w-full items-center gap-4 ${
                     pathName === '/profile/address' ? 'text-customOrange2' : ''
                  }`}
               >
                  <Fab
                     color={pathName === '/profile/address' ? 'buttonPink' : 'buttonBgGray'}
                     sx={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                     }}
                  >
                     <LocationOnOutlinedIcon color={pathName === '/profile/address' ? 'customOrange2' : 'inherit'} />
                  </Fab>

                  <p className="text-[15px]">آدرس های من</p>

                  <div className="mr-auto">
                     <ArrowBackIosNewOutlinedIcon fontSize="inherit" />
                  </div>
               </Link>

               <Link
                  href="/profile/orders"
                  className={`flex w-full items-center gap-4 ${
                     pathName === '/profile/orders' ? 'text-customOrange2' : ''
                  }`}
               >
                  <Fab
                     color={pathName === '/profile/orders' ? 'buttonPink' : 'buttonBgGray'}
                     sx={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                     }}
                  >
                     <AccountBalanceWalletOutlinedIcon
                        color={pathName === '/profile/orders' ? 'customOrange2' : 'inherit'}
                     />
                  </Fab>

                  <p className="text-[15px]">پیگیری سفارش ها</p>

                  <div className="mr-auto">
                     <ArrowBackIosNewOutlinedIcon fontSize="inherit" />
                  </div>
               </Link>
            </div>

            <Button
               variant="contained"
               type="submit"
               size="large"
               color="white"
               className="!rounded-10 !p-2"
               onClick={() => setShowLogoutModal(true)}
               fullWidth
            >
               <div className="flex w-full items-center gap-3 text-customOrange2 transition-all duration-200 hover:text-white">
                  <LogoutOutlinedIcon className="rotate-180 rounded-xl bg-customOrange2 p-2 text-white" />
                  <p>خروج از حساب کاربری</p>
               </div>
            </Button>
         </aside>
         <section className="grow rounded-2xl bg-white px-11 py-7">{children}</section>

         <LogoutModal show={showLogoutModal} onClose={() => setShowLogoutModal(false)} />
      </div>
   );
}

export default ProfileLayout;
