import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand Link="/">Drachen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Our Products" id="basic-nav-dropdown">
              <NavDropdown.Item Link="#action/3.1">
                Wood Stoves
              </NavDropdown.Item>
              <NavDropdown.Item Link="#action/3.2">
                Pellet Stoves
              </NavDropdown.Item>
              <NavDropdown.Item Link="#action/3.3">
                Accessories
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item Link="#action/3.4">
                All Products
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link Link="/login">Login</Nav.Link>
          <Nav.Link Link="/contact">Contacto</Nav.Link>
          <Nav.Link Link="/aboutUs">About Us</Nav.Link>
          <Nav.Link Link="/cart">
            <i className="bi bi-cart3 mt-2"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
