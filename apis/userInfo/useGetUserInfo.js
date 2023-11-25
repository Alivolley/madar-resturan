import useSWR from 'swr';
import Cookies from 'js-cookie';

// Redux
import { useDispatch } from 'react-redux';
import { addUserInfo } from '@/store/reducers/userInfoReducer';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetUserInfo = isLogin => {
   const accessToken = Cookies.get('madar_accessToken');
   const dispatch = useDispatch();

   return useSWR(isLogin ? 'accounts/user-information/' : null, url =>
      axiosInstance(url, {
         headers: {
            Authorization: `Bearer ${accessToken}`,
         },
      }).then(res => {
         dispatch(addUserInfo(res.data));
      })
   );
};

export default useGetUserInfo;
