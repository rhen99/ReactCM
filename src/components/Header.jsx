import { useAuthContext } from "../context/state/AuthState";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Header() {
  const { signOut } = useAuthContext();
  const logOut = (e) => {
    e.preventDefault();
    console.log(signOut());
  };
  return (
    <Navbar bg="primary" variant="dark" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">ReactCM</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsiveNav" />
        <Navbar.Collapse id="responsiveNav" className="justify-content-end">
          <Nav navbarScroll>
            <NavDropdown title="Account" id="navbarScrollingDropdown">
              <Form onSubmit={logOut}>
                <Button type="submit" variant="default">
                  Log Out
                </Button>
              </Form>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
