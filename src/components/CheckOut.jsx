import "../styles/CheckOut.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
function CheckOut(props) {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [paid, setPaid] = useState(false);
  const navigate = useNavigate();
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
      try {
        await axios({
          method: "PATCH",
          url: `http://localhost:8000/orders/${id}`,
          headers: {
            Authorization: "Bearer " + (user && user.token),
          },
        });
        setPaid(!paid);
        navigate("/check-out");
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
    unpaidOrders && (
      <div className="container container-checkOut">
        <div className="title-check-out">
          <h1>Paiment and delivery</h1>
        </div>
        <div className="row check-row">
          <div className="col-6 col-check-out-cart">
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

                          <p className="fs-5">US${product.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <hr />
                <div>
                  <div className="payment-info d-flex justify-content-around">
                    <div className="d-flex">
                      <h6 className="mx-3">Total order price:</h6>
                      <p>US$ tanto</p>
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
          <div className="col-6 col-of-action">
            <div className="">
              <div className="rounded-3 shadow p-3">
                <h4>Delivery address</h4>

                <form className="form-check-out" action="">
                  <div className="d-flex justify-content-between">
                    <label htmlFor="">
                      {" "}
                      City{" "}
                      <input className="border-0 border-bottom" type="text" />
                    </label>
                    <label htmlFor="">
                      {" "}
                      Adress{" "}
                      <input className="border-0 border-bottom" type="text" />
                    </label>
                  </div>
                  <div className="d-flex">
                    <label className="mt-3" htmlFor="">
                      {" "}
                      Door Number{" "}
                      <input
                        className="w-100 d-block border-0 border-bottom"
                        type="number"
                      />
                    </label>
                    <label className="mt-3" htmlFor="">
                      {" "}
                      Apartment{" "}
                      <input
                        className="w-100 d-block border-0 border-bottom"
                        type="number"
                      />
                    </label>
                  </div>
                </form>
              </div>
              <div className="rounded-3 shadow p-3 mt-4">
                <div>
                  <h4>Payment methods</h4>
                </div>
                <div className="d-flex justify-content-around payment-container my-3">
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
                    src="https://logotipoz.com/wp-content/uploads/2021/10/version-horizontal-large-logo-mercado-pago.webp"
                    alt=""
                    className="payment-method-img-mp"
                  />
                </div>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default CheckOut;
