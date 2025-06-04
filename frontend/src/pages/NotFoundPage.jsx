import errorPage from '../assets/404.png'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <img alt="Page not found" src={errorPage} style={{ maxWidth: '40%', height: 'auto' }} />
      <h1>Страница не найдена</h1>
      <p>Но вы можете <Link to="/">перейти на главную страницу</Link></p>
    </div>
  );
}

export default NotFoundPage;