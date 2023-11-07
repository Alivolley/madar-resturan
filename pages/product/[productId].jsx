import Image from 'next/image';

// MUI
import { Grid, IconButton } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import OutboxOutlinedIcon from '@mui/icons-material/OutboxOutlined';
import ForumIcon from '@mui/icons-material/Forum';

// Assets
import productDetailPic from '../../assets/images/productDetailPic.png';
import productDetailPic2 from '../../assets/images/20230820194614fpdl.jpg';

function ProductDetail() {
   return (
      <main className="px-5 pb-32 pt-14 customMd:px-[60px]">
         <Grid container spacing={{ md: 6 }}>
            <Grid item xs={12} md={7}>
               <div>
                  <Grid container spacing={1}>
                     <Grid item xs={12} md={9}>
                        <div className="h-full rounded-10">
                           <Image alt="food" src={productDetailPic} className="h-full w-full rounded-10 object-cover" />
                        </div>
                     </Grid>
                     <Grid item xs={12} md={3}>
                        <div className="flex items-center gap-2 customMd:h-full customMd:flex-col">
                           <div className="flex-1 rounded-10">
                              <Image
                                 alt="food"
                                 src={productDetailPic2}
                                 className="h-full w-full rounded-10 object-cover"
                              />
                           </div>
                           <div className="flex-1 rounded-10">
                              <Image
                                 alt="food"
                                 src={productDetailPic2}
                                 className="h-full w-full rounded-10 object-cover"
                              />
                           </div>
                           <div className="flex-1 rounded-10">
                              <Image
                                 alt="food"
                                 src={productDetailPic2}
                                 className="h-full w-full rounded-10 object-cover"
                              />
                           </div>
                        </div>
                     </Grid>
                  </Grid>
               </div>
            </Grid>
            <Grid item xs={12} md={5}>
               <div className="mt-14 flex h-full flex-col customMd:mt-0">
                  <div className="flex items-center justify-between customMd:flex-col-reverse customMd:items-start customMd:gap-3">
                     <p className="font-elMessiri text-lg font-bold customMd:text-2xl">رنگین پلو با سالاد کلم </p>
                     <div className="flex items-center gap-2 whitespace-nowrap">
                        <div className="text-[#E394AA]">
                           <ForumOutlinedIcon fontSize="inherit" color="inherit" />
                        </div>
                        <p className="text-[13px] text-[#66839A]">۲ دیدگاه</p>

                        <div className="flex items-center whitespace-nowrap rounded-md bg-[#FFFAE2] px-1 pt-0.5">
                           <p className="text-xs text-gold">۴.۵</p>
                           <div>
                              <StarOutlinedIcon fontSize="inherit" color="gold" />
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="mt-4 customMd:mt-5">
                     <p className="text-sm text-[#66839A] customMd:text-lg">
                        ۳۰۰ گرم چلله و گوسفند تازه ۳۰۰ گرم چلوکره، ۱۲۰ گرم گوشت مخلوط گوساله و گوسفند تازه
                     </p>
                  </div>

                  <div className="mt-5 border-t border-solid border-[#B1B5C4] pt-5 customMd:mt-auto customMd:border-none">
                     <div className="flex items-center justify-end gap-2">
                        <p className="rounded-md bg-[#C1F7EE] px-1 pt-1 text-xs text-[#139983]">۲۲٪</p>
                        <p className="font-rokhFaNum text-sm font-bold text-[#8F0E0E] line-through">
                           {Number('420000').toLocaleString('fa-IR')} تومان
                        </p>
                     </div>

                     <div className="flex items-end justify-between">
                        <div className="flex items-center gap-1.5">
                           <IconButton
                              className="border border-solid border-customOrange"
                              sx={{ width: '22px', height: '22px' }}
                           >
                              <AddIcon color="customOrange" className="text-sm" />
                           </IconButton>
                           <p className="pt-1.5 font-rokhFaNum text-xl font-bold">2</p>
                           <IconButton
                              className="border border-solid border-textGray"
                              sx={{ width: '22px', height: '22px' }}
                           >
                              <RemoveIcon color="textGray" className="text-sm" />
                           </IconButton>
                        </div>
                        <div className="mt-2 flex items-center gap-1 rounded bg-[#C1F7EE] px-3 pt-1 text-lg font-bold text-[#139983] customMd:text-xl">
                           <p>{Number('378000').toLocaleString('fa-IR')}</p>
                           <p>تومان</p>
                        </div>
                     </div>

                     <div className="mt-5 hidden customMd:block">
                        <LoadingButton
                           variant="contained"
                           size="large"
                           color="customOrange2"
                           loading={false}
                           fullWidth
                           className="!rounded-10 !p-2"
                        >
                           <div className="flex w-full items-center justify-between">
                              <p>افزودن به سبد خرید</p>

                              <ShoppingBasketOutlinedIcon className="rounded-xl bg-white p-2 text-customOrange" />
                           </div>
                        </LoadingButton>
                     </div>
                  </div>
               </div>
            </Grid>
         </Grid>

         <div>
            <div className="mt-7 flex items-center justify-between border-b border-t-[5px] border-solid border-[#E4EAF0] py-4 ">
               <div className="flex items-center gap-2">
                  <div>
                     <ForumIcon fontSize="inherit" color="customOrange" />
                  </div>
                  <p className="font-bold text-customOrange">نظرات کاربران</p>
               </div>

               <div>
                  <LoadingButton
                     variant="contained"
                     size="small"
                     color="customOrange2"
                     loading={false}
                     fullWidth
                     className="!rounded-10 !p-2"
                  >
                     <div className="flex w-full items-center justify-between">
                        <p className="pl-7">ثبت نظر جدید</p>

                        <OutboxOutlinedIcon className="rounded-xl bg-white p-1 text-customOrange" />
                     </div>
                  </LoadingButton>
               </div>
            </div>
         </div>
      </main>
   );
}

export default ProductDetail;
