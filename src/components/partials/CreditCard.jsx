import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "../../styles/CreditCard.css";
const CreditCard = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <>
      <form>
        <div className="d-flex flex-column align-items-center">
          <div>
            <div className="input-card " style={{ width: "100%" }}>
              <label className="mx-1" htmlFor="number">
                Card Number
              </label>
              <input
                className="mb-2 border-bottom border-0"
                type="number"
                name="number"
                id="number"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                maxLength="16"
              />
            </div>
            <div className="input-card" style={{ width: "100%" }}>
              <label className="mx-1" htmlFor="name">
                Cardholder Name
              </label>
              <input
                className="border-bottom border-0 mb-2"
                type="text"
                name="name"
                id="name"
                value={state.name}
                style={{ width: "155px" }}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="input-card" style={{ width: "100%" }}>
              <label className="mx-1" htmlFor="expiry">
                MM/YY Expiry
              </label>
              <input
                className=" border-bottom border-0 mb-2"
                type="number"
                name="expiry"
                id="expiry"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="input-card" style={{ width: "100%" }}>
              <label className="mx-1" htmlFor="cvc">
                CVC
              </label>
              <input
                className="border-bottom border-0 "
                type="number"
                name="cvc"
                id="cvc"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
          </div>
        </div>
      </form>
      <div className="credit-container mb-3 mt-3">
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
      </div>
    </>
  );
};

export default CreditCard;
