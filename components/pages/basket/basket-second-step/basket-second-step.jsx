import { useState } from 'react';

// MUI
import { Button, TextField } from '@mui/material';

// Icons
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AddIcon from '@mui/icons-material/Add';
import MyLocationIcon from '@mui/icons-material/MyLocation';

// Components
import BasketAddressCard from '../basket-address-card/basket-address-card';
import RtlProvider from '@/components/layout/rtlProvider/rtlProvider';
import BasketAddressModal from '../basket-address-modal/basket-address-modal';

function BasketSecondStep({ deliveryMethod, setDeliveryMethod }) {
   const [showBasketAddressModal, setShowBasketAddressModal] = useState(false);

   return (
      <section className="mb-7 customMd:mb-0">
         <div className="flex flex-col gap-7 rounded-2xl bg-white px-8 py-4 customMd:flex-row customMd:justify-between">
            <div>
               <p className="flex items-center font-bold">
                  <LocalShippingOutlinedIcon fontSize="small" className="ml-2" /> روش تحویل سفارش
               </p>
               <p className="mt-2 text-xs text-[#626E94]">لطفا روش تحویل مدنظر خود را انتخاب کنید</p>
            </div>

            <button
               type="button"
               className="flex cursor-pointer items-center gap-2 border-none bg-transparent font-rokhRegular outline-none"
               onClick={() => setDeliveryMethod('delivery')}
            >
               <div
                  className={`h-4 w-4 rounded-full border-[4px] border-solid ${
                     deliveryMethod === 'delivery' ? 'border-[#D14D72]' : 'border-[#BDCEDE]'
                  }`}
               />
               <div className="flex flex-col items-start gap-1">
                  <p className={deliveryMethod === 'delivery' ? 'font-bold' : 'text-[#626E94]'}>ارسال توسط پیک</p>
                  <p className={`text-10 ${deliveryMethod === 'delivery' ? 'font-bold' : 'text-[#626E94]'}`}>
                     توسط پیک رستوران ارسال شود
                  </p>
               </div>
            </button>

            <button
               type="button"
               className="flex cursor-pointer items-center gap-2 border-none bg-transparent font-rokhRegular outline-none"
               onClick={() => setDeliveryMethod('inPerson')}
            >
               <div
                  className={`h-4 w-4 rounded-full border-[4px] border-solid ${
                     deliveryMethod === 'inPerson' ? 'border-[#D14D72]' : 'border-[#BDCEDE]'
                  }`}
               />
               <div className="flex flex-col items-start gap-1">
                  <p className={deliveryMethod === 'inPerson' ? 'font-bold' : 'text-[#626E94]'}>تحویل حضوری</p>
                  <p className={`text-10 ${deliveryMethod === 'inPerson' ? 'font-bold' : 'text-[#626E94]'}`}>
                     به صورت حضوری مراجعه میکنم و تحویل میگیرم
                  </p>
               </div>
            </button>
         </div>

         <div>
            {deliveryMethod === 'delivery' && (
               <>
                  <div className="flex items-center justify-between border-t-[5px] border-solid border-[#E4EAF0] px-8 py-4">
                     <div>
                        <div className="flex items-center gap-2 font-bold">
                           <MyLocationIcon fontSize="small" />
                           <p>لیست آدرس های شما</p>
                        </div>
                        <p className="mt-2 text-xs text-textGray">لطفا آدرس مد نظر خود را انتخاب کنید</p>
                     </div>
                     <div className="hidden customMd:block">
                        <RtlProvider>
                           <Button
                              className="!text-[#626E94]"
                              endIcon={<AddIcon />}
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
               </>
            )}

            <div className="mt-4 border-t-[5px] border-solid border-[#E4EAF0] bg-white px-1 py-4">
               <RtlProvider>
                  <TextField
                     label="توضیحات سفارش ( اختیاری )"
                     InputLabelProps={{ sx: { fontSize: '13px' } }}
                     fullWidth
                     multiline
                     rows={4}
                     color="customOrange"
                  />
               </RtlProvider>
            </div>
         </div>

         <BasketAddressModal show={showBasketAddressModal} onClose={() => setShowBasketAddressModal(false)} />
      </section>
   );
}

export default BasketSecondStep;
