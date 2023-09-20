import { useEffect, useState } from "react";
import "../styles/CheckOut.css";
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
          url: `http://localhost:8000/orders/${id}`,
        });
      } catch (error) {
        console.error("Error al pagar la orden:", error);
      }
    }
  }
  console.log("renderiza");
  console.log(unpaidOrders);
  return (
    unpaidOrders && (
      <div>
        <div className="container checkOut">
          <div className="row">
            <div className="col-6">
              <h1>check out</h1>
              <h2>unpaid Orders</h2>
            </div>
            <div>
              <ul>
                {unpaidOrders.map((order) => (
                  <div key={order.id}>
                    <h4>{order.name}</h4>

                    <h3>{order.id}</h3>
                    <button onClick={() => handlePay(order.id)}>
                      pagar ordenes
                    </button>
                  </div>
                ))}
              </ul>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
    )
  );
}

export default CheckOut;
