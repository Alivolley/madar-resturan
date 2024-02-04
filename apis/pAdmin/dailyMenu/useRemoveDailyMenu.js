import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useRemoveDailyMenu = dailyMenuMutate =>
   useSWRMutation('store/today-menu/get_update_delete/', url =>
      axiosInstance.delete(url).then(res => {
         dailyMenuMutate();
         return res.data;
      })
   );

export default useRemoveDailyMenu;
