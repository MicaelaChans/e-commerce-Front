import "../styles/Cart.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { NavLink } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeAll, addItem, removeOneItem } from "../redux/cartSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cart = useSelector((state) => state.cart);
  const cartShow = [];
  const dispatch = useDispatch();
  let cartNumber = cart.length;
  let totalPrice = 0;
  let isProduct = false;
  const port = import.meta.env.VITE_APP_PORT;

  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price;
  }
  for (let i = 0; i < cart.length; i++) {
    for (let j = 0; j < cartShow.length; j++) {
      if (cartShow[j]) {
        if (
          cartShow[j].id == cart[i].id &&
          cartShow[j].stock > cartShow[j].quantity
        ) {
          cartShow[j].quantity++;
          cartShow[j].addMessage = "none";
          isProduct = true;
        }
        if (
          cartShow[j].id == cart[i].id &&
          cartShow[j].stock == cartShow[j].quantity
        ) {
          isProduct = true;
          cartShow[j].addMessage = "block";
        }
      } else {
        cartShow.push({ ...cart[i] });
        isProduct = true;
      }
    }
    if (!isProduct) {
      cartShow.push({ ...cart[i] });
    }
    isProduct = false;
  }

  function handlePlus(id) {
    for (let i = 0; i < cartShow.length; i++) {
      if (cartShow[i].id == id && cartShow[i].stock > cartShow[i].quantity) {
        dispatch(
          addItem({
            id: id,
            image: cartShow[i].image,
            name: cartShow[i].name,
            price: cartShow[i].price,
            quantity: 1,
            rating: [0],
          })
        );
      }
    }
  }

  function handleMinus(id) {
    for (let i = 0; i < cartShow.length; i++) {
      if (cartShow[i].id == id && cartShow[i].quantity > 1) {
        dispatch(removeOneItem(id));
      }
    }
  }

  function handleDelete(id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == id) {
        dispatch(removeOneItem(id));
      }
    }
  }

  async function handleCheckOut() {
    if (user && cart.length > 0) {
      await axios({
        url: `http://localhost:${port}/orders`,
        method: "POST",
        headers: {
          Authorization: "Bearer " + (user && user.token),
        },
        data: { user, cart },
      });
      dispatch(removeAll());
      navigate("/check-out");
      setShow(false);
    } else if (!user) {
      navigate("login");
      setShow(false);
    }
  }

  return (
    <>
      <NavLink onClick={handleShow}>
        <div className="cart-container">
          <p className="m-0 px-1 cart-number">{cartNumber}</p>
          <i className="bi bi-cart3 cart-icon mt-2"></i>
        </div>
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
        <Offcanvas.Body className="d-flex flex-column h-100 justify-content-between p-0">
          <div className="row mx-3 d-flex justify-content-center">
            {cartShow.map((item) => (
              <div key={item.id} className="row">
                <div className="total-price-line border-top" />
                <div className="col-6 p-3 d-flex justify-content-center">
                  <img
                    className="productImg"
                    src={item.image}
                    alt="productImg"
                  />
                </div>
                <div className="col-6 p-3 mt-2">
                  <h2 className="d-flex fs-5 ">{item.name}</h2>
                  <div className="d-flex align-items-center justify-content-between my-3">
                    {item.quantity > 1 ? (
                      <button
                        onClick={() => handleMinus(item.id)}
                        style={{ backgroundColor: "white", border: "none" }}
                      >
                        <i className="bi bi-dash-circle change-icon"></i>
                      </button>
                    ) : (
                      <div className="false-minus"></div>
                    )}

                    <p className="item-number mb-0 text-center rounded px-3">
                      {item.quantity}
                    </p>
                    <button
                      onClick={() => handlePlus(item.id)}
                      style={{ backgroundColor: "white", border: "none" }}
                    >
                      <i className="bi bi-plus-circle-fill change-icon"></i>
                    </button>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0 item-price">US$ {item.price}</p>
                    <button
                      style={{ backgroundColor: "white", border: "none" }}
                    >
                      <i
                        className="bi bi-trash3 cart-icon"
                        onClick={() => handleDelete(item.id)}
                      ></i>
                    </button>
                  </div>
                </div>

                <div
                  style={{ color: "red", display: `${item.addMessage}` }}
                  className="mx-4 mb-2"
                >
                  <p>
                    Atention! This product has reached the limit of items
                    available in stock. You can not add any other item of this
                    kind to the cart.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="total-price-section flex-column mx-3 pb-3">
            <div className="total-price-line border-top mb-3" />
            <h3>Total Price: US$ {totalPrice}</h3>
            <div>
              <button
                onClick={() => handleCheckOut()}
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
