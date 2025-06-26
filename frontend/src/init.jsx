import { io } from 'socket.io-client';
import store from '../store/index';
import { actions as messagesActions } from '../store/messagesSlice';
import { actions as channelsActions } from '../store/channelsSlice';
import { actions as activeChannelActions } from '../store/activeChannelSlice';

const init = () => {
  const socket = io();
  socket.on('newMessage', (payload) => {
    store.dispatch(messagesActions.addMessage(payload));
  });
  socket.on('newChannel', (payload) => {
    store.dispatch(channelsActions.addChannel(payload));
  });
  socket.on('removeChannel', (payload) => {
    const { id } = payload;
    const state = store.getState();
    const activId = state.activeChannelReducer.activeChannelId;
    if (activId === id) {
      store.dispatch(activeChannelActions.setActiveChannelId(1));
      console.log('Активный канал был удален, переключено на ID 1.');
    }
    store.dispatch(channelsActions.removeChannel(payload));
    console.log('Состояние после удаления канала:', store.getState());
  });
  return { socket };
};
export default init;
