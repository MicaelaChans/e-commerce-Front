import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/MyPurchases.css";
import { useSelector } from "react-redux";
import { format, formatDistanceToNow } from "date-fns";
import Footer from "./partials/Footer";
import { Rating } from "react-simple-star-rating";

function Register() {
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);
  const [orders, setOrders] = useState([]);
  const productsOfUser = [];
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleRate = async (product) => {
    console.log(product);
    const productId = product.id;
    await axios({
      method: "PATCH",
      url: `http://localhost:8000/products/${productId}`,
      headers: {
        Authorization: "Bearer " + (user && user.token),
      },
      data: { rating: rating },
    });
  };

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
  }, []);

  if (orders.length > 0 && user != null) {
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].user.id == user.id && orders[i].state != "Pending") {
        for (let j = 0; j < orders[i].products.length; j++) {
          productsOfUser.push({
            orderId: orders[i].id,
            date: orders[i].createdAt,
            state: orders[i].state,
            id: orders[i].products[j].id,
            name: orders[i].products[j].name,
            image: orders[i].products[j].image,
            price: orders[i].products[j].price,
          });
        }
      }
    }
  }

  return productsOfUser[0] ? (
    <div>
      <div className="container mb-5" style={{ marginTop: "160px" }}>
        <h1 className="mx-3 title">My Purchases</h1>
        <div className="row">
          <div className="col">
            <div className="mt-5  border rounded-3 shadow d-flex justify-content-center p-3">
              <h4 className="mb-0 mx-3 text-center">
                You purchased {productsOfUser.length} products
              </h4>
            </div>

            {productsOfUser.map((product, id = product.id) => (
              <div key={id} className="mt-3 border rounded-3 shadow p-3">
                <div className="d-flex justify-content-between align-items-center ">
                  <p className="mb-0">
                    {" "}
                    {format(new Date(product.date), "MMMM dd yyyy")}
                  </p>
                  <p className="mb-0 order-reference">
                    Order:{" "}
                    <span style={{ fontWeight: "600" }}>{product.orderId}</span>{" "}
                  </p>
                </div>
                <hr />
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      className="product-image"
                      src={product.image}
                      alt={product.name}
                    />
                    <div className="mx-2 d-flex flex-column">
                      <p className="mb-3 mx-2">{product.state}</p>
                      <p className="mb-0 mx-2 product-name">{product.name}</p>
                      <p className="mb-0 mx-2">
                        Price:{" "}
                        <span className="product-name">
                          USD {product.price}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center flex-column flex-sm-row">
                    <Link to={`/products/${product.id}`}>
                      <button className="btn buy-button mb-2 mb-sm-0 mx-0 mx-sm-2">
                        Buy again
                      </button>
                    </Link>
                    <button
                      onClick={() => handleRate(product)}
                      className="btn rate-button"
                    >
                      Rate
                    </button>
                    <div>
                      <Rating onClick={handleRating} ratingValue={rating} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2 className="my-5 title">Products you also might like</h2>
        <div className="mt-5 d-flex flex-column flex-sm-row justify-content-around ">
          <div className="col-12 col-sm-3 p-lg-3 p-2  text-center border rounded-3 shadow mb-4 mb-sm-0">
            <h4 className="mb-3 other-products-name">Aduro P1</h4>
            <img
              className="other-images "
              src="https://www.adurofire.com/typo3temp/assets/_processed_/8/f/csm_aduro-p1-round-pellet-stove-withmatt-surface_01_a7c9377bf6.png"
              alt="aduroP1"
            />
            <div className="d-flex flex-column mt-3">
              <Link>
                <button className="btn buy-button ">Add to cart</button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-3 p-lg-3 p-2  text-center border rounded-3 shadow my-4 my-sm-0">
            <h4 className="mb-3 other-products-name">Aduro P1.3</h4>
            <img
              className="other-images"
              src="https://www.adurofire.com/typo3temp/assets/_processed_/4/9/csm_aduro-p1-3-round-pellet-stove-with-black-glass-sides_01_0545dab144.png"
              alt="aduroP1.3"
            />
            <div className="d-flex flex-column mt-3">
              <Link>
                <button className="btn buy-button">Add to cart</button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-3  p-lg-3 p-2 text-center border rounded-3 shadow my-4 my-sm-0">
            <h4 className="mb-3 other-products-name">Aduro P1.4</h4>
            <img
              className="other-images"
              src="https://www.adurofire.com/typo3temp/assets/_processed_/f/9/csm_aduro-p1-4-round-pellet-stove-with-white-glass-sides_01_80b032ab41.png"
              alt="aduroP1.4"
            />
            <div className="d-flex flex-column mt-3">
              <Link>
                <button className="btn buy-button ">Add to cart</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  ) : (
    <div className="container mb-5" style={{ marginTop: "160px" }}>
      <h1 className="mx-3 title">My Purchases</h1>
      <div className="row">
        <div className="col">
          <div className="mt-5  border rounded-3 shadow d-flex justify-content-center p-3">
            <h4 className="mb-0 mx-3 text-center">
              You purchased {productsOfUser.length} products
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
