import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

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
        <div className="d-flex">
          <div>
            <label htmlFor="number">Card Number</label>
            <input
              className="d-block responsive-input" 
              type="number"
              name="number"
              id="number"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              maxLength="16"
            />
            <label htmlFor="name">Cardholder Name</label>
            <input
              className="border-bottom border-0 d-block responsive-input"
              type="text"
              name="name"
              id="name"
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div>
            <label htmlFor="expiry">MM/YY Expiry</label>
            <input
              className="d-block responsive-input"
              type="number"
              name="expiry"
              id="expiry"
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <label htmlFor="cvc">CVC</label>
            <input
              className="border-bottom border-0 d-block responsive-input"
              type="number"
              name="cvc"
              id="cvc"
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
        </div>
      </form>
      <div className="credit-container mt-3">
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
