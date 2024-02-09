import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Head from 'next/head';
import Image from 'next/image';
// Redux
import { useSelector } from 'react-redux';

// MUI
import { Backdrop, CircularProgress, IconButton, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import BorderColorIcon from '@mui/icons-material/BorderColor';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';

// Assets
import userProfilePic from '@/assets/images/userProfile.png';

// Components
import RtlProvider from '@/components/layout/rtlProvider/rtlProvider';
import AdminLayout from '@/components/layout/admin-layout/admin-layout';

// Apis
import useChangeProfileImage from '@/apis/profile/useChangeProfileImage';
import useChangeProfileInfo from '@/apis/profile/useChangeProfileInfo';

function Information() {
   const { trigger: changeProfileTrigger, isMutating: changeProfileIsMutating } = useChangeProfileImage();
   const { trigger: changeProfileInfoTrigger, isMutating: changeProfileInfoIsMutating } = useChangeProfileInfo();

   const userInfo = useSelector(state => state?.userInfoReducer);

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
      if (userInfo) {
         setValue('fullName', userInfo?.name);
         setValue('phoneNumber', userInfo?.phone_number);
      }
   }, [userInfo]);

   const formSubmit = data => {
      const newDetail = {
         name: data?.fullName,
      };

      changeProfileInfoTrigger(newDetail);
   };

   const changeProfileImageHandler = e => {
      const formData = new FormData();
      formData.append('image', e.target.files[0]);
      changeProfileTrigger(formData);
   };

   return (
      <AdminLayout>
         <Head>
            <title>مادر - اطلاعات حساب</title>
         </Head>
         <div>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-10 bg-white px-5 py-8">
               <div className="flex items-center gap-1.5">
                  <RecentActorsOutlinedIcon />
                  <p className="font-bold">اطلاعات حساب</p>
               </div>
            </div>

            {userInfo?.phone_number ? (
               <div className="mt-6 rounded-10 bg-white px-5 py-8">
                  <div className="relative mx-auto w-fit cursor-pointer customMd:mx-0">
                     <div className="relative size-28 cursor-pointer">
                        <Image
                           src={userInfo?.image || userProfilePic}
                           alt="user profile"
                           className="size-full cursor-pointer rounded-full object-cover"
                           fill
                        />
                     </div>
                     <IconButton
                        className="!absolute !bottom-0 !left-0 !cursor-pointer !bg-customOrange"
                        sx={{ width: '33px', height: '33px' }}
                     >
                        <BorderColorIcon fontSize="small" />
                     </IconButton>

                     <input
                        type="file"
                        className="absolute inset-0 cursor-pointer opacity-0"
                        onChange={changeProfileImageHandler}
                        accept="image/*"
                     />
                  </div>

                  <form onSubmit={handleSubmit(formSubmit)} className="mt-10">
                     <RtlProvider>
                        <div className="mb-12 flex flex-col gap-6 customLg:flex-row">
                           <div className="flex flex-1 flex-col gap-1">
                              <p className="text-sm font-bold text-[#713802]">نام و نام خانوادگی</p>

                              <TextField
                                 variant="outlined"
                                 fullWidth
                                 {...register('fullName', {
                                    required: {
                                       value: true,
                                       message: 'این فیلد اجباری است',
                                    },
                                 })}
                                 error={!!errors?.fullName}
                                 helperText={errors?.fullName?.message}
                                 disabled={changeProfileInfoIsMutating}
                              />
                           </div>

                           <div className="flex flex-1 flex-col gap-1">
                              <p className="text-sm font-bold text-[#713802]">شماره تلفن همراه</p>
                              <TextField
                                 {...register('phoneNumber')}
                                 disabled
                                 inputProps={{
                                    className: '!font-rokhFaNum !text-black !font-bold hover:!cursor-not-allowed',
                                 }}
                              />
                           </div>
                        </div>
                     </RtlProvider>

                     <LoadingButton
                        variant="contained"
                        type="submit"
                        size="large"
                        color="customOrange2"
                        fullWidth
                        loading={changeProfileInfoIsMutating}
                        className="!rounded-10 !py-3 !font-bold"
                     >
                        ویرایش اطلاعات
                     </LoadingButton>
                  </form>
               </div>
            ) : (
               <div className="mt-10 flex items-center justify-center">
                  <CircularProgress color="customOrange2" />
               </div>
            )}
         </div>
         <Backdrop sx={{ zIndex: 2 }} open={changeProfileIsMutating}>
            <CircularProgress color="customOrange2" />
         </Backdrop>
      </AdminLayout>
   );
}

export default Information;

export async function getServerSideProps(context) {
   const { req } = context;
   const accessToken = req?.cookies?.madar_accessToken;
   const refreshToken = req?.cookies?.madar_refreshToken;

   if (!accessToken && !refreshToken) {
      return {
         redirect: {
            destination: '/login',
         },
      };
   }
   return {
      props: {},
   };
}
