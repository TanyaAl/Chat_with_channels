import { useSelector } from 'react-redux';

const ChatHeader = () => {
  const activeId = useSelector(
    (state) => state.activeChannelReducer.activeChannelId,
  );
  console.log('channels', activeId);
  const channels = useSelector((state) => state.channelsReducer.channels);
  const activeTitle = channels.find((channel) => channel.id === activeId);
  console.log(activeTitle);
  return (
    <div className="bg-light p-3 shadow-sm small">
      <p className="m-0">
        <b># {activeTitle.name}</b>
      </p>
      <span className="text-muted">0 сообщений</span>
    </div>
  );
};

export default ChatHeader;
