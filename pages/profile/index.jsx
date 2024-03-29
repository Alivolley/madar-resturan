import { useState } from 'react';
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
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

// Assets
import userProfilePic from '../../assets/images/userProfile.png';

// Components
import ProfileLayout from '@/components/layout/profile-layout/profile-layout';
import LogoutModal from '@/components/templates/logout-modal/logout-modal';

function Profile() {
   const [showLogoutModal, setShowLogoutModal] = useState(false);
   const userInfo = useSelector(state => state?.userInfoReducer);

   return (
      <main>
         <div className="hidden customMd:block">
            <ProfileLayout />
         </div>

         <div className="px-5 pt-12 customMd:hidden">
            <div className="flex items-center gap-4">
               <div className="relative size-20 rounded-full border-[3px] border-solid border-customOrange2">
                  <Image
                     className="size-full rounded-full"
                     src={userInfo?.image || userProfilePic}
                     alt="profile"
                     fill
                  />
               </div>
               <div className="space-y-1">
                  <p className="text-lg text-customOrange2">{userInfo?.name}</p>
                  <p className="font-rokhFaNum">{userInfo?.phone_number}</p>
               </div>
            </div>

            <div className="mt-12 space-y-4">
               <Link href="/profile/information" className="flex items-center gap-4 rounded-xl bg-white px-4 py-2.5">
                  <Fab
                     color="buttonPink"
                     sx={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                     }}
                  >
                     <PersonOutlineIcon color="customOrange2" />
                  </Fab>

                  <p className="text-sm">اطلاعات حساب کاربری</p>

                  <div className="mr-auto">
                     <ArrowBackIosNewOutlinedIcon fontSize="inherit" color="textGray" />
                  </div>
               </Link>
               <Link href="/profile/address" className="flex items-center gap-4 rounded-xl bg-white px-4 py-2.5">
                  <Fab
                     color="buttonPink"
                     sx={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                     }}
                  >
                     <LocationOnOutlinedIcon color="customOrange2" />
                  </Fab>

                  <p className="text-sm">آدرس های من</p>

                  <div className="mr-auto">
                     <ArrowBackIosNewOutlinedIcon fontSize="inherit" color="textGray" />
                  </div>
               </Link>
               <Link href="/profile/orders" className="flex items-center gap-4 rounded-xl bg-white px-4 py-2.5">
                  <Fab
                     color="buttonPink"
                     sx={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                     }}
                  >
                     <AccountBalanceWalletOutlinedIcon color="customOrange2" />
                  </Fab>

                  <p className="text-sm">پیگیری سفارش ها</p>

                  <div className="mr-auto">
                     <ArrowBackIosNewOutlinedIcon fontSize="inherit" color="textGray" />
                  </div>
               </Link>
               <Link href="/contactUs" className="flex items-center gap-4 rounded-xl bg-white px-4 py-2.5">
                  <Fab
                     color="buttonPink"
                     sx={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                     }}
                  >
                     <PhoneEnabledIcon color="customOrange2" />
                  </Fab>

                  <p className="text-sm">ارتباط با ما</p>

                  <div className="mr-auto">
                     <ArrowBackIosNewOutlinedIcon fontSize="inherit" color="textGray" />
                  </div>
               </Link>

               <Button
                  variant="contained"
                  type="submit"
                  size="large"
                  color="white"
                  fullWidth
                  className="!rounded-10 !px-4 !py-2.5"
                  onClick={() => setShowLogoutModal(true)}
               >
                  <div className="flex w-full items-center gap-4">
                     <div className="flex size-[44px] items-center justify-center rounded-10 bg-buttonPink p-2 text-customOrange2">
                        <LogoutOutlinedIcon />
                     </div>
                     <p className="text-sm">خروج از حساب کاربری</p>
                  </div>
               </Button>
            </div>
         </div>

         <LogoutModal show={showLogoutModal} onClose={() => setShowLogoutModal(false)} />
      </main>
   );
}

export default Profile;
