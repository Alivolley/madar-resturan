import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Badge, IconButton, Collapse } from '@mui/material';

// Icons
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import HistoryIcon from '@mui/icons-material/History';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// Assets
import documentIcon from '../../../assets/icons/document-text.svg';
import searchIcon from '../../../assets/icons/search-normal.svg';
import headerLogo from '../../../assets/images/momLogo.png';
import starIcon from '../../../assets/icons/star.svg';

const badgeStyles = {
   '& .MuiBadge-badge': {
      fontSize: 10,
      width: 14,
      height: 14,
      minWidth: 14,
      top: 10,
      right: -2,
      fontFamily: 'rokhFaNum',
      paddingLeft: 1,
      paddingTop: 0.5,
   },
};

function MobileHeader() {
   const [showSearchCollapse, setShowSearchCollapse] = useState(false);
   const router = useRouter();
   const foodName = router.query.food_name;

   const { register, handleSubmit, setValue } = useForm({
      defaultValues: {
         searchInput: foodName,
      },
   });

   const formSubmit = data => {
      console.log(data);
      router.push(`/search?food_name=${data.searchInput}`);
      setShowSearchCollapse(false);
   };

   useEffect(() => {
      setValue('searchInput', foodName);
   }, [foodName]);

   return (
      <header className="sticky top-0 z-[2] bg-customOrange px-5 pb-11 pt-6">
         <div className="relative">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-1">
                  <Link href="/" className="h-11 w-11">
                     <Image src={headerLogo} alt="header logo" className="h-full w-full" />
                  </Link>
                  <div className="space-y-2 text-white">
                     <p className="font-elMessiri text-[13px] customXs:text-base">سلام علی ازقندی خوشتیپ</p>
                     <button
                        type="button"
                        className="flex items-center gap-1 border-none bg-transparent p-0 font-rokhRegular text-[8px] text-inherit [word-spacing:1px]"
                     >
                        <FmdGoodOutlinedIcon fontSize="inherit" />
                        <p className="max-w-[120px] truncate pt-1 customXs:max-w-[160px] ">
                           مشهد - خیابان فرامرز -فرامرز عمت - کوچخه12 -پلاک12
                        </p>
                        <KeyboardArrowDownOutlinedIcon fontSize="inherit" />
                     </button>
                  </div>
               </div>
               <IconButton sx={{ border: '1px solid white', width: 32, height: 32 }}>
                  <Badge
                     badgeContent={6}
                     color="error"
                     anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                     }}
                     sx={badgeStyles}
                  >
                     <Image src={documentIcon} alt="document Icon" />
                  </Badge>
               </IconButton>
            </div>

            <div className="absolute inset-x-0 top-[135%]">
               <form
                  className="flex h-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-searchBoxShadow"
                  onSubmit={handleSubmit(formSubmit)}
               >
                  <IconButton sx={{ width: '40', height: '100%', borderRadius: 0 }} type="submit">
                     <Image src={searchIcon} alt="search Icon" />
                  </IconButton>
                  <input
                     type="text"
                     placeholder="جست و جو در رستوران مادر"
                     className="h-full grow border-none p-4 font-rokhRegular outline-none placeholder:text-sm placeholder:text-[#7E8AAB]"
                     {...register('searchInput', {
                        required: {
                           value: true,
                        },
                     })}
                     onFocus={() => setShowSearchCollapse(true)}
                     onBlur={() => setShowSearchCollapse(false)}
                     autoComplete="off"
                  />
               </form>

               <Collapse in={showSearchCollapse}>
                  <div className="mt-1 rounded-2xl bg-white p-3">
                     <div className="border-b border-solid border-[#E4EAF0] pb-4">
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-1">
                              <div className="text-[#C66204]">
                                 <HistoryIcon fontSize="small" color="inherit" />
                              </div>
                              <p>تاریخچه جستجو</p>
                           </div>
                           <IconButton>
                              <DeleteOutlineIcon />
                           </IconButton>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-2">
                           <Link
                              href="/search?food_name=some"
                              className="flex items-center rounded-lg border border-solid border-[#E0D9C7] bg-bgColor px-3 pb-0.5 pt-1.5 text-xs text-[#626E94]"
                           >
                              <p>راتاتویی</p>
                              <div>
                                 <ArrowBackIosIcon fontSize="inherit" />
                              </div>
                           </Link>
                           <Link
                              href="/search?food_name=some"
                              className="flex items-center rounded-lg border border-solid border-[#E0D9C7] bg-bgColor px-3 pb-0.5 pt-1.5 text-xs text-[#626E94]"
                           >
                              <p>راتاتویی</p>
                              <div>
                                 <ArrowBackIosIcon fontSize="inherit" />
                              </div>
                           </Link>
                           <Link
                              href="/search?food_name=some"
                              className="flex items-center rounded-lg border border-solid border-[#E0D9C7] bg-bgColor px-3 pb-0.5 pt-1.5 text-xs text-[#626E94]"
                           >
                              <p>راتاتویی</p>
                              <div>
                                 <ArrowBackIosIcon fontSize="inherit" />
                              </div>
                           </Link>
                        </div>
                     </div>

                     <div className="mt-6">
                        <div className="flex items-center gap-1">
                           <div className="text-[#C66204]">
                              <Image src={starIcon} alt="favorite" />
                           </div>
                           <p>جستجو های پر طرفدار</p>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-2">
                           <Link
                              href="/search?food_name=some"
                              className="flex items-center rounded-lg border border-solid border-[#E0D9C7] bg-bgColor px-3 pb-0.5 pt-1.5 text-xs text-[#626E94]"
                           >
                              <p>راتاتویی</p>
                              <div>
                                 <ArrowBackIosIcon fontSize="inherit" />
                              </div>
                           </Link>
                           <Link
                              href="/search?food_name=some"
                              className="flex items-center rounded-lg border border-solid border-[#E0D9C7] bg-bgColor px-3 pb-0.5 pt-1.5 text-xs text-[#626E94]"
                           >
                              <p>راتاتویی</p>
                              <div>
                                 <ArrowBackIosIcon fontSize="inherit" />
                              </div>
                           </Link>
                           <Link
                              href="/search?food_name=some"
                              className="flex items-center rounded-lg border border-solid border-[#E0D9C7] bg-bgColor px-3 pb-0.5 pt-1.5 text-xs text-[#626E94]"
                           >
                              <p>راتاتویی</p>
                              <div>
                                 <ArrowBackIosIcon fontSize="inherit" />
                              </div>
                           </Link>
                        </div>
                     </div>
                  </div>
               </Collapse>
            </div>
         </div>
      </header>
   );
}

export default MobileHeader;
