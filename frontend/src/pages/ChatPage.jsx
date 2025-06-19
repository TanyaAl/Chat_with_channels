import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions as commentsActions } from '../../store/commentsSlice.js';
import { actions as channelActions } from '../../store/channelsSlice.js';
import { actions as activeChannelIdActions } from '../../store/activeChannelSlice.js';
import ChatMain from '../components/ChatMain.jsx';
import Waiting from '../components/Spinner.jsx';

const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }
  return {};
};

const ChatPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseChannels = await axios.get('/api/v1/channels', {
          headers: getAuthHeader(),
        });
        dispatch(channelActions.setChannels(responseChannels.data));
        if (responseChannels.data.length > 0) {
          dispatch(
            activeChannelIdActions.setActiveChannelId(
              responseChannels.data[0].id,
            ),
          );
        }

        const responseComments = await axios.get('/api/v1/comments', {
          headers: getAuthHeader(),
        });
        dispatch(commentsActions.setComments(responseComments.data));
        setLoading(false);
      } catch (err) {
        console.error('Ошибка запроса:', err);
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);
  if (loading) {
    return <Waiting />;
  }
  return <ChatMain />;
};
export default ChatPage;
