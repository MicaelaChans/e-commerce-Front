import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import Cart from "../Cart";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/">Drachen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Our Products" id="basic-nav-dropdown">
              <NavDropdown.Item to="#action/3.1">Wood Stoves</NavDropdown.Item>
              <NavDropdown.Item to="#action/3.2">
                Pellet Stoves
              </NavDropdown.Item>
              <NavDropdown.Item to="#action/3.3">Accessories</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#action/3.4">All Products</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link to="/login">Login</Nav.Link>
          <Nav.Link to="/contact">Contacto</Nav.Link>
          <Nav.Link to="/aboutUs">About Us</Nav.Link>
          <Nav.Link to="/cart"></Nav.Link>
          <Cart />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
