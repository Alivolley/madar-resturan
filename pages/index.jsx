import { toast } from 'react-toastify';
import { useEffect } from 'react';
import Image from 'next/image';
import axiosInstance from '@/configs/axiosInstance';

// Assets
import bannerPicLarge from '@/assets/images/bannerLarge.png';
import bannerPicSmall from '@/assets/images/bannerSmall.png';

// Components
import Categories from '@/components/pages/home/categories/categories';
import OurRestaurantSwiper from '@/components/pages/home/our-restaurant-swiper/our-restaurant-swiper';
import FoodParty from '@/components/pages/home/food-party/food-party';
import DailyMenu from '@/components/pages/home/daily-menu/daily-menu';
import BestComments from '@/components/pages/home/best-comments/best-comments';

export default function Home({ categoryList, foodPartyList, dailyMenuList, lastComments, error }) {
   useEffect(() => {
      if (error) {
         toast.error(error);
      }
   }, [error]);

   return (
      <div className="pb-20">
         <div className="customMd:bg-customOrange customMd:p-[60px]">
            <Image src={bannerPicLarge} alt="banner" className="hidden size-full customMd:block" />
            <Image src={bannerPicSmall} alt="banner" className="mt-7 size-full customMd:hidden" />
         </div>
         <div className="mt-10 px-5 customMd:mt-14 customMd:px-[60px]">
            <Categories haveTitle categoryList={categoryList} />
         </div>
         {foodPartyList?.result?.length ? (
            <div className="mt-16 customMd:mt-28 customMd:px-[60px]">
               <FoodParty foodPartyList={foodPartyList} />
            </div>
         ) : null}
         <div className="mt-16 customMd:mt-28">
            <OurRestaurantSwiper />
         </div>
         <div className="mt-16 px-5 customMd:mt-28 customMd:px-[60px]">
            <DailyMenu dailyMenuList={dailyMenuList} />
         </div>
         <div className="mt-20 customMd:mt-28">
            <BestComments detail={lastComments?.result} />
         </div>
      </div>
   );
}

export async function getStaticProps() {
   try {
      const categoryList = await axiosInstance(`store/categories/list_create/`).then(res => res.data);
      const foodPartyList = await axiosInstance(`store/products/list_create/?has_discount=True&page_size=1000`).then(
         res => res.data
      );
      const dailyMenuList = await axiosInstance(`store/today-menu/get_update_delete/`).then(res => res.data);
      const lastComments = await axiosInstance(`store/comments/list_create/?last_five=true`).then(res => res.data);

      return {
         props: {
            categoryList,
            foodPartyList,
            dailyMenuList,
            lastComments,
         },
         revalidate: 30,
      };
   } catch (error) {
      return {
         props: {
            error: error?.message,
         },
      };
   }
}
