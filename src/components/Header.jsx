import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ReactCM</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
