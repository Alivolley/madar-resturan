import { useState } from 'react';

// MUI
import { Button } from '@mui/material';

// Icons
import AddIcon from '@mui/icons-material/Add';
import MyLocationIcon from '@mui/icons-material/MyLocation';

// Components
import ProfileLayout from '@/components/layout/profile-layout/profile-layout';
import RtlProvider from '@/components/layout/rtlProvider/rtlProvider';
import BasketAddressCard from '@/components/pages/basket/basket-address-card/basket-address-card';
import BasketAddressModal from '@/components/pages/basket/basket-address-modal/basket-address-modal';

function Address() {
   const [showBasketAddressModal, setShowBasketAddressModal] = useState(false);

   return (
      <ProfileLayout>
         <div>
            <div className="flex items-center justify-between rounded-2xl bg-[#F5F8FC] px-3 py-2">
               <div className="flex items-center gap-2 font-bold">
                  <MyLocationIcon fontSize="small" />
                  <p>لیست آدرس های شما</p>
               </div>
               <div className="hidden customMd:block">
                  <RtlProvider>
                     <Button
                        className="!text-customOrange2"
                        startIcon={<AddIcon />}
                        onClick={() => setShowBasketAddressModal(true)}
                     >
                        افزودن آدرس جدید
                     </Button>
                  </RtlProvider>
               </div>
            </div>

            <div className="flex flex-col gap-2">
               <BasketAddressCard />
               <BasketAddressCard />

               <div className="mt-4 customMd:hidden">
                  <Button
                     variant="contained"
                     type="submit"
                     size="large"
                     color="buttonBgGray"
                     fullWidth
                     className="!rounded-10 !p-2"
                     onClick={() => setShowBasketAddressModal(true)}
                  >
                     <div className="flex w-full items-center justify-between text-[#626E94]">
                        <p>افزودن آدرس جدید</p>

                        <AddIcon className="rounded-xl bg-[#BDCEDE] p-2 text-[#626E94]" />
                     </div>
                  </Button>
               </div>
            </div>
         </div>

         <BasketAddressModal show={showBasketAddressModal} onClose={() => setShowBasketAddressModal(false)} />
      </ProfileLayout>
   );
}

export default Address;
