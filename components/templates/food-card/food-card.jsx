import Link from 'next/link';
import Image from 'next/image';

// MUI
import { LoadingButton } from '@mui/lab';

// Icons
import AddIcon from '@mui/icons-material/Add';

// Assets
import foodTestPic from '../../../assets/images/20230820194614fpdl.jpg';
import discountShape from '../../../assets/icons/discount-shape.svg';

function FoodCard() {
   return (
      <div className="w-[178px] shrink-0 rounded-[10px] bg-white p-2 customMd:w-[200px]">
         <Link href="/" className="relative block h-32 w-full">
            <Image src={foodTestPic} alt="food" className="h-full w-full rounded-[10px] object-cover" />
            <div className="absolute right-1 top-1 flex items-center rounded-[10px] bg-[#C1F7EE] px-1.5  pt-1 text-xs">
               <div>
                  <Image src={discountShape} alt="discount" />
               </div>
               <p>۲۲٪</p>
            </div>
         </Link>
         <Link href="/" className="my-3 block font-elMessiri font-bold">
            خورشت کرفس
         </Link>
         <Link
            href="/"
            className="h-8 overflow-hidden text-xs text-textGray [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]"
         >
            ۳۰۰ گرم برنج، یک پرس خورشت قورمه تهیه شده از ۴۰ گرم گوشت گوساله تازه
         </Link>

         <Link href="/" className="mt-2 block text-left font-rokhFaNum text-sm font-bold text-[#D39090] line-through">
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
   );
}

export default FoodCard;
