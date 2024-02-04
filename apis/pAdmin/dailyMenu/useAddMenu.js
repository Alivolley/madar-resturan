import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useAddMenu = () =>
   useSWRMutation('store/today-menu/get_update_delete/', (url, data) =>
      axiosInstance.patch(url, data.arg).then(res => res.data)
   );

export default useAddMenu;
