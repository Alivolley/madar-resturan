import { useState } from 'react';
import Image from 'next/image';

// Redux
import { useSelector } from 'react-redux';

// MUI
import { IconButton, Rating } from '@mui/material';

// Icons
import QuickreplyOutlinedIcon from '@mui/icons-material/QuickreplyOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

// Assets
import userProfilePic from '../../../../assets/images/userProfile.png';

// Styles
import CommentStyle from './comment.style';

// Components
import ConfirmModal from '@/components/templates/confirm-modal/confirm-modal';
import ReplyModal from '../reply-modal/reply-modal';

// Apis
import useDeleteComment from '@/apis/comments/useDeleteComment';

// Utils
import permissions from '@/utils/permission';

function Comment({ detail, commentsMutate }) {
   const [showReplyModal, setShowReplyModal] = useState(false);
   const [showDeleteCommentModal, setShowDeleteCommentModal] = useState(false);
   const userInfo = useSelector(state => state?.userInfoReducer);

   const { trigger: deleteCommentTrigger, isMutating: deleteCommentIsMutating } = useDeleteComment();

   const deleteCommentHandler = () => {
      deleteCommentTrigger(detail?.id, {
         onSuccess: () => {
            setShowDeleteCommentModal(false);
            commentsMutate();
         },
      });
   };

   return (
      <CommentStyle className="border-b border-solid border-[#E4EAF0] pb-8">
         <div>
            <div className="flex justify-between">
               <div className="flex gap-2 customMd:items-center">
                  <div className="relative size-10 rounded-full border border-solid border-gray-400 customMd:size-14">
                     <Image
                        src={detail?.user_image || userProfilePic}
                        className="size-full rounded-full"
                        alt="user profile"
                        fill
                     />
                  </div>
                  <div className="flex flex-col gap-1">
                     <p className="font-rokhFaNum text-10 text-[#626E94]">{detail?.elapsed_time}</p>
                     <div>
                        <Rating value={Number(detail?.score)} max={Number(detail?.score)} size="small" readOnly />
                     </div>
                     <p className="font-bold">{detail?.user}</p>
                  </div>
               </div>

               {userInfo?.is_admin && (
                  <div className="flex items-center gap-2">
                     <IconButton
                        color="customOrange"
                        className="!bg-buttonPink2"
                        onClick={() => setShowReplyModal(true)}
                        disabled={
                           !userInfo?.is_super_admin &&
                           !userInfo?.permissions?.includes(permissions?.REPLY_ON_COMMENT?.PATCH)
                        }
                     >
                        <QuickreplyOutlinedIcon className="!text-base" />
                     </IconButton>
                     <IconButton
                        color="customOrange"
                        className="!bg-buttonPink2"
                        onClick={() => setShowDeleteCommentModal(true)}
                        disabled={
                           !userInfo?.is_super_admin &&
                           !userInfo?.permissions?.includes(permissions?.DELETE_COMMENT?.DELETE)
                        }
                     >
                        <DeleteForeverOutlinedIcon className="!text-base" />
                     </IconButton>
                  </div>
               )}
            </div>

            <div className="mb-7 mt-9 flex flex-wrap items-center gap-2 rounded-10 bg-[#FEF1E4] p-2 customMd:gap-5">
               <p className="rounded-lg bg-[#FEE2C9] px-3 pb-0.5 pt-1.5 text-xs text-[#AA5403] customMd:px-7 customMd:text-sm">
                  {detail?.product}
               </p>
            </div>
            <pre className="whitespace-normal text-base text-textGray">{detail?.message}</pre>
         </div>
         {detail?.reply_message && (
            <div className="relative mr-5 mt-6 rounded-b-10 bg-[#391C01] p-5 text-white customXs:mr-16 customMd:mr-24">
               <div className="flex gap-3">
                  <div className="relative size-10 shrink-0 rounded-full border border-solid border-gray-400 customMd:size-14">
                     <Image
                        src={detail?.admin_image || userProfilePic}
                        className="size-full rounded-full"
                        alt="admin profile"
                        fill
                     />
                  </div>
                  <div>
                     <div className="flex items-center gap-2">
                        <p className="whitespace-nowrap text-sm font-bold">پاسخ مدیر رستوران</p>
                        <p className="font-rokhFaNum text-[8px]">{detail?.reply_elapsed_time}</p>
                     </div>
                     <pre className="mt-4 whitespace-normal text-sm text-[#BDCEDE]">{detail?.reply_message}</pre>
                  </div>
               </div>
               <div className="absolute -top-3 right-0 h-4 w-5 rounded-tr-sm bg-[#391C01]" id="responseShape" />
            </div>
         )}

         <ConfirmModal
            open={showDeleteCommentModal}
            closeModal={() => setShowDeleteCommentModal(false)}
            title="آیا از حذف این نظر مطمئن هستید ؟"
            confirmHandler={deleteCommentHandler}
            confirmLoading={deleteCommentIsMutating}
         />

         <ReplyModal
            open={showReplyModal}
            closeModal={() => setShowReplyModal(false)}
            detail={detail}
            commentsMutate={commentsMutate}
         />
      </CommentStyle>
   );
}

export default Comment;
