import useSWR from 'swr';
import axiosInstance from '@/configs/axiosInstance';

const useGetCategoryFull = () =>
   useSWR('store/categories/list_create/?category_products=True', url => axiosInstance(url).then(res => res.data));

export default useGetCategoryFull;
