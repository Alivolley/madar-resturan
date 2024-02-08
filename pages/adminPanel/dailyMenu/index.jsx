import Head from 'next/head';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Redux
import { useSelector } from 'react-redux';

// MUI
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Button,
   Checkbox,
   CircularProgress,
   FormControlLabel,
   FormGroup,
   IconButton,
   Tooltip,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import PercentIcon from '@mui/icons-material/Percent';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

// Assets
import noImage from '@/assets/images/noImage.png';

// Components
import AdminLayout from '@/components/layout/admin-layout/admin-layout';
import Table from '@/components/templates/table/table';
import ConfirmModal from '@/components/templates/confirm-modal/confirm-modal';
import EditStockModal from '@/components/pages/adminPanel/editStockModal/editStockModal';

// Apis
import useGetDailyMenu from '@/apis/pAdmin/dailyMenu/useGetDailyMenu';
import useRemoveDailyMenu from '@/apis/pAdmin/dailyMenu/useRemoveDailyMenu';
import useDeleteFromMenu from '@/apis/pAdmin/dailyMenu/useDeleteFromMenu';
import useGetCategoryFull from '@/apis/pAdmin/dailyMenu/useGetCategoryFull';
import useAddMenu from '@/apis/pAdmin/dailyMenu/useAddMenu';
import useGetFullDailyMenu from '@/apis/pAdmin/dailyMenu/useGetFullDailyMenu';

// Utils
import permissions from '@/utils/permission';

