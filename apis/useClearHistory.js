import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useClearHistory = () =>
   useSWRMutation('restaurant/history/', url => axiosInstance.delete(url).then(res => res.data));

export default useClearHistory;
