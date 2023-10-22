import Image from 'next/image';
import Link from 'next/link';

// MUI
import { Button } from '@mui/material';

// Icons
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// Assets
import foodPartyIcon from '../../../../assets/icons/foodParty.svg';
import shapeIcon from '../../../../assets/images/a.png';
import plate from '../../../../assets/images/Group 34826.png';

// Components
import CountdownParty from '@/components/templates/countdown-party/countdown-party';
import FoodCard from '@/components/templates/food-card/food-card';
import RtlProvider from '@/components/layout/rtlProvider/rtlProvider';

function FoodParty() {
   return (
      <div>
         <div className="px-5 customMd:hidden customMd:px-[60px]">
            <div className="flex items-center justify-between rounded-[10px] bg-crimson px-3 py-4 text-white customXs:px-5">
               <div className="flex items-center gap-1 customXs:gap-2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                     <Image src={foodPartyIcon} alt="food party" />
                  </div>
                  <div className="space-y-2">
                     <p className="font-elMessiri">فود پارتی</p>
                     <p className="text-[9px] [word-spacing:1px]">جدیدترین تخفیفات غذاها</p>
                  </div>
               </div>
               <div>
                  <CountdownParty initialCount={400000} />
               </div>
            </div>
         </div>
         <div className="customMd:flex customMd:items-center">
            <div className="relative hidden h-[355px] w-[215px] shrink-0 flex-col items-center justify-evenly rounded-[10px] bg-customOrange2 customMd:flex">
               <div className="absolute inset-0 opacity-[15%]">
                  <Image src={shapeIcon} alt="food party" className="h-full w-full" />
               </div>
               <div className="space-y-1 text-center">
                  <p className="font-elMessiri text-xl font-bold text-white">فود پارتی</p>
                  <p className="text-sm text-[#713802]">تخفیفات ویژه در رستوران مادر</p>
               </div>
               <div className="">
                  <Image src={plate} alt="food party" className="h-full w-full" />
               </div>
               <Link href="/" className="text-[#8E4603]">
                  <RtlProvider>
                     <Button
                        variant="contained"
                        color="white"
                        endIcon={<KeyboardBackspaceIcon />}
                        className="!py-3 !font-bold"
                        sx={{ borderRadius: '10px' }}
                     >
                        ورود به فود پارتی
                     </Button>
                  </RtlProvider>
               </Link>
            </div>
            <div className="mt-5 flex items-center gap-5 overflow-auto pb-5 pr-5 customMd:pr-0">
               <FoodCard />
               <FoodCard />
               <FoodCard />
               <FoodCard />
               <FoodCard />
               <FoodCard />
               <FoodCard />
               <FoodCard />
               <FoodCard />
               <FoodCard />
               <FoodCard />
               <FoodCard />
            </div>
         </div>
      </div>
   );
}

export default FoodParty;
