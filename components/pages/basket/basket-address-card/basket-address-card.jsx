/* eslint-disable no-self-compare */
/* eslint-disable no-constant-condition */
// MUI
import { IconButton } from '@mui/material';

// Icons
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';

function BasketAddressCard() {
   return (
      <div className="flex items-center justify-between rounded bg-white py-4 customMd:px-8">
         <button type="button" className="cursor-pointer border-none bg-transparent font-rokhRegular outline-none">
            <div className="flex items-center gap-2 text-base font-bold customMd:text-lg">
               <div
                  className={`h-4 w-4 rounded-full border-[4px] border-solid ${
                     'inPerson' === 'inPerson' ? 'border-[#D14D72]' : 'border-[#BDCEDE]'
                  }`}
               />
               علی ازقندی
            </div>
            <p className="text-xs text-[#7E8AAB] customMd:text-sm">
               مشهد سر افرازان، بهارستان، بهارستان کنار بهارستان نرسیده به کافی شاپ صدف، پلاک ۴۵
            </p>
         </button>

         <div className="flex items-center">
            <IconButton>
               <BorderColorIcon className="text-sm" />
            </IconButton>
            <IconButton>
               <DeleteForeverOutlinedIcon className="text-base" />
            </IconButton>
         </div>
      </div>
   );
}

export default BasketAddressCard;
