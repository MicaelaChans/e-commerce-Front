import "../styles/CheckOut.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { format } from "date-fns";
import { Link } from "react-router-dom";

function CheckOut() {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [paid, setPaid] = useState(false);

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

  const unpaidOrders =
    orders.length > 0 &&
    orders.filter(
      (order) => order.state === "Pending" && order.user.id === user.id
    );

  async function handlePay(id) {
    if (user) {
      setPaid(!paid);
      try {
        await axios({
          method: "PATCH",
          url: `http://localhost:8000/orders/${id}`,
          headers: {
            Authorization: "Bearer " + (user && user.token),
          },
        });
      } catch (error) {
        console.error("Error al pagar la orden:", error);
      }
    }
  }

  async function handleDelete(id) {
    if (user) {
      setPaid(!paid);
      try {
        await axios({
          method: "DELETE",
          url: `http://localhost:8000/orders/${id}`,
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

  return (
    orders[0] && (
      <div className="checkout-container">
        <div className="container checkOut">
          <div className="row check-row">
            <div className="col-12">
              <div>
                {unpaidOrders.map((order) => (
                  <div className="mt-3 rounded-3 shadow p-3" key={order.id}>
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
                            <div>
                              <h4>{product.name}</h4>
                            </div>
                            <div>
                              <h4>Unit price:</h4>
                              <p>US${product.price}</p>
                            </div>
                            <div>
                              <h4 className="my-0">Total Price:</h4>
                              <p className="my-0">Q x P</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="payment-info d-flex justify-content-around">
                        <div className="payment-title-container">
                          <h4 className="mx-3">Payment & delivery Info</h4>
                        </div>
                        <div>
                          <h6>Payment Method</h6>
                          <label style={{ display: "block" }}>
                            <input
                              type="radio"
                              className="circular-radio"
                              name="paymentMethod"
                              value="creditCard"
                            />{" "}
                            Credit card
                          </label>
                          <label style={{ display: "block" }}>
                            <input
                              type="radio"
                              className="circular-radio"
                              name="paymentMethod"
                              value="paypal"
                            />{" "}
                            Paypal
                          </label>
                        </div>
                        <div>
                          <h6>Total order price:</h6>
                          <p>US$ tanto</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 d-flex justify-content-between align-items-center">
                      <i
                        className="bi bi-trash3"
                        onClick={() => handleDelete(order.id)}
                        style={{ cursor: "pointer" }}
                      ></i>
                      <Link to={"/thanks"}>
                        <button
                          className="btn btn-lg buy-button ml-auto"
                          onClick={() => handlePay(order.id)}
                        >
                          Pay Order
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default CheckOut;
