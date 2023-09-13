import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProducts } from "../redux/productSlice";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";

function ProductsList() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const listProducts = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/products",
      });
      dispatch(getProducts(response.data));
    };
    listProducts();
  }, []);
  const firstCategory = products.filter(
    (product) => product.category.name == "wood"
  );

  return (
    <div>
    <div className="banner-wood-stoves d-none d-sm-flex align-items-center">
        <h2 className="banner-wood-text-title mb-3">WOOD STOVES</h2>
        <p className="banner-wood-text-paragraph">For Drachen, heating is more than just a practical or aesthetic matter. We see our stoves as innovative pieces of forniture that suit a modern lifestyle.</p>
    </div>
    <div className="container">
      <div className="row">       
        {firstCategory.map((product, id = product.id) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 g-5" key={id}>
              <div className="mt-4  mx-3 d-flex justify-content-center  bg-white">
                <img
                  className="image-product-wood"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <h5 className="text-center mt-2">
                {product.name} - {product.otherProperties.nominalPower}KW
              </h5>
              <hr className="hr-product-wood mt-3" />
              <div className="d-flex justify-content-center mt-3 p-sizes-product">
                <p className="text-center mx-2">
                  Height: {product.otherProperties.height}
                </p>
                <p className="text-center mx-2 ">
                  {" "}
                  Width: {product.otherProperties.width}
                </p>
                <p className="text-center mx-2">
                  {" "}
                  Depth: {product.otherProperties.depth}
                </p>
              </div>
              <Link
                  to={`/products/${product.id}`}
                  className="btn btn-secondary "
                >
                  Go to page
                </Link>
            </div>
          ))}
         
      </div>
      </div>
    </div>
  );
}
export default ProductsList;
