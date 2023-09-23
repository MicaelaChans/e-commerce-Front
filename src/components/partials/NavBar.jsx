import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Cart from "../Cart";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { logout } from "../../redux/userSlice";
import { useLocation } from "react-router-dom";

function NavBar() {
  const user = useSelector((state) => state.user);
  const [aux, setAux] = useState(true);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const routesWithoutNavBar = ["/check-out"];
  const hideNavBar = routesWithoutNavBar.includes(location.pathname);
  let displayLogin = "block";
  let displaySignUp = "block";
  let displayProfile = "none";
  let displayLogout = "none";
  let displayPurchases = "none";
  if (user) {
    displayLogin = "none";
    displaySignUp = "none";
    displayProfile = "block";
    displayLogout = "block";
    displayPurchases = "block";
  }
  function handleLogout() {
    setExpanded(false);
    dispatch(logout());
    localStorage.setItem("showLogoutToast", "true");
    toast.success("Logged out successfully!");
  }

  return (
    !hideNavBar && (
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        expanded={expanded}
        style={{ width: "100vw" }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
            <img
              className="mb-3 image-navbar"
              src="/assets/drachen_logo_black.png"
              alt="drachen logo"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <NavDropdown
                title="Our Products"
                className="mx-2"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/productsWood"
                  onClick={() => setExpanded(false)}
                >
                  Wood Stoves
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="productsPellet"
                  onClick={() => setExpanded(false)}
                >
                  Pellet Stoves
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="productsAccessories"
                  onClick={() => setExpanded(false)}
                >
                  Accessories
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                className="mx-2"
                to="/contact"
                onClick={() => setExpanded(false)}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                className="about-this-project mx-2"
                to="/aboutThisProject"
                as={Link}
                onClick={() => setExpanded(false)}
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
                <NavDropdown.Item
                  as={Link}
                  to={"/login"}
                  style={{ display: `${displayLogin}` }}
                  onClick={() => setExpanded(false)}
                >
                  Login
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to={"/register"}
                  style={{ display: `${displaySignUp}` }}
                  onClick={() => setExpanded(false)}
                >
                  Sign up
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to={"/profile"}
                  style={{ display: `${displayProfile}` }}
                >
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to={"/check-out"}
                  style={{ display: `${displayProfile}` }}
                >
                  Go to cart
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to={"/my-purchases"}
                  style={{ display: `${displayPurchases}` }}
                  onClick={() => setExpanded(false)}
                >
                  My purchases
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to={"/"}
                  style={{ display: `${displayLogout}` }}
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
              <div onClick={() => setExpanded(false)}>
                <Cart />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  );
}

export default NavBar;
