import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Cart from "../Cart";
import { useSelector } from "react-redux";
import { useState } from "react";


function NavBar() { 
  const user = useSelector((state) => state.user);
  /*let displayLogin = "block";
  let displayLogout 
  const [displayLogout, setDisplayLogout] = useState("none");
  const [displaySignUp, setDisplaySignup] = useState("block");
  const [displayPurchases, setDisplayPurchases] = useState("none");
  const [displayCheckOut, setDisplayCheckOut] = useState("none");
  if(user){
    setDisplayLogin("none");
    setDisplayLogout("block");
    setDisplaySignup("none");
    setDisplayPurchases("block");
    setDisplayCheckOut("block");
  }else{
    setDisplayLogin("block");
    setDisplayLogout("none");
    setDisplaySignup("block");
    setDisplayPurchases("none");
    setDisplayCheckOut("none");
  }*/
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            className="mb-3 image-navbar"
            src="/assets/drachen_logo_black.png"
            alt="drachen logo"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <NavDropdown
              title="Our Products"
              className="mx-2"
              id="collasible-nav-dropdown"
            >
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
            <Nav.Link as={Link} className="mx-2" to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} className="mx-2" to="/aboutUs">
              About us
            </Nav.Link>
            <Nav.Link
              className="about-this-project mx-2"
              to="/aboutThisProject"
              as={Link}
            >
              About This Project
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={
                <i
                  className="bi bi-person-fill"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to={"/login"}>
                Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/register"}>
                Sign up
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/profile"}>
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/my-purchases"}>
                My purchases
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/"}>Log out</NavDropdown.Item>
            </NavDropdown>
            <Cart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
