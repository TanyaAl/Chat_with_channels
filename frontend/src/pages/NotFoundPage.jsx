import errorPage from '../assets/404.png'

const NotFoundPage = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <img alt="Page not found" src={errorPage} style={{ maxWidth: '40%', height: 'auto' }} />
      <h1>Страница не найдена</h1>
      <p>Но вы можете перейти на главную страницу</p>
    </div>
  );
}

export default NotFoundPage;