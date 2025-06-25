import { io } from 'socket.io-client';
import store from '../store/index';
import { actions as messagesActions } from '../store/messagesSlice';
import { actions as channelsActions } from '../store/channelsSlice';

const init = () => {
  const socket = io();
  socket.on('newMessage', (payload) => {
    store.dispatch(messagesActions.addMessage(payload));
  });
  socket.on('newChannel', (payload) => {
    store.dispatch(channelsActions.addChannel(payload));
  });
  return { socket };
};

export default init;
