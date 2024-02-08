import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';

// Redux
import { useSelector } from 'react-redux';

// MUI
import { LoadingButton } from '@mui/lab';

// Icons
import AddIcon from '@mui/icons-material/Add';

// Assets
import discountShape from '@/assets/icons/discount-shape.svg';
import noImage from '@/assets/images/noImage.png';

// Api
import useAddToBasket from '@/apis/basket/useAddToBasket';
import useGetBasket from '@/apis/basket/useGetBasket';

function FoodCardSecondTemplate({ className, detail }) {
   const isLogin = useSelector(state => state?.loginStatusReducer);
   const { isMutating: addToBasketIsMutating, trigger: addToBasketTrigger } = useAddToBasket();
   const { data: basketData } = useGetBasket(isLogin);
   const basketQuantity = basketData?.orders?.find(item => item?.product?.product_title === detail?.title)?.count;

   const addToBasketHandler = () => {
      if (isLogin) {
         const foodObj = {
            product_id: detail?.id,
            product_count: basketQuantity ? Number(basketQuantity) + 1 : 1,
         };

         addToBasketTrigger(foodObj);
      } else {
         toast.info('برای افزودن به سبد خرید ابتدا وارد حساب خود شوید');
      }
   };

   return (
      <div className={`flex shrink-0 gap-3 rounded-xl bg-white p-2 ${className}`} title={detail?.title}>
         <Link href={`/product/${detail?.title}`} className="relative block h-[175px] w-[184px]">
            <Image src={detail?.cover || noImage} alt="food" className="size-full rounded-xl object-cover" fill />
            {detail?.percentage !== 0 && (
               <div className="absolute right-1 top-1 flex items-center rounded-10 bg-[#C1F7EE] px-1.5 py-0.5 text-xs">
                  <Image src={discountShape} alt="discount" />
                  <p>{detail?.percentage.toLocaleString('fa-IR')}٪</p>
               </div>
            )}
         </Link>
         <div className="w-[184px]">
            <Link
               href={`/product/${detail?.title}`}
               className="mb-3 mt-1 h-[29px] overflow-hidden text-base font-bold [-webkit-box-orient:vertical] [-webkit-line-clamp:1] [display:-webkit-box]"
               title={detail?.title}
            >
               {detail?.title}
            </Link>
            <Link
               href={`/product/${detail?.title}`}
               title={detail?.description}
               className="h-8 overflow-hidden text-xs text-textGray [-webkit-box-orient:vertical] [display:-webkit-box] [-webkit-line-clamp:2]"
            >
               {detail?.description}
            </Link>
            <div className="mt-6">
               <Link
                  href={`/product/${detail?.title}`}
                  className="mt-2 block h-5 text-left font-rokhFaNum text-xs font-bold text-[#D39090]"
               >
                  {detail?.stock === 0 ? 'ناموجود' : detail?.stock <= 5 ? `${detail?.stock} عدد موجود است` : null}
               </Link>

               <Link
                  href={`/product/${detail?.title}`}
                  className="mt-2 block h-5 text-left font-rokhFaNum text-sm font-bold text-[#D39090] line-through"
               >
                  {detail?.percentage !== 0 && Number(detail?.before_discount_price).toLocaleString('fa-IR')}
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
                     disabled={detail?.stock === basketQuantity || detail?.stock === 0}
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
         </div>
      </div>
   );
}

export default FoodCardSecondTemplate;
