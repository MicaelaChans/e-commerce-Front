function Footer() {
  return (
    <div className="container py-4 py-md-5 px-4 px-md-3" id="footer">
      <div className="row">
        <div className="col-lg-4">
          <span className="fs-3 m-3">Drachen</span>
          <div className="m-3">
            <i className="bi bi-linkedin"></i> <i className="bi bi-github"></i>
          </div>
        </div>
        <div className="col-6 col-lg-2 mb-3 p-3">
          <h5>About</h5>
          <ul className="list-unstyled text-white">
            <li className="mb-2">
              <a href="#" className="text-decoration-none text-secondary">
                Staff
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none text-secondary">
                Contact US
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none text-secondary">
                Advertise
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-lg-2 mb-3 p-3">
          <h5>Legal</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#" className="text-decoration-none text-secondary">
                Terms of Service
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none text-secondary">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none text-secondary">
                Privacy Dashboard
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-lg-2 mb-3"></div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-6 text-start mt-5 p-5 text-secondary">
                <p>Copyright @ Drachen 2023</p>
              </div>
              <div className="col-6 text-end mt-5 p-5 text-secondary">
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
