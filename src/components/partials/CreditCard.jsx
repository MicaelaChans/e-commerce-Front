import  { useState } from "react";
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
    <div className="credit-container">
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />

      <form>
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="name"
          placeholder="Cardholder Name"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="number"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="number"
          name="cvc"
          placeholder="CVC"
          value={state.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </form>
    </div>
  );
};

export default CreditCard;


/*
<div className="mt-3 border rounded-3 shadow p-3"
                    key={order.id}
                  >
                    <div className="d-flex justify-content-between align-items-center ">
                      <p className="mb-0">
                        {format(new Date(order.createdAt), "MMMM dd yyyy")}
                      </p>
                      <p className="mb-0 order-reference">
                        Order:{" "}
                        <span style={{ fontWeight: "600" }}>{order.id}</span>{" "}
                      </p>
                    </div>
                    <hr />
                    <div className="order-item">
                      {order.products.map((product) => (
                        <div key={product.id}>
                          <div className="product-item d-flex justify-content-around">
                            <div>
                              <img
                                className="img-check-out"
                                src={product.image}
                                alt={product.name}
                              />
                            </div>
                            <div className="product-details">
                              <h3>{product.name}</h3>
                            </div>

                            <div>
                              <h4>Unit price:</h4>
                              <p>US${product.price}</p>
                              <p>Quantity: 1</p>
                            </div>
                            <div>
                              <h6>Total Price:</h6>
                              <p>Q x P</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
*/