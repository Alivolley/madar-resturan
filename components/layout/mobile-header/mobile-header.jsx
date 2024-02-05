import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Badge, IconButton, Collapse, Button, Popper, Grow, Paper, ClickAwayListener } from '@mui/material';

// Icons
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import HistoryIcon from '@mui/icons-material/History';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import IsoIcon from '@mui/icons-material/Iso';

// Redux
import { useSelector } from 'react-redux';

// Assets
import searchIcon from '../../../assets/icons/search-normal.svg';
import headerLogo from '../../../assets/images/momLogo.png';
import starIcon from '../../../assets/icons/star.svg';

// Components
import LogoutModal from '@/components/templates/logout-modal/logout-modal';

// Apis
import useGetUserInfo from '@/apis/userInfo/useGetUserInfo';
import useGetBasket from '@/apis/basket/useGetBasket';
import useSearchHistory from '@/apis/userInfo/useSearchHistory';
import useClearHistory from '@/apis/useClearHistory';

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
   const profileRef = useRef();
   const router = useRouter();
   const foodName = router.query.food_name;
   const userInfo = useSelector(state => state?.userInfoReducer);
   // eslint-disable-next-line no-unused-vars
   const getUserInfo = useGetUserInfo(isLogin);
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
               <div className="flex items-center gap-1">
                  <Link href="/" className="size-11">
                     <Image src={headerLogo} alt="header logo" className="size-full" />
                  </Link>
                  {isLogin && (
                     <div className="space-y-2 text-white">
                        <p className="font-rokhFaNum text-[13px] font-bold customXs:text-base">
                           سلام {userInfo?.name || userInfo?.phone_number}
                        </p>
                        <button
                           type="button"
                           className="flex items-center gap-1 border-none bg-transparent p-0 font-rokhRegular text-[8px] text-inherit [word-spacing:1px]"
                           ref={profileRef}
                           onClick={() => setProfileDropDown(true)}
                        >
                           <FmdGoodOutlinedIcon fontSize="inherit" />
                           <p className="max-w-[120px] truncate pt-1 customXs:max-w-[160px] ">
                              {userInfo?.default_address || 'آدرس های من'}
                           </p>
                           <KeyboardArrowDownOutlinedIcon
                              fontSize="small"
                              className={`transition-all duration-200 ${profileDropDown ? 'rotate-180' : ''}`}
                           />
                        </button>

                        <Popper
                           open={profileDropDown}
                           anchorEl={profileRef.current}
                           transition
                           disablePortal
                           sx={{
                              zIndex: 1,
                           }}
                        >
                           {({ TransitionProps, placement }) => (
                              <Grow
                                 {...TransitionProps}
                                 style={{
                                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                 }}
                              >
                                 <Paper>
                                    <ClickAwayListener onClickAway={() => setProfileDropDown(false)}>
                                       <div className="flex flex-col rounded-md bg-buttonPink">
                                          <Link
                                             href="/adminPanel/products"
                                             className="flex gap-1 px-4 py-3 text-sm text-textOrange transition-all duration-150 hover:bg-buttonPink2"
                                             onClick={() => setProfileDropDown(false)}
                                          >
                                             <IsoIcon fontSize="small" color="customOrange" />
                                             پنل ادمین
                                          </Link>
                                          <Link
                                             href="/profile/information"
                                             className="flex gap-1 border-t border-solid border-[#E4EAF0] px-4 py-3 text-sm text-textOrange transition-all duration-150 hover:bg-buttonPink2"
                                             onClick={() => setProfileDropDown(false)}
                                          >
                                             <PersonOutlinedIcon fontSize="small" color="customOrange" />
                                             اطلاعات حساب
                                          </Link>
                                          <Link
                                             href="/profile/address"
                                             className="flex gap-1 border-t border-solid border-[#E4EAF0] px-4 py-3 text-sm text-textOrange transition-all duration-150 hover:bg-buttonPink2"
                                             onClick={() => setProfileDropDown(false)}
                                          >
                                             <LocationOnOutlinedIcon fontSize="small" color="customOrange" />
                                             آدرس های من
                                          </Link>
                                          <Link
                                             href="/profile/orders"
                                             className="flex gap-1 border-t border-solid border-[#E4EAF0] px-4 py-3 text-sm text-textOrange transition-all duration-150 hover:bg-buttonPink2"
                                             onClick={() => setProfileDropDown(false)}
                                          >
                                             <AccountBalanceWalletOutlinedIcon fontSize="small" color="customOrange" />
                                             پیگیری سفارش ها
                                          </Link>
                                          <Button
                                             className="!flex !gap-1 !border-t !border-solid !border-[#E4EAF0] !px-4 !py-3 !text-sm 
                                             !text-textOrange !transition-all !duration-150 hover:!bg-buttonPink2"
                                             onClick={() => setShowLogoutModal(true)}
                                          >
                                             <LogoutOutlinedIcon
                                                fontSize="small"
                                                color="customOrange"
                                                className="rotate-180"
                                             />
                                             خروج از حساب کاربری
                                          </Button>
                                       </div>
                                    </ClickAwayListener>
                                 </Paper>
                              </Grow>
                           )}
                        </Popper>
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
                                    className="flex items-center rounded-lg border border-solid border-[#E0D9C7] bg-bgColor px-3 pb-0.5 pt-1.5 text-xs text-[#626E94]"
                                 >
                                    <p>{item?.word}</p>
                                    <div>
                                       <ArrowBackIosIcon fontSize="inherit" />
                                    </div>
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
                                    className="flex items-center rounded-lg border border-solid border-[#E0D9C7] bg-bgColor px-3 pb-0.5 pt-1.5 text-xs text-[#626E94]"
                                 >
                                    <p>{item?.word}</p>
                                    <div>
                                       <ArrowBackIosIcon fontSize="inherit" />
                                    </div>
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
      </header>
   );
}

export default MobileHeader;
