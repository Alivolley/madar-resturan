import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// MUI
import {
   Badge,
   Button,
   Dialog,
   Fab,
   FormControl,
   Grid,
   Grow,
   IconButton,
   InputAdornment,
   Paper,
   Popper,
   TextField,
} from '@mui/material';

// Icons
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

// Redux
import { useSelector } from 'react-redux';

// Assets
import { useForm } from 'react-hook-form';
import searchIconOrange from '../../../assets/icons/search-normal-orange.svg';
import searchIcon from '../../../assets/icons/search-normal.svg';
import basketIconOrange from '../../../assets/icons/basketIconOrange.svg';
import headerLogo from '../../../assets/images/momLogo.png';

// Styles
import HeaderStyle from './header.style';
import RtlProvider from '../rtlProvider/rtlProvider';

// Components
import LogoutModal from '@/components/templates/logout-modal/logout-modal';

// Apis
import useGetUserInfo from '@/apis/userInfo/useGetUserInfo';
import useGetBasket from '@/apis/basket/useGetBasket';
import useCategories from '@/apis/categories/useCategories';

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

function Header({ isLogin }) {
   const [showSearch, setShowSearch] = useState(false);
   const [profileDropDown, setProfileDropDown] = useState(false);
   const [showLogoutModal, setShowLogoutModal] = useState(false);
   const [isUserLogin, setIsUserLogin] = useState();
   const router = useRouter();
   const profileRef = useRef();
   const userInfo = useSelector(state => state?.userInfoReducer);
   // eslint-disable-next-line no-unused-vars
   const getUserInfo = useGetUserInfo(isLogin);
   const { data: basketData } = useGetBasket(isLogin);
   const { data: categoryList } = useCategories();

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm({
      defaultValues: {
         searchInput: '',
      },
   });

   const closeModalHandler = () => {
      setShowSearch(false);
      reset();
   };

   const formSubmit = data => {
      router.push(`/search?food_name=${data.searchInput}&page=1`);
      closeModalHandler();
   };

   useEffect(() => {
      setIsUserLogin(isLogin);
   }, [isLogin]);

   return (
      <header className="sticky top-0 z-[2] h-32 bg-white px-6 shadow-searchBoxShadow customMd:px-[60px]">
         <HeaderStyle className="flex h-full w-full">
            <Grid container alignItems="center">
               <Grid item sm={4.5} md={4.75}>
                  <div className="flex items-center gap-7 font-bold text-textOrange customLg:gap-9">
                     <Link href="/" className="hidden md:block">
                        خانه
                     </Link>

                     <Link href="/" className="hidden customMd:block">
                        تماس با ما
                     </Link>

                     <div id="dropdownWrapper">
                        <div className="flex cursor-pointer items-center gap-1">
                           <p>منو</p>
                           <KeyboardArrowDownOutlinedIcon />
                        </div>
                        <div id="dropdownBox" className="w-52">
                           <div className="flex flex-col rounded-sm bg-buttonPink">
                              <Link
                                 href="/category/منوی روز/1"
                                 className="px-4 py-3 text-sm text-textOrange transition-all duration-150 hover:bg-buttonPink2"
                              >
                                 منوی روز
                              </Link>
                              {categoryList?.map(item => (
                                 <Link
                                    key={item?.id}
                                    href={`/category/${item?.title}/1`}
                                    className="border-t border-solid border-[#E4EAF0] px-4 py-3 text-sm text-textOrange transition-all duration-150 hover:bg-buttonPink2"
                                 >
                                    {item?.title}
                                 </Link>
                              ))}
                           </div>
                        </div>
                     </div>

                     {/* <div className="" id="dropdownWrapper">
                        <div className="flex cursor-pointer items-center gap-1">
                           <p>رستوران مادر</p>
                           <KeyboardArrowDownOutlinedIcon />
                        </div>
                        <div id="dropdownBox" className="h-52 w-52 border border-solid border-customOrange bg-white">
                           some
                        </div>
                     </div> */}
                  </div>
               </Grid>
               <Grid item sm={3} md={2.5}>
                  <Link href="/" className="flex justify-center">
                     <Image src={headerLogo} alt="header logo" />
                  </Link>
               </Grid>
               <Grid item sm={4.5} md={4.75}>
                  <div className="flex items-stretch justify-end gap-3">
                     <Fab
                        color="buttonPink"
                        sx={{
                           width: '47px',
                           height: '47px',
                           borderRadius: '10px',
                        }}
                        onClick={() => setShowSearch(true)}
                     >
                        <Image src={searchIconOrange} alt="search Icon" />
                     </Fab>

                     {!isUserLogin && (
                        <Link href="/login" className="text-textOrange">
                           <Button variant="contained" color="buttonPink" className="h-full font-bold">
                              ورود / ثبت نام
                           </Button>
                        </Link>
                     )}

                     {isUserLogin && (
                        <div className="flex items-stretch gap-3">
                           <Link href="/basket">
                              <Fab
                                 color="buttonPink"
                                 sx={{
                                    width: '47px',
                                    height: '47px',
                                    borderRadius: '10px',
                                 }}
                              >
                                 {basketData?.orders?.length ? (
                                    <Badge
                                       badgeContent={basketData?.count}
                                       color="error"
                                       anchorOrigin={{
                                          vertical: 'bottom',
                                          horizontal: 'right',
                                       }}
                                       sx={badgeStyles}
                                    >
                                       <Image src={basketIconOrange} alt="basket Icon" />
                                    </Badge>
                                 ) : (
                                    <Image src={basketIconOrange} alt="basket Icon" />
                                 )}
                              </Fab>
                           </Link>

                           <Button
                              variant="contained"
                              color="buttonPink"
                              className="h-full font-rokhFaNum font-bold text-textOrange"
                              ref={profileRef}
                              onMouseEnter={() => setProfileDropDown(true)}
                              onMouseLeave={() => setProfileDropDown(false)}
                           >
                              <p className="flex gap-1">
                                 <PersonOutlinedIcon fontSize="small" />
                                 {userInfo?.name || userInfo?.phone_number}
                                 <KeyboardArrowDownIcon
                                    className={`transition-all duration-200 ${profileDropDown ? 'rotate-180' : ''}`}
                                 />
                              </p>
                           </Button>

                           <Popper
                              open={profileDropDown}
                              anchorEl={profileRef.current}
                              transition
                              disablePortal
                              onMouseEnter={() => setProfileDropDown(true)}
                              onMouseLeave={() => setProfileDropDown(false)}
                           >
                              {({ TransitionProps, placement }) => (
                                 <Grow
                                    {...TransitionProps}
                                    style={{
                                       transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                    }}
                                 >
                                    <Paper>
                                       <div className="flex flex-col bg-buttonPink">
                                          <Link
                                             href="/profile/information"
                                             className="flex gap-1 px-4 py-3 text-sm text-textOrange transition-all duration-150 hover:bg-buttonPink2"
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
                                             className="flex gap-1 border-t border-solid border-[#E4EAF0] px-4 py-3 text-sm text-textOrange transition-all duration-150 hover:bg-buttonPink2"
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
                                    </Paper>
                                 </Grow>
                              )}
                           </Popper>
                        </div>
                     )}
                  </div>
               </Grid>
            </Grid>
         </HeaderStyle>
         <Dialog open={showSearch} onClose={closeModalHandler} fullWidth>
            <div className="">
               <div className="flex items-center justify-between bg-[#EDEDED] p-2">
                  <div />
                  <p className="font-elMessiri font-bold">جستجو</p>
                  <IconButton onClick={closeModalHandler}>
                     <CloseIcon />
                  </IconButton>
               </div>
               <div className="mt-8 px-10 pb-8 font-rokhRegular">
                  <p className="text-center">نام غذای مورد نظر خود را بنویسید</p>
                  <form className="mt-5 flex items-center" onSubmit={handleSubmit(formSubmit)}>
                     <div className="flex w-full justify-center">
                        <RtlProvider>
                           <FormControl variant="outlined">
                              <TextField
                                 autoFocus
                                 autoComplete="off"
                                 type="text"
                                 size="small"
                                 className="!min-w-[430px]"
                                 color="customOrange"
                                 placeholder="جست و جو در غذای خانگی مادر"
                                 {...register('searchInput', {
                                    required: {
                                       value: true,
                                       message: 'لطفا نام غذا را وارد کنید',
                                    },
                                 })}
                                 error={!!errors?.searchInput}
                                 helperText={errors?.searchInput?.message}
                                 InputProps={{
                                    startAdornment: (
                                       <InputAdornment position="start">
                                          <IconButton type="submit" edge="start">
                                             <Image src={searchIcon} alt="search Icon" />
                                          </IconButton>
                                       </InputAdornment>
                                    ),
                                 }}
                              />
                           </FormControl>
                        </RtlProvider>
                     </div>
                  </form>
               </div>
            </div>
         </Dialog>

         <LogoutModal show={showLogoutModal} onClose={() => setShowLogoutModal(false)} />
      </header>
   );
}

export default Header;
