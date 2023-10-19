/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';

//  Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Assets
import testPic from '../../../../assets/images/branchPicture.png';

// Styles
import OurRestaurantSwiperStyle from './our-restaurant-swiper.style';

function OurRestaurantSwiper() {
   return (
      <OurRestaurantSwiperStyle className="hidden customMd:block">
         <p className="text-center font-elMessiri text-2xl font-bold">رستوران ما در یک نگاه</p>
         <div className="mt-7">
            <Swiper
               navigation
               loop
               pagination={{
                  clickable: true,
               }}
               autoplay={{
                  delay: 2500,
               }}
               modules={[Navigation, Pagination, Autoplay]}
               className="mySwiper"
            >
               <SwiperSlide>
                  <div className="h-80">
                     <Image src={testPic} alt="our restaurant" className="h-full w-full object-cover" />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="h-80">
                     <Image src={testPic} alt="our restaurant" className="h-full w-full object-cover" />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="h-80">
                     <Image src={testPic} alt="our restaurant" className="h-full w-full object-cover" />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="h-80">
                     <Image src={testPic} alt="our restaurant" className="h-full w-full object-cover" />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="h-80">
                     <Image src={testPic} alt="our restaurant" className="h-full w-full object-cover" />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="h-80">
                     <Image src={testPic} alt="our restaurant" className="h-full w-full object-cover" />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="h-80">
                     <Image src={testPic} alt="our restaurant" className="h-full w-full object-cover" />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="h-80">
                     <Image src={testPic} alt="our restaurant" className="h-full w-full object-cover" />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="h-80">
                     <Image src={testPic} alt="our restaurant" className="h-full w-full object-cover" />
                  </div>
               </SwiperSlide>
            </Swiper>
         </div>
      </OurRestaurantSwiperStyle>
   );
}

export default OurRestaurantSwiper;
