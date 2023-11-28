import useSWRInfinite from 'swr/infinite';
import axiosInstance from '@/configs/axiosInstance';

const getKey = pageIndex => {
   if (pageIndex === 0) {
      return `restaurant/comments/list_create/`;
   }

   return `restaurant/comments/list_create?page=${pageIndex + 1}`;
};

const useGetComments = foodId =>
   useSWRInfinite(getKey, url =>
      axiosInstance(url, {
         params: {
            food_id: foodId,
         },
      }).then(res => res.data)
   );

export default useGetComments;
