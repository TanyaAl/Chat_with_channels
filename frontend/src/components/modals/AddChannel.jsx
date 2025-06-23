import { useEffect, useRef } from 'react';
// import _ from 'lodash';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

const Add = (props) => {
  const { onClose } = props;
  const formik = useFormik({
    initialValues: { body: '' },
    onSubmit: (values) => console.log(values),
  });

  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <div>
      <Modal show onHide={onClose} backdrop={true} keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <FormControl
                name="body"
                value={formik.values.body}
                onChange={formik.handleChange}
                required
                data-testid="input-body"
                ref={inputEl}
              />
            </FormGroup>
            <input
              type="submit"
              className="btn btn-primary mt-3"
              value="submit"
            />
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Add;
