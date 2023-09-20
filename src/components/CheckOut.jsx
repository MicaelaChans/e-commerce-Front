import "../styles/CheckOut.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

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

  return (
    unpaidOrders && (
      <div className="checkout-container">
        <div className="container checkOut">
          <div className="row check-row">
            <div className="col-8">
              <ul>
                {unpaidOrders.map((order) => (
                  <div className="order-item" key={order.id}>
                    {order.products.map((product) => (
                      <div className="product-item" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div className="product-details">
                          <h3>{product.name}</h3>
                          <p>Price: ${product.price}</p>
                          <p>Quantity: {product.length}</p>
                        </div>
                      </div>
                    ))}
                    <button onClick={() => handlePay(order.id)}>
                      Pay Order
                    </button>
                  </div>
                ))}
              </ul>
            </div>
            <div className="col-4">
              <div className="payment-info">
                <h2>Payment Info</h2>
                <p>Payment Method</p>
                <label>
                  <input type="checkbox" className="circular-checkbox" /> Credit
                  card
                </label>
                <label>
                  <input type="checkbox" className="circular-checkbox" /> Paypal
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default CheckOut;
