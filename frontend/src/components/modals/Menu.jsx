import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Menu = ({ onClick }) => {
  return (
    <DropdownButton
      align="end"
      id="name-end"
      variant="light"
      className="p-0 border-0 shadow-none text-reset"
      onClick={onClick}
      size="sm"
      data-bs-display="static"
    >
      <Dropdown.Item eventKey="1">Переименовать</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="2">Удалить</Dropdown.Item>
    </DropdownButton>
  );
};

export default Menu;
