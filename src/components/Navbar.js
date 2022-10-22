import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import GoogleLogOut from "./../components/sharable/GoogleLogOut";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <GoogleLogOut />
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;