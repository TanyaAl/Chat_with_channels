import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './commentsSlice.js';
import channelsReducer from './channelsSlice.js';

const store = configureStore({
  reducer: {
    comments: commentsReducer,
    channels: channelsReducer,
  },
});

export default store;
