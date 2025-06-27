import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import { actions as modalsActions } from '../../../store/modalsSlice';

const Menu = ({ className, channel }) => {
  const dispatch = useDispatch();

  const handleClickRename = (data) => {
    const renaming = { type: 'renaming', data: data };
    console.log('RENAME', renaming);
    dispatch(modalsActions.openModal(renaming));
  };

  const handleClickRemove = (channel) => {
    const removing = { type: 'removing', data: channel.id };
    dispatch(modalsActions.openModal(removing));
  };
  return (
    <Dropdown>
      <Dropdown.Toggle
        id={channel.id}
        className={`btn ${className} flex-grow-0`}
      >
        {' '}
        <span className="visually-hidden">Управление каналом</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleClickRemove(channel)} eventKey="1">
          Удалить
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleClickRename(channel)} eventKey="2">
          Переименовать
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Menu;
