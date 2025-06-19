import FormForComment from './FormForComment';
import Messages from './Messages';

const MessagesBox = () => {
  return (
    <>
      <div
        id="messages-box"
        className="chat-messages flex-grow-1 overflow-auto px-5"
      >
        <Messages />
      </div>
      <div className="mt-auto px-5 py-3">
        <FormForComment />
      </div>
    </>
  );
};

export default MessagesBox;
