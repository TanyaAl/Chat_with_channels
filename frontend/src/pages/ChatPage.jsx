import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import { actions as messagesActions } from '../../store/messagesSlice.js'
import { actions as channelActions } from '../../store/channelsSlice.js'
import { actions as activeChannelIdActions } from '../../store/activeChannelSlice.js'
import ChatMain from '../components/ChatMain.jsx'
import Waiting from '../components/Spinner.jsx'
import getAuthHeader from '../../utils/auth.js'

const ChatPage = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const { t } = useTranslation()

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching data...')
      try {
        const responseChannels = await axios.get('/api/v1/channels', {
          headers: getAuthHeader(),
        })
        dispatch(channelActions.setChannels(responseChannels.data))
        console.log('Loaded channels:', responseChannels.data)
        if (responseChannels.data.length > 0) {
          dispatch(
            activeChannelIdActions.setActiveChannelId(
              responseChannels.data[0].id,
            ),
          )
        }
        const responseMessages = await axios.get('/api/v1/messages', {
          headers: getAuthHeader(),
        })
        dispatch(messagesActions.setMessages(responseMessages.data))
        setLoading(false)
      }
      catch (err) {
        console.error(`${t('network')}, ${err}`)
        toast.error(t('network'))
        setLoading(false)
      }
    }
    fetchData()
  }, [dispatch, t])
  if (loading) {
    return <Waiting />
  }
  return <ChatMain />
}
export default ChatPage
