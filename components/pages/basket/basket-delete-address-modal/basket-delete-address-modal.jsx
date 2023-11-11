import Image from 'next/image';

// MUI
import { LoadingButton } from '@mui/lab';
import { Button, Dialog } from '@mui/material';

// Assets
import deleteAddressPic from '../../../../assets/images/deleteAddressPic.png';

function BasketDeleteAddressModal({ show, onClose }) {
   return (
      <Dialog open={show} onClose={onClose}>
         <div className="flex flex-col gap-3 bg-white px-10 py-5">
            <p className="text-center font-rokhRegular text-base font-bold">آیا از حذف این آدرس مطمئن هستید ؟</p>
            <div>
               <Image src={deleteAddressPic} alt="delete basket" className="h-full w-full" />
            </div>

            <div className="flex items-center gap-3">
               <Button variant="contained" color="buttonBgGray" fullWidth onClick={onClose}>
                  خیر
               </Button>
               <LoadingButton variant="contained" color="customOrange" fullWidth>
                  بله
               </LoadingButton>
            </div>
         </div>
      </Dialog>
   );
}

export default BasketDeleteAddressModal;
