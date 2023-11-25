import Cookies from 'js-cookie';
import axiosInstance from '@/configs/axiosInstance';

const logoutHandler = () => {
   axiosInstance
      .post('accounts/logout/', {
         refresh: Cookies.get('madar_refreshToken'),
      })
      .then(() => {
         Cookies.remove('madar_accessToken');
         Cookies.remove('madar_refreshToken');
         Cookies.remove('madar_isLogin');
         window.location.reload();
      });
};

export default logoutHandler;
