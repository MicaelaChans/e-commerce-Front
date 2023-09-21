import { Link } from "react-router-dom";
import "../styles/Thanks.css";

function ThanksForBuy() {
  return (
    <div className="thanks-container container d-flex justify-content-center align-items-center">
      <div className="thanks-box py-3 d-flex flex-column align-items-center">
        <h3 className="">Thanks for buying!</h3>
        <p>Your order is being prepared</p>
        <div className="d-flex align-items-center">
          <i
            className="fa-solid fa-2x fa-box fa-beat"
            style={{ color: "#098500" }}
          ></i>
          <div className="loader d-flex">
            <div />
            <div />
            <div />
            <div />
          </div>
          <i className="fa-solid fa-2x fa-truck-fast"></i>
          <div className="loader-not d-flex">
            <div />
            <div />
            <div />
            <div />
          </div>
          <i className="fa-solid fa-2x fa-box-open"></i>
        </div>
        <p>
          Return to <Link to={"/"}>Home</Link>
        </p>
      </div>
    </div>
  );
}

export default ThanksForBuy;
