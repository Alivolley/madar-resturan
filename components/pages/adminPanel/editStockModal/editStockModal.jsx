import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

// MUI
import { Dialog, IconButton, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import useEditStockMenu from '@/apis/pAdmin/dailyMenu/useEditStockMenu';

// Apis

function EditStockModal({ show, onClose, detail, dailyMenuMutate }) {
   const { trigger: editStockTrigger, isMutating: editStockIsMutating } = useEditStockMenu(detail?.title);

   const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
      reset,
   } = useForm({
      defaultValues: {
         stock: '',
      },
      mode: 'onSubmit',
   });

   const closeModalHandler = () => {
      onClose();
      reset();
   };

   const formSubmit = data => {
      editStockTrigger(
         { stock: data?.stock },
         {
            onSuccess: () => {
               toast.success('موجودی محصول با موفقیت تغییر یافت');
               dailyMenuMutate();
               closeModalHandler();
            },
         }
      );
   };

   useEffect(() => {
      if (show && detail) {
         setValue('stock', detail?.stock);
      }
   }, [show, detail]);

   return (
      <Dialog open={show} onClose={closeModalHandler} fullWidth dir="rtl" maxWidth="xs">
         <div className="relative p-5 pt-0 font-rokhRegular">
            <div className="sticky top-0 z-[2] flex items-center justify-between border-b border-solid border-[#E4EAF0] bg-white pb-2 pt-3">
               <p className="text-lg font-bold">تغییر تعداد موجودی</p>
               <IconButton onClick={closeModalHandler}>
                  <CloseIcon />
               </IconButton>
            </div>

            <form onSubmit={handleSubmit(formSubmit)} className="mt-5">
               <div className="flex flex-1 flex-col gap-1">
                  <p className="mb-2 text-sm text-[#626E94]">تعداد</p>
                  <TextField
                     fullWidth
                     type="number"
                     sx={{
                        input: {
                           MozAppearance: 'textfield',
                           appearance: 'textfield',
                           '&::-webkit-inner-spin-button': {
                              WebkitAppearance: 'none',
                              appearance: 'none',
                           },
                        },
                     }}
                     {...register('stock', {
                        required: {
                           value: true,
                           message: 'این فیلد اجباری است',
                        },
                     })}
                     error={!!errors?.stock}
                     helperText={errors?.stock?.message}
                  />
               </div>

               <div className="mt-8">
                  <LoadingButton
                     variant="contained"
                     color="customOrange"
                     fullWidth
                     className="!rounded-10 !py-2 !text-white"
                     size="large"
                     type="submit"
                     loading={editStockIsMutating}
                  >
                     تغییر
                  </LoadingButton>
               </div>
            </form>
         </div>
      </Dialog>
   );
}

export default EditStockModal;
