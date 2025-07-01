import { Modal, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import getAuthHeader from '../../../utils/auth'
import { toast } from 'react-toastify'

const Remove = ({ data, onClose }) => {
  const { channels } = useSelector(state => state.channelsReducer)
  const { t } = useTranslation()
  const channelToRemove = channels.find(channel => channel.id === data)

  const handleClickRemove = async () => {
    try {
      await axios.delete(`/api/v1/channels/${channelToRemove.id}`, {
        headers: getAuthHeader(),
      })
      toast.success(t('toastify.removeChannelSuccess'))
      onClose()
    } catch (error) {
      console.error(`${t('network')}: ${error}`)
      toast.error(t('network'))
    }
  }
  return (
    <div>
      <Modal centered show onHide={onClose} backdrop={true} keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>
            {t('interface_texts.modals.removeChannel')}
            {' '}
            {channelToRemove ? channelToRemove.name : ''}
            ?
            {' '}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {' '}
          <div>
            {t('interface_texts.modals.areYouSure')}
          </div>
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => onClose()}
              className="btn btn-secondary me-3 mt-3"
            >
              {t('interface_texts.modals.btnDiscard')}
            </Button>
            <Button
              onClick={() => handleClickRemove()}
              type="submit"
              className="btn btn-danger mt-3"
            >
              {t('interface_texts.modals.btnRemove')}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default Remove
