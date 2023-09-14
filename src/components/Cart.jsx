import React from "react";
import "../styles/Cart.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { NavLink } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice";

function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <>
      <NavLink onClick={handleShow}>
        <i className="bi bi-cart3 mt-2" style={{ fontSize: "1.5rem" }}>
          {" "}
          <sup>(1)</sup>{" "}
        </i>
      </NavLink>
      <Offcanvas
        placement="end"
        show={show}
        onHide={handleClose}
        className="w-25%"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fs-3">Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column h-100 justify-content-between">
          <div className="row">
            {cart.map((item) => (
              <div key={item.id} className="row">
                <div className="col-6 mt-3 p-3">
                  <img
                    className="productImg"
                    src={item.image}
                    alt="productImg"
                  />
                </div>
                <div className="col-6 mt-3 p-3 ">
                  <h2 className="d-flex fs-4">{item.name}</h2>
                  <select name="number" id="number">
                    <option value="1">1</option>
                  </select>
                  <p className="fs-5">USD {item.price}</p>
                  <i
                    className="bi bi-trash3 fs-5 d-flex justify-content-end flex-end"
                    onClick={() => handleRemoveItem(item.id)}
                  ></i>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-column">
            <hr />
            <h3>Total Price:</h3>
            <div>
              <button className="btn btn-dark mt-3 shadow" id="checkOut">
                Check Out
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
