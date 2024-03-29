import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Icons
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// Assets
import foodPartyIcon from '@/assets/icons/foodParty.svg';
import shapeIcon from '@/assets/images/a.png';
import plate from '@/assets/images/Group 34826.png';

// Components
import FoodCardFirstTemplate from '@/components/templates/food-card-first-template/food-card-first-template';
import RtlProvider from '@/components/layout/rtlProvider/rtlProvider';

function FoodParty({ foodPartyList }) {
   return (
      <div>
         <div className="px-5 customMd:hidden customMd:px-[60px]">
            <div className="flex items-center justify-between rounded-10 bg-crimson px-3 py-4 text-white customXs:px-5">
               <div className="flex items-center gap-1 customXs:gap-2">
                  <div className="flex size-11 items-center justify-center rounded-full bg-white">
                     <Image src={foodPartyIcon} alt="food party" />
                  </div>
                  <div className="space-y-3">
                     <p>فود پارتی</p>
                     <p className="text-[9px] [word-spacing:1px]">جدیدترین تخفیفات غذاها</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="pe-5 customMd:flex customMd:items-center customMd:bg-[#FEF1E4]">
            <div className="relative hidden h-[355px] w-[215px] shrink-0 flex-col items-center justify-evenly rounded-10 bg-customOrange2 customMd:flex">
               <div className="absolute inset-0 opacity-[15%]">
                  <Image src={shapeIcon} alt="food party" className="size-full" />
               </div>
               <div className="space-y-2 text-center">
                  <p className="text-xl font-bold text-white">فــــود پارتـــــــــــــــی</p>
                  <p className="text-sm text-[#713802]">تخفیفات ویژه در رستوران مادر</p>
               </div>
               <div className="">
                  <Image src={plate} alt="food party" className="size-full" />
               </div>
               <Link href="/category/همه%20غذاها/1">
                  <RtlProvider>
                     <Button
                        variant="contained"
                        color="white"
                        className="!rounded-10 !py-4 !text-xs !text-[#8E4603]"
                        endIcon={<KeyboardBackspaceIcon />}
                     >
                        مشاهده همه غذاها
                     </Button>
                  </RtlProvider>
               </Link>
            </div>
            <div className="mt-5 flex items-center gap-5 overflow-auto pb-5 pr-5">
               {foodPartyList?.result?.map(item => (
                  <FoodCardFirstTemplate className="w-[178px] customMd:w-[200px]" key={item.id} detail={item} />
               ))}
            </div>
         </div>
      </div>
   );
}

export default FoodParty;
