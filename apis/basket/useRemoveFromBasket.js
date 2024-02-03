import useSWRMutation from 'swr/mutation';
import { useSWRConfig } from 'swr';
import { toast } from 'react-toastify';
import axiosInstance from '@/configs/axiosInstance';

const useRemoveFromBasket = () => {
   const { mutate } = useSWRConfig();
   return useSWRMutation('store/cart/get_update/', (url, data) =>
      axiosInstance.patch(url, data.arg).then(res => {
         if (data?.arg?.product_count === 0) {
            toast.warn('محصول از سبد خرید حذف شد');
         }
         mutate('store/cart/get_update/', res.data);
         return res.data;
      })
   );
};

export default useRemoveFromBasket;
