import Head from 'next/head';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Redux
import { useSelector } from 'react-redux';

// MUI
import { Button, CircularProgress, Grid, IconButton, Tooltip } from '@mui/material';

// Icons
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import PercentIcon from '@mui/icons-material/Percent';
import AddIcon from '@mui/icons-material/Add';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import FastfoodIcon from '@mui/icons-material/Fastfood';

// Assets
import noImage from '@/assets/images/noImage.png';

// Components
import AdminLayout from '@/components/layout/admin-layout/admin-layout';
import Table from '@/components/templates/table/table';
import ConfirmModal from '@/components/templates/confirm-modal/confirm-modal';
import AddEditProductModal from '@/components/pages/adminPanel/addEditProductModal/addEditProductModal';
import AddEditCategoryModalList from '@/components/pages/adminPanel/addEditCategoryModalList/addEditCategoryModalList';

// Apis
import useGetProducts from '@/apis/pAdmin/products/useGetProducts';
import useCategories from '@/apis/categories/useCategories';
import useDeleteProduct from '@/apis/pAdmin/products/useDeleteProduct';

// Utils
import permissions from '@/utils/permission';

function Products() {
   const { back, pathname } = useRouter();
   const [showDeleteProductModal, setShowDeleteProductModal] = useState(false);
   const [showAddEditProductModal, setShowAddEditProductModal] = useState(false);
   const [showAddEditCategoryModal, setShowAddEditCategoryModal] = useState(false);
   const [chosenProductForDelete, setChosenProductForDelete] = useState();
   const [chosenProductForEdit, setChosenProductForEdit] = useState();
   const [chosenCategory, setChosenCategory] = useState('');
   const [pageStatus, setPageStatus] = useState(1);
   const [countValue, setCountValue] = useState(6);

   const userInfo = useSelector(state => state?.userInfoReducer);
   const { data: categoryList, isLoading: categoryIsLoading } = useCategories();
   const {
      data: productsData,
      isLoading: productIsLoading,
      mutate: productsMutate,
   } = useGetProducts(pageStatus, countValue, chosenCategory);
   const { trigger: deleteProductTrigger, isMutating: deleteProductIsMutating } = useDeleteProduct(productsMutate);

   const closeAddEditProductModalHandler = () => {
      setShowAddEditProductModal(false);
      setChosenProductForEdit();
   };

   const closeDeleteProductModalHandler = () => {
      setShowDeleteProductModal(false);
      setChosenProductForDelete();
   };

   const deleteProductHandler = () => {
      deleteProductTrigger(chosenProductForDelete, {
         onSuccess: () => closeDeleteProductModalHandler(),
      });
   };

   useEffect(() => {
      if (userInfo?.phone_number && !userInfo?.is_admin) {
         back();
         toast.warn('شما مجاز به دسترسی به این صفحه نیستید');
      }
   }, [userInfo, pathname]);

   const columns = [
      { id: 1, title: 'ردیف', key: 'index' },
      {
         id: 2,
         title: 'نام غذا',
         key: 'title',
         renderCell: data => (
            <div className="flex items-center gap-1">
               <div className="relative size-9 rounded-full bg-[#f5f8fc]">
                  <Image src={data.cover || noImage} alt="product" className="rounded-full object-cover" fill />
               </div>
               <p>{data.title}</p>
            </div>
         ),
      },
      {
         id: 3,
         title: 'موجودی',
         key: 'stock',
         renderCell: data => <p className="font-rokhFaNum">{data?.stock} عدد</p>,
      },
      { id: 4, title: 'دسته بندی', key: 'category' },
      {
         id: 5,
         title: 'قیمت',
         key: 'before_discount_price',
         renderCell: data => <p>{Number(data.before_discount_price).toLocaleString()} تومان</p>,
      },
      {
         id: 6,
         title: 'عملیات',
         key: 'actions',
         renderCell: data => (
            <div className="flex items-center gap-2">
               <Tooltip
                  title={
                     <p
                        className={`flex items-center justify-center ${
                           data?.percentage ? 'rounded-full bg-green-500 p-0.5 text-sm' : 'text-base text-black'
                        }`}
                     >
                        <PercentIcon fontSize="inherit" />
                     </p>
                  }
               >
                  <IconButton size="small">
                     <MoreVertOutlinedIcon fontSize="small" />
                  </IconButton>
               </Tooltip>

               <IconButton
                  size="small"
                  onClick={() => {
                     setChosenProductForEdit(data);
                     setShowAddEditProductModal(true);
                  }}
                  disabled={!userInfo?.is_super_admin && !userInfo?.permissions?.includes(permissions?.PRODUCT?.PATCH)}
               >
                  <BorderColorOutlinedIcon fontSize="inherit" />
               </IconButton>
               <IconButton
                  size="small"
                  onClick={() => {
                     setChosenProductForDelete(data?.title);
                     setShowDeleteProductModal(true);
                  }}
                  disabled={!userInfo?.is_super_admin && !userInfo?.permissions?.includes(permissions?.PRODUCT?.DELETE)}
               >
                  <DeleteOutlineOutlinedIcon fontSize="small" />
               </IconButton>
            </div>
         ),
      },
   ];

   return (
      <AdminLayout>
         <Head>
            <title>مادر</title>
         </Head>

         <div className="customLg:flex customLg:gap-5">
            {categoryIsLoading ? (
               <div className="mt-10 flex w-full items-center justify-center">
                  <CircularProgress color="customOrange" />
               </div>
            ) : (
               <>
                  <div className="shrink-0 basis-[286px] rounded-2xl bg-white p-5">
                     <div className="flex items-end gap-2 font-bold">
                        <LibraryBooksOutlinedIcon color="textGray" />
                        <p>دسته بندی غذاها</p>
                     </div>
                     <div className="my-5">
                        <Button
                           variant="contained"
                           fullWidth
                           className="!min-w-0 !justify-normal !rounded-10 !bg-[#F7F9FC] !px-0 !font-bold !text-[#713802]"
                           onClick={() => setShowAddEditCategoryModal(true)}
                        >
                           <div className="flex w-full items-center justify-between px-1 py-3 !text-[#713802]">
                              <div className="flex items-center gap-2">
                                 <PlaylistAddIcon />
                                 <p>افزودن دسته بندی</p>
                              </div>
                              <AddIcon />
                           </div>
                        </Button>
                     </div>
                     <div>
                        <Grid container spacing={2}>
                           <Grid item xs={6} sm={4} lg={12}>
                              <Button
                                 className="!flex !min-w-0 !items-start !gap-1 !p-0 !text-xs customMd:!text-sm"
                                 color="black"
                                 onClick={() => {
                                    setChosenCategory('');
                                    setPageStatus(1);
                                 }}
                              >
                                 <div
                                    className={`size-4 shrink-0 rounded-full ${
                                       !chosenCategory
                                          ? 'border-[3px] border-solid border-[#E4EAF0] bg-customOrange'
                                          : 'bg-[#E4EAF0]'
                                    }`}
                                 />
                                 <p className={!chosenCategory ? 'font-bold text-customOrange' : ''}>کلیه غذاها</p>
                              </Button>
                           </Grid>

                           {categoryList?.map(item => (
                              <Grid item xs={6} sm={4} lg={12} key={item?.id}>
                                 <Button
                                    className="!flex !min-w-0 !items-start !gap-1 !p-0 !text-xs customMd:!text-sm"
                                    color="black"
                                    onClick={() => {
                                       setChosenCategory(item.title);
                                       setPageStatus(1);
                                    }}
                                 >
                                    <div
                                       className={`size-4 shrink-0 rounded-full ${
                                          chosenCategory === item.title
                                             ? 'border-[3px] border-solid border-[#E4EAF0] bg-customOrange'
                                             : 'bg-[#E4EAF0]'
                                       }`}
                                    />
                                    <p className={chosenCategory === item.title ? 'font-bold text-customOrange' : ''}>
                                       {item?.title}
                                    </p>
                                 </Button>
                              </Grid>
                           ))}
                        </Grid>
                     </div>
                  </div>

                  <div className="mt-5 rounded-2xl bg-white p-5 customLg:mt-0 customLg:w-calculated">
                     <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2 font-bold">
                           <FastfoodIcon fontSize="small" />
                           <p>لیست غذاها</p>
                        </div>

                        <Button
                           startIcon={<AddIcon />}
                           onClick={() => setShowAddEditProductModal(true)}
                           variant="contained"
                           className="!rounded-10 !text-white"
                           color="customYellow"
                           disabled={
                              !userInfo?.is_super_admin && !userInfo?.permissions?.includes(permissions?.PRODUCT?.POST)
                           }
                        >
                           افزودن غذا
                        </Button>
                     </div>
                     <div className="mt-2">
                        <Table
                           columns={columns}
                           rows={productsData?.result}
                           pageStatus={pageStatus}
                           setPageStatus={setPageStatus}
                           totalPages={productsData?.total_pages}
                           totalObjects={productsData?.total_objects}
                           loading={productIsLoading}
                           countValue={countValue}
                           setCountValue={setCountValue}
                        />
                     </div>
                  </div>
               </>
            )}
         </div>

         <ConfirmModal
            open={showDeleteProductModal}
            closeModal={closeDeleteProductModalHandler}
            title="آیا از حذف محصول مطمئن هستید ؟"
            confirmHandler={deleteProductHandler}
            confirmLoading={deleteProductIsMutating}
         />

         <AddEditProductModal
            show={showAddEditProductModal}
            onClose={closeAddEditProductModalHandler}
            isEdit={!!chosenProductForEdit}
            detail={chosenProductForEdit}
            productsMutate={productsMutate}
         />

         <AddEditCategoryModalList show={showAddEditCategoryModal} onClose={() => setShowAddEditCategoryModal(false)} />
      </AdminLayout>
   );
}

export default Products;

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
