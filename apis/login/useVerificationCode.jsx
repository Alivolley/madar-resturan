/* eslint-disable no-param-reassign */
import useSWRMutation from 'swr/mutation';
import Cookies from 'js-cookie';
import axiosInstance from '@/configs/axiosInstance';

const useVerificationCode = () =>
   useSWRMutation('accounts/send-verification-code/', (url, data) =>
      axiosInstance.post(url, data.arg).then(res => {
         axiosInstance
            .post('accounts/login/', {
               phone_number: data?.arg?.phone_number,
               code: res?.data?.code,
            })
            .then(innerRes => {
               Cookies.set('madar_accessToken', innerRes?.data?.access, { expires: 7 });
               Cookies.set('madar_refreshToken', innerRes?.data?.refresh, { expires: 7 });
               Cookies.set('madar_isLogin', true, { expires: 7 });
               axiosInstance.interceptors.request.use(config => {
                  config.headers.Authorization = `Bearer ${res?.data?.access}`;
                  return config;
               });
            });
      })
   );

export default useVerificationCode;
