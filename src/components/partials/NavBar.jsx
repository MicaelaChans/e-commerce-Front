import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div className="d-flex justify-content-between">
      <div>
        <NavLink>
          <i className="bi bi-justify navBarItems ms-3"></i>
        </NavLink>
      </div>
      <div>
        <h2 className="title App-header transition bignadpis">Drachen</h2>
      </div>
      <div>
        <NavLink>
          <i className="bi bi-cart3 navBarItems me-3"></i>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
