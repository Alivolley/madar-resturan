import Link from 'next/link';
import Image from 'next/image';

// MUI
import { IconButton } from '@mui/material';

// Icons
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

// Assets
import footerLogo from '../../../assets/images/footerLogo.png';

function Footer({ isLogin }) {
   return (
      <footer className="mt-28 px-5 pb-11 customMd:px-[60px]">
         <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
               <Image src={footerLogo} alt="footer logo" />
               <div className="space-y-1">
                  <p className="font-elMessiri text-lg font-bold text-[#8F0E0E]">رستوران مادر</p>
                  <p className="text-sm text-[#626E94]">غذاهای لذیذ و خانگی</p>
               </div>
            </div>
            <div className="h-[1px] grow bg-[#BDCEDE]" />
         </div>

         <div className="mt-10 flex justify-between gap-10 customLg:gap-[300px]">
            <div className="flex gap-32 2xl:gap-[400px]">
               <div>
                  <p className="mb-6 whitespace-nowrap font-elMessiri font-bold">دسته بندی های رستوران</p>
                  <div className="flex gap-10">
                     <div className="flex flex-col gap-4">
                        <Link className="whitespace-nowrap hover:font-bold hover:text-[#B31111]" href="/">
                           منوی روز
                        </Link>
                        <Link className="whitespace-nowrap hover:font-bold hover:text-[#B31111]" href="/">
                           خورشت ها
                        </Link>
                        <Link className="whitespace-nowrap hover:font-bold hover:text-[#B31111]" href="/">
                           آش و سوپ
                        </Link>
                        <Link className="whitespace-nowrap hover:font-bold hover:text-[#B31111]" href="/">
                           غذای ایرانی
                        </Link>
                     </div>
                     <div className="flex flex-col gap-4">
                        <Link className="whitespace-nowrap hover:font-bold hover:text-[#B31111]" href="/">
                           چلوها
                        </Link>
                        <Link className="whitespace-nowrap hover:font-bold hover:text-[#B31111]" href="/">
                           غذای فرنگی
                        </Link>
                        <Link className="whitespace-nowrap hover:font-bold hover:text-[#B31111]" href="/">
                           نوشیدنی
                        </Link>
                        <Link className="whitespace-nowrap hover:font-bold hover:text-[#B31111]" href="/">
                           سالاد پیش غذا
                        </Link>
                     </div>
                  </div>
               </div>
               <div>
                  <p className="mb-6 whitespace-nowrap font-elMessiri font-bold">اطلاعات رستوران مادر</p>
                  <div className="flex flex-col gap-4">
                     <Link className="whitespace-nowrap hover:font-bold hover:text-[#B31111]" href="/">
                        درباره ما
                     </Link>
                     <Link className="whitespace-nowrap hover:font-bold hover:text-[#B31111]" href="/">
                        تماس با ما
                     </Link>
                     <Link className="whitespace-nowrap hover:font-bold hover:text-[#B31111]" href="/">
                        گواهی ها
                     </Link>
                     <Link className="whitespace-nowrap hover:font-bold hover:text-[#B31111]" href="/">
                        سوالات متداول
                     </Link>
                  </div>
               </div>
            </div>
            <div className="customXl:grow">
               <p className="mb-6 whitespace-nowrap font-elMessiri font-bold">اطلاعات تماس</p>
               <div className="flex gap-10">
                  <div className="flex flex-col gap-9">
                     <div className="flex items-center gap-2 whitespace-nowrap">
                        <p className="text-[#8F0E0E]">
                           <MyLocationIcon color="inherit" fontSize="inherit" />
                        </p>
                        آدرس :
                     </div>
                     <div className="flex items-center gap-2 whitespace-nowrap">
                        <p className="text-[#8F0E0E]">
                           <PhoneOutlinedIcon color="inherit" fontSize="inherit" />
                        </p>
                        شماره تماس :
                     </div>
                  </div>
                  <div className="flex flex-col gap-8">
                     <address className="h-8">
                        کرمانشاه - کارمندان - ایستگاه ۵ - خیابان عصر انقلاب - روبروی استخر پاسارگاد
                     </address>
                     <a className="text-right hover:font-bold hover:text-[#B31111]" href="tel:09376028877" dir="ltr">
                        ۰۹۳۷ ۶۰۲ ۸۸۷۷
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div className="mt-12 flex items-center justify-between">
            <p className="text-xs text-[#7E8AAB]">
               طراحی و توسعه این سایت توسط تیم{' '}
               <a
                  href="https://neuro-code.ir/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-1 font-bold text-[#B31111]"
               >
                  نورو کد
               </a>{' '}
               میباشد .
            </p>
            <div className="flex items-center gap-4">
               <a href="tel:09376028877">
                  <IconButton>
                     <LocalPhoneIcon fontSize="small" color="secondary" />
                  </IconButton>
               </a>
               <a href="https://api.whatsapp.com/send?phone=989186825744" target="_blank" rel="noreferrer">
                  <IconButton>
                     <WhatsAppIcon fontSize="small" color="success" />
                  </IconButton>
               </a>
               <a href="https://t.me/Roshyyaa" target="_blank" rel="noreferrer">
                  <IconButton>
                     <TelegramIcon fontSize="small" color="info" />
                  </IconButton>
               </a>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
