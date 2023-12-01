import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

// MUI
import { CircularProgress, IconButton, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import BorderColorIcon from '@mui/icons-material/BorderColor';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

// Assets
import userProfilePic from '../../../assets/images/userProfile.png';

// Components
import ProfileLayout from '@/components/layout/profile-layout/profile-layout';
import RtlProvider from '@/components/layout/rtlProvider/rtlProvider';

// Apis
import useGetInformation from '@/apis/profile/useGetInformation';

function Information() {
   const { data: information } = useGetInformation();

   console.log(information);

   const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
   } = useForm({
      defaultValues: {
         fullName: '',
         phoneNumber: '',
      },
      mode: 'onSubmit',
   });

   useEffect(() => {
      if (information) {
         setValue('fullName', information?.name);
         setValue('phoneNumber', information?.phone_number);
      }
   }, [information]);

   const formSubmit = data => {
      console.log(data);
   };

   return (
      <ProfileLayout>
         <div>
            <p className="border-b border-solid border-[#E4EAF0] pb-4 font-bold">اطلاعات کاربری</p>

            {information ? (
               <>
                  <div className="relative mx-auto mt-14 w-fit cursor-pointer customMd:mx-0">
                     <div className="h-28 w-28 cursor-pointer">
                        <Image
                           src={userProfilePic}
                           alt="user profile"
                           className="h-full w-full cursor-pointer rounded-full"
                        />
                     </div>
                     <IconButton
                        className="absolute bottom-0 left-0 cursor-pointer bg-customOrange"
                        sx={{ width: '33px', height: '33px' }}
                     >
                        <BorderColorIcon fontSize="small" />
                     </IconButton>

                     <input type="file" className="absolute inset-0 cursor-pointer opacity-0" />
                  </div>

                  <form onSubmit={handleSubmit(formSubmit)} className="mt-10">
                     <RtlProvider>
                        <div className="mb-12 flex flex-col gap-6 customLg:flex-row">
                           <div className="flex flex-1 flex-col gap-1">
                              <p className="text-sm text-[#7E8AAB]">نام و نام خانوادگی</p>

                              <TextField
                                 variant="outlined"
                                 fullWidth
                                 color="customOrange"
                                 InputProps={{
                                    startAdornment: (
                                       <InputAdornment position="start">
                                          <DriveFileRenameOutlineIcon />
                                       </InputAdornment>
                                    ),
                                 }}
                                 {...register('fullName', {
                                    required: {
                                       value: true,
                                       message: 'این فیلد اجباری است',
                                    },
                                 })}
                                 error={!!errors?.fullName}
                                 helperText={errors?.fullName?.message}
                              />
                           </div>

                           <div className="flex flex-1 flex-col gap-1">
                              <p className="text-sm text-[#7E8AAB]">شماره تلفن همراه</p>
                              <TextField
                                 variant="outlined"
                                 fullWidth
                                 color="customOrange"
                                 type="number"
                                 InputProps={{
                                    startAdornment: (
                                       <InputAdornment position="start">
                                          <PhoneAndroidIcon />
                                       </InputAdornment>
                                    ),
                                 }}
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
                                 {...register('phoneNumber', {
                                    required: {
                                       value: true,
                                       message: 'این فیلد اجباری است',
                                    },
                                    pattern: {
                                       value: /^09\d{9}$/,
                                       message: 'لطفا یک شماره تلفن معتبر ۱۱ رقمی وارد کنید',
                                    },
                                 })}
                                 error={!!errors?.phoneNumber}
                                 helperText={errors?.phoneNumber?.message}
                              />
                           </div>
                        </div>
                     </RtlProvider>

                     <LoadingButton
                        variant="contained"
                        type="submit"
                        size="large"
                        color="customOrange2"
                        loading={false}
                        className="w-full !rounded-10 !p-2 customLg:w-auto"
                     >
                        <div className="flex w-full items-center justify-between customLg:w-[330px]">
                           <KeyboardTabIcon className="rotate-90 rounded-xl bg-white p-2 text-customOrange" />
                           <p>ثبت اطلاعات</p>
                        </div>
                     </LoadingButton>
                  </form>
               </>
            ) : (
               <div className="mt-10 flex items-center justify-center">
                  <CircularProgress color="customOrange2" />
               </div>
            )}
         </div>
      </ProfileLayout>
   );
}

export default Information;
