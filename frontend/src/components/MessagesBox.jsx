import FormForComment from './FormForComment'
import Messages from './Messages'
import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

const MessagesBox = () => {
  const messagesBoxRef = useRef(null)
  const { messages } = useSelector((state) => state.messagesReducer)
  useEffect(() => {
    messagesBoxRef.current.scrollTop = messagesBoxRef.current.scrollHeight
  }, [messages])
  return (
    <>
      <div
        ref={messagesBoxRef}
        id="messages-box"
        className="chat-messages flex-grow-1 overflow-auto px-5"
      >
        <Messages />
      </div>
      <div className="mt-auto px-5 py-3">
        <FormForComment />
      </div>
    </>
  )
}

export default MessagesBox
