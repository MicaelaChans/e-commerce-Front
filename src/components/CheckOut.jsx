import "../styles/CheckOut.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { format } from "date-fns";
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
      });
      setOrders(response.data);
    };
    getOrders();
  }, [paid]);

  const unpaidOrders =
    orders.length > 0 &&
    orders.filter(
      (order) => order.state === "Not Paid" && order.user.id === user.id
    );

  async function handlePay(id) {
    if (user) {
      setPaid(!paid);
      try {
        await axios({
          method: "PATCH",
          url: `http://localhost:8000/orders/${id}`,
        });
      } catch (error) {
        console.error("Error al pagar la orden:", error);
      }
    }
  }
  console.log(unpaidOrders);
  return (
    unpaidOrders && (
      <div className="checkout-container">
        <div className="container checkOut">
          <div className="row check-row">
            <div className="col-12">
              <div>
                {unpaidOrders.map((order) => (
                  <div
                    className="mt-3 border rounded-3 shadow p-3"
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
                    <div>
                      <div className="payment-info d-flex justify-content-between">
                        <div>
                          <h4 className="mx-3">Payment & delivery Info:</h4>
                        </div>
                        <div>
                          <h6>Total price:</h6>
                        </div>
                        <div>
                          <p>Payment Method</p>
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
                            />
                            Paypal
                          </label>
                        </div>
                        <div>
                          <h4>Total order price:</h4>
                          <h6>US$ tanto</h6>
                        </div>
                      </div>

                      <div className=" d-flex justify-content-end mt-2">
                        <button
                          className="btn btn-lg buy-button justify-content-end w-30"
                          onClick={() => handlePay(order.id)}
                        >
                          Pay Order
                        </button>
                      </div>
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
