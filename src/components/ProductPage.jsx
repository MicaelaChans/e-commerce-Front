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
      <div className="row">
        <div className="col-10">
          <div className="row container">
            <div className="col-5">
              <div className="left-column-product pt-5">
                <img
                  className="img-product-page"
                  src={product.image}
                  alt={product.name}
                />
                <button className="btn-product-page fw-semibold">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="col-7 pe-5 pt-5">
              <h3>{product.name}</h3>
              <div className="d-flex align-items-center">
                <p className="m-0 me-3">Description</p>
                <div className="line-description-product border-bottom w-100"></div>
              </div>
              <p>{product.description}</p>
              <div className="d-flex align-items-center">
                <p className="m-0 me-3">Size</p>
                <div className="line-description-product border-bottom w-100"></div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <p className="fw-semibold me-1">Height:</p>
                  {/* <p>{product.otherProperties.height}</p> */}
                </div>
                <div className="d-flex">
                  <p className="fw-semibold me-1">Width:</p>
                  {/* <p>{product.otherProperties.width}</p> */}
                </div>
                <div className="d-flex">
                  <p className="fw-semibold me-1">Depth:</p>
                  {/* <p>{product.otherProperties.depth}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 pt-5 border-start right-column-product">
          <div className="details-right-column-product d-flex">
            <div className="m-2">
              <h5 className="text-uppercase">{product.name}</h5>
              <p className="fw-semibold">US$ {product.price}</p>
            </div>
            <img
              className="image-right-column-product"
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
