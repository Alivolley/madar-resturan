import Image from 'next/image';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Icon
import StarIcon from '@mui/icons-material/Star';

// Assets
import userProfile from '../../../../assets/images/userProfile.png';

// Styles
import BestCommentsStyle from './best-comments.style';

function BestComments({ detail }) {
   return (
      <BestCommentsStyle>
         <p className="mb-8 text-center font-elMessiri text-3xl font-bold">نظر مشتریان رستوران مادر چیست ؟</p>
         <Swiper
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            centeredSlides
            coverflowEffect={{
               rotate: 0,
               stretch: 0,
               depth: 50,
               modifier: 3,
            }}
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="mySwiper"
            breakpoints={{
               0: {
                  spaceBetween: 0,
                  slidesPerView: 1.5,
               },
               900: {
                  spaceBetween: 75,
                  slidesPerView: 2,
               },
               1500: {
                  spaceBetween: 120,
                  slidesPerView: 2.5,
               },
            }}
            autoplay={{
               delay: 4000,
               disableOnInteraction: true,
            }}
         >
            {detail?.map(item => (
               <SwiperSlide key={item?.id}>
                  <div className="flex justify-center">
                     <div className="flex flex-col gap-4 rounded-10 bg-white p-3 customMd:w-[650px] customMd:flex-row customMd:px-14 customMd:py-9">
                        <div className="flex flex-col items-center">
                           <div className="relative flex size-20 items-center justify-center rounded-full border border-solid border-stone-300">
                              <Image
                                 src={item?.user_image || userProfile}
                                 alt="user profile"
                                 className="size-full rounded-full"
                                 fill
                              />
                           </div>
                           <p className="mt-2 whitespace-nowrap text-lg font-bold">{item?.user}</p>
                           <div className="flex items-center gap-2 text-xs">
                              <p className="whitespace-nowrap">{item?.elapsed_time}</p>
                              <p className="flex items-end gap-1 whitespace-nowrap font-rokhFaNum">
                                 <StarIcon fontSize="inherit" className="fill-[#f4b740] pb-1" />
                                 {item?.score}
                              </p>
                           </div>
                        </div>
                        <div>
                           <p className="mb-2 font-bold">{item?.menu_item}</p>

                           <pre className="whitespace-normal text-sm">{item?.message}</pre>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </BestCommentsStyle>
   );
}

export default BestComments;
