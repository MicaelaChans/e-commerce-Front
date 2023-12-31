import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/productSlice";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ProductsList() {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const listProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${apiUrl}/products`,
      });
      dispatch(getProducts(response.data));
    };
    listProducts();
  }, []);
  const firstCategory = products.filter(
    (product) => product.category.name == "wood"
  );
  const secondCategory = products.filter(
    (product) => product.category.name == "pellet"
  );
  const thirdCategory = products.filter(
    (product) => product.category.name == "accessories"
  );

  return (
    <div className="container">
      <div className="row my-5">
        <h2>Wood stoves</h2>
        <Carousel responsive={responsive}>
          {firstCategory.map((product, id = product.id) => (
            <div key={id}>
              <div className="mt-4 border rounded-3 mx-3 p-4 bg-white shadow card-product">
                <img
                  className="image-product"
                  src={product.image}
                  alt={product.name}
                />
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-secondary link-product"
                >
                  Go to page
                </Link>
              </div>
              <h5 className="text-center mt-2">
                {product.name} - {product.otherProperties.nominalPower}KW
              </h5>
              <hr className="hr-product mt-3" />
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
            </div>
          ))}
        </Carousel>
      </div>
      <div className="row my-5">
        <h2>Pellet stoves</h2>
        <Carousel responsive={responsive}>
          {secondCategory.map((product, id = product.id) => (
            <div key={id}>
              <div className="mt-4 border rounded-3 mx-3 p-4 bg-white shadow card-product">
                <img
                  className="image-product"
                  src={product.image}
                  alt={product.name}
                />
                <Link className="btn btn-secondary link-product">
                  Go to page
                </Link>
              </div>
              <h5 className="text-center mt-2">
                {product.name} - {product.otherProperties.nominalPower}KW
              </h5>
              <hr className="hr-product mt-3" />
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
            </div>
          ))}
        </Carousel>
      </div>
      <div className="row my-5">
        <h2>Accesories</h2>
        <Carousel responsive={responsive}>
          {thirdCategory.map((product, id = product.id) => (
            <div key={id}>
              <div className="mt-4 border rounded-3 mx-3 p-4 bg-white shadow card-product">
                <img
                  className="image-product"
                  src={product.image}
                  alt={product.name}
                />
                <Link className="btn btn-secondary link-product">
                  Go to page
                </Link>
              </div>
              <h5 className="text-center mt-2">{product.name}</h5>
              <hr className="hr-product mt-3" />
              <div className="d-flex justify-content-center mt-3 p-sizes-product">
                <p className="text-center mx-2">{product.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
export default ProductsList;
