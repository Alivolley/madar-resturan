import Image from 'next/image';

// Assets
import foodPartyIcon from '../../../../assets/icons/foodParty.svg';
import shapeIcon from '../../../../assets/images/a.png';
import plate from '../../../../assets/images/Group 34826.png';

// Components
import FoodCardFirstTemplate from '@/components/templates/food-card-first-template/food-card-first-template';

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
         <div className="customMd:flex customMd:items-center">
            <div className="relative hidden h-[355px] w-[215px] shrink-0 flex-col items-center justify-evenly rounded-10 bg-customOrange2 customMd:flex">
               <div className="absolute inset-0 opacity-[15%]">
                  <Image src={shapeIcon} alt="food party" className="size-full" />
               </div>
               <div className="space-y-2 text-center">
                  <p className="text-xl font-bold text-white">فود پارتی</p>
                  <p className="text-sm text-[#713802]">تخفیفات ویژه در رستوران مادر</p>
               </div>
               <div className="">
                  <Image src={plate} alt="food party" className="size-full" />
               </div>
            </div>
            <div className="mt-5 flex items-center gap-5 overflow-auto pb-5 pr-5 customMd:pr-0">
               {foodPartyList?.result?.map(item => (
                  <FoodCardFirstTemplate className="w-[178px] customMd:w-[200px]" key={item.id} detail={item} />
               ))}
            </div>
         </div>
      </div>
   );
}

export default FoodParty;
