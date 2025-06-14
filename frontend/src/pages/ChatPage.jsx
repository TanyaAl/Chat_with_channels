import axios from 'axios';
import { useEffect, useState } from 'react';

const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log('userId', user);

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
    <div className="text-center mb-5 mt-5">
      {data.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};
export default ChatPage;
