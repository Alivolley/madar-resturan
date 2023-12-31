import Link from 'next/link';
import Image from 'next/image';

// Redux
import { useSelector } from 'react-redux';

// MUI
import { LoadingButton } from '@mui/lab';

// Icons
import AddIcon from '@mui/icons-material/Add';

// Assets
import discountShape from '../../../assets/icons/discount-shape.svg';

// Apis
import useAddToBasket from '@/apis/basket/useAddToBasket';
import useGetBasket from '@/apis/basket/useGetBasket';

function FoodCardFirstTemplate({ className, detail }) {
   const isLogin = useSelector(state => state?.loginStatusReducer);
   const { isMutating: addToBasketIsMutating, trigger: addToBasketTrigger } = useAddToBasket();
   const { data: basketData } = useGetBasket(isLogin);
   const basketQuantity = basketData?.orders?.find(item => item?.menu_item?.title === detail?.title)?.menu_item
      ?.quantity_in_cart;

   const addToBasketHandler = () => {
      const foodObj = {
         food_id: detail?.id,
         food_count: basketQuantity ? Number(basketQuantity) + 1 : 1,
      };

      addToBasketTrigger(foodObj);
   };

   return (
      <div className={`shrink-0 rounded-10 bg-white p-2 ${className}`}>
         <Link href={`/product/${detail?.title}`} className="relative block h-32 w-full" title={detail?.title}>
            <img src={detail?.cover} alt="food" className="h-full w-full rounded-10 object-cover" />
            {detail?.percentage !== 0 && (
               <div className="absolute right-1 top-1 flex items-center rounded-10 bg-[#C1F7EE] px-1.5  pt-1 text-xs">
                  <div>
                     <Image src={discountShape} alt="discount" />
                  </div>
                  <p>{detail?.percentage.toLocaleString('fa-IR')}٪</p>
               </div>
            )}
         </Link>
         <Link href={`/product/${detail?.title}`} className="my-3 block font-elMessiri font-bold" title={detail?.title}>
            {detail?.title}
         </Link>
         <Link
            title={detail?.content}
            href={`/product/${detail?.title}`}
            className="h-8 overflow-hidden text-xs text-textGray [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]"
         >
            {detail?.content}
         </Link>
         <Link
            href={`/product/${detail?.title}`}
            className="mt-2 block h-5 text-left font-rokhFaNum text-xs font-bold text-[#D39090]"
         >
            {detail?.stock <= 5 ? `${detail?.stock} عدد موجود است` : null}
         </Link>
         <Link
            href={`/product/${detail?.title}`}
            className="mt-2 block h-5 text-left font-rokhFaNum text-sm font-bold text-[#D39090] line-through"
         >
            {detail?.percentage ? Number(detail?.before_discount_price).toLocaleString('fa-IR') : null}
         </Link>

         <div className="flex items-end justify-between">
            <LoadingButton
               variant="contained"
               color="buttonPink2"
               sx={{
                  minWidth: 0,
                  padding: 0,
                  height: 25,
                  width: 30,
               }}
               onClick={addToBasketHandler}
               loading={addToBasketIsMutating}
               disabled={detail?.stock === basketQuantity}
            >
               <AddIcon color="customOrange" fontSize="small" />
            </LoadingButton>
            <Link
               href={`/product/${detail?.title}`}
               className="mt-2 flex h-[25px] items-center gap-1 rounded bg-[#C1F7EE] px-2 text-sm text-[#139983]"
            >
               <p>{Number(detail?.price).toLocaleString('fa-IR')}</p>
               <p>تومان</p>
            </Link>
         </div>
      </div>
   );
}

export default FoodCardFirstTemplate;
