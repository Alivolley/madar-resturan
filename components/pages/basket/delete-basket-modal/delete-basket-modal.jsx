import Image from 'next/image';

// MUI
import { LoadingButton } from '@mui/lab';
import { Button, Dialog } from '@mui/material';

// Assets
import deleteBasketPic from '../../../../assets/images/deleteBasket.png';

// Apis
import useDeleteBasket from '@/apis/basket/useDeleteBasket';

function DeleteBasketModal({ show, onClose }) {
   const { trigger: deleteBasketTrigger, isMutating: deleteBasketIsMutating } = useDeleteBasket();

   const deleteBasketHandler = () => {
      deleteBasketTrigger(null, {
         onSuccess: () => {
            onClose();
         },
      });
   };

   return (
      <Dialog open={show} onClose={onClose}>
         <div className="flex flex-col gap-3 bg-white px-10 py-5">
            <p className="text-center font-rokhRegular text-base font-bold">آیا از حذف این سبد خرید مطمئن هستید ؟</p>
            <div>
               <Image src={deleteBasketPic} alt="delete basket" className="size-full" />
            </div>

            <div className="flex items-center gap-3">
               <Button variant="contained" color="buttonBgGray" fullWidth onClick={onClose}>
                  خیر
               </Button>
               <LoadingButton
                  variant="contained"
                  color="customOrange"
                  fullWidth
                  onClick={deleteBasketHandler}
                  loading={deleteBasketIsMutating}
               >
                  بله
               </LoadingButton>
            </div>
         </div>
      </Dialog>
   );
}

export default DeleteBasketModal;
