import { toast } from 'react-toastify';
import { useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

// Assets
import bannerPic from '../assets/images/banner.png';

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
            <Image src={bannerPic} alt="banner" className="size-full" />
         </div>
         <div className="mt-14 px-5 customMd:px-[60px]">
            <Categories haveTitle categoryList={categoryList} />
         </div>
         {foodPartyList?.result?.length ? (
            <div className="mt-28 customMd:px-[60px]">
               <FoodParty foodPartyList={foodPartyList} />
            </div>
         ) : null}
         <div className="mt-28">
            <OurRestaurantSwiper />
         </div>
         <div className="mt-28 px-5 customMd:px-[60px]">
            <DailyMenu dailyMenuList={dailyMenuList} />
         </div>
         <div className="mt-28">
            <BestComments detail={lastComments?.result} />
         </div>
      </div>
   );
}

export async function getStaticProps() {
   const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

   try {
      const categoryList = await axios(`${baseURL}api/store/categories/list_create/`).then(res => res.data);
      const foodPartyList = await axios(`${baseURL}api/store/products/list_create/?has_discount=True`).then(
         res => res.data
      );
      const dailyMenuList = await axios(`${baseURL}api/store/today-menu/get_update_delete/`).then(res => res.data);
      const lastComments = await axios(`${baseURL}api/store/comments/list_create/?last_five=true`).then(
         res => res.data
      );

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
