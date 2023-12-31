import useSWR from 'swr';
import axiosInstance from '@/configs/axiosInstance';

const useCategories = () =>
   useSWR('restaurant/categories/list_create/', url => axiosInstance(url).then(res => res.data));

export default useCategories;
