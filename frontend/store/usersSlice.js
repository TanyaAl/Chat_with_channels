import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, { payload }) {
      state.users.push(payload);
    },
  },
});

export const actions = usersSlice.actions;
export default usersSlice.reducer;
