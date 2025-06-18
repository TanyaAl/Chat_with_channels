import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions as commentsActions } from '../../store/commentsSlice.js';
import { actions as channelActions } from '../../store/channelsSlice.js';
import { actions as activeChannelIdActions } from '../../store/activeChannelSlice.js';
import ChatMain from '../components/ChatMain.jsx';

const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }
  return {};
};

const ChatPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseChannels = await axios.get('/api/v1/channels', {
          headers: getAuthHeader(),
        });
        dispatch(channelActions.setChannels(responseChannels.data));
        dispatch(activeChannelIdActions.setActiveChannelId(1));

        const responseComments = await axios.get('/api/v1/comments', {
          headers: getAuthHeader(),
        });
        dispatch(commentsActions.setComments(responseComments.data));
      } catch (err) {
        console.error('Ошибка запроса:', err);
      }
    };
    fetchData();
  }, [dispatch]);

  return <ChatMain />;
};
export default ChatPage;
