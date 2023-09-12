import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/productSlice";
import { useParams } from "react-router-dom";

function ProductPage() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  const params = useParams();

  useEffect(() => {
    const getOneProduct = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/products/${params.id}`,
      });
      dispatch(getProduct(response.data));
    };
    getOneProduct();
  }, []);

  return (
    <div className="container-product-page container d-flex flex-column justify-content-center align-items-center">
      <div className="row shadow rounded-2">
        <div className="col-6 rounded-start p-0">
          <div className="one-product-background rounded-start">
            <img
              className="product-in-background"
              src={product.image}
              alt={product.name}
            />
          </div>
        </div>
        <div className="col-6 text-center">
          <div className="text-product-page d-flex flex-column justify-content-evenly align-items-center">
            <h2 className="m-0">{product.name}</h2>
            <p className="m-0 description-product-page">
              {product.description}
            </p>
            {/* <div>
              <h5>Detailed info:</h5>
              <li className="list-group">
                <ul className="m-0 list-group-item">
                  Height: {product.otherProperties.height}
                </ul>
                <ul className="m-0 list-group-item">
                  Width: {product.otherProperties.width}
                </ul>
                <ul className="m-0 list-group-item">
                  Depth: {product.otherProperties.depth}
                </ul>
                <ul className="m-0 list-group-item">
                  Nominal Power: {product.otherProperties.nominalPower}
                </ul>
                <ul className="m-0 list-group-item">
                  Efficiency: {product.otherProperties.eficiency}
                </ul>
                <ul className="m-0 list-group-item">
                  Consumption: {product.otherProperties.consumption}
                </ul>
              </li>
            </div> */}
            <div className="d-flex justify-align-items align-items-center">
              <p className="m-0 me-3 fs-4">US$ {product.price}</p>
              <button className="btn buy-button border-0 text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 d-flex">
        <div className="circle-selected mx-2"></div>
        <div className="circle-no-selected mx-2"></div>
        <div className="circle-no-selected mx-2"></div>
      </div>
    </div>
  );
}

export default ProductPage;
