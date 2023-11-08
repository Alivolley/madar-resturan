import { Controller, useForm } from 'react-hook-form';
import Image from 'next/image';

// MUI
import { Button, Rating, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import OutboxOutlinedIcon from '@mui/icons-material/OutboxOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

// Assets
import addCommentPic from '../../../../assets/images/addComment.png';

// Components
import RtlProvider from '@/components/layout/rtlProvider/rtlProvider';

function AddComment({ setShowAddCommentSection }) {
   const {
      register,
      handleSubmit,
      formState: { errors },
      control,
      watch,
   } = useForm({
      defaultValues: {
         rate: '5',
         comment: '',
      },
      mode: 'onSubmit',
   });

   const formSubmit = data => {
      console.log(data);
   };

   const rateValue = watch('rate');

   return (
      <form className="flex flex-col items-center" onSubmit={handleSubmit(formSubmit)}>
         <p className="font-bold text-[#66839A]">امتیاز به سفارش کباب تابه ای غذاخانگی مادر</p>
         <div className="mt-3 flex items-center gap-10 text-xs">
            <div className="flex items-start gap-1">
               <CalendarMonthIcon fontSize="inherit" />
               <p>شنبه ۲۵ شهریور</p>
            </div>
            <div className="flex items-start gap-1">
               <AccessTimeIcon fontSize="inherit" />
               <p>14:35</p>
            </div>
            <div className="flex items-start gap-1">
               <LocationOnOutlinedIcon fontSize="inherit" />
               <p>شهرک دانش</p>
            </div>
         </div>
         <div className="my-8 hidden w-36 customMd:block">
            <Image className="h-full w-full" src={addCommentPic} alt="add comment" />
         </div>

         <p className="mb-4 mt-20 customMd:mt-0">به سفارشتان به رستوران مادر چه امتیازی میدهید ؟</p>
         <p className="mb-3 rounded bg-[#C1F7EE] px-4 pb-0.5 pt-1.5 text-sm text-[#139983]">
            {rateValue === '5'
               ? 'خیلی خوب'
               : rateValue === '4'
               ? 'خوب'
               : rateValue === '3'
               ? 'معمولی'
               : rateValue === '2'
               ? 'بد'
               : rateValue === '1'
               ? 'خیلی بد'
               : null}
         </p>

         <div className="mb-16">
            <Controller
               control={control}
               name="rate"
               render={({ field: { onChange, value } }) => <Rating value={value} onChange={onChange} />}
            />
         </div>

         <RtlProvider>
            <TextField
               label="نظرتان را اینجا بنویسید"
               multiline
               rows={4}
               color="customOrange"
               fullWidth
               {...register('comment', {
                  required: {
                     value: true,
                  },
               })}
               error={!!errors?.comment}
               helperText="مثال : کیفیت و قیمت ، اقلام سفارش ، بسته بندی سفارش  و...."
            />
         </RtlProvider>

         <div className="mt-8 flex items-stretch gap-2">
            <LoadingButton
               variant="contained"
               size="large"
               color="customOrange2"
               loading={false}
               className="min-w-[170px] !rounded-10 !p-2 customXs:min-w-[220px]"
               type="submit"
            >
               <div className="flex w-full items-center justify-between">
                  <p>ثبت نظر</p>

                  <OutboxOutlinedIcon className="rounded-xl bg-white p-2 text-customOrange" />
               </div>
            </LoadingButton>
            <Button
               onClick={() => setShowAddCommentSection(false)}
               color="buttonBgGray"
               variant="contained"
               className="!rounded-10 text-[#7E8AAB]"
            >
               رد کردن
            </Button>
         </div>
      </form>
   );
}

export default AddComment;
