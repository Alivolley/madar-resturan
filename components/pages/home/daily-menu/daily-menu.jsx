import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// MUI
import { Grid } from '@mui/material';

// Icons
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// Assets
import testPic1 from '../../../../assets/images/some.png';

// Components
import FoodCardFirstTemplate from '@/components/templates/food-card-first-template/food-card-first-template';
import FoodCardSecondTemplate from '@/components/templates/food-card-second-template/food-card-second-template';

function DailyMenu({ dailyMenuList }) {
   const [newList, setNewList] = useState([]);

   useEffect(() => {
      const updatedList = [];
      for (let i = 0; i < dailyMenuList?.foods.length; i += 2) {
         const firstItem = dailyMenuList?.foods[i];
         const secondItem = dailyMenuList?.foods[i + 1];

         const newItem = {
            first: firstItem,
            second: secondItem,
         };

         updatedList.push(newItem);
      }

      setNewList(updatedList);
   }, [dailyMenuList?.foods]);

   return (
      <section>
         <div className="mb-6 flex items-center justify-between space-y-1 rounded-10 bg-white px-5 py-3 text-center customMd:bg-transparent">
            <p className="w-fit border-b-[3px] border-solid border-customOrange font-elMessiri text-2xl font-bold">
               منوی روز
            </p>
            <Link href="/" className="flex items-center gap-2 text-sm text-textGray">
               مشاهده همه
               <KeyboardArrowLeftIcon fontSize="small" />
            </Link>
         </div>
         <div className="customMd:hidden">
            <Grid container spacing={1}>
               {dailyMenuList?.foods?.map(item => (
                  <Grid item xs={6} key={item?.id}>
                     <FoodCardFirstTemplate className="mx-auto custom400:w-[178px] customMd:w-[200px]" detail={item} />
                  </Grid>
               ))}
            </Grid>
         </div>

         <div className="hidden customMd:block">
            <div className="flex items-center gap-9">
               <div className="relative flex shrink-0 flex-col rounded-2xl bg-white">
                  <div className="h-[338px] w-[314px]">
                     <Image src={testPic1} alt="daily menu" className="h-full w-full object-cover" />
                  </div>

                  <Link href="/" className="flex items-center px-6 py-5 font-bold text-[#050F2C]">
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
