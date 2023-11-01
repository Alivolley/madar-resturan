import Link from 'next/link';

// Icons
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// Assets
import { Grid } from '@mui/material';
import Image from 'next/image';
import categoryPic from '../../assets/images/categories/categoryPic.png';

// Components
import FoodCardThirdTemplate from '@/components/templates/food-card-third-template/food-card-third-template';
import Categories from '@/components/pages/home/categories/categories';

function Category() {
   return (
      <>
         <main className="pb-28 pt-10 customMd:hidden">
            <div className="flex items-center gap-2 overflow-auto border-b border-solid border-b-[#E4EAF0] pb-5 pr-5">
               <Link
                  href="/category/some"
                  className="shrink-0 whitespace-nowrap rounded-2xl bg-crimson px-6 pb-2.5 pt-3.5 text-white"
               >
                  منوی روز
               </Link>
               <Link href="/category/some" className="shrink-0 whitespace-nowrap rounded-2xl px-6 pb-2.5 pt-3.5">
                  چلو ها
               </Link>
               <Link href="/category/some" className="shrink-0 whitespace-nowrap rounded-2xl px-6 pb-2.5 pt-3.5">
                  خورشت ها
               </Link>
               <Link href="/category/some" className="shrink-0 whitespace-nowrap rounded-2xl px-6 pb-2.5 pt-3.5">
                  پیش غذا و سالاد
               </Link>
               <Link href="/category/some" className="shrink-0 whitespace-nowrap rounded-2xl px-6 pb-2.5 pt-3.5">
                  نوشیدنی ها
               </Link>
               <Link href="/category/some" className="shrink-0 whitespace-nowrap rounded-2xl px-6 pb-2.5 pt-3.5">
                  منوی روز
               </Link>
            </div>
            <div className="px-5">
               <div>
                  <p className="mt-4 rounded-10 bg-[#FEE2C9] p-3 text-center font-elMessiri text-lg font-bold">
                     منوی روز
                  </p>
                  <div className="mt-3 flex flex-col items-center gap-3">
                     <FoodCardThirdTemplate />
                     <FoodCardThirdTemplate />
                     <FoodCardThirdTemplate />
                     <FoodCardThirdTemplate />
                     <FoodCardThirdTemplate />
                     <FoodCardThirdTemplate />
                     <FoodCardThirdTemplate />
                     <FoodCardThirdTemplate />
                  </div>
               </div>
            </div>
            <div className="px-5">
               <div>
                  <p className="mt-4 rounded-10 bg-[#FEE2C9] p-3 text-center font-elMessiri text-lg font-bold">
                     منوی روز
                  </p>
                  <div className="mt-3 flex flex-col items-center gap-3">
                     <FoodCardThirdTemplate />
                     <FoodCardThirdTemplate />
                     <FoodCardThirdTemplate />
                     <FoodCardThirdTemplate />
                     <FoodCardThirdTemplate />
                     <FoodCardThirdTemplate />
                     <FoodCardThirdTemplate />
                     <FoodCardThirdTemplate />
                  </div>
               </div>
            </div>
         </main>
         <main className="hidden pb-28 pt-10 customMd:block customMd:px-[60px]">
            <div className="mb-16">
               <Image src={categoryPic} alt="categories" className="h-full w-full" />
            </div>
            <Categories />
            <div className="mt-16">
               <div className="mb-6 flex items-center justify-between space-y-1 border-b border-solid border-b-[#E4EAF0] text-center">
                  <p className="w-fit border-b-[3px] border-solid border-customOrange font-elMessiri text-2xl font-bold">
                     منوی روز
                  </p>
                  <Link href="/category/some" className="flex items-center gap-2 text-sm text-textGray">
                     مشاهده همه غذاها
                     <KeyboardArrowLeftIcon fontSize="small" />
                  </Link>
               </div>
               <div>
                  <Grid container spacing={2}>
                     <Grid item md={6} xl={4}>
                        <FoodCardThirdTemplate />
                     </Grid>
                     <Grid item md={6} xl={4}>
                        <FoodCardThirdTemplate />
                     </Grid>
                     <Grid item md={6} xl={4}>
                        <FoodCardThirdTemplate />
                     </Grid>
                     <Grid item md={6} xl={4}>
                        <FoodCardThirdTemplate />
                     </Grid>
                     <Grid item md={6} xl={4}>
                        <FoodCardThirdTemplate />
                     </Grid>
                     <Grid item md={6} xl={4}>
                        <FoodCardThirdTemplate />
                     </Grid>
                     <Grid item md={6} xl={4}>
                        <FoodCardThirdTemplate />
                     </Grid>
                     <Grid item md={6} xl={4}>
                        <FoodCardThirdTemplate />
                     </Grid>
                  </Grid>
               </div>
            </div>
            <div className="mt-16">
               <div className="mb-6 flex items-center justify-between space-y-1 border-b border-solid border-b-[#E4EAF0] text-center">
                  <p className="w-fit border-b-[3px] border-solid border-customOrange font-elMessiri text-2xl font-bold">
                     منوی روز
                  </p>
                  <Link href="/category/some" className="flex items-center gap-2 text-sm text-textGray">
                     مشاهده همه غذاها
                     <KeyboardArrowLeftIcon fontSize="small" />
                  </Link>
               </div>
               <div>
                  <Grid container spacing={2}>
                     <Grid item md={6} xl={4}>
                        <FoodCardThirdTemplate />
                     </Grid>
                     <Grid item md={6} xl={4}>
                        <FoodCardThirdTemplate />
                     </Grid>
                     <Grid item md={6} xl={4}>
                        <FoodCardThirdTemplate />
                     </Grid>
                     <Grid item md={6} xl={4}>
                        <FoodCardThirdTemplate />
                     </Grid>
                     <Grid item md={6} xl={4}>
                        <FoodCardThirdTemplate />
                     </Grid>
                     <Grid item md={6} xl={4}>
                        <FoodCardThirdTemplate />
                     </Grid>
                     <Grid item md={6} xl={4}>
                        <FoodCardThirdTemplate />
                     </Grid>
                     <Grid item md={6} xl={4}>
                        <FoodCardThirdTemplate />
                     </Grid>
                  </Grid>
               </div>
            </div>
         </main>
      </>
   );
}

export default Category;
