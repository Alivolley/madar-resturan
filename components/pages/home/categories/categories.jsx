import Link from 'next/link';
import Image from 'next/image';

// Icons
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// Assets
import categoryTitleIcon from '@/assets/icons/categoriesIcon.svg';
import dailyMenuPic from '@/assets/images/categories/Group 34827.png';
import noImage from '@/assets/images/noImage.png';

function Categories({ haveTitle, categoryList, activeCategory, shouldNotScroll }) {
   return (
      <section>
         {haveTitle && (
            <div className="mb-6 items-center justify-between space-y-1 text-center customMd:flex">
               <p
                  className="relative mx-auto w-fit font-elMessiri text-2xl font-bold customMd:mx-0
             customMd:border-b-[3px] customMd:border-solid customMd:border-customOrange"
               >
                  دسته بندی ها
                  <Image src={categoryTitleIcon} alt="category title" className="absolute -right-2 top-[-1px]" />
               </p>
               <Link
                  href="/category/همه غذاها/1"
                  className="hidden items-center gap-2 text-sm text-textGray hover:text-[#E27005] customMd:flex"
               >
                  مشاهده همه
                  <KeyboardArrowLeftIcon fontSize="small" />
               </Link>
               <p className="text-sm text-textGray customMd:hidden">دسته بندی غذاها در رستوران مادر</p>
            </div>
         )}
         <div className="flex flex-wrap items-center justify-center gap-1.5 customSm:gap-2 customMd:gap-4">
            <Link
               href="/category/منوی روز/1"
               className={`mt-[-8px] flex flex-col items-center space-y-2 transition-all duration-200
                customMd:mt-0 customMd:flex-1 customMd:space-y-5 customMd:rounded-10 customMd:py-2 ${
                   activeCategory === 'منوی روز'
                      ? 'customMd:bg-crimson customMd:text-white'
                      : 'customMd:bg-white customMd:hover:bg-crimson customMd:hover:text-white'
                }`}
               {...(shouldNotScroll && {
                  scroll: false,
               })}
            >
               <div
                  className="flex size-[65px] items-center justify-center rounded-10 bg-crimson
                customXs:size-[70px] customMd:bg-transparent"
               >
                  <Image src={dailyMenuPic} alt="category" className="size-12 customMd:size-16" />
               </div>
               <p className="text-center text-xs customLg:text-base">منوی روز</p>
            </Link>
            {categoryList?.map(item => (
               <Link
                  key={item?.id}
                  href={`/category/${item?.title}/1`}
                  className={`flex flex-col items-center space-y-2 transition-all duration-200 customMd:flex-1 customMd:space-y-5 customMd:rounded-10 customMd:py-2 ${
                     activeCategory === item?.title
                        ? 'customMd:bg-crimson customMd:text-white'
                        : 'customMd:bg-white customMd:hover:bg-crimson customMd:hover:text-white'
                  }`}
                  {...(shouldNotScroll && {
                     scroll: false,
                  })}
               >
                  <div
                     className="relative flex size-[65px] items-center justify-center rounded-10 bg-crimson
                customXs:size-[70px] customMd:bg-transparent"
                  >
                     <Image src={item?.cover || noImage} alt="category" className="size-12 customMd:size-16" fill />
                  </div>
                  <p className="h-[25px] overflow-hidden text-center text-xs [-webkit-box-orient:vertical] [-webkit-line-clamp:1] [display:-webkit-box] customLg:text-base">
                     {item?.title}
                  </p>
               </Link>
            ))}
         </div>
      </section>
   );
}

export default Categories;
