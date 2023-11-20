import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

// MUI
import { Button, Grid, IconButton } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import OutboxOutlinedIcon from '@mui/icons-material/OutboxOutlined';
import ForumIcon from '@mui/icons-material/Forum';
import AddCommentIcon from '@mui/icons-material/AddComment';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// Assets
import categoryTitleIcon from '../../assets/icons/categoriesIcon.svg';
import productDetailPic from '../../assets/images/productDetailPic.png';
import productDetailPic2 from '../../assets/images/20230820194614fpdl.jpg';
import amazingPic from '../../assets/images/amaz.png';

// Components
import Comment from '@/components/pages/product-detail/comment/comment';
import AddComment from '@/components/pages/product-detail/add-comment/add-comment';
import RtlProvider from '@/components/layout/rtlProvider/rtlProvider';
import FoodCardFirstTemplate from '@/components/templates/food-card-first-template/food-card-first-template';

function ProductDetail() {
   const [showAddCommentSection, setShowAddCommentSection] = useState(false);

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

         <div className="mt-9 border-y-[5px] border-solid border-[#E4EAF0] py-10">
            <Grid container spacing={{ md: 6 }}>
               <Grid item xs={12} md={7}>
                  {showAddCommentSection ? (
                     <>
                        <div className="mb-7 flex items-center justify-between border-b border-solid border-[#E4EAF0] py-4">
                           <div className="flex items-center gap-2">
                              <div>
                                 <AddCommentIcon fontSize="inherit" />
                              </div>
                              <p className="font-bold">افزودن دیدگاه جدید</p>
                           </div>
                        </div>

                        <div>
                           <AddComment setShowAddCommentSection={setShowAddCommentSection} />
                        </div>
                     </>
                  ) : (
                     <>
                        <div className="mb-7 flex items-center justify-between border-b border-solid border-[#E4EAF0] py-4">
                           <div className="flex items-center gap-2">
                              <div>
                                 <ForumIcon fontSize="inherit" color="customOrange" />
                              </div>
                              <p className="font-bold text-customOrange">نظرات کاربران</p>
                           </div>

                           <div>
                              <Button
                                 variant="contained"
                                 size="small"
                                 color="customOrange2"
                                 fullWidth
                                 className="!rounded-10 !p-2"
                                 onClick={() => setShowAddCommentSection(true)}
                              >
                                 <div className="flex w-full items-center justify-between">
                                    <p className="pl-7">ثبت نظر جدید</p>

                                    <OutboxOutlinedIcon className="rounded-xl bg-white p-1 text-customOrange" />
                                 </div>
                              </Button>
                           </div>
                        </div>

                        <div className="space-y-8">
                           <Comment />
                           <Comment />
                           <Comment />
                           <div className="flex justify-center">
                              <RtlProvider>
                                 <LoadingButton color="crimson" endIcon={<KeyboardArrowDownOutlinedIcon />}>
                                    مشاهده ۲۳ کامنت دیگر
                                 </LoadingButton>
                              </RtlProvider>
                           </div>
                        </div>
                     </>
                  )}
               </Grid>
               <Grid item xs={12} md={5}>
                  <div className="hidden flex-col gap-5 customMd:flex">
                     <div>
                        <Image src={amazingPic} alt="amazing" className="w-full" />
                     </div>
                     <div>
                        <Image src={amazingPic} alt="amazing" className="w-full" />
                     </div>
                  </div>
               </Grid>
            </Grid>
         </div>

         <div className="mb-6 mt-14 items-center justify-between space-y-1 border-b border-solid border-[#E4EAF0] text-center customMd:flex">
            <p
               className="relative mx-auto w-fit font-elMessiri text-2xl font-bold customMd:mx-0
             customMd:border-b-[3px] customMd:border-solid customMd:border-customOrange"
            >
               محصولات مشابه
               <Image src={categoryTitleIcon} alt="category title" className="absolute -right-2 top-[-1px]" />
            </p>
            <Link href="/category/some" className="hidden items-center gap-2 text-sm text-textGray customMd:flex">
               مشاهده همه
               <KeyboardArrowLeftIcon fontSize="small" />
            </Link>
         </div>

         <div className="mt-5 flex flex-wrap items-center justify-center gap-5">
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

export default ProductDetail;
