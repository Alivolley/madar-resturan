import { toast } from 'react-toastify';

// MUI
import { LoadingButton } from '@mui/lab';

// Icons
import WestIcon from '@mui/icons-material/West';

// Apis
import useSendAddress from '@/apis/basket/useSendAddress';

function BasketDescription({ basketStep, setBasketStep, detail, chosenAddress, descriptionValue }) {
   const { trigger: sendAddressTrigger, isMutating: sendAddressIsMutating } = useSendAddress();

   const basketClickHandler = () => {
      if (basketStep === 1) {
         setBasketStep(2);
      } else if (basketStep === 2) {
         if (detail?.delivery && !chosenAddress) {
            toast.info('لطفا یک آدرس را انتخاب کنید');
         } else if (detail?.delivery && chosenAddress) {
            const addressDetail = {
               address: chosenAddress?.id,
               order_description: descriptionValue,
            };
            sendAddressTrigger(
               addressDetail
               //     {
               //    onSuccess : ()=> // payment api
               // }
            );
         } else if (!detail?.delivery) {
            // payment api
         }
      }
   };

   console.log(detail);

   return (
      <div className={`rounded-2xl bg-white ${basketStep === 1 ? 'mt-3' : ''}`}>
         <p className="p-5 text-center">خلاصه سفارش</p>

         <div className="flex items-center justify-between border-b border-solid border-[#E4EAF0] p-5">
            <p>تعداد</p>
            <p className="font-rokhFaNum font-bold">{detail?.all_orders_count} کالا</p>
         </div>

         <div className="flex items-center justify-between border-b border-solid border-[#E4EAF0] p-5">
            <p>جمع سفارشات</p>
            <p className="font-rokhFaNum font-bold">
               {Number(detail?.before_discount_price).toLocaleString('fa-IR')} تومان
            </p>
         </div>

         <div className="flex items-center justify-between border-b border-solid border-[#E4EAF0] p-5">
            <p>میزان تخفیف</p>
            <p className="font-rokhFaNum font-bold text-[#D14D72]">
               {(Number(detail?.before_discount_price) - Number(detail?.final_price)).toLocaleString()} تومان
            </p>
         </div>
         {detail?.delivery && (
            <div className="flex items-center justify-between border-b border-solid border-[#E4EAF0] p-5">
               <p>هزینه ارسال</p>
               <p className="font-rokhFaNum font-bold text-[#FF9F1C]">
                  {Number(detail?.shipping_cost).toLocaleString('fa-IR')} تومان
               </p>
            </div>
         )}

         <div className="flex items-center justify-between border-b border-solid border-[#E4EAF0] p-5">
            <p>مبلغ کل</p>
            <p className="font-rokhFaNum font-bold text-[#D14D72]">
               {Number(detail?.final_price).toLocaleString('fa-IR')} تومان
            </p>
         </div>

         <div className="p-5">
            <LoadingButton
               variant="contained"
               type="submit"
               size="large"
               color="customOrange2"
               loading={sendAddressIsMutating}
               fullWidth
               className="!rounded-10 !p-2"
               onClick={basketClickHandler}
            >
               <div className="flex w-full items-center justify-between">
                  <p>{basketStep === 1 ? 'ثبت آدرس و سفارش' : 'تصویه و ثبت سفارش'}</p>

                  <WestIcon className="rounded-xl bg-white p-2 text-customOrange" />
               </div>
            </LoadingButton>
         </div>
      </div>
   );
}

export default BasketDescription;
