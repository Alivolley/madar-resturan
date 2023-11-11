/* eslint-disable no-self-compare */
/* eslint-disable no-constant-condition */
import { useState } from 'react';

// MUI
import { IconButton } from '@mui/material';

// Icons
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';

// Components
import BasketAddressModal from '../basket-address-modal/basket-address-modal';
import BasketDeleteAddressModal from '../basket-delete-address-modal/basket-delete-address-modal';

function BasketAddressCard() {
   const [showBasketAddressModal, setShowBasketAddressModal] = useState(false);
   const [showDeleteAddressModal, setShowDeleteAddressModal] = useState(false);

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
            <IconButton onClick={() => setShowBasketAddressModal(true)}>
               <BorderColorIcon className="text-sm" />
            </IconButton>
            <IconButton onClick={() => setShowDeleteAddressModal(true)}>
               <DeleteForeverOutlinedIcon className="text-base" />
            </IconButton>
         </div>

         <BasketAddressModal show={showBasketAddressModal} onClose={() => setShowBasketAddressModal(false)} isEdit />
         <BasketDeleteAddressModal show={showDeleteAddressModal} onClose={() => setShowDeleteAddressModal(false)} />
      </div>
   );
}

export default BasketAddressCard;
