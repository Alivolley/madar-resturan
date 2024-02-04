import useSWR from 'swr';
import axiosInstance from '@/configs/axiosInstance';

const useGetDailyMenu = (pageStatus, countValue) =>
   useSWR(`store/today-menu/get_update_delete/?page=${pageStatus}&page_size=${countValue}&is_admin_panel=true`, url =>
      axiosInstance(url).then(res => res.data)
   );

export default useGetDailyMenu;
