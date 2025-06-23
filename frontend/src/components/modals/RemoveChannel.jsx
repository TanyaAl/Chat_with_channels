import { Modal, FormGroup } from 'react-bootstrap';

const generateOnSubmit =
  ({ modalType, onClose, updateTasks }) =>
  (e) => {
    e.preventDefault();
    updateTasks((items) =>
      items.filter((task) => task.id !== modalType.item.id),
    );
    onClose();
  };

const Remove = (props) => {
  const { onClose } = props;
  const onSubmit = generateOnSubmit(props);
  return (
    <div>
      <Modal show onHide={onClose} backdrop={true} keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>Remove</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <FormGroup>
              <input className="btn btn-danger" type="submit" value="remove" />
            </FormGroup>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Remove;
