import axios from 'axios';
import { useEffect, useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { useFormik } from 'formik';
import { actions as commentsActions } from '../../store/commentsSlice.js';
import { actions as channelsActions } from '../../store/channelsSlice.js';

const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log('userId', user);
  console.log('comments', commentsActions);
  console.log('channels', channelsActions);

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }

  return {};
};

const ChatPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/channels', {
          headers: getAuthHeader(),
        });
        console.log('responsePrivate', response.data);
        setData(response.data);
      } catch (err) {
        console.error('Ошибка запроса:', err);
      }
    };

    fetchData();
  }, []);
  console.log('data', data);
  return (
    <div className="container h-100 my-4 overflow-hidden rounded shadow">
      <div className="row h-100 bg-white flex-md-row">
        <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
          <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
            <b>Каналы</b>
            <button
              type="button"
              className="p-0 text-primary btn btn-group-vertical"
            >
              <span className="visually-hidden">+</span>
            </button>
          </div>
          <ul
            id="channels-box"
            className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block"
          ></ul>
        </div>
        <div className="col p-0 h-100">
          <div className="d-flex flex-column h-100">
            <div className="bg-light mb-4 p-3 shadow-sm small">
              <p className="m-0">
                <b># random</b>
              </p>
              <span className="text-muted">0 сообщений</span>
            </div>
            <div
              id="messages-box"
              className="chat-messages overflow-auto px-5 "
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatPage;
