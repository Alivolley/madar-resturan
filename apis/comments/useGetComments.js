import useSWRInfinite from 'swr/infinite';
import axiosInstance from '@/configs/axiosInstance';

const getKey = pageIndex => {
   if (pageIndex === 0) {
      return `store/comments/list_create/`;
   }

   return `store/comments/list_create?page=${pageIndex + 1}`;
};

const useGetComments = foodId =>
   useSWRInfinite(
      getKey,
      url =>
         axiosInstance(url, {
            params: {
               product_id: foodId,
            },
         }).then(res => res.data),
      {
         revalidateIfStale: false,
         revalidateOnFocus: false,
      }
   );

export default useGetComments;
