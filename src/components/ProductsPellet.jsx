import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../redux/productSlice";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
import Footer from "./partials/Footer";
import { addItem } from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/ProductsOfCategory.css";
import "../styles/Products.css";

function ProductsList() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(false);
  const [firstCategory, setFirstCategory] = useState([]);
  const [aux, setAux] = useState(true);
  const port = import.meta.env.VITE_APP_PORT;

  useEffect(() => {
    const listProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:${port}/products`,
      });
      dispatch(getProducts(response.data));
    };
    listProducts();
    products.length == 0 && setAux(!aux);
    setFirstCategory(
      products.filter((product) => product.category.name == "pellet")
    );
  }, [aux]);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleAddItem = (item) => {
    const getOneProduct = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:${port}/products`,
      });
      dispatch(getProducts(response.data));
    };
    getOneProduct();
    const productFilter = products.filter((prod) => prod.id == item.id);
    const product = productFilter[0];
    if (product.stock > 0) {
      dispatch(
        addItem({
          id: product.id,
          image: product.image,
          name: product.name,
          price: product.price,
          quantity: 1,
          rating: [0],
          stock: product.stock,
          addMessage: "none",
        })
      );
      toast.success(`${product.name} successfully added to cart.`);
    } else {
      toast.error("This product is out of stock");
    }
  };

  function decoFilter() {
    const firstFilter = products.filter(
      (product) => product.category.name == "pellet"
    );
    setFirstCategory(firstFilter.filter((item) => item.name.includes("Deco")));
  }
  function aduroFilter() {
    const firstFilter = products.filter(
      (product) => product.category.name == "pellet"
    );
    setFirstCategory(firstFilter.filter((item) => item.name.includes("Aduro")));
  }
  function allFilter() {
    setFirstCategory(
      products.filter((product) => product.category.name == "pellet")
    );
  }
  return (
    <div>
      <div className="banner-pellet-stoves d-none d-sm-flex align-items-center">
        <h1
          className={`banner-wood-text-title mb-3 me-2 ${
            animate ? "animate-from-left" : ""
          }`}
        >
          PELLET STOVES
        </h1>
        <p
          className={`banner-wood-text-paragraph ${
            animate ? "animate-from-right" : ""
          }`}
        >
          For Drachen, heating is more than just a practical or aesthetic
          matter. We see our stoves as innovative pieces of forniture that suit
          a modern lifestyle.
        </p>
      </div>
      <div className="d-flex filter-wood justify-content-center align-items-center pt-5 pb-2">
        <h4 className="mx-4 mb-0">Filter by model:</h4>
        <div>
          <button className="filter-button">
            <h5 className="mb-0 mx-3 filter-word" onClick={() => decoFilter()}>
              Deco
            </h5>
          </button>
        </div>
        <div>
          <button className="filter-button">
            <h5 className="mb-0 mx-3 filter-word" onClick={() => aduroFilter()}>
              Aduro
            </h5>
          </button>
        </div>
        <div>
          <button className="filter-button">
            <h5 className="mb-0 mx-3 filter-word" onClick={() => allFilter()}>
              All
            </h5>
          </button>
        </div>
      </div>
      <div className="container">
        <div className="text-center d-block d-sm-none">
          <h2 className="alt-title-wood mt-5">PELLET STOVES</h2>
          <hr className="hr-wood" />
        </div>

        <div className="row">
          {firstCategory.map((product, id = product.id) => (
            <div
              className="col-lg-4 product-wood col-md-4 col-sm-6 col-12 g-5 mt-5  "
              key={id}
            >
              <div className=" mx-3  bg-white">
                <Link
                  className=" image-product-pellet d-flex justify-content-center"
                  to={`/products/${product.id}`}
                >
                  <img
                    className="text-center"
                    src={product.image}
                    alt={product.name}
                  />
                </Link>
              </div>
              <Link
                className="pt-1 link-product-wood"
                style={{ color: "black" }}
                to={`/products/${product.id}`}
              >
                <h6 className="text-center">
                  {product.name} - {product.otherProperties.nominalPower}KW
                </h6>
              </Link>
              <div className="discover-section-container d-flex justify-content-center">
                <div className="discover-section">
                  <div className="d-flex flex-column justify-content-around align-items-center">
                    <hr className="hr-product-wood-top" />
                    <div className="d-flex justify-content-center align-items-center my-3 p-sizes-product">
                      <p className="text-center mx-2 mb-0">
                        H: {product.otherProperties.height}
                      </p>
                      <p className="text-center mx-2 mb-0">
                        {" "}
                        W: {product.otherProperties.width}
                      </p>
                      <p className="text-center mx-2 mb-0">
                        {" "}
                        D: {product.otherProperties.depth}
                      </p>
                    </div>
                    <hr className="hr-product-wood-top mb-1" />
                  </div>

                  <div className="d-flex justify-content-center mt-2">
                    <Link
                      className="pt-2 link-product-wood "
                      to={`/products/${product.id}`}
                    ></Link>
                    <button
                      className="btn btn-light btn-addcart-products"
                      onClick={() => handleAddItem(product)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}
export default ProductsList;
