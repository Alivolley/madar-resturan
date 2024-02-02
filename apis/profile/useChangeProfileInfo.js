import useSWRMutation from 'swr/mutation';
import { useSWRConfig } from 'swr';
// Redux
import { useDispatch } from 'react-redux';
import { addUserInfo } from '@/store/reducers/userInfoReducer';

import axiosInstance from '@/configs/axiosInstance';

const useChangeProfileInfo = () => {
   const { mutate } = useSWRConfig();
   const dispatch = useDispatch();

   return useSWRMutation('accounts/panel/', (url, data) =>
      axiosInstance.patch(url, data.arg).then(res => {
         dispatch(addUserInfo(res.data));
         mutate('accounts/panel/', res.data);
         return res.data;
      })
   );
};

export default useChangeProfileInfo;
