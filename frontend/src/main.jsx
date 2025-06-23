import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from '../store/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import init from './init.jsx';

const { socket } = init();

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App socket={socket} />
  </Provider>,
);
