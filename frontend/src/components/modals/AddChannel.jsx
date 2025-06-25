import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { Modal, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import getAuthHeader from '../../../utils/auth';
import axios from 'axios';
import getChannelValidation from '../../../utils/validation';

const Add = ({ onClose }) => {
  const inputEl = useRef(null);
  const { channels } = useSelector((state) => state.channelsReducer);
  const names = channels.map((channel) => channel.name);
  const validationSchema = getChannelValidation(names);

  useEffect(() => {
    inputEl.current.focus();
  }, [onClose]);
  const formik = useFormik({
    initialValues: { name: '' },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      const newChannel = { name: values.name };
      try {
        const responseChannel = await axios.post(
          '/api/v1/channels',
          newChannel,
          {
            headers: getAuthHeader(),
          },
        );
        console.log('newChannel', responseChannel);
        formik.resetForm();
        onClose();
      } catch (error) {
        console.error('Ошибка при создании канала', error);
      } finally {
        formik.setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <Modal centered show onHide={onClose} backdrop={true} keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить канал</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <FormControl
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                required
                data-testid="input-name"
                ref={inputEl}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.name && !!formik.errors.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <FormControl.Feedback type="invalid">
                  {formik.errors.name}
                </FormControl.Feedback>
              ) : null}
            </FormGroup>
            <div className="d-flex justify-content-end">
              <Button
                onClick={() => onClose()}
                className="btn btn-secondary me-3 mt-3"
              >
                Отменить
              </Button>
              <Button type="submit" className="btn btn-primary mt-3">
                Отправить
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Add;
