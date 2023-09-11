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
    <div className="container-product-page container">
      <div className="row h-100">
        <div className="col-6 text-center">
          <div className="text-product-page d-flex flex-column justify-content-center align-items-center">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div>
              <h4>Detailed info:</h4>
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
            </div>
            <div className="d-flex justify-align-items align-items-center">
              <p className="m-0">US$ {product.price}</p>
              <button className="btn">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="one-product-background">
            <img
              className="product-in-background"
              src={product.image}
              alt={product.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
