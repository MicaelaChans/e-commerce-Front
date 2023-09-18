import "../styles/Cart.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { NavLink } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice";
import axios from "axios";

function Cart() {
  const [show, setShow] = useState(false);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const counter = useSelector((state) => state.cart.counter);
  const dispatch = useDispatch();
  console.log(user);
  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };
  console.log(cartItems);
  const handleCheckOut = async () => {
    if (user) {
      console.log("esta log.");
      const newOrder = {cartItems.}
    }
  };

  return (
    <>
      <NavLink onClick={handleShow}>
        <i className="bi bi-cart3 mt-2" style={{ fontSize: "1.5rem" }}>
          <sup>{counter}</sup>
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
            {cartItems.map((item) => (
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
                  <p className="fs-6">USD {item.price}</p>
                  <i
                    className="bi bi-trash-5 d-flex justify-content-end flex-end"
                    onClick={() => handleRemoveItem(item.id)}
                  ></i>
                </div>
                <div>
                  <h3>Cantidad:{item.quantity}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-column">
            <hr />
            <h3>Total Price:</h3>
            <div>
              <button
                onClick={handleCheckOut}
                className="btn btn-dark mt-3 shadow"
                id="checkOut"
              >
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