function DailyMenu() {
   const [chosenProductForDelete, setChosenProductForDelete] = useState();
   const [chosenProductForEdit, setChosenProductForEdit] = useState();
   const [showEditStockModal, setShowEditStockModal] = useState(false);
   const [showDeleteProductModal, setShowDeleteProductModal] = useState(false);
   const [showRemoveMenuModal, setShowRemoveMenuModal] = useState(false);
   const [pageStatus, setPageStatus] = useState(1);
   const [countValue, setCountValue] = useState(6);
   const [chosenFoods, setChosenFoods] = useState([]);

   const { back, pathname } = useRouter();
   const userInfo = useSelector(state => state?.userInfoReducer);

   const { data: categoryList, isLoading: categoryIsLoading } = useGetCategoryFull();
   const { data: fullDailyMenuList, isLoading: fullDailyMenuIsLoading } = useGetFullDailyMenu();
   const {
      data: dailyMenuList,
      isLoading: dailyMenuIsLoading,
      mutate: dailyMenuMutate,
   } = useGetDailyMenu(pageStatus, countValue);
   const { trigger: removeDailyMenuTrigger, isMutating: removeDailyMenuIsMutating } =
      useRemoveDailyMenu(dailyMenuMutate);
   const { trigger: deleteMenuItemTrigger, isMutating: deleteMenuItemIsMutating } = useDeleteFromMenu(dailyMenuMutate);
   const { trigger: addMenuTrigger, isMutating: addMenuIsMutating } = useAddMenu();

   useEffect(() => {
      if (userInfo?.phone_number && !userInfo?.is_admin) {
         back();
         toast.warn('شما مجاز به دسترسی به این صفحه نیستید');
      }
   }, [userInfo, pathname]);

   useEffect(() => {
      if (fullDailyMenuList && dailyMenuList && categoryList) {
         const newData = fullDailyMenuList?.map(item => ({ id: item?.id, title: item?.title }));
         setChosenFoods(newData);
      }
   }, [fullDailyMenuList, dailyMenuList, categoryList]);

   const closeEditStockModalHandler = () => {
      setShowEditStockModal(false);
      setChosenProductForEdit();
   };

   const closeDeleteProductModalHandler = () => {
      setShowDeleteProductModal(false);
      setChosenProductForDelete();
   };

   const deleteProductHandler = () => {
      deleteMenuItemTrigger(
         { deleted_product_id: chosenProductForDelete?.id },
         {
            onSuccess: () => closeDeleteProductModalHandler(),
         }
      );
   };

   const removeDailyMenuHandler = () => {
      removeDailyMenuTrigger(null, {
         onSuccess: () => setShowRemoveMenuModal(false),
      });
   };

   const addMenuHandler = () => {
      const formData = new FormData();
      chosenFoods?.forEach(item => formData?.append('product_ids', item?.id));

      addMenuTrigger(formData, {
         onSuccess: () => dailyMenuMutate(),
      });
   };

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
                     setShowEditStockModal(true);
                  }}
                  disabled={
                     !userInfo?.is_super_admin && !userInfo?.permissions?.includes(permissions?.TODAY_MENU?.PATCH)
                  }
               >
                  <BorderColorOutlinedIcon fontSize="inherit" />
               </IconButton>
               <IconButton
                  size="small"
                  onClick={() => {
                     setChosenProductForDelete(data);
                     setShowDeleteProductModal(true);
                  }}
                  disabled={
                     !userInfo?.is_super_admin && !userInfo?.permissions?.includes(permissions?.TODAY_MENU?.DELETE)
                  }
               >
                  <PlaylistRemoveIcon fontSize="small" />
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
            {categoryIsLoading || fullDailyMenuIsLoading ? (
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

                     <div className="mt-6 max-h-[450px] overflow-auto">
                        {categoryList?.map(item => (
                           <Accordion sx={{ boxShadow: 'none' }} key={item?.id}>
                              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                 <p className="text-sm font-bold">{item?.title}</p>
                              </AccordionSummary>
                              <AccordionDetails>
                                 <FormGroup>
                                    {item?.products?.map(product => (
                                       <FormControlLabel
                                          key={product?.id}
                                          control={
                                             <Checkbox
                                                size="small"
                                                color="success"
                                                checked={
                                                   !!chosenFoods?.find(
                                                      prevProductItem => prevProductItem?.id === product?.id
                                                   )
                                                }
                                             />
                                          }
                                          label={
                                             <p className="font-rokhRegular text-xs text-[#98A2B2]">{product?.title}</p>
                                          }
                                          onChange={() => {
                                             setChosenFoods(prevProduct => {
                                                const hasExist = prevProduct?.find(
                                                   prevProductItem => prevProductItem?.id === product?.id
                                                );
                                                if (hasExist) {
                                                   const filtered = prevProduct?.filter(
                                                      prevProductItem => prevProductItem?.id !== product?.id
                                                   );
                                                   return filtered;
                                                }
                                                return [...prevProduct, product];
                                             });
                                          }}
                                          value={
                                             !!chosenFoods?.find(prevProductItem => prevProductItem?.id === product?.id)
                                          }
                                       />
                                    ))}
                                 </FormGroup>
                              </AccordionDetails>
                           </Accordion>
                        ))}
                     </div>

                     <div className="mt-7">
                        <LoadingButton
                           onClick={addMenuHandler}
                           variant="contained"
                           className="!rounded-10 !py-2 !text-white"
                           color="customYellow"
                           fullWidth
                           startIcon={<AddIcon />}
                           loading={addMenuIsMutating}
                           disabled={
                              !userInfo?.is_super_admin &&
                              !userInfo?.permissions?.includes(permissions?.TODAY_MENU?.PATCH)
                           }
                        >
                           افزودن به منوی روز
                        </LoadingButton>
                     </div>
                  </div>
                  <div className="mt-5 rounded-2xl bg-white p-5 customLg:mt-0 customLg:w-calculated">
                     <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2 font-bold">
                           <MenuBookIcon fontSize="small" />
                           <p>منوی روز</p>
                        </div>

                        <Button
                           onClick={() => setShowRemoveMenuModal(true)}
                           variant="contained"
                           className="!rounded-10 !text-white"
                           color="customYellow"
                           disabled={
                              !userInfo?.is_super_admin &&
                              !userInfo?.permissions?.includes(permissions?.TODAY_MENU?.DELETE)
                           }
                        >
                           خالی کردن منو
                        </Button>
                     </div>
                     <div className="mt-5">
                        <Table
                           columns={columns}
                           rows={dailyMenuList?.result}
                           pageStatus={pageStatus}
                           setPageStatus={setPageStatus}
                           totalPages={dailyMenuList?.total_pages}
                           totalObjects={dailyMenuList?.total_objects}
                           loading={dailyMenuIsLoading}
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
            title="آیا از حذف این غذا از منو مطمئن هستید ؟"
            confirmHandler={deleteProductHandler}
            confirmLoading={deleteMenuItemIsMutating}
         />

         <ConfirmModal
            open={showRemoveMenuModal}
            closeModal={() => setShowRemoveMenuModal(false)}
            title="آیا از پاک کردن منو مطمئن هستید ؟"
            confirmHandler={removeDailyMenuHandler}
            confirmLoading={removeDailyMenuIsMutating}
         />

         <EditStockModal
            show={showEditStockModal}
            onClose={closeEditStockModalHandler}
            detail={chosenProductForEdit}
            dailyMenuMutate={dailyMenuMutate}
         />
      </AdminLayout>
   );
}

export default DailyMenu;

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
