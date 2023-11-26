import Link from 'next/link';
import Image from 'next/image';

// MUI
import { IconButton } from '@mui/material';

// Icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Assets
import foodPic from '../../../../assets/images/some.png';

function BasketProductCard() {
   return (
      <div className="flex items-center justify-between rounded-2xl bg-white p-5">
         <div className="flex flex-1 gap-3">
            <Link href="/product/some" className="hidden h-32 w-32 shrink-0 rounded-10 customMd:block">
               <Image src={foodPic} alt="food" className="h-full w-full rounded-10" />
            </Link>
            <div className="flex flex-col gap-3 customMd:mt-4">
               <Link href="/product/some" className="text-sm font-bold customMd:text-base">
                  ماکارانی با سالاد شیرازی
               </Link>
               <p className="hidden h-12 overflow-hidden text-xs text-[#66839A] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] customMd:[display:-webkit-box]">
                  ۴۵۰ گرم ماکارونی، تهیه شده از گوشت گوساله تازه و قارچ +سالاد شیرازی
               </p>
            </div>
         </div>

         <div className="flex-1">
            <p className="mb-3 h-3 text-center font-rokhFaNum text-10 font-bold text-[#D39090]">{`${5} عدد باقی مانده`}</p>
            <div className="flex items-center justify-center gap-1.5">
               <IconButton
                  className="border border-solid border-customOrange"
                  sx={{ width: { xs: '15px', md: '22px' }, height: { xs: '15px', md: '22px' } }}
               >
                  <AddIcon color="customOrange" className="text-sm" />
               </IconButton>
               <p className="pt-1.5 font-rokhFaNum text-sm font-bold customMd:text-xl">2</p>
               <IconButton
                  className="border border-solid border-textGray"
                  sx={{ width: { xs: '15px', md: '22px' }, height: { xs: '15px', md: '22px' } }}
               >
                  <RemoveIcon color="textGray" className="text-sm" />
               </IconButton>
            </div>
         </div>

         <div className="flex flex-1 flex-col items-end">
            <div className="flex items-center gap-0.5 customMd:gap-2">
               <p className="rounded-md bg-[#FCB777] px-1 pt-1 text-[8px] customMd:text-10">۲۲٪</p>
               <p className="font-rokhFaNum text-10 font-bold text-[#D39090] line-through">
                  {Number('420000').toLocaleString('fa-IR')} تومان
               </p>
            </div>

            <div className="mt-3 flex items-center gap-1 rounded text-xs font-bold customMd:text-base">
               <p>{Number('378000').toLocaleString('fa-IR')}</p>
               <p>تومان</p>
            </div>
         </div>
      </div>
   );
}

export default BasketProductCard;
