import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
function Header() {
  return (
    <Navbar bg="primary" variant="dark" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">ReactCM</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsiveNav" />
        <Navbar.Collapse id="responsiveNav" className="justify-content-end">
          <Nav navbarScroll>
            <NavDropdown title="Account" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
