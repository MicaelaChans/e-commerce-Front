import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-0">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            className="mb-3 image-navbar"
            src="./src/assets/drachen_logo_black.png"
            alt="drachen logo"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <NavDropdown
              className="mx-3"
              title="Our Products"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="#action/3.1">
                Wood Stoves
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.2">
                Pellet Stoves
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.3">
                Accessories
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#action/3.4">
                All Products
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/aboutUs">
            About Us
          </Nav.Link>
          <NavDropdown
            title={<i className="bi bi-person-fill"></i>}
            id="basic-nav-dropdown"
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
          <Nav.Link as={Link}>Admin</Nav.Link>
          <Nav.Link className="about-this-project" as={Link}>
            About this project
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
