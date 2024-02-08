import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';

// MUI
import {
   Button,
   FormControl,
   FormHelperText,
   IconButton,
   InputAdornment,
   InputLabel,
   OutlinedInput,
   TextField,
   useMediaQuery,
   useTheme,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { MuiOtpInput } from 'mui-one-time-password-input';

// Icons
import WestIcon from '@mui/icons-material/West';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// Assets
import logo from '../../assets/images/loginLogo.png';
import logo2 from '../../assets/images/Vector.png';
import backGround from '../../assets/images/a.png';
import backGround2 from '../../assets/images/layer.png';

// Components
import RtlProvider from '@/components/layout/rtlProvider/rtlProvider';
import CountdownLogin from '@/components/templates/countdown-Login/countdown-Login';

// Api
import useVerificationCode from '@/apis/login/useVerificationCode';
import useSendCode from '@/apis/login/useSendCode';
import useSendPassword from '@/apis/login/useSendPassword';

function Login() {
   const theme = useTheme();
   const isTablet = useMediaQuery(theme.breakpoints.down('md'));

   const [showPassword, setShowPassword] = useState(false);
   const [step, setStep] = useState(1);
   const router = useRouter();
   const { trigger: verificationCodeTrigger, isMutating: verificationCodeIsMutating } = useVerificationCode();
   const { trigger: sendCodeTrigger, isMutating: sendCodeIsMutating } = useSendCode();
   const { trigger: sendPasswordTrigger, isMutating: sendPasswordIsMutating } = useSendPassword();

   const {
      register,
      handleSubmit,
      formState: { errors },
      control,
      getValues,
   } = useForm({
      defaultValues: {
         phone_number: '',
         code: '',
         password: '',
      },
      mode: 'onSubmit',
   });

   const formSubmit = data => {
      if (step === 1) {
         verificationCodeTrigger(
            { phone_number: data?.phone_number },
            {
               onSuccess: () => {
                  setStep(2);
               },
            }
         );
      } else if (step === 2) {
         const newData = {
            phone_number: data?.phone_number,
            code: data?.code,
         };

         sendCodeTrigger(newData, {
            onSuccess: res => {
               if (!res.is_admin) {
                  router.back();
               } else {
                  setStep(3);
               }
            },
         });
      } else if (step === 3) {
         const newData = {
            phone_number: data?.phone_number,
            code: data?.code,
            password: data?.password,
         };

         sendPasswordTrigger(newData, {
            onSuccess: () => {
               router.back();
            },
         });
      }
   };

   return (
      <div className="fixed inset-0 customMd:flex customMd:flex-row-reverse">
         <div className="relative flex flex-col items-center rounded-b-full bg-customOrange p-10 customMd:flex-1 customMd:rounded-none">
            <div className="absolute inset-0 z-0 opacity-[15%] customMd:opacity-100">
               <Image src={isTablet ? backGround : backGround2} alt="login bg" className="size-full" />
            </div>
            <Link href="/" className="z-[1] customMd:flex customMd:h-full customMd:flex-col customMd:justify-center">
               <div className="w-28 customMd:w-[410px]">
                  <Image src={isTablet ? logo : logo2} alt="logo" className="size-full" />
               </div>
               <p className="text-center text-2xl font-bold text-[#8F0E0E] customMd:mb-2 customMd:mt-6 customMd:font-elMessiri customMd:text-4xl">
                  رستوران مادر
               </p>
               <p className="hidden text-center text-lg text-white customMd:block">
                  با غذاخوری مادر غذاهای لذیذ و خانگی را تجربه کنید
               </p>
            </Link>
         </div>
         <div className="mt-20 px-5 customMd:mt-0 customMd:flex-1">
            <div className="mx-auto max-w-md customMd:flex customMd:h-full customMd:flex-col customMd:justify-center">
               {step === 1 && (
                  <div className="mb-10">
                     <p className="mb-1 text-xl font-bold text-[#713802]">ورود یا ثبت نام</p>
                     <p className="text-sm text-[#626E94]">
                        برای ورود به رستوران مادر ابتدا شماره همراه خود را وارد کنید
                     </p>
                  </div>
               )}

               {step === 2 && (
                  <div className="mb-10">
                     <p className="mb-1 text-xl font-bold text-[#713802]">تایید کد ارسالی</p>
                     <p className="text-sm text-[#626E94]">
                        لطفا کد تایید که به شماره{' '}
                        <span className="px-1 font-rokhFaNum">{getValues('phone_number')}</span> ارسال شده است را وارد
                        کنید
                     </p>
                  </div>
               )}

               {step === 3 && (
                  <div className="mb-10">
                     <p className="mb-1 text-xl font-bold text-[#713802]">شماره شما یک ادمین است</p>
                     <p className="text-sm text-[#626E94]">لطفا برای ورود به عنوان ادمین رمز عبور خود را وارد کنید</p>
                  </div>
               )}

               <RtlProvider>
                  <form onSubmit={handleSubmit(formSubmit)} className="space-y-6">
                     {step === 1 && (
                        <TextField
                           label="شماره همراه"
                           variant="outlined"
                           fullWidth
                           color="customOrange"
                           type="number"
                           inputProps={{ className: '!font-rokhFaNum' }}
                           disabled={verificationCodeIsMutating}
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
                           {...register('phone_number', {
                              required: {
                                 value: true,
                                 message: 'این فیلد اجباری است',
                              },
                              pattern: {
                                 value: /^09\d{9}$/,
                                 message: 'لطفا یک شماره تلفن معتبر ۱۱ رقمی وارد کنید',
                              },
                           })}
                           error={!!errors?.phone_number}
                           helperText={errors?.phone_number?.message}
                        />
                     )}

                     {step === 2 && (
                        <>
                           <Controller
                              control={control}
                              name="code"
                              rules={{
                                 required: 'لفطا کد را وارد کنید',
                                 minLength: {
                                    value: 4,
                                    message: 'لفطا کد را وارد کنید',
                                 },
                              }}
                              render={({ field: { onChange, value }, fieldState }) => (
                                 <>
                                    <MuiOtpInput
                                       value={value}
                                       onChange={onChange}
                                       length={4}
                                       dir="ltr"
                                       gap={1}
                                       TextFieldsProps={{
                                          color: 'customOrange2',
                                          error: !!fieldState.invalid,
                                          type: 'number',
                                       }}
                                       sx={{
                                          input: {
                                             fontFamily: 'rokhFaNum',
                                             MozAppearance: 'textfield',
                                             appearance: 'textfield',
                                             '&::-webkit-inner-spin-button': {
                                                WebkitAppearance: 'none',
                                                appearance: 'none',
                                             },
                                          },
                                       }}
                                       onComplete={handleSubmit(formSubmit)}
                                    />

                                    {fieldState.invalid
                                       ? errors?.code?.message && (
                                            <FormHelperText error>{errors?.code?.message}</FormHelperText>
                                         )
                                       : null}
                                 </>
                              )}
                           />

                           <CountdownLogin
                              initialCount={120}
                              onComplete={() => {}}
                              onResetClick={() => {}}
                              loading={false}
                           />
                        </>
                     )}

                     {step === 3 && (
                        <Controller
                           control={control}
                           name="password"
                           rules={{ required: 'لفطا کد را وارد کنید' }}
                           render={({ field: { onChange, value } }) => (
                              <FormControl variant="outlined" fullWidth>
                                 <InputLabel color="customOrange">رمز عبور</InputLabel>
                                 <OutlinedInput
                                    type={showPassword ? 'text' : 'password'}
                                    color="customOrange"
                                    autoComplete="off"
                                    value={value}
                                    onChange={onChange}
                                    endAdornment={
                                       <InputAdornment position="end">
                                          <IconButton onClick={() => setShowPassword(prev => !prev)} edge="end">
                                             {showPassword ? <VisibilityOff /> : <Visibility />}
                                          </IconButton>
                                       </InputAdornment>
                                    }
                                    label="رمز عبور"
                                 />
                              </FormControl>
                           )}
                        />
                     )}

                     <LoadingButton
                        variant="contained"
                        type="submit"
                        size="large"
                        color="customOrange2"
                        loading={verificationCodeIsMutating || sendCodeIsMutating || sendPasswordIsMutating}
                        fullWidth
                        className="!rounded-10 !p-2"
                     >
                        <div className="flex w-full items-center justify-between">
                           <p>ادامه</p>

                           <WestIcon className="rounded-xl bg-white p-2 text-customOrange" />
                        </div>
                     </LoadingButton>
                  </form>
               </RtlProvider>

               {step === 1 && (
                  <Button
                     variant="outlined"
                     size="large"
                     color="textGray"
                     onClick={() => router.back()}
                     fullWidth
                     className="!mt-4 !rounded-10 !p-3"
                     disabled={verificationCodeIsMutating}
                  >
                     بعدا ثبت نام میکنم
                  </Button>
               )}

               {(step === 2 || step === 3) && (
                  <Button
                     variant="outlined"
                     size="large"
                     color="textGray"
                     onClick={() => setStep(1)}
                     fullWidth
                     className="!mt-4 !rounded-10 !p-2"
                  >
                     <div className="flex w-full items-center justify-between">
                        <BorderColorIcon className="rounded-xl bg-[#E4EAF0] p-2 text-[#626E94]" />
                        <p>ویرایش شماره</p>
                     </div>
                  </Button>
               )}
            </div>
         </div>
      </div>
   );
}

export default Login;
