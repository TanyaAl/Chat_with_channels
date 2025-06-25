import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

const generateOnSubmit =
  ({ modalType, onClose, updateTasks }) =>
  (values) => {
    updateTasks((items) => {
      const renamedTask = items.find((task) => task.id === modalType.item.id);
      renamedTask.body = values.body;
    });
    onClose();
  };

const Rename = (props) => {
  const { modalType, onClose } = props;
  const { item } = modalType;
  const formik = useFormik({
    initialValues: item,
    onSubmit: generateOnSubmit(props),
  });

  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.select();
  }, []);

  return (
    <div>
      <Modal centered show onHide={onClose} backdrop={true} keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>Rename</Modal.Title>
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
export default Rename;
