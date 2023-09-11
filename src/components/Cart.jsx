import React from "react";
import axios from "axios";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { NavLink } from "react-bootstrap";

function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <NavLink onClick={handleShow}>
        <i className="bi bi-cart3 mt-2"></i>
      </NavLink>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fs-3">Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="row">
            <div className="col-6 mt-3 p-3">
              <img
                className="productImg"
                src="https://empuruguay.uy/wp-content/uploads/2021/03/Forno-560-2.jpg"
                alt="productImg"
              />
            </div>
            <div className="col-6 mt-3 p-3">
              <h2 className="d-flex fs-4">
                product.name
                <button id="trashButton" type="submit">
                  <i className="bi bi-trash3 m-auto"></i>
                </button>
              </h2>
              <h5>product.price</h5>
              <h5>Quantity:</h5>
              <select name="number" id="number">
                <option value="1">1</option>
              </select>
            </div>
          </div>
          <div className="flex-column">
            <hr />
            <h3>Total Price:</h3>
            <div>
              <button className="btn btn-dark mt-3 shadow" id="purchase">
                Purchase
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
