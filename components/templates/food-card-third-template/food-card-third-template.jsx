import Link from 'next/link';
import Image from 'next/image';

// MUI
import { IconButton } from '@mui/material';

// Icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Assets
import foodTestPic from '../../../assets/images/20230820194614fpdl.jpg';
import discountShape from '../../../assets/icons/discount-shape.svg';

function FoodCardThirdTemplate({ className }) {
   return (
      <div className={`flex max-w-[620px] shrink-0 rounded-xl bg-white p-2 ${className}`}>
         <Link href="/product/some" className="relative aspect-square h-[100px] shrink-0">
            <Image src={foodTestPic} alt="food" className="h-full w-full rounded-xl object-cover" />
            <div className="absolute right-1 top-1 flex items-center rounded-10 bg-[#C1F7EE] px-1 pt-1 text-10">
               <div>
                  <Image src={discountShape} alt="discount" />
               </div>
               <p>۲۲٪</p>
            </div>
         </Link>
         <div className="mr-2 grow">
            <Link
               href="/product/some"
               className="my-3 h-4 overflow-hidden font-elMessiri text-sm font-bold [-webkit-box-orient:vertical] [-webkit-line-clamp:1] [display:-webkit-box]"
               title="رنگین پلو با سالاد شیرازی"
            >
               رنگین پلو با سالاد شیرازی
            </Link>
            <Link
               href="/product/some"
               className="h-8 overflow-hidden text-[11px] leading-4 text-textGray [-webkit-box-orient:vertical] [display:-webkit-box] [-webkit-line-clamp:2]"
            >
               ۳۰۰ گرم برنج، یک پرس خورشت قورمه تهیه شده از ۴۰ گرم گوشت گوساله تازه
            </Link>
            <div className="flex items-center gap-1.5">
               <IconButton className="border border-solid border-customOrange" sx={{ width: '18px', height: '18px' }}>
                  <AddIcon color="customOrange" className="text-sm" />
               </IconButton>
               <p className="pt-1.5 font-rokhFaNum font-bold">2</p>
               <IconButton className="border border-solid border-textGray" sx={{ width: '18px', height: '18px' }}>
                  <RemoveIcon color="textGray" className="text-sm" />
               </IconButton>
            </div>
         </div>
         <div className="flex flex-col justify-end">
            <Link
               href="/product/some"
               className="block h-4 text-left font-rokhFaNum text-xs font-bold text-[#D39090] line-through"
            >
               {Number('420000').toLocaleString('fa-IR')}
            </Link>

            <Link href="/product/some" className="mt-1 flex h-[25px] items-center gap-1 text-xs font-bold">
               <p>{Number('378000').toLocaleString('fa-IR')}</p>
               <p>تومان</p>
            </Link>
         </div>
      </div>
   );
}

export default FoodCardThirdTemplate;
