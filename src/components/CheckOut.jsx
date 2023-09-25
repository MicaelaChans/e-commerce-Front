import "../styles/CheckOut.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function CheckOut(props) {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [paid, setPaid] = useState(false);
  const navigate = useNavigate();
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showCreditCard, setShowCreditCard] = useState(false);
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [doorNumber, setDoorNumber] = useState("");
  const [apartment, setApartment] = useState("");
  const cart = [];
  const cartShow = [];
  let isProd = false;
  let totalPrice = 0;
  let unpaidOrders = [];

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/orders`,
        headers: {
          Authorization: "Bearer " + (user && user.token),
        },
      });
      setOrders(response.data);
    };
    getOrders();
  }, [paid]);
  if (orders.length > 0) {
   unpaidOrders = orders.filter((order) => order.state === "Pending" && order.user.id == user.id);
  }
 
  for (let i = 0; i < unpaidOrders.length; i++) {
    for (let j = 0; j < unpaidOrders[i].products.length; j++) {
      const prod = { ...unpaidOrders[i].products[j] };
      prod.quantity = 1;
      cart.push(prod);
    }
  }
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price;
  }
  for (let i = 0; i < cart.length; i++) {
    if (cartShow.length > 0) {
      for (let j = 0; j < cartShow.length; j++) {
        if (cart[i].id == cartShow[j].id) {
          cartShow[j].quantity++;
          isProd = true;
        }
      }
      if (!isProd) {
        cartShow.push(cart[i]);
      }
    } else {
      cartShow.push(cart[i]);
    }
    isProd = false;
  }


  async function handlePay(id) {
    if (user) {
      try {
        await axios({
          method: "PATCH",
          url: `http://localhost:8000/orders/${id}`,
          headers: {
            Authorization: "Bearer " + (user && user.token),
          },
        });
        setPaid(!paid);
      } catch (error) {
        console.error("Error al pagar la orden:", error);
      }
      navigate("/");
    }
  }

  function handleAddress() {
    setShowAddressForm(!showAddressForm);
  }

  async function handleDelete(id) {
    if (user) {
      setPaid(!paid);
      try {
        await axios({
          method: "DELETE",
          url: `http:localhost:8000/orders/${id}`,
          data: { orderId: id },
          headers: {
            Authorization: "Bearer " + (user && user.token),
          },
        });
      } catch (error) {
        console.error("Error at delete order:", error);
      }
    }
  }

  async function handleNewAddress(e) {
    e.preventDefault();
    const response = await axios({
      method: "PATCH",
      url: `http://localhost:8000/users/${user.id}`,
      data: { city, address, doorNumber, apartment },
    });
  }

  function handleCreditCard() {
    setShowCreditCard(!showCreditCard);
  }

  return (
    unpaidOrders && (
      <div className="container container-checkOut">
        <div className="text-center">
          <h1>Payment and delivery</h1>
        </div>
        <div className="row check-row">
          <div className="col-lg-6 col-12 col-check-out-cart">
            {unpaidOrders.map((order) => (
              <div className="mt-3 border rounded-3 shadow p-3" key={order.id}>
                <div className="d-flex justify-content-between align-items-center ">
                  <p className="mb-0 date-check-out">
                    {format(new Date(order.createdAt), "MMMM dd yyyy")}
                  </p>
                  <p className="mb-0 order-reference-check-out">
                    Order: <span style={{ fontWeight: "600" }}>{order.id}</span>{" "}
                  </p>
                </div>
                <hr />
                <div className="order-item">
                  {cartShow.map((product) => (
                    <div key={product.id}>
                      <div className="product-item d-flex justify-content-around">
                        <div>
                          <img
                            className="img-check-out"
                            src={product.image}
                            alt={product.name}
                          />
                        </div>
                        <div>
                          <h4>{product.name}</h4>
                          <p>Quantity x {product.quantity}</p>
                          <p className="fs-5">
                            US${product.price * product.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <hr />
                <div>
                  <div className="payment-info d-flex justify-content-around">
                    <div className="d-flex">
                      <h5 className="mx-3">Total order price: {totalPrice}</h5>
                    </div>
                  </div>
                </div>
                <div className="mt-2 d-flex justify-content-between align-items-center">
                  <button
                    className="btn btn-lg buy-button ml-auto w-100"
                    onClick={() => handlePay(order.id)}
                  >
                    Pay Order
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6 col-12 col-of-action">
            <div className="">
              <div className="rounded-3 shadow p-3">
                <h4>Delivery address</h4>
                <div>
                  <h6>Your address:</h6>
                  <p>{user.address}</p>
                </div>
                <div>
                  {showAddressForm ? (
                    <button
                      onClick={handleAddress}
                      className=" button-check-out-address"
                    >
                      Another direction?
                    </button>
                  ) : (
                    <button
                      onClick={handleAddress}
                      className=" button-check-out-address"
                    >
                      Another direction?
                    </button>
                  )}
                </div>
                {showAddressForm && (
                  <div className="form-check-out">
                    <h6>Delivery address:</h6>
                    <form className="form-check-out" action="">
                      <div className="d-flex justify-content-center form-container-check-out">
                        <label htmlFor="city">
                          City
                          <input
                            className="border-0 border-bottom"
                            type="text"
                            id="city"
                            value={setCity}
                            onChange={setCity}
                          />
                        </label>
                        <label htmlFor="address">
                          Address
                          <input
                            className="border-0 border-bottom"
                            type="text"
                            id="address"
                            value={setAddress}
                          />
                        </label>
                      </div>
                      <div className="d-flex">
                        <label className="mt-3" htmlFor="doorNumber">
                          Door Number
                          <input
                            className="w-100 d-block border-0 border-bottom"
                            type="number"
                            id="doorNumber"
                            maxLength="16"
                            onChange={setDoorNumber}
                            value={setDoorNumber}
                          />
                        </label>
                        <label className="mt-3" htmlFor="apartment">
                          Apartment
                          <input
                            className="w-100 d-block border-0 border-bottom"
                            type="number"
                            id="apartment"
                            value={setApartment}
                            onChange={setApartment}
                          />
                        </label>
                      </div>
                      <button
                        onClick={(e) => handleNewAddress(e)}
                        className="btn btn-danger mt-2"
                      >
                        set your new delivery addres
                      </button>
                    </form>
                  </div>
                )}
              </div>
              <div className="rounded-3 shadow p-3 mt-4">
                <div>
                  <h4>Payment methods</h4>
                </div>
                <div className="d-flex justify-content-around payment-container my-3">
                  <img
                    onClick={handleCreditCard}
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                    alt=""
                    className="payment-method-img"
                  />
                  <img
                    onClick={handleCreditCard}
                    className="payment-method-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORaeUdkq1oMG93bqTBXI1elJPOxG4bB40WixXXAmsOhJONUR-nGv1eqORZZZhiCjuBzA&usqp=CAU"
                    alt=""
                  />
                  <img
                    className="payment-method-img-paypal"
                    src="https://logodownload.org/wp-content/uploads/2014/10/paypal-logo-1-1.png"
                    alt=""
                  />
                  <img
                    src="https://logotipoz.com/wp-content/uploads/2021/10/version-horizontal-large-logo-mercado-pago.webp"
                    alt=""
                    className="payment-method-img-mp"
                  />
                </div>
                {showCreditCard ? <div></div> : <div>{props.children}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default CheckOut;
