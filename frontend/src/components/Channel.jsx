import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { actions as activeChannelIdActions } from '../../store/activeChannelSlice';
import Menu from './modals/Menu';

const Channel = ({ channel }) => {
  const dispatch = useDispatch();
  const activeChannelId = useSelector(
    (state) => state.activeChannelReducer.activeChannelId,
  );
  const handleClick = () => {
    dispatch(activeChannelIdActions.setActiveChannelId(channel.id));
  };

  const classBtn =
    activeChannelId === channel.id
      ? 'w-100 rounded-0 text-start btn btn-secondary'
      : 'w-100 rounded-0 text-start btn btn-light';

  return (
    <Button
      onClick={handleClick}
      type="button"
      className={`${classBtn} d-flex justify-content-between align-items-center pe-2`}
    >
      <span className="flex-grow-1 text-truncate"># {channel.name}</span>

      <Menu id={channel.id} onClick={(e) => e.stopPropagation()} />
    </Button>
  );
};

export default Channel;
