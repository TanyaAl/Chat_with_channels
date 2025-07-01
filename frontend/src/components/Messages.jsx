import { useSelector } from 'react-redux'

const Messages = () => {
  const messages = useSelector(state => state.messagesReducer.messages)
  const activeChannel = useSelector(
    state => state.activeChannelReducer.activeChannelId,
  )
  const currentMessages = messages.filter(
    message => message.channelId === activeChannel,
  )

  if (messages.length > 0) {
    return currentMessages.map(message => (
      <div key={message.id} className="text-break mb-2">
        <b>
          {message.username}
        </b>
        :
        {message.body}
      </div>
    ))
  }
  else {
    return null
  }
}
export default Messages
