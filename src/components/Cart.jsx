import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Cart() {
  const product = useSelector((state) => state.product);

  const handleDelete = async (productId) => {
    const response = await axios({
      url: `http://localhost:8000/product/${productId}`,
      method: "DELETE",
      data: { productId },
      headers: {
        //Authorization: "Bearer " + (user && user.token),
      },
    });
  };

  return (
    <div className="container rounded shadow mt-5 p-4" id="cartContainer">
      <h2>Cart</h2>
      <div className="row m-2">
        <div className="col-6 mt-3 p-3">
          <img
            src="data:image/jpeg;base64,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"
            alt="imgProduct"
          />
        </div>
        <div className="col-6 mt-3 p-3">
          <h2 className="d-flex">product.name</h2>
          <h5>Quantity:</h5>
          <select name="number" id="number">
            <option value="1">1</option>
          </select>
        </div>
      </div>
      <div>
        <button className="btn btn-outline-dark" id="purchase">
          Purchase
        </button>
      </div>
    </div>
  );
}
export default Cart;
/*{`${window.location.href}` ===
            `http://localhost:5173/${product._id}` ? (
              <button type="submit" onClick={() => handleDelete(product._id)}>
                <i className="bi bi-trash3 ms-auto"></i>
              </button>
            ) : (
              ""
            )}32 39*/
