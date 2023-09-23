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
        <div className="d-flex justify-content-between">
          <div>
            <label htmlFor="">
              Card Number{" "}
              <input
                className="border-0 border-bottom"
                type="number"
                name="number"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </label>
            <label className="mt-3" htmlFor="">
              Cardholder Name
              <input
                className="border-0 border-bottom"
                type="text"
                name="name"
                value={state.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              {" "}
              MM/YY Expiry
              <input
                className="border-0 border-bottom"
                type="number"
                name="expiry"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </label>
            <label className="mt-3" htmlFor="">
              {" "}
              CVC{" "}
              <input
                className="border-0 border-bottom"
                type="number"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </label>
          </div>
        </div>
      </form>
      <div className="credit-container m-4">
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
