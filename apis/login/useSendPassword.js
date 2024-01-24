import useSWRMutation from 'swr/mutation';
import Cookies from 'js-cookie';

// Redux
import { useDispatch } from 'react-redux';
import { changeToLoginTrue } from '@/store/reducers/loginStatusReducer';

import axiosInstance from '@/configs/axiosInstance';

const useSendPassword = () => {
   const dispatch = useDispatch();

   return useSWRMutation('accounts/login-by-password/', (url, data) =>
      axiosInstance.post(url, data.arg).then(res => {
         Cookies.set('madar_accessToken', res?.data?.access, { expires: 365 });
         Cookies.set('madar_refreshToken', res?.data?.refresh, { expires: 365 });
         Cookies.set('madar_isLogin', true, { expires: 365 });
         dispatch(changeToLoginTrue());
      })
   );
};

export default useSendPassword;
