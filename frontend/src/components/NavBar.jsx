import { Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      className="shadow-sm navbar navbar-expand-lg navbar-light bg-white"
    >
      <Container>
        <Navbar.Brand href="/">Hexlet-chat</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default NavBar;
