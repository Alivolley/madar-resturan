import Image from 'next/image';

// Assets
import bannerPic from '../assets/images/banner.png';

export default function Home() {
   return (
      <div>
         <div className="customSm:bg-customOrange customSm:p-6 customMd:p-[60px]">
            <Image src={bannerPic} alt="banner" className="h-full w-full" />
         </div>
      </div>
   );
}
