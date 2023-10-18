import Image from 'next/image';

// Assets
import bannerPic from '../assets/images/banner.png';

// Components
import Categories from '@/components/pages/home/categories/categories';

export default function Home() {
   return (
      <div>
         <div className="customSm:bg-customOrange customSm:p-6 customMd:p-[60px]">
            <Image src={bannerPic} alt="banner" className="h-full w-full" />
         </div>
         <div className="mt-14 px-5 customMd:px-[60px]">
            <Categories />
         </div>
      </div>
   );
}
