import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './commentsSlice.js';
import channelsReducer from './channelsSlice.js';
import usersReducer from './usersSlice.js';
import activeChannelReducer from './activeChannelSlice.js';

const store = configureStore({
  reducer: {
    commentsReducer,
    channelsReducer,
    activeChannelReducer,
    usersReducer,
  },
});

export default store;
