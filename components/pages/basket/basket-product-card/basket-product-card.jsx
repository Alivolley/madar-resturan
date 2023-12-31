import Link from 'next/link';

// MUI
import { IconButton } from '@mui/material';

// Icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

// Apis
import useAddToBasket from '@/apis/basket/useAddToBasket';
import useRemoveFromBasket from '@/apis/basket/useRemoveFromBasket';

function BasketProductCard({ detail }) {
   const { isMutating: addToBasketIsMutating, trigger: addToBasketTrigger } = useAddToBasket();
   const { isMutating: removeFromBasketIsMutating, trigger: removeFromBasketTrigger } = useRemoveFromBasket();

   const addToBasketHandler = () => {
      const foodObj = {
         food_id: detail?.menu_item?.id,
         food_count: Number(detail?.menu_item?.quantity_in_cart) + 1,
      };

      addToBasketTrigger(foodObj);
   };

   const removeFromBasketHandler = () => {
      const foodObj = {
         food_id: detail?.menu_item?.id,
         food_count: Number(detail?.menu_item?.quantity_in_cart) - 1,
      };

      removeFromBasketTrigger(foodObj);
   };

   return (
      <div className="flex items-center justify-between rounded-2xl bg-white p-5">
         <div className="flex flex-1 gap-3">
            <Link
               href={`/product/${detail?.menu_item?.title}`}
               className="hidden h-32 w-32 shrink-0 rounded-10 customMd:block"
            >
               <img src={detail?.menu_item?.cover} alt="food" className="h-full w-full rounded-10 object-cover" />
            </Link>
            <div className="flex flex-col gap-3 customMd:mt-4">
               <Link href={`/product/${detail?.menu_item?.title}`} className="text-sm font-bold customMd:text-base">
                  {detail?.menu_item?.title}
               </Link>
               <p className="hidden h-12 overflow-hidden text-xs text-[#66839A] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] customMd:[display:-webkit-box]">
                  {detail?.menu_item?.content}
               </p>
            </div>
         </div>

         <div className="flex-1">
            <p className="mb-3 h-3 text-center font-rokhFaNum text-10 font-bold text-[#D39090]">
               {detail?.menu_item?.stock <= 5 ? `${detail?.menu_item?.stock} عدد باقی مانده` : null}
            </p>
            <div className="flex items-center justify-center gap-2">
               <IconButton
                  className="border border-solid border-customOrange"
                  sx={{ width: { xs: '15px', md: '22px' }, height: { xs: '15px', md: '22px' } }}
                  onClick={addToBasketHandler}
                  disabled={
                     addToBasketIsMutating ||
                     removeFromBasketIsMutating ||
                     detail?.menu_item?.stock === detail?.menu_item?.quantity_in_cart
                  }
               >
                  <AddIcon color="customOrange" className="text-sm" />
               </IconButton>
               <p className="pt-1.5 font-rokhFaNum text-sm font-bold customMd:text-xl">
                  {addToBasketIsMutating || removeFromBasketIsMutating ? '...' : detail?.menu_item?.quantity_in_cart}
               </p>
               <IconButton
                  className={detail?.menu_item?.quantity_in_cart === 1 ? '' : 'border border-solid border-textGray'}
                  sx={{ width: { xs: '15px', md: '22px' }, height: { xs: '15px', md: '22px' } }}
                  onClick={removeFromBasketHandler}
                  disabled={addToBasketIsMutating || removeFromBasketIsMutating}
               >
                  {detail?.menu_item?.quantity_in_cart === 1 ? (
                     <DeleteOutlineOutlinedIcon />
                  ) : (
                     <RemoveIcon color="textGray" className="text-sm" />
                  )}
               </IconButton>
            </div>
         </div>

         <div className="flex flex-1 flex-col items-end">
            {detail?.menu_item?.percentage !== 0 ? (
               <div className="flex items-center gap-0.5 customMd:gap-2">
                  <p className="rounded-md bg-[#FCB777] px-1 pt-1 font-rokhFaNum text-[8px] customMd:text-10">
                     {detail?.menu_item?.percentage}٪
                  </p>
                  <p className="font-rokhFaNum text-10 font-bold text-[#D39090] line-through">
                     {Number(detail?.before_price).toLocaleString('fa-IR')} تومان
                  </p>
               </div>
            ) : null}

            <div className="mt-3 flex items-center gap-1 rounded text-xs font-bold customMd:text-base">
               <p>{Number(detail?.total_price).toLocaleString('fa-IR')}</p>
               <p>تومان</p>
            </div>
         </div>
      </div>
   );
}

export default BasketProductCard;
