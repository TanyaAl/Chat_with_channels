import { io } from 'socket.io-client';
import store from '../store/index';
import { actions as messagesActions } from '../store/messagesSlice';

const init = () => {
  const socket = io();
  socket.on('newMessage', (payload) => {
    console.log('SOCKET.IO: получено новое сообщение', payload);
    store.dispatch(messagesActions.addMessage(payload));
  });
  return { socket };
};

export default init;
