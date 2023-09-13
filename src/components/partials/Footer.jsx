import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className="container py-md-5 px-4 px-md-3" id="footer">
      <div className="row">
        <div className="col-lg-4">
          <span className="fs-1 ">Drachen</span>
          <div className="">
            <h3>
              <i className="bi bi-linkedin"></i>{" "}
              <i className="bi bi-github"></i>
            </h3>
          </div>
        </div>
        <div className="col-6 col-lg-2 mb-3 p-3">
          <h5>About</h5>
          <ul className="list-unstyled text-white">
            <li className="mb-2">
              <NavLink to="#" className="text-decoration-none text-white">
                Staff
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="#" className="text-decoration-none text-white">
                Contact US
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="#" className="text-decoration-none text-white">
                Advertise
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-6 col-lg-2 mb-3 p-3">
          <h5>Legal</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <NavLink to="#" className="text-decoration-none text-white">
                Terms of Service
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="#" className="text-decoration-none text-white">
                Privacy Policy
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="#" className="text-decoration-none text-white">
                Privacy Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-6 text-start text-white">
                <p>Copyright @ Drachen 2023</p>
              </div>
              <div className="col-6 text-end text-white">
                <p>Privacy Policy - Terms & Conditions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
