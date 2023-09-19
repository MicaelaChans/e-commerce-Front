import { useEffect, useState } from "react";
import "../styles/CheckOut.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function CheckOut() {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/orders`,
      });
      setOrders(response.data);
    };
    getOrders();
  }, []);
  console.log(orders);

  const unpaidOrders = orders.filter(
    (order) => order.state === "Not Payed" && order.user.id === user.id
  );
  const handlePay = async () => {
    console.log(unpaidOrders);
    if (user && user.id) {
      console.log(orders);
      try {
        await axios({
          method: "PATCH",
          url: `http://localhost:8000/orders/${orders._id}`,
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("El usuario no está autenticado o no tiene un ID válido.");
    }
  };
  return (
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
                <div key={order._id}>
                  <h4>{order._id}</h4>
                  <button onClick={() => handlePay(order._id)}>paagr ordenes</button>
                </div>
              ))}
            </ul>
          </div>
          <div className="col-6">
            <h3>medios de pago</h3>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
