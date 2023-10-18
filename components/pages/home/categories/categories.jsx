import Image from 'next/image';

// Icons
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// Assets
import Link from 'next/link';
import pic1 from '../../../../assets/images/categories/Group 26826.png';
import pic2 from '../../../../assets/images/categories/Group 26827.png';
import pic3 from '../../../../assets/images/categories/Group 26829.png';
import pic4 from '../../../../assets/images/categories/Group 26830.png';
import pic5 from '../../../../assets/images/categories/Group 34817.png';
import pic6 from '../../../../assets/images/categories/Group 34818.png';
import pic7 from '../../../../assets/images/categories/Group 34823.png';
import pic8 from '../../../../assets/images/categories/Group 34827.png';
import categoryTitleIcon from '../../../../assets/icons/categoriesIcon.svg';

function Categories() {
   return (
      <section className="mb-80">
         <div className="mb-6 items-center justify-between space-y-1 text-center customMd:flex">
            <p
               className="relative mx-auto w-fit font-elMessiri text-2xl font-bold customMd:mx-0
             customMd:border-b-[3px] customMd:border-solid customMd:border-customOrange"
            >
               دسته بندی ها
               <Image src={categoryTitleIcon} alt="category title" className="absolute -right-2 top-[-1px]" />
            </p>
            <Link href="/" className="hidden items-center gap-2 text-sm text-textGray customMd:flex">
               مشاهده همه
               <KeyboardArrowLeftIcon fontSize="small" />
            </Link>
            <p className="text-sm text-textGray customMd:hidden">دسته بندی غذاها در رستوران مادر</p>
         </div>
         <div className="flex flex-wrap items-center justify-center gap-1.5 customSm:gap-2 customMd:gap-4">
            <Link
               href="/"
               className="flex flex-col items-center space-y-4 transition-all duration-200 
               customMd:flex-1 customMd:space-y-2 customMd:rounded-[10px] customMd:bg-white customMd:py-2 customMd:hover:bg-crimson customMd:hover:text-white"
            >
               <div
                  className="flex h-[65px] w-[65px] items-center justify-center rounded-[10px]
                bg-crimson customXs:h-[70px] customXs:w-[70px] customMd:bg-transparent"
               >
                  <Image src={pic8} alt="category" className="h-12 w-12 customMd:h-16 customMd:w-16" />
               </div>
               <p className="text-center text-xs customLg:text-base">منوی روز</p>
            </Link>
            <Link
               href="/"
               className="flex flex-col items-center space-y-4 transition-all duration-200 
               customMd:flex-1 customMd:space-y-2 customMd:rounded-[10px] customMd:bg-white customMd:py-2 customMd:hover:bg-crimson customMd:hover:text-white"
            >
               <div
                  className="flex h-[65px] w-[65px] items-center justify-center rounded-[10px]
                bg-crimson customXs:h-[70px] customXs:w-[70px] customMd:bg-transparent"
               >
                  <Image src={pic1} alt="category" className="h-12 w-12 customMd:h-16 customMd:w-16" />
               </div>
               <p className="text-center text-xs customLg:text-base">چلو ها</p>
            </Link>
            <Link
               href="/"
               className="flex flex-col items-center space-y-4 transition-all duration-200 
               customMd:flex-1 customMd:space-y-2 customMd:rounded-[10px] customMd:bg-white customMd:py-2 customMd:hover:bg-crimson customMd:hover:text-white"
            >
               <div
                  className="flex h-[65px] w-[65px] items-center justify-center rounded-[10px]
                bg-crimson customXs:h-[70px] customXs:w-[70px] customMd:bg-transparent"
               >
                  <Image src={pic2} alt="category" className="h-12 w-12 customMd:h-16 customMd:w-16" />
               </div>
               <p className="text-center text-xs customLg:text-base">خورشت ها</p>
            </Link>
            <Link
               href="/"
               className="flex flex-col items-center space-y-4 transition-all duration-200 
               customMd:flex-1 customMd:space-y-2 customMd:rounded-[10px] customMd:bg-white customMd:py-2 customMd:hover:bg-crimson customMd:hover:text-white"
            >
               <div
                  className="flex h-[65px] w-[65px] items-center justify-center rounded-[10px]
                bg-crimson customXs:h-[70px] customXs:w-[70px] customMd:bg-transparent"
               >
                  <Image src={pic3} alt="category" className="h-12 w-12 customMd:h-16 customMd:w-16" />
               </div>
               <p className="text-center text-xs customLg:text-base">آش و سوپ</p>
            </Link>
            <Link
               href="/"
               className="flex flex-col items-center space-y-4 transition-all duration-200 
               customMd:flex-1 customMd:space-y-2 customMd:rounded-[10px] customMd:bg-white customMd:py-2 customMd:hover:bg-crimson customMd:hover:text-white"
            >
               <div
                  className="flex h-[65px] w-[65px] items-center justify-center rounded-[10px]
                bg-crimson customXs:h-[70px] customXs:w-[70px] customMd:bg-transparent"
               >
                  <Image src={pic5} alt="category" className="h-12 w-12 customMd:h-16 customMd:w-16" />
               </div>
               <p className="text-center text-xs customLg:text-base">غذای ایرانی</p>
            </Link>
            <Link
               href="/"
               className="flex flex-col items-center space-y-4 transition-all duration-200 
               customMd:flex-1 customMd:space-y-2 customMd:rounded-[10px] customMd:bg-white customMd:py-2 customMd:hover:bg-crimson customMd:hover:text-white"
            >
               <div
                  className="flex h-[65px] w-[65px] items-center justify-center rounded-[10px]
                bg-crimson customXs:h-[70px] customXs:w-[70px] customMd:bg-transparent"
               >
                  <Image src={pic6} alt="category" className="h-12 w-12 customMd:h-16 customMd:w-16" />
               </div>
               <p className="text-center text-xs customLg:text-base">غذای فرنگی</p>
            </Link>
            <Link
               href="/"
               className="flex flex-col items-center space-y-4 transition-all duration-200 
               customMd:flex-1 customMd:space-y-2 customMd:rounded-[10px] customMd:bg-white customMd:py-2 customMd:hover:bg-crimson customMd:hover:text-white"
            >
               <div
                  className="flex h-[65px] w-[65px] items-center justify-center rounded-[10px]
                bg-crimson customXs:h-[70px] customXs:w-[70px] customMd:bg-transparent"
               >
                  <Image src={pic4} alt="category" className="h-12 w-12 customMd:h-16 customMd:w-16" />
               </div>
               <p className="text-center text-xs customLg:text-base">سالاد و پیش غذا</p>
            </Link>
            <Link
               href="/"
               className="flex flex-col items-center space-y-4 transition-all duration-200 
               customMd:flex-1 customMd:space-y-2 customMd:rounded-[10px] customMd:bg-white customMd:py-2 customMd:hover:bg-crimson customMd:hover:text-white"
            >
               <div
                  className="flex h-[65px] w-[65px] items-center justify-center rounded-[10px]
                bg-crimson customXs:h-[70px] customXs:w-[70px] customMd:bg-transparent"
               >
                  <Image src={pic7} alt="category" className="h-12 w-12 customMd:h-16 customMd:w-16" />
               </div>
               <p className="text-center text-xs customLg:text-base">نوشیدنی</p>
            </Link>
         </div>
      </section>
   );
}

export default Categories;
