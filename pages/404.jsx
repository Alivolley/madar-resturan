import Image from 'next/image';

// Assets
import png404 from '@/assets/images/404.png';

function Custom404() {
   return (
      <div className="flex flex-col items-center justify-center gap-10 px-5 pt-28 customMd:px-[60px] customMd:py-10">
         <Image src={png404} alt="404" />
         <p className="text-lg font-bold customSm:text-2xl">صفحه ی مورد نظر یافت نشد !!!</p>
      </div>
   );
}

export default Custom404;
