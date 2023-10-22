import Link from 'next/link';
import Image from 'next/image';

// MUI
import { LoadingButton } from '@mui/lab';

// Icons
import AddIcon from '@mui/icons-material/Add';

// Assets
import foodTestPic from '../../../assets/images/20230820194614fpdl.jpg';
import discountShape from '../../../assets/icons/discount-shape.svg';

function FoodCardSecondTemplate({ className }) {
   return (
      <div className={`flex shrink-0 gap-3 rounded-xl bg-white p-2 ${className}`}>
         <Link href="/" className="relative block h-full w-[184px]">
            <Image src={foodTestPic} alt="food" className="h-full w-full rounded-xl object-cover" />
            <div className="absolute right-1 top-1 flex items-center rounded-10 bg-[#C1F7EE] px-1.5 pt-1 text-xs">
               <div>
                  <Image src={discountShape} alt="discount" />
               </div>
               <p>۲۲٪</p>
            </div>
         </Link>
         <div className="w-[184px]">
            <Link
               href="/"
               className="my-3 h-4 overflow-hidden font-elMessiri font-bold [-webkit-box-orient:vertical] [-webkit-line-clamp:1] [display:-webkit-box]"
               title="رنگین پلو با سالاد شیرازی"
            >
               رنگین پلو با سالاد شیرازی
            </Link>
            <Link
               href="/"
               className="h-8 overflow-hidden text-xs text-textGray [-webkit-box-orient:vertical] [display:-webkit-box] [-webkit-line-clamp:2]"
            >
               ۳۰۰ گرم برنج، یک پرس خورشت قورمه تهیه شده از ۴۰ گرم گوشت گوساله تازه
            </Link>
            <div className="mt-6">
               <Link
                  href="/"
                  className="mt-2 block h-5 text-left font-rokhFaNum text-sm font-bold text-[#D39090] line-through"
               >
                  {Number('420000').toLocaleString('fa-IR')}
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
                  >
                     <AddIcon color="customOrange" fontSize="small" />
                  </LoadingButton>
                  <Link
                     href="/"
                     className="mt-2 flex h-[25px] items-center gap-1 rounded bg-[#C1F7EE] px-2 text-sm text-[#139983]"
                  >
                     <p>{Number('378000').toLocaleString('fa-IR')}</p>
                     <p>تومان</p>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default FoodCardSecondTemplate;
