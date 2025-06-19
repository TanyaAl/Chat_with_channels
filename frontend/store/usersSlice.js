import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, { payload }) {
      state.users = payload;
    },
    addUser(state, { payload }) {
      state.users.push(payload);
    },
  },
});

export const actions = usersSlice.actions;
export default usersSlice.reducer;
