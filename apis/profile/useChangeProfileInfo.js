import useSWRMutation from 'swr/mutation';
import { useSWRConfig } from 'swr';
// Redux
import { useDispatch } from 'react-redux';
import { addUserInfo } from '@/store/reducers/userInfoReducer';

import axiosInstance from '@/configs/axiosInstance';

const useChangeProfileInfo = phoneNumber => {
   const { mutate } = useSWRConfig();
   const dispatch = useDispatch();

   return useSWRMutation('accounts/panel/', (url, data) =>
      axiosInstance
         .patch(url, data.arg, {
            params: {
               ...(phoneNumber && {
                  phone_number: phoneNumber,
               }),
            },
         })
         .then(res => {
            dispatch(addUserInfo(res.data));
            mutate('accounts/panel/', res.data);
            return res.data;
         })
   );
};

export default useChangeProfileInfo;
