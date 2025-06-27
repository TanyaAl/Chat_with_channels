import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Modal, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { actions as channelsActions } from '../../../store/channelsSlice';

const Rename = ({ data, onClose }) => {
  const dispatch = useDispatch();
  const { channels } = useSelector((state) => state.channelsReducer);
  const names = channels.map((channel) => channel.name);
  console.log('names', names);
  const formik = useFormik({
    initialValues: { name: data.name, id: data.id },
    onSubmit: (values) => {
      if (names.includes(values.name)) {
        formik.setFieldError('name', 'Имя канала уже существует');
      } else {
        dispatch(channelsActions.renameChannel(values));
        onClose();
      }
    },
  });

  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
    inputEl.current.select();
  }, []);

  return (
    <div>
      <Modal centered show onHide={onClose} backdrop={true} keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>Переименовать канал</Modal.Title>
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
export default Rename;
