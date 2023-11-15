import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// MUI
import { FormControl, IconButton, InputAdornment, TextField } from '@mui/material';

// Assets
import searchIcon from '../../assets/icons/search-normal.svg';

// Styles
import RtlProvider from '../../components/layout/rtlProvider/rtlProvider';

// components
import FoodCardFirstTemplate from '@/components/templates/food-card-first-template/food-card-first-template';

function Search() {
   const router = useRouter();
   const foodName = router.query.food_name;

   const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
   } = useForm({
      defaultValues: {
         searchInput: foodName,
      },
   });

   const formSubmit = data => {
      console.log(data);
      router.push(`/search?food_name=${data.searchInput}`);
   };

   useEffect(() => {
      setValue('searchInput', foodName);
   }, [foodName]);

   return (
      <main className="px-5 pt-14 customMd:px-[60px]">
         <p className="text-center text-2xl font-bold">
            نتایج جستجو برای :<span className="text-[#C66204]">{foodName}</span>
         </p>
         {foodName && (
            <form className="mt-5 hidden items-center customMd:flex" onSubmit={handleSubmit(formSubmit)}>
               <div className="flex w-full justify-center">
                  <RtlProvider>
                     <FormControl variant="outlined">
                        <TextField
                           type="text"
                           size="small"
                           className="!min-w-[430px]"
                           color="customOrange"
                           defaultValue={foodName}
                           placeholder="جست و جو در غذای خانگی مادر"
                           {...register('searchInput', {
                              required: {
                                 value: true,
                                 message: 'لطفا نام غذا را وارد کنید',
                              },
                           })}
                           error={!!errors?.searchInput}
                           helperText={errors?.searchInput?.message}
                           InputProps={{
                              startAdornment: (
                                 <InputAdornment position="start">
                                    <IconButton type="submit" edge="start">
                                       <Image src={searchIcon} alt="search Icon" />
                                    </IconButton>
                                 </InputAdornment>
                              ),
                           }}
                        />
                     </FormControl>
                  </RtlProvider>
               </div>
            </form>
         )}
         <div className="mt-14 flex flex-wrap justify-center gap-5">
            <FoodCardFirstTemplate className="w-[200px]" />
            <FoodCardFirstTemplate className="w-[200px]" />
            <FoodCardFirstTemplate className="w-[200px]" />
            <FoodCardFirstTemplate className="w-[200px]" />
            <FoodCardFirstTemplate className="w-[200px]" />
            <FoodCardFirstTemplate className="w-[200px]" />
            <FoodCardFirstTemplate className="w-[200px]" />
            <FoodCardFirstTemplate className="w-[200px]" />
            <FoodCardFirstTemplate className="w-[200px]" />
            <FoodCardFirstTemplate className="w-[200px]" />
         </div>
      </main>
   );
}

export default Search;
