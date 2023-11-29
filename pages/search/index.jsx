import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// MUI
import { FormControl, IconButton, InputAdornment, TextField } from '@mui/material';

// Assets
import searchIcon from '../../assets/icons/search-normal.svg';
import noResult from '../../assets/images/search-not-found.png';

// Configs
import axiosInstance from '@/configs/axiosInstance';

// Styles
import RtlProvider from '../../components/layout/rtlProvider/rtlProvider';

// components
import FoodCardFirstTemplate from '@/components/templates/food-card-first-template/food-card-first-template';

function Search({ searchResultList }) {
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
      router.push(`/search?food_name=${data.searchInput}&page=1`);
   };

   useEffect(() => {
      setValue('searchInput', foodName);
   }, [foodName]);

   console.log(searchResultList);

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
            {searchResultList?.total_objects === 0 ? (
               <div>
                  <p className="mb-12 mt-[-20px] text-lg font-bold">محصولی با این مشخصات یافت نشد</p>
                  <div className="w-[250px]">
                     <Image alt="no result" src={noResult} className="h-full w-full" priority />
                  </div>
               </div>
            ) : (
               searchResultList?.result?.map(item => (
                  <FoodCardFirstTemplate className="w-[250px] customSm:w-[200px]" key={item?.id} detail={item} />
               ))
            )}
         </div>
      </main>
   );
}

export default Search;

export async function getServerSideProps(context) {
   const { query } = context;

   const searchResultList = await axiosInstance('restaurant/foods/list_create/', {
      params: {
         search: query?.food_name,
         page: query?.page,
      },
   }).then(res => res.data);

   return { props: { searchResultList } };
}
