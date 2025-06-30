import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Modal, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { actions as channelsActions } from '../../../store/channelsSlice';
import { getChannelValidation } from '../../../utils/validation';
import { toast } from 'react-toastify';
import profanityFilter from '../../../utils/profanityFilter';

const Rename = ({ data, onClose }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { channels } = useSelector((state) => state.channelsReducer);
  const names = channels.map((channel) => channel.name);
  const validationSchema = getChannelValidation(t, names);

  const formik = useFormik({
    initialValues: { name: data.name, id: data.id },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      try {
        const checkValue = {
          name: profanityFilter.clean(values.name),
          id: data.id,
        };
        dispatch(channelsActions.renameChannel(checkValue));
        toast.success(t('toastify.renameChannelSuccess'));
        onClose();
      } catch (error) {
        console.error(`${t('network')}: ${error}`);
        toast.error(t('network'));
      } finally {
        formik.setSubmitting(false);
      }
    },
  });

  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
    inputEl.current.select();
  }, []);

  const isSubmitDisabled = formik.values.name.trim() === '';

  return (
    <div>
      <Modal centered show onHide={onClose} backdrop={true} keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>{t('interface_texts.modals.renameChannel')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <FormControl
                name="name"
                value={formik.values.name}
                onChange={(e) => {
                  formik.setFieldTouched('name', true, false);
                  formik.handleChange(e);
                }}
                required
                data-testid="input-name"
                ref={inputEl}
                onBlur={formik.handleBlur}
                isInvalid={formik.errors.name}
              />
              {formik.errors.name ? (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.name}
                </Form.Control.Feedback>
              ) : null}
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
    </div>
  );
};
export default Rename;
