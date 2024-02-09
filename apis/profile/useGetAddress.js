import useSWR from 'swr';
import axiosInstance from '@/configs/axiosInstance';

const useGetAddress = show =>
   useSWR(show ? 'accounts/address/list_create/' : null, url => axiosInstance(url).then(res => res.data));

export default useGetAddress;
