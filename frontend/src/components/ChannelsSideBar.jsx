import Channels from './Channels';
import { Button } from 'react-bootstrap';

const ChannelsSideBar = () => {
  return (
    <div className="border-end px-0 bg-light flex-column h-100 d-flex">
      <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
        <b>Каналы</b>
        <Button
          type="button"
          className="p-0 bg-white border border-light text-primary"
        >
          <i className="bi bi-plus-square"></i>
          <span className="visually-hidden">+</span>
        </Button>
      </div>
      <ul
        id="channels-box"
        className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block"
      >
        <Channels />
      </ul>
    </div>
  );
};

export default ChannelsSideBar;
