import "../styles/CheckOut.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { format } from "date-fns";

function CheckOut(props) {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        method: "GET",
        url: `http:localhost:8000/orders`,
      });
      setOrders(response.data);
    };
    getOrders();
  }, [paid]);
  console.log(orders);
  const unpaidOrders =
    orders.length > 0 &&
    orders.filter(
      (order) => order.state === "Not Paid" && order.user.id === user.id
    );
  console.log(unpaidOrders);
  async function handlePay(id) {
    if (user) {
      setPaid(!paid);
      try {
        await axios({
          method: "PATCH",
          url: `http:localhost:8000/orders/${id}`,
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
          url: `http:localhost:8000/orders/${id}`,
          data: { orderId: id },
        });
      } catch (error) {
        console.error("Error at delete order:", error);
      }
    }
  }

  return (
    <div className="container container-checkout">
      <div className="row">
        <div className="col-5 col-of-action">{props.children}</div>
        <div className="col-7">
          <div>
            <h2>Complete and deliver your order</h2>
          </div>
          <div className="row w-100 border border-black check-out-items">
            {unpaidOrders.map((order) => (
              <div key={order.id} className="col-6">
                {order.products.map((product) => (
                  <div key={product.id}>
                    <img
                      className="check-out-img"
                      src={product.image}
                      alt={product.name}
                    />
                    <h4>{product.name}</h4>
                    <h6>quantity</h6>
                    <p>unit price</p>
                  </div>
                ))}
                <div className="mt-2 d-flex justify-content-between">
                  <div>
                    <i
                      className="bi bi-trash3"
                      onClick={() => handleDelete(order.id)}
                    ></i>
                  </div>
                  <div>
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
          <div>
            <div className="my-3">
              <h4>Total price: US$ tanto</h4>
            </div>
          </div>
          <div>
            <h4>Delivery address</h4>
            <form action="">
              <label htmlFor="">
                <input type="text" placeholder="city" />
              </label>
              <label htmlFor="">
                <input type="text" placeholder="address" />
              </label>
              <label htmlFor="">
                <input type="number" placeholder="door number" />
              </label>
              <label htmlFor="">
                <input type="number" placeholder="apartment" />
              </label>
            </form>
          </div>
          <div>
            <h4>Payment methods</h4>
          </div>
          <div className="d-flex justify-content-around payment-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt=""
              className="payment-method-img"
            />
            <img
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
              src="https://i.pinimg.com/originals/a8/d1/e2/a8d1e2ded2b3264ec618c059af0c0b70.png"
              alt=""
              className="payment-method-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
