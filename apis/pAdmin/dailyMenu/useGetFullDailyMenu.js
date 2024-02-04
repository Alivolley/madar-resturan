import useSWR from 'swr';
import axiosInstance from '@/configs/axiosInstance';

const useGetFullDailyMenu = () =>
   useSWR(`store/today-menu/get_update_delete/`, url => axiosInstance(url).then(res => res.data));

export default useGetFullDailyMenu;
