import { Modal, Form, FormGroup, FormControl, Button } from 'react-bootstrap'

const ModalTemplate = ({ children }) => {
  const { formik, onClose } = children
  return (
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
  )
}

export default ModalTemplate
