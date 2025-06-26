import { useSelector } from 'react-redux';

const ChatHeader = () => {
  const activeId = useSelector(
    (state) => state.activeChannelReducer.activeChannelId,
  );
  const channels = useSelector((state) => state.channelsReducer.channels);
  const activeTitle = channels.find((channel) => channel.id === activeId);

  const countMessages = useSelector(
    (state) => state.messagesReducer.messages,
  ).filter((message) => message.channelId === activeId).length;

  return (
    <div className="bg-light p-3 shadow-sm small">
      <p className="m-0">
        <b># {activeTitle.name}</b>
      </p>
      <span className="text-muted">{countMessages} сообщений</span>
    </div>
  );
};

export default ChatHeader;
