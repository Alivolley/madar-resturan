import useSWRMutation from 'swr/mutation';
import { useSWRConfig } from 'swr';
import axiosInstance from '@/configs/axiosInstance';

const useDeleteBasket = () => {
   const { mutate } = useSWRConfig();
   return useSWRMutation('restaurant/cart/empty/', url =>
      axiosInstance.post(url).then(() => mutate('restaurant/cart/get_update/'))
   );
};

export default useDeleteBasket;
