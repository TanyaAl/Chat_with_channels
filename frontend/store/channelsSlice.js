import { createSlice } from '@reduxjs/toolkit';

const initialState = { messages: [] };
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
    removeChannel(state, { payload }) {
      console.log('STORE_ID', payload);
      const { id } = payload;
      state.channels = state.channels.filter((channel) => channel.id !== id);
    },
  },
});
export const actions = channelsSlice.actions;
export default channelsSlice.reducer;
