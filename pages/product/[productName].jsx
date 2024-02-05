import { toast } from 'react-toastify';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Redux
import { useSelector } from 'react-redux';

// MUI
import { Button, CircularProgress, Grid, IconButton } from '@mui/material';
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
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

// Configs
import axiosInstance from '@/configs/axiosInstance';

// Assets
import categoryTitleIcon from '@/assets/icons/categoriesIcon.svg';
import amazingPic from '@/assets/images/amaz.png';
import addCommentPic from '@/assets/images/addComment.png';
import noImage from '@/assets/images/noImage.png';

// Components
import Comment from '@/components/pages/product-detail/comment/comment';
import AddComment from '@/components/pages/product-detail/add-comment/add-comment';
import RtlProvider from '@/components/layout/rtlProvider/rtlProvider';
import FoodCardFirstTemplate from '@/components/templates/food-card-first-template/food-card-first-template';

// Apis
import useAddToBasket from '@/apis/basket/useAddToBasket';
import useRemoveFromBasket from '@/apis/basket/useRemoveFromBasket';
import useGetBasket from '@/apis/basket/useGetBasket';
import useGetComments from '@/apis/comments/useGetComments';

function ProductDetail({ productDetail, categoryItems, error }) {
   const [showAddCommentSection, setShowAddCommentSection] = useState(false);
   const [chosenPicture, setChosenPicture] = useState(productDetail?.images?.[0] || '');
   const isLogin = useSelector(state => state?.loginStatusReducer);

   useEffect(() => {
      if (error) {
         toast.error(error);
      }
   }, [error]);

   const { isMutating: addToBasketIsMutating, trigger: addToBasketTrigger } = useAddToBasket();
   const { isMutating: removeFromBasketIsMutating, trigger: removeFromBasketTrigger } = useRemoveFromBasket();
   const { data: basketData } = useGetBasket(isLogin);
   const {
      mutate: commentsMutate,
      data: commentsData,
      isLoading: commentsIsLoading,
      size: commentsSize,
      setSize: commentsSetSize,
      isValidating: commentsIsValidating,
   } = useGetComments(productDetail?.id);

   const basketQuantity = basketData?.orders?.find(
      item => item?.product?.product_title === productDetail?.title
   )?.count;

   const addToBasketHandler = () => {
      if (isLogin) {
         const foodObj = {
            product_id: productDetail?.id,
            product_count: basketQuantity ? Number(basketQuantity) + 1 : 1,
         };

         addToBasketTrigger(foodObj);
      } else {
         toast.info('برای افزودن به سبد خرید ابتدا وارد حساب خود شوید');
      }
   };

   const removeFromBasketHandler = () => {
      const foodObj = {
         product_id: productDetail?.id,
         product_count: Number(basketQuantity) - 1,
      };

      removeFromBasketTrigger(foodObj);
   };

   return (
      <main className="mx-auto max-w-[1300px] px-5 pb-32 pt-14 customMd:px-[60px]">
         <Grid container spacing={{ md: 6 }}>
            <Grid item xs={12} md={6}>
               <div className="customMd:h-[470px]">
                  <Grid container height="100%" spacing={{ md: 1.5 }}>
                     <Grid item xs={12} md={9} height="100%">
                        <div className="relative size-full h-[250px] rounded-10 customMd:h-full">
                           <Image
                              alt="food"
                              src={chosenPicture?.image || noImage}
                              className="rounded-10 object-cover"
                              fill
                           />
                        </div>
                     </Grid>

                     <Grid item xs={12} md={3} height="100%">
                        <div className="mt-2 flex h-[75px] gap-1 customMd:mt-0 customMd:grid customMd:size-full customMd:gap-2">
                           {productDetail?.images?.[0]?.image && (
                              <button
                                 type="button"
                                 className={`relative size-full border-none bg-none outline-none ${
                                    productDetail?.images?.[0]?.id === chosenPicture?.id
                                       ? 'rounded-lg !border-2 !border-solid !border-customOrange2'
                                       : ''
                                 }`}
                                 onClick={() => setChosenPicture(productDetail?.images?.[0])}
                              >
                                 <Image
                                    alt="food"
                                    src={productDetail?.images?.[0]?.image || noImage}
                                    className="rounded-lg object-cover"
                                    fill
                                 />
                              </button>
                           )}
                           {productDetail?.images?.[1]?.image && (
                              <button
                                 type="button"
                                 className={`relative size-full border-none bg-none outline-none ${
                                    productDetail?.images?.[1]?.id === chosenPicture?.id
                                       ? 'rounded-lg !border-2 !border-solid !border-customOrange2'
                                       : ''
                                 }`}
                                 onClick={() => setChosenPicture(productDetail?.images?.[1])}
                              >
                                 <Image
                                    alt="food"
                                    src={productDetail?.images?.[1]?.image || noImage}
                                    className="rounded-lg object-cover"
                                    fill
                                 />
                              </button>
                           )}
                           {productDetail?.images?.[2]?.image && (
                              <button
                                 type="button"
                                 className={`relative size-full border-none bg-none outline-none ${
                                    productDetail?.images?.[2]?.id === chosenPicture?.id
                                       ? 'rounded-lg !border-2 !border-solid !border-customOrange2'
                                       : ''
                                 }`}
                                 onClick={() => setChosenPicture(productDetail?.images?.[2])}
                              >
                                 <Image
                                    alt="food"
                                    src={productDetail?.images?.[2]?.image || noImage}
                                    className="rounded-lg object-cover"
                                    fill
                                 />
                              </button>
                           )}
                           {productDetail?.images?.[3]?.image && (
                              <button
                                 type="button"
                                 className={`relative size-full border-none bg-none outline-none ${
                                    productDetail?.images?.[3]?.id === chosenPicture?.id
                                       ? 'rounded-lg !border-2 !border-solid !border-customOrange2'
                                       : ''
                                 }`}
                                 onClick={() => setChosenPicture(productDetail?.images?.[3])}
                              >
                                 <Image
                                    alt="food"
                                    src={productDetail?.images?.[3]?.image || noImage}
                                    className="rounded-lg object-cover"
                                    fill
                                 />
                              </button>
                           )}
                        </div>
                     </Grid>
                  </Grid>
               </div>
            </Grid>
            <Grid item xs={12} md={6}>
               <div className="mt-14 flex h-full flex-col customMd:mt-0">
                  <div className="flex items-center justify-between customMd:flex-col-reverse customMd:items-start customMd:gap-3">
                     <p className="font-elMessiri text-lg font-bold customMd:text-2xl">{productDetail?.title}</p>
                     <div className="flex items-center gap-2 whitespace-nowrap">
                        <div className="text-[#E394AA]">
                           <ForumOutlinedIcon fontSize="inherit" color="inherit" />
                        </div>
                        <p className="font-rokhFaNum text-[13px] text-[#66839A]">
                           {commentsData?.[0]?.total_objects} دیدگاه
                        </p>

                        <div className="flex items-center whitespace-nowrap rounded-md bg-[#FFFAE2] px-1 pt-0.5">
                           <p className="font-rokhFaNum text-xs text-gold">{productDetail?.average_score}</p>
                           <div>
                              <StarOutlinedIcon fontSize="inherit" color="gold" />
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="mt-4 customMd:mt-5">
                     <p className="text-sm text-[#66839A] customMd:text-lg">{productDetail?.description}</p>
                  </div>

                  <div className="mt-5 border-t border-solid border-[#B1B5C4] pt-5 customMd:mt-auto customMd:border-none">
                     <div className="mb-2 items-center">
                        <p className="font-rokhFaNum text-xs font-bold text-[#8F0E0E]">
                           {productDetail?.stock === 0
                              ? 'ناموجود'
                              : productDetail?.stock <= 5
                                ? `${productDetail?.stock} عدد موجود است`
                                : null}
                        </p>
                     </div>

                     {productDetail?.percentage ? (
                        <div className="flex items-center justify-end gap-2">
                           <p className="rounded-md bg-[#C1F7EE] px-1 pt-1 font-rokhFaNum text-xs text-[#139983]">
                              {productDetail?.percentage}٪
                           </p>
                           <p className="font-rokhFaNum text-sm font-bold text-[#8F0E0E] line-through">
                              {Number(productDetail?.before_discount_price).toLocaleString('fa-IR')} تومان
                           </p>
                        </div>
                     ) : null}

                     <div className="flex items-end justify-between">
                        <div className="flex items-center gap-1.5">
                           <IconButton
                              className="!border !border-solid !border-customOrange"
                              sx={{ width: '22px', height: '22px' }}
                              onClick={addToBasketHandler}
                              disabled={
                                 addToBasketIsMutating ||
                                 removeFromBasketIsMutating ||
                                 productDetail?.stock === basketQuantity ||
                                 productDetail?.stock === 0
                              }
                           >
                              <AddIcon color="customOrange" className="!text-sm" />
                           </IconButton>
                           <p className="pt-1.5 font-rokhFaNum text-xl font-bold">
                              {addToBasketIsMutating || removeFromBasketIsMutating ? '...' : basketQuantity || 0}
                           </p>
                           <IconButton
                              className={basketQuantity !== 1 ? '!border !border-solid !border-textGray' : ''}
                              sx={{ width: '22px', height: '22px' }}
                              onClick={removeFromBasketHandler}
                              disabled={addToBasketIsMutating || removeFromBasketIsMutating || !basketQuantity}
                           >
                              {basketQuantity === 1 ? (
                                 <DeleteOutlineOutlinedIcon />
                              ) : (
                                 <RemoveIcon color="textGray" className="!text-sm" />
                              )}
                           </IconButton>
                        </div>
                        <div className="mt-2 flex items-center gap-1 rounded bg-[#C1F7EE] px-3 pt-1 text-lg font-bold text-[#139983] customMd:text-xl">
                           <p>{Number(productDetail?.price).toLocaleString('fa-IR')}</p>
                           <p>تومان</p>
                        </div>
                     </div>

                     <div className="mt-5 hidden customMd:block">
                        <LoadingButton
                           variant="contained"
                           size="large"
                           color="customOrange2"
                           loading={addToBasketIsMutating || removeFromBasketIsMutating}
                           fullWidth
                           className="!rounded-10 !p-2"
                           onClick={addToBasketHandler}
                           disabled={productDetail?.stock === basketQuantity || productDetail?.stock === 0}
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
                  {commentsIsLoading ? (
                     <div className="flex items-center justify-center">
                        <CircularProgress color="customOrange2" />
                     </div>
                  ) : showAddCommentSection ? (
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
                           <AddComment
                              setShowAddCommentSection={setShowAddCommentSection}
                              productDetail={productDetail}
                              commentsMutate={commentsMutate}
                           />
                        </div>
                     </>
                  ) : commentsData?.[Number(commentsData?.length) - 1]?.total_objects === 0 ? (
                     <div className="flex h-full flex-col items-center justify-center">
                        <div className="my-8 w-36">
                           <Image className="size-full" src={addCommentPic} alt="add comment" />
                        </div>
                        <p className="text-sm text-[#626E94]">نظری برای این محصول ثبت نشده است</p>
                        <p className="mb-8 mt-2 text-lg font-bold">همین الان نظر خود را ثبت کنید</p>

                        <Button
                           variant="contained"
                           size="small"
                           color="customOrange2"
                           className="w-[210px] !rounded-10 !p-2"
                           onClick={() => setShowAddCommentSection(true)}
                        >
                           <div className="flex w-full items-center justify-between">
                              <p className="pl-7">ثبت نظر جدید</p>

                              <OutboxOutlinedIcon className="rounded-xl bg-white p-1 text-customOrange" />
                           </div>
                        </Button>
                     </div>
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
                           {commentsData?.map(item =>
                              item?.result?.map(innerItem => (
                                 <Comment key={innerItem?.id} detail={innerItem} commentsMutate={commentsMutate} />
                              ))
                           )}

                           {commentsData?.length !== commentsData?.[Number(commentsData?.length) - 1]?.total_pages && (
                              <div className="flex justify-center">
                                 <RtlProvider>
                                    <LoadingButton
                                       color="crimson"
                                       endIcon={<KeyboardArrowDownOutlinedIcon />}
                                       onClick={() => commentsSetSize(commentsSize + 1)}
                                       loading={commentsIsValidating}
                                    >
                                       مشاهده کامنت های بیشتر
                                    </LoadingButton>
                                 </RtlProvider>
                              </div>
                           )}
                        </div>
                     </>
                  )}
               </Grid>
               <Grid item xs={12} md={5}>
                  <div className="hidden flex-col gap-5 customMd:flex">
                     <div>
                        <Image src={amazingPic} alt="amazing" className="size-full" priority />
                     </div>
                     <div>
                        <Image src={amazingPic} alt="amazing" className="size-full" priority />
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
            <Link
               href={`/category/${productDetail?.category}/1`}
               className="hidden items-center gap-2 text-sm text-textGray customMd:flex"
            >
               مشاهده همه
               <KeyboardArrowLeftIcon fontSize="small" />
            </Link>
         </div>

         {categoryItems?.length ? (
            <div className="mt-5 flex flex-wrap items-center justify-center gap-5">
               {categoryItems?.slice(0, 6)?.map(item => (
                  <FoodCardFirstTemplate className="w-[200px]" key={item?.id} detail={item} />
               ))}
            </div>
         ) : (
            <p className="rounded-10 bg-buttonPink p-6 text-center font-bold">محصول مشابه ای موجود نیست</p>
         )}
      </main>
   );
}

export default ProductDetail;

export async function getServerSideProps(context) {
   try {
      const productDetail = await axiosInstance(`store/products/get_update_destroy/`, {
         params: {
            title: context?.params?.productName,
         },
      }).then(res => res.data);

      const categoryItems = await axiosInstance(`store/products/list_create/`, {
         params: {
            category: productDetail?.category,
         },
      }).then(res => res.data.result?.filter(item => item?.title !== productDetail?.title));

      return {
         props: {
            productDetail,
            categoryItems,
         },
      };
   } catch (error) {
      return {
         props: {
            error: error?.message,
         },
      };
   }
}
