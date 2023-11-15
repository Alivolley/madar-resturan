/* eslint-disable no-restricted-globals */
import axios from 'axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

const accessToken = Cookies.get('madar_accessToken');
const refreshToken = Cookies.get('madar_refreshToken');

const axiosInstance = axios.create({
   baseURL: 'https://test-restaurant.iran.liara.run/api/',

   ...(accessToken && {
      headers: {
         Authorization: `Bearer ${accessToken}`,
      },
   }),
});

axiosInstance.interceptors.request.use(async config => config);

axiosInstance.interceptors.response.use(
   res => {
      if (res?.data?.detail) {
         toast.success(res?.data?.detail, {
            style: {
               direction: 'rtl',
               fontFamily: 'rokhRegular',
               lineHeight: '25px',
            },
            theme: 'colored',
            autoClose: 5000,
         });
      }

      return res;
   },
   async error => {
      console.log(error);
      const originalReq = error.config;

      if (error?.response?.data?.detail === 'Given token not valid for any token type') {
         // access expired
         // if (refreshToken) {
         //    const res = await axiosInstance.post('accounts/token/refresh/', {
         //       refresh: refreshToken,
         //    });
         //    Cookies.set('madar_accessToken', res.data.access, { expires: 7 });
         //    originalReq.headers.Authorization = `Bearer ${res.data.access}`;
         //    return axiosInstance(originalReq);
         // }
         // Cookies.remove('madar_accessToken');
         // Cookies.remove('madar_refreshToken');
         // Cookies.remove('madar_isLogin');
         // axiosInstance.interceptors.response.clear();
         // location.href = '/login';
      } else if (error?.response?.data?.detail === 'Token is invalid or expired') {
         // refresh expired
         // Cookies.remove('madar_accessToken');
         // Cookies.remove('madar_refreshToken');
         // Cookies.remove('madar_isLogin');
         // axiosInstance.interceptors.response.clear();
         // location.href = '/login';
      } else if (error?.response?.data?.detail) {
         toast.error(error?.response?.data?.detail, {
            style: {
               direction: 'rtl',
               fontFamily: 'rokhRegular',
               lineHeight: '25px',
            },
            theme: 'colored',
            autoClose: 5000,
         });
      }

      return Promise.reject(error);
   }
);

export default axiosInstance;
