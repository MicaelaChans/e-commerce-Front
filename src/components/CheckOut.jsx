import "../styles/CheckOut.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function CheckOut(props) {
  const [orders, setOrders] = useState([]);
  const user = useSelector((state) => state.user);
  const [paid, setPaid] = useState(false);
  const navigate = useNavigate();
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showCreditCard, setShowCreditCard] = useState(false);
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [doorNumber, setDoorNumber] = useState("");
  const [apartment, setApartment] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [updatedAddress, setUpdatedAddress] = useState("");
  let noProdMsg = "none";

  let canBuy = true;
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
    unpaidOrders = orders.filter(
      (order) => order.state === "Pending" && order.user.id == user.id
    );
  }

  for (let i = 0; i < unpaidOrders.length; i++) {
    for (let j = 0; j < unpaidOrders[i].products.length; j++) {
      const prod = { ...unpaidOrders[i].products[j] };
      prod.quantity = 1;
      prod.stockMessage = "none";
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

  for (let i = 0; i < cartShow.length; i++) {
    if (cartShow[i].quantity > cartShow[i].stock) {
      canBuy = false;
      cartShow[i].stockMessage = "block";
    }
  }

  async function handlePay(id) {
    if (!selectedPaymentMethod) {
      toast.error("Please select a payment method before proceeding.");
      return;
    }
    if (user && canBuy && cartShow.length > 0) {
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
      navigate("/thanks-for-buying");
    } else if (user && cartShow.length == 0) {
      toast.error("There are no items in the order.");
    }
  }

  function handleAddress() {
    setShowAddressForm(!showAddressForm);
  }

  async function handleDelete(id) {
    setPaid(!paid);
    try {
      await axios({
        method: "DELETE",
        url: `http://localhost:8000/orders/${id}`,
        data: { orderId: unpaidOrders[0].id },
        headers: {
          Authorization: "Bearer " + (user && user.token),
        },
      });
    } catch (error) {
      console.error("Error at delete order:", error);
    }
  }

  function handleNewAddress(e) {
    e.preventDefault();
    try {
      const fullAddress = `${city}, ${street} ${doorNumber}, Apt. ${apartment}`;
      setUpdatedAddress(fullAddress);
      toast.success("Address updated successfully!");
    } catch (error) {
      console.error("Error updating address:", error);
      toast.error("Error updating address. Please try again.");
    }
  }

  function handleCreditCard(type) {
    console.log(type);
    if (type == "Visa - Credit Card" || type == "MasterCard - Credit Card") {
      setShowCreditCard(true);
    } else {
      setShowCreditCard(false);
    }
  }
  const handleImageClick = (type) => {
    handleCreditCard(type);
    setSelectedPaymentMethod(type);
  };

  if (unpaidOrders[0] && unpaidOrders[0].products.length == 0) {
    noProdMsg = "block";
  } else {
    noProdMsg = "none";
  }

  return unpaidOrders.length > 0 ? (
    <div className="container container-checkOut">
      <ToastContainer />
      <div className="text-center header-pay mb-4">
        <h1>Payment and delivery</h1>
      </div>

      <div className="row check-row">
        <div className="col-12 col-check-out-cart ">
          {unpaidOrders.map((order) => (
            <div
              className="mt-3 border rounded-3 shadow p-3 mb-4"
              key={order.id}
            >
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
                <div style={{ display: `${noProdMsg}` }}>
                  <h4 className="text-center fs-5">
                    There are no products pending to be paid
                  </h4>
                </div>
                {cartShow.map((product) => (
                  <div key={product.id}>
                    <div className="product-item mb-1 d-flex align-items-center justify-content-between">
                      <div className="mx-4">
                        <img
                          className="img-check-out"
                          src={product.image}
                          alt={product.name}
                        />
                      </div>

                      <div>
                        <div className="d-flex flex-column justify-content-end">
                          <h4
                            className="mt-2 fs-4 mb-1"
                            style={{ width: "180px" }}
                          >
                            {product.name}
                          </h4>
                          <p className="mb-1">Quantity x {product.quantity}</p>
                          <p className=" mb-0">
                            US$ {product.price * product.quantity}
                          </p>
                          <button
                            className="text-start"
                            style={{ backgroundColor: "white", border: "none" }}
                          >
                            <i
                              className="bi bi-trash3 cart-icon "
                              onClick={() => handleDelete(product.id)}
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="mx-3"
                      style={{
                        display: `${product.stockMessage}`,
                        color: "red",
                      }}
                    >
                      <p>
                        Sorry, there are {product.stock} items available of this
                        product. Please, delete it from the order to continue.
                      </p>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="col-12 col-md-6 ">
          <div className="rounded-3 border shadow p-3  mt-lg-0 mb-4 mb-lg-4">
            <h4 className="mb-3">Delivery address</h4>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6>Your address:</h6>
                <p>{user.address}</p>
              </div>
              <div className="mb-2">
                {showAddressForm ? (
                  <button
                    onClick={handleAddress}
                    className="btn btn-outline-dark"
                  >
                    New address
                  </button>
                ) : (
                  <button
                    onClick={handleAddress}
                    className="btn btn-outline-dark"
                  >
                    New address
                  </button>
                )}
              </div>
            </div>

            {showAddressForm && (
              <div className="form-check-out">
                <h6 className="my-3">Delivery address:</h6>
                <form className="form-check-out" onSubmit={handleNewAddress}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="city" className="form-label">
                        City:
                      </label>
                      <input
                        className="border-0 border-bottom"
                        type="text"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="street" className="form-label">
                        Street:
                      </label>
                      <input
                        className="border-0 border-bottom"
                        type="text"
                        id="street"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="doorNumber" className="form-label">
                        Door Number:
                      </label>
                      <input
                        className="border-0 border-bottom"
                        type="number"
                        id="doorNumber"
                        maxLength="16"
                        value={doorNumber}
                        onChange={(e) => setDoorNumber(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="apartment" className="form-label">
                        Apartment:
                      </label>
                      <input
                        className="border-0 border-bottom"
                        type="number"
                        id="apartment"
                        value={apartment}
                        onChange={(e) => setApartment(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-sm-end justify-content-center">
                    <button type="submit" className="btn btn-dark mt-2 ">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="rounded-3 border shadow p-3 mb-4 ">
            <div>
              <h4>Payment methods</h4>
            </div>
            <div className="d-flex justify-content-around payment-container my-3">
              <img
                onClick={() => handleImageClick("Visa - Credit Card")}
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt="Visa"
                className={`payment-method-img ${
                  selectedPaymentMethod === "Visa - Credit Card"
                    ? "selected-payment"
                    : ""
                }`}
              />
              <img
                onClick={() => handleImageClick("MasterCard - Credit Card")}
                className={`payment-method-img ${
                  selectedPaymentMethod === "MasterCard - Credit Card"
                    ? "selected-payment"
                    : ""
                }`}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORaeUdkq1oMG93bqTBXI1elJPOxG4bB40WixXXAmsOhJONUR-nGv1eqORZZZhiCjuBzA&usqp=CAU"
                alt="MasterCard"
              />
              <img
                onClick={() => handleImageClick("Paypal")}
                className={`payment-method-img-paypal ${
                  selectedPaymentMethod === "Paypal" ? "selected-payment" : ""
                }`}
                src="https://logodownload.org/wp-content/uploads/2014/10/paypal-logo-1-1.png"
                alt="PayPal"
              />
              <img
                onClick={() => handleImageClick("MercadoPago")}
                src="https://logotipoz.com/wp-content/uploads/2021/10/version-horizontal-large-logo-mercado-pago.webp"
                alt="MercadoPago"
                className={`payment-method-img-mp ${
                  selectedPaymentMethod === "MercadoPago"
                    ? "selected-payment"
                    : ""
                }`}
              />
            </div>
            {showCreditCard ? <div>{props.children}</div> : <div></div>}
          </div>
        </div>
        {unpaidOrders.map((order) => (
          <div key={order.id}>
            <div className="col-12 mt-3">
              <div className="order-summary rounded-3 border shadow p-3">
                <h4 className="mb-2">Order Summary:</h4>
                <p className="mb-2 pt-3 d-flex justify-content-between">
                  <strong>Date:</strong>{" "}
                  {format(new Date(order.createdAt), "MMMM dd yyyy, HH:mm")}
                </p>
                <p className="border-top mb-2 pt-3 d-flex justify-content-between">
                  <strong>Order ID:</strong> {order.id}
                </p>
                <p className="border-top mb-2 pt-3 d-flex justify-content-between">
                  <strong>Delivery Address:</strong>{" "}
                  {updatedAddress || user.address}
                </p>
                <p className="border-top mb-2 pt-3 d-flex justify-content-between">
                  <strong>Payment Method:</strong> {selectedPaymentMethod}
                </p>
                <p className="border-top border-bottom pb-3 pt-3 d-flex justify-content-between">
                  <strong>Total Price:</strong> US${totalPrice}
                </p>
                <div className="d-flex justify-content-sm-end justify-content-center">
                  <button
                    onClick={() => handlePay(order.id)}
                    className="btn btn-lg buy-button mt-0"
                  >
                    Pay Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="col-12 col-check-out-cart mt-4 p-3">
      <div className="text-center header-pay mb-4">
        <h1>Payment and delivery</h1>
      </div>

      <div className="mt-3 border rounded-3 shadow p-3 mb-4">
        <div className="d-flex justify-content-between align-items-center ">
          <p className="mb-0 date-check-out"></p>
          <p className="mb-0 order-reference-check-out"></p>
        </div>
        <hr />
        <div className="order-item">
          <div>
            <h4 className="text-center fs-5">
              There are no products pending to be paid
            </h4>
          </div>
        </div>
        <hr />
      </div>
      <div className="d-flex justify-content-center">
        <Link to={"/"}>
          <button type="submit" className="btn btn-dark mt-2 btn-lg ">
            Go home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CheckOut;
