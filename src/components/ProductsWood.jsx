import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProducts } from "../redux/productSlice";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
import Footer from "./partials/Footer";
import { addItem } from "../redux/cartSlice";
import "../styles/ProductsOfCategory.css";
import "../styles/Products.css";

function ProductsList() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(false);
  const [firstCategory, setFirstCategory] = useState([]);

  useEffect(() => {
    const listProducts = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/products",
      });
      dispatch(getProducts(response.data));
    };
    listProducts();
    setFirstCategory(products.filter(
      (product) => product.category.name == "wood"
    ));
  }, []);
  
  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleAddItem = (item) => {
    dispatch(
      addItem({
        id: item.id,
        image: item.image,
        name: item.name,
        price: item.price,
      })
    );
  };
  function harmonyFilter(){
    setFirstCategory(products.filter(
      (product) => product.category.name == "wood"
    ));
    setFirstCategory(firstCategory.filter((item)=>item.name.includes("Harmony")));
  }
  function boxFilter(){
     setFirstCategory(products.filter(
      (product) => product.category.name == "wood"
    ));
  setFirstCategory(firstCategory.filter((item)=>item.name.includes("Box")));
  }
  function allFilter(){
    setFirstCategory(products.filter(
      (product) => product.category.name == "wood"
    ));
  }

  return (
    <div>
      <div className="banner-wood-stoves d-none d-sm-flex align-items-center">
        <h1
          className={`banner-wood-text-title mb-3 me-2 ${
            animate ? "animate-from-left" : ""
          }`}
        >
          WOOD STOVES
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
      <div className="d-flex justify-content-center align-items-center py-4 bg-light">
          <h4 className="mx-4">Filter by model:</h4>    
          <button className="btn btn-light shadow btn-lg mx-4" onClick={()=>harmonyFilter()}>Harmony</button>
          <button className="btn btn-light shadow btn-lg mx-4" onClick={()=>boxFilter()}>Box</button>
          <button className="btn btn-light shadow btn-lg mx-4" onClick={()=>allFilter()}>All products</button>
      </div>
      <div className="container">
        <div className="text-center mt-5 d-block d-sm-none">
          <h2 className="alt-title-wood">WOOD STOVES</h2>
          <hr className="hr-wood" />
        </div>
        
        <div className="row mb-5">
          {firstCategory.map((product, id = product.id) => (
            <div
              className="col-lg-4 product-wood col-md-4 col-sm-6 col-12 g-5"
              key={id}
            >
              <div className="mt-sm-4  mx-3  bg-white">
                <Link
                  className=" image-product-wood d-flex justify-content-center"
                  to={`/products/${product.id}`}
                >
                  <img
                    className="image-product-wood text-center"
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
                <h5 className="text-center mt-2">
                  {product.name} - {product.otherProperties.nominalPower}KW
                </h5>
              </Link>
              <div className="discover-section-container d-flex justify-content-center">
                <div className="discover-section">
                  <hr className="hr-product-wood-top" style={{}} />
                  <div className=" justify-content-center align-items-center p-sizes-product">
                    <p className="text-center mx-2">
                      H: {product.otherProperties.height}
                    </p>
                    <p className="text-center mx-2 ">
                      {" "}
                      W: {product.otherProperties.width}
                    </p>
                    <p className="text-center mx-2">
                      {" "}
                      D: {product.otherProperties.depth}
                    </p>
                  </div>
                  <hr className="hr-product-wood-top mb-1" />
                  <div className="d-flex justify-content-center">
                    <Link
                      className="pt-2 link-product-wood "
                      to={`/products/${product.id}`}
                    ></Link>
                    <button
                      className="btn btn-light shadow"
                      style={{
                        backgroundColor: "#f9b468",
                        color: "white",
                        fontWeight: "600",
                      }}
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
      <Footer />
    </div>
  );
}
export default ProductsList;
