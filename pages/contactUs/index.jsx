import Image from 'next/image';

// MUI
import { Grid } from '@mui/material';

// Icons
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

// Assets
import contactUsPic from '@/assets/images/contactUsPic.png';

function ContactUs() {
   return (
      <div className="mx-auto max-w-[1300px] px-5 pb-28 pt-14 customMd:px-[60px]">
         <div className="bg-white p-12">
            <Grid container spacing={{ xs: 8, md: 12 }}>
               <Grid item xs={12} sm={6} md={4}>
                  <div className="relative">
                     <Image src={contactUsPic} alt="contactUs" className="sticky z-[1] size-full" />
                     <div className="absolute inset-x-0 bottom-0 top-[80px] z-[0] bg-[#F5F8FC]" />
                  </div>
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <div className="customSm:mt-8">
                     <p className="font-elMessiri text-xl font-bold">منتظر شنیدن صدای گرمتان هستیم</p>
                     <p className="mt-5 text-base font-bold">
                        پرسنل ما در غذاخوری مادر ، آماده پاسخگویی به سوالات شما هستند
                     </p>
                     <p className="mt-10 text-base">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                        درصد گذشته حال و آینده، شناخت فراوان جامعه
                     </p>
                  </div>
               </Grid>
               <Grid item xs={12} md={4}>
                  <div className="flex flex-col gap-11 customMd:mt-8">
                     <div className="flex gap-2">
                        <p className="flex size-11 shrink-0 items-center justify-center rounded bg-[#FEE2C9]">
                           <LocalPhoneOutlinedIcon />
                        </p>
                        <div className="space-y-3.5">
                           <p className="font-bold">شماره تماس</p>
                           <p className="text-[#0D0B1E]">۰۹۱۸۶۸۲۵۷۴۳</p>
                        </div>
                     </div>
                     <div className="flex gap-2">
                        <p className="flex size-11 shrink-0 items-center justify-center rounded bg-[#FEE2C9]">
                           <LocationOnOutlinedIcon />
                        </p>
                        <div className="space-y-3.5">
                           <p className="font-bold">آدرس</p>
                           <p className="text-base text-[#0D0B1E]">
                              مشهد، بزرگراه بابانظر، بابانظر ۷۷، کوچه شهید عزیزی ۳، پلاک ۸
                           </p>
                        </div>
                     </div>
                     <div className="flex gap-2">
                        <p className="flex size-11 shrink-0 items-center justify-center rounded bg-[#FEE2C9]">
                           <EmailOutlinedIcon />
                        </p>
                        <div className="space-y-3.5">
                           <p className="font-bold">آدرس ایمیل</p>
                           <p className="text-[#0D0B1E]">info@17online.com</p>
                        </div>
                     </div>
                  </div>
               </Grid>
            </Grid>
         </div>
      </div>
   );
}

export default ContactUs;
