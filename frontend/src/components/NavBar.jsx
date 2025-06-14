import { Navbar, Container, Button } from 'react-bootstrap';
import useAuth from '../hooks/index.jsx';

const NavBar = () => {
  const auth = useAuth();
  return (
    <Navbar
      expand="lg"
      className="shadow-sm navbar navbar-expand-lg navbar-light bg-white"
    >
      <Container>
        <Navbar.Brand href="/">Hexlet-chat</Navbar.Brand>
        {auth.loggedIn && (
          <Button
            onClick={auth.logOut}
            type="button"
            className="btn btn-primary ms-auto"
          >
            Выйти
          </Button>
        )}
      </Container>
    </Navbar>
  );
};
export default NavBar;
