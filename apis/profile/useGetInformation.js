import useSWR from 'swr';
import axiosInstance from '@/configs/axiosInstance';

const useGetInformation = () => useSWR('accounts/panel/', url => axiosInstance(url).then(res => res.data));

export default useGetInformation;
