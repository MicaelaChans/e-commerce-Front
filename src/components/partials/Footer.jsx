import React from 'react';
import { Link } from "react-router-dom";


function Footer() {
return (
<div className="bg-body-tertiary">
  <div className="container ">
    <div className="row py-lg-4 pb-1 pt-0">
      <div className="col-12 col-lg-6 text-center text-lg-start">
        <img
          className="mb-3 image-navbar"
          src="./src/assets/drachen_logo_black.png"
            alt="drachen logo"
        />
        <p >For Drachen, heating is more than just a practical or aesthetic
          matter. We see our stoves as innovative pieces of forniture that suit
          a modern lifestyle.</p>
      </div>
      <div className="col-lg-3 col-6 pt-4 text-center">
         <h5 className="mb-3">PRODUCTS</h5>
         <Link className='footer-link' to={"/productsWood"}><p className="mb-2">Wood stoves</p></Link>
         <Link className='footer-link' to={"/productsPellet"}><p  className="mb-2">Pellet stoves</p></Link>
         <Link className='footer-link' to={"/productsAccessories"}><p className="mb-1">Accesories</p></Link>
      </div>
      <div className="col-lg-3 col-6 pt-4 text-center">
        <h5 className="mb-3">VISIT OUR STORE</h5>
        <p className="mb-2">Montevideo, Blvar Artigas 1574</p>
        <p>From 9:00 to 18:00</p>
      </div>
    </div>
  </div>
  <div className="row" style={{backgroundColor:"#efe9e4"}}>
      <div className="col py-3 d-flex justify-content-center" style={{fontSize:"1.5rem"}}>
        <i className="bi bi-instagram mx-2"></i>{" "}
        <i className="bi bi-twitter mx-2"></i>{" "}
        <i className="bi bi-facebook mx-2 "></i>{" "}
        <i className="bi bi-whatsapp mx-2"></i>{" "}
      </div>  
    </div>
</div>
  );
  


 


 /* return (
    <div className="container py-md-5 px-4 px-md-3" id="footer">
      <div className="row">
        <div className="col-lg-4">
          <span className="fs-1 m-3">Drachen</span>
          <div className="m-3">
            <h4>
              <i className="bi bi-instagram"></i>{" "}
              <i className="bi bi-twitter"></i>{" "}
              <i className="bi bi-facebook"></i>{" "}
              <i className="bi bi-whatsapp"></i>{" "}
            </h4>
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
  );*/
}

export default Footer;
