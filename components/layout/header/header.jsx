import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// MUI
import { Button, Dialog, Fab, FormControl, Grid, IconButton, InputAdornment, TextField } from '@mui/material';

// Icons
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CloseIcon from '@mui/icons-material/Close';

// Assets
import { useForm } from 'react-hook-form';
import searchIconOrange from '../../../assets/icons/search-normal-orange.svg';
import searchIcon from '../../../assets/icons/search-normal.svg';
import basketIconOrange from '../../../assets/icons/basketIconOrange.svg';
import headerLogo from '../../../assets/images/momLogo.png';

// Styles
import HeaderStyle from './header.style';
import RtlProvider from '../rtlProvider/rtlProvider';

function Header() {
   const [showSearch, setShowSearch] = useState(false);
   const router = useRouter();

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
      console.log(data);
      router.push(`/search?food_name=${data.searchInput}`);
      closeModalHandler();
   };

   return (
      <header className="sticky top-0 z-[2] h-32 bg-white px-6 shadow-searchBoxShadow customMd:px-[60px]">
         <HeaderStyle className="flex h-full w-full">
            <Grid container alignItems="center">
               <Grid item sm={4.5} md={4.75}>
                  <div className="flex items-center gap-3 font-bold text-textOrange customLg:gap-9">
                     <div className="" id="dropdownWrapper">
                        <div className="flex cursor-pointer items-center gap-1">
                           <p>منو</p>
                           <KeyboardArrowDownOutlinedIcon />
                        </div>
                        <div id="dropdownBox" className="h-52 w-52 border border-solid border-customOrange bg-white">
                           some
                        </div>
                     </div>

                     <Link href="/" className="hidden md:block">
                        سفارش آنلاین
                     </Link>
                     <Link href="/" className="hidden customMd:block">
                        تماس با ما
                     </Link>
                     <div className="" id="dropdownWrapper">
                        <div className="flex cursor-pointer items-center gap-1">
                           <p>رستوران مادر</p>
                           <KeyboardArrowDownOutlinedIcon />
                        </div>
                        <div id="dropdownBox" className="h-52 w-52 border border-solid border-customOrange bg-white">
                           some
                        </div>
                     </div>
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
                     <Fab
                        color="buttonPink"
                        sx={{
                           width: '47px',
                           height: '47px',
                           borderRadius: '10px',
                        }}
                     >
                        <Image src={basketIconOrange} alt="basket Icon" />
                     </Fab>

                     <Link href="/login" className="text-textOrange">
                        <Button variant="contained" color="buttonPink" className="h-full font-bold">
                           ورود / ثبت نام
                        </Button>
                     </Link>
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
      </header>
   );
}

export default Header;
