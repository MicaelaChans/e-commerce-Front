import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-body-tertiary">
      <div className="container ">
        <div className="row py-lg-4 pb-1 pt-0">
          <div className="col-12 col-lg-6 text-lg-start">
            <img
              className="mb-3 image-navbar"
              src="/assets/drachen_logo_black.png"
              alt="drachen logo"
            />
            <p>
              For Drachen, heating is more than just a practical or aesthetic
              matter. We see our stoves as innovative pieces of forniture that
              suit a modern lifestyle.
            </p>
          </div>
          <div className="col-lg-3 col-6 pt-4 ">
            <h5 className="mb-3">PRODUCTS</h5>
            <Link className="footer-link" to={"/productsWood"}>
              <p className="mb-2">Wood stoves</p>
            </Link>
            <Link className="footer-link" to={"/productsPellet"}>
              <p className="mb-2">Pellet stoves</p>
            </Link>
            <Link className="footer-link" to={"/productsAccessories"}>
              <p className="mb-1">Accesories</p>
            </Link>
          </div>
          <div className="col-lg-3 col-6 pt-4 ">
            <h5 className="mb-3">VISIT OUR STORE</h5>
            <p className="mb-2">Montevideo, Blvar Artigas 1574</p>
            <p>From 9:00 to 18:00</p>
          </div>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "#efe9e4" }}>
        <div
          className="col py-3 d-flex justify-content-center"
          style={{ fontSize: "1.5rem" }}
        >
          <i className="bi bi-instagram mx-2"></i>{" "}
          <i className="bi bi-twitter mx-2"></i>{" "}
          <i className="bi bi-facebook mx-2 "></i>{" "}
          <i className="bi bi-whatsapp mx-2"></i>{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
