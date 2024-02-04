import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useDeleteFromMenu = dailyMenuMutate =>
   useSWRMutation('store/today-menu/get_update_delete/', (url, data) =>
      axiosInstance.patch(url, data.arg).then(res => {
         dailyMenuMutate();
         return res.data;
      })
   );

export default useDeleteFromMenu;
