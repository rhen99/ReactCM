import { useAuthContext } from "../context/state/AuthState";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
function Header() {
  const { user, removeUser } = useAuthContext();
  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    removeUser();
  };
  return (
    <Navbar bg="primary" variant="dark" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">ReactCM</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsiveNav" />
        <Navbar.Collapse id="responsiveNav" className="justify-content-end">
          <Nav navbarScroll>
            {user && (
              <NavDropdown title="Account" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#" onClick={logOut}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
