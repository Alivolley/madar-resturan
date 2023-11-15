import Image from 'next/image';

// Assets
import bannerPic from '../assets/images/banner.png';

// Components
import Categories from '@/components/pages/home/categories/categories';
import OurRestaurantSwiper from '@/components/pages/home/our-restaurant-swiper/our-restaurant-swiper';
import FoodParty from '@/components/pages/home/food-party/food-party';
import DailyMenu from '@/components/pages/home/daily-menu/daily-menu';
import BestComments from '@/components/pages/home/best-comments/best-comments';

export default function Home() {
   return (
      <div className="pb-20">
         <div className="customMd:bg-customOrange customMd:p-[60px]">
            <Image src={bannerPic} alt="banner" className="h-full w-full" />
         </div>
         <div className="mt-14 px-5 customMd:px-[60px]">
            <Categories haveTitle />
         </div>
         <div className="mt-28 customMd:px-[60px]">
            <FoodParty />
         </div>
         <div className="mt-28">
            <OurRestaurantSwiper />
         </div>
         <div className="mt-28 px-5 customMd:px-[60px]">
            <DailyMenu />
         </div>
         <div className="mt-28">
            <BestComments />
         </div>
      </div>
   );
}
