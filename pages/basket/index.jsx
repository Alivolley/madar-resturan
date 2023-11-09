import { useState } from 'react';
import Image from 'next/image';

// MUI
import { Fab, Grid } from '@mui/material';

// Icons
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';

// Assets
import basketIcon from '../../assets/icons/footer/footer-basket.svg';

// Components
import BasketDescription from '@/components/pages/basket/basket-description/basket-description';
import BasketProductCard from '@/components/pages/basket/basket-product-card/basket-product-card';
import DeleteBasketModal from '@/components/pages/basket/delete-basket-modal/delete-basket-modal';

function Basket() {
   const [showDeleteBasketModal, setShowDeleteBasketModal] = useState(false);

   return (
      <main className="px-5 pt-6 customMd:px-[60px]">
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

         <div>
            <Grid container spacing={{ md: 3 }}>
               <Grid item xs={12} md={9}>
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
                     <BasketProductCard />
                     <BasketProductCard />
                     <BasketProductCard />
                  </div>
               </Grid>
               <Grid item xs={12} md={3}>
                  <BasketDescription />
               </Grid>
            </Grid>
         </div>
         <DeleteBasketModal show={showDeleteBasketModal} onClose={() => setShowDeleteBasketModal(false)} />
      </main>
   );
}

export default Basket;
