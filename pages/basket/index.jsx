import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

// MUI
import { Button, CircularProgress, Fab, Grid } from '@mui/material';

// Icons
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

// Assets
import basketIcon from '../../assets/icons/footer/footer-basket.svg';
import infoIcon from '../../assets/icons/basket-info.svg';
import paymentIcon from '../../assets/icons/basket-payment.svg';
import shoppingIcon from '../../assets/icons/basket-shopping.svg';
import emptyBasketPic from '../../assets/images/empty-basket.png';

// Components
import BasketDescription from '@/components/pages/basket/basket-description/basket-description';
import BasketProductCard from '@/components/pages/basket/basket-product-card/basket-product-card';
import DeleteBasketModal from '@/components/pages/basket/delete-basket-modal/delete-basket-modal';
import BasketSecondStep from '@/components/pages/basket/basket-second-step/basket-second-step';

// Apis
import useGetBasket from '@/apis/basket/useGetBasket';

function Basket() {
   const [showDeleteBasketModal, setShowDeleteBasketModal] = useState(false);
   const [basketStep, setBasketStep] = useState(1);
   const [deliveryMethod, setDeliveryMethod] = useState('delivery');

   const { data: basketData, isLoading: basketDataIsLoading } = useGetBasket(true);

   if (basketDataIsLoading) {
      return (
         <main className="flex h-[200px] items-center justify-center">
            <CircularProgress color="customOrange2" />
         </main>
      );
   }

   return (
      <main className="px-5 pt-6 customMd:px-[60px]">
         {basketData?.orders?.length ? (
            <>
               {basketStep === 1 ? (
                  <div className="flex items-center justify-between rounded-2xl rounded-br-none bg-white px-8 py-4">
                     <div className="flex items-end gap-1">
                        <div className="h-5 w-5 pb-1">
                           <Image src={basketIcon} alt="basket Icon" className="h-full w-full" />
                        </div>
                        <p className="text-sm font-bold text-[#7E8AAB]">سبد خرید</p>
                     </div>
                     <div>
                        <Fab
                           color="buttonBgGray"
                           sx={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '10px',
                           }}
                           onClick={() => setShowDeleteBasketModal(true)}
                        >
                           <DeleteForeverOutlinedIcon sx={{ color: '#7E8AAB' }} />
                        </Fab>
                     </div>
                  </div>
               ) : (
                  <div className="my-10 flex items-center justify-center">
                     <div className="flex flex-col items-center justify-center gap-3">
                        <Fab
                           color="buttonPink"
                           sx={{
                              width: '70px',
                              height: '70px',
                              borderRadius: '50%',
                              padding: '14px',
                           }}
                           onClick={() => setBasketStep(1)}
                        >
                           <Image src={shoppingIcon} alt="basket step" className="h-full w-full" />
                        </Fab>
                        <p className="text-xs font-bold text-customOrange2">سبد خرید</p>
                     </div>

                     <div className="mb-5 h-[1px] w-32 bg-customOrange2 customMd:mx-8" />

                     <div className="flex flex-col items-center justify-center gap-3">
                        <div className="h-[70px] w-[70px] rounded-full bg-buttonPink p-4">
                           <Image src={infoIcon} alt="basket step" className="h-full w-full" />
                        </div>
                        <p className="text-xs font-bold text-customOrange2">اطلاعات مشتری</p>
                     </div>

                     <div className="mb-5 h-[1px] w-32 bg-customOrange2 customMd:mx-8" />

                     <div className="flex flex-col items-center justify-center gap-3">
                        <div className="h-[70px] w-[70px] rounded-full bg-buttonPink p-4">
                           <Image src={paymentIcon} alt="basket step" className="h-full w-full" />
                        </div>
                        <p className="text-xs font-bold text-customOrange2">پرداخت</p>
                     </div>
                  </div>
               )}

               <div>
                  <Grid container spacing={{ md: 3 }}>
                     <Grid item xs={12} md={9}>
                        {basketStep === 1 ? (
                           <>
                              <div className="flex items-center justify-between rounded-b-2xl bg-customOrange2 px-3 py-5 text-white customXs:px-8">
                                 <div className="flex items-center gap-1 text-sm font-bold">
                                    <DnsOutlinedIcon fontSize="small" />
                                    <p>نام غذا</p>
                                 </div>
                                 <div className="flex items-center gap-1 text-sm font-bold">
                                    <FormatListNumberedOutlinedIcon fontSize="small" />
                                    <p>تعداد</p>
                                 </div>
                                 <div className="flex items-center gap-1 text-sm font-bold">
                                    <PaymentsOutlinedIcon fontSize="small" />
                                    <p>قیمت نهایی</p>
                                 </div>
                              </div>

                              <div className="mt-4 flex flex-col gap-4">
                                 {basketData?.orders?.map(item => (
                                    <BasketProductCard key={item?.menu_item?.id} detail={item} />
                                 ))}
                              </div>
                           </>
                        ) : (
                           <BasketSecondStep deliveryMethod={deliveryMethod} setDeliveryMethod={setDeliveryMethod} />
                        )}
                     </Grid>
                     <Grid item xs={12} md={3}>
                        <BasketDescription basketStep={basketStep} setBasketStep={setBasketStep} detail={basketData} />
                     </Grid>
                  </Grid>
               </div>
               <DeleteBasketModal show={showDeleteBasketModal} onClose={() => setShowDeleteBasketModal(false)} />
            </>
         ) : (
            <div className="mt-10 flex items-center justify-center">
               <div className="flex flex-col items-center">
                  <div className="h-[200px] w-[200px]">
                     <Image src={emptyBasketPic} alt="empty basket" className="h-full w-full" />
                  </div>
                  <p className="mt-5 text-center text-lg font-bold">در حال حاضر محصولی در سبد خرید خود ندارید .</p>
                  <p className="mt-2 text-center text-sm text-[#7E8AAB]">
                     با مشاهده منو میتوانید محصولات را به سبد خرید خود اضافه کنید
                  </p>
                  <Link href="/category/همه غذاها/1" className="mt-5">
                     <Button
                        variant="contained"
                        size="large"
                        color="customOrange2"
                        fullWidth
                        className="!rounded-10 !p-2"
                     >
                        <div className="flex w-full items-center justify-between gap-20">
                           <p>مشاهده منو</p>

                           <KeyboardBackspaceOutlinedIcon className="rounded-xl bg-white p-2 text-customOrange" />
                        </div>
                     </Button>
                  </Link>
               </div>
            </div>
         )}
      </main>
   );
}

export default Basket;
