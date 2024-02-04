import Head from 'next/head';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Redux
import { useSelector } from 'react-redux';

// MUI
import { Button, Grid, IconButton } from '@mui/material';

// Icons
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import QrCodeOutlinedIcon from '@mui/icons-material/QrCodeOutlined';
import AddIcon from '@mui/icons-material/Add';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

// Assets
import userProfilePic from '@/assets/images/userProfile.png';

// Components
import AdminLayout from '@/components/layout/admin-layout/admin-layout';
import Table from '@/components/templates/table/table';
import AddEditUserModal from '@/components/pages/adminPanel/addEditUserModal/addEditUserModal';
import ConfirmModal from '@/components/templates/confirm-modal/confirm-modal';
import UserDetailModal from '@/components/pages/adminPanel/userDetailModal/userDetailModal';

// Apis
import useGetAllUsers from '@/apis/pAdmin/users/useGetAllUsers';
import useBlockUser from '@/apis/pAdmin/users/useBlockUser';

// Utils
// import permissions from '@/utils/permission';

function Users() {
   const [chosenCategory, setChosenCategory] = useState('');
   const [pageStatus, setPageStatus] = useState(1);
   const [countValue, setCountValue] = useState(6);
   const [showAddEditUserModal, setShowAddEditUserModal] = useState(false);
   const [chosenUserForEdit, setChosenUserForEdit] = useState();
   const [showBlockUserModal, setShowBlockUserModal] = useState(false);
   const [chosenUserForBlock, setChosenUserForBlock] = useState();
   const [showUserDetailModal, setShowUserDetailModal] = useState(false);
   const [chosenUserForDetail, setChosenUserForDetail] = useState();

   const { back, pathname } = useRouter();
   const userInfo = useSelector(state => state?.userInfoReducer);

   const {
      data: usersData,
      isLoading: usersIsLoading,
      mutate: usersMutate,
   } = useGetAllUsers(pageStatus, countValue, chosenCategory);
   const { trigger: blockTrigger, isMutating: blockIsMutating } = useBlockUser();

   const closeAddEditProductModalHandler = () => {
      setShowAddEditUserModal(false);
      setChosenUserForEdit();
   };

   const closeBlockUserModal = () => {
      setShowBlockUserModal(false);
      setChosenUserForBlock();
   };

   const closeUserDetailModal = () => {
      setShowUserDetailModal(false);
      setChosenUserForDetail();
   };

   const blockUnBlockHandler = () => {
      blockTrigger(
         { phone_number: chosenUserForBlock?.phone_number, active: chosenUserForBlock?.role === 'blocked' },
         {
            onSuccess: () => {
               usersMutate();
               closeBlockUserModal();
            },
         }
      );
   };

   useEffect(() => {
      if (chosenUserForDetail) {
         const founded = usersData?.result?.find(item => item?.phone_number === chosenUserForDetail?.phone_number);
         setChosenUserForDetail(founded);
      }
   }, [usersData]);

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
         title: 'نام کابر',
         key: 'title',
         renderCell: data => (
            <div className="flex items-center justify-center gap-1">
               <div className="relative size-9 rounded-full bg-[#f5f8fc]">
                  <Image src={data.image || userProfilePic} alt="product" className="rounded-full object-cover" fill />
               </div>
               <p>{data.name}</p>
            </div>
         ),
      },
      {
         id: 3,
         title: 'شماره تلفن',
         key: 'phone_number',
         renderCell: data => (
            <p className={`text-xs tracking-[1px] ${data?.role === 'blocked' ? 'text-red-500' : ''}`}>
               {data.phone_number}
            </p>
         ),
      },

      {
         id: 4,
         title: 'ماهیت',
         key: 'role',
         renderCell: data =>
            data?.role === 'super_admin' ? (
               'ادمین اصلی'
            ) : data?.role === 'admin' ? (
               'ادمین انتخاب شده'
            ) : data?.role === 'normal_user' ? (
               'مشتری'
            ) : data?.role === 'blocked' ? (
               <p className="font-bold text-red-500">بلاک شده</p>
            ) : null,
      },

      {
         id: 5,
         title: 'عملیات',
         key: 'actions',
         renderCell: data => (
            <div className="flex items-center justify-center gap-2">
               <IconButton
                  size="small"
                  onClick={() => {
                     setChosenUserForEdit(data);
                     setShowAddEditUserModal(true);
                  }}
                  // disabled={!userInfo?.is_super_admin}
               >
                  <PersonAddAltOutlinedIcon fontSize="inherit" />
               </IconButton>

               <IconButton
                  size="small"
                  onClick={() => {
                     setChosenUserForDetail(data);
                     setShowUserDetailModal(true);
                  }}
                  // disabled={
                  //    !userInfo?.is_super_admin && !userInfo?.permissions?.includes(permissions?.EDIT_USERS_INFO?.PATCH)
                  // }
               >
                  <BorderColorOutlinedIcon fontSize="inherit" />
               </IconButton>

               <IconButton
                  size="small"
                  onClick={() => {
                     setChosenUserForBlock(data);
                     setShowBlockUserModal(true);
                  }}
                  // disabled={
                  //    !userInfo?.is_super_admin && !userInfo?.permissions?.includes(permissions?.BLOCK_USERS?.PATCH)
                  // }
               >
                  {data?.role === 'blocked' ? (
                     <RemoveCircleIcon fontSize="small" color="error" />
                  ) : (
                     <BlockOutlinedIcon fontSize="small" />
                  )}
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
            <div className="shrink-0 basis-[286px] rounded-2xl bg-white p-5">
               <div className="mb-7 flex items-center gap-1.5">
                  <PeopleAltOutlinedIcon color="textColor" fontSize="small" />
                  <p className="font-bold">دسته بندی کاربران</p>
               </div>

               <div className="my-5">
                  <Grid container spacing={{ xs: 2, lg: 4 }}>
                     <Grid item xs={12} sm={4} lg={12}>
                        <Button
                           className="!flex !min-w-0 !items-center !gap-1 !p-0 !text-xs customMd:!text-sm"
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
                           <p>همه ی کاربران</p>
                        </Button>
                     </Grid>
                     <Grid item xs={12} sm={4} lg={12}>
                        <Button
                           className="!flex !min-w-0 !items-center !gap-1 !p-0 !text-xs customMd:!text-sm"
                           color="black"
                           onClick={() => {
                              setChosenCategory('super_admin');
                              setPageStatus(1);
                           }}
                        >
                           <div
                              className={`size-4 shrink-0 rounded-full ${
                                 chosenCategory === 'super_admin'
                                    ? 'border-[3px] border-solid border-[#E4EAF0] bg-customOrange'
                                    : 'bg-[#E4EAF0]'
                              }`}
                           />
                           <p>ادمین های اصلی</p>
                        </Button>
                     </Grid>
                     <Grid item xs={12} sm={4} lg={12}>
                        <Button
                           className="!flex !min-w-0 !items-center !gap-1 !p-0 !text-xs customMd:!text-sm"
                           color="black"
                           onClick={() => {
                              setChosenCategory('admin');
                              setPageStatus(1);
                           }}
                        >
                           <div
                              className={`size-4 shrink-0 rounded-full ${
                                 chosenCategory === 'admin'
                                    ? 'border-[3px] border-solid border-[#E4EAF0] bg-customOrange'
                                    : 'bg-[#E4EAF0]'
                              }`}
                           />
                           <p>ادمین های انتخاب شده</p>
                        </Button>
                     </Grid>
                     <Grid item xs={12} sm={4} lg={12}>
                        <Button
                           className="!flex !min-w-0 !items-center !gap-1 !p-0 !text-xs customMd:!text-sm"
                           color="black"
                           onClick={() => {
                              setChosenCategory('normal_user');
                              setPageStatus(1);
                           }}
                        >
                           <div
                              className={`size-4 shrink-0 rounded-full ${
                                 chosenCategory === 'normal_user'
                                    ? 'border-[3px] border-solid border-[#E4EAF0] bg-customOrange'
                                    : 'bg-[#E4EAF0]'
                              }`}
                           />
                           <p>مشتری</p>
                        </Button>
                     </Grid>
                     <Grid item xs={12} sm={4} lg={12}>
                        <Button
                           className="!flex !min-w-0 !items-center !gap-1 !p-0 !text-xs customMd:!text-sm"
                           color="black"
                           onClick={() => {
                              setChosenCategory('blocked');
                              setPageStatus(1);
                           }}
                        >
                           <div
                              className={`size-4 shrink-0 rounded-full ${
                                 chosenCategory === 'blocked'
                                    ? 'border-[3px] border-solid border-[#E4EAF0] bg-customOrange'
                                    : 'bg-[#E4EAF0]'
                              }`}
                           />
                           <p>بلاک شده</p>
                        </Button>
                     </Grid>
                  </Grid>
               </div>
            </div>

            <div className="mt-5 rounded-2xl bg-white p-5 customLg:mt-0 customLg:w-calculated">
               <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-end gap-2 font-bold">
                     <QrCodeOutlinedIcon color="textColor" fontSize="small" />
                     <p className="font-bold">لیست کاربران</p>
                  </div>

                  <Button
                     startIcon={<AddIcon />}
                     variant="contained"
                     className="!rounded-10 !text-white"
                     color="customYellow"
                     onClick={() => setShowAddEditUserModal(true)}
                     // disabled={!userInfo?.is_super_admin}
                  >
                     افزودن کاربر
                  </Button>
               </div>

               <div className="mt-2">
                  <Table
                     columns={columns}
                     rows={usersData?.result}
                     pageStatus={pageStatus}
                     setPageStatus={setPageStatus}
                     totalPages={usersData?.total_pages}
                     totalObjects={usersData?.total_objects}
                     loading={usersIsLoading}
                     countValue={countValue}
                     setCountValue={setCountValue}
                  />
               </div>
            </div>
         </div>

         <AddEditUserModal
            show={showAddEditUserModal}
            onClose={closeAddEditProductModalHandler}
            isEdit={!!chosenUserForEdit}
            detail={chosenUserForEdit}
            usersMutate={usersMutate}
         />

         <UserDetailModal
            show={showUserDetailModal}
            onClose={closeUserDetailModal}
            detail={chosenUserForDetail}
            usersMutate={usersMutate}
         />

         <ConfirmModal
            open={showBlockUserModal}
            closeModal={closeBlockUserModal}
            title={
               chosenUserForBlock?.role !== 'blocked'
                  ? 'از بلاک کردن این کاربر مطمئن هستید ؟'
                  : 'از فعال کردن این کاربر مطمئن هستید ؟'
            }
            confirmHandler={blockUnBlockHandler}
            confirmLoading={blockIsMutating}
         />
      </AdminLayout>
   );
}

export default Users;

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
