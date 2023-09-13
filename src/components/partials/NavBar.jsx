import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Cart from "../Cart";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            className="mb-3 image-navbar"
            src="./src/assets/drachen_logo_black.png"
            alt="drachen logo"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <NavDropdown title="Our Products" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/productsWood">
                Wood Stoves
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="productsPellet">
                Pellet Stoves
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="productsAccessories">
                Accessories
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutUs">
              About Us
            </Nav.Link>
            <Nav.Link
              className="about-this-project"
              to="/aboutThisProject"
              as={Link}
            >
              About This Project
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={<i className="bi bi-person-fill"></i>}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to={"/login"}>
                Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/register"}>
                Sign up
              </NavDropdown.Item>
              <NavDropdown.Item>Log out</NavDropdown.Item>
            </NavDropdown>
            <Cart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
