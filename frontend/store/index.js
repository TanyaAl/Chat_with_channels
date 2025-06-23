import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messagesSlice.js';
import channelsReducer from './channelsSlice.js';
import usersReducer from './usersSlice.js';
import activeChannelReducer from './activeChannelSlice.js';
import modalsReducer from './modalsSlice.js';

const store = configureStore({
  reducer: {
    messagesReducer,
    channelsReducer,
    activeChannelReducer,
    usersReducer,
    modalsReducer,
  },
});

export default store;
