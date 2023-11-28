import Link from 'next/link';
import Image from 'next/image';

// Redux
import { useSelector } from 'react-redux';

// MUI
import { IconButton } from '@mui/material';

// Icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

// Assets
import discountShape from '../../../assets/icons/discount-shape.svg';

// Apis
import useAddToBasket from '@/apis/basket/useAddToBasket';
import useRemoveFromBasket from '@/apis/basket/useRemoveFromBasket';
import useGetBasket from '@/apis/basket/useGetBasket';

function FoodCardThirdTemplate({ className, details }) {
   const isLogin = useSelector(state => state?.loginStatusReducer);
   const { isMutating: addToBasketIsMutating, trigger: addToBasketTrigger } = useAddToBasket();
   const { isMutating: removeFromBasketIsMutating, trigger: removeFromBasketTrigger } = useRemoveFromBasket();
   const { data: basketData } = useGetBasket(isLogin);
   const basketQuantity = basketData?.orders?.find(item => item?.menu_item?.title === details?.title)?.menu_item
      ?.quantity_in_cart;

   const addToBasketHandler = () => {
      const foodObj = {
         food_id: details?.id,
         food_count: basketQuantity ? Number(basketQuantity) + 1 : 1,
      };

      addToBasketTrigger(foodObj);
   };

   const removeFromBasketHandler = () => {
      const foodObj = {
         food_id: details?.id,
         food_count: Number(basketQuantity) - 1,
      };

      removeFromBasketTrigger(foodObj);
   };

   return (
      <div className={`flex max-w-[620px] shrink-0 rounded-xl bg-white p-2 ${className}`}>
         <Link
            href={`/product/${details?.title}`}
            className="relative aspect-square h-[134px] shrink-0"
            title={details?.title}
         >
            <img src={details?.cover} alt="food" className="h-full w-full rounded-xl object-cover" />
            {details?.percentage !== 0 && (
               <div className="absolute right-1 top-1 flex items-center rounded-10 bg-[#C1F7EE] px-1 pt-1 text-10">
                  <div>
                     <Image src={discountShape} alt="discount" />
                  </div>
                  <p>{details?.percentage?.toLocaleString('fa-IR')}٪</p>
               </div>
            )}
         </Link>
         <div className="mr-2 grow">
            <Link
               href={`/product/${details?.title}`}
               className="my-3 h-4 overflow-hidden font-elMessiri text-sm font-bold [-webkit-box-orient:vertical] [-webkit-line-clamp:1] [display:-webkit-box]"
               title={details?.title}
            >
               {details?.title}
            </Link>
            <Link
               title={details?.content}
               href={`/product/${details?.title}`}
               className="h-8 overflow-hidden text-[11px] leading-4 text-textGray [-webkit-box-orient:vertical] [display:-webkit-box] [-webkit-line-clamp:2]"
            >
               {details?.content}
            </Link>

            <p
               href={`/product/${details?.title}`}
               className="mt-2 h-4 font-rokhFaNum text-[11px] font-bold text-[#D39090]"
            >
               {details?.stock <= 5 ? `${details?.stock} عدد موجود است` : null}
            </p>

            <div className="mt-4 flex items-center gap-1.5">
               <IconButton
                  className="border border-solid border-customOrange"
                  sx={{ width: '18px', height: '18px' }}
                  onClick={addToBasketHandler}
                  disabled={addToBasketIsMutating || removeFromBasketIsMutating || details?.stock === basketQuantity}
               >
                  <AddIcon color="customOrange" className="text-sm" />
               </IconButton>
               <p className="pt-1.5 font-rokhFaNum font-bold">
                  {addToBasketIsMutating || removeFromBasketIsMutating ? '...' : basketQuantity || 0}
               </p>
               <IconButton
                  className={basketQuantity !== 1 ? 'border border-solid border-textGray' : ''}
                  sx={{ width: '18px', height: '18px' }}
                  onClick={removeFromBasketHandler}
                  disabled={addToBasketIsMutating || removeFromBasketIsMutating || !basketQuantity}
               >
                  {basketQuantity === 1 ? (
                     <DeleteOutlineOutlinedIcon />
                  ) : (
                     <RemoveIcon color="textGray" className="text-sm" />
                  )}
               </IconButton>
            </div>
         </div>
         <div className="flex flex-col justify-end">
            <Link
               href={`/product/${details?.title}`}
               className="block h-4 text-left font-rokhFaNum text-xs font-bold text-[#D39090] line-through"
            >
               {details?.percentage ? Number(details?.before_discount_price).toLocaleString('fa-IR') : null}
            </Link>

            <Link
               href={`/product/${details?.title}`}
               className="mt-1 flex h-[25px] items-center gap-1 text-xs font-bold"
            >
               <p>{Number(details?.price).toLocaleString('fa-IR')}</p>
               <p>تومان</p>
            </Link>
         </div>
      </div>
   );
}

export default FoodCardThirdTemplate;
