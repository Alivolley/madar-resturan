import Cookies from 'js-cookie';

const logoutHandler = () => {
   Cookies.remove('madar_accessToken');
   Cookies.remove('madar_refreshToken');
   Cookies.remove('madar_isLogin');
   window.location.reload();
};

export default logoutHandler;
