import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channels: [],
};
const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setChannels(state, { payload }) {
      state.channels = payload;
    },
    addChannel(state, { payload }) {
      state.channels.push(payload);
    },
  },
});
export const actions = channelsSlice.actions;
export default channelsSlice.reducer;
