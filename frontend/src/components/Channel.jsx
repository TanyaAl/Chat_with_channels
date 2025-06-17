import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { actions as activeChannelIdActions } from '../../store/activeChannelSlice';

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
      className={classBtn}
    >{`#${channel.name}`}</Button>
  );
};

export default Channel;
