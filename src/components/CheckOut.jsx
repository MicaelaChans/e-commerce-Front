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
 
   const unpaidOrders = orders.length > 0 && orders.filter(
    (order) => order.state === "Not Payed" && order.user.id === user.id
  );

  async function handlePay (id)  {
    if (user) { 
        await axios({
          method: "PATCH",
          url: `http://localhost:8000/orders/${id}`,
        });
      }     
  };
 
  return unpaidOrders && ((
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
                  <h4>{order.id}</h4>
                
                <h3>medios de pago</h3>
                <button onClick={()=>handlePay(order.id)}>paagr ordenes</button> 
                </div>
              ))}
            </ul>
          </div>
          <div className="col-6">
            <h3>medios de pago</h3>
            <button onClick={handlePay}>paagr ordenes</button>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default CheckOut;
