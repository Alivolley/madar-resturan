import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Badge, IconButton, Collapse, Button, Drawer, CircularProgress } from '@mui/material';

// Icons
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import HistoryIcon from '@mui/icons-material/History';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import Add from '@mui/icons-material/Add';

// Redux
import { useSelector } from 'react-redux';

// Assets
import searchIcon from '@/assets/icons/search-normal.svg';
import headerLogo from '@/assets/images/momLogo2.png';
import starIcon from '@/assets/icons/star.svg';

// Components
import LogoutModal from '@/components/templates/logout-modal/logout-modal';
import BasketAddressModal from '@/components/pages/basket/basket-address-modal/basket-address-modal';
import RtlProvider from '../rtlProvider/rtlProvider';

// Apis
import useGetUserInfo from '@/apis/userInfo/useGetUserInfo';
import useGetBasket from '@/apis/basket/useGetBasket';
import useSearchHistory from '@/apis/userInfo/useSearchHistory';
import useClearHistory from '@/apis/useClearHistory';
import useGetAddress from '@/apis/profile/useGetAddress';
import BasketAddressCard from '@/components/pages/basket/basket-address-card/basket-address-card';

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

function MobileHeader({ isLogin }) {
   const [showSearchCollapse, setShowSearchCollapse] = useState(false);
   const [showLogoutModal, setShowLogoutModal] = useState(false);
   const [profileDropDown, setProfileDropDown] = useState(false);
   const [showBasketAddressModal, setShowBasketAddressModal] = useState(false);

   const profileRef = useRef();
   const router = useRouter();
   const foodName = router.query.food_name;
   const userInfo = useSelector(state => state?.userInfoReducer);
   // eslint-disable-next-line no-unused-vars
   const getUserInfo = useGetUserInfo(isLogin);
   const { data: addressData, isLoading: addressIsLoading } = useGetAddress(profileDropDown);
   const { data: basketData } = useGetBasket(isLogin);
   const { data: searchHistoryData } = useSearchHistory();
   const { trigger: clearHistoryTrigger, isMutating: clearHistoryIsMutating } = useClearHistory();

   const { register, handleSubmit, setValue } = useForm({
      defaultValues: {
         searchInput: foodName,
      },
   });

   const formSubmit = data => {
      router.push(`/search?food_name=${data.searchInput}&page=1`);
      setShowSearchCollapse(false);
   };

   useEffect(() => {
      setValue('searchInput', foodName);
   }, [foodName]);

   const clearHistoryHandler = () => {
      clearHistoryTrigger();
   };

   return (
      <header className="sticky top-0 z-[2] bg-customOrange px-5 pb-11 pt-6">
         <div className="relative">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                  <Link href="/" className="h-10 w-11">
                     <Image src={headerLogo} alt="header logo" className="size-full" />
                  </Link>
                  {isLogin && (
                     <div className="space-y-1 text-white">
                        <p className="font-rokhFaNum text-[13px]">سلام {userInfo?.name || userInfo?.phone_number}</p>
                        <button
                           type="button"
                           className="flex items-center gap-1 border-none bg-transparent p-0 font-rokhRegular text-[8px] text-inherit [word-spacing:1px]"
                           ref={profileRef}
                           onClick={() => setProfileDropDown(true)}
                        >
                           <FmdGoodOutlinedIcon fontSize="inherit" />
                           <p className="max-w-[120px] truncate customXs:max-w-[160px] ">
                              {userInfo?.default_address || 'آدرس های من'}
                           </p>
                           <KeyboardArrowDownOutlinedIcon
                              fontSize="small"
                              className={`transition-all duration-200 ${profileDropDown ? 'rotate-180' : ''}`}
                           />
                        </button>

                        <RtlProvider>
                           <Drawer anchor="bottom" open={profileDropDown} onClose={() => setProfileDropDown(false)}>
                              <div className="h-[350px] bg-white p-5 font-rokhRegular">
                                 <div className="flex items-center justify-between">
                                    <p>انتخاب آدرس</p>
                                    <Button
                                       size="small"
                                       startIcon={<Add />}
                                       color="black"
                                       onClick={() => setShowBasketAddressModal(true)}
                                    >
                                       آدرس جدید
                                    </Button>
                                 </div>

                                 <div className="mt-2 border-t border-solid border-[#B1B5C4]">
                                    {addressIsLoading ? (
                                       <div className="mt-4 flex items-center justify-center">
                                          <CircularProgress color="customOrange2" />
                                       </div>
                                    ) : (
                                       <div className="flex flex-col">
                                          {addressData?.length ? (
                                             addressData?.map(item => (
                                                <BasketAddressCard key={item?.id} detail={item} />
                                             ))
                                          ) : (
                                             <div className="my-10 space-y-3 text-center">
                                                <p className="text-base font-bold">
                                                   شما در حال حاضر آدرسی ثبت نکرده اید{' '}
                                                </p>
                                                <p className="text-xs">
                                                   آدرس خود را به لیست آدرس ها اضافه کنید تا در زمان سفارش به راحتی،
                                                   همیشه از آن استفاده کنید
                                                </p>
                                             </div>
                                          )}
                                       </div>
                                    )}
                                 </div>
                              </div>
                           </Drawer>
                        </RtlProvider>
                     </div>
                  )}
               </div>
               {isLogin ? (
                  <Link href="/basket">
                     <IconButton sx={{ border: '1px solid white', width: 32, height: 32 }}>
                        <Badge
                           badgeContent={basketData?.all_orders_count}
                           color="error"
                           anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'right',
                           }}
                           sx={badgeStyles}
                        >
                           <ShoppingBasketOutlinedIcon color="white" fontSize="small" />
                        </Badge>
                     </IconButton>
                  </Link>
               ) : (
                  <Link href="/login">
                     <Button variant="outlined" size="small" color="white">
                        ورود / ثبت نام
                     </Button>
                  </Link>
               )}
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
                     {searchHistoryData?.user_searches?.length ? (
                        <div className="border-b border-solid border-[#E4EAF0] pb-4">
                           <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                 <div className="text-[#C66204]">
                                    <HistoryIcon fontSize="small" color="inherit" />
                                 </div>
                                 <p className="text-sm">تاریخچه جستجو</p>
                              </div>
                              <IconButton onClick={clearHistoryHandler} disabled={clearHistoryIsMutating}>
                                 <DeleteOutlineIcon />
                              </IconButton>
                           </div>

                           <div className="mt-4 flex flex-wrap items-center gap-2">
                              {searchHistoryData?.user_searches?.map(item => (
                                 <Link
                                    key={item?.word}
                                    href={`/search?food_name=${item?.word}&page=1`}
                                    className="flex items-center rounded-lg border border-solid border-[#E0D9C7] bg-bgColor px-3 py-1 text-xs text-[#626E94]"
                                 >
                                    <p>{item?.word}</p>
                                    <ArrowBackIosIcon fontSize="inherit" />
                                 </Link>
                              ))}
                           </div>
                        </div>
                     ) : null}

                     {searchHistoryData?.popular_searches?.length ? (
                        <div className="mt-6">
                           <div className="flex items-center gap-1">
                              <div className="text-[#C66204]">
                                 <Image src={starIcon} alt="favorite" />
                              </div>
                              <p className="text-sm">جستجو های پر طرفدار</p>
                           </div>

                           <div className="mt-4 flex flex-wrap items-center gap-2">
                              {searchHistoryData?.popular_searches?.map(item => (
                                 <Link
                                    key={item?.word}
                                    href={`/search?food_name=${item?.word}&page=1`}
                                    className="flex items-center rounded-lg border border-solid border-[#E0D9C7] bg-bgColor px-3 py-1 text-xs text-[#626E94]"
                                 >
                                    <p>{item?.word}</p>
                                    <ArrowBackIosIcon fontSize="inherit" />
                                 </Link>
                              ))}
                           </div>
                        </div>
                     ) : null}
                  </div>
               </Collapse>
            </div>
         </div>
         <LogoutModal show={showLogoutModal} onClose={() => setShowLogoutModal(false)} />
         <BasketAddressModal show={showBasketAddressModal} onClose={() => setShowBasketAddressModal(false)} />
      </header>
   );
}

export default MobileHeader;
