import FormForComment from './FormForComment';

const MessagesBox = () => {
  return (
    <>
      <div id="messages-box" className="chat-messages overflow-auto px-5"></div>
      <div className="mt-auto px-5 py-3">
        <FormForComment />
      </div>
    </>
  );
};

export default MessagesBox;
