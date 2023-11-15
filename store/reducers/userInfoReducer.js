import { createSlice } from '@reduxjs/toolkit';

const userInfoReducer = createSlice({
   name: 'userInfoReducer',
   initialState: {},

   reducers: {
      addInfoDetail: (state, action, payload) => {
         console.log('state', state);
         console.log('action', action);
         console.log('payload', payload);
      },
   },
});

export const { addInfoDetail } = userInfoReducer.actions;
export default userInfoReducer.reducer;
