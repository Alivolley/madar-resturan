import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useEditStockMenu = title =>
   useSWRMutation(`store/products/get_update_destroy/?title=${title}`, (url, data) =>
      axiosInstance.patch(url, data.arg).then(res => res.data)
   );

export default useEditStockMenu;
