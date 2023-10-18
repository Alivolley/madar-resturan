import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button, Fab, Grid } from '@mui/material';

// Icons
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

// Assets
import searchIconOrange from '../../../assets/icons/search-normal-orange.svg';
import basketIconOrange from '../../../assets/icons/basketIconOrange.svg';
import headerLogo from '../../../assets/images/momLogo.png';

// Styles
import HeaderStyle from './header.style';

function Header() {
   return (
      <header className="h-32 px-6 shadow-searchBoxShadow customMd:px-[60px]">
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
                        <Image src={basketIconOrange} alt="search Icon" />
                     </Fab>

                     <Link href="/" className="text-textOrange">
                        <Button variant="contained" color="buttonPink" className="h-full font-bold">
                           ورود / ثبت نام
                        </Button>
                     </Link>
                  </div>
               </Grid>
            </Grid>
         </HeaderStyle>
      </header>
   );
}

export default Header;
