import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { Modal, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { values } from 'lodash';

const Rename = ({ data, onClose }) => {
  const formik = useFormik({
    initialValues: data,
    onSubmit: console.log(values),
  });

  const inputEl = useRef(null);
  useEffect(() => {
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
                value={formik.values.data}
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
export default Rename;
