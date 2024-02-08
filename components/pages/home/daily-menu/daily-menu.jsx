import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// MUI
import { Grid } from '@mui/material';

// Icons
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// Assets
import dailyMenuBig from '@/assets/images/dailyMenuBig.png';

// Components
import FoodCardFirstTemplate from '@/components/templates/food-card-first-template/food-card-first-template';
import FoodCardSecondTemplate from '@/components/templates/food-card-second-template/food-card-second-template';

function DailyMenu({ dailyMenuList }) {
   const [newList, setNewList] = useState([]);

   useEffect(() => {
      const updatedList = [];
      for (let i = 0; i < dailyMenuList?.length; i += 2) {
         const firstItem = dailyMenuList?.[i];
         const secondItem = dailyMenuList?.[i + 1];

         const newItem = {
            first: firstItem,
            second: secondItem,
         };

         updatedList.push(newItem);
      }

      setNewList(updatedList);
   }, [dailyMenuList]);

   return (
      <section>
         <div className="mb-6 flex items-center justify-between space-y-1 rounded-10 bg-white px-5 py-3 text-center customMd:bg-transparent">
            <p className="w-fit border-b-[3px] border-solid border-customOrange font-elMessiri text-2xl font-bold">
               منوی روز
            </p>
            <Link
               href="/category/منوی روز/1"
               className="flex items-center gap-2 text-sm text-textGray hover:text-[#E27005]"
            >
               مشاهده همه
               <KeyboardArrowLeftIcon fontSize="small" />
            </Link>
         </div>
         <div className="customMd:hidden">
            <Grid container spacing={1}>
               {dailyMenuList?.map(item => (
                  <Grid item xs={6} key={item?.id}>
                     <FoodCardFirstTemplate className="mx-auto custom400:w-[178px] customMd:w-[200px]" detail={item} />
                  </Grid>
               ))}
            </Grid>
         </div>

         <div className="hidden customMd:block">
            <div className="flex items-start gap-9">
               <div className="relative flex shrink-0 flex-col gap-12 rounded-2xl bg-white p-4">
                  <div className="">
                     <Image src={dailyMenuBig} alt="daily menu" className="size-full object-cover" />
                  </div>

                  <Link href="/category/منوی روز/1" className="flex items-center px-6 py-5 font-bold text-[#050F2C]">
                     مشاهده ی منوی روز <KeyboardArrowLeftIcon />
                  </Link>
               </div>
               <div className="flex gap-5 overflow-auto pb-5">
                  {newList?.map(item => (
                     <div className="shrink-0 space-y-5" key={item?.first?.id}>
                        {item?.first && <FoodCardSecondTemplate detail={item?.first} />}
                        {item?.second && <FoodCardSecondTemplate detail={item?.second} />}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default DailyMenu;
