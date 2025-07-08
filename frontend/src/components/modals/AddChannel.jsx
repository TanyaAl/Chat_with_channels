import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useRef, useEffect } from 'react'
import getAuthHeader from '../../utils/auth'
import axios from 'axios'
import { getChannelValidation } from '../../utils/validation'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import profanityFilter from '../../utils/profanityFilter'
import routes from '../../routes/index'
// import ModalTemplate from './ModalTemplate'
import { actions as activeChannelActions } from '../../store/activeChannelSlice'

import { Modal, Form, FormGroup, FormControl, Button } from 'react-bootstrap'

const Add = ({ onClose }) => {
  const { channels } = useSelector(state => state.channelsReducer)
  console.log('CHANNELS', channels)

  const { t } = useTranslation()
  const dispatch = useDispatch()
  const names = channels.map(channel => channel.name)
  const validationSchema = getChannelValidation(t, names)
  const inputEl = useRef(null)
  useEffect(() => {
    inputEl.current.focus()
  })

  const texts = {
    toastSuccess: t('toastify.addChannelSuccess'),
    toastError: t('network'),
    title: t('interface_texts.modals.addChannel'),
    textLabel: t('interface_texts.modals.channelName'),
    textBtnDiscard: t('interface_texts.modals.btnDiscard'),
    textBtnConfirm: t('interface_texts.modals.btnSend'),
  }

  const getSubmit = async (values) => {
    const newChannel = { name: profanityFilter.clean(values.name) }
    console.log('NEWCHANNEL', newChannel.name)
    try {
      const response = await axios.post(routes.channelsPath(), newChannel, {
        headers: getAuthHeader(),
      })
      dispatch(activeChannelActions.setActiveChannelId(response.data.id))
      toast.success(texts.toastSuccess)
      formik.resetForm()
      onClose()
    }
    catch (error) {
      console.error(`${texts.toastError}: ${error}`)
      toast.error(texts.toastError)
    }
    finally {
      formik.setSubmitting(false)
    }
  }

  const formik = useFormik({
    initialValues: { name: '' },
    validationSchema: validationSchema,
    onSubmit: getSubmit,
  })

  const isSubmitDisabled = formik.values.name.trim() === ''
  console.log(isSubmitDisabled)
  console.log(formik.errors)
  return (
    <div>
      <Modal centered show onHide={onClose} backdrop={true} keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>
            {t('interface_texts.modals.addChannel')}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <FormControl
                name="name"
                id="name"
                value={formik.values.name}
                onChange={(e) => {
                  formik.setFieldTouched('name', true, false)
                  formik.handleChange(e)
                }}
                required
                data-testid="input-name"
                ref={inputEl}
                onBlur={formik.handleBlur}
                isInvalid={formik.errors.name}
              />
              <Form.Label className="visually-hidden" htmlFor="name">
                {t('interface_texts.modals.channelName')}
              </Form.Label>
              {formik.errors.name
                ? (
                    <FormControl.Feedback type="invalid">
                      {formik.errors.name}
                    </FormControl.Feedback>
                  )
                : null}
            </FormGroup>
            <div className="d-flex justify-content-end">
              <Button
                onClick={() => onClose()}
                className="btn btn-secondary me-3 mt-3"
              >
                {t('interface_texts.modals.btnDiscard')}
              </Button>
              <Button
                type="submit"
                className="btn btn-primary mt-3"
                disabled={isSubmitDisabled}
              >
                {t('interface_texts.modals.btnSend')}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      {/* <ModalTemplate
        texts={texts}
        formik={formik}
        onClose={onClose}
        isSubmitDisabled={isSubmitDisabled}
        getSubmit={formik.handleSubmit}
        showInput={true}
        inputEl={inputEl}
        colorBtn="primary"
      /> */}
    </div>
  )
}
export default Add
