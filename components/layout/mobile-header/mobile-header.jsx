import Image from 'next/image';

// MUI
import { Badge, IconButton } from '@mui/material';

// Icons
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

// Assets
import documentIcon from '../../../assets/icons/document-text.svg';
import searchIcon from '../../../assets/icons/search-normal.svg';

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
   return (
      <header className="bg-customOrange px-5 py-11">
         <div className="relative">
            <div className="flex items-center justify-between">
               <div className="space-y-2 text-white">
                  <p className="font-elMessiri">سلام علی ازقندی خوشتیپ</p>
                  <button
                     type="button"
                     className="flex items-center gap-1 border-none bg-transparent p-0 font-rokhRegular text-[11px] text-inherit"
                  >
                     <FmdGoodOutlinedIcon fontSize="inherit" />
                     <p className="max-w-[190px] truncate pt-1 customXs:max-w-[240px]">
                        مشهد - خیابان فرامرز -فرامرز عمت - کوچخه12 -پلاک12
                     </p>
                     <KeyboardArrowDownOutlinedIcon fontSize="inherit" />
                  </button>
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
            <div
               className="absolute inset-x-0 top-[135%] flex h-12 items-center justify-center
             overflow-hidden rounded-2xl bg-white shadow-searchBoxShadow"
            >
               <IconButton sx={{ width: '40', height: '100%', borderRadius: 0 }}>
                  <Image src={searchIcon} alt="search Icon" />
               </IconButton>
               <input
                  type="text"
                  placeholder="جست و جو در رستوران مادر"
                  className="h-full grow border-none p-4 font-rokhRegular outline-none placeholder:text-sm placeholder:text-[#7E8AAB]"
               />
            </div>
         </div>
      </header>
   );
}

export default MobileHeader;