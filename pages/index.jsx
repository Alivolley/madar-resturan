import Image from 'next/image';

// Assets
import bannerPic from '../assets/images/banner.png';

// Components
import Categories from '@/components/pages/home/categories/categories';
import OurRestaurantSwiper from '@/components/pages/home/our-restaurant-swiper/our-restaurant-swiper';
import FoodParty from '@/components/pages/home/food-party/food-party';

export default function Home() {
   return (
      <div className="pb-20">
         <div className="customSm:bg-customOrange customSm:p-6 customMd:p-[60px]">
            <Image src={bannerPic} alt="banner" className="h-full w-full" />
         </div>
         <div className="mt-14 px-5 customMd:px-[60px]">
            <Categories />
         </div>
         <div className="mt-28 customMd:px-[60px]">
            <FoodParty />
         </div>
         <div className="mt-28">
            <OurRestaurantSwiper />
         </div>
      </div>
   );
}
