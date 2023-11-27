import useSWRMutation from 'swr/mutation';
import { useSWRConfig } from 'swr';
import axiosInstance from '@/configs/axiosInstance';

const useRemoveFromBasket = () => {
   const { mutate } = useSWRConfig();
   return useSWRMutation('restaurant/cart/get_update/', (url, data) =>
      axiosInstance.patch(url, data.arg).then(res => {
         mutate('restaurant/cart/get_update/', res.data);
         return res.data;
      })
   );
};

export default useRemoveFromBasket;
