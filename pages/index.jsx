import Image from 'next/image';

// Assets
import bannerPic from '../assets/images/banner.png';

// Components
import Categories from '@/components/pages/home/categories/categories';
import OurRestaurantSwiper from '@/components/pages/home/our-restaurant-swiper/our-restaurant-swiper';
import FoodParty from '@/components/pages/home/food-party/food-party';
import DailyMenu from '@/components/pages/home/daily-menu/daily-menu';
import BestComments from '@/components/pages/home/best-comments/best-comments';

// Configs
import axiosInstance from '@/configs/axiosInstance';

export default function Home({ categoryList, foodPartyList, dailyMenuList, lastComments }) {
   return (
      <div className="pb-20">
         <div className="customMd:bg-customOrange customMd:p-[60px]">
            <Image src={bannerPic} alt="banner" className="size-full" />
         </div>
         <div className="mt-14 px-5 customMd:px-[60px]">
            <Categories haveTitle categoryList={categoryList} />
         </div>
         {foodPartyList?.length ? (
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
   try {
      const categoryList = await axiosInstance('restaurant/categories/list_create/').then(res => res.data);
      const foodPartyList = await axiosInstance('restaurant/foods/discounted/').then(res => res.data);
      const dailyMenuList = await axiosInstance('restaurant/today-menu/get_update_delete/').then(res => res.data);
      const lastComments = await axiosInstance('restaurant/comments/list_create/?last_five=true').then(res => res.data);

      return {
         props: {
            categoryList,
            foodPartyList,
            dailyMenuList,
            lastComments,
         },
         revalidate: 60,
      };
   } catch (error) {
      return {
         notFound: true,
      };
   }
}
