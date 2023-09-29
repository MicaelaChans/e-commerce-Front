import { Link } from "react-router-dom";
import "../styles/Thanks.css";

function ThanksForBuy() {
  return (
    <div className="thanks-container container d-flex flex-column justify-content-center align-items-center">
      <div className="thanks-box rounded-3 shadow py-3 d-flex flex-column align-items-center">
        <h3 className="pt-4">Thanks for buying!</h3>
        <p className="pb-2">Your order is being prepared.</p>
        <div className="d-flex align-items-center m-3">
          <i
            className="fa-solid fa-2x fa-box fa-beat px-2"
            style={{ color: "#098500" }}
          ></i>
          <div className="loader d-flex">
            <div />
            <div />
            <div />
            <div />
          </div>
          <i className="fa-solid fa-2x fa-truck-fast px-2"></i>
          <div className="loader-not d-flex">
            <div />
            <div />
            <div />
            <div />
          </div>
          <i className="fa-solid fa-2x fa-box-open px-2"></i>
        </div>
        <Link to={"/"} className="m-4">
          <button className="btn btn-light back-btn fw-semibold">
            Back to Home
          </button>
        </Link>
      </div>
      <div className="pt-5">
        <p className="text-center text-sm-start">
          For any problem whit your order you can{" "}
          <Link to={"/contact"} className="text-decoration-none fw-semibold">
            Contact Us
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ThanksForBuy;
