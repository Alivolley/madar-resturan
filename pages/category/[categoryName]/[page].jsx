import { useRouter } from 'next/router';
import Link from 'next/link';

// Icons
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// Assets
import { Grid } from '@mui/material';
import Image from 'next/image';
import categoryPic from '../../../assets/images/categories/categoryPic.png';

// Components
import FoodCardThirdTemplate from '@/components/templates/food-card-third-template/food-card-third-template';
import Categories from '@/components/pages/home/categories/categories';

// Configs
import axiosInstance from '@/configs/axiosInstance';

function Category({ categoryList, categoryItems, dailyMenu }) {
   const router = useRouter();

   return (
      <>
         <main className="pb-28 pt-10 customMd:hidden">
            <div className="flex items-center gap-2 overflow-auto border-b border-solid border-b-[#E4EAF0] pb-5 pr-5">
               <Link
                  href="/category/منوی روز/1"
                  className={`shrink-0 whitespace-nowrap rounded-2xl px-6 pb-2.5 pt-3.5 ${
                     router?.query?.categoryName === 'منوی روز' ? 'bg-crimson text-white' : ''
                  }`}
               >
                  منوی روز
               </Link>
               {categoryList?.map(item => (
                  <Link
                     key={item?.id}
                     href={`/category/${item?.title}/1`}
                     className={`shrink-0 whitespace-nowrap rounded-2xl px-6 pb-2.5 pt-3.5 ${
                        router?.query?.categoryName === item?.title ? 'bg-crimson text-white' : ''
                     }`}
                  >
                     {item?.title}
                  </Link>
               ))}
            </div>
            {router?.query?.categoryName !== 'منوی روز' && (
               <div className="px-5">
                  <div>
                     <p className="mt-4 rounded-10 bg-[#FEE2C9] p-3 text-center font-elMessiri text-lg font-bold">
                        {router?.query?.categoryName}
                     </p>
                     <div className="mt-3 flex flex-col gap-3">
                        {categoryItems?.result?.length ? (
                           categoryItems?.result?.map(item => <FoodCardThirdTemplate key={item?.id} details={item} />)
                        ) : (
                           <p className="rounded-10 bg-buttonPink p-6 text-center font-bold">
                              امروز {router?.query?.categoryName} موجود نمیباشد
                           </p>
                        )}
                     </div>
                  </div>
               </div>
            )}
            <div className="px-5">
               <div>
                  <p className="mt-4 rounded-10 bg-[#FEE2C9] p-3 text-center font-elMessiri text-lg font-bold">
                     منوی روز
                  </p>
                  <div className="mt-3 flex flex-col gap-3">
                     {dailyMenu?.foods?.length ? (
                        dailyMenu?.foods?.map(item => <FoodCardThirdTemplate key={item.id} details={item} />)
                     ) : (
                        <p className="rounded-10 bg-buttonPink p-6 text-center font-bold">منوی روز خالی میباشد</p>
                     )}
                  </div>
               </div>
            </div>
         </main>
         <main className="hidden pb-28 pt-10 customMd:block customMd:px-[60px]">
            <div className="mb-16">
               <Image src={categoryPic} alt="categories" className="h-full w-full" />
            </div>
            <Categories categoryList={categoryList} activeCategory={router?.query?.categoryName} />
            {router?.query?.categoryName !== 'منوی روز' && (
               <div className="mt-16">
                  <div className="mb-6 flex items-center justify-between space-y-1 border-b border-solid border-b-[#E4EAF0] text-center">
                     <p className="w-fit border-b-[3px] border-solid border-customOrange font-elMessiri text-2xl font-bold">
                        {router?.query?.categoryName}
                     </p>
                     {router?.query?.categoryName !== 'همه غذاها' && (
                        <Link href="/category/همه غذاها/1" className="flex items-center gap-2 text-sm text-textGray">
                           مشاهده همه غذاها
                           <KeyboardArrowLeftIcon fontSize="small" />
                        </Link>
                     )}
                  </div>
                  <div>
                     {categoryItems?.result?.length ? (
                        <Grid container spacing={2}>
                           {categoryItems?.result?.map(item => (
                              <Grid item md={6} xl={4} key={item?.id}>
                                 <FoodCardThirdTemplate details={item} />
                              </Grid>
                           ))}
                        </Grid>
                     ) : (
                        <p className="rounded-10 bg-buttonPink p-6 text-center font-bold">
                           امروز {router?.query?.categoryName} موجود نمیباشد
                        </p>
                     )}
                  </div>
               </div>
            )}
            <div className="mt-16">
               <div className="mb-6 flex items-center justify-between space-y-1 border-b border-solid border-b-[#E4EAF0] text-center">
                  <p className="w-fit border-b-[3px] border-solid border-customOrange font-elMessiri text-2xl font-bold">
                     منوی روز
                  </p>
                  {router?.query?.categoryName !== 'همه غذاها' && (
                     <Link href="/category/همه غذاها/1" className="flex items-center gap-2 text-sm text-textGray">
                        مشاهده همه غذاها
                        <KeyboardArrowLeftIcon fontSize="small" />
                     </Link>
                  )}
               </div>
               <div>
                  {dailyMenu?.foods?.length ? (
                     <Grid container spacing={2}>
                        {dailyMenu?.foods?.map(item => (
                           <Grid item md={6} xl={4} key={item?.id}>
                              <FoodCardThirdTemplate details={item} />
                           </Grid>
                        ))}
                     </Grid>
                  ) : (
                     <p className="rounded-10 bg-buttonPink p-6 text-center font-bold">منوی روز خالی میباشد</p>
                  )}
               </div>
            </div>
         </main>
      </>
   );
}

export default Category;

export async function getStaticPaths() {
   return {
      paths: [
         {
            params: {
               categoryName: 'چلو ها',
               page: '1',
            },
         },
      ],
      fallback: 'blocking',
   };
}

export async function getStaticProps(context) {
   try {
      const categoryList = await axiosInstance('restaurant/categories/list_create/').then(res => res.data);
      const categoryItems = await axiosInstance(
         `restaurant/foods/list_create/?category__title=${
            context?.params?.categoryName === 'همه غذاها' ? '' : context?.params?.categoryName
         }&page=${context?.params?.page}`
      ).then(res => res.data);
      const dailyMenu = await axiosInstance('restaurant/today-menu/get_update_delete/').then(res => res.data);

      return {
         props: {
            categoryList,
            categoryItems,
            dailyMenu,
         },
         revalidate: 300,
      };
   } catch (error) {
      return {
         notFound: true,
      };
   }
}
