import Image from 'next/image';

// MUI
import { Rating } from '@mui/material';

// Assets
import userProfilePic from '../../../../assets/images/userProfile.png';

// Styles
import CommentStyle from './comment.style';

function Comment() {
   return (
      <CommentStyle className="border-b border-solid border-[#E4EAF0] pb-8">
         <div>
            <div className="flex gap-2 customMd:items-center">
               <div className="h-10 w-10 rounded-full border border-solid border-gray-400 customMd:h-14 customMd:w-14">
                  <Image src={userProfilePic} className="h-full w-full rounded-full" alt="user profile" />
               </div>
               <div className="flex flex-col gap-1">
                  <p className="text-10 text-[#626E94]">۲ هفته پیش</p>
                  <div>
                     <Rating value={3} max={3} size="small" readOnly />
                  </div>
                  <p className="font-bold">علی ازقندی</p>
               </div>
            </div>

            <div className="mb-7 mt-9 flex flex-wrap items-center gap-2 rounded-10 bg-[#FEF1E4] p-2 customMd:gap-5">
               <p className="rounded-lg bg-[#FEE2C9] px-3 pb-0.5 pt-1.5 text-xs text-[#AA5403] customMd:px-7 customMd:text-sm">
                  کباب تابه ای
               </p>
               <p className="rounded-lg bg-[#FEE2C9] px-3 pb-0.5 pt-1.5 text-xs text-[#AA5403] customMd:px-7 customMd:text-sm">
                  کباب تابه ای
               </p>
            </div>
            <p className="text-base text-textGray">
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
               متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </p>
         </div>

         <div className="relative mr-5 mt-6 rounded-b-10 rounded-l-10 bg-[#391C01] p-5 text-white customXs:mr-16 customMd:mr-24">
            <div className="flex gap-3">
               <div className="h-10 w-10 shrink-0 rounded-full border border-solid border-gray-400 customMd:h-14 customMd:w-14">
                  <Image src={userProfilePic} className="h-full w-full rounded-full" alt="admin profile" />
               </div>
               <div>
                  <div className="flex items-center gap-2">
                     <p className="whitespace-nowrap text-sm font-bold">پاسخ مدیر رستوران</p>
                     <p className="text-[8px]">۲ هفته پیش</p>
                  </div>
                  <p className="mt-4 text-sm text-[#BDCEDE]">
                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                  </p>
               </div>
            </div>
            <div className="absolute -top-3 right-0 h-4 w-5 rounded-tr-sm bg-[#391C01]" id="responseShape" />
         </div>
      </CommentStyle>
   );
}

export default Comment;
